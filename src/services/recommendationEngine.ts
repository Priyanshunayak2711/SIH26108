import {
  IndianStandard,
  ProcurementAnalysisRequest,
  RecommendationResult,
  AnalysisSummary,
  ScoreBreakdown
} from '../types/standards';
import { CURATED_STANDARDS } from '../data/standardsDataset';

export interface IRecommendationService {
  analyzeSpecification(request: ProcurementAnalysisRequest): Promise<{
    results: RecommendationResult[];
    summary: AnalysisSummary;
  }>;
}

export class ClientRecommendationEngine implements IRecommendationService {
  private standards: IndianStandard[];

  constructor(standardsDataset: IndianStandard[] = CURATED_STANDARDS) {
    this.standards = standardsDataset;
  }

  public async analyzeSpecification(request: ProcurementAnalysisRequest): Promise<{
    results: RecommendationResult[];
    summary: AnalysisSummary;
  }> {
    const startTime = performance.now();
    const rawText = request.specificationText || '';
    const cleanText = rawText.toLowerCase();

    // 1. Tokenization & Token extraction
    const tokens = this.tokenize(cleanText);

    // 2. Identify candidate standards with multi-factor scoring
    const scoredCandidates: RecommendationResult[] = [];

    for (const std of this.standards) {
      const scoring = this.calculateStandardRelevance(std, cleanText, tokens, request);

      if (scoring.relevanceScore > 20) {
        scoredCandidates.push(scoring);
      }
    }

    // 3. Resolve Normative & Allied references for top matched standards
    const resolvedResults = this.resolveNormativeReferences(scoredCandidates);

    // 4. Sort by relevance descending, prioritizing Primary Mandatory & Primary Applicable
    resolvedResults.sort((a, b) => {
      // Primary tier boost
      const tierRank: Record<string, number> = {
        'Primary Mandatory': 4,
        'Primary Applicable': 3,
        'Normative / Test Standard': 2,
        'Allied Reference': 1
      };
      const tierDiff = tierRank[b.recommendationTier] - tierRank[a.recommendationTier];
      if (tierDiff !== 0) return tierDiff;
      return b.relevanceScore - a.relevanceScore;
    });

    // 5. Build summary metrics
    const endTime = performance.now();
    const duration = Math.round(endTime - startTime);

    const primaryMandatory = resolvedResults.filter(r => r.recommendationTier === 'Primary Mandatory').length;
    const normativeCount = resolvedResults.filter(r => r.recommendationTier === 'Normative / Test Standard' || r.recommendationTier === 'Allied Reference').length;
    const avgScore = resolvedResults.length > 0
      ? Math.round(resolvedResults.reduce((acc, cur) => acc + cur.relevanceScore, 0) / resolvedResults.length)
      : 0;

    // Extract notable technical parameters recognized in text
    const extractedParams = this.extractRecognizedParameters(cleanText);

    const summary: AnalysisSummary = {
      totalAnalyzed: this.standards.length,
      totalRecommended: resolvedResults.length,
      primaryMandatoryCount: primaryMandatory,
      normativeReferencesCount: normativeCount,
      averageConfidence: avgScore,
      identifiedCategory: request.categoryHint && request.categoryHint !== 'All Categories'
        ? request.categoryHint
        : this.inferPrimaryCategory(resolvedResults),
      extractedParameters: extractedParams,
      processingDurationMs: duration
    };

    return {
      results: resolvedResults,
      summary
    };
  }

  private tokenize(text: string): string[] {
    return text
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .map(t => t.trim())
      .filter(t => t.length > 2);
  }

