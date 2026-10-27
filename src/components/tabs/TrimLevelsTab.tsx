import React, { useEffect, useMemo, useState } from 'react';
import {
  CarJourney,
  CarOptionsLookupResult,
  EngineOption,
  TrimOption,
} from '../../types/carJourney';
import { lookupVehicleOptions } from '../../utils/carCatalog';
import {
  Layers,
  Check,
  ArrowUpRight,
  MinusCircle,
  Sparkles,
  Gauge,
  Fuel,
  Weight,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface TrimLevelsTabProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
}

/**
 * Research-phase trim education.
 *
 * The app already fetched full trim data (`keyFeatures`, `startingMsrp`, the
 * engines and drivetrains each trim can be ordered with) but only ever showed it
 * inside the "new journey" modal. So the one question the research phase is
 * actually about — what do I get for the money as I step up — had no answer
 * anywhere in the running app. This is that answer, derived entirely from the
 * existing lookup data.
 */
export const TrimLevelsTab: React.FC<TrimLevelsTabProps> = ({
  journey,
  onUpdateJourney,
}) => {
  const [options, setOptions] = useState<CarOptionsLookupResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    lookupVehicleOptions(journey.year, journey.make, journey.model)
      .then((result) => {
        if (!cancelled) setOptions(result);
      })
      .catch(() => {
        if (!cancelled) setOptions(null);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [journey.year, journey.make, journey.model]);

  const engineById = useMemo(() => {
    const map = new Map<string, EngineOption>();
    options?.engines.forEach((e) => map.set(e.id, e));
    return map;
  }, [options]);

  const drivetrainById = useMemo(() => {
    const map = new Map<string, string>();
    options?.drivetrains.forEach((d) => map.set(d.id, d.type));
    return map;
  }, [options]);

  /** Cheapest-first ladder, with what each step up actually adds and drops. */
  const ladder = useMemo(() => {
    if (!options) return [];
    const byPrice = [...options.trims].sort(
      (a, b) => (a.startingMsrp ?? 0) - (b.startingMsrp ?? 0)
    );
    return byPrice.map((trim, idx) => {
      const cheaper = byPrice.slice(0, idx);
      const cheaperFeatures = new Set(cheaper.flatMap((t) => t.keyFeatures ?? []));
      const own = trim.keyFeatures ?? [];
      const adds = own.filter((f) => !cheaperFeatures.has(f));
      const drops = idx === 0 ? [] : [...cheaperFeatures].filter((f) => !own.includes(f));
      const prevPrice = idx > 0 ? byPrice[idx - 1].startingMsrp : undefined;
      const stepUp =
        trim.startingMsrp != null && prevPrice != null ? trim.startingMsrp - prevPrice : null;
      const engineIds =
        trim.availableEngineIds && trim.availableEngineIds.length > 0
          ? trim.availableEngineIds
          : [trim.engineId];
      const drivetrains = (trim.availableDrivetrains ?? []).map(
        (id) => drivetrainById.get(id) ?? id
      );
      return { trim, adds, drops, stepUp, engineIds, drivetrains };
    });
  }, [options, drivetrainById]);

  const applyTrim = (trim: TrimOption) => {
    const engine = engineById.get(trim.engineId);
    const drivetrainType = trim.availableDrivetrains?.[0]
      ? drivetrainById.get(trim.availableDrivetrains[0])
      : undefined;
    onUpdateJourney({
      ...journey,
      trim: trim.name,
      engine: engine?.name ?? journey.engine,
      displacement: engine?.displacement ?? journey.displacement,
      drivetrain:
        (drivetrainType as CarJourney['drivetrain'] | undefined) ?? journey.drivetrain,
    });
  };

  if (isLoading) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center">
        <Sparkles className="w-5 h-5 text-amber-400 mx-auto animate-spin" />
        <p className="text-xs text-slate-400 mt-2">
          Pulling the trim ladder for your {journey.year} {journey.make} {journey.model}…
        </p>
      </div>
    );
  }

  if (!options || options.trims.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center space-y-2">
        <Info className="w-5 h-5 text-slate-500 mx-auto" />
        <p className="text-xs text-slate-400">
          No trim breakdown is available for this vehicle yet. Edit the car to pick a
          different year, make or model.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* How to read this */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="min-w-0 space-y-1">
            <h2 className="text-sm font-bold text-white tracking-tight">
              What each trim actually gets you
            </h2>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Trims are listed cheapest first, so each card shows only what that step up
              <span className="text-slate-300 font-medium"> adds</span> over the trim below it —
              and what it drops. Pick the cheapest rung that includes what you actually want;
              everything above it is paying for features you've decided you don't need.
            </p>
          </div>
        </div>
        {options.reliabilityRecommendation && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {options.reliabilityRecommendation}
            </p>
          </div>
        )}
      </div>

      {/* Trim ladder */}
      <div className="space-y-2.5">
        {ladder.map(({ trim, adds, drops, stepUp, engineIds, drivetrains }, idx) => {
          const isCurrent = trim.name === journey.trim;
          return (
            <div
              key={`${trim.name}-${idx}`}
              className={`rounded-xl border bg-slate-900/60 overflow-hidden ${
                isCurrent ? 'border-amber-500/50' : 'border-slate-800'
              }`}
            >
              <div className="p-3.5 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{trim.name}</h3>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 rounded">
                          Your current trim
                        </span>
                      )}
                      {idx === 0 && (
                        <span className="text-[10px] font-semibold text-slate-400 bg-slate-950 border border-slate-800 px-1.5 py-0.5 rounded">
                          Entry level
                        </span>
                      )}
                    </div>
                    {trim.description && (
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed max-w-2xl">
                        {trim.description}
                      </p>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    {trim.startingMsrp != null ? (
                      <>
                        <span className="text-sm font-extrabold text-white font-mono tabular-nums block leading-none">
                          ${trim.startingMsrp.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-1">
                          starting MSRP
                        </span>
                      </>
                    ) : (
                      <span className="text-[10px] text-slate-500">MSRP not published</span>
                    )}
                    {stepUp != null && stepUp > 0 && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-amber-400 mt-1">
                        <ArrowUpRight className="w-3 h-3" />+${stepUp.toLocaleString()} step up
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {/* What you gain / lose at this rung */}
                  <div className="space-y-2">
                    {adds.length > 0 && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400/90">
                          {idx === 0 ? 'Included' : 'Adds over the trim below'}
                        </span>
                        <ul className="mt-1 space-y-1">
                          {adds.map((f) => (
                            <li key={f} className="flex items-start gap-1.5">
                              <Check className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                              <span className="text-[11px] text-slate-300 leading-relaxed">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {drops.length > 0 && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                          No longer included
                        </span>
                        <ul className="mt-1 space-y-1">
                          {drops.map((f) => (
                            <li key={f} className="flex items-start gap-1.5">
                              <MinusCircle className="w-3 h-3 text-slate-500 mt-0.5 shrink-0" />
                              <span className="text-[11px] text-slate-400 leading-relaxed">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Powertrain options this trim can be ordered with */}
                  <div className="space-y-2.5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                        Engines you can get
                      </span>
                      <ul className="mt-1 space-y-0.5">
                        {engineIds.map((id) => (
                          <li key={id} className="text-[11px] text-slate-300 leading-relaxed">
                            • {engineById.get(id)?.name ?? id}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {drivetrains.length > 0 && (
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                          Drivetrains
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {drivetrains.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-1.5 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => applyTrim(trim)}
                      disabled={isCurrent}
                      className={`w-full mt-1 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                        isCurrent
                          ? 'bg-slate-800/60 text-slate-500 border border-slate-800 cursor-default'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                      }`}
                    >
                      {isCurrent ? 'Currently tracking this trim' : `Switch to ${trim.name}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engine detail — the powertrain is part of "what's included" */}
      {options.engines.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-2.5">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Engines available on this vehicle
          </h3>
          <div className="grid gap-2 md:grid-cols-2">
            {options.engines.map((engine) => (
              <div
                key={engine.id}
                className="rounded-lg border border-slate-800 bg-slate-950/50 p-2.5 space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-semibold text-white leading-snug">
                    {engine.name}
                  </span>
                  {engine.horsepower != null && (
                    <span className="text-[11px] font-mono font-bold text-amber-400 shrink-0">
                      {engine.horsepower} hp
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-400 font-mono">
                  {engine.torqueLbFt != null && (
                    <span className="flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      {engine.torqueLbFt} lb-ft
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Fuel className="w-3 h-3" />
                    {engine.efficiency.combined} {engine.efficiency.unit} combined
                  </span>
                  {engine.towingCapacityLbs != null && (
                    <span className="flex items-center gap-1">
                      <Weight className="w-3 h-3" />
                      {engine.towingCapacityLbs.toLocaleString()} lbs
                    </span>
                  )}
                </div>
                {engine.bestFor && (
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    <span className="text-slate-500 font-semibold">Best for:</span>{' '}
                    {engine.bestFor}
                  </p>
                )}
                {engine.keyReliabilityNotes && (
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    <span className="text-slate-500 font-semibold">Watch:</span>{' '}
                    {engine.keyReliabilityNotes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
