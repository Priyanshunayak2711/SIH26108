import React, { useState, useRef } from 'react';
import {
  Search,
  Upload,
  FileText,
  Sparkles,
  RefreshCw,
  SlidersHorizontal,
  CheckCircle,
  FileUp,
  X
} from 'lucide-react';
import { StandardCategory, ProcurementAnalysisRequest } from '../types/standards';
import { SAMPLE_TENDERS } from '../data/sampleTenders';

interface SpecificationInputProps {
  onAnalyze: (request: ProcurementAnalysisRequest) => void;
  isLoading: boolean;
}

export const SpecificationInput: React.FC<SpecificationInputProps> = ({ onAnalyze, isLoading }) => {
  const [specText, setSpecText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<StandardCategory | 'All Categories'>('All Categories');
  const [requireMandatoryOnly, setRequireMandatoryOnly] = useState<boolean>(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories: (StandardCategory | 'All Categories')[] = [
    'All Categories',
    'Civil & Infrastructure',
    'Water & Sanitation',
    'Electrical & Electronics',
    'Mechanical & Fire Safety',
    'Healthcare & Medical'
  ];

  const handleSelectSample = (sampleId: string) => {
    const sample = SAMPLE_TENDERS.find(s => s.id === sampleId);
    if (sample) {
      setSpecText(sample.content);
      setSelectedCategory(sample.category);
      setUploadedFileName(null);
      setUploadStatus(`Loaded template: ${sample.title}`);
      setTimeout(() => setUploadStatus(null), 3000);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    setUploadStatus('Parsing document text clauses...');

    // If text or json, read directly; if PDF/DOCX, simulate OCR/NER extraction
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setSpecText(text || '');
        setUploadStatus(`Successfully extracted text clauses from ${file.name}`);
        setTimeout(() => setUploadStatus(null), 3500);
      };
      reader.readAsText(file);
    } else {
      // Simulate realistic extraction for PDF / DOCX tender documents
      setTimeout(() => {
        // Look for matching sample based on name or fallback to realistic tender clause
        let extractedText = '';
        if (file.name.toLowerCase().includes('water') || file.name.toLowerCase().includes('pipe')) {
          extractedText = SAMPLE_TENDERS[0].content;
          setSelectedCategory('Water & Sanitation');
        } else if (file.name.toLowerCase().includes('steel') || file.name.toLowerCase().includes('tmt') || file.name.toLowerCase().includes('bridge')) {
          extractedText = SAMPLE_TENDERS[1].content;
          setSelectedCategory('Civil & Infrastructure');
        } else if (file.name.toLowerCase().includes('led') || file.name.toLowerCase().includes('light') || file.name.toLowerCase().includes('cable')) {
          extractedText = SAMPLE_TENDERS[2].content;
          setSelectedCategory('Electrical & Electronics');
        } else {
          extractedText = `TENDER SPECIFICATION EXTRACT (Parsed from ${file.name}):\n` +
            `Item: High Yield Strength Deformed Steel Reinforcement Bars Fe 500D conforming to Indian Standards.\n` +
            `Chemical & Mechanical Requirements: Yield strength >= 500 N/mm2, Elongation >= 16.0%, Carbon max 0.25%, Sulphur max 0.040%.\n` +
            `Testing: Bend test 180 deg, Tensile testing as per IS 1608.\n` +
            `Mandatory compliance with Ministry of Steel Quality Control Orders.`;
        }
        setSpecText(extractedText);
        setUploadStatus(`Extracted technical specifications from ${file.name} (1,240 characters parsed)`);
        setTimeout(() => setUploadStatus(null), 4000);
      }, 750);
    }
  };

  const handleClear = () => {
    setSpecText('');
    setUploadedFileName(null);
    setUploadStatus(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!specText.trim()) return;

    onAnalyze({
      specificationText: specText,
      categoryHint: selectedCategory,
      requireMandatoryOnly,
      sourceDocName: uploadedFileName || undefined
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        {/* Card Header & Controls */}
        <div className="border-b border-slate-200 px-6 py-4 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-4 h-4 text-gov-800" />
            <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Procurement Specification Input
            </span>
          </div>

          {/* 1-Click Template Selector */}
          <div className="flex items-center flex-wrap gap-1.5 text-xs">
            <span className="text-slate-500 font-medium mr-1 flex items-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 mr-1" /> Quick Samples:
            </span>
            {SAMPLE_TENDERS.map(tender => (
              <button
                key={tender.id}
                type="button"
                onClick={() => handleSelectSample(tender.id)}
                className="px-2.5 py-1 bg-white hover:bg-gov-50 text-slate-700 hover:text-gov-800 border border-slate-300 rounded text-xs font-medium transition shadow-xs"
              >
                {tender.title.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Columns: Specification Textarea */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="specificationText" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Technical Parameters, Clauses & Item Description
                </label>
                <span className="text-xs text-slate-400 font-mono">
                  {specText.length} characters
                </span>
              </div>

              <div className="relative">
                <textarea
                  id="specificationText"
                  rows={9}
                  value={specText}
                  onChange={(e) => setSpecText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter or paste product procurement requirements, e.g.:
'Supply of High Density Polyethylene (HDPE) pipes PE 100 grade PN 10 rating for potable water supply. Minimum hydrostatic pressure resistance, carbon black content 2.0% - 2.5%, MFR 0.2 to 1.1 g/10min. Mandatory ISI mark under QCO.'

Or click any of the Quick Samples above to test immediately."
                  className="w-full text-sm font-sans text-slate-800 bg-slate-50/50 border border-slate-300 rounded-lg p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gov-600 focus:border-transparent transition resize-none leading-relaxed"
                />
              </div>

              {/* Status or Upload notification */}
              {uploadStatus && (
                <div className="flex items-center space-x-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 animate-fadeIn">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{uploadStatus}</span>
                </div>
              )}

              {uploadedFileName && (
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-gov-800 px-3 py-1 rounded text-xs font-semibold">
                  <FileText className="w-3.5 h-3.5 text-gov-700" />
                  <span>Loaded File: {uploadedFileName}</span>
                  <button
                    type="button"
                    onClick={() => { setUploadedFileName(null); setSpecText(''); }}
                    className="text-slate-400 hover:text-slate-700 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Upload Box + Categorization & Parameters */}
            <div className="space-y-4">
              {/* Tender Document Upload Simulation Dropzone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Optional: Tender RFP / BoQ Upload
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 hover:border-gov-600 hover:bg-gov-50/40 rounded-lg p-4 text-center cursor-pointer transition bg-slate-50/30 group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center mx-auto text-slate-500 group-hover:text-gov-800 transition mb-2">
                    <FileUp className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-700 group-hover:text-gov-800">
                    Upload Tender Document
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Supports .pdf, .docx, .txt (Max 15MB)
                  </div>
                  <div className="text-[10px] text-blue-600 font-semibold mt-2">
                    Simulates automated text clause extraction
                  </div>
                </div>
              </div>

              {/* Category Hint Selector */}
              <div>
                <label htmlFor="categoryHint" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Procurement Sector / Domain
                </label>
                <select
                  id="categoryHint"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                  className="w-full text-xs font-medium bg-white border border-slate-300 rounded-md p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-gov-600"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Mandatory QCO Preference Checkbox */}
              <div className="pt-1">
                <label className="flex items-start space-x-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={requireMandatoryOnly}
                    onChange={(e) => setRequireMandatoryOnly(e.target.checked)}
                    className="mt-0.5 h-4 w-4 text-gov-800 rounded border-slate-300 focus:ring-gov-600"
                  />
                  <span className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold">Mandatory QCO Standards Only</strong>
                    Highlight only standards legally enforced with mandatory ISI Mark.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Button Footer */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center space-x-1">
              <span>Tip: Press</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded shadow-xs">Ctrl</kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-300 rounded shadow-xs">Enter</kbd>
              <span>to analyze</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleClear}
                disabled={isLoading || (!specText && !uploadedFileName)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md border border-slate-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear Input
              </button>

              <button
                type="submit"
                disabled={isLoading || !specText.trim()}
                className="inline-flex items-center space-x-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gov-800 hover:bg-gov-900 active:bg-gov-950 rounded-md shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-700"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Analyzing Standards...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-amber-400" />
                    <span>Analyze & Recommend Standards</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
