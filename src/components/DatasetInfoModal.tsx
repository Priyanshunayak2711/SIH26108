import React from 'react';
import { X, BookOpen, AlertTriangle, ShieldCheck, Database, Layers, ArrowUpRight } from 'lucide-react';
import { CURATED_STANDARDS } from '../data/standardsDataset';

interface DatasetInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatasetInfoModal: React.FC<DatasetInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-300 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <BookOpen className="w-5 h-5 text-gov-800" />
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Knowledge Base Scope, Governance & Transparency
              </h3>
              <p className="text-xs text-slate-500">
                Smart India Hackathon 2026 · Problem ID: SIH26108 · Team CodeForge
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
          {/* Statutory Advisory Box */}
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg space-y-2">
            <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Mandatory Prototype Notice & Legal Disclaimer</span>
            </div>
            <ul className="space-y-1.5 text-amber-950 pl-5 list-disc text-xs">
              <li>
                <strong>Curated Demo Knowledge Base:</strong> This web application uses a curated repository of <strong>{CURATED_STANDARDS.length} realistic Indian Standards</strong> across core public procurement domains. It does <em>not</em> claim exhaustive coverage of all 22,000+ active BIS standards.
              </li>
              <li>
                <strong>No Live BIS Connection Claimed:</strong> The standards data in this prototype is locally curated from official BIS public gazettes and standards documents. It does not interface with a live, real-time BIS database server.
              </li>
              <li>
                <strong>Decision Support Only:</strong> AI recommendations do not replace statutory due diligence. All tender clauses, product standards, and QCO mandates must undergo formal human verification by authorized procurement and technical evaluation authorities.
              </li>
              <li>
                <strong>Official Standards Source:</strong> Official, authenticated copies of Indian Standards must be acquired directly from the official Bureau of Indian Standards portal (<a href="https://www.standardsbis.in" target="_blank" rel="noopener noreferrer" className="text-amber-900 underline font-semibold">www.standardsbis.in</a>).
              </li>
            </ul>
          </div>

          {/* Core Technical Architecture */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center">
              <Database className="w-4 h-4 text-gov-800 mr-1.5" />
              Recommendation Engine Architecture
            </h4>
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2">
              <p>
                Our recommendation engine operates via a decoupled interface (<code>IRecommendationService</code>), facilitating clean progression from client-side heuristic/semantic matching to an enterprise Python/FastAPI microservice:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">1. Multi-factor Scoring</strong>
                  Combines keyword token overlap (35%), parameter alignment (30%), semantic intent (20%), and statutory QCO mandate weights (15%).
                </div>
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">2. Normative Resolution</strong>
                  Traverses normative references in primary product standards to surface mandatory test methods (e.g. IS 1608 for steel, IS 2530 for polymers).
                </div>
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">3. Explainability Engine</strong>
                  Generates human-auditable match explanations highlighting the exact user clauses and parameters that triggered each standard.
                </div>
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">4. Future Vector Integration</strong>
                  Architecture is pre-structured to plug into BGE-M3 / OpenAI embeddings with pgvector / Qdrant for semantic tender search.
                </div>
              </div>
            </div>
          </div>

          {/* Curated Standards Summary */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center">
              <Layers className="w-4 h-4 text-gov-800 mr-1.5" />
              Sectors Covered in Demo Dataset ({CURATED_STANDARDS.length} Standards)
            </h4>
            <div className="space-y-1.5">
              {[
                { name: 'Civil & Infrastructure', items: 'IS 1786 (TMT Rebars Fe 500D), IS 456 (RCC Code of Practice), IS 1489-1 (PPC Cement), IS 2062 (Structural Steel)' },
                { name: 'Water & Sanitation', items: 'IS 4984 (HDPE Pipes), IS 8034 (Submersible Pumps), IS 1239-1 (GI/MS Tubes), IS 10500 (Drinking Water), IS 14846 (Sluice Valves), IS 779 (Water Meters)' },
                { name: 'Electrical & Electronics', items: 'IS 694 (FRLS PVC Cables), IS 732 (Wiring Code), IS 10322-5-3 (LED Streetlights), IS 1180-1 (Distribution Transformers), IS 14753 (Server Racks), IS 16102-1 (LED Lamps)' },
                { name: 'Mechanical & Fire Safety', items: 'IS 2925 (Safety Helmets), IS 15683 (Portable Fire Extinguishers), IS 15298-2 (Safety Footwear)' },
                { name: 'Healthcare & Medical', items: 'IS 9473 (N95 / FFP2 Particle Respirators), IS 1061 (Disinfectant Fluids), IS 13422 (Surgical Rubber Gloves)' }
              ].map((sector, i) => (
                <div key={i} className="flex items-start text-xs bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="font-bold text-gov-800 w-44 flex-shrink-0">{sector.name}:</span>
                  <span className="text-slate-600">{sector.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <a
            href="https://www.standardsbis.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center space-x-1"
          >
            <span>Visit Bureau of Indian Standards Official Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gov-800 hover:bg-gov-900 text-white rounded text-xs font-bold transition shadow-xs"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