  private calculateStandardRelevance(
    std: IndianStandard,
    fullText: string,
    tokens: string[],
    request: ProcurementAnalysisRequest
  ): RecommendationResult {
    let keywordScore = 0;
    let semanticScore = 0;
    let attributeScore = 0;
    let qcoBoost = 0;

    const matchedKeywords: string[] = [];
    const matchedParameters: string[] = [];

    // Direct IS Code check (e.g. "IS 1786" or "1786")
    const codePure = std.code.toLowerCase();
    const codeNum = codePure.replace('is', '').trim();
    if (fullText.includes(codePure) || (codeNum.length >= 3 && fullText.includes(`is ${codeNum}`))) {
      keywordScore += 45;
      matchedKeywords.push(std.code);
    }

    // Keyword matching
    for (const kw of std.keywords) {
      const kwLower = kw.toLowerCase();
      if (fullText.includes(kwLower)) {
        keywordScore += 15;
        if (!matchedKeywords.includes(kw)) {
          matchedKeywords.push(kw);
        }
      }
    }

    // Title & Scope semantic tokens overlap
    const titleTokens = this.tokenize(std.title.toLowerCase());
    let titleTokenHits = 0;
    for (const t of titleTokens) {
      if (tokens.includes(t)) {
        titleTokenHits++;
      }
    }
    semanticScore += Math.min(35, titleTokenHits * 5);

    // Key Parameters matching
    for (const param of std.keyParametersTested) {
      const paramLower = param.toLowerCase();
      // Test key engineering tokens like "yield stress", "elongation", "hydrostatic", "carbon black", "mfr", "ip66", "surge"
      const paramParts = paramLower.split(/[\(\),;:]/).map(p => p.trim()).filter(p => p.length > 3);
      for (const part of paramParts) {
        if (fullText.includes(part) && !matchedParameters.includes(part)) {
          attributeScore += 12;
          matchedParameters.push(part);
        }
      }
    }

    // Category affinity
    if (request.categoryHint && request.categoryHint !== 'All Categories') {
      if (std.category === request.categoryHint) {
        semanticScore += 15;
      } else {
        semanticScore -= 10;
      }
    }

    // QCO Mandatory weight
    if (std.qco.isMandatory) {
      qcoBoost += 15;
      if (fullText.includes('qco') || fullText.includes('mandatory') || fullText.includes('isi mark') || fullText.includes('bis certification')) {
        qcoBoost += 10;
      }
    }

    // Normalize component scores to 0-100 scales
    const finalKw = Math.min(100, Math.round(keywordScore * 1.5));
    const finalSem = Math.min(100, Math.round(semanticScore * 2.0));
    const finalAttr = Math.min(100, Math.round(attributeScore * 1.8));
    const finalQco = std.qco.isMandatory ? Math.min(100, 60 + qcoBoost) : 20;

    // Weighted Overall Formula:
    // 35% Keyword Overlap + 30% Parameter Alignment + 20% Semantic Relevance + 15% QCO Enforcement
    let overallScore = Math.round(
      finalKw * 0.35 +
      finalAttr * 0.30 +
      finalSem * 0.20 +
      finalQco * 0.15
    );

    // Clamp score
    overallScore = Math.max(0, Math.min(99, overallScore));

    // Determine tier
    let tier: RecommendationResult['recommendationTier'] = 'Primary Applicable';
    if (std.qco.isMandatory && overallScore >= 45) {
      tier = 'Primary Mandatory';
    } else if (std.standardType === 'Test Method / Code of Practice') {
      tier = 'Normative / Test Standard';
    }

    // Compose explainability reasoning
    const matchReason = this.buildExplanationReason(std, matchedKeywords, matchedParameters, overallScore);
    const evidenceSnippet = this.extractEvidenceSnippet(fullText, matchedKeywords, matchedParameters);

    const breakdown: ScoreBreakdown = {
      keywordMatch: finalKw,
      semanticRelevance: finalSem,
      attributeAlignment: finalAttr,
      qcoWeight: finalQco
    };

    return {
      standard: std,
      relevanceScore: overallScore,
      scoreBreakdown: breakdown,
      matchReason,
      matchedKeywords,
      matchedParameters,
      evidenceSnippet,
      recommendationTier: tier
    };
  }

