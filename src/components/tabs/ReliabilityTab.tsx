import React, { useState } from 'react';
import { CarJourney, MechanicalIssue, PPICheckItem } from '../../types/carJourney';
import {
  AlertTriangle,
  Wrench,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertCircle,
  ShieldAlert,
  Search,
  Filter,
  DollarSign,
  Gauge,
  Sparkles,
  ClipboardCheck,
  FileText,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ReliabilityTabProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
  onTriggerAiScan: () => void;
  isAiScanning: boolean;
}

export const ReliabilityTab: React.FC<ReliabilityTabProps> = ({
  journey,
  onUpdateJourney,
  onTriggerAiScan,
  isAiScanning,
}) => {
  const [selectedSystem, setSelectedSystem] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>(
    journey.mechanicalIssues[0]?.id || null
  );
  const [checklistTab, setChecklistTab] = useState<'issues' | 'checklist' | 'recalls'>('issues');

  // Filter issues
  const filteredIssues = journey.mechanicalIssues.filter((issue) => {
    const matchesSystem = selectedSystem === 'All' || issue.system === selectedSystem;
    const matchesSeverity = selectedSeverity === 'All' || issue.severity === selectedSeverity;
    return matchesSystem && matchesSeverity;
  });

  const systems = ['All', 'Powertrain', 'Transmission', 'Electrical', 'Suspension', 'Climate', 'Body & Paint'];
  const severities = ['All', 'critical', 'high', 'moderate', 'low'];

  // Update inspection checklist item status
  const handleUpdateChecklistItem = (
    itemId: string,
    newStatus: PPICheckItem['status'],
    notes?: string
  ) => {
    const updatedChecklist = journey.inspectionChecklist.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          status: newStatus,
          notes: notes !== undefined ? notes : item.notes,
        };
      }
      return item;
    });

    onUpdateJourney({
      ...journey,
      inspectionChecklist: updatedChecklist,
    });
  };

  // PPI Summary stats
  const totalChecks = journey.inspectionChecklist.length;
  const passedChecks = journey.inspectionChecklist.filter((c) => c.status === 'pass').length;
  const concernChecks = journey.inspectionChecklist.filter((c) => c.status === 'concern').length;
  const failedChecks = journey.inspectionChecklist.filter((c) => c.status === 'fail').length;
  const uninspectedChecks = journey.inspectionChecklist.filter((c) => c.status === 'uninspected').length;

  const getSeverityBadge = (severity: MechanicalIssue['severity']) => {
    switch (severity) {
      case 'critical':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'high':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      case 'moderate':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'low':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview & AI Diagnostic Summary Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-400 tracking-wide uppercase">
                Reliability Intel & Failure Risk Assessment
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">
                Ground-Truth NHTSA & Master-Tech Diagnostics
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {journey.year} {journey.make} {journey.model}
              </h2>
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md">
                {journey.trim}
              </span>
              {journey.engine && (
                <span className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-md">
                  {journey.engine}
                </span>
              )}
              {journey.drivetrain && (
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                  {journey.drivetrain}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onTriggerAiScan}
              disabled={isAiScanning}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-amber-300 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <Sparkles className={`w-4 h-4 ${isAiScanning ? 'animate-spin text-amber-400' : ''}`} />
              {isAiScanning ? 'Scanning Live Recalls & Failures...' : 'Re-Run Gemini Diagnostic Scan'}
            </button>
          </div>
        </div>

        {/* Summary text */}
        <div className="mt-4 text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-lg border border-slate-800/60">
          <strong className="text-white">Mechanic Executive Summary: </strong>
          {journey.issuesSummary}
        </div>

        {/* Sub-Tabs: Issues vs PPI Checklist vs Recalls */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setChecklistTab('issues')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              checklistTab === 'issues'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Reported Failure Points ({journey.mechanicalIssues.length})
          </button>
          <button
            onClick={() => setChecklistTab('checklist')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              checklistTab === 'checklist'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5" />
            Pre-Purchase Inspection (PPI) Checklist ({passedChecks + concernChecks + failedChecks}/{totalChecks})
          </button>
          <button
            onClick={() => setChecklistTab('recalls')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              checklistTab === 'recalls'
                ? 'bg-amber-500 text-slate-950'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            NHTSA Recalls & Safety Bulletins ({journey.recalls.length})
          </button>
        </div>
      </div>

      {/* VIEW 1: COMMON MECHANICAL FAILURES */}
      {checklistTab === 'issues' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> System:
              </span>
              {systems.map((sys) => (
                <button
                  key={sys}
                  onClick={() => setSelectedSystem(sys)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                    selectedSystem === sys
                      ? 'bg-slate-800 text-amber-400 font-semibold border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sys}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-400 mr-1">Severity:</span>
              {severities.map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-2 py-0.5 capitalize rounded transition-colors ${
                    selectedSeverity === sev
                      ? 'bg-slate-800 text-white font-medium border border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Issue Cards List */}
          <div className="space-y-4">
            {filteredIssues.map((issue) => {
              const isExpanded = expandedIssueId === issue.id;

              return (
                <div
                  key={issue.id}
                  className={`bg-slate-900 border rounded-xl transition-all duration-200 overflow-hidden ${
                    issue.severity === 'critical'
                      ? 'border-rose-900/40 hover:border-rose-700/60'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => setExpandedIssueId(isExpanded ? null : issue.id)}
                    className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span
                          className={`px-2 py-0.5 rounded border uppercase text-[10px] font-bold tracking-wider ${getSeverityBadge(
                            issue.severity
                          )}`}
                        >
                          {issue.severity} Severity
                        </span>
                        <span className="text-slate-400">{issue.system}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400">
                          Failure Window: <strong className="text-slate-200 tabular-nums">{issue.failureMileageRange}</strong>
                        </span>
                        {issue.isTSBOrRecall && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded">
                            Official TSB / Recall Active
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        {issue.title}
                      </h3>

                      <div className="text-xs text-slate-400">
                        Affected Component: <span className="text-slate-200 font-medium">{issue.component}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400">Est. Repair Cost</div>
                        <div className="text-sm font-bold text-emerald-400 tabular-nums">
                          ${issue.estimatedCostRange.min.toLocaleString()} - ${issue.estimatedCostRange.max.toLocaleString()}
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-white p-1">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Technical Details */}
                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-800/80 space-y-4 bg-slate-950/40">
                      {/* Deep description */}
                      <p className="text-sm text-slate-300 leading-relaxed">{issue.description}</p>

                      {/* Symptoms */}
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Reported Owner Symptoms
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {issue.symptoms.map((symptom, idx) => (
                            <div
                              key={idx}
                              className="text-xs text-slate-300 bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg flex items-start gap-2"
                            >
                              <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{symptom}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Test Drive Warning Signs - The Buyer's In-Car Guide */}
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                          <Gauge className="w-4 h-4" />
                          <span>What to Test & Listen For During Your Test Drive:</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed pl-6">
                          {issue.warningSignsTestDrive}
                        </p>
                      </div>

                      {/* Preventative Advice */}
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-300">
                        <strong className="text-emerald-400 font-semibold block mb-0.5">
                          Mechanic Preventative Protocol:
                        </strong>
                        {issue.preventativeAdvice}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredIssues.length === 0 && (
              <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-400">
                <HelpCircle className="w-8 h-8 mx-auto text-slate-500 mb-2" />
                <p>No mechanical issues match the selected filters.</p>
                <button
                  onClick={() => {
                    setSelectedSystem('All');
                    setSelectedSeverity('All');
                  }}
                  className="mt-2 text-xs text-amber-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: INTERACTIVE PRE-PURCHASE INSPECTION (PPI) CHECKLIST */}
      {checklistTab === 'checklist' && (
        <div className="space-y-6">
          {/* PPI Progress Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-amber-400" />
                  Vehicle-Specific Pre-Purchase Inspection (PPI)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Use this interactive checklist when you inspect the car at the dealer lot or private seller.
                </p>
              </div>

              {/* Status tally */}
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> {passedChecks} Pass
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <AlertCircle className="w-4 h-4" /> {concernChecks} Concern
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <XCircle className="w-4 h-4" /> {failedChecks} Fail
                </span>
                <span className="text-slate-500">
                  ({uninspectedChecks} Remaining)
                </span>
              </div>
            </div>

            {/* Assessment Recommendation */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400">Inspection Verdict: </span>
                {failedChecks > 0 ? (
                  <strong className="text-rose-400">
                    High Risk Alert — Walk away or demand severe price concession
                  </strong>
                ) : concernChecks > 0 ? (
                  <strong className="text-amber-400">
                    Moderate Risk — Request dealer repair or PPI credit
                  </strong>
                ) : passedChecks === totalChecks ? (
                  <strong className="text-emerald-400">
                    Clean Bill of Health — Excellent candidate for purchase
                  </strong>
                ) : (
                  <span className="text-slate-400">Complete all inspection points to generate final score</span>
                )}
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {journey.inspectionChecklist.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-amber-400 font-semibold">{item.category}</span>
                        <span className="text-slate-600">·</span>
                        <span
                          className={`capitalize ${
                            item.riskSeverity === 'critical'
                              ? 'text-rose-400'
                              : item.riskSeverity === 'moderate'
                              ? 'text-amber-400'
                              : 'text-slate-400'
                          }`}
                        >
                          {item.riskSeverity} Priority Check
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Status Toggle Buttons */}
                    <div className="flex items-center gap-1 shrink-0 self-start sm:self-center">
                      <button
                        onClick={() => handleUpdateChecklistItem(item.id, 'pass')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-colors ${
                          item.status === 'pass'
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Pass
                      </button>
                      <button
                        onClick={() => handleUpdateChecklistItem(item.id, 'concern')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-colors ${
                          item.status === 'concern'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5" /> Concern
                      </button>
                      <button
                        onClick={() => handleUpdateChecklistItem(item.id, 'fail')}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md flex items-center gap-1 transition-colors ${
                          item.status === 'fail'
                            ? 'bg-rose-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <XCircle className="w-3.5 h-3.5" /> Fail
                      </button>
                    </div>
                  </div>

                  {/* Notes input */}
                  <div>
                    <input
                      type="text"
                      placeholder="Add in-person inspection note (e.g. 'slight tear on front bushing, dealer promised to replace')..."
                      value={item.notes}
                      onChange={(e) => handleUpdateChecklistItem(item.id, item.status, e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: OFFICIAL NHTSA RECALLS */}
      {checklistTab === 'recalls' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              NHTSA Safety Recalls & Mandatory Campaigns
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Safety recalls must be repaired by authorized franchise dealerships free of charge regardless of vehicle age or warranty status.
            </p>
          </div>

          {journey.recalls.map((recall, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Campaign #{recall.campaignNumber}
                  </span>
                  <span className="text-xs font-medium text-slate-300">{recall.component}</span>
                </div>
                <span className="text-xs text-slate-400">{recall.date}</span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">Summary</h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{recall.summary}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-rose-400">Safety Hazard / Consequence</h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{recall.consequence}</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-emerald-400">
                <strong className="font-semibold block mb-0.5">Dealer Remedy (Free):</strong>
                {recall.remedy}
              </div>
            </div>
          ))}

          {journey.recalls.length === 0 && (
            <div className="text-center py-12 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-400">
              <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <p>No open safety recalls found for this vehicle model year.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
