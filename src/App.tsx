import React, { useState } from 'react';
import { Header } from './components/Header';
import { AdvisorConsole } from './components/AdvisorConsole';
import { LabTestSuite } from './components/LabTestSuite';
import { ChallengeTestWorkbench } from './components/ChallengeTestWorkbench';
import { PolicyRepository } from './components/PolicyRepository';
import { ArchitectureGuide } from './components/ArchitectureGuide';
import { TestResultEvaluation } from './types/advisor';
import { LAB_TESTS } from './data/policies';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'advisor' | 'lab-tests' | 'challenge' | 'policies' | 'architecture'
  >('advisor');
  const [selectedDocId, setSelectedDocId] = useState<string>('expense-policy');
  const [testResults, setTestResults] = useState<Record<number, TestResultEvaluation>>({});

  const handleViewPolicy = (docId: string) => {
    setSelectedDocId(docId);
    setActiveTab('policies');
  };

  const passCount = Object.values(testResults).filter((r) => r.status === 'Pass').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        testPassCount={passCount}
        totalTests={LAB_TESTS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'advisor' && (
          <AdvisorConsole onViewPolicy={handleViewPolicy} />
        )}

        {activeTab === 'lab-tests' && (
          <LabTestSuite
            onViewPolicy={handleViewPolicy}
            testResults={testResults}
            setTestResults={setTestResults}
          />
        )}

        {activeTab === 'challenge' && (
          <ChallengeTestWorkbench />
        )}

        {activeTab === 'policies' && (
          <PolicyRepository initialSelectedDocId={selectedDocId} />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureGuide />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Workplace Policy Advisor • Meridian Horizon Services Pte. Ltd. (Simulated Environment)
          </p>
          <p className="text-[11px] text-slate-400">
            Grounding Boundary: MHS-FIN-POL-04 • MHS-IT-POL-07 • MHS-SEC-SOP-03
          </p>
        </div>
      </footer>
    </div>
  );
}
