import React, { useState } from 'react';
import { CarJourney, MechanicalIssue, PPICheckItem } from '../../types/carJourney';
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertCircle,
  Filter,
  Sparkles,
  ClipboardCheck,
  ShieldAlert,
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

  const totalChecks = journey.inspectionChecklist.length;
  const passedChecks = journey.inspectionChecklist.filter((c) => c.status === 'pass').length;
  const concernChecks = journey.inspectionChecklist.filter((c) => c.status === 'concern').length;
  const failedChecks = journey.inspectionChecklist.filter((c) => c.status === 'fail').length;
  const uninspectedChecks = journey.inspectionChecklist.filter((c) => c.status === 'uninspected').length;

  const getSeverityTextColor = (severity: MechanicalIssue['severity']) => {
    switch (severity) {
      case 'critical':
        return 'text-rose-400';
      case 'high':
        return 'text-orange-400';
      case 'moderate':
        return 'text-amber-400';
      case 'low':
        return 'text-emerald-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview & Mechanic Brief */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-base font-semibold text-white tracking-tight">
              Reliability & Known Mechanical Risks
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Grounded in NHTSA safety complaints, technical service bulletins, and master technician archives.
            </p>
          </div>

          <button
            onClick={onTriggerAiScan}
            disabled={isAiScanning}
            className="self-start sm:self-auto px-3 py-1.5 bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <Sparkles className={`w-3.5 h-3.5 text-amber-400 ${isAiScanning ? 'animate-spin' : ''}`} />
            <span>{isAiScanning ? 'Scanning Recalls...' : 'Refresh Diagnostic Scan'}</span>
          </button>
        </div>

        {/* Executive Summary */}
        <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/60">
          <span className="text-white font-medium mr-1.5">Executive Summary:</span>
          <span>{journey.issuesSummary}</span>
        </div>

        {/* Segmented Sub-Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800/80 max-w-fit">
          <button
            onClick={() => setChecklistTab('issues')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              checklistTab === 'issues'
                ? 'bg-slate-850 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Failure Points ({journey.mechanicalIssues.length})</span>
          </button>
          <button
            onClick={() => setChecklistTab('checklist')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              checklistTab === 'checklist'
                ? 'bg-slate-850 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inspection Checklist ({passedChecks + concernChecks + failedChecks}/{totalChecks})</span>
          </button>
          <button
            onClick={() => setChecklistTab('recalls')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              checklistTab === 'recalls'
                ? 'bg-slate-850 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
            <span>Safety Recalls ({journey.recalls.length})</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: COMMON MECHANICAL FAILURES */}
      {checklistTab === 'issues' && (
        <div className="space-y-4">
          {/* Subtle Filter Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-900/30 p-2.5 rounded-lg border border-slate-800/60">
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-slate-500 mr-1.5 flex items-center gap-1">
                <Filter className="w-3 h-3" /> System:
              </span>
              {systems.map((sys) => (
                <button
                  key={sys}
                  onClick={() => setSelectedSystem(sys)}
                  className={`px-2 py-0.5 rounded text-xs transition-colors ${
                    selectedSystem === sys
                      ? 'bg-slate-800 text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sys}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="text-slate-500 mr-1.5">Severity:</span>
              {severities.map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-2 py-0.5 capitalize rounded transition-colors ${
                    selectedSeverity === sev
                      ? 'bg-slate-800 text-white font-medium'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Issue Cards */}
          <div className="space-y-2.5">
            {filteredIssues.map((issue) => {
              const isExpanded = expandedIssueId === issue.id;

              return (
                <div
                  key={issue.id}
                  className="bg-slate-900/70 border border-slate-800 rounded-xl transition-colors overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedIssueId(isExpanded ? null : issue.id)}
                    className="p-4 cursor-pointer flex items-start justify-between gap-4 select-none hover:bg-slate-850/40 transition-colors"
                  >
                    <div className="space-y-1">
                      {/* Quiet Unboxed Metadata Line */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs">
                        <span className={`font-semibold capitalize ${getSeverityTextColor(issue.severity)}`}>
                          {issue.severity} Severity
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-300">{issue.system}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400">
                          Window: <span className="font-mono text-slate-200">{issue.failureMileageRange}</span>
                        </span>
                        {issue.isTSBOrRecall && (
                          <>
                            <span className="text-slate-600">·</span>
                            <span className="text-amber-400 font-medium">TSB Active</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-sm font-semibold text-white">
                        {issue.title}
                      </h3>

                      <div className="text-xs text-slate-400">
                        Component: <span className="text-slate-300">{issue.component}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400 font-mono tabular-nums">
                          ${issue.estimatedCostRange.min.toLocaleString()} – ${issue.estimatedCostRange.max.toLocaleString()}
                        </div>
                        <span className="text-[10px] text-slate-500">Est. Repair</span>
                      </div>
                      <div className="text-slate-500">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-3 text-xs bg-slate-950/40">
                      <p className="text-slate-300 leading-relaxed">{issue.description}</p>

                      {/* Symptoms */}
                      <div>
                        <span className="text-slate-400 font-medium block mb-1">Owner Symptoms:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300">
                          {issue.symptoms.map((symptom, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-1.5 bg-slate-900/60 p-2 rounded border border-slate-800/60">
                              <span className="text-amber-400">·</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Test Drive Signs */}
                      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                        <span className="text-amber-400 font-medium block mb-0.5">
                          What to Listen For During Test Drive:
                        </span>
                        <p className="text-slate-300 leading-relaxed">{issue.warningSignsTestDrive}</p>
                      </div>

                      {/* Preventative Protocol */}
                      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                        <span className="text-emerald-400 font-medium block mb-0.5">
                          Preventative Maintenance Protocol:
                        </span>
                        <p className="text-slate-300 leading-relaxed">{issue.preventativeAdvice}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredIssues.length === 0 && (
              <div className="text-center py-10 bg-slate-900/30 border border-slate-800 rounded-xl text-slate-400 text-xs">
                <HelpCircle className="w-6 h-6 mx-auto text-slate-500 mb-2" />
                <p>No issues match the selected system or severity filter.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: INTERACTIVE PRE-PURCHASE INSPECTION (PPI) CHECKLIST */}
      {checklistTab === 'checklist' && (
        <div className="space-y-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-semibold text-white block">Pre-Purchase Lot Checklist</span>
              <span className="text-slate-400">Review items during hands-on mechanical inspection.</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-mono">{passedChecks} Pass</span>
              <span className="text-amber-400 font-mono">{concernChecks} Concern</span>
              <span className="text-rose-400 font-mono">{failedChecks} Fail</span>
              <span className="text-slate-500 font-mono">({uninspectedChecks} pending)</span>
            </div>
          </div>

          <div className="space-y-2">
            {journey.inspectionChecklist.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="text-amber-400 font-medium">{item.category}</span>
                      <span>·</span>
                      <span className="capitalize">{item.riskSeverity} Priority</span>
                    </div>
                    <div className="text-xs font-semibold text-white">{item.title}</div>
                    <p className="text-xs text-slate-300 leading-snug">{item.description}</p>
                  </div>

                  {/* Clean Status Toggles */}
                  <div className="flex items-center gap-1 shrink-0 self-start sm:self-center">
                    <button
                      onClick={() => handleUpdateChecklistItem(item.id, 'pass')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                        item.status === 'pass'
                          ? 'bg-emerald-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      Pass
                    </button>
                    <button
                      onClick={() => handleUpdateChecklistItem(item.id, 'concern')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                        item.status === 'concern'
                          ? 'bg-amber-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      Concern
                    </button>
                    <button
                      onClick={() => handleUpdateChecklistItem(item.id, 'fail')}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                        item.status === 'fail'
                          ? 'bg-rose-500 text-white font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      Fail
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Inspector notes..."
                  value={item.notes || ''}
                  onChange={(e) => handleUpdateChecklistItem(item.id, item.status, e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: OFFICIAL RECALLS */}
      {checklistTab === 'recalls' && (
        <div className="space-y-3">
          {journey.recalls.map((recall, idx) => (
            <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-amber-400 font-semibold">
                    #{recall.campaignNumber}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-white font-medium">{recall.component}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{recall.date}</span>
              </div>

              <p className="text-slate-300 leading-relaxed">{recall.summary}</p>

              <div className="text-rose-300/90 leading-relaxed">
                <span className="font-medium text-rose-400 mr-1">Hazard:</span>
                {recall.consequence}
              </div>

              <div className="text-slate-300 bg-slate-950/60 p-2.5 rounded border border-slate-800/80">
                <span className="text-emerald-400 font-medium mr-1">Remedy:</span>
                {recall.remedy}
              </div>
            </div>
          ))}

          {journey.recalls.length === 0 && (
            <div className="text-center py-10 bg-slate-900/30 border border-slate-800 rounded-xl text-slate-400 text-xs">
              <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400 mb-2" />
              <p>No active NHTSA safety recalls on record for this vehicle model year.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
