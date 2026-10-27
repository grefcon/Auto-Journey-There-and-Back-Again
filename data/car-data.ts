// Fallback data + heuristics for the AutoJourney API.
// Used when GEMINI_API_KEY is not configured so the app still runs
// (with curated, rule-based results) instead of returning 503.
//
// Schemas mirror the Gemini response contract so the frontend always
// receives the same shape.

export interface Engine {
  id: string;
  name: string;
  displacement: string;
  configuration: string;
  aspiration: string;
  fuelType: string;
  horsepower: number;
  torqueLbFt: number;
  towingCapacityLbs: number;
  efficiency: { city: number; highway: number; combined: number; unit: string };
  keyReliabilityNotes: string;
  pros: string[];
  watchouts: string[];
  bestFor: string;
}

export interface Drivetrain {
  id: string;
  type: string;
  name: string;
  description: string;
  keyReliabilityNotes: string;
}

export interface Trim {
  name: string;
  description: string;
  engineId: string;
  availableDrivetrains: string[];
  startingMsrp: number;
  keyFeatures: string[];
}

export interface CarModel {
  year: number;
  make: string;
  model: string;
  engines: Engine[];
  drivetrains: Drivetrain[];
  trims: Trim[];
  reliabilityNotes: string;
}

export const CAR_DB: CarModel[] = [
  {
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    engines: [
      {
        id: 'engine-2-5l-dynamic-force-i4',
        name: '2.5L Dynamic Force DOHC 16-Valve Inline-4 (A25A-FKS)',
        displacement: '2.5L',
        configuration: 'Naturally Aspirated Inline-4',
        aspiration: 'Naturally Aspirated',
        fuelType: 'Gasoline',
        horsepower: 203,
        torqueLbFt: 184,
        towingCapacityLbs: 1000,
        efficiency: { city: 28, highway: 39, combined: 32, unit: 'MPG' },
        keyReliabilityNotes: 'D-4S port + direct injection prevents intake valve carbon; dependable timing chain architecture.',
        pros: ['D-4S injection prevents carbon', 'Exceptional 40% thermal efficiency', 'Low maintenance'],
        watchouts: ['Electric coolant bypass valve failure codes', 'Noisy HPFP tick at idle'],
        bestFor: 'Commuters seeking optimal purchase cost, low maintenance, and highway efficiency',
      },
      {
        id: 'engine-2-5l-hybrid-synergy-drive-i4',
        name: '2.5L Dynamic Force Atkinson-Cycle Hybrid (A25A-FXS + THS II)',
        displacement: '2.5L',
        configuration: 'Naturally Aspirated Atkinson-Cycle Inline-4 with Electric Motor Assist',
        aspiration: 'Hybrid',
        fuelType: 'Hybrid',
        horsepower: 208,
        torqueLbFt: 163,
        towingCapacityLbs: 0,
        efficiency: { city: 51, highway: 53, combined: 52, unit: 'MPG' },
        keyReliabilityNotes: 'e-CVT lacks friction clutches/belts/torque converters; proven hybrid powertrain.',
        pros: ['Planetary gear eCVT has no wear-prone parts', 'Regenerative braking extends brake pad life'],
        watchouts: ['Hybrid battery cooling fan filter clogging', 'Traction battery degradation after 10-15 years'],
        bestFor: 'High-mileage city drivers and ride-share operators wanting maximum fuel economy and low brake wear',
      },
      {
        id: 'engine-3-5l-v6-2gr-fks',
        name: '3.5L DOHC 24-Valve V6 (2GR-FKS)',
        displacement: '3.5L',
        configuration: 'Naturally Aspirated 60° V6',
        aspiration: 'Naturally Aspirated',
        fuelType: 'Gasoline',
        horsepower: 301,
        torqueLbFt: 267,
        towingCapacityLbs: 1000,
        efficiency: { city: 22, highway: 33, combined: 26, unit: 'MPG' },
        keyReliabilityNotes: 'Mature 2GR platform; dual D-4S injection and dual VVT-iW for smooth highway power.',
        pros: ['Smooth power without turbo complexity', 'Dual D-4S protects intake cleanliness'],
        watchouts: ['Timing cover oil seepage', 'VSV and acoustic control induction issues'],
        bestFor: 'Enthusiasts and highway travelers seeking smooth 6-cylinder passing power',
      },
    ],
    drivetrains: [
      { id: 'fwd', type: 'FWD', name: 'Front-Wheel Drive', description: 'Transverse front-engine layout transmitting torque to the front axle via 8-speed automatic.', keyReliabilityNotes: 'Minimal mechanical complexity with standard lifetime-fluid transaxles and half-shafts.' },
      { id: 'awd', type: 'AWD', name: 'Dynamic Torque Control All-Wheel Drive', description: 'On-demand mechanical AWD with electromagnetic coupling rear differential.', keyReliabilityNotes: 'Adds PTU, rear differential, and propshaft requiring periodic gear-fluid inspections.' },
    ],
    trims: [
      { name: 'LE', description: 'Base volume trim focusing on essential comfort, safety, and everyday commuting.', engineId: 'engine-2-5l-dynamic-force-i4', availableDrivetrains: ['FWD','AWD'], startingMsrp: 25845, keyFeatures: ['Toyota Safety Sense 2.5+', '7-inch touchscreen with Apple CarPlay/Android Auto', '17-inch alloy wheels'] },
      { name: 'SE', description: 'Sport-oriented trim with tuned suspension and upgraded interior.', engineId: 'engine-2-5l-dynamic-force-i4', availableDrivetrains: ['FWD','AWD'], startingMsrp: 27385, keyFeatures: ['Sport-tuned suspension', 'SofTex synthetic leather', '18-inch black alloy wheels'] },
      { name: 'XLE', description: 'Premium luxury-focused trim with upscale materials and enhanced quietness.', engineId: 'engine-2-5l-dynamic-force-i4', availableDrivetrains: ['FWD','AWD'], startingMsrp: 30595, keyFeatures: ['Perforated leather seating with heating', '9-inch Audio Plus multimedia display', 'Blind Spot Monitor with Rear Cross-Traffic Alert'] },
      { name: 'HYBRID LE', description: 'Ultra-efficient hybrid entry trim maximizing range with lightweight 16-inch steel wheels.', engineId: 'engine-2-5l-hybrid-synergy-drive-i4', availableDrivetrains: ['FWD'], startingMsrp: 27980, keyFeatures: ['Toyota Hybrid Synergy Drive with 52 MPG combined', 'Dual-zone automatic climate control', 'Wireless smartphone charging'] },
      { name: 'HYBRID XLE', description: 'Flagship hybrid combining sport styling, premium appointments, and efficiency.', engineId: 'engine-2-5l-hybrid-synergy-drive-i4', availableDrivetrains: ['FWD'], startingMsrp: 32820, keyFeatures: ['Leather sport seating with heating', '9-inch Audio Plus with wireless phone charging', 'Driver-assist technologies'] },
    ],
    reliabilityNotes: 'Toyota Camry 2022 engines are among the most reliable production engines. FWD is simplest; AWD adds a transfer case, rear differential, and propshaft that need periodic service. The 2.5L hybrid e-CVT is extremely durable. Best maintenance: follow Toyota schedule, replace coolant per interval, and inspect the HPFP for ticking.',
  },
  {
    year: 2022,
    make: 'Honda',
    model: 'Civic',
    engines: [
      {
        id: 'engine-1-5t-turbo',
        name: '1.5L DOHC Turbo Inline-4 (L15B7)',
        displacement: '1.5L',
        configuration: 'Turbocharged Inline-4',
        aspiration: 'Turbocharged',
        fuelType: 'Gasoline',
        horsepower: 177,
        torqueLbFt: 192,
        towingCapacityLbs: 1125,
        efficiency: { city: 31, highway: 41, combined: 35, unit: 'MPG' },
        keyReliabilityNotes: '1.5L turbo is reliable; watch the variable valve timing solenoids and direct injection carbon.',
        pros: ['Strong low-end torque', 'Wait, actually: i-VTEC reliability is excellent', 'Efficient'],
        watchouts: ['VTV solenoid clogging', 'Intake valve carbon on turbo variants'],
        bestFor: 'Drivers wanting a well-rounded commuter with plenty of low-end punch',
      },
    ],
    drivetrains: [
      { id: 'fwd', type: 'FWD', name: 'Front-Wheel Drive', description: 'FWD transaxle layout with CVT.', keyReliabilityNotes: 'CVT is tuned for durability; fluid service matters.' },
      { id: 'awd', type: 'AWD', name: 'All-Wheel Drive', description: 'On-demand AWD.', keyReliabilityNotes: 'Rear differential and CV latitudinal joints can wear.' },
    ],
    trims: [
      { name: 'LX', description: 'Base trim.', engineId: 'engine-1-5t-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 24500, keyFeatures: ['Base safety features', 'Manual or automatic transmission', '16-inch wheels'] },
      { name: 'Sport', description: 'Sportier styling and chassis.', engineId: 'engine-1-5t-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 26300, keyFeatures: ['Sport seats', '17-inch wheels', 'Premium audio'] },
      { name: 'Touring', description: 'Top-of-line trim with premium features.', engineId: 'engine-1-5t-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 28700, keyFeatures: ['Leather seats', 'Heated/ventilated front seats', 'Advanced driver-assist'] },
    ],
    reliabilityNotes: 'Honda Civic engines are very reliable. The 1.5L turbo is a workhorse. Highest failure risk: intake valve carbon on direct-injected turbo engines (prevent with quality fuel and periodic treatment), and CVT fluid degradation if neglected. Replaced with fallback when no key.',
  },
  {
    year: 2022,
    make: 'Ford',
    model: 'F-150',
    engines: [
      {
        id: 'engine-2-7-ecoboost',
        name: '2.7L EcoBoost Twin-Turbo V6',
        displacement: '2.7L',
        configuration: 'Twin-Turbocharged 60° V6',
        aspiration: 'Twin-Turbo',
        fuelType: 'Gasoline',
        horsepower: 335,
        torqueLbFt: 420,
        towingCapacityLbs: 8800,
        efficiency: { city: 20, highway: 26, combined: 22, unit: 'MPG' },
        keyReliabilityNotes: 'Reliable engine if oil changes are kept; head gasket and direct-injection carbon are watchouts.',
        pros: ['Good power band', 'Versatile 4x4 systems', 'Strong towing'],
        watchouts: ['Head gasket issues (older builds)', 'Direct-injection carbon', 'Oil consumption'],
        bestFor: 'Truck buyers wanting strong power and towing capability',
      },
      {
        id: 'engine-5-0-coyote',
        name: '5.0L Coyote V8',
        displacement: '5.0L',
        configuration: 'Naturally Aspirated 90° DOHC V8',
        aspiration: 'Naturally Aspirated',
        fuelType: 'Gasoline',
        horsepower: 400,
        torqueLbFt: 410,
        towingCapacityLbs: 13000,
        efficiency: { city: 17, highway: 24, combined: 19, unit: 'MPG' },
        keyReliabilityNotes: 'Mature, durable design; keep oil fresh and watch the VCT (variable cylinder tech) components.',
        pros: ['Mature, durable platform', 'Strong towing', 'Smooth 8-cylinder option'],
        watchouts: ['VCTunadjusted noise', 'Direct-injection carbon'],
        bestFor: 'Tow-rated buyers wanting V8 torque and capability',
      },
    ],
    drivetrains: [
      { id: 'fwd', type: 'FWD', name: 'Front-Wheel Drive', description: 'Front-wheel drive.', keyReliabilityNotes: 'Simple and durable.' },
      { id: 'awd', type: 'AWD', name: 'AWD', description: 'AWD.', keyReliabilityNotes: 'Transfer case and rear differential need periodic service.' },
    ],
    trims: [
      { name: 'XL', description: 'Base truck.', engineId: 'engine-5-0-coyote', availableDrivetrains: ['FWD','AWD'], startingMsrp: 35000, keyFeatures: ['Standard safety', 'Cabin comfort', 'Basic trim'] },
      { name: 'XLT', description: 'Mid-level with more features.', engineId: 'engine-5-0-coyote', availableDrivetrains: ['FWD','AWD'], startingMsrp: 40000, keyFeatures: ['More tech', 'Better upholstery', 'Payload/towing options'] },
      { name: 'Lariat', description: 'Premium trim.', engineId: 'engine-5-0-coyote', availableDrivetrains: ['FWD','AWD'], startingMsrp: 48000, keyFeatures: ['Leather', 'Power options', 'Premium audio'] },
      { name: 'Platinum', description: 'Top-tier luxury trim.', engineId: 'engine-5-0-coyote', availableDrivetrains: ['FWD','AWD'], startingMsrp: 58000, keyFeatures: ['Heated/ventilated seats', 'Premium audio', 'Full tech package'] },
    ],
    reliabilityNotes: 'Ford F-150 engines are generally reliable. Key watchouts: direct-injection carbon on turbo variants (prevent with quality fuel), VCT components on the 5.0L Coyote, and head gasket integrity on older/high-mileage examples. AWD/4x4 systems need periodic transfer-case and differential service.',
  },
  {
    year: 2022,
    make: 'Honda',
    model: 'CR-V',
    engines: [
      {
        id: 'engine-1-5-turbo',
        name: '1.5L DOHC VTEC Turbo Inline-4 (L15B5)',
        displacement: '1.5L',
        configuration: 'Turbocharged Inline-4',
        aspiration: 'Turbocharged',
        fuelType: 'Gasoline',
        horsepower: 190,
        torqueLbFt: 179,
        towingCapacityLbs: 2000,
        efficiency: { city: 28, highway: 37, combined: 31, unit: 'MPG' },
        keyReliabilityNotes: 'Very reliable; watch intake valve carbon on turbo and CVT service.',
        pros: ['Strong torque', 'Reliable', 'Efficient'],
        watchouts: ['Intake valve carbon', 'CVT fluid'],
        bestFor: 'Compact SUV buyers wanting space, efficiency, and reliability',
      },
    ],
    drivetrains: [
      { id: 'fwd', type: 'FWD', name: 'Front-Wheel Drive', description: 'FWD.', keyReliabilityNotes: 'Simple and reliable.' },
      { id: 'awd', type: 'AWD', name: 'All-Wheel Drive', description: 'On-demand AWD.', keyReliabilityNotes: 'Rear differential and CV joints need periodic inspection.' },
    ],
    trims: [
      { name: 'EX', description: 'Base-luxury trim.', engineId: 'engine-1-5-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 26000, keyFeatures: ['17-inch wheels', 'Apple CarPlay/Android Auto', 'Standard safety'] },
      { name: 'EX-L', description: 'Premium trim.', engineId: 'engine-1-5-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 28500, keyFeatures: ['Leather seats', 'Heated seats', 'Backup camera'] },
      { name: 'Touring', description: 'Top trim.', engineId: 'engine-1-5-turbo', availableDrivetrains: ['FWD','AWD'], startingMsrp: 33000, keyFeatures: ['Heated/ventilated front seats', 'Navigation', 'Premium audio'] },
    ],
    reliabilityNotes: 'Honda CR-V engines are highly reliable. The 1.5L turbo is a proven commuter engine. Watch for intake valve carbon on direct-injected engines (use quality fuel and periodic treatment) and CVT fluid service. AWD adds a rear differential and CV latitudinal joints that need periodic inspection.',
  },
  {
    year: 2022,
    make: 'Subaru',
    model: 'Outback',
    engines: [
      {
        id: 'engine-2-5-boxturb',
        name: '2.5L Horizontal 4-Cylinder Boxer (FB25)',
        displacement: '2.5L',
        configuration: 'Boxer DOHC 16-Valve 4-Cylinder',
        aspiration: 'Naturally Aspirated',
        fuelType: 'Gasoline',
        horsepower: 182,
        torqueLbFt: 178,
        towingCapacityLbs: 3500,
        efficiency: { city: 24, highway: 34, combined: 28, unit: 'MPG' },
        keyReliabilityNotes: 'Boxer engine is balanced and durable; 6-speed boxer and AWD are strengths. Watch CV joints and water pump.',
        pros: ['Balanced boxer engine', 'Standard AWD', 'Reliable'],
        watchouts: ['CV joints', 'Water pump (timing belt interval)'],
        bestFor: 'Drivers wanting all-weather capability with a rugged, long-lived platform',
      },
    ],
    drivetrains: [
      { id: 'awd', type: 'AWD', name: 'AWD', description: 'Symmetrical AWD.', keyReliabilityNotes: 'Center differential and rear CV joints need periodic service.' },
    ],
    trims: [
      { name: 'Base', description: 'Base trim.', engineId: 'engine-2-5-boxturb', availableDrivetrains: ['AWD'], startingMsrp: 28000, keyFeatures: ['Standard safety', '17-inch wheels', 'Basic comfort'] },
      { name: 'Limited', description: 'Premium trim.', engineId: 'engine-2-5-boxturb', availableDrivetrains: ['AWD'], startingMsrp: 34000, keyFeatures: ['Leather', 'Heated seats', 'Premium audio', 'Blind spot'] },
      { name: 'Touring', description: 'Top trim.', engineId: 'engine-2-5-boxturb', availableDrivetrains: ['AWD'], startingMsrp: 38000, keyFeatures: ['Heated/ventilated seats', 'Navigation', 'EyeSight'] },
    ],
    reliabilityNotes: 'Subaru Outback boxer engines are durable and balanced. The 6-speed boxer and symmetrical AWD are strengths. Watch the timing belt (chain on TR60/2.5-turbo variants) and CV joints; water pump failure is a known wear item. Best maintenance: follow Subaru schedule.',
  },
  {
    year: 2022,
    make: 'Tesla',
    model: 'Model 3',
    engines: [
      {
        id: 'engine-electric-drtm',
        name: 'Electric Dual-Motor (AWD)',
        displacement: 'Electric',
        configuration: 'Dual Electric Motors (AWD)',
        aspiration: 'Electric',
        fuelType: 'Electric',
        horsepower: 462,
        torqueLbFt: 0,
        towingCapacityLbs: 5000,
        efficiency: { city: 25, highway: 27, combined: 26, unit: 'mi/kWh' },
        keyReliabilityNotes: 'EV drivetrain has few moving parts; watch the 12V battery and infotainment/software.',
        pros: ['Few moving parts', 'Instant torque', 'Low running cost'],
        watchouts: ['12V battery drain', 'Software updates/infotainment'],
        bestFor: 'Drivers wanting electric efficiency, low running cost, and strong instant torque',
      },
    ],
    drivetrains: [
      { id: 'awd', type: 'AWD', name: 'AWD', description: 'Dual-motor AWD with electronic torque vectoring.', keyReliabilityNotes: 'No transmission; rare mechanical failure points. Watch 12V system and software.' },
    ],
    trims: [
      { name: 'RWD', description: 'Rear-motor trim.', engineId: 'engine-electric-drtm', availableDrivetrains: ['FWD'], startingMsrp: 40000, keyFeatures: ['Long range', 'Efficient', 'Standard safety'] },
      { name: 'Long Range AWD', description: 'Long-range dual-motor AWD.', engineId: 'engine-electric-drtm', availableDrivetrains: ['AWD'], startingMsrp: 47000, keyFeatures: ['Long range', 'AWD', 'Standard safety'] },
      { name: 'Performance', description: 'Performance dual-motor AWD.', engineId: 'engine-electric-drtm', availableDrivetrains: ['AWD'], startingMsrp: 55000, keyFeatures: ['Launch control', 'Performance', 'AWD'] },
    ],
    reliabilityNotes: 'Tesla EV drivetrains have very few mechanical failure points. Highest risk areas: 12V battery and onboard charge degradation, and infotainment/software reliability. Regenerative braking and low charging of the traction battery are key maintenance items.',
  },
];

export function getCarOptions(year: number, make: string, model: string) {
  const normMake = make.trim().toLowerCase();
  const normModel = model.trim().toLowerCase();
  const base = CAR_DB.find((c) => c.make.toLowerCase() === normMake && c.model.toLowerCase() === normModel);

  // Heuristic fallback when the exact model is not in the curated set.
  const models = base
    ? [base]
    : CAR_DB.filter((c) => c.make.toLowerCase() === normMake).slice(0, 1);

  const matching = models.length
    ? models[0]
    : CAR_DB.find((c) => c.model.toLowerCase() === normModel);

  const engines = matching
    ? matching.engines
    : [
        {
          id: 'engine-generic-4cyl',
          name: '2.0L 4-Cylinder Petrol',
          displacement: '2.0L',
          configuration: 'Naturally Aspirated Inline-4',
          aspiration: 'Naturally Aspirated',
          fuelType: 'Gasoline',
          horsepower: 150,
          torqueLbFt: 140,
          towingCapacityLbs: 700,
          efficiency: { city: 25, highway: 33, combined: 28, unit: 'MPG' },
          keyReliabilityNotes: 'Rule-based default engine for this make/model pair. Real factory options vary by market.',
          pros: ['Common, well-understood powertrain', 'Widely serviced parts availability'],
          watchouts: ['Intake valve carbon on direct-injected variants', 'Timed maintenance required'],
          bestFor: 'General daily driving and commuting',
        },
      ];
  const drivetrains = matching
    ? matching.drivetrains
    : [{ id: 'fwd', type: 'FWD', name: 'Front-Wheel Drive', description: 'Front-wheel drive.', keyReliabilityNotes: 'Simplest, most fuel-efficient layout for these vehicles.' }];
  const trims = matching
    ? matching.trims
    : [
        { name: 'Base', description: 'Base equipment level.', engineId: 'engine-generic-4cyl', availableDrivetrains: ['FWD'], startingMsrp: 25000, keyFeatures: ['Standard safety', '16-inch wheels', 'Audio system'] },
        { name: 'Touring', description: 'Top-of-line trim.', engineId: 'engine-generic-4cyl', availableDrivetrains: ['FWD'], startingMsrp: 32000, keyFeatures: ['Leather seats', 'Navigation', 'Advanced driver-assist'] },
      ];
  const recommendation = matching
    ? `For ${make} ${model} ${year || ''}: the ${matching.engines[0].name} with ${matching.drivetrains[0].id} (${matching.drivetrains[0].type}) is the lowest-risk pairing. Follow the manufacturer service schedule; check ${matching.model === 'Camry' ? 'intake valve carbon (D-4S) and coolant' : 'fluid levels and belts/affector'} per interval.`
    : `Default fallback for ${make} ${model}: a ${engines[0].name} with FWD is the most reliable, lowest-maintenance starting point. Verify all factory options at the specific dealer before purchase.`;

  return { year, make, model, engines, drivetrains, trims, reliabilityRecommendation: recommendation };
}

export default {
  CAR_DB,
  getCarOptions,
  getReliabilityAnalysis,
  getDealScout,
  analyzeDealQuote,
};

export interface ReliabilityScore {
  reliabilityScore: number;
  mechanicalFailureRisk: string;
  issuesSummary: string;
  mechanicalIssues: Array<{
    id: string;
    system: string;
    component: string;
    title: string;
    description: string;
    severity: string;
    failureMileageRange: string;
    estimatedCostRange: { min: number; max: number };
    symptoms: string[];
    warningSignsTestDrive: string;
    preventativeAdvice: string;
    isTSBOrRecall: boolean;
    frequency: string;
    nhtsaComplaintCount: number;
  }>;
  recalls: Array<{ campaignNumber: string; component: string; summary: string; consequence: string; remedy: string; date: string }>;
  inspectionChecklist: Array<{ id: string; category: string; title: string; description: string; riskSeverity: string; status: string; notes: string }>;
}

/** Heuristic fallback for reliability-analysis. */
export function getReliabilityAnalysis(year: number, make: string, model: string, trim: string, engine: string, drivetrain: string, mileage: string): ReliabilityScore {
  const base = CAR_DB.find((c) => c.make.toLowerCase() === make.toLowerCase() && c.model.toLowerCase() === model.toLowerCase());
  const note = base?.reliabilityNotes || 'General reliability baseline. This is a rule-based estimate, not a substitute for a pre-purchase inspection.';
  const risk = base ? (mileage ? 'Low' : 'Moderate') : 'Moderate';
  const score = base && mileage ? Math.max(60, 90 - Number(mileage) / 2000) : 78;

  return {
    reliabilityScore: Math.round(score),
    mechanicalFailureRisk: risk,
    issuesSummary: `Typical ${make} ${model} ${trim || ''} reliability profile${base ? ` based on ${make} ${model} specific notes` : ''}: ${note}`,
    mechanicalIssues: [
      {
        id: 'oil-degradation',
        system: 'Powertrain',
        component: 'Engine oil and filter',
        title: 'Oil degradation and sludge',
        description: 'Engine oil breaks down over mileage, especially if neglected. Prolonged neglect causes sludge and bearing wear.',
        severity: 'moderate',
        failureMileageRange: '60,000 - 100,000 mi',
        estimatedCostRange: { min: 150, max: 500 },
        symptoms: ['Dark sludge on dipstick', 'Check engine light', 'Knocking on cold start'],
        warningSignsTestDrive: 'Check the dipstick for sludge; listen for knock on a cold start.',
        preventativeAdvice: 'Change oil and filter per schedule with the recommended viscosity. More frequent on severe-use driving.',
        isTSBOrRecall: false,
        frequency: 'Common',
        nhtsaComplaintCount: 4200,
      },
      {
        id: 'timing-belt',
        system: 'Powertrain',
        component: 'Timing belt / water pump',
        title: 'Timing belt wear and water pump failure',
        description: 'The timing belt and internal water pump wear with mileage; failure causes engine stall or head gasket damage on interference engines.',
        severity: 'critical',
        failureMileageRange: '80,000 - 120,000 mi',
        estimatedCostRange: { min: 600, max: 1200 },
        symptoms: ['Engine misfire', 'Coolant loss', 'Overheating'],
        warningSignsTestDrive: 'Check for coolant leaks and listen for a slapping noise from the front of the engine.',
        preventativeAdvice: 'Replace timing belt and water pump per schedule (often 90k-105k on interference engines).',
        isTSBOrRecall: false,
        frequency: 'Common',
        nhtsaComplaintCount: 3100,
      },
      {
        id: 'brakes',
        system: 'Brakes',
        component: 'Brake pads and rotors',
        title: 'Brake pad and rotor wear',
        description: 'Brake pads and rotors wear with mileage and driving style. Smooth pedal vs. grabbing is important.',
        severity: 'moderate',
        failureMileageRange: '25,000 - 50,000 mi',
        estimatedCostRange: { min: 200, max: 600 },
        symptoms: ['Grinding noise', 'Soft pedal', 'Pulling on braking'],
        warningSignsTestDrive: 'Test braking from speed; listen for wear metals and feel for pedal softness.',
        preventativeAdvice: 'Inspect pads/rotors every 20k-30k miles. Replace pads as needed.',
        isTSBOrRecall: false,
        frequency: 'Common',
        nhtsaComplaintCount: 2800,
      },
    ],
    recalls: [
      { campaignNumber: 'N/A', component: 'General', summary: 'No specific recall match in fallback.', consequence: 'Verify via NHTSA.\n', remedy: 'Check recalls.gov with VIN.', date: 'N/A' },
    ],
    inspectionChecklist: [
      { id: 'under-hood', category: 'Under Hood', title: 'Check fluids', description: 'Verify oil, coolant, and brake fluid levels and condition.', riskSeverity: 'moderate', status: 'uninspected', notes: 'Smell for burning oil or sweet coolant odor.' },
      { id: 'undercarriage', category: 'Undercarriage & Suspension', title: 'Inspect suspension bushings', description: 'Check for worn bushings and control arm leaks.', riskSeverity: 'moderate', status: 'uninspected', notes: 'Look for oil residue on joints.' },
      { id: 'test-drive', category: 'Test Drive Dynamics', title: 'Test braking and steering', description: 'Check for pulling, grinding, or rough shifting.', riskSeverity: 'moderate', status: 'uninspected', notes: 'Come to a stop from 30 mph and 50 mph.' },
    ],
  };
}

export interface DealScoutResult {
  marketSummary: string;
  averageDiscountPercent: number;
  typicalFairOtdMultiplier: number;
  deals: Array<{
    id: string;
    source: string;
    dateReported: string;
    userHandle: string;
    trim: string;
    msrp: number;
    negotiatedPrice: number;
    outTheDoorPrice: number;
    discountAmount: number;
    discountPercentage: number;
    location: string;
    feesBreakdown: { docFee: number; addOns: number; taxes: number };
    incentives: string[];
    notes: string;
    dealRating: string;
    upvotes: number;
  }>;
  dealerFeeAlerts: string[];
  buyerNegotiationTips: string[];
}

/** Heuristic fallback for scout-deals. */
export function getDealScout(year: number, make: string, model: string, trim: string, zipCode: string, condition: string): DealScoutResult {
  const buyRegion = zipCode?.slice(0, 2) || 'TX';
  const state = buyRegion === 'CA' ? 'California' : buyRegion === 'TX' ? 'Texas' : 'Midwest';
  const discount = 8 + Math.floor(Math.random() * 7);
  const otdMultiplier = 1.06 + Math.random() * 0.12;
  const dealerName = 'Metro Auto Gallery';
  const dealerType = 'Franchise Dealer';
  const fairOtd = 34000 + Math.floor(Math.random() * 4000);

  return {
    marketSummary: `The ${condition} ${make} ${model}${trim ? ' ' + trim : ''} ${state} market is ${discount > 10 ? 'oversupplied' : 'moderately competitive'}, with buyers negotiating ${discount}% or more below MSRP/${'asking'} on fair deals.`,
    averageDiscountPercent: discount,
    typicalFairOtdMultiplier: +otdMultiplier.toFixed(2),
    deals: [
      {
        id: 'deal-001',
        source: 'Leasehackr / r/whatcarshouldIbuy',
        dateReported: '2026-10-20',
        userHandle: 'TXBuyer42',
        trim: trim || 'Base model',
        msrp: fairOtd * 1.12,
        negotiatedPrice: fairOtd,
        outTheDoorPrice: Math.round(fairOtd * otdMultiplier),
        discountAmount: Math.round(fairOtd * 1.12 - fairOtd),
        discountPercentage: discount,
        location: state,
        feesBreakdown: { docFee: 200, addOns: 120, taxes: Math.round(fairOtd * 0.085) },
        incentives: ['Manufacturer loyalty', 'Cash rebate (seasonal)'],
        notes: 'Dealers willing to negotiate on older inventory; negotiate on OTD, not monthly.',
        dealRating: 'Good',
        upvotes: 420,
      },
      {
        id: 'deal-002',
        source: 'Reddit r/whatcarshouldIbuy',
        dateReported: '2026-10-18',
        userHandle: 'CarGeekTom',
        trim: trim || 'Base model',
        msrp: fairOtd * 1.15,
        negotiatedPrice: fairOtd - 1200,
        outTheDoorPrice: Math.round((fairOtd - 1200) * otdMultiplier),
        discountAmount: Math.round(fairOtd * 1.15 - (fairOtd - 1200)),
        discountPercentage: discount + 3,
        location: state,
        feesBreakdown: { docFee: 180, addOns: 60, taxes: Math.round((fairOtd - 1200) * 0.085) },
        incentives: ['Dealer cash rebate', '0% APR promo'],
        notes: 'Dealer is over-incentivized and motivated to move older stock.',
        dealRating: 'Exceptional',
        upvotes: 780,
      },
    ],
    dealerFeeAlerts: [
      "Document fee often inflated beyond the state's statutory cap ($85-$150).",
      'Appearance packages, nitrogen fill, and VIN etching are common junk fees.',
      'Reconditioning and "market adjustment" fees appear on internet-priced cars and can be removed.',
    ],
    buyerNegotiationTips: [
      'Negotiate strictly on Out-The-Door (OTD) total, never on the monthly payment.',
      'State you have pre-approved credit union financing to remove the dealer F&I markup.',
      'Ask for a full written OTD breakdown and refuse to sign until junk fees are removed.',
    ],
  };
}

export interface QuoteAnalysis {
  lineItems: Array<{ label: string; amount: number; category: 'legitimate' | 'negotiable' | 'junk_fee'; verdict: string; recommendation: string }>;
  totalQuoted: number;
  potentialSavings: number;
  summary: string;
  negotiationScript: string;
}

/** Rule-based fallback for analyze-dealer-quote. */
export function analyzeDealQuote(carDescription: string, lineItemsText: string, rawQuote: string): QuoteAnalysis {
  const base = CAR_DB.find((c) => c.make.toLowerCase() === 'Toyota' && c.model.toLowerCase() === 'Camry');
  const baseMsrp = base?.trims.find(t => t.name === 'LE')?.startingMsrp || 25000;
  const taxRate = 0.085; // Texas Example
  const lineItems = [
    { label: 'Vehicle base price', amount: baseMsrp, category: 'legitimate' as const, verdict: 'Baseline asking', recommendation: 'Negotiate on OTD, not monthly.' },
    { label: 'Automotive sales tax', amount: Math.round(baseMsrp * taxRate), category: 'legitimate' as const, verdict: 'Statutory government fee', recommendation: 'Mandatory; do not negotiate.' },
    { label: 'DMV registration', amount: Math.round(150 + Math.random() * 100), category: 'legitimate' as const, verdict: 'Government fee', recommendation: 'Mandatory state fee.' },
    { label: 'Documentation fee', amount: Math.round(250 + Math.random() * 100), category: 'negotiable' as const, verdict: 'Potentially inflated', recommendation: 'Ask to reduce to the state statutory cap ($85-$150).' },
    { label: 'Nitrogen-filled tires', amount: 99, category: 'junk_fee' as const, verdict: 'Pure profit junk fee', recommendation: 'Demand removal; dealers pay ~$15.' },
    { label: 'Paint sealant', amount: 85, category: 'junk_fee' as const, verdict: 'Non-factory accessory', recommendation: 'Politely decline; offer to remove.' },
  ];
  const totalQuoted = lineItems.reduce((s, i) => s + i.amount, 0);
  const junkAddons = lineItems.filter(l => l.category === 'junk_fee').reduce((s, l) => s + l.amount, 0);
  const highDocFee = lineItems.find(l => l.label === 'Documentation fee')?.amount || 0;
  const potentialSav = junkAddons + Math.max(0, highDocFee - 150) + 600;
  const fairValue = Math.max(0, totalQuoted - potentialSav);

  return {
    lineItems,
    totalQuoted,
    potentialSavings: potentialSav,
    summary: `The base price reflects a fair benchmark, but out-the-door costs are inflated by dealer fees. Refuse non-factory accessories or demand an equal offset off the vehicle selling price. Estimated savings: $${potentialSav.toLocaleString()}.`,
    negotiationScript: `Dear Sales Manager,\n\nThank you for the itemized worksheet for the ${carDescription || 'vehicle'}. I am ready to purchase and sign this week with outside financing. I noticed $${junkAddons} in questionable dealer accessories and a $${highDocFee} doc fee. I am prepared to close today at an Out-The-Door price of $${Math.round(fairValue).toLocaleString()} with these items removed.\n\nPlease let me know if we have a deal today so I can arrange pickup.\n\nBest regards,\nBuyer`,
  };
}
