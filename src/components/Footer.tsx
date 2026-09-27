import React from 'react';
import { ShieldCheck, ExternalLink, Award, FileText } from 'lucide-react';

interface FooterProps {
  onOpenKnowledgeBase: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenKnowledgeBase }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          {/* Col 1: Brand & Problem */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base tracking-tight">StandardSetu AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Automated recommendation engine for identifying applicable Indian Standards (BIS) and mandatory Quality Control Orders in public procurement.
            </p>
            <div className="flex items-center space-x-2 text-slate-300 font-semibold text-xs">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Smart India Hackathon 2026 · Problem ID: SIH26108</span>
            </div>
          </div>

          {/* Col 2: Hackathon Details */}
          <div className="space-y-2">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">
              Project Specification
            </div>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li><strong className="text-slate-300">Team:</strong> CodeForge</li>
              <li><strong className="text-slate-300">Theme:</strong> Smart Automation</li>
              <li><strong className="text-slate-300">Category:</strong> Software</li>
              <li><strong className="text-slate-300">Deployment Target:</strong> GeM / CPWD / State Tender Portals</li>
            </ul>
          </div>

          {/* Col 3: Legal & External Links */}
          <div className="space-y-2">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-[11px]">
              Governance & Disclaimer
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Curated demo knowledge base for hackathon evaluation. Official Indian Standards must be purchased from www.standardsbis.in.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5">
              <button
                onClick={onOpenKnowledgeBase}
                className="text-blue-400 hover:text-blue-300 text-left underline flex items-center space-x-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Knowledge Base Scope & Methodology</span>
              </button>
              <a
                href="https://www.standardsbis.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline flex items-center space-x-1"
              >
                <span>Bureau of Indian Standards (BIS Official)</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © 2026 StandardSetu AI · Built by <strong>Team CodeForge</strong> for Smart India Hackathon 2026.
          </div>
          <div>
            MVP Prototype · Not an official Bureau of Indian Standards production portal.
          </div>
        </div>
      </div>
    </footer>
  );
};
