import React from 'react';
import { CarJourney } from '../../types/carJourney';
import { calculateTCO } from '../../utils/tcoCalculator';
import {
  ShieldCheck,
  AlertTriangle,
  DollarSign,
  TrendingDown,
  Check,
  ArrowRight,
  Plus,
  Trash2,
  Car,
  RotateCcw,
} from 'lucide-react';

interface ComparisonTabProps {
  journeys: CarJourney[];
  activeJourneyId: string;
  onSelectJourney: (id: string) => void;
  onOpenNewModal: () => void;
  onDeleteJourney?: (id: string) => void;
  onClearAllJourneys?: () => void;
  onResetDefaults?: () => void;
}

export const ComparisonTab: React.FC<ComparisonTabProps> = ({
  journeys,
  activeJourneyId,
  onSelectJourney,
  onOpenNewModal,
  onDeleteJourney,
  onClearAllJourneys,
  onResetDefaults,
}) => {
  // If no journeys exist, render clean empty state
  if (journeys.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-slate-800 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
          <Car className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">No Car Journeys to Compare</h3>
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            You currently have no saved vehicle purchase journeys. Start a fresh journey to analyze engine reliability, local dealer inventory, and 5-year ownership costs side-by-side.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenNewModal}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-2 shadow-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            Configure New Car Journey
          </button>
          {onResetDefaults && (
            <button
              onClick={onResetDefaults}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-xs font-medium rounded-xl flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-slate-400" />
              Restore Sample Vehicles
            </button>
          )}
        </div>
      </div>
    );
  }

  // Precompute TCO for all journeys
  const journeyMetrics = journeys.map((j) => {
    const tco = calculateTCO(
      j.marketFairAverage,
      j.tcoInputs,
      j.reliabilityScore,
      j.mechanicalFailureRisk
    );
    const bestListing = [...j.listings].sort((a, b) => a.price - b.price)[0];
    return {
      journey: j,
      tco,
      bestListing,
    };
  });

  // Find champions
  const highestReliability = [...journeyMetrics].sort(
    (a, b) => b.journey.reliabilityScore - a.journey.reliabilityScore
  )[0]?.journey.id;

  const lowestTco = [...journeyMetrics].sort(
    (a, b) => a.tco.totalCost - b.tco.totalCost
  )[0]?.journey.id;

  const lowestPrice = [...journeyMetrics].sort(
    (a, b) => a.journey.marketFairAverage - b.journey.marketFairAverage
  )[0]?.journey.id;

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-amber-400 tracking-wide uppercase">
              Decision Matrix & Side-by-Side Evaluation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Compare Your Active Car Journeys ({journeys.length})
            </h2>
            <p className="text-xs text-slate-400">
              Evaluate reliability ratings, common failure exposure, market pricing, and 5-year ownership costs side-by-side to make your final purchase decision.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-auto">
            {onClearAllJourneys && (
              <button
                onClick={onClearAllJourneys}
                className="px-3 py-2 bg-slate-950 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-800/60 text-slate-400 hover:text-rose-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                title="Clear all saved car journeys"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onOpenNewModal}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Another Car
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900 shadow-md">
        <table className="w-full text-xs text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-950 border-b border-slate-800">
              <th className="p-4 w-48 text-slate-400 uppercase text-[11px] font-semibold sticky left-0 bg-slate-950 z-10 border-r border-slate-800">
                Evaluation Metric
              </th>
              {journeyMetrics.map(({ journey }) => {
                const isActive = journey.id === activeJourneyId;
                return (
                  <th
                    key={journey.id}
                    className={`p-4 min-w-[210px] align-top ${
                      isActive ? 'bg-amber-500/5 border-t-2 border-amber-500' : ''
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">{journey.condition}</span>
                        {isActive && (
                          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.2 rounded">
                            Active
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {journey.year} {journey.make} {journey.model}
                      </h4>
                      <div className="text-[11px] text-amber-400/90 font-medium">
                        {journey.trim}
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        {!isActive ? (
                          <button
                            onClick={() => onSelectJourney(journey.id)}
                            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] rounded font-semibold transition-colors"
                          >
                            Set as Active
                          </button>
                        ) : (
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                            <Check className="w-3 h-3" /> Selected
                          </span>
                        )}
                        {onDeleteJourney && (
                          <button
                            onClick={() => onDeleteJourney(journey.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors ml-auto"
                            title="Remove this car journey"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800/60">
            {/* ROW: Engine / Displacement */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Engine & Size
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4">
                  <div className="font-semibold text-white text-xs">
                    {journey.engine || 'Standard Engine'}
                  </div>
                  {journey.displacement && (
                    <div className="text-[11px] text-amber-400 font-medium">
                      Displacement: {journey.displacement}
                    </div>
                  )}
                </td>
              ))}
            </tr>

            {/* ROW: Drivetrain 4x4 / 2x4 / AWD */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Drivetrain (4x4 / AWD / 2x4)
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {journey.drivetrain || 'FWD / 2x4'}
                  </span>
                </td>
              ))}
            </tr>

            {/* ROW: Reliability Score */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Reliability Index
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4 font-mono tabular-nums">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white">
                      {journey.reliabilityScore} / 100
                    </span>
                    {journey.id === highestReliability && (
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded font-sans font-semibold">
                        Most Reliable
                      </span>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* ROW: Mechanical Risk Level */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Mechanical Failure Risk
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                      journey.mechanicalFailureRisk === 'Very Low'
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                        : journey.mechanicalFailureRisk === 'Moderate'
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                        : 'text-orange-400 bg-orange-500/10 border-orange-500/20'
                    }`}
                  >
                    {journey.mechanicalFailureRisk}
                  </span>
                </td>
              ))}
            </tr>

            {/* ROW: Documented Vulnerabilities */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Reported Failure Points
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4 space-y-1">
                  <div className="font-bold text-slate-200">
                    {journey.mechanicalIssues.length} known failure modes
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {journey.recalls.length} NHTSA safety recall campaigns
                  </div>
                </td>
              ))}
            </tr>

            {/* ROW: Fair Market Purchase Price */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Fair Market Value
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4 font-mono tabular-nums">
                  <div className="text-sm font-bold text-white">
                    ${journey.marketFairAverage.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    (${journey.marketFairLow.toLocaleString()} - ${journey.marketFairHigh.toLocaleString()})
                  </div>
                  {journey.id === lowestPrice && (
                    <span className="text-[10px] text-cyan-400 font-sans font-semibold mt-1 inline-block">
                      Lowest Upfront Price
                    </span>
                  )}
                </td>
              ))}
            </tr>

            {/* ROW: 5-Year Total Cost of Ownership */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                5-Year Total Cost (TCO)
              </td>
              {journeyMetrics.map(({ journey, tco }) => (
                <td key={journey.id} className="p-4 font-mono tabular-nums">
                  <div className="text-base font-bold text-amber-400">
                    ${tco.totalCost.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    ~${tco.monthlyCost.toLocaleString()} / mo (${tco.costPerMile}/mi)
                  </div>
                  {journey.id === lowestTco && (
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-sans font-semibold mt-1 inline-block">
                      Lowest 5-Yr Cost
                    </span>
                  )}
                </td>
              ))}
            </tr>

            {/* ROW: Anticipated Repair Reserve */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Anticipated Repair Reserve
              </td>
              {journeyMetrics.map(({ journey, tco }) => (
                <td key={journey.id} className="p-4 font-mono tabular-nums">
                  <div className="font-bold text-orange-400">
                    ${tco.anticipatedRepairsTotal.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Risk-adjusted 5-year reserve
                  </div>
                </td>
              ))}
            </tr>

            {/* ROW: Best Local Listing */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Best Tracked Local Deal
              </td>
              {journeyMetrics.map(({ journey, bestListing }) => (
                <td key={journey.id} className="p-4">
                  {bestListing ? (
                    <div className="space-y-0.5">
                      <div className="font-mono text-xs font-bold text-white tabular-nums">
                        ${bestListing.price.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-emerald-400 font-semibold">
                        {bestListing.price < journey.marketFairAverage
                           ? `-$${Math.abs(journey.marketFairAverage - bestListing.price).toLocaleString()} below avg`
                          : 'Fair asking'}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {bestListing.dealerName} ({bestListing.distanceMiles} mi)
                      </div>
                    </div>
                  ) : (
                    <span className="text-slate-500 text-[11px]">No listings tracked</span>
                  )}
                </td>
              ))}
            </tr>

            {/* ROW: Stage */}
            <tr className="hover:bg-slate-950/30">
              <td className="p-4 font-semibold text-slate-300 sticky left-0 bg-slate-900 border-r border-slate-800">
                Journey Stage
              </td>
              {journeyMetrics.map(({ journey }) => (
                <td key={journey.id} className="p-4">
                  <span className="bg-slate-950 px-2 py-1 rounded text-slate-300 border border-slate-800 font-medium">
                    {journey.stage}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
