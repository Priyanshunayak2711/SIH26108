import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  Download,
  Filter,
  ArrowLeft,
  CheckCircle,
  FileSpreadsheet,
  AlertTriangle,
  Scale,
  Sparkles,
  Search
} from 'lucide-react';
import { RecommendationResult, AnalysisSummary, StandardCategory } from '../types/standards';
import { StandardCard } from './StandardCard';

interface ResultsSectionProps {
  results: RecommendationResult[];
  summary: AnalysisSummary;
  onBackToInput: () => void;
  onOpenComplianceMatrix: () => void;
  onOpenKnowledgeBase: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  results,
  summary,
  onBackToInput,
  onOpenComplianceMatrix,
  onOpenKnowledgeBase
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tierFilter, setTierFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Filter logic
  const filteredResults = useMemo(() => {
    return results.filter(item => {
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchCode = item.standard.id.toLowerCase().includes(q);
        const matchTitle = item.standard.title.toLowerCase().includes(q);
        const matchKw = item.matchedKeywords.some(k => k.toLowerCase().includes(q));
        if (!matchCode && !matchTitle && !matchKw) return false;
      }

      // Tier filter
      if (tierFilter === 'Mandatory') {
        if (!item.standard.qco.isMandatory) return false;
      } else if (tierFilter === 'Primary') {
        if (item.recommendationTier !== 'Primary Mandatory' && item.recommendationTier !== 'Primary Applicable') return false;
      } else if (tierFilter === 'Normative') {
        if (item.recommendationTier !== 'Normative / Test Standard' && item.recommendationTier !== 'Allied Reference') return false;
      }

      // Category filter
      if (categoryFilter !== 'All') {
        if (item.standard.category !== categoryFilter) return false;
      }

      return true;
    });
  }, [results, searchQuery, tierFilter, categoryFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <button
            onClick={onBackToInput}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gov-800 hover:text-gov-900 mb-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Modify Specification / New Analysis</span>
          </button>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Procurement Standards Compliance Dossier
            </h2>
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1" /> Analysis Complete
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Detected domain: <strong className="text-slate-700">{summary.identifiedCategory}</strong> · Processed in {summary.processingDurationMs}ms
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenComplianceMatrix}
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg text-xs font-bold shadow-xs transition"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>View Compliance Matrix</span>
          </button>

          <button
            onClick={onOpenComplianceMatrix}
            className="inline-flex items-center space-x-2 px-4 py-2.5 bg-gov-800 hover:bg-gov-900 text-white rounded-lg text-xs font-bold shadow-xs transition"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Export Tender Checklist</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Standards */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Total Standards
          </div>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">
            {summary.totalRecommended}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Out of {summary.totalAnalyzed} knowledge base standards
          </div>
        </div>

        {/* Mandatory QCO Standards */}
        <div className="bg-white border border-amber-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center">
            <Scale className="w-3.5 h-3.5 mr-1 text-amber-600" /> Mandatory QCOs
          </div>
          <div className="text-2xl font-extrabold text-amber-900 mt-1">
            {summary.primaryMandatoryCount}
          </div>
          <div className="text-[11px] text-amber-700 mt-0.5">
            Requires compulsory ISI Certification
          </div>
        </div>

        {/* Normative & Test References */}
        <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold text-purple-800 uppercase tracking-wider">
            Normative References
          </div>
          <div className="text-2xl font-extrabold text-purple-900 mt-1">
            {summary.normativeReferencesCount}
          </div>
          <div className="text-[11px] text-purple-700 mt-0.5">
            Linked testing standards & allied codes
          </div>
        </div>

        {/* Avg Confidence */}
        <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-xs">
          <div className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-blue-600" /> Avg Confidence
          </div>
          <div className="text-2xl font-extrabold text-blue-900 mt-1">
            {summary.averageConfidence}%
          </div>
          <div className="text-[11px] text-blue-700 mt-0.5">
            Multi-factor parameter match rating
          </div>
        </div>
      </div>

      {/* Extracted Specification Entities Pill Bar */}
      {summary.extractedParameters.length > 0 && (
        <div className="bg-slate-100/80 border border-slate-200 rounded-lg p-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-bold text-slate-700">Identified Specification Parameters:</span>
          {summary.extractedParameters.map((param, idx) => (
            <span key={idx} className="bg-white text-slate-800 border border-slate-300 font-mono font-semibold px-2 py-0.5 rounded text-[11px]">
              {param}
            </span>
          ))}
        </div>
      )}

      {/* Filter & Search Toolbar */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by IS Code, Keyword, or Title..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-gov-600"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>

          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="text-xs bg-white border border-slate-300 rounded-md px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-gov-600"
          >
            <option value="All">All Compliance Tiers</option>
            <option value="Mandatory">Mandatory QCO Only</option>
            <option value="Primary">Primary Applicable</option>
            <option value="Normative">Normative / Test Standards</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-white border border-slate-300 rounded-md px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-gov-600"
          >
            <option value="All">All Sectors</option>
            <option value="Civil & Infrastructure">Civil & Infrastructure</option>
            <option value="Water & Sanitation">Water & Sanitation</option>
            <option value="Electrical & Electronics">Electrical & Electronics</option>
            <option value="Mechanical & Fire Safety">Mechanical & Fire Safety</option>
            <option value="Healthcare & Medical">Healthcare & Medical</option>
          </select>

          {(searchQuery || tierFilter !== 'All' || categoryFilter !== 'All') && (
            <button
              onClick={() => { setSearchQuery(''); setTierFilter('All'); setCategoryFilter('All'); }}
              className="text-xs text-blue-700 hover:underline font-medium px-1"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {filteredResults.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <ShieldAlert className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No standards match the active filter criteria</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or reset the sector and compliance tier filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setTierFilter('All'); setCategoryFilter('All'); }}
              className="mt-4 px-4 py-2 bg-gov-800 text-white rounded-md text-xs font-bold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredResults.map((result) => (
            <StandardCard key={result.standard.id} result={result} />
          ))
        )}
      </div>

      {/* Prominent Human Verification Notice */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-gov-800">
            <AlertTriangle className="w-5 h-5 text-gov-800" />
          </div>
          <div className="flex-1 text-xs">
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Statutory Procurement Scrutiny & Human Verification Notice
            </h4>
            <p className="text-slate-700 leading-relaxed">
              This recommendation dossier is generated algorithmically for <strong>decision support</strong> under <strong>Smart India Hackathon 2026 (Problem Statement: SIH26108)</strong>.
              While high-confidence semantic and parameter alignments are mapped, procurement officers and Technical Evaluation Committees (TEC) <strong>must verify all IS codes, latest amendments, and Quality Control Orders against the official Bureau of Indian Standards portal</strong> (<a href="https://www.standardsbis.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">www.standardsbis.in</a>) and relevant Gazette of India notifications prior to issuing tender documents or awarding contracts.
            </p>
            <div className="mt-2.5 flex items-center space-x-3">
              <button
                onClick={onOpenKnowledgeBase}
                className="font-bold text-gov-800 underline hover:text-gov-900"
              >
                Inspect Demo Knowledge Base Scope & Methodology →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
