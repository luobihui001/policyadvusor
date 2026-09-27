import React from 'react';
import { ShieldCheck, BookOpen, CheckSquare, Zap, Terminal, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: 'advisor' | 'lab-tests' | 'challenge' | 'policies' | 'architecture';
  setActiveTab: (tab: 'advisor' | 'lab-tests' | 'challenge' | 'policies' | 'architecture') => void;
  testPassCount: number;
  totalTests: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  testPassCount,
  totalTests,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">Workplace Policy Advisor</h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Grounded Agent
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Meridian Horizon Services Pte. Ltd. • MHS Policy Governance
            </p>
          </div>
        </div>

        {/* Pipeline Badge & Test Score */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300">
            <span className="text-indigo-400 font-semibold">GROUND</span>
            <span className="text-slate-500">→</span>
            <span className="text-cyan-400 font-semibold">SOURCE</span>
            <span className="text-slate-500">→</span>
            <span className="text-amber-400 font-semibold">VALIDATE</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-400 font-semibold">RESPOND / ESCALATE</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
            <span className="text-slate-400">Lab Tests:</span>
            <span className="font-semibold text-emerald-400">
              {testPassCount}/{totalTests} Verified
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto no-scrollbar gap-1 border-t border-slate-800/60 pt-1">
        <button
          onClick={() => setActiveTab('advisor')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'advisor'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Advisor Console</span>
        </button>

        <button
          onClick={() => setActiveTab('lab-tests')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'lab-tests'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Hands-On Lab Tests (1–6)</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300 border border-slate-700">
            6 Cases
          </span>
        </button>

        <button
          onClick={() => setActiveTab('challenge')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'challenge'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Challenge Test Workbench</span>
        </button>

        <button
          onClick={() => setActiveTab('policies')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'policies'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Approved Knowledge Sources</span>
          <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            3 Docs
          </span>
        </button>

        <button
          onClick={() => setActiveTab('architecture')}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'architecture'
              ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Validation & Decision Logic</span>
        </button>
      </div>
    </header>
  );
};
