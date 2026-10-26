import React, { useState, useEffect } from 'react';
import {
  CarJourney,
  EngineOption,
  DrivetrainOption,
  TrimOption,
  CarOptionsLookupResult,
} from '../types/carJourney';
import { lookupVehicleOptions, POPULAR_VEHICLE_OPTIONS } from '../utils/carCatalog';
import {
  Sparkles,
  X,
  Car,
  DollarSign,
  MapPin,
  Gauge,
  Cpu,
  Compass,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Loader2,
  Check,
  ShieldAlert,
  Layers,
  Flame,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface NewJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateJourney: (newJourney: CarJourney, autoScan: boolean) => void;
}

export const NewJourneyModal: React.FC<NewJourneyModalProps> = ({
  isOpen,
  onClose,
  onCreateJourney,
}) => {
  const [year, setYear] = useState<number>(2021);
  const [make, setMake] = useState<string>('Ford');
  const [model, setModel] = useState<string>('F-150');
  const [trim, setTrim] = useState<string>('XLT');
  const [condition, setCondition] = useState<CarJourney['condition']>('Used');
  const [targetBudget, setTargetBudget] = useState<number>(36500);
  const [maxMileage, setMaxMileage] = useState<number>(45000);
  const [userZipCode, setUserZipCode] = useState<string>('90210');
  const [notes, setNotes] = useState<string>('');
  const [autoScanAi, setAutoScanAi] = useState<boolean>(true);

  // Engine & Drivetrain Lookup State - Initialize immediately with pre-indexed Ford F-150 data
  const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(false);
  const [optionsResult, setOptionsResult] = useState<CarOptionsLookupResult>(() => {
    return POPULAR_VEHICLE_OPTIONS['ford-f-150'];
  });
  const [selectedEngineId, setSelectedEngineId] = useState<string>('f150-2-7-eb');
  const [selectedDrivetrainId, setSelectedDrivetrainId] = useState<string>('f150-4x4-part');

  // Quick preset shortcuts
  const presets = [
    { year: 2021, make: 'Ford', model: 'F-150', trim: 'XLT', budget: 36500, miles: 45000 },
    { year: 2022, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT', budget: 42000, miles: 38000 },
    { year: 2022, make: 'RAM', model: '1500', trim: 'Big Horn', budget: 38500, miles: 40000 },
    { year: 2022, make: 'Honda', model: 'Civic', trim: 'EX', budget: 23500, miles: 35000 },
    { year: 2021, make: 'Toyota', model: 'RAV4', trim: 'XLE Hybrid', budget: 27500, miles: 42000 },
    { year: 2020, make: 'Mazda', model: 'CX-5', trim: 'Grand Touring', budget: 21000, miles: 50000 },
  ];

  // Debounced lookup when year, make, or model changes
  useEffect(() => {
    if (!isOpen) return;
    if (!make.trim() || !model.trim()) return;

    let isCurrent = true;
    const timer = setTimeout(async () => {
      setIsLoadingOptions(true);
      try {
        const result = await lookupVehicleOptions(year, make, model);
        if (isCurrent && result) {
          setOptionsResult(result);

          // If current engine doesn't belong to new options, select first engine
          if (result.engines.length > 0) {
            const hasMatch = result.engines.some((e) => e.id === selectedEngineId);
            if (!hasMatch) {
              setSelectedEngineId(result.engines[0].id);
            }
          }

          // If current drivetrain doesn't belong, select first
          if (result.drivetrains.length > 0) {
            const hasMatch = result.drivetrains.some((d) => d.id === selectedDrivetrainId);
            if (!hasMatch) {
              setSelectedDrivetrainId(result.drivetrains[0].id);
            }
          }

          // Populate trims: if trim is blank or invalid, select first available trim
          if (result.trims.length > 0) {
            const hasMatch = result.trims.some((t) => t.name.toLowerCase() === trim.toLowerCase());
            if (!hasMatch) {
              setTrim(result.trims[0].name);
              if (result.trims[0].startingMsrp) {
                setTargetBudget(Math.round(result.trims[0].startingMsrp * 0.85));
              }
            }
          }
        }
      } catch (e) {
        console.error('Failed to lookup vehicle options:', e);
      } finally {
        if (isCurrent) setIsLoadingOptions(false);
      }
    }, 250);

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [year, make, model, isOpen]);

  if (!isOpen) return null;

  const handleApplyPreset = (p: typeof presets[0]) => {
    setYear(p.year);
    setMake(p.make);
    setModel(p.model);
    setTrim(p.trim);
    setTargetBudget(p.budget);
    setMaxMileage(p.miles);
  };

  const handleSelectTrim = (t: TrimOption) => {
    setTrim(t.name);
    if (t.startingMsrp) {
      setTargetBudget(Math.round(t.startingMsrp * 0.85));
    }
    // Switch to trim's default engine if available
    if (t.engineId && optionsResult?.engines.some((e) => e.id === t.engineId)) {
      setSelectedEngineId(t.engineId);
    }
    // Switch to trim's first compatible drivetrain
    if (t.availableDrivetrains && t.availableDrivetrains.length > 0) {
      const matchDt = optionsResult?.drivetrains.find(
        (dt) => t.availableDrivetrains.includes(dt.id) || t.availableDrivetrains.includes(dt.type)
      );
      if (matchDt) {
        setSelectedDrivetrainId(matchDt.id);
      }
    }
  };

  const selectedEngine = optionsResult?.engines.find((e) => e.id === selectedEngineId) || optionsResult?.engines[0];
  const selectedDrivetrain = optionsResult?.drivetrains.find((d) => d.id === selectedDrivetrainId) || optionsResult?.drivetrains[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fairAvg = targetBudget;
    const fairLow = Math.round(targetBudget * 0.93);
    const fairHigh = Math.round(targetBudget * 1.07);

    const engineDisplay = selectedEngine?.displacement || '';
    const drivetrainDisplay = selectedDrivetrain?.type || '';
    const fullTrimTitle = `${trim}${engineDisplay ? ` (${engineDisplay})` : ''}${
      drivetrainDisplay ? ` ${drivetrainDisplay}` : ''
    }`;

    const fuelTypeMapping: 'gas' | 'hybrid' | 'electric' =
      selectedEngine?.fuelType === 'Electric'
        ? 'electric'
        : selectedEngine?.fuelType === 'Hybrid' || selectedEngine?.fuelType === 'Plug-in Hybrid'
        ? 'hybrid'
        : 'gas';

    const efficiencyVal = selectedEngine?.efficiency?.combined || 22;
    const fuelCostUnit = fuelTypeMapping === 'electric' ? 0.28 : 3.85;

    const newJourney: CarJourney = {
      id: `journey-${Date.now()}`,
      year,
      make,
      model,
      trim: fullTrimTitle,
      engine: selectedEngine?.name || 'Standard Engine',
      displacement: selectedEngine?.displacement || '',
      drivetrain: selectedDrivetrain?.type || '4WD / 4x4',
      condition,
      targetBudget,
      maxMileage,
      userZipCode,
      stage: 'Researching',
      createdDate: new Date().toISOString().split('T')[0],
      notes: notes || `Configured ${year} ${make} ${model} ${trim} with ${selectedEngine?.name || ''} and ${selectedDrivetrain?.name || ''}.`,
      
      marketFairLow: fairLow,
      marketFairAverage: fairAvg,
      marketFairHigh: fairHigh,
      originalMsrp: Math.round(targetBudget * 1.18),
      
      reliabilityScore: 82,
      mechanicalFailureRisk: 'Moderate',
      issuesSummary: `Analyzing mechanical failure points specifically for the ${year} ${make} ${model} equipped with the ${selectedEngine?.name || 'engine'} and ${selectedDrivetrain?.name || 'drivetrain'}.`,
      
      mechanicalIssues: [
        {
          id: `issue-${Date.now()}-1`,
          system: 'Powertrain',
          component: `${selectedEngine?.displacement || 'Engine'} Fuel & Timing Assembly`,
          title: `${selectedEngine?.name || 'Powertrain'} Mechanical Architecture`,
          description: selectedEngine?.keyReliabilityNotes || 'Monitor fuel delivery, oil pressure, and scheduled spark plug and fluid intervals.',
          severity: 'moderate',
          failureMileageRange: '45,000 - 80,000 mi',
          estimatedCostRange: { min: 450, max: 1400 },
          symptoms: ['Slight hesitation during brisk throttle input', 'Cold start valve train sound'],
          warningSignsTestDrive: 'Start vehicle completely cold and listen for any timing chain or cam phaser rattle during the initial 3 seconds.',
          preventativeAdvice: 'Adhere strictly to 5,000-mile full synthetic oil change intervals to prevent premature timing wear.',
          isTSBOrRecall: false,
          frequency: 'Common',
        },
        {
          id: `issue-${Date.now()}-2`,
          system: selectedDrivetrain?.type === 'AWD' || selectedDrivetrain?.type === '4WD / 4x4' ? 'Suspension' : 'Transmission',
          component: `${selectedDrivetrain?.type || 'Drivetrain'} Transfer Unit & Differentials`,
          title: `${selectedDrivetrain?.name || 'Drivetrain'} Traction Component Check`,
          description: selectedDrivetrain?.keyReliabilityNotes || 'Inspect fluid seals and verify smooth engagement under acceleration.',
          severity: 'moderate',
          failureMileageRange: '40,000 - 75,000 mi',
          estimatedCostRange: { min: 400, max: 1600 },
          symptoms: ['Driveline vibration at highway speeds', 'Binding sensation when executing tight low-speed turns'],
          warningSignsTestDrive: 'Execute full-lock figure-eight turns in a parking lot to test for binding, chatter, or differential clunking.',
          preventativeAdvice: 'Service transfer case and differential gear lubricants every 40k miles.',
          isTSBOrRecall: false,
          frequency: 'Uncommon',
        },
      ],

      recalls: [],

      inspectionChecklist: [
        {
          id: `chk-${Date.now()}-1`,
          category: 'Under Hood',
          title: `${selectedEngine?.displacement || 'Engine'} Fluid Level & Leak Inspection`,
          description: 'Inspect valve covers, oil pan gasket, turbo coolant lines, and serpentine belt condition.',
          riskSeverity: 'critical',
          status: 'uninspected',
          notes: '',
        },
        {
          id: `chk-${Date.now()}-2`,
          category: 'Undercarriage & Suspension',
          title: `${selectedDrivetrain?.type || 'Drivetrain'} Axle Boots & Transfer Case Check`,
          description: 'Inspect CV half-shaft boots, front/rear differential seals, and transfer case for fluid weepage.',
          riskSeverity: 'critical',
          status: 'uninspected',
          notes: '',
        },
      ],

      listings: [
        {
          id: `list-${Date.now()}-1`,
          dealerName: 'Metro Automotive Group',
          dealerType: 'Franchise Dealer',
          title: `${year} ${make} ${model} ${fullTrimTitle}`,
          price: Math.round(fairAvg * 0.98),
          marketFairPrice: fairAvg,
          mileage: Math.round(maxMileage * 0.8),
          distanceMiles: 8.5,
          location: `Area (${userZipCode})`,
          vin: '1FTXXXXXXXXXXXXXX',
          trim: fullTrimTitle,
          exteriorColor: 'Carbonized Gray',
          daysOnMarket: 14,
          sourcePlatform: 'AutoTempest',
          url: `https://www.autotempest.com/results?make=${encodeURIComponent(make.toLowerCase())}&model=${encodeURIComponent(model.toLowerCase())}&zip=${userZipCode}`,
          carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 6 },
          isSaved: false,
          notes: `Equipped with factory ${selectedEngine?.name || ''} and ${selectedDrivetrain?.name || ''}. Clean 1-owner Carfax.`,
          dealerGrade: {
            grade: 'A',
            overallRating: 4.5,
            reviewsCount: 320,
            fccCalloutStatus: 'Clean - No Regulatory Flags',
            fccCalloutDetails: [
              'Zero FCC robocall or unsolicited telemarketing complaints on record.',
              'Compliant with FTC CARS upfront pricing guidelines.',
            ],
            bbbRating: 'A+',
            customerSentiment: 'Fast response and transparent quotes without mandatory dealer add-ons.',
            transparencyScore: 90,
            keyWatchouts: ['Confirm standard doc fee in writing.'],
            negotiationLeverage: 'Aged 14 days; offer 3% below asking.',
          },
          autoTrack: {
            enabled: true,
            targetUrl: `https://www.autotempest.com/results?make=${encodeURIComponent(make.toLowerCase())}&model=${encodeURIComponent(model.toLowerCase())}&zip=${userZipCode}`,
            frequency: 'Daily',
            lastCheckedDate: 'Today at 9:00 AM',
            lastConfirmedPrice: Math.round(fairAvg * 0.98),
            originalPrice: Math.round(fairAvg * 0.98),
            status: 'Confirmed',
            nextCheckDue: 'Tomorrow at 9:00 AM',
            priceHistory: [
              { date: 'Today', price: Math.round(fairAvg * 0.98), status: 'Initial', note: 'Auto-track active' },
            ],
          },
        },
      ],

      communityDeals: [
        {
          id: `deal-${Date.now()}-1`,
          source: 'Reddit r/whatcarshouldIbuy',
          dateReported: new Date().toISOString().split('T')[0],
          userHandle: 'u/TruckBuyer2026',
          trim: fullTrimTitle,
          msrp: fairHigh,
          negotiatedPrice: Math.round(fairAvg * 0.96),
          outTheDoorPrice: Math.round(fairAvg * 1.05),
          discountAmount: Math.round(fairHigh - fairAvg * 0.96),
          discountPercentage: 5.4,
          location: 'Regional Dealer Network',
          feesBreakdown: { docFee: 85, addOns: 0, taxes: Math.round(fairAvg * 0.08) },
          incentives: ['No mandatory dealer accessories'],
          notes: `Negotiated by cross-shopping competing dealerships for this exact ${selectedEngine?.displacement || ''} ${selectedDrivetrain?.type || ''} spec. Got $${Math.round(fairHigh - fairAvg * 0.96).toLocaleString()} off asking.`,
          dealRating: 'Good',
          upvotes: 24,
        },
      ],

      tcoInputs: {
        annualMiles: 12000,
        yearsOwned: 5,
        downPayment: Math.round(targetBudget * 0.2),
        interestRate: 6.2,
        loanTermMonths: 60,
        fuelType: fuelTypeMapping,
        fuelCostPerUnit: fuelCostUnit,
        efficiency: efficiencyVal,
        insurancePerMonth: 155,
        annualMaintenanceRoutine: 620,
        salesTaxRate: 8.5,
        registrationAnnual: 310,
      },
    };

    onCreateJourney(newJourney, autoScanAi);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 shadow-2xl space-y-6 my-8 max-h-[92vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Configure New Car Journey</h3>
              <p className="text-xs text-slate-400">
                Detailed engine family breakout (2.7L vs 3.5L vs 5.0L V8), 4x4 / AWD drivetrains, and factory trims.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets */}
        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Quick Select Common Vehicles:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((p, idx) => {
              const isMatch = make.toLowerCase() === p.make.toLowerCase() && model.toLowerCase() === p.model.toLowerCase();
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(p)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    isMatch
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-semibold shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
                  }`}
                >
                  {p.year} {p.make} {p.model}
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          {/* STEP 1: Basic Vehicle Identity */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Step 1: Vehicle Year, Make & Model
              </span>
              <span className="text-[11px] text-slate-400">
                Type any car to dynamically retrieve options
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Model Year</label>
                <input
                  type="number"
                  min={2005}
                  max={2026}
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                  required
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Make</label>
                <input
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g. Ford, Toyota, Chevrolet, Honda"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  required
                />
              </div>
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Model</label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. F-150, Silverado, Civic, RAV4"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  required
                />
              </div>
            </div>
          </div>

          {/* STEP 2: FACTORY TRIMS POPULATION */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 2: Available Factory Trims for {year} {make} {model}
                </span>
                {isLoadingOptions && (
                  <span className="flex items-center gap-1 text-[11px] text-amber-400 font-normal">
                    <Loader2 className="w-3 h-3 animate-spin" /> Looking up trims...
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">
                Click a trim to auto-populate equipment & price
              </span>
            </div>

            {/* Trims Grid */}
            {optionsResult?.trims && optionsResult.trims.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {optionsResult.trims.map((t, idx) => {
                  const isSelected = trim.toLowerCase() === t.name.toLowerCase();
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectTrim(t)}
                      className={`p-2.5 rounded-xl border cursor-pointer transition-all duration-150 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-white font-semibold shadow-sm ring-1 ring-amber-500/30'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{t.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        {t.description && (
                          <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-tight font-normal">
                            {t.description}
                          </p>
                        )}
                      </div>
                      {t.startingMsrp && (
                        <div className="text-[10px] text-amber-400/90 font-mono mt-2 pt-1 border-t border-slate-800/60">
                          MSRP ~${t.startingMsrp.toLocaleString()}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-slate-400 text-xs py-2">
                Type make and model to view trims.
              </div>
            )}

            {/* Custom trim input */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] text-slate-400 whitespace-nowrap">Selected / Custom Trim:</span>
              <input
                type="text"
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
                placeholder="e.g. XLT, Lariat, EX, Limited"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-white text-xs font-medium"
                required
              />
            </div>
          </div>

          {/* STEP 3: DEEP ENGINE OPTIONS BREAKOUT (e.g. 2.7L vs 3.5L vs 5.0L V8) */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 3: Engine Size & Architecture Breakout
                </span>
                {isLoadingOptions && (
                  <span className="flex items-center gap-1 text-[11px] text-amber-400 font-normal">
                    <Loader2 className="w-3 h-3 animate-spin" />
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400">
                Compare distinct engine families & known vulnerabilities
              </span>
            </div>

            {/* Distinct Engine Cards */}
            <div className="space-y-3">
              {optionsResult?.engines.map((eng) => {
                const isSelected = selectedEngineId === eng.id;
                return (
                  <div
                    key={eng.id}
                    onClick={() => setSelectedEngineId(eng.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-white">
                            {eng.name}
                          </span>
                          {eng.aspiration && (
                            <span className="text-[10px] bg-slate-800 text-amber-300 font-semibold px-2 py-0.5 rounded border border-slate-700">
                              {eng.aspiration}
                            </span>
                          )}
                          <span className="text-[10px] bg-slate-800 text-cyan-300 font-medium px-2 py-0.5 rounded border border-slate-700">
                            {eng.displacement}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {eng.configuration} · {eng.fuelType}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-baseline gap-2 font-mono tabular-nums text-xs">
                          {eng.horsepower && (
                            <span className="text-white font-bold">
                              {eng.horsepower} <span className="text-slate-400 font-normal text-[10px]">HP</span>
                            </span>
                          )}
                          {eng.torqueLbFt && (
                            <span className="text-amber-400 font-bold">
                              {eng.torqueLbFt} <span className="text-slate-400 font-normal text-[10px]">lb-ft</span>
                            </span>
                          )}
                          {eng.towingCapacityLbs && (
                            <span className="text-cyan-400 font-bold">
                              {eng.towingCapacityLbs.toLocaleString()} <span className="text-slate-400 font-normal text-[10px]">lbs tow</span>
                            </span>
                          )}
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Mechanical Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-xs">
                      {/* Pros & Architectural Strengths */}
                      <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Key Strengths & Engineering Profile
                        </span>
                        {eng.pros && eng.pros.length > 0 ? (
                          <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside">
                            {eng.pros.map((pro, pIdx) => (
                              <li key={pIdx} className="leading-tight">{pro}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[11px] text-slate-300">{eng.keyReliabilityNotes}</p>
                        )}
                      </div>

                      {/* Known Mechanical Vulnerabilities / Watchouts */}
                      <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Known Failure Points & Vulnerabilities
                        </span>
                        {eng.watchouts && eng.watchouts.length > 0 ? (
                          <ul className="space-y-1 text-[11px] text-slate-300 list-disc list-inside">
                            {eng.watchouts.map((watch, wIdx) => (
                              <li key={wIdx} className="leading-tight">{watch}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-[11px] text-slate-300">{eng.keyReliabilityNotes}</p>
                        )}
                      </div>
                    </div>

                    {/* Footer Row: Efficiency & Best For */}
                    <div className="mt-3 pt-2 border-t border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                      <div className="text-slate-400">
                        <strong className="text-amber-400/90 font-medium">Ideal For: </strong>
                        <span>{eng.bestFor || 'General daily driving and highway commuting.'}</span>
                      </div>
                      <div className="text-emerald-400 font-mono font-bold whitespace-nowrap self-start sm:self-auto">
                        EPA: {eng.efficiency.combined} {eng.efficiency.unit} ({eng.efficiency.city} City / {eng.efficiency.highway} Hwy)
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Powertrain Reliability Recommendation */}
            {optionsResult?.reliabilityRecommendation && (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 text-xs text-slate-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-400 font-bold block mb-0.5">
                    Engine Engineering Verdict:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    {optionsResult.reliabilityRecommendation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* STEP 4: DRIVETRAIN (4x4 vs 2x4 vs AWD) */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Step 4: Drivetrain (4x4 vs 2x4 / 2WD vs AWD)
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Traction & Transfer Case System</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {optionsResult?.drivetrains.map((dt) => {
                const isSelected = selectedDrivetrainId === dt.id;
                return (
                  <div
                    key={dt.id}
                    onClick={() => setSelectedDrivetrainId(dt.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-white shadow-sm ring-1 ring-amber-500/30'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{dt.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug font-normal">
                        {dt.description}
                      </p>
                    </div>
                    {dt.keyReliabilityNotes && (
                      <div className="text-[10px] text-slate-500 mt-2 pt-1 border-t border-slate-800/60 italic">
                        {dt.keyReliabilityNotes}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* STEP 5: BUDGET, MILEAGE & ZIP */}
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
              Step 5: Purchase Budget & Criteria
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-slate-300 block mb-1 font-medium">Condition</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                >
                  <option value="Used">Used</option>
                  <option value="Certified Pre-Owned">Certified Pre-Owned (CPO)</option>
                  <option value="New">Brand New</option>
                </select>
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-medium">Target Budget ($)</label>
                <input
                  type="number"
                  step={500}
                  value={targetBudget}
                  onChange={(e) => setTargetBudget(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-medium">Max Mileage</label>
                <input
                  type="number"
                  step={1000}
                  value={maxMileage}
                  onChange={(e) => setMaxMileage(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-medium">Buyer Zip Code</label>
                <input
                  type="text"
                  value={userZipCode}
                  onChange={(e) => setUserZipCode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono"
                  required
                />
              </div>
            </div>
          </div>

          {/* AI Auto-scan toggle */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-slate-200 font-bold block text-xs">
                  Run Live Gemini AI Diagnostic Scan on Creation
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Scans live failure reports tailored specifically to {selectedEngine?.displacement || 'this engine'} and {selectedDrivetrain?.type || 'drivetrain'}
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={autoScanAi}
              onChange={(e) => setAutoScanAi(e.target.checked)}
              className="w-4 h-4 accent-amber-500 cursor-pointer"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-2 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-750 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shadow-md transition-colors flex items-center gap-2"
            >
              <Car className="w-4 h-4" />
              Launch Journey for {year} {make} {model} {trim}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
