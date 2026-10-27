import React, { useState, useEffect, useMemo } from 'react';
import {
  CarJourney,
  EngineOption,
  DrivetrainOption,
  TrimOption,
  CarOptionsLookupResult,
  CarColorOption,
} from '../types/carJourney';
import {
  lookupVehicleOptions,
  POPULAR_VEHICLE_OPTIONS,
  MAJOR_US_MAKES,
  getModelsForMake,
  getExteriorColorsForMakeAndModel,
} from '../utils/carCatalog';
import {
  X,
  Car,
  Cpu,
  Compass,
  Check,
  Loader2,
  Sparkles,
  ChevronDown,
  Palette,
  AlertTriangle,
} from 'lucide-react';

interface NewJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateJourney: (newJourney: CarJourney, autoScan: boolean) => void;
}

const AVAILABLE_YEARS = [
  2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export const NewJourneyModal: React.FC<NewJourneyModalProps> = ({
  isOpen,
  onClose,
  onCreateJourney,
}) => {
  // Cascading Selection States
  const [year, setYear] = useState<number>(2025);
  const [make, setMake] = useState<string>('Ford');
  const [isCustomMake, setIsCustomMake] = useState<boolean>(false);
  const [customMakeInput, setCustomMakeInput] = useState<string>('');

  const [model, setModel] = useState<string>('Expedition');
  const [isCustomModel, setIsCustomModel] = useState<boolean>(false);
  const [customModelInput, setCustomModelInput] = useState<string>('');

  const [trim, setTrim] = useState<string>('Tremor');
  const [isCustomTrim, setIsCustomTrim] = useState<boolean>(false);
  const [customTrimInput, setCustomTrimInput] = useState<string>('');

  // Exterior Color State
  const [selectedColor, setSelectedColor] = useState<string>('Any Color');
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false);
  const [customColorInput, setCustomColorInput] = useState<string>('');

  // Purchase Criteria
  const [condition, setCondition] = useState<CarJourney['condition']>('New');
  const [targetBudget, setTargetBudget] = useState<number>(81000);
  const [maxMileage, setMaxMileage] = useState<number>(5000);
  const [userZipCode, setUserZipCode] = useState<string>('90210');
  const [autoScanAi, setAutoScanAi] = useState<boolean>(true);

  // Engine & Drivetrain Lookup State
  const [isLoadingOptions, setIsLoadingOptions] = useState<boolean>(false);
  const [optionsResult, setOptionsResult] = useState<CarOptionsLookupResult>(() => {
    return POPULAR_VEHICLE_OPTIONS['ford-expedition-2025'];
  });
  const [selectedEngineId, setSelectedEngineId] = useState<string>('expedition-3-5-ho-eb');
  const [selectedDrivetrainId, setSelectedDrivetrainId] = useState<string>('expedition-4wd-controltrac');

  // Quick preset shortcuts
  const presets = [
    { year: 2025, make: 'Ford', model: 'Expedition', trim: 'Tremor', budget: 81000, miles: 5000, cond: 'New' as const },
    { year: 2025, make: 'Ford', model: 'Expedition', trim: 'Active', budget: 61700, miles: 5000, cond: 'New' as const },
    { year: 2021, make: 'Toyota', model: 'RAV4', trim: 'XLE Hybrid', budget: 27500, miles: 42000, cond: 'Used' as const },
    { year: 2022, make: 'Honda', model: 'Civic', trim: 'EX', budget: 23500, miles: 35000, cond: 'Used' as const },
    { year: 2021, make: 'Ford', model: 'F-150', trim: 'XLT', budget: 36500, miles: 45000, cond: 'Used' as const },
    { year: 2022, make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT', budget: 42000, miles: 38000, cond: 'Used' as const },
  ];

  const availableModels = getModelsForMake(make);

  // Instantaneous lookup when year, make, or model changes
  useEffect(() => {
    if (!isOpen) return;
    const activeMake = isCustomMake ? customMakeInput.trim() : make;
    const activeModel = isCustomModel ? customModelInput.trim() : model;

    if (!activeMake || !activeModel) return;

    let isCurrent = true;
    const spinnerTimeout = setTimeout(() => {
      if (isCurrent) setIsLoadingOptions(true);
    }, 60);

    const performLookup = async () => {
      try {
        const result = await lookupVehicleOptions(year, activeMake, activeModel);
        clearTimeout(spinnerTimeout);
        if (isCurrent && result) {
          setOptionsResult(result);

          if (!isCustomTrim && result.trims && result.trims.length > 0) {
            const hasMatch = result.trims.some((t) => t.name.toLowerCase() === trim.toLowerCase());
            let currentTrimObj: TrimOption;
            if (!hasMatch) {
              currentTrimObj = result.trims[0];
              setTrim(currentTrimObj.name);
            } else {
              currentTrimObj = result.trims.find((t) => t.name.toLowerCase() === trim.toLowerCase()) || result.trims[0];
            }

            if (currentTrimObj.engineId && result.engines.some((e) => e.id === currentTrimObj.engineId)) {
              setSelectedEngineId(currentTrimObj.engineId);
            } else if (result.engines.length > 0) {
              setSelectedEngineId(result.engines[0].id);
            }

            if (currentTrimObj.availableDrivetrains && currentTrimObj.availableDrivetrains.length > 0) {
              const matchedDt = result.drivetrains.find(
                (dt) => currentTrimObj.availableDrivetrains.includes(dt.id) || currentTrimObj.availableDrivetrains.includes(dt.type)
              );
              if (matchedDt) {
                setSelectedDrivetrainId(matchedDt.id);
              } else if (result.drivetrains.length > 0) {
                setSelectedDrivetrainId(result.drivetrains[0].id);
              }
            } else if (result.drivetrains.length > 0) {
              setSelectedDrivetrainId(result.drivetrains[0].id);
            }

            if (currentTrimObj.startingMsrp && condition === 'New') {
              setTargetBudget(currentTrimObj.startingMsrp);
            }
          }
        }
      } catch (err) {
        console.error('Error fetching options:', err);
      } finally {
        if (isCurrent) setIsLoadingOptions(false);
      }
    };

    performLookup();

    return () => {
      isCurrent = false;
      clearTimeout(spinnerTimeout);
    };
  }, [year, make, model, isCustomMake, customMakeInput, isCustomModel, customModelInput, isOpen]);

  const effectiveMake = isCustomMake ? customMakeInput || 'Custom' : make;
  const effectiveModel = isCustomModel ? customModelInput || 'Custom' : model;
  const effectiveTrim = isCustomTrim ? customTrimInput || 'Custom Trim' : trim;
  const effectiveColor = isCustomColor ? customColorInput || 'Custom Color' : selectedColor;

  const availableColors = useMemo(() => {
    return getExteriorColorsForMakeAndModel(effectiveMake, effectiveModel);
  }, [effectiveMake, effectiveModel]);

  const selectedColorObj = useMemo(() => {
    return availableColors.find((c) => c.value === effectiveColor) || availableColors[0];
  }, [availableColors, effectiveColor]);

  const handleYearChange = (newYear: number) => {
    setYear(newYear);
    if (newYear <= 2023) {
      setCondition('Used');
      setMaxMileage(45000);
    } else {
      setCondition('New');
      setMaxMileage(5000);
    }
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === '__custom__') {
      setIsCustomMake(true);
      setCustomMakeInput('');
    } else {
      setIsCustomMake(false);
      setMake(val);
      const models = getModelsForMake(val);
      if (models.length > 0) {
        setModel(models[0]);
        setIsCustomModel(false);
      }
    }
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === '__custom__') {
      setIsCustomModel(true);
      setCustomModelInput('');
    } else {
      setIsCustomModel(false);
      setModel(val);
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === '__custom__') {
      setIsCustomColor(true);
      setCustomColorInput('');
    } else {
      setIsCustomColor(false);
      setSelectedColor(val);
    }
  };

  const handleSelectTrimCard = (t: TrimOption) => {
    setIsCustomTrim(false);
    setTrim(t.name);

    if (t.engineId && optionsResult?.engines.some((e) => e.id === t.engineId)) {
      setSelectedEngineId(t.engineId);
    }
    if (t.availableDrivetrains && t.availableDrivetrains.length > 0 && optionsResult?.drivetrains) {
      const matchedDt = optionsResult.drivetrains.find(
        (dt) => t.availableDrivetrains.includes(dt.id) || t.availableDrivetrains.includes(dt.type)
      );
      if (matchedDt) setSelectedDrivetrainId(matchedDt.id);
    }
    if (t.startingMsrp && condition === 'New') {
      setTargetBudget(t.startingMsrp);
    }
  };

  const handleApplyPreset = (p: typeof presets[0]) => {
    setIsCustomMake(false);
    setIsCustomModel(false);
    setIsCustomTrim(false);
    setYear(p.year);
    setMake(p.make);
    setModel(p.model);
    setTrim(p.trim);
    setTargetBudget(p.budget);
    setMaxMileage(p.miles);
    setCondition(p.cond);
  };

  const selectedEngine = optionsResult?.engines.find((e) => e.id === selectedEngineId) || optionsResult?.engines[0];
  const selectedDrivetrain = optionsResult?.drivetrains.find((dt) => dt.id === selectedDrivetrainId) || optionsResult?.drivetrains[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullTrimTitle = effectiveTrim;
    const fairAvg = targetBudget > 0 ? targetBudget : 45000;
    const fairLow = Math.round(fairAvg * 0.93);
    const fairHigh = Math.round(fairAvg * 1.07);

    const fuelTypeMapping: any =
      selectedEngine?.fuelType === 'Hybrid'
        ? 'Hybrid'
        : selectedEngine?.fuelType === 'Electric'
        ? 'Electric'
        : selectedEngine?.fuelType === 'Diesel'
        ? 'Diesel'
        : 'Gasoline';

    const efficiencyVal = selectedEngine?.efficiency?.combined || 22;
    const fuelCostUnit = fuelTypeMapping === 'Electric' ? 0.16 : 3.65;

    const initialIssues: any[] = [
      {
        id: `issue-gen-1`,
        title: 'Transmission Shift Solenoid & Valve Body Sticking',
        system: 'Transmission',
        severity: 'moderate' as const,
        description: 'Hard 2-3 and 4-5 upshifts reported during cold engine operating cycles.',
        component: 'Electronic Shift Solenoids / Valve Body',
        failureMileageRange: '50k - 85k miles',
        symptoms: ['Harsh engagement from reverse to drive', 'Hesitation when accelerating onto highway'],
        estimatedCostRange: { min: 650, max: 1400 },
        isTSBOrRecall: false,
        warningSignsTestDrive: 'Inspect shift smoothness at half-throttle cold start.',
        preventativeAdvice: 'Fluid drain & fill every 35,000 miles.',
      },
    ];

    const initialChecklist: any[] = [
      {
        id: `ppi-1`,
        category: 'Under Hood',
        title: 'Examine Turbocharger Oil Feed Lines & Couplers',
        description: 'Inspect turbo inlet joints for weepage or residue buildup.',
        riskSeverity: 'high',
        status: 'uninspected' as const,
        notes: '',
      },
      {
        id: `ppi-2`,
        category: 'Undercarriage & Suspension',
        title: 'Check Transmission Fluid Clarity & Heat Odor',
        description: 'Verify transmission shifts cleanly across all gear steps.',
        riskSeverity: 'moderate',
        status: 'uninspected' as const,
        notes: '',
      },
      {
        id: `ppi-3`,
        category: 'Undercarriage & Suspension',
        title: 'Inspect Control Arm Bushings & Ball Joints',
        description: 'Check for front suspension play and torn rubber boots.',
        riskSeverity: 'moderate',
        status: 'uninspected' as const,
        notes: '',
      },
    ];

    const newJourney: CarJourney = {
      id: `journey-${Date.now()}`,
      createdDate: new Date().toISOString().split('T')[0],
      year,
      make: effectiveMake,
      model: effectiveModel,
      trim: fullTrimTitle,
      condition,
      targetBudget,
      maxMileage,
      userZipCode,
      notes: '',
      stage: 'Researching',
      preferredColor: effectiveColor,

      engine: selectedEngine?.name || `${year} Factory Spec`,
      displacement: selectedEngine?.displacement || '',
      horsepower: selectedEngine?.horsepower,
      torque: selectedEngine?.torqueLbFt,
      fuelType: fuelTypeMapping,
      fuelEconomyMpg: efficiencyVal,
      drivetrain: selectedDrivetrain?.type || 'AWD',

      marketFairLow: fairLow,
      marketFairAverage: fairAvg,
      marketFairHigh: fairHigh,
      originalMsrp: optionsResult?.trims.find((t) => t.name === fullTrimTitle)?.startingMsrp || fairAvg,
      reliabilityScore: year >= 2024 ? 85 : 79,
      mechanicalFailureRisk: 'Moderate',
      issuesSummary:
        optionsResult?.reliabilityRecommendation ||
        `Comprehensive diagnostics loaded for ${year} ${effectiveMake} ${effectiveModel} with ${selectedEngine?.name || 'standard powertrain'}.`,
      mechanicalIssues: initialIssues,
      recalls: [],
      inspectionChecklist: initialChecklist,

      listings: [
        {
          id: `list-${Date.now()}-1`,
          title: `${year} ${effectiveMake} ${effectiveModel} ${fullTrimTitle}`,
          dealerName: 'Certified Premier Dealership',
          dealerType: 'Franchise Dealer',
          price: Math.round(fairAvg * 0.98),
          marketFairPrice: fairAvg,
          mileage: condition === 'New' ? 15 : maxMileage > 10000 ? Math.round(maxMileage * 0.8) : 24000,
          distanceMiles: 8,
          location: `Metro Dealer (${userZipCode})`,
          vin: `1FA6P8CF${Math.floor(100000000 + Math.random() * 900000000)}`,
          trim: fullTrimTitle,
          exteriorColor: effectiveColor !== 'Any Color' ? effectiveColor : 'Oxford White',
          daysOnMarket: 9,
          imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          sourcePlatform: 'AutoTempest',
          isSaved: true,
          carfax: {
            cleanTitle: true,
            noAccidents: true,
            oneOwner: true,
            serviceRecordsCount: 6,
          },
          notes: 'Clean CarFax 1-owner with complete service records.',
          dealerGrade: {
            grade: 'A',
            overallRating: 4.6,
            reviewsCount: 310,
            fccCalloutStatus: 'Clean - No Regulatory Flags',
            fccCalloutDetails: ['Zero regulatory violations on record.', 'Transparent pricing.'],
            bbbRating: 'A+',
            customerSentiment: 'Clean facility, fast negotiation.',
            transparencyScore: 92,
            keyWatchouts: ['Confirm standard doc fee in writing.'],
            negotiationLeverage: 'Aged 9 days; competitive market position.',
          },
          autoTrack: {
            enabled: true,
            targetUrl: `https://www.autotempest.com/results?make=${encodeURIComponent(
              effectiveMake.toLowerCase()
            )}&model=${encodeURIComponent(effectiveModel.toLowerCase())}&zip=${userZipCode}`,
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
          userHandle: 'u/AutoEnthusiast',
          trim: fullTrimTitle,
          msrp: fairHigh,
          negotiatedPrice: Math.round(fairAvg * 0.96),
          outTheDoorPrice: Math.round(fairAvg * 1.05),
          discountAmount: Math.round(fairHigh - fairAvg * 0.96),
          discountPercentage: 5.2,
          location: 'Regional Dealer Network',
          feesBreakdown: { docFee: 85, addOns: 0, taxes: Math.round(fairAvg * 0.08) },
          incentives: ['No mandatory dealer accessories'],
          notes: `Negotiated by cross-shopping competing dealerships for this exact ${selectedEngine?.displacement || ''} ${selectedDrivetrain?.type || ''} spec.`,
          dealRating: 'Good',
          upvotes: 34,
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
        insurancePerMonth: 165,
        annualMaintenanceRoutine: 680,
        salesTaxRate: 8.5,
        registrationAnnual: 340,
      },
    };

    onCreateJourney(newJourney, autoScanAi);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-6 shadow-2xl space-y-6 my-6 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Configure Vehicle Journey</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Select your vehicle spec, trim package, and powertrain to unlock mechanical failure intel.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Select Shortcuts */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
            Quick Select
          </span>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((p, idx) => {
              const isMatch =
                year === p.year &&
                make.toLowerCase() === p.make.toLowerCase() &&
                model.toLowerCase() === p.model.toLowerCase() &&
                trim.toLowerCase() === p.trim.toLowerCase();
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(p)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-all ${
                    isMatch
                      ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 font-medium'
                      : 'bg-slate-950 hover:bg-slate-850 text-slate-300 border-slate-800'
                  }`}
                >
                  <span>{p.year} {p.make} {p.model}</span>
                  <span className="text-slate-500 mx-1">·</span>
                  <span className="text-amber-400/90">{p.trim}</span>
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          {/* Section 1: Vehicle Spec Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                1. Vehicle Specification
              </span>
              {isLoadingOptions && (
                <span className="flex items-center gap-1.5 text-xs text-amber-400">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Looking up options...
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* Year */}
              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Year</label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={(e) => handleYearChange(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-amber-500 rounded-lg p-2.5 text-white font-mono text-xs appearance-none pr-8 cursor-pointer transition-colors focus:outline-none"
                  >
                    {AVAILABLE_YEARS.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Make */}
              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Make</label>
                {isCustomMake ? (
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={customMakeInput}
                      onChange={(e) => setCustomMakeInput(e.target.value)}
                      placeholder="Make..."
                      className="w-full bg-slate-950 border border-amber-500 rounded-lg p-2 text-white text-xs"
                      required
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomMake(false)}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[11px]"
                    >
                      List
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      value={make}
                      onChange={handleMakeChange}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-amber-500 rounded-lg p-2.5 text-white text-xs appearance-none pr-8 cursor-pointer transition-colors focus:outline-none"
                    >
                      <optgroup label="Popular Major Makes">
                        {MAJOR_US_MAKES.slice(0, 13).map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Luxury & Premium">
                        {MAJOR_US_MAKES.slice(13, 25).map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="EV & Heritage Automakers">
                        {MAJOR_US_MAKES.slice(25).map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </optgroup>
                      <option value="__custom__">+ Custom Make...</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Model */}
              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Model</label>
                {isCustomModel ? (
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={customModelInput}
                      onChange={(e) => setCustomModelInput(e.target.value)}
                      placeholder="Model..."
                      className="w-full bg-slate-950 border border-amber-500 rounded-lg p-2 text-white text-xs"
                      required
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomModel(false)}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[11px]"
                    >
                      List
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      value={model}
                      onChange={handleModelChange}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-amber-500 rounded-lg p-2.5 text-white text-xs appearance-none pr-8 cursor-pointer transition-colors focus:outline-none"
                    >
                      {availableModels.map((mdl) => (
                        <option key={mdl} value={mdl}>
                          {mdl}
                        </option>
                      ))}
                      <option value="__custom__">+ Custom Model...</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Exterior Color */}
              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium flex items-center justify-between">
                  <span>Color</span>
                  {selectedColorObj && selectedColorObj.value !== 'Any Color' && (
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block border border-slate-700"
                      style={{ backgroundColor: selectedColorObj.hex }}
                    />
                  )}
                </label>
                {isCustomColor ? (
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={customColorInput}
                      onChange={(e) => setCustomColorInput(e.target.value)}
                      placeholder="Color name..."
                      className="w-full bg-slate-950 border border-amber-500 rounded-lg p-2 text-white text-xs"
                      required
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomColor(false)}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[11px]"
                    >
                      List
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      value={selectedColor}
                      onChange={handleColorChange}
                      className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-amber-500 rounded-lg p-2.5 text-white text-xs appearance-none pr-8 cursor-pointer transition-colors focus:outline-none"
                    >
                      {availableColors.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.name}
                        </option>
                      ))}
                      <option value="__custom__">+ Custom Color...</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Trim Package Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                2. Factory Trim Package
              </span>
              <button
                type="button"
                onClick={() => setIsCustomTrim(!isCustomTrim)}
                className="text-[11px] text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                {isCustomTrim ? 'Back to trims' : '+ Custom trim'}
              </button>
            </div>

            {isLoadingOptions ? (
              <div className="p-8 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col items-center justify-center gap-2 text-center">
                <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                <span className="text-xs text-slate-300">
                  Retrieving factory trims for {year} {effectiveMake} {effectiveModel}...
                </span>
              </div>
            ) : isCustomTrim ? (
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <label className="text-slate-300 block font-medium text-xs">Custom Trim Name</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customTrimInput}
                    onChange={(e) => setCustomTrimInput(e.target.value)}
                    placeholder="e.g. Special Edition, Nightshade..."
                    className="flex-1 bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-lg p-2 text-white text-xs"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsCustomTrim(false)}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : optionsResult?.trims && optionsResult.trims.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {optionsResult.trims.map((t, idx) => {
                  const isSelected = !isCustomTrim && trim.toLowerCase() === t.name.toLowerCase();
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectTrimCard(t)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-800/60 border-amber-500/80 text-white shadow-xs ring-1 ring-amber-500/30'
                          : 'bg-slate-950/80 border-slate-800/80 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold">{t.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        {t.description && (
                          <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                            {t.description}
                          </p>
                        )}
                        {t.keyFeatures && t.keyFeatures.length > 0 && (
                          <ul className="text-[10px] text-slate-400 space-y-0.5 pt-1">
                            {t.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                              <li key={fIdx} className="line-clamp-1">
                                · {feat}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {t.startingMsrp && (
                        <div className="text-[11px] text-slate-300 font-mono font-medium pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-slate-500">MSRP</span>
                          <span className="text-white">${t.startingMsrp.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>

          {/* Section 3: Powertrain & Drivetrain */}
          {optionsResult?.engines && optionsResult.engines.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                3. Powertrain & Engine Architecture
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {optionsResult.engines.map((eng) => {
                  const isSelected = selectedEngineId === eng.id;
                  return (
                    <div
                      key={eng.id}
                      onClick={() => setSelectedEngineId(eng.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-slate-800/60 border-amber-500/80 text-white shadow-xs ring-1 ring-amber-500/30'
                          : 'bg-slate-950/80 border-slate-800/80 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs font-semibold text-white">{eng.name}</span>
                            <span className="text-[11px] text-slate-400 font-mono">{eng.displacement}</span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {eng.configuration} · {eng.fuelType}
                          </div>
                        </div>

                        <div className="text-right font-mono tabular-nums text-xs shrink-0">
                          {eng.horsepower && (
                            <span className="text-white font-medium">{eng.horsepower} HP</span>
                          )}
                          {eng.efficiency?.combined && (
                            <div className="text-[10px] text-emerald-400">
                              {eng.efficiency.combined} MPG
                            </div>
                          )}
                        </div>
                      </div>

                      {eng.keyReliabilityNotes && (
                        <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800/60 line-clamp-2">
                          {eng.keyReliabilityNotes}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 4: Purchase Criteria */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              4. Target Parameters & Budget
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Condition</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg p-2.5 text-white text-xs"
                >
                  <option value="New">Brand New</option>
                  <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                  <option value="Used">Used</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Target Budget ($)</label>
                <input
                  type="number"
                  step={500}
                  value={targetBudget}
                  onChange={(e) => setTargetBudget(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg p-2.5 text-white font-mono text-xs"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Max Mileage</label>
                <input
                  type="number"
                  step={1000}
                  value={maxMileage}
                  onChange={(e) => setMaxMileage(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg p-2.5 text-white font-mono text-xs"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1 text-[11px] font-medium">Buyer Zip Code</label>
                <input
                  type="text"
                  value={userZipCode}
                  onChange={(e) => setUserZipCode(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-lg p-2.5 text-white font-mono text-xs"
                  required
                />
              </div>
            </div>
          </div>

          {/* AI Diagnostics Checkbox */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-white font-medium block text-xs">
                  Run Gemini Reliability Scan on Launch
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Scans live failure reports and technical service bulletins for this powertrain.
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

          {/* Actions */}
          <div className="pt-2 border-t border-slate-800 flex justify-end items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-300 rounded-lg text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Launch Journey · {year} {effectiveMake} {effectiveModel} {effectiveTrim}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
