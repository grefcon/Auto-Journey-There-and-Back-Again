import React from 'react';
import { CarJourney } from '../types/carJourney';
import { JOURNEY_STAGES } from '../utils/journeyStages';
import {
  AlertTriangle,
  ShieldCheck,
  TrendingDown,
  DollarSign,
  MapPin,
  Sparkles,
  Edit3,
  Trash2,
  ChevronDown,
} from 'lucide-react';

interface JourneyBannerProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
  onOpenEditModal: () => void;
  onTriggerAiScan: () => void;
  isAiScanning: boolean;
  onDeleteJourney?: (id: string) => void;
  /** When supplied, changing stage also navigates the app to that step. */
  onStageChange?: (stage: CarJourney['stage']) => void;
}

export const JourneyBanner: React.FC<JourneyBannerProps> = ({
  journey,
  onUpdateJourney,
  onOpenEditModal,
  onTriggerAiScan,
  isAiScanning,
  onDeleteJourney,
  onStageChange,
}) => {
  const handleStageChange = (newStage: CarJourney['stage']) => {
    if (onStageChange) {
      onStageChange(newStage);
      return;
    }
    onUpdateJourney({
      ...journey,
      stage: newStage,
    });
  };

  // Color mapping for failure risk
  const getRiskColor = (risk: CarJourney['mechanicalFailureRisk']) => {
    switch (risk) {
      case 'Very Low':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25';
      case 'Moderate':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/25';
      case 'Above Average':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/25';
      case 'High Alert':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/25';
    }
  };

  return (
    <div className="bg-slate-900/95 border-b border-slate-800 py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto space-y-2.5">
        {/* ROW 1: Car Spec Title, Badges, Stage Selector & Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Car Identity with Spec Badges */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 min-w-0">
            <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>{journey.year} {journey.make} {journey.model}</span>
            </h1>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-md whitespace-nowrap">
                {journey.trim}
              </span>
              {(journey.displacement || journey.engine) && (
                <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded-md whitespace-nowrap">
                  {journey.displacement || journey.engine}
                </span>
              )}
              {journey.drivetrain && (
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded-md whitespace-nowrap">
                  {journey.drivetrain}
                </span>
              )}
              <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 whitespace-nowrap">
                {journey.condition} · Zip {journey.userZipCode}
              </span>
            </div>
          </div>

          {/* Right Controls: Interactive Stage Selector & Actions */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {/* Interactive Stage Selector */}
            <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-xs shadow-inner">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Stage:</span>
              <div className="relative inline-flex items-center">
                <select
                  value={journey.stage}
                  onChange={(e) => handleStageChange(e.target.value as any)}
                  className="bg-transparent text-amber-400 font-bold focus:outline-none cursor-pointer text-xs pr-4 appearance-none"
                  title="Update journey stage"
                >
                  {JOURNEY_STAGES.map((st) => (
                    <option key={st.id} value={st.id} className="bg-slate-900 text-slate-200">
                      {st.order}. {st.id}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3 h-3 text-amber-400/80 pointer-events-none absolute right-0" />
              </div>
            </div>

            {/* Edit Criteria CTA */}
            <button
              onClick={onOpenEditModal}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-750 border border-slate-750 hover:border-slate-600 text-slate-300 hover:text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
              title="Edit car details, trim, or engine"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Edit</span>
            </button>

            {/* Delete CTA */}
            {onDeleteJourney && (
              <button
                onClick={() => onDeleteJourney(journey.id)}
                className="p-1.5 bg-slate-950 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-800/60 text-slate-400 hover:text-rose-300 rounded-lg transition-colors"
                title="Delete this journey"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Run AI Diagnostic Scan */}
            <button
              onClick={onTriggerAiScan}
              disabled={isAiScanning}
              className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-all disabled:opacity-50"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isAiScanning ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{isAiScanning ? 'Scanning...' : 'Scan Gemini'}</span>
              <span className="sm:hidden">{isAiScanning ? 'Scanning...' : 'Scan'}</span>
            </button>
          </div>
        </div>

        {/* ROW 2: Streamlined 4-Stat Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-0.5">
          {/* Stat 1: Reliability Health */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Reliability</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-base font-extrabold text-white font-mono tabular-nums leading-none">
                  {journey.reliabilityScore}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">/100</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
              <span className="text-[10px] text-slate-400 block mt-0.5 truncate font-medium">
                {journey.mechanicalIssues.length} issues
              </span>
            </div>
          </div>

          {/* Stat 2: Mechanical Failure Risk Tier */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Risk Level</span>
              <span className={`inline-block text-[11px] font-bold px-1.5 py-0.2 rounded border mt-0.5 leading-tight ${getRiskColor(journey.mechanicalFailureRisk)}`}>
                {journey.mechanicalFailureRisk}
              </span>
            </div>
            <div className="text-right shrink-0">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 ml-auto" />
              <span className="text-[10px] text-slate-400 block mt-0.5 truncate font-medium">
                {journey.recalls.length} recalls
              </span>
            </div>
          </div>

          {/* Stat 3: Fair Market Band */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Market Value</span>
              <div className="flex items-baseline gap-1 mt-0.5 font-mono">
                <span className="text-base font-extrabold text-white tabular-nums leading-none">
                  ${Math.round(journey.marketFairAverage / 100) / 10}k
                </span>
                <span className="text-[10px] text-slate-500 truncate">
                  (${Math.round(journey.marketFairLow / 1000)}k–${Math.round(journey.marketFairHigh / 1000)}k)
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <DollarSign className="w-3.5 h-3.5 text-amber-400 ml-auto" />
              <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5 truncate font-mono">
                Tgt ${Math.round(journey.targetBudget / 1000)}k
              </span>
            </div>
          </div>

          {/* Stat 4: Tracked Inventory & Deals */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg px-3 py-1.5 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Market Intel</span>
              <div className="flex items-baseline gap-1 mt-0.5 font-mono">
                <span className="text-base font-extrabold text-white tabular-nums leading-none">
                  {listingCountSummary(journey)}
                </span>
                <span className="text-[10px] text-slate-400">tracked</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <TrendingDown className="w-3.5 h-3.5 text-cyan-400 ml-auto" />
              <span className="text-[10px] text-amber-400 font-semibold block mt-0.5 truncate">
                {journey.communityDeals.length} deals
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function listingCountSummary(journey: CarJourney) {
  return journey.listings.length;
}
