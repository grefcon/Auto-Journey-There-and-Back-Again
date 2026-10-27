import type { CarJourney } from '../types/carJourney';

/**
 * Single source of truth for the buying journey.
 *
 * Before this file existed the six stages lived in three places that disagreed
 * with each other: the `CarJourney['stage']` union, a local array inside
 * JourneyBanner, and a hardcoded `stage: 'Researching'` in NewJourneyModal.
 * The stage was also decorative — changing it changed nothing on screen. It is
 * now the thing that drives the app: each stage declares the guidance a buyer
 * needs at that point and which tab serves them.
 */

export type JourneyStage = CarJourney['stage'];

/** Coarse grouping used to order navigation along the journey. */
export type JourneyPhase = 'Research' | 'Shop' | 'Buy' | 'Inspect' | 'Own';

export type TabId =
  | 'trims'
  | 'compare'
  | 'reliability'
  | 'inventory'
  | 'comps'
  | 'deals'
  | 'tco';

export interface StageAction {
  label: string;
  detail: string;
  tab: TabId;
}

export interface StageDefinition {
  id: JourneyStage;
  order: number;
  phase: JourneyPhase;
  /** Second-person headline: what the buyer is doing right now. */
  headline: string;
  /** What this step is for, in plain language. */
  blurb: string;
  /** The reason this step is safe and under the buyer's control. */
  reassurance: string;
  actions: StageAction[];
  next: string;
  /** Where the buyer should land when they are in this stage. */
  primaryTab: TabId;
}

export const JOURNEY_STAGES: StageDefinition[] = [
  {
    id: 'Researching',
    order: 1,
    phase: 'Research',
    headline: "You're figuring out what to buy",
    blurb:
      "Nothing is committed yet — this step is pure information gathering. By the end of it you should know which trim you want and exactly what that trim includes, instead of reverse-engineering it from a dealer's spec sheet.",
    reassurance:
      'No dealer can see that you are here. Looking costs nothing and commits you to nothing.',
    actions: [
      {
        label: 'See every trim level explained',
        detail: 'What each trim adds over the one below it, and what that step up costs.',
        tab: 'trims',
      },
      {
        label: 'Compare two cars head to head',
        detail: 'Put your shortlist on one screen and argue with yourself properly.',
        tab: 'compare',
      },
      {
        label: 'Read the failure outlook first',
        detail: 'Know what wears out and when, before you get attached to a car.',
        tab: 'reliability',
      },
      {
        label: 'Estimate the 5-year cost',
        detail: 'Depreciation, fuel, insurance and repairs — the number that actually matters.',
        tab: 'tco',
      },
    ],
    next: "Once you've settled on a trim, move on to Screening Issues.",
    primaryTab: 'trims',
  },
  {
    id: 'Screening Issues',
    order: 2,
    phase: 'Research',
    headline: 'Pressure-test the shortlist',
    blurb:
      "Same cars, harder questions. You are looking for the failure window you cannot afford, and the inspection item that catches it in time.",
    reassurance:
      'Every issue is tied to a mileage range and a repair cost, so you can weigh it instead of just worrying about it.',
    actions: [
      {
        label: 'Read the failure windows and PPI checklist',
        detail: 'The specific components to check on this exact car.',
        tab: 'reliability',
      },
      {
        label: 'Re-check what each trim includes',
        detail: 'Some trims carry better hardware than others — that is part of the price.',
        tab: 'trims',
      },
      {
        label: 'Put repairs into the cost model',
        detail: 'A cheap car that needs a $3,200 transmission is not a cheap car.',
        tab: 'tco',
      },
    ],
    next: 'Move to Tracking Inventory and start collecting real asking prices.',
    primaryTab: 'reliability',
  },
  {
    id: 'Tracking Inventory',
    order: 3,
    phase: 'Shop',
    headline: 'Collect real asking prices',
    blurb:
      'You are building evidence, not committing. Every listing you save sharpens the number you will negotiate with later.',
    reassurance:
      'Each listing is compared against a fair-market band, so an overpriced car is obvious at a glance.',
    actions: [
      {
        label: 'Pull in listings and track the price',
        detail: 'Add a link, and watch whether the asking price moves.',
        tab: 'inventory',
      },
      {
        label: 'See what other buyers actually paid',
        detail: 'Real negotiated prices and out-the-door totals, not sticker.',
        tab: 'deals',
      },
      {
        label: 'Open your comps desk',
        detail: 'Your evidence, your target number and your script, in one place.',
        tab: 'comps',
      },
    ],
    next: 'Three or more solid comps and you are ready to negotiate.',
    primaryTab: 'inventory',
  },
  {
    id: 'Negotiating',
    order: 4,
    phase: 'Buy',
    headline: 'You have the upper edge here',
    blurb:
      'You know the fair band, what other buyers actually paid, and which line items are junk. Most people walk in with none of that.',
    reassurance:
      'You can leave at any point. Walking away from a bad worksheet is a win, and nothing on this screen obligates you to buy.',
    actions: [
      {
        label: 'Your comps, target price and counter script',
        detail: 'Say the number out loud once before you go in.',
        tab: 'comps',
      },
      {
        label: 'Audit the worksheet line by line',
        detail: 'Separate the legitimate fees from the negotiable ones.',
        tab: 'deals',
      },
      {
        label: 'Check how long the car has been sitting',
        detail: 'Days on market is leverage, and it is on your side.',
        tab: 'inventory',
      },
    ],
    next: 'Agree the price, then Inspect before any money moves.',
    primaryTab: 'comps',
  },
  {
    id: 'Inspecting',
    order: 5,
    phase: 'Inspect',
    headline: 'Final check before money changes hands',
    blurb:
      'A pre-purchase inspection is the cheapest insurance in car buying. Bring the checklist and let a mechanic do the finding.',
    reassurance:
      'If something fails here you walk away, and you keep every dollar you were about to spend.',
    actions: [
      {
        label: 'Run the pre-purchase checklist',
        detail: 'Mark each item pass, concern or fail as it is checked.',
        tab: 'reliability',
      },
      {
        label: 'Point the mechanic at the weak spots',
        detail: 'Use the known failure windows so nothing gets missed.',
        tab: 'reliability',
      },
      {
        label: 'Confirm the final numbers match',
        detail: 'Out-the-door should equal what you agreed before you arrived.',
        tab: 'deals',
      },
    ],
    next: 'Sign, then track what it actually costs to own.',
    primaryTab: 'reliability',
  },
  {
    id: 'Purchased',
    order: 6,
    phase: 'Own',
    headline: 'Bought — now keep it cheap to own',
    blurb:
      'The purchase is done. From here you are protecting resale value and catching known maintenance windows before they turn into repair bills.',
    reassurance: 'You already did the hard part. This is maintenance, not risk.',
    actions: [
      {
        label: 'Track true cost of ownership',
        detail: 'Cost per mile and year-by-year cash flow.',
        tab: 'tco',
      },
      {
        label: 'Watch the mileage-triggered items',
        detail: 'The known failure windows for this car, so they get serviced early.',
        tab: 'reliability',
      },
    ],
    next: "Nothing pending — you're done with the purchase.",
    primaryTab: 'tco',
  },
];

