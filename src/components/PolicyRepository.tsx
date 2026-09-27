import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  FileText,
  ShieldCheck,
  Building,
  DollarSign,
  AlertCircle,
  Copy,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { APPROVED_POLICIES } from '../data/policies';
import { PolicyDocument } from '../types/advisor';

interface PolicyRepositoryProps {
  initialSelectedDocId?: string;
}

export const PolicyRepository: React.FC<PolicyRepositoryProps> = ({
  initialSelectedDocId,
}) => {
  const [selectedDocId, setSelectedDocId] = useState<string>(
    initialSelectedDocId || APPROVED_POLICIES[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const activeDoc =
    APPROVED_POLICIES.find((doc) => doc.id === selectedDocId || doc.documentId === selectedDocId) ||
    APPROVED_POLICIES[0];

  const handleCopySection = (secNumber: string, text: string) => {
    navigator.clipboard.writeText(`[${activeDoc.documentId} Sec ${secNumber}]\n${text}`);
    setCopiedSectionId(secNumber);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  // Filter sections by search query
  const filteredSections = activeDoc.sections.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = s.title.toLowerCase().includes(q);
    const contentMatch = s.content.toLowerCase().includes(q);
    const subMatch = s.subsections?.some(
      (sub) => sub.title.toLowerCase().includes(q) || sub.content.toLowerCase().includes(q)
    );
    return titleMatch || contentMatch || subMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-800/80 via-slate-800/40 to-slate-900 border border-slate-700/60 rounded-2xl p-6 sm:p-7 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                Authoritative Knowledge Boundary
              </span>
              <span className="text-xs text-slate-400 font-mono">Simulated Enterprise Framework</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Approved Organisational Knowledge Sources
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              These three documents represent the complete, exhaustive operational knowledge for the Workplace Policy Advisor. The Advisor is strictly prohibited from inventing rules beyond these texts.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl text-center min-w-[100px]">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Organization</span>
              <span className="text-xs font-bold text-slate-200">Meridian Horizon</span>
            </div>
            <div className="p-3 bg-slate-900 border border-slate-700/80 rounded-xl text-center min-w-[80px]">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Class</span>
              <span className="text-xs font-bold text-amber-400">Internal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Selection Tabs & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {APPROVED_POLICIES.map((doc) => {
            const isSelected = doc.id === activeDoc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setSelectedDocId(doc.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
                  isSelected
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{doc.documentId}</span>
                <span className="text-[11px] opacity-75 hidden md:inline">
                  • {doc.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords in policy..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Active Document Metadata Card */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                {activeDoc.documentId}
              </span>
              <span className="text-xs text-slate-400 font-mono">Version {activeDoc.version}</span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400 font-mono">Effective: {activeDoc.effectiveDate}</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">{activeDoc.title}</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl">{activeDoc.description}</p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800 shrink-0">
            <div>
              <span className="text-slate-500 text-[10px] uppercase block">Policy Owner</span>
              <span className="text-slate-200 font-medium">{activeDoc.policyOwner}</span>
            </div>
          </div>
        </div>

        {/* Key Rules Strip */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
            Key Thresholds & Policy Invariants
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
            {activeDoc.keyRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                <span className="leading-snug">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              Official Policy Text ({filteredSections.length} Sections)
            </span>
            {searchQuery && (
              <span className="text-xs text-amber-400 font-mono">
                Filtered by: "{searchQuery}"
              </span>
            )}
          </div>

          <div className="space-y-4">
            {filteredSections.map((sec) => (
              <div
                key={sec.id}
                id={`sec-${sec.number}`}
                className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 transition hover:border-slate-700"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                      Section {sec.number}
                    </span>
                    <h4 className="text-sm font-bold text-white">{sec.title}</h4>
                  </div>

                  <button
                    onClick={() => handleCopySection(sec.number, sec.content)}
                    className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
                  >
                    {copiedSectionId === sec.number ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Clause</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                  {sec.content}
                </div>

                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="pl-4 border-l-2 border-slate-800 space-y-3 mt-3">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-cyan-400">
                            {sub.number}
                          </span>
                          <span className="text-xs font-semibold text-slate-200">{sub.title}</span>
                        </div>
                        <div className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                          {sub.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
