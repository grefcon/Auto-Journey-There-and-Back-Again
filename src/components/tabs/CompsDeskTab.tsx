import React, { useMemo, useState } from 'react';
import { CarJourney } from '../../types/carJourney';
import {
  Target,
  TrendingDown,
  Users,
  ClipboardCopy,
  Check,
  ShieldCheck,
  AlertTriangle,
  Clock,
  MapPin,
  Info,
  MessageSquareQuote,
  Scale,
} from 'lucide-react';

interface CompsDeskTabProps {
  journey: CarJourney;
  onUpdateJourney: (updated: CarJourney) => void;
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
    : sorted[mid];
}

/**
 * Buying-phase comps desk: the "you have the upper edge" screen.
 *
 * The app already held everything needed to negotiate — a fair-market band, real
 * tracked listings with days-on-market, reported prices from other buyers, and an
 * AI worksheet verdict with a counter script. Those lived in four different tabs,
 * so there was no single moment where the buyer saw their number and the evidence
 * behind it. This consolidates them and shows the basis for every figure.
 */
export const CompsDeskTab: React.FC<CompsDeskTabProps> = ({ journey }) => {
  const [copied, setCopied] = useState(false);

  const comps = useMemo(() => {
    const listingPrices = journey.listings.map((l) => l.price).filter((p) => p > 0);
    const communityPaid = (journey.communityDeals ?? [])
      .map((d) => d.negotiatedPrice)
      .filter((p) => p > 0);
    const discounts = (journey.communityDeals ?? [])
      .map((d) => d.discountPercentage)
      .filter((p) => typeof p === 'number' && p > 0);

    const cheapestListing = listingPrices.length > 0 ? Math.min(...listingPrices) : null;
    const communityBest = communityPaid.length > 0 ? Math.min(...communityPaid) : null;

    const evidence = [journey.marketFairLow, communityBest].filter(
      (n): n is number => typeof n === 'number' && n > 0
    );
    const yourTarget = evidence.length > 0 ? Math.min(...evidence) : null;

    return {
      communityPaid,
      cheapestListing,
      communityBest,
      yourTarget,
      communityMedian: median(communityPaid),
      avgDiscount:
        discounts.length > 0
          ? Math.round((discounts.reduce((a, b) => a + b, 0) / discounts.length) * 10) / 10
          : null,
      listingCount: listingPrices.length,
      communityCount: communityPaid.length,
    };
  }, [journey]);

  /** The most-developed ongoing deal carries the AI worksheet verdict, if any. */
  const verdict = useMemo(() => {
    const withVerdict = (journey.ongoingDeals ?? []).filter((d) => d.aiVerdict);
    return withVerdict.length > 0
      ? withVerdict[withVerdict.length - 1].aiVerdict ?? null
      : null;
  }, [journey]);

  const bandCeiling = journey.marketFairAverage || null;

  /** Script is assembled only from numbers actually present in the journey. */
  const script = useMemo(() => {
    if (verdict?.counterOfferScript) return verdict.counterOfferScript;
    const lines: string[] = [];
    const car = `${journey.year} ${journey.make} ${journey.model} ${journey.trim}`.trim();
    lines.push(
      `Thanks for the worksheet. I've been tracking ${car} listings and I'd like to work from the market rather than the sticker.`
    );
    if (comps.listingCount > 0 && comps.cheapestListing != null) {
      lines.push(
        `I'm tracking ${comps.listingCount} comparable ${
          comps.listingCount === 1 ? 'listing' : 'listings'
        } locally, and the lowest current asking price I've found is $${comps.cheapestListing.toLocaleString()}.`
      );
    }
    if (comps.communityCount > 0 && comps.communityMedian != null) {
      lines.push(
        `Other buyers have reported paying around $${comps.communityMedian.toLocaleString()} for this spec${
          comps.avgDiscount != null ? `, roughly ${comps.avgDiscount}% under MSRP` : ''
        }.`
      );
    }
    if (comps.yourTarget != null) {
      lines.push(
        `I'd like to be at $${comps.yourTarget.toLocaleString()} on the vehicle price. If we can get there, I'm ready to move today.`
      );
    }
    lines.push(
      'I also want to review the add-ons and any fees line by line before I sign anything.'
    );
    return lines.join(' ');
  }, [verdict, comps, journey]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const listingsByPrice = useMemo(
    () => [...journey.listings].sort((a, b) => a.price - b.price),
    [journey.listings]
  );

  const hasNoEvidence = comps.listingCount === 0 && comps.communityCount === 0;

  const money = (n: number | null | undefined) =>
    n == null ? '—' : `$${Math.round(n).toLocaleString()}`;

  return (
    <div className="space-y-4">
      {/* Your number */}
      <div className="rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.07] to-slate-900/60 p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                Your number
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-3xl font-extrabold text-white font-mono tabular-nums leading-none">
                {money(comps.yourTarget)}
              </span>
              <span className="text-[11px] text-slate-400">
                vehicle price, before tax &amp; fees
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed max-w-2xl">
              {comps.yourTarget == null
                ? 'Once you have a listing or a reported buyer price, this fills in automatically.'
                : `This is the lower of the bottom of the fair band (${money(
                    journey.marketFairLow
                  )}) and the best price a reported buyer actually paid${
                    comps.communityBest != null ? ` (${money(comps.communityBest)})` : ''
                  }. It is the number you can defend with evidence.`}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 shrink-0">
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                Fair ceiling
              </span>
              <span className="text-sm font-bold text-white font-mono tabular-nums">
                {money(bandCeiling)}
              </span>
              <span className="text-[10px] text-slate-500 block">don't go above</span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                Comps held
              </span>
              <span className="text-sm font-bold text-white font-mono tabular-nums">
                {comps.listingCount + comps.communityCount}
              </span>
              <span className="text-[10px] text-slate-500 block">
                {comps.listingCount} listings · {comps.communityCount} buyers
              </span>
            </div>
          </div>
        </div>

        {comps.cheapestListing != null && comps.yourTarget != null && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-2">
            <Scale className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {comps.cheapestListing > comps.yourTarget
                ? `The cheapest car you're tracking is asking ${money(
                    comps.cheapestListing - comps.yourTarget
                  )} above your number — that gap is exactly what you're negotiating over.`
                : `The cheapest car you're tracking is already at or below your number — you're in a strong position.`}
            </p>
          </div>
        )}
      </div>

      {/* The honest empty state, with the two clicks that fix it */}
      {hasNoEvidence && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-white">
              Your number gets sharper with evidence
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Right now this desk only has the fair-market band. Two things make it stronger:
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">1.</span>
              <span>
                Open <span className="font-semibold text-white">Inventory &amp; Market Value</span>{' '}
                and add the listings you're considering. Days-on-market from those is leverage.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">2.</span>
              <span>
                Open <span className="font-semibold text-white">Deals &amp; Quotes</span> and log
                what other buyers reported paying. That sets the floor you can argue from.
              </span>
            </li>
          </ul>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            None of this is visible to a dealer — it's your file, not theirs.
          </p>
        </div>
      )}

      {/* Market comps */}
      {listingsByPrice.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
          <div className="px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-bold text-white">Market comps you're tracking</span>
            </div>
            <span className="text-[10px] text-slate-500">
              fair band {money(journey.marketFairLow)}–{money(journey.marketFairHigh)}
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="text-slate-500 text-left border-b border-slate-800/80">
                  <th className="px-3 py-1.5 font-semibold">Dealer</th>
                  <th className="px-3 py-1.5 font-semibold text-right">Asking</th>
                  <th className="px-3 py-1.5 font-semibold text-right">vs band mid</th>
                  <th className="px-3 py-1.5 font-semibold text-right">vs your number</th>
                  <th className="px-3 py-1.5 font-semibold text-right">Days listed</th>
                  <th className="px-3 py-1.5 font-semibold text-right">Miles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {listingsByPrice.map((l) => {
                  const vsMid = journey.marketFairAverage
                    ? l.price - journey.marketFairAverage
                    : null;
                  const vsTarget = comps.yourTarget != null ? l.price - comps.yourTarget : null;
                  return (
                    <tr key={l.id} className="hover:bg-slate-900/40">
                      <td className="px-3 py-1.5">
                        <div className="font-medium text-white truncate max-w-[160px]">
                          {l.dealerName}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          {l.location} · {l.distanceMiles} mi
                        </div>
                      </td>
                      <td className="px-3 py-1.5 text-right font-mono tabular-nums text-white">
                        {money(l.price)}
                      </td>
                      <td
                        className={`px-3 py-1.5 text-right font-mono tabular-nums ${
                          vsMid == null
                            ? 'text-slate-500'
                            : vsMid <= 0
                            ? 'text-emerald-400'
                            : 'text-rose-400'
                        }`}
                      >
                        {vsMid == null ? '—' : `${vsMid > 0 ? '+' : ''}${money(vsMid)}`}
                      </td>
                      <td className="px-3 py-1.5 text-right font-mono tabular-nums text-slate-300">
                        {vsTarget == null ? '—' : `+${money(vsTarget)}`}
                      </td>
                      <td className="px-3 py-1.5 text-right font-mono tabular-nums text-slate-400">
                        <span className="inline-flex items-center gap-1 justify-end">
                          <Clock className="w-2.5 h-2.5" />
                          {l.daysOnMarket}
                        </span>
                      </td>
                      <td className="px-3 py-1.5 text-right font-mono tabular-nums text-slate-400">
                        {l.mileage.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="px-3.5 py-2 text-[10px] text-slate-500 border-t border-slate-800/80">
            A car that has sat for 30+ days is usually a car with room in it. That column is your
            leverage, not theirs.
          </p>
        </div>
      )}

      {/* Community comps */}
      {journey.communityDeals.length > 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
          <div className="px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-bold text-white">What other buyers actually paid</span>
            </div>
            {comps.avgDiscount != null && (
              <span className="text-[10px] text-emerald-400 font-semibold">
                avg {comps.avgDiscount}% under MSRP
              </span>
            )}
          </div>
          <div className="divide-y divide-slate-800/60">
            {journey.communityDeals.slice(0, 8).map((d) => (
              <div
                key={d.id}
                className="px-3.5 py-2 flex flex-wrap items-center gap-x-4 gap-y-1"
              >
                <span className="text-[11px] font-medium text-white">
                  {d.trim || journey.trim}
                </span>
                <span className="text-[11px] font-mono tabular-nums text-emerald-400">
                  {money(d.negotiatedPrice)} negotiated
                </span>
                <span className="text-[11px] font-mono tabular-nums text-slate-400">
                  {money(d.outTheDoorPrice)} OTD
                </span>
                {d.discountPercentage > 0 && (
                  <span className="text-[10px] font-mono text-amber-400">
                    {d.discountPercentage}% off
                  </span>
                )}
                <span className="text-[10px] text-slate-500 ml-auto">
                  {d.source} · {d.location} · {d.dateReported}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Your script + the worksheet verdict, if one exists */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
        <div className="px-3.5 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold text-white">
              {verdict ? 'Your counter-offer script' : 'Your draft script'}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 text-[10px] font-semibold rounded transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" /> Copied
              </>
            ) : (
              <>
                <ClipboardCopy className="w-3 h-3" /> Copy
              </>
            )}
          </button>
        </div>
        <div className="p-3.5 space-y-3">
          <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-wrap">{script}</p>

          {verdict && (
            <>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Worksheet verdict
                </span>
                <span className="text-[11px] font-bold text-white bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">
                  {verdict.dealGrade}
                </span>
                <span className="text-[11px] text-slate-300">{verdict.priceVersusMarket}</span>
                {verdict.recommendedCounterPrice > 0 && (
                  <span className="text-[11px] font-mono text-amber-400">
                    counter at {money(verdict.recommendedCounterPrice)}
                  </span>
                )}
                {verdict.potentialSavings > 0 && (
                  <span className="text-[11px] font-mono text-emerald-400">
                    {money(verdict.potentialSavings)} on the table
                  </span>
                )}
              </div>

              {verdict.itemizedJudgments.filter((j) => j.category === 'junk_fee').length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-rose-400 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Fees to push back on
                  </span>
                  {verdict.itemizedJudgments
                    .filter((j) => j.category === 'junk_fee')
                    .map((j, i) => (
                      <div
                        key={`${j.item}-${i}`}
                        className="rounded-lg border border-rose-900/40 bg-rose-950/20 px-2.5 py-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-medium text-white">{j.item}</span>
                          <span className="text-[11px] font-mono text-rose-300">
                            {money(j.amount)}
                          </span>
                        </div>
                        {j.advice && (
                          <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
                            {j.advice}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              )}

              {verdict.negotiationStrategy.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">
                    Order to raise things in
                  </span>
                  <ol className="mt-1 space-y-1">
                    {verdict.negotiationStrategy.map((s, i) => (
                      <li key={`${s}-${i}`} className="flex items-start gap-2">
                        <span className="text-[10px] font-bold text-amber-400 mt-0.5 shrink-0">
                          {i + 1}.
                        </span>
                        <span className="text-[11px] text-slate-300 leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}

          <div className="flex items-start gap-2 rounded-lg border border-emerald-900/50 bg-emerald-950/25 px-2.5 py-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
              {verdict
                ? 'This script is built from your own worksheet and the comps on this desk.'
                : 'This draft is assembled only from the comps you have collected, so every figure in it is one you can show.'}{' '}
              The strongest position in the room is being willing to leave, and a written number you
              can back up makes that easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
