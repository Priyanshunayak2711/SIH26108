import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecificationInput } from './components/SpecificationInput';
import { ProcessingState } from './components/ProcessingState';
import { ResultsSection } from './components/ResultsSection';
import { ComplianceMatrixModal } from './components/ComplianceMatrixModal';
import { DatasetInfoModal } from './components/DatasetInfoModal';
import { Footer } from './components/Footer';
import {
  ProcurementAnalysisRequest,
  RecommendationResult,
  AnalysisSummary
} from './types/standards';
import { recommendationService } from './services/recommendationEngine';

export const App: React.FC = () => {
  const [appState, setAppState] = useState<'idle' | 'processing' | 'results'>('idle');
  const [currentRequest, setCurrentRequest] = useState<ProcurementAnalysisRequest | null>(null);
  const [results, setResults] = useState<RecommendationResult[]>([]);
  const [summary, setSummary] = useState<AnalysisSummary | null>(null);

  // Modals
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState<boolean>(false);
  const [isKnowledgeBaseOpen, setIsKnowledgeBaseOpen] = useState<boolean>(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  const handleStartAnalysis = (request: ProcurementAnalysisRequest) => {
    setCurrentRequest(request);
    setAppState('processing');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleProcessingComplete = async () => {
    if (!currentRequest) return;

    try {
      const output = await recommendationService.analyzeSpecification(currentRequest);
      setResults(output.results);
      setSummary(output.summary);
      setAppState('results');
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Analysis error:', error);
      setAppState('idle');
    }
  };

  const handleReset = () => {
    setAppState('idle');
    setCurrentRequest(null);
    setResults([]);
    setSummary(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-gov-900 font-sans">
      {/* Top GovTech Navigation Header */}
      <Header
        onOpenKnowledgeBase={() => setIsKnowledgeBaseOpen(true)}
        onReset={handleReset}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Landing Hero Section with Problem Description & Transparency Callout */}
        <HeroSection onOpenKnowledgeBase={() => setIsKnowledgeBaseOpen(true)} />

        {/* Dynamic Workflow Views */}
        <div className="relative pb-12">
          {appState === 'idle' && (
            <SpecificationInput
              onAnalyze={handleStartAnalysis}
              isLoading={false}
            />
          )}

          {appState === 'processing' && (
            <ProcessingState onComplete={handleProcessingComplete} />
          )}

          {appState === 'results' && summary && (
            <div ref={resultsRef}>
              <ResultsSection
                results={results}
                summary={summary}
                onBackToInput={() => setAppState('idle')}
                onOpenComplianceMatrix={() => setIsMatrixModalOpen(true)}
                onOpenKnowledgeBase={() => setIsKnowledgeBaseOpen(true)}
              />
            </div>
          )}
        </div>
      </main>

      {/* Tender Compliance Matrix Modal (Printable/Exportable) */}
      {summary && (
        <ComplianceMatrixModal
          isOpen={isMatrixModalOpen}
          onClose={() => setIsMatrixModalOpen(false)}
          results={results}
          summary={summary}
          specText={currentRequest?.specificationText || ''}
          sourceDocName={currentRequest?.sourceDocName}
        />
      )}

      {/* Curated Standards Knowledge Base Transparency Modal */}
      <DatasetInfoModal
        isOpen={isKnowledgeBaseOpen}
        onClose={() => setIsKnowledgeBaseOpen(false)}
      />

      {/* Official GovTech Footer */}
      <Footer onOpenKnowledgeBase={() => setIsKnowledgeBaseOpen(true)} />
    </div>
  );
};

export default App;
