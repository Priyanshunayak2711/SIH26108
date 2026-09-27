import React from 'react';
import { ShieldCheck, BookOpen, ExternalLink, Award } from 'lucide-react';

interface HeaderProps {
  onOpenKnowledgeBase: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenKnowledgeBase, onReset }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Tricolor decorative top stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Gov Identity */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={onReset}>
            <div className="w-12 h-12 rounded-lg bg-gov-800 flex items-center justify-center text-white shadow-md border border-gov-700">
              <ShieldCheck className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tight text-gov-800">
                  Standard<span className="text-blue-600">Setu</span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                  AI Engine
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500">
                Decision Support for BIS Indian Standards & Public Procurement Compliance
              </p>
            </div>
          </div>

          {/* Hackathon Badge & Info Buttons */}
          <div className="flex items-center space-x-3">
            {/* SIH 2026 Metadata Tag */}
            <div className="hidden md:flex flex-col items-end border-r border-slate-200 pr-4">
              <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>SIH 2026</span>
                <span className="text-slate-300">|</span>
                <span className="text-blue-700 font-mono">SIH26108</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">
                Team CodeForge · Smart Automation
              </span>
            </div>

            {/* Knowledge Base Modal Trigger */}
            <button
              onClick={onOpenKnowledgeBase}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-2 rounded-md border border-slate-300 hover:border-gov-600 hover:text-gov-800 bg-white text-slate-700 transition shadow-sm"
              title="View Curated Standards Dataset & AI Methodology"
            >
              <BookOpen className="w-4 h-4 text-gov-700" />
              <span>Knowledge Base & Transparency</span>
            </button>

            {/* Official BIS Portal link */}
            <a
              href="https://www.standardsbis.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center space-x-1 text-xs font-medium text-slate-500 hover:text-gov-800 px-2.5 py-2"
            >
              <span>standardsbis.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