  private resolveNormativeReferences(primaryMatches: RecommendationResult[]): RecommendationResult[] {
    const resultsMap = new Map<string, RecommendationResult>();

    // Add all direct scored candidates
    for (const match of primaryMatches) {
      resultsMap.set(match.standard.id, match);
    }

    // Check normative references of top 3 primary matches
    const topPrimary = primaryMatches.slice(0, 3);
    for (const primary of topPrimary) {
      for (const normRef of primary.standard.normativeReferences) {
        // Check if this normative standard already exists in our dataset
        const existingInDataset = this.standards.find(s => s.id.startsWith(normRef.standardId.split(' ')[0]));

        if (existingInDataset && !resultsMap.has(existingInDataset.id)) {
          // Add as a linked Normative Standard
          const normScore = Math.max(35, Math.round(primary.relevanceScore * 0.75));
          resultsMap.set(existingInDataset.id, {
            standard: existingInDataset,
            relevanceScore: normScore,
            scoreBreakdown: {
              keywordMatch: 50,
              semanticRelevance: 70,
              attributeAlignment: 65,
              qcoWeight: existingInDataset.qco.isMandatory ? 80 : 30
            },
            matchReason: `Normatively cited by primary standard ${primary.standard.code} for mandatory ${normRef.relationType.toLowerCase()} verification (${normRef.title}).`,
            matchedKeywords: [`Cited by ${primary.standard.code}`, normRef.relationType],
            matchedParameters: [normRef.description],
            evidenceSnippet: `Mandatory clause in ${primary.standard.id}: "${normRef.description}"`,
            recommendationTier: 'Normative / Test Standard'
          });
        }
      }
    }

    return Array.from(resultsMap.values());
  }

  private buildExplanationReason(
    std: IndianStandard,
    keywords: string[],
    params: string[],
    score: number
  ): string {
    const parts: string[] = [];

    if (keywords.length > 0) {
      parts.push(`Matches procurement domain keywords [${keywords.slice(0, 3).join(', ')}]`);
    }

    if (params.length > 0) {
      parts.push(`Satisfies technical parameters for ${params.slice(0, 2).join(' and ')}`);
    }

    if (std.qco.isMandatory) {
      parts.push(`Legally mandated under Government of India ${std.qco.orderName || 'Quality Control Order'}`);
    } else {
      parts.push(`Conforms to governing BIS specifications for ${std.standardType.toLowerCase()}`);
    }

    if (parts.length === 0) {
      return `Identified via general contextual alignment with ${std.category} procurement specifications (${score}% match).`;
    }

    return parts.join('. ') + '.';
  }

  private extractEvidenceSnippet(fullText: string, keywords: string[], params: string[]): string {
    const allMatches = [...keywords, ...params].filter(k => k.length > 2);
    if (allMatches.length === 0 || !fullText) {
      return fullText.slice(0, 180) + '...';
    }

    // Find the first occurrence of any match in the text
    let earliestIndex = -1;
    let matchedWord = '';
    for (const match of allMatches) {
      const idx = fullText.toLowerCase().indexOf(match.toLowerCase());
      if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
        earliestIndex = idx;
        matchedWord = match;
      }
    }

    if (earliestIndex === -1) {
      return fullText.slice(0, 180) + '...';
    }

    const start = Math.max(0, earliestIndex - 50);
    const end = Math.min(fullText.length, earliestIndex + 130);
    const snippet = (start > 0 ? '...' : '') + fullText.substring(start, end).trim() + (end < fullText.length ? '...' : '');

    return snippet;
  }

  private extractRecognizedParameters(cleanText: string): string[] {
    const recognized: string[] = [];
    const candidates = [
      'fe 500d', 'fe 550', 'pe 100', 'pn 10', 'pn 16', 'ip66', 'ip65', 'ffp2', 'n95',
      'hydrostatic pressure', 'yield strength', 'proof stress', 'carbon black',
      'total elongation', 'thd < 10%', 'power factor', 'rideal-walker', 'aql 1.5'
    ];

    for (const c of candidates) {
      if (cleanText.includes(c)) {
        recognized.push(c.toUpperCase());
      }
    }

    return recognized;
  }

  private inferPrimaryCategory(results: RecommendationResult[]): string {
    if (results.length === 0) return 'General Procurement';
    const topResult = results[0];
    return topResult.standard.category;
  }
}

// Singleton instance ready for React components
export const recommendationService = new ClientRecommendationEngine();
