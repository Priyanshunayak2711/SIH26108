export type StandardCategory =
  | 'Civil & Infrastructure'
  | 'Water & Sanitation'
  | 'Electrical & Electronics'
  | 'Mechanical & Fire Safety'
  | 'Healthcare & Medical'
  | 'General & Environmental';

export type StandardType =
  | 'Product Specification'
  | 'Test Method / Code of Practice'
  | 'Material Specification'
  | 'Safety & Installation Guide';

export interface NormativeReference {
  standardId: string;
  title: string;
  relationType: 'Normative Reference' | 'Test Method' | 'Allied Standard' | 'Packaging & Marking';
  description: string;
}

export interface QualityControlOrder {
  isMandatory: boolean;
  orderName?: string;
  gazetteRef?: string;
  enforcingMinistry?: string;
  isiMarkMandatory: boolean;
  effectiveDate?: string;
}

export interface IndianStandard {
  id: string; // e.g. "IS 1786 : 2008"
  code: string; // e.g. "IS 1786"
  year: number; // e.g. 2008
  title: string; // e.g. "High Strength Deformed Steel Bars and Wires for Concrete Reinforcement - Specification"
  hindiTitle?: string;
  category: StandardCategory;
  standardType: StandardType;
  reaffirmationYear?: number;
  amendmentsCount: number;
  latestAmendmentNote?: string;
  scope: string;
  keyParametersTested: string[];
  keywords: string[];
  normativeReferences: NormativeReference[];
  qco: QualityControlOrder;
  officialDocUrl: string;
}

export interface ScoreBreakdown {
  keywordMatch: number; // 0 - 100
  semanticRelevance: number; // 0 - 100
  attributeAlignment: number; // 0 - 100
  qcoWeight: number; // 0 - 100
}

export interface RecommendationResult {
  standard: IndianStandard;
  relevanceScore: number; // 0 - 100 overall percentage
  scoreBreakdown: ScoreBreakdown;
  matchReason: string;
  matchedKeywords: string[];
  matchedParameters: string[];
  evidenceSnippet: string;
  recommendationTier: 'Primary Mandatory' | 'Primary Applicable' | 'Normative / Test Standard' | 'Allied Reference';
}

export interface ProcurementAnalysisRequest {
  specificationText: string;
  categoryHint?: StandardCategory | 'All Categories';
  requireMandatoryOnly?: boolean;
  sourceDocName?: string;
}

export interface AnalysisSummary {
  totalAnalyzed: number;
  totalRecommended: number;
  primaryMandatoryCount: number;
  normativeReferencesCount: number;
  averageConfidence: number;
  identifiedCategory: string;
  extractedParameters: string[];
  processingDurationMs: number;
}

export interface SampleTender {
  id: string;
  title: string;
  shortDesc: string;
  category: StandardCategory;
  department: string;
  content: string;
  suggestedStandards: string[];
}
