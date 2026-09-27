import React, { useState } from 'react';
import {
  ExternalLink,
  Info,
  ChevronDown,
  ChevronUp,
  Check,
  Copy,
  AlertCircle,
  FileCheck2,
  BookmarkCheck,
  Scale
} from 'lucide-react';
import { RecommendationResult } from '../types/standards';

interface StandardCardProps {
  result: RecommendationResult;
}

export const StandardCard: React.FC<StandardCardProps> = ({ result }) => {
  const [showNormative, setShowNormative] = useState<boolean>(false);
  const [showScoreBreakdown, setShowScoreBreakdown] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const { standard, relevanceScore, scoreBreakdown, matchReason, evidenceSnippet, recommendationTier } = result;

  const handleCopyReference = () => {
    const textToCopy = `${standard.id} - ${standard.title}${standard.qco.isMandatory ? ' (Mandatory BIS Certification / ISI Mark under QCO)' : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Color scheme based on score & tier
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (score >= 60) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-slate-100 text-slate-800 border-slate-300';
  };

  const getTierBadge = (tier: RecommendationResult['recommendationTier']) => {
    switch (tier) {
      case 'Primary Mandatory':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <Scale className="w-3 h-3 text-amber-700" />
            <span>QCO Mandatory Standard</span>
          </span>
        );
      case 'Primary Applicable':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-300">
            <BookmarkCheck className="w-3 h-3 text-blue-700" />
            <span>Primary Applicable</span>
          </span>
        );
      case 'Normative / Test Standard':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-300">
            <FileCheck2 className="w-3 h-3 text-purple-700" />
            <span>Normative Test Standard</span>
          </span>
        );
      case 'Allied Reference':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">
            <span>Allied Code</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-gov-400 hover:shadow-md transition">
      {/* Top Banner / ID Header */}
      <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="bg-gov-800 text-white font-mono font-bold text-sm px-3 py-1 rounded shadow-xs">
            {standard.id}
          </div>
          {getTierBadge(recommendationTier)}
          <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
            {standard.category}
          </span>
        </div>

        {/* Score Pill & Breakdown Trigger */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <button
              onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
              className={`inline-flex items-center space-x-1 text-xs font-extrabold px-3 py-1 rounded-full border ${getScoreColor(relevanceScore)} cursor-pointer transition hover:opacity-90`}
              title="Click to view score breakdown"
            >
              <span>{relevanceScore}% Match</span>
              <Info className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Score Breakdown Popover */}
            {showScoreBreakdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-xl p-3 z-30 text-xs">
                <div className="font-bold text-slate-800 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span>Relevance Score Breakdown</span>
                  <button onClick={() => setShowScoreBreakdown(false)} className="text-slate-400 hover:text-slate-600">×</button>
                </div>
                <div className="space-y-2 mt-2">
                  <div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Keyword Match (35%)</span>
                      <span className="font-mono font-bold">{scoreBreakdown.keywordMatch}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-0.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${scoreBreakdown.keywordMatch}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Attribute Alignment (30%)</span>
                      <span className="font-mono font-bold">{scoreBreakdown.attributeAlignment}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-0.5">
                      <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: `${scoreBreakdown.attributeAlignment}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Semantic Relevance (20%)</span>
                      <span className="font-mono font-bold">{scoreBreakdown.semanticRelevance}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-0.5">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${scoreBreakdown.semanticRelevance}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>QCO Enforcement (15%)</span>
                      <span className="font-mono font-bold">{scoreBreakdown.qcoWeight}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-0.5">
                      <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: `${scoreBreakdown.qcoWeight}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {standard.title}
          </h3>
          {standard.hindiTitle && (
            <p className="text-xs text-slate-500 mt-1 font-medium font-sans">
              {standard.hindiTitle}
            </p>
          )}
        </div>

        {/* Explainability: Why Recommended */}
        <div className="bg-blue-50/70 border-l-4 border-gov-800 p-3.5 rounded-r-lg text-xs">
          <div className="font-bold text-gov-900 mb-1 flex items-center">
            <Info className="w-3.5 h-3.5 text-gov-800 mr-1.5 flex-shrink-0" />
            <span>Why Recommended:</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            {matchReason}
          </p>
          {result.matchedParameters.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] font-semibold text-slate-500">Matched Specifications:</span>
              {result.matchedParameters.map((param, idx) => (
                <span key={idx} className="bg-white text-blue-900 border border-blue-200 px-2 py-0.5 rounded text-[11px] font-medium font-mono">
                  {param}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Scope & Applicability */}
        <div>
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Scope & Applicability
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {standard.scope}
          </p>
        </div>

        {/* Key Parameters Tested */}
        {standard.keyParametersTested.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Governing Technical Parameters & Test Criteria
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {standard.keyParametersTested.map((testParam, idx) => (
                <div key={idx} className="text-xs text-slate-700 flex items-start space-x-1.5 bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="text-gov-700 font-bold">•</span>
                  <span>{testParam}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metadata Grid: Version, Amendments, QCO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Version & Amendments */}
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1">
            <div className="font-bold text-slate-800">Version & Amendment Status</div>
            <div className="text-slate-600">
              {standard.reaffirmationYear ? (
                <span>Reaffirmed: <strong>{standard.reaffirmationYear}</strong></span>
              ) : (
                <span>Published: <strong>{standard.year}</strong></span>
              )}
              <span className="mx-1.5 text-slate-300">|</span>
              <span>Amendments: <strong>{standard.amendmentsCount}</strong></span>
            </div>
            {standard.latestAmendmentNote && (
              <p className="text-[11px] text-slate-500 italic mt-0.5">
                Note: {standard.latestAmendmentNote}
              </p>
            )}
          </div>

          {/* QCO Regulatory Status */}
          <div className={`p-3 rounded-lg border text-xs space-y-1 ${
            standard.qco.isMandatory
              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <div className="font-bold flex items-center justify-between">
              <span>Quality Control Order (QCO)</span>
              {standard.qco.isMandatory ? (
                <span className="text-[10px] font-bold uppercase bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">
                  Legally Mandated
                </span>
              ) : (
                <span className="text-[10px] text-slate-500 uppercase">Voluntary Standard</span>
              )}
            </div>
            {standard.qco.isMandatory ? (
              <>
                <p className="font-medium text-amber-900 text-[11px]">
                  {standard.qco.orderName} ({standard.qco.gazetteRef})
                </p>
                <div className="text-[11px] text-amber-800">
                  Enforcing: <strong>{standard.qco.enforcingMinistry}</strong>
                </div>
              </>
            ) : (
              <p className="text-[11px] text-slate-500">
                Not covered under compulsory registration or mandatory ISI mark orders; recommended standard for quality compliance.
              </p>
            )}
          </div>
        </div>

        {/* Evidence / Source Snippet */}
        {evidenceSnippet && (
          <div className="text-xs bg-slate-50 p-3 rounded border border-dashed border-slate-300 text-slate-600">
            <span className="font-bold text-slate-700 block mb-0.5">Evidence from Procurement Specification:</span>
            <span className="italic font-mono text-[11px] text-slate-800 bg-white px-1.5 py-0.5 rounded border border-slate-200 block">
              "{evidenceSnippet}"
            </span>
          </div>
        )}

        {/* Expandable Normative & Allied References */}
        {standard.normativeReferences.length > 0 && (
          <div className="pt-2">
            <button
              onClick={() => setShowNormative(!showNormative)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-gov-800 py-2 border-t border-slate-200 transition"
            >
              <span>
                Normative & Allied References ({standard.normativeReferences.length} linked standards)
              </span>
              {showNormative ? (
                <ChevronUp className="w-4 h-4 text-slate-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {showNormative && (
              <div className="space-y-2 mt-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {standard.normativeReferences.map((ref, idx) => (
                  <div key={idx} className="text-xs bg-white p-2.5 rounded border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-gov-800">{ref.standardId}</span>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {ref.relationType}
                      </span>
                    </div>
                    <div className="font-medium text-slate-800 mt-0.5">{ref.title}</div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{ref.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2 text-slate-500">
          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
          <span>Requires Human Scrutiny by Technical Sanction Authority</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleCopyReference}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition font-medium shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy for Tender</span>
              </>
            )}
          </button>

          <a
            href={standard.officialDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-gov-800 hover:bg-gov-900 text-white font-medium transition shadow-xs"
          >
            <span>BIS Portal</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
