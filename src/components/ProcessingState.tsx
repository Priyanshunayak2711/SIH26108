import React, { useEffect, useState } from 'react';
import {
  FileSearch,
  Cpu,
  Network,
  Award,
  CheckCircle2,
  Loader2
} from 'lucide-react';

interface ProcessingStateProps {
  onComplete: () => void;
}

interface StepInfo {
  id: number;
  title: string;
  subtitle: string;
  detailText: string;
  icon: React.ElementType;
}

export const ProcessingState: React.FC<ProcessingStateProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(15);

  const steps: StepInfo[] = [
    {
      id: 1,
      title: 'Understanding Specification',
      subtitle: 'Extracting technical parameters, grades, and material specifications',
      detailText: 'Parsing Named Entities: Yield strength, chemical limits, hydrostatic pressures, mechanical properties...',
      icon: FileSearch
    },
    {
      id: 2,
      title: 'Finding Semantic Matches',
      subtitle: 'Correlating technical clauses against curated Indian Standards knowledge base',
      detailText: 'Computing semantic token overlap, vocabulary affinity, and domain ontology matching...',
      icon: Cpu
    },
    {
      id: 3,
      title: 'Checking Related References',
      subtitle: 'Resolving normative testing methods, sampling protocols, and allied codes',
      detailText: 'Tracing normative citations: IS 1608 tensile testing, IS 2530 polymer test methods, IS 456 RCC code...',
      icon: Network
    },
    {
      id: 4,
      title: 'Ranking Standards & QCO Verification',
      subtitle: 'Applying regulatory Quality Control Order (QCO) weights and confidence scoring',
      detailText: 'Validating mandatory ISI mark status under Gazette Orders and finalizing explainability reasoning...',
      icon: Award
    }
  ];

  useEffect(() => {
    // Stage 1: 0 - 600ms
    const timer1 = setTimeout(() => {
      setCurrentStep(2);
      setProgress(40);
    }, 600);

    // Stage 2: 600 - 1300ms
    const timer2 = setTimeout(() => {
      setCurrentStep(3);
      setProgress(70);
    }, 1300);

    // Stage 3: 1300 - 1900ms
    const timer3 = setTimeout(() => {
      setCurrentStep(4);
      setProgress(92);
    }, 1900);

    // Stage 4 completion: 2400ms
    const timer4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-gov-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-gov-800" />
            <span>AI Reasoning Engine Running</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Analyzing Procurement Specification
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Running 4-stage automated standards identification and regulatory compliance cross-referencing
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-2.5 mt-4 overflow-hidden border border-slate-200">
            <div
              className="bg-gov-800 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right text-[11px] font-mono text-slate-400 mt-1">
            {progress}% Completed
          </div>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div
                key={step.id}
                className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-200 ${
                  isCurrent
                    ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300 shadow-sm'
                    : isCompleted
                    ? 'bg-slate-50/80 border-slate-200 opacity-90'
                    : 'bg-white border-slate-100 opacity-40'
                }`}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 mt-0.5">
                  {isCompleted ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : isCurrent ? (
                    <div className="w-8 h-8 rounded-full bg-gov-800 text-white flex items-center justify-center animate-pulse">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold font-mono">
                      0{step.id}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-bold ${isCurrent ? 'text-gov-800' : 'text-slate-800'}`}>
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-medium font-mono text-slate-400">
                      {isCompleted ? (
                        <span className="text-emerald-700 font-semibold">Done</span>
                      ) : isCurrent ? (
                        <span className="text-blue-700 font-semibold flex items-center">
                          <Loader2 className="w-3 h-3 animate-spin mr-1" /> In progress
                        </span>
                      ) : (
                        'Pending'
                      )}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{step.subtitle}</p>

                  {isCurrent && (
                    <div className="mt-2 text-[11px] font-mono text-blue-900 bg-white/80 p-2 rounded border border-blue-200 animate-fadeIn">
                      &gt; {step.detailText}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
