import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  GitBranch,
  Layers,
  ArrowRight,
  HelpCircle,
  Lock,
  Compass
} from 'lucide-react';

export const ArchitectureGuide: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-800/80 via-slate-800/40 to-slate-900 border border-slate-700/60 rounded-2xl p-6 sm:p-7 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
            Lab Architecture & Governance
          </span>
          <span className="text-xs text-slate-400 font-mono">Mission Framework</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Grounded Agent Architecture & The 5 Validation Checks
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          A confident answer is not necessarily a trustworthy answer. The Workplace Policy Advisor becomes trustworthy because every output is strictly grounded, sourced, validated against 5 checks, and tested across edge cases.
        </p>
      </div>

      {/* The 4 Foundational Concepts (Section 19) */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
          Section 19: The 4 Core Trust Dimensions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Grounded */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
              <Layers className="w-4 h-4" />
              <span>1. Grounded</span>
            </div>
            <p className="text-sm font-semibold text-white">Based on approved information</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Question:</strong> Where did the Agent get its information? The agent answers exclusively from approved organizational documents (Appendices A, B, C).
            </p>
          </div>

          {/* Sourced */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
              <FileCheck className="w-4 h-4" />
              <span>2. Sourced</span>
            </div>
            <p className="text-sm font-semibold text-white">Traceable evidence trail</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Question:</strong> Can I trace the answer back to an approved source? Every recommendation identifies the specific Document ID, section, and clauses.
            </p>
          </div>

          {/* Validated */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>3. Validated</span>
            </div>
            <p className="text-sm font-semibold text-white">Evidence justifies conclusion</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Question:</strong> Does the source really justify what the Agent is saying? A cited source alone does not guarantee a sound interpretation.
            </p>
          </div>

          {/* Tested */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
              <Compass className="w-4 h-4" />
              <span>4. Tested</span>
            </div>
            <p className="text-sm font-semibold text-white">Challenged with edge cases</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Question:</strong> Do I know how the Agent behaves when things go wrong? Proved against normal, missing, conflicting, and adversarial prompts.
            </p>
          </div>
        </div>
      </div>

      {/* The 5 Validation Checks (Section 15) */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
        <div className="pb-3 border-b border-slate-800">
          <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
            Section 15 Protocol
          </span>
          <h3 className="text-lg font-bold text-white mt-1">
            The 5 Mandatory Validation Checks
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            The Advisor runs these 5 checks before finalizing any advice:
          </p>
        </div>

        <div className="space-y-3">
          {/* Check 1 */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
              1
            </div>
            <div className="text-xs space-y-1 flex-1">
              <span className="font-bold text-slate-200 uppercase font-mono tracking-wider">
                CHECK 1 — EVIDENCE
              </span>
              <p className="text-slate-300">
                <strong>Did I find relevant evidence in an approved source?</strong> If NO → Do not guess or fabricate rules. Acknowledge policy silence.
              </p>
            </div>
          </div>

          {/* Check 2 */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
              2
            </div>
            <div className="text-xs space-y-1 flex-1">
              <span className="font-bold text-slate-200 uppercase font-mono tracking-wider">
                CHECK 2 — SUPPORT
              </span>
              <p className="text-slate-300">
                <strong>Does the evidence actually support my conclusion?</strong> A real source does not automatically make an interpretation correct. Verify the logic.
              </p>
            </div>
          </div>

          {/* Check 3 */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
              3
            </div>
            <div className="text-xs space-y-1 flex-1">
              <span className="font-bold text-slate-200 uppercase font-mono tracking-wider">
                CHECK 3 — COMPLETENESS
              </span>
              <p className="text-slate-300">
                <strong>Are there conditions, exceptions or additional rules that materially change the answer?</strong> (e.g. Total Commitment, manager notification, receipts, $80 threshold, time cutoff).
              </p>
            </div>
          </div>

          {/* Check 4 */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
              4
            </div>
            <div className="text-xs space-y-1 flex-1">
              <span className="font-bold text-slate-200 uppercase font-mono tracking-wider">
                CHECK 4 — SOURCE
              </span>
              <p className="text-slate-300">
                <strong>Can I identify where the information came from?</strong> If the source cannot be identified, reduce confidence or escalate.
              </p>
            </div>
          </div>

          {/* Check 5 */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
              5
            </div>
            <div className="text-xs space-y-1 flex-1">
              <span className="font-bold text-slate-200 uppercase font-mono tracking-wider">
                CHECK 5 — AUTHORITY
              </span>
              <p className="text-slate-300">
                <strong>Does this question require a decision or approval from an authorised human?</strong> (Line Manager, Department Head, Finance Manager, IT, InfoSec). If YES → Escalate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Agent Decision Rule (Section 16) */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-xl space-y-4">
        <div className="pb-3 border-b border-slate-800">
          <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">
            Section 16 Protocol
          </span>
          <h3 className="text-lg font-bold text-white mt-1">
            The Agent Decision Rule (IF / THEN / ELSE)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider block">
              Condition: Safe Advisory
            </span>
            <div className="text-xs text-slate-300 font-mono space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
              <p className="text-emerald-400">IF</p>
              <p className="pl-3">• Evidence is sufficient</p>
              <p className="pl-3">• Source is identifiable</p>
              <p className="pl-3">• Evidence supports the conclusion</p>
              <p className="pl-3">• No unresolved conflict exists</p>
              <p className="pl-3">• Within permitted boundary</p>
            </div>
            <div className="text-xs text-emerald-300 font-semibold pt-1">
              → THEN: Provide concise grounded answer, source, evidence, and clear conditions.
            </div>
          </div>

          <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-3">
            <span className="text-xs font-bold text-rose-400 font-mono uppercase tracking-wider block">
              Condition: Human Review & Escalation
            </span>
            <div className="text-xs text-slate-300 font-mono space-y-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
              <p className="text-rose-400">ELSE</p>
              <p className="pl-3">• Evidence missing or conflicting</p>
              <p className="pl-3">• Discretionary approval required</p>
              <p className="pl-3">• High-risk incident containment</p>
              <p className="pl-3">• Exceeds agent advisory scope</p>
            </div>
            <div className="text-xs text-rose-300 font-semibold pt-1">
              → THEN: State limitation, do not invent policy, set Human Review Required = YES.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
