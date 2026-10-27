export type IssueSeverity = 'low' | 'moderate' | 'high' | 'critical';

export interface MechanicalIssue {
  id: string;
  system: 'Powertrain' | 'Transmission' | 'Electrical' | 'Suspension' | 'Climate' | 'Brakes' | 'Body & Paint';
  component: string;
  title: string;
  description: string;
  severity: IssueSeverity;
  failureMileageRange: string;
  estimatedCostRange: {
    min: number;
    max: number;
  };
  symptoms: string[];
  warningSignsTestDrive: string;
  preventativeAdvice: string;
  isTSBOrRecall: boolean;
  frequency: 'Rare' | 'Uncommon' | 'Common' | 'Very Common';
  nhtsaComplaintCount?: number;
}

export interface NHTSARecall {
  campaignNumber: string;
  component: string;
  summary: string;
  consequence: string;
  remedy: string;
  date: string;
}

export interface PPICheckItem {
  id: string;
  category: 'Under Hood' | 'Undercarriage & Suspension' | 'Interior & Electronics' | 'Exterior & Body' | 'Test Drive Dynamics' | 'Paperwork & Service Records';
  title: string;
  description: string;
  riskSeverity: 'low' | 'moderate' | 'high' | 'critical';
  status: 'uninspected' | 'pass' | 'concern' | 'fail';
  notes: string;
}

export interface DealerGradeInfo {
  grade: 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'D-' | 'F';
  overallRating: number; // e.g. 4.3 out of 5
  reviewsCount: number;
  fccCalloutStatus: 'Clean - No Regulatory Flags' | 'Low Concern' | 'Moderate Flag' | 'High Alert - FCC/FTC Callouts';
  fccCalloutDetails: string[];
  bbbRating?: string;
  customerSentiment: string;
  transparencyScore: number; // 0-100
  keyWatchouts: string[];
  negotiationLeverage: string;
}

export interface PriceSnapshot {
  date: string;
  price: number;
  status: 'Initial' | 'Confirmed' | 'Price Dropped' | 'Price Increased';
  note?: string;
}

export interface AutoTrackConfig {
  enabled: boolean;
  targetUrl: string;
  frequency: 'Daily';
  lastCheckedDate: string;
  lastConfirmedPrice: number;
  originalPrice: number;
  status: 'Confirmed' | 'Price Dropped' | 'Price Increased' | 'Active';
  priceHistory: PriceSnapshot[];
  nextCheckDue: string;
}

export interface DealerListing {
  id: string;
  dealerName: string;
  dealerType: 'Franchise Dealer' | 'Independent Dealer' | 'Private Party';
  title: string;
  price: number;
  marketFairPrice: number;
  mileage: number;
  distanceMiles: number;
  location: string;
  vin: string;
  trim: string;
  exteriorColor: string;
  daysOnMarket: number;
  imageUrl?: string;
  carfax: {
    cleanTitle: boolean;
    noAccidents: boolean;
    oneOwner: boolean;
    serviceRecordsCount: number;
    reportUrl?: string;
  };
  url?: string;
  sourcePlatform?: 'Auto.dev' | 'AutoTempest' | 'Cars.com' | 'Autotrader' | 'CarMax' | 'Carvana' | 'Craigslist' | 'Dealer Direct' | 'TrueCar';
  isSaved: boolean;
  notes?: string;
  dealerGrade?: DealerGradeInfo;
  autoTrack?: AutoTrackConfig;
  convertedToDealId?: string;
  convertedDate?: string;
}

export interface GeminiDealJudgeVerdict {
  dealGrade: 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'F';
  headline: string;
  verdictSummary: string;
  fairValueEstimate: number;
  priceVersusMarket: 'Substantially Below Market' | 'Below Market' | 'Fair Market Price' | 'Above Market' | 'Significant Overprice';
  potentialSavings: number;
  itemizedJudgments: Array<{
    item: string;
    amount: number;
    category: 'legitimate' | 'negotiable' | 'junk_fee' | 'incentive';
    judgment: string;
    advice: string;
  }>;
  pros: string[];
  watchouts: string[];
  negotiationStrategy: string[];
  counterOfferScript: string;
  recommendedCounterPrice: number;
}

export interface OngoingDeal {
  id: string;
  listingId?: string;
  dealerName: string;
  dealerContact?: string;
  dealerPhoneOrEmail?: string;
  vehicleTitle: string;
  trim: string;
  vin?: string;
  url?: string;
  
  // Pricing & Breakdown
  msrpOrAskingPrice: number;
  agreedVehiclePrice: number;
  docFee: number;
  dealerAddOns: Array<{
    name: string;
    amount: number;
    removable: boolean;
  }>;
  governmentTaxes: number;
  registrationFees: number;
  tradeInAllowance?: number;
  tradeInOwed?: number;
  downPayment?: number;
  rebatesAndIncentives?: number;
  outTheDoorPrice: number;

  // Financing (optional)
  financingType: 'Cash' | 'Financed' | 'Lease';
  apr?: number;
  termMonths?: number;
  monthlyPayment?: number;

  // Status & Workflow
  stage: 'Initial Contact' | 'Worksheet Received' | 'Counter-Offer Sent' | 'Manager Review' | 'Deal Agreed' | 'Walked Away';
  lastUpdated: string;
  notes: string;