const STAGE_INDEX: Record<string, StageDefinition> = JOURNEY_STAGES.reduce(
  (acc, stage) => {
    acc[stage.id] = stage;
    return acc;
  },
  {} as Record<string, StageDefinition>
);

/** Safe lookup: an unknown or missing stage falls back to stage 1. */
export function getStageDefinition(stage: JourneyStage | undefined): StageDefinition {
  return (stage && STAGE_INDEX[stage]) || JOURNEY_STAGES[0];
}

export function getStageOrder(stage: JourneyStage | undefined): number {
  return getStageDefinition(stage).order;
}

export interface NavItemDef {
  id: TabId;
  label: string;
  short: string;
  phase: JourneyPhase;
}

/** Navigation ordered along the journey, not by tool name. */
export const NAV_ITEMS: NavItemDef[] = [
  { id: 'trims', label: 'Trim Levels Explained', short: 'Trims', phase: 'Research' },
  { id: 'compare', label: 'Compare Cars', short: 'Compare', phase: 'Research' },
  { id: 'reliability', label: 'Reliability & Repairs', short: 'Reliability', phase: 'Research' },
  { id: 'inventory', label: 'Inventory & Market Value', short: 'Inventory', phase: 'Shop' },
  { id: 'comps', label: 'Comps & Your Number', short: 'Comps', phase: 'Buy' },
  { id: 'deals', label: 'Deals & Quotes', short: 'Deals', phase: 'Buy' },
  { id: 'tco', label: 'Cost to Own', short: 'Cost', phase: 'Own' },
];
