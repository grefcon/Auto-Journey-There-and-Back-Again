import React from 'react';
import { CarJourney } from '../types/carJourney';
import {
  JOURNEY_STAGES,
  getStageDefinition,
  type JourneyStage,
  type TabId,
} from '../utils/journeyStages';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface StageGuideProps {
  journey: CarJourney;
  onSelectTab: (tab: TabId) => void;
  onStageChange: (stage: JourneyStage) => void;
}

/**
 * The journey spine.
 *
 * The app used to open on the mechanical-failure wall no matter where the buyer
 * actually was, and the stage dropdown changed nothing. This panel answers the
 * three questions a buyer actually has at each step — where am I, what do I do
 * now, what happens next — and the actions switch to the tab that serves the step.
 */
export const StageGuide: React.FC<StageGuideProps> = ({
  journey,
  onSelectTab,
  onStageChange,
}) => {
  const [expanded, setExpanded] = React.useState(true);
  const current = getStageDefinition(journey.stage);
  const total = JOURNEY_STAGES.length;

  return (
    <section className="bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
        {/* Progress rail — clickable, so the stage is no longer decorative */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
          {JOURNEY_STAGES.map((stage) => {
            const isCurrent = stage.id === current.id;
            const isPast = stage.order < current.order;
            return (
              <button
                key={stage.id}
                onClick={() => onStageChange(stage.id)}
                title={stage.headline}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium whitespace-nowrap transition-colors ${
                  isCurrent
                    ? 'border-amber-500/60 bg-amber-500/15 text-amber-300'
                    : isPast
                    ? 'border-emerald-900/60 bg-emerald-950/30 text-emerald-300/80 hover:border-emerald-700/60'
                    : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950'
                      : isPast
                      ? 'bg-emerald-500/80 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {isPast ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : stage.order}
                </span>
                {stage.id}
              </button>
            );
          })}
          <span className="ml-auto pl-3 text-[10px] text-slate-500 whitespace-nowrap font-mono">
            Step {current.order} of {total}
          </span>
        </div>

        {/* Current-step guidance */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-start gap-3 p-3 text-left hover:bg-slate-900/40 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block">
                {current.phase} phase
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {current.headline}
              </h2>
            </div>
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
            )}
          </button>

          {expanded && (
            <div className="px-3 pb-3 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                {current.blurb}
              </p>

              <div className="flex items-start gap-2 rounded-lg border border-emerald-900/50 bg-emerald-950/25 px-2.5 py-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <p className="text-[11px] text-emerald-200/90 leading-relaxed">
                  {current.reassurance}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Do this now
                </span>
                <div className="grid gap-2 sm:grid-cols-2 mt-1.5">
                  {current.actions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => onSelectTab(action.tab)}
                      className="group text-left rounded-lg border border-slate-800 bg-slate-900/70 hover:border-amber-500/50 hover:bg-slate-900 p-2.5 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-semibold text-white leading-snug">
                          {action.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        {action.detail}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-500">
                <span className="font-semibold text-slate-400">What's next:</span> {current.next}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
