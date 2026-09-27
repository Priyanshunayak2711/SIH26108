import React from 'react';
import { AlertTriangle, CheckCircle2, FileCheck, Layers, Scale } from 'lucide-react';

interface HeroSectionProps {
  onOpenKnowledgeBase: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenKnowledgeBase }) => {
  return (
    <div className="bg-gradient-to-b from-gov-50 via-white to-slate-50 border-b border-slate-200 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Important Advisory Alert */}
        <div className="mb-6 bg-amber-50/90 border border-amber-300 rounded-lg p-3.5 sm:p-4 text-amber-950 text-xs sm:text-sm flex items-start space-x-3 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold text-amber-900">Prototype Disclaimer & Transparency Note: </span>
            <span>
              This system is an MVP prototype developed for <strong>Smart India Hackathon 2026 (Problem ID: SIH26108)</strong> by <strong>Team CodeForge</strong>.
              Recommendations are powered by a <strong>curated demo knowledge base</strong> and do not represent an exhaustive or live BIS database.
              AI outputs serve as <strong>decision support</strong> and mandatory standards must be verified by a qualified procurement or technical officer against official gazette notifications.
            </span>
            <button
              onClick={onOpenKnowledgeBase}
              className="ml-2 font-semibold text-amber-900 underline hover:text-amber-800"
            >
              Learn more about dataset scope
            </button>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-gov-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Automated Procurement Compliance · GeM & Tender Intelligence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Identify Applicable <span className="text-gov-800 underline decoration-blue-500 underline-offset-4">Indian Standards</span> for Procurement Specifications
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate non-compliance and tender rejection. Input raw product requirements or upload tender documents to automatically discover governing IS codes, testing procedures, and mandatory Quality Control Orders (QCOs).
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mx-auto mb-2 font-bold text-sm">
              <FileCheck className="w-4 h-4" />
            </div>
            <div className="font-bold text-slate-800 text-sm">Automated NER</div>
            <div className="text-xs text-slate-500 mt-0.5">Extracts grades, pressures, and materials</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-2 font-bold text-sm">
              <Scale className="w-4 h-4" />
            </div>
            <div className="font-bold text-slate-800 text-sm">QCO Mandate Check</div>
            <div className="text-xs text-slate-500 mt-0.5">Flags legally compulsory ISI mark orders</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mx-auto mb-2 font-bold text-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div className="font-bold text-slate-800 text-sm">Normative Resolution</div>
            <div className="text-xs text-slate-500 mt-0.5">Surfaces linked testing & allied codes</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5 text-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="font-bold text-slate-800 text-sm">Explainable AI</div>
            <div className="text-xs text-slate-500 mt-0.5">Direct clause & parameter citations</div>
          </div>
        </div>
      </div>
    </div>
  );
};