  // Gemini AI Deal Evaluation
  aiVerdict?: GeminiDealJudgeVerdict;
  isEvaluating?: boolean;
}

export interface CommunityDeal {
  id: string;
  source: 'Reddit r/whatcarshouldIbuy' | 'Leasehackr' | 'Edmunds Forums' | 'Brand Owner Forum' | 'Verified Buyer Quote';
  dateReported: string;
  userHandle: string;
  trim: string;
  msrp: number;
  negotiatedPrice: number;
  outTheDoorPrice: number;
  discountAmount: number;
  discountPercentage: number;
  location: string;
  feesBreakdown: {
    docFee: number;
    addOns: number;
    taxes: number;
  };
  incentives: string[];
  notes: string;
  dealRating: 'Exceptional' | 'Great' | 'Good' | 'Fair' | 'Poor';
  upvotes: number;
}

export interface OwnershipCostInputs {
  annualMiles: number;
  yearsOwned: number;
  downPayment: number;
  interestRate: number;
  loanTermMonths: number;
  fuelType: 'gas' | 'hybrid' | 'electric';
  fuelCostPerUnit: number; // $/gallon or $/kWh
  efficiency: number; // MPG or mi/kWh
  insurancePerMonth: number;
  annualMaintenanceRoutine: number;
  salesTaxRate: number;
  registrationAnnual: number;
}

export interface TCOResult {
  totalCost: number;
  monthlyCost: number;
  costPerMile: number;
  depreciationTotal: number;
  financingTotal: number;
  fuelTotal: number;
  insuranceTotal: number;
  maintenanceTotal: number;
  anticipatedRepairsTotal: number;
  taxesAndFeesTotal: number;
  yearlyCashFlow: Array<{
    year: number;
    depreciation: number;
    financing: number;
    fuel: number;
    insurance: number;
    maintenanceAndRepairs: number;
    total: number;
  }>;
}

export interface QuoteAuditLineItem {
  label: string;
  amount: number;
  category: 'legitimate' | 'negotiable' | 'junk_fee';
  verdict: string;
  recommendation: string;
}

export interface QuoteAuditResult {
  lineItems: QuoteAuditLineItem[];
  totalQuoted: number;
  potentialSavings: number;
  summary: string;
  negotiationScript: string;
}

export interface EngineOption {
  id: string;
  name: string;
  displacement: string;
  configuration: string;
  aspiration?: 'Turbocharged' | 'Twin-Turbo' | 'Naturally Aspirated' | 'Supercharged' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid';
  horsepower?: number;
  torqueLbFt?: number;
  fuelType: 'Gasoline' | 'Hybrid' | 'Plug-in Hybrid' | 'Electric' | 'Diesel';
  towingCapacityLbs?: number;
  efficiency: {
    city: number;
    highway: number;
    combined: number;
    unit: 'MPG' | 'MPGe' | 'mi/kWh';
  };
  keyReliabilityNotes: string;
  pros?: string[];
  watchouts?: string[];
  bestFor?: string;
}

export interface DrivetrainOption {
  id: string;
  type: 'FWD' | 'RWD' | 'AWD' | '4WD / 4x4' | '2WD / 4x2';
  name: string;
  description: string;
  keyReliabilityNotes?: string;
}

export interface TrimOption {
  name: string;
  description?: string;
  engineId: string;
  availableEngineIds?: string[];
  availableDrivetrains: string[];
  startingMsrp?: number;
  keyFeatures?: string[];
}

export interface CarColorOption {
  name: string;
  value: string;
  hex: string;
}

export interface CarOptionsLookupResult {
  year: number;
  make: string;
  model: string;
  engines: EngineOption[];
  drivetrains: DrivetrainOption[];
  trims: TrimOption[];
  colors?: CarColorOption[];
  reliabilityRecommendation: string;
}

export interface CarJourney {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  preferredColor?: string;
  engine?: string;
  displacement?: string;
  horsepower?: number;
  torque?: number;
  fuelType?: 'gas' | 'hybrid' | 'electric';
  fuelEconomyMpg?: number;
  drivetrain?: 'FWD' | 'RWD' | 'AWD' | '4WD / 4x4' | '2WD / 4x2';
  condition: 'New' | 'Certified Pre-Owned' | 'Used';
  targetBudget: number;
  maxMileage: number;
  userZipCode: string;
  stage: 'Researching' | 'Screening Issues' | 'Tracking Inventory' | 'Negotiating' | 'Inspecting' | 'Purchased';
  createdDate: string;
  notes: string;
  
  // Market Band
  marketFairLow: number;
  marketFairAverage: number;
  marketFairHigh: number;
  originalMsrp: number;
  
  // Reliability Intel
  reliabilityScore: number; // 0-100
  mechanicalFailureRisk: 'Very Low' | 'Moderate' | 'Above Average' | 'High Alert';
  issuesSummary: string;
  mechanicalIssues: MechanicalIssue[];
  recalls: NHTSARecall[];
  inspectionChecklist: PPICheckItem[];
  
  // Listings
  listings: DealerListing[];
  
  // Ongoing Deals & Negotiations
  ongoingDeals?: OngoingDeal[];
  
  // Community Deals
  communityDeals: CommunityDeal[];
  
  // Ownership defaults
  tcoInputs: OwnershipCostInputs;
}
