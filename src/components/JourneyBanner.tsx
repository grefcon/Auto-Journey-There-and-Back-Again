import React from 'react';
import { CarJourney } from '../types/carJourney';
import {
  Edit3,
  Trash2,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface JourneyBannerProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
  onOpenEditModal: () => void;
  onTriggerAiScan: () => void;
  isAiScanning: boolean;
  onDeleteJourney?: (id: string) => void;
}

export const JourneyBanner: React.FC<JourneyBannerProps> = ({
  journey,
  onUpdateJourney,
  onOpenEditModal,
  onTriggerAiScan,
  isAiScanning,
  onDeleteJourney,
}) => {
  const stages: CarJourney['stage'][] = [
    'Researching',
    'Screening Issues',
    'Tracking Inventory',
    'Inspecting',
    'Negotiating',
    'Purchased',
  ];

  const handleStageChange = (newStage: CarJourney['stage']) => {
    onUpdateJourney({
      ...journey,
      stage: newStage,
    });
  };

  const getRiskTextColor = (risk: CarJourney['mechanicalFailureRisk']) => {
    switch (risk) {
      case 'Very Low':
        return 'text-emerald-400';
      case 'Moderate':
        return 'text-amber-400';
      case 'Above Average':
        return 'text-orange-400';
      case 'High Alert':
        return 'text-rose-400';
      default:
        return 'text-slate-300';
    }
  };

  return (
    <div className="bg-slate-900/40 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Row 1: Vehicle Title, Unboxed Specs, and Action Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-baseline gap-2">
              <span>{journey.year} {journey.make} {journey.model}</span>
              <span className="text-amber-400 font-semibold text-lg">{journey.trim}</span>
            </h1>

            {/* Quiet Unboxed Specifications (Zero Pills) */}
            <div className="text-xs text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
              {(journey.displacement || journey.engine) && (
                <span>{journey.displacement || journey.engine}</span>
              )}
              {journey.drivetrain && (
                <>
                  <span className="text-slate-600">·</span>
                  <span>{journey.drivetrain}</span>
                </>
              )}
              {journey.preferredColor && journey.preferredColor !== 'Any Color' && (
                <>
                  <span className="text-slate-600">·</span>
                  <span>{journey.preferredColor}</span>
                </>
              )}
              <span className="text-slate-600">·</span>
              <span>{journey.condition}</span>
              <span className="text-slate-600">·</span>
              <span className="font-mono">{journey.userZipCode}</span>
            </div>
          </div>

          {/* Controls: Stage Selector, Edit, Delete, AI Diagnostic */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {/* Stage Selector */}
            <div className="relative inline-flex items-center">
              <select
                value={journey.stage}
                onChange={(e) => handleStageChange(e.target.value as any)}
                className="bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 text-xs font-medium rounded-lg px-2.5 py-1.5 pr-7 appearance-none cursor-pointer transition-colors focus:outline-none focus:border-amber-500/50"
                title="Update stage"
              >
                {stages.map((st, idx) => (
                  <option key={st} value={st} className="bg-slate-900 text-slate-200">
                    {idx + 1}. {st}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-2" />
            </div>

            {/* Edit Spec */}
            <button
              onClick={onOpenEditModal}
              className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-400" />
              <span>Edit</span>
            </button>

            {/* Delete */}
            {onDeleteJourney && (
              <button
                onClick={() => onDeleteJourney(journey.id)}
                className="p-1.5 bg-slate-900 hover:bg-rose-950/30 border border-slate-800 hover:border-rose-900/60 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
                title="Delete journey"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}

            {/* AI Diagnostics Scan */}
            <button
              onClick={onTriggerAiScan}
              disabled={isAiScanning}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 text-amber-400 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isAiScanning ? 'animate-spin' : ''}`} />
              <span>{isAiScanning ? 'Scanning...' : 'Scan Gemini'}</span>
            </button>
          </div>
        </div>

        {/* Row 2: Unified Metric Readout Strip with Hairline Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-800/60 text-xs">
          {/* Metric 1: Reliability Score */}
          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-400 font-medium">Reliability Score</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-semibold text-white font-mono tabular-nums leading-tight">
                {journey.reliabilityScore}
              </span>
              <span className="text-slate-500 font-mono text-[11px]">/ 100</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 text-[11px]">
                {journey.mechanicalIssues.length} issues
              </span>
            </div>
          </div>

          {/* Metric 2: Failure Risk Level */}
          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-400 font-medium">Mechanical Risk</span>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-base font-semibold ${getRiskTextColor(journey.mechanicalFailureRisk)} leading-tight`}>
                {journey.mechanicalFailureRisk}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 text-[11px]">
                {journey.recalls.length} recalls
              </span>
            </div>
          </div>

          {/* Metric 3: Market Fair Value */}
          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-400 font-medium">Fair Market Value</span>
            <div className="flex items-baseline gap-1.5 font-mono">
              <span className="text-base font-semibold text-white tabular-nums leading-tight">
                ${Math.round(journey.marketFairAverage / 100) / 10}k
              </span>
              <span className="text-slate-500 text-[11px]">
                (${Math.round(journey.marketFairLow / 1000)}k–${Math.round(journey.marketFairHigh / 1000)}k)
              </span>
            </div>
          </div>

          {/* Metric 4: Inventory & Community Deals */}
          <div className="space-y-0.5">
            <span className="text-[11px] text-slate-400 font-medium">Market Activity</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-semibold text-white font-mono tabular-nums leading-tight">
                {journey.listings.length}
              </span>
              <span className="text-slate-400 text-[11px]">tracked listings</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 text-[11px]">
                {journey.communityDeals.length} deals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
