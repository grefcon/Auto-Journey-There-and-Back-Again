import { CarJourney } from '../types/carJourney';

export const DEFAULT_JOURNEYS: CarJourney[] = [
  {
    id: 'journey-civic-2022',
    year: 2022,
    make: 'Honda',
    model: 'Civic',
    trim: 'EX (1.5L Turbo CVT)',
    engine: '1.5L VTEC Turbo Inline-4 (180 hp)',
    displacement: '1.5L Turbo',
    drivetrain: 'FWD',
    condition: 'Used',
    targetBudget: 23500,
    maxMileage: 38000,
    userZipCode: '90210',
    stage: 'Screening Issues',
    createdDate: '2026-03-12',
    notes: 'Prioritizing highway fuel efficiency and commuter comfort. Watching out for AC compressor leaks and steering rack recalls before pulling the trigger.',
    
    marketFairLow: 21800,
    marketFairAverage: 23200,
    marketFairHigh: 24700,
    originalMsrp: 26365,
    
    reliabilityScore: 84,
    mechanicalFailureRisk: 'Moderate',
    issuesSummary: 'Strong general mechanical longevity, but requires vigilance regarding the 1.5L Turbo direct injection oil dilution in short-trip driving, the sticky steering gearbox recall (24V-744), and persistent Honda AC condenser micro-crack leaks.',
    
    mechanicalIssues: [
      {
        id: 'civic-issue-1',
        system: 'Electrical',
        component: 'Electric Power Steering (EPS) Gearbox Worm Wheel',
        title: 'Sticky or Notchy Steering Sensation at Highway Speeds',
        description: 'NHTSA Safety Recall 24V-744 covers over 1.7 million Honda vehicles. An improperly manufactured steering gearbox worm gear swells from moisture absorption and excessive spring preload, causing high internal friction and a sudden "sticky" or jerky resistance when making small steering adjustments.',
        severity: 'critical',
        failureMileageRange: '5,000 - 35,000 mi',
        estimatedCostRange: { min: 0, max: 2100 },
        symptoms: ['Momentary catch or notch when turning wheel slightly from center', 'Fatigue on straight highway driving', 'Clicking sound from steering column'],
        warningSignsTestDrive: 'Drive on an uninterrupted straight freeway at 60-70 mph. Make tiny micro-corrections; if the steering wheel feels like it sticks in place and requires a distinct tug to break free, the gearbox is failing.',
        preventativeAdvice: 'Verify via NHTSA VIN check whether recall 24V-744 has been performed with the updated gearbox assembly spring and grease.',
        isTSBOrRecall: true,
        frequency: 'Common',
        nhtsaComplaintCount: 1420
      },
      {
        id: 'civic-issue-2',
        system: 'Climate',
        component: 'AC Condenser & Shaft Seal',
        title: 'Refrigerant Leak Causing Warm Air from Driver Vents',
        description: 'Honda Civic condensers manufactured with thin wall aluminum are prone to corrosion and stone pinholes, plus compressor shaft seal degradation (TSB 19-091 & TSB 21-096). While Honda extended condenser warranty to 10 years, evaporator leaks behind the dashboard are NOT covered and cost significant labor.',
        severity: 'moderate',
        failureMileageRange: '25,000 - 55,000 mi',
        estimatedCostRange: { min: 450, max: 1850 },
        symptoms: ['Hissing sound behind glovebox when AC is turned on', 'Warm air blowing on driver side while passenger side is cool', 'Oily green dye residue on condenser face'],
        warningSignsTestDrive: 'Turn AC to maximum cold (LO) with recirculate ON. Measure vent temp with a thermometer or hand. It must drop below 44°F within 90 seconds. Listen for continuous hissing behind the center dashboard.',
        preventativeAdvice: 'Install a protective lower grille mesh screen to prevent highway rock strikes from puncturing the exposed low-mounted condenser.',
        isTSBOrRecall: true,
        frequency: 'Very Common',
        nhtsaComplaintCount: 890
      },
      {
        id: 'civic-issue-3',
        system: 'Powertrain',
        component: '1.5L Direct Injection Cylinder Rings & Head Gasket',
        title: 'Cold Weather Fuel Dilution in Engine Oil & Head Gasket Seepage',
        description: 'The L15CA direct-injected turbo engine can suffer from unburnt atomized fuel washing past piston rings into the crankcase during short cold trips where the engine does not reach operating temperature. High-mileage or tuned examples also exhibit head gasket breach between cylinders 2 and 3.',
        severity: 'high',
        failureMileageRange: '45,000 - 90,000 mi',
        estimatedCostRange: { min: 250, max: 2800 },
        symptoms: ['Strong raw gasoline odor on engine dipstick', 'Engine oil level reading significantly ABOVE the top full mark', 'Slight coolant loss with no visible external puddles', 'Rough idle upon cold start for the first 10 seconds'],
        warningSignsTestDrive: 'Pull the engine oil dipstick BEFORE starting the car. Smell the oil directly; if it reeks of raw fuel or the level is half an inch above the top orange plastic hash, oil dilution is active.',
        preventativeAdvice: 'Never idle to warm up; drive conservatively until up to temp. Strictly adhere to 5,000-mile synthetic oil changes regardless of the 10,000-mile Maintenance Minder algorithm.',
        isTSBOrRecall: true,
        frequency: 'Uncommon',
        nhtsaComplaintCount: 310
      },
      {
        id: 'civic-issue-4',
        system: 'Transmission',
        component: 'Continuously Variable Transmission (CVT) Push Belt & Valve Body',
        title: 'CVT Judder and Hesitation on Low-Speed Acceleration',
        description: 'The Honda LL-CVT relies on extreme hydraulic pressure across high-tensile steel push belts. If transmission fluid (HCF-2) is not replaced regularly, sheared fluid causes micro-slip, belt shudder, and hydraulic solenoid sticking at low crawling speeds.',
        severity: 'high',
        failureMileageRange: '60,000 - 100,000 mi',
        estimatedCostRange: { min: 280, max: 4800 },
        symptoms: ['Vibration or fishbite surging between 15-25 mph', 'Delayed 2-second engagement when shifting from Reverse to Drive', 'Transmission overheating warning on long mountain climbs'],
        warningSignsTestDrive: 'Perform a slow, creeping roll in Drive without touching the gas, then gently accelerate to 20 mph. Watch for tachometer surging or a shudder through the floorboard.',
        preventativeAdvice: 'Drain and fill transmission fluid every 30,000 miles with genuine Honda HCF-2 fluid. Never flush under pressure.',
        isTSBOrRecall: false,
        frequency: 'Uncommon',
        nhtsaComplaintCount: 145
      }
    ],
    
    recalls: [
      {
        campaignNumber: '24V-744',
        component: 'Steering: Gearbox Assembly',
        summary: 'Improper worm wheel manufacturing may cause high internal friction and intermittent sticky steering resistance.',
        consequence: 'Increased steering effort can surprise the driver and elevate the risk of a roadway departure crash.',
        remedy: 'Dealers inspect the steering gearbox and replace the spring preload mechanism and grease, or install a replacement gearbox free of charge.',
        date: 'October 2024'
      },
      {
        campaignNumber: '23V-858',
        component: 'Fuel System: High Pressure Fuel Pump',
        summary: 'Cracks in the high-pressure fuel pump solenoid may allow fuel vapor or liquid gasoline to leak into the engine bay.',
        consequence: 'A fuel leak in the presence of an ignition source increases the danger of an underhood fire.',
        remedy: 'Dealers replace the high-pressure fuel pump assembly with an upgraded unit.',
        date: 'December 2023'
      }
    ],
    
    inspectionChecklist: [
      {
        id: 'chk-civic-1',
        category: 'Under Hood',
        title: 'Dipstick Oil Level & Fuel Scent Check',
        description: 'Verify oil level is between marks and does not smell heavily of raw gasoline (indicators of 1.5T fuel wash).',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-civic-2',
        category: 'Test Drive Dynamics',
        title: 'Highway 65 MPH Steering Centering & Stickiness Test',
        description: 'Test for micro-hesitation or notchiness when tracking straight on freeway (Recall 24V-744 check).',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-civic-3',
        category: 'Interior & Electronics',
        title: 'AC Center & Driver Vent Temperature Differential',
        description: 'Measure vent air output at LO fan max; verify no hissing behind dash or warm driver vents.',
        riskSeverity: 'moderate',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-civic-4',
        category: 'Undercarriage & Suspension',
        title: 'CVT Pan & Lower Engine Splash Shield Leak Check',
        description: 'Look for wet fluid weeping near the bellhousing or lower radiator condenser crimp tabs.',
        riskSeverity: 'moderate',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-civic-5',
        category: 'Paperwork & Service Records',
        title: 'NHTSA Recall 24V-744 & 23V-858 Verification',
        description: 'Request printout of Honda Interactive Network warranty records proving recall completions.',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      }
    ],
    
    listings: [
      {
        id: 'list-c1',
        dealerName: 'Downtown Honda Metro',
        dealerType: 'Franchise Dealer',
        title: '2022 Honda Civic EX Sedan - 1 Owner CPO',
        price: 22895,
        marketFairPrice: 23400,
        mileage: 26400,
        distanceMiles: 8.4,
        location: 'Culver City, CA',
        vin: '19XFL1H74NE049182',
        trim: 'EX',
        exteriorColor: 'Sonic Gray Pearl',
        daysOnMarket: 14,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 6 },
        url: 'https://www.autotempest.com/results?make=honda&model=civic&zip=90210&listing=101',
        sourcePlatform: 'AutoTempest',
        isSaved: true,
        notes: 'HondaTrue Certified Pre-Owned with 7yr/100k powertrain warranty. Dealer confirmed steering recall performed in Nov 2024.',
        dealerGrade: {
          grade: 'A',
          overallRating: 4.6,
          reviewsCount: 418,
          fccCalloutStatus: 'Clean - No Regulatory Flags',
          fccCalloutDetails: [
            'Zero FCC telemarketing citations or TCPA robocall violations on file.',
            'Transparent itemized pricing compliant with FTC CARS guidelines.',
          ],
          bbbRating: 'A+',
          customerSentiment: 'Clean buying process; no forced nitrogen or alarm add-ons in F&I.',
          transparencyScore: 92,
          keyWatchouts: ['Verify standard $85 California doc fee limit.'],
          negotiationLeverage: 'CPO unit sitting 14 days; offer $22,400 Out-The-Door without resistance.',
        },
        autoTrack: {
          enabled: true,
          targetUrl: 'https://www.autotempest.com/results?make=honda&model=civic&zip=90210&listing=101',
          frequency: 'Daily',
          lastCheckedDate: 'Today at 9:30 AM',
          lastConfirmedPrice: 22895,
          originalPrice: 23500,
          status: 'Price Dropped',
          nextCheckDue: 'Tomorrow at 9:30 AM',
          priceHistory: [
            { date: 'Oct 12', price: 23500, status: 'Initial' },
            { date: 'Oct 16', price: 23100, status: 'Price Dropped', note: 'First markdown' },
            { date: 'Today', price: 22895, status: 'Price Dropped', note: 'Second markdown -$205' },
          ],
        },
      },
      {
        id: 'list-c2',
        dealerName: 'Pacific Auto Gallery',
        dealerType: 'Independent Dealer',
        title: '2022 Honda Civic EX - Low Mileage Clean',
        price: 21990,
        marketFairPrice: 23100,
        mileage: 31200,
        distanceMiles: 16.2,
        location: 'Glendale, CA',
        vin: '19XFL1H78NE018247',
        trim: 'EX',
        exteriorColor: 'Platinum White Pearl',
        daysOnMarket: 39,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 4 },
        url: 'https://www.cars.com/vehicledetail/listing-civic-102',
        sourcePlatform: 'Cars.com',
        isSaved: false,
        notes: 'Price dropped $900 last Tuesday. Watch out: dealer charges a mandatory $1,495 theft protection fee on sticker.',
        dealerGrade: {
          grade: 'C-',
          overallRating: 3.1,
          reviewsCount: 184,
          fccCalloutStatus: 'Moderate Flag',
          fccCalloutDetails: [
            'Consumer complaints on file for automated promotional SMS texts without opt-out.',
            'Multiple Google reviews cite $1,495 GPS tracking fee added to internet advertised price upon arrival.',
          ],
          bbbRating: 'B-',
          customerSentiment: 'Aggressive sales staff; internet price excludes mandatory accessory packages.',
          transparencyScore: 58,
          keyWatchouts: [
            'Mandatory $1,495 LoJack/GPS fee pre-printed on buyer worksheet.',
            'Refuses to remove nitrogen tire fee without manager escalation.',
          ],
          negotiationLeverage: 'Car has been sitting for 39 days. Demand total removal of the $1,495 package as a condition to purchase.',
        },
        autoTrack: {
          enabled: true,
          targetUrl: 'https://www.cars.com/vehicledetail/listing-civic-102',
          frequency: 'Daily',
          lastCheckedDate: 'Today at 8:15 AM',
          lastConfirmedPrice: 21990,
          originalPrice: 22890,
          status: 'Price Dropped',
          nextCheckDue: 'Tomorrow at 8:15 AM',
          priceHistory: [
            { date: 'Oct 05', price: 22890, status: 'Initial' },
            { date: 'Today', price: 21990, status: 'Price Dropped', note: 'Marked down $900 after 30+ days on lot' },
          ],
        },
      },
      {
        id: 'list-c3',
        dealerName: 'Westside Car Center',
        dealerType: 'Independent Dealer',
        title: '2022 Honda Civic EX - Sunroof & Blind Spot',
        price: 24450,
        marketFairPrice: 23200,
        mileage: 18900,
        distanceMiles: 5.1,
        location: 'Santa Monica, CA',
        vin: '19XFL1H71NE098311',
        trim: 'EX',
        exteriorColor: 'Meteorite Gray Metallic',
        daysOnMarket: 8,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 5 },
        url: 'https://www.autotrader.com/cars-for-sale/civic-103',
        sourcePlatform: 'Autotrader',
        isSaved: false,
        notes: 'Overpriced by $1,250 compared to market average, but exceptionally low mileage.',
        dealerGrade: {
          grade: 'B',
          overallRating: 3.9,
          reviewsCount: 129,
          fccCalloutStatus: 'Clean - No Regulatory Flags',
          fccCalloutDetails: [
            'No FCC telemarketing violations or FTC enforcement actions found.',
          ],
          bbbRating: 'A-',
          customerSentiment: 'Fair boutique dealer, higher asking prices due to coastal overhead.',
          transparencyScore: 78,
          keyWatchouts: ['Higher documentation processing fees.'],
          negotiationLeverage: 'Show them local market average ($23,200) to negotiate down $1,000.',
        },
        autoTrack: {
          enabled: true,
          targetUrl: 'https://www.autotrader.com/cars-for-sale/civic-103',
          frequency: 'Daily',
          lastCheckedDate: 'Today at 11:00 AM',
          lastConfirmedPrice: 24450,
          originalPrice: 24450,
          status: 'Confirmed',
          nextCheckDue: 'Tomorrow at 11:00 AM',
          priceHistory: [
            { date: 'Oct 14', price: 24450, status: 'Initial' },
            { date: 'Today', price: 24450, status: 'Confirmed', note: 'Price confirmed unchanged' },
          ],
        },
      },
    ],
    
    ongoingDeals: [
      {
        id: 'deal-active-c1',
        listingId: 'list-c1',
        dealerName: 'Downtown Honda Metro',
        dealerContact: 'Marcus Vance (Internet Sales Manager)',
        dealerPhoneOrEmail: 'mvance@downtownhondametro.com · (310) 555-0142',
        vehicleTitle: '2022 Honda Civic EX Sedan - 1 Owner CPO',
        trim: 'EX (1.5L Turbo CVT)',
        vin: '19XFL1H74NE049182',
        url: 'https://www.autotempest.com/results?make=honda&model=civic&zip=90210&listing=101',
        msrpOrAskingPrice: 23500,
        agreedVehiclePrice: 22895,
        docFee: 85,
        dealerAddOns: [
          { name: 'Ceramic Paint Protection & Interior Shield', amount: 895, removable: true },
          { name: 'All-Weather Floor Mats & Cargo Tray', amount: 240, removable: false },
        ],
        governmentTaxes: 1980,
        registrationFees: 365,
        tradeInAllowance: 0,
        tradeInOwed: 0,
        downPayment: 3000,
        rebatesAndIncentives: 500,
        outTheDoorPrice: 25960,
        financingType: 'Financed',
        apr: 5.9,
        termMonths: 60,
        monthlyPayment: 442,
        stage: 'Worksheet Received',
        lastUpdated: 'Today at 11:20 AM',
        notes: 'Marcus sent the itemized worksheet via email. Base price was discounted to $22,895, but they tucked in $895 for Ceramic Paint Shield. Countering with the ceramic removed.',
        aiVerdict: {
          dealGrade: 'B+',
          headline: 'Strong base vehicle pricing, but $895 Ceramic Shield should be eliminated immediately.',
          verdictSummary: 'The selling price of $22,895 is $605 below original asking and compliant with fair market bands. The $85 documentation fee matches California statutory caps. However, the $895 Ceramic Protection is pure dealer profit and should be refused.',
          fairValueEstimate: 25065,
          priceVersusMarket: 'Below Market',
          potentialSavings: 895,
          itemizedJudgments: [
            { item: 'Base Vehicle Price', amount: 22895, category: 'legitimate', judgment: 'Competitive certified pre-owned price with 7yr warranty', advice: 'Acceptable selling price baseline.' },
            { item: 'Documentation Fee', amount: 85, category: 'legitimate', judgment: 'California statutory maximum fee', advice: 'Non-negotiable state standard.' },
            { item: 'Ceramic Paint Protection', amount: 895, category: 'junk_fee', judgment: 'Dealer-applied sealant with $40 wholesale cost', advice: 'Tell them to zero out this line item or you will not come in to sign.' },
            { item: 'All-Weather Floor Mats', amount: 240, category: 'negotiable', judgment: 'OEM accessories included in car', advice: 'Keep if desired, or ask for throw-in.' },
            { item: 'Sales Tax & DMV Registration', amount: 2345, category: 'legitimate', judgment: 'Mandatory California state fees', advice: 'Standard government fees.' }
          ],
          pros: [
            'California legal doc fee cap ($85) respected',
            'Pre-negotiated $605 discount off original listing price'
          ],
          watchouts: [
            '$895 dealer ceramic add-on added to worksheet',
            'Confirm 5.9% APR matches Tier 1 Honda Financial Services promotion'
          ],
          negotiationStrategy: [
            'Email Marcus directly and offer to finalize today at $25,065 Out-The-Door with the ceramic fee removed',
            'Remind him the car has been on the lot for 14 days and month-end is approaching',
            'Require written confirmation of the revised OTD sheet before driving to dealership'
          ],
          counterOfferScript: 'Hi Marcus,\n\nThank you for sending the itemized worksheet for the 2022 Civic EX (VIN 19XFL1H74NE049182).\n\nI am prepared to sign the purchase agreement today and pick up the car tomorrow. However, I will not be accepting the $895 Ceramic Paint Protection package. If you can update the Out-The-Door price to $25,065 and send over the revised agreement, I will put down the $3,000 deposit immediately.\n\nThank you,\nBuyer',
          recommendedCounterPrice: 25065
        }
      }
    ],
    
    communityDeals: [
      {
        id: 'deal-c1',
        source: 'Reddit r/whatcarshouldIbuy',
        dateReported: '2026-02-28',
        userHandle: 'u/CivicPilot22',
        trim: '2022 EX Sedan (Used - 28k mi)',
        msrp: 23900,
        negotiatedPrice: 22100,
        outTheDoorPrice: 24350,
        discountAmount: 1800,
        discountPercentage: 7.5,
        location: 'Northern CA / Bay Area',
        feesBreakdown: { docFee: 85, addOns: 0, taxes: 2165 },
        incentives: ['No trade-in', 'Pre-approved credit union finance 5.4%'],
        notes: 'Dealer initially tried to slip in $1,295 "Desert Protection Package" (tint & door edge guards). I refused to sign until they crossed it off completely. Paid $22,100 selling price.',
        dealRating: 'Exceptional',
        upvotes: 48
      },
      {
        id: 'deal-c2',
        source: 'Leasehackr',
        dateReported: '2026-01-19',
        userHandle: 'NorCalDealHunter',
        trim: '2022 EX Hatchback (CPO - 24k mi)',
        msrp: 24500,
        negotiatedPrice: 23200,
        outTheDoorPrice: 25700,
        discountAmount: 1300,
        discountPercentage: 5.3,
        location: 'Sacramento, CA',
        feesBreakdown: { docFee: 85, addOns: 299, taxes: 2116 },
        incentives: ['Honda CPO promotional APR rate 4.99% for 48 mo'],
        notes: 'Good experience. Negotiated over email first. Got them to throw in all-weather floor mats and the second key fob at no extra charge.',
        dealRating: 'Good',
        upvotes: 31
      },
      {
        id: 'deal-c3',
        source: 'Brand Owner Forum',
        dateReported: '2026-03-04',
        userHandle: 'VTEC_Cruiser',
        trim: '2022 EX (Used - 34k mi)',
        msrp: 23500,
        negotiatedPrice: 22600,
        outTheDoorPrice: 25100,
        discountAmount: 900,
        discountPercentage: 3.8,
        location: 'Phoenix, AZ',
        feesBreakdown: { docFee: 499, addOns: 0, taxes: 2001 },
        incentives: ['Cash buyer'],
        notes: 'Watch Arizona doc fees ($499+). Took 3 dealerships to find one willing to waive the paint protection add-on.',
        dealRating: 'Fair',
        upvotes: 19
      }
    ],
    
    tcoInputs: {
      annualMiles: 12000,
      yearsOwned: 5,
      downPayment: 5000,
      interestRate: 6.2,
      loanTermMonths: 60,
      fuelType: 'gas',
      fuelCostPerUnit: 4.15,
      efficiency: 36, // combined mpg
      insurancePerMonth: 145,
      annualMaintenanceRoutine: 620,
      salesTaxRate: 9.5,
      registrationAnnual: 290
    }
  },
  {
    id: 'journey-rav4-2021',
    year: 2021,
    make: 'Toyota',
    model: 'RAV4 Hybrid',
    trim: 'XLE AWD (2.5L eCVT)',
    engine: '2.5L Hybrid Synergy Dual-Motor (219 hp)',
    displacement: '2.5L Hybrid',
    drivetrain: 'AWD',
    condition: 'Used',
    targetBudget: 27500,
    maxMileage: 48000,
    userZipCode: '90210',
    stage: 'Researching',
    createdDate: '2026-03-14',
    notes: 'Looking for a reliable family crossover with AWD. Must inspect rear high-voltage harness ("Cablegate") and check for roof rack water leaks.',
    
    marketFairLow: 25400,
    marketFairAverage: 27100,
    marketFairHigh: 28900,
    originalMsrp: 31925,
    
    reliabilityScore: 88,
    mechanicalFailureRisk: 'Moderate',
    issuesSummary: 'Legendary Toyota hybrid powertrain reliability, but critical scrutiny needed on the rear electric motor high-voltage cable connector corrosion ("Cablegate") in road-salt states, plus roof rail clip water seepage.',
    
    mechanicalIssues: [
      {
        id: 'rav4-issue-1',
        system: 'Electrical',
        component: 'Rear High-Voltage MGR Cable Harness ("Cablegate")',
        title: 'Severe Salt Corrosion on Rear Hybrid Motor Cable Connector',
        description: 'Toyota Customer Support Program 22TE09 / 23TE08. Road spray and de-icing salt penetrate the non-weatherproof shielding around the high-voltage cable connecting to the rear MGR electric motor. Corrosion causes an isolation fault warning, disabling the hybrid system and AWD.',
        severity: 'critical',
        failureMileageRange: '35,000 - 80,000 mi',
        estimatedCostRange: { min: 0, max: 5800 },
        symptoms: ['"Hybrid System Malfunction" amber warning light on dash', 'Loss of rear electric all-wheel drive traction', 'High-voltage isolation leak diagnostic trouble code (DTC P0AA6 / P1C80)'],
        warningSignsTestDrive: 'Crawl underneath the rear bumper with a flashlight. Inspect where the orange thick cable meets the rear differential motor housing. If the black sleeve is open and white/green powdery crust is visible around the connector, replacement is imminent.',
        preventativeAdvice: 'Toyota extended warranty coverage to 8 years / 100,000 miles. Check if the updated slotted splash shield has been retrofitted.',
        isTSBOrRecall: true,
        frequency: 'Common',
        nhtsaComplaintCount: 1680
      },
      {
        id: 'rav4-issue-2',
        system: 'Body & Paint',
        component: 'Roof Rail Mounting Holes & Seal Washers',
        title: 'Roof Rack Water Leak Soaking Headliner and A-Pillar Airbags',
        description: 'Toyota Customer Support Program 23TE03 / TSB 0107-19. Thin paper-thin foam washers sealing the roof rail mounting clips degrade from UV and rainwater. Water runs into the cabin roof headliner, soaking A-pillar trim and damaging curtain airbag electrical harnesses.',
        severity: 'high',
        failureMileageRange: '20,000 - 60,000 mi',
        estimatedCostRange: { min: 0, max: 1950 },
        symptoms: ['Damp spots or yellow water rings on the fabric headliner near sunglasses holder or sunvisors', 'Musty damp carpet smell after heavy rain or car wash', 'Condensation on inside of windshield'],
        warningSignsTestDrive: 'Carefully press your fingers along the upper edges of the interior roof headliner above all four doors. Feel for dampness or crusty dried water stains.',
        preventativeAdvice: 'Toyota extended warranty up to 10 years unlimited mileage for leaking roof rails. Replaced clips use silicone elastomeric o-rings.',
        isTSBOrRecall: true,
        frequency: 'Very Common',
        nhtsaComplaintCount: 940
      },
      {
        id: 'rav4-issue-3',
        system: 'Powertrain',
        component: 'Engine Coolant Bypass Valve Actuator',
        title: 'Coolant Bypass Valve Stuck Causing Engine Maintenance Req Message',
        description: 'The electronically controlled bypass valve regulates engine warm-up cycle. The internal motor plastic gear binds or leaks, triggering DTC P2681 and an annoying permanent cluster alert.',
        severity: 'moderate',
        failureMileageRange: '40,000 - 75,000 mi',
        estimatedCostRange: { min: 650, max: 1100 },
        symptoms: ['"Engine Maintenance Required - Visit Your Dealer" message on multi-information display', 'Heater blows cool air intermittently while idling'],
        warningSignsTestDrive: 'Verify cluster display is completely clear of advisory messages. Plug in an OBD2 scanner to verify no pending P2681 code.',
        preventativeAdvice: 'Ensure genuine Toyota Super Long Life Coolant is maintained and not mixed with aftermarket generic fluids.',
        isTSBOrRecall: true,
        frequency: 'Common',
        nhtsaComplaintCount: 520
      }
    ],
    
    recalls: [
      {
        campaignNumber: '20V-332',
        component: 'Suspension: Front Lower Control Arms',
        summary: 'Cracks may develop in the front lower suspension control arms due to improper steel slab manufacturing.',
        consequence: 'A fractured lower control arm may separate while in motion, causing loss of steering control.',
        remedy: 'Dealers inspect and replace both front lower suspension arms free of charge.',
        date: 'May 2020'
      }
    ],
    
    inspectionChecklist: [
      {
        id: 'chk-rav4-1',
        category: 'Undercarriage & Suspension',
        title: 'Rear Hybrid Motor Cable Corrosion Inspection',
        description: 'Physically inspect the orange cable socket at rear differential for white galvanic corrosion or orange wire exposure.',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-rav4-2',
        category: 'Interior & Electronics',
        title: 'Headliner Water Damage & A-Pillar Moisture Check',
        description: 'Feel around visor clips, grab handles, and trunk ceiling for water stains or dampness from roof rail leaks.',
        riskSeverity: 'high',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-rav4-3',
        category: 'Under Hood',
        title: 'Coolant Bypass Valve & Inverter Coolant Level',
        description: 'Check secondary hybrid inverter reservoir level and check for P2681 pending DTCs.',
        riskSeverity: 'moderate',
        status: 'uninspected',
        notes: ''
      }
    ],
    
    listings: [
      {
        id: 'list-r1',
        dealerName: 'Lakeside Toyota Certified',
        dealerType: 'Franchise Dealer',
        title: '2021 Toyota RAV4 Hybrid XLE AWD - Gold CPO',
        price: 26995,
        marketFairPrice: 27200,
        mileage: 41200,
        distanceMiles: 11.2,
        location: 'Torrance, CA',
        vin: '2T3D1RFV8MC104928',
        trim: 'XLE',
        exteriorColor: 'Magnetic Gray Metallic',
        daysOnMarket: 18,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 7 },
        url: 'https://example.com/listing/r1',
        isSaved: true,
        notes: 'California car its entire life (zero road salt risk on rear cable). Dealer confirmed roof rail clips inspected.'
      },
      {
        id: 'list-r2',
        dealerName: 'Valley Motor Sports',
        dealerType: 'Independent Dealer',
        title: '2021 Toyota RAV4 Hybrid XLE AWD - Tech Package',
        price: 25800,
        marketFairPrice: 27000,
        mileage: 47500,
        distanceMiles: 22.0,
        location: 'Van Nuys, CA',
        vin: '2T3D1RFV2MC092144',
        trim: 'XLE',
        exteriorColor: 'Blueprint',
        daysOnMarket: 45,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: false, serviceRecordsCount: 5 },
        url: 'https://example.com/listing/r2',
        isSaved: false,
        notes: 'Priced $1,200 below market. Carfax shows 1st owner was in Michigan (Salt Belt!) - MUST verify rear cable.'
      }
    ],
    
    ongoingDeals: [],
    
    communityDeals: [
      {
        id: 'deal-r1',
        source: 'Brand Owner Forum',
        dateReported: '2026-03-01',
        userHandle: 'RAV4World_Dan',
        trim: '2021 XLE Hybrid (Used - 39k mi)',
        msrp: 27800,
        negotiatedPrice: 26300,
        outTheDoorPrice: 28950,
        discountAmount: 1500,
        discountPercentage: 5.4,
        location: 'SoCal',
        feesBreakdown: { docFee: 85, addOns: 0, taxes: 2565 },
        incentives: ['Toyota Financial Certified Pre-Owned financing'],
        notes: 'Pushed hard on the fact that car was on lot for 35 days. Got them to waive their $895 GPS recovery add-on without blinking.',
        dealRating: 'Exceptional',
        upvotes: 62
      }
    ],
    
    tcoInputs: {
      annualMiles: 13500,
      yearsOwned: 5,
      downPayment: 6000,
      interestRate: 5.9,
      loanTermMonths: 60,
      fuelType: 'hybrid',
      fuelCostPerUnit: 4.15,
      efficiency: 40, // combined mpg
      insurancePerMonth: 155,
      annualMaintenanceRoutine: 540,
      salesTaxRate: 9.5,
      registrationAnnual: 340
    }
  },
  {
    id: 'journey-cx5-2020',
    year: 2020,
    make: 'Mazda',
    model: 'CX-5',
    trim: 'Grand Touring AWD (2.5L 6AT)',
    engine: '2.5L Skyactiv-G Naturally Aspirated (187 hp)',
    displacement: '2.5L',
    drivetrain: 'AWD',
    condition: 'Used',
    targetBudget: 21000,
    maxMileage: 52000,
    userZipCode: '90210',
    stage: 'Tracking Inventory',
    createdDate: '2026-03-08',
    notes: 'Premium interior feel and traditional 6-speed automatic transmission (no CVT). Watching out for 2018-2020 cylinder head coolant weep and front control arm bushings.',
    
    marketFairLow: 19800,
    marketFairAverage: 20900,
    marketFairHigh: 22400,
    originalMsrp: 31585,
    
    reliabilityScore: 86,
    mechanicalFailureRisk: 'Moderate',
    issuesSummary: 'Refined driving dynamics and bulletproof 6-speed torque-converter automatic. The main technical watch-out is cylinder head micro-cracking at the exhaust manifold on 2018-2020 Skyactiv engines with cylinder deactivation.',
    
    mechanicalIssues: [
      {
        id: 'cx5-issue-1',
        system: 'Powertrain',
        component: 'Cylinder Head Casting (Exhaust Manifold Area)',
        title: 'Cylinder Head Cracking & External Coolant Leak',
        description: 'Mazda TSB 01-013/21. In 2018-2020 2.5L engines with Cylinder Deactivation, thermal stress cycles cause hairline cracking near the rear exhaust ports. Coolant leaks externally down the back of the engine block onto the catalytic converter, causing a sweet maple-syrup smell and progressive coolant loss.',
        severity: 'critical',
        failureMileageRange: '45,000 - 85,000 mi',
        estimatedCostRange: { min: 2800, max: 5200 },
        symptoms: ['Sweet coolant odor from under the hood after driving', 'Coolant reservoir slowly dropping every month with no ground puddles', 'Dried pinkish residue on back side of cylinder head'],
        warningSignsTestDrive: 'With engine warm, pop the hood and shine a bright light behind the engine down along the exhaust heat shield. Look for crusty white/pink trails. Sniff air coming through heater vents.',
        preventativeAdvice: 'Check if cylinder head revision part PYFA-10-090B has been installed if previously serviced. Some owners had engines replaced under powertrain warranty.',
        isTSBOrRecall: true,
        frequency: 'Uncommon',
        nhtsaComplaintCount: 290
      },
      {
        id: 'cx5-issue-2',
        system: 'Suspension',
        component: 'Front Lower Control Arm Rear Hydro-Bushings',
        title: 'Front Control Arm Bushing Tearing & Low-Speed Clunk',
        description: 'The fluid-filled rubber rear bushings on the front lower control arms tear prematurely. This causes steering wander on grooved pavement and a distinct dull "thump" when braking or going over driveway aprons.',
        severity: 'moderate',
        failureMileageRange: '35,000 - 65,000 mi',
        estimatedCostRange: { min: 550, max: 950 },
        symptoms: ['Clunking noise from front wheels over speed bumps', 'Vibration in steering wheel during moderate braking from 50 mph', 'Uneven inner tire tread wear'],
        warningSignsTestDrive: 'Drive slowly at 10-15 mph over speed bumps or train tracks with windows down. Listen for suspension clunks. Tap the brakes firmly to feel for front wheel fore/aft slop.',
        preventativeAdvice: 'Replace with updated Mazda OEM revised bushings or aftermarket polyurethane solid bushings.',
        isTSBOrRecall: false,
        frequency: 'Common',
        nhtsaComplaintCount: 160
      }
    ],
    
    recalls: [
      {
        campaignNumber: '20V-061',
        component: 'Exterior Lighting: Daytime Running Lights',
        summary: 'Sealing gasket degradation allows sulfur gas to react with the LED circuit, causing daytime running lights to flicker or fail completely.',
        consequence: 'Failed daytime running lights reduce vehicle visibility to oncoming motorists.',
        remedy: 'Dealers inspect and replace the complete headlight assemblies free of charge.',
        date: 'February 2020'
      }
    ],
    
    inspectionChecklist: [
      {
        id: 'chk-cx5-1',
        category: 'Under Hood',
        title: 'Rear Cylinder Head Coolant Weep Inspection',
        description: 'Inspect behind the engine block for dried pink coolant residue or sweet burning odor (TSB 01-013/21 check).',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-cx5-2',
        category: 'Undercarriage & Suspension',
        title: 'Control Arm Rubber Bushing Tear Check',
        description: 'Turn steering wheel full lock and inspect front control arm rear bushings for fluid leakage or splits.',
        riskSeverity: 'moderate',
        status: 'uninspected',
        notes: ''
      }
    ],
    
    listings: [
      {
        id: 'list-cx1',
        dealerName: 'Marina Mazda Premier',
        dealerType: 'Franchise Dealer',
        title: '2020 Mazda CX-5 Grand Touring AWD - Leather & Bose',
        price: 20495,
        marketFairPrice: 20900,
        mileage: 44100,
        distanceMiles: 7.8,
        location: 'Marina del Rey, CA',
        vin: 'JM3KFBCM4L0819284',
        trim: 'Grand Touring',
        exteriorColor: 'Soul Red Crystal Metallic',
        daysOnMarket: 21,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 8 },
        url: 'https://example.com/listing/cx1',
        isSaved: true,
        notes: 'Beautiful paint condition. Complete dealer service stamps every 5,000 miles.'
      }
    ],
    
    ongoingDeals: [],
    
    communityDeals: [
      {
        id: 'deal-cx1',
        source: 'Reddit r/whatcarshouldIbuy',
        dateReported: '2026-02-14',
        userHandle: 'ZoomZoomAdmirer',
        trim: '2020 Grand Touring AWD (Used - 46k mi)',
        msrp: 21500,
        negotiatedPrice: 20100,
        outTheDoorPrice: 22350,
        discountAmount: 1400,
        discountPercentage: 6.5,
        location: 'Orange County, CA',
        feesBreakdown: { docFee: 85, addOns: 0, taxes: 2165 },
        incentives: ['Paid cash balance'],
        notes: 'Pointed out that Soul Red paint had minor stone chips on bumper. Dealer lowered asking price by $1,400.',
        dealRating: 'Great',
        upvotes: 39
      }
    ],
    
    tcoInputs: {
      annualMiles: 12000,
      yearsOwned: 5,
      downPayment: 4000,
      interestRate: 6.5,
      loanTermMonths: 60,
      fuelType: 'gas',
      fuelCostPerUnit: 4.15,
      efficiency: 26,
      insurancePerMonth: 140,
      annualMaintenanceRoutine: 680,
      salesTaxRate: 9.5,
      registrationAnnual: 270
    }
  },
  {
    id: 'journey-ioniq5-2023',
    year: 2023,
    make: 'Hyundai',
    model: 'Ioniq 5',
    trim: 'SEL (Electric AWD)',
    engine: 'Dual Motor All-Wheel Drive (320 hp)',
    displacement: 'Dual Motor 77.4 kWh',
    drivetrain: 'AWD',
    condition: 'Used',
    targetBudget: 28500,
    maxMileage: 29000,
    userZipCode: '90210',
    stage: 'Researching',
    createdDate: '2026-03-15',
    notes: 'Considering EV for lower fuel and maintenance costs. 800V fast charging architecture is compelling, but must verify ICCU recall status and 12V battery health.',
    
    marketFairLow: 26900,
    marketFairAverage: 28400,
    marketFairHigh: 30200,
    originalMsrp: 48750,
    
    reliabilityScore: 81,
    mechanicalFailureRisk: 'Above Average',
    issuesSummary: 'Phenomenal 800V DC ultra-fast charging and cabin space, but plagued by ICCU (Integrated Charging Control Unit) transistor failures causing 12V battery death and Level 2 AC charge port overheating.',
    
    mechanicalIssues: [
      {
        id: 'ev-issue-1',
        system: 'Electrical',
        component: 'Integrated Charging Control Unit (ICCU)',
        title: 'ICCU Internal Transistor Overcurrent Blown Fuse',
        description: 'Hyundai NHTSA Safety Recall 24V-204. The ICCU handles AC bidirectional charging and steps high voltage (800V) down to 12V to keep the accessory battery alive. Internal thermal overload blows the 12V fuse, causing a sudden loud "pop", "Stop vehicle and check power supply" warning, and complete vehicle shutdown within 15-30 minutes.',
        severity: 'critical',
        failureMileageRange: '8,000 - 32,000 mi',
        estimatedCostRange: { min: 0, max: 4200 },
        symptoms: ['Loud pop sound from rear trunk floor area while driving or charging', 'Dash warning "Check Electric Vehicle System" with red 12V battery icon', 'Vehicle goes into limp mode (max speed 25-45 mph) then dies'],
        warningSignsTestDrive: 'Check infotainment cluster service history and check whether recall 24V-204 (Campaign 257) software patch or hardware replacement has been completed.',
        preventativeAdvice: 'Mandatory recall service. Hyundai technicians inspect DTCs, update ICCU software, and replace ICCU and fuse if error codes are present.',
        isTSBOrRecall: true,
        frequency: 'Common',
        nhtsaComplaintCount: 1120
      },
      {
        id: 'ev-issue-2',
        system: 'Electrical',
        component: 'Level 2 AC Charge Port Temperature Sensor',
        title: 'Overheating AC Charging Port Throttling Current',
        description: 'TSB 23-01-026H. When charging at home on a 48-amp Level 2 EVSE, the internal contact pins in the J1772 charge inlet overheat past 212°F (100°C). The BMS abruptly drops charging current to 24 amps or halts charging entirely overnight, leaving the owner with an uncharged vehicle in the morning.',
        severity: 'moderate',
        failureMileageRange: '3,000 - 25,000 mi',
        estimatedCostRange: { min: 0, max: 1350 },
        symptoms: ['Scheduled overnight charge interrupts after 45 minutes', 'Bluelink app notification "Charging interrupted"', 'Charging port door hot to the touch during Level 2 charging'],
        warningSignsTestDrive: 'Inspect the charge port receptacle pins for melted black plastic, discoloration, or scorch marks.',
        preventativeAdvice: 'If using a home charger, set EVSE amperage to 32A or 40A maximum instead of full 48A to prevent thermal throttling.',
        isTSBOrRecall: true,
        frequency: 'Very Common',
        nhtsaComplaintCount: 680
      }
    ],
    
    recalls: [
      {
        campaignNumber: '24V-204',
        component: 'Electrical: ICCU / Charging System',
        summary: 'ICCU may suffer damage from overcurrent, resulting in loss of drive power and inability to charge 12V auxiliary battery.',
        consequence: 'Sudden loss of motive power at highway speeds elevates crash hazard.',
        remedy: 'Dealers inspect ICCU, update software, and replace ICCU and fuse if DTCs detected free of charge.',
        date: 'March 2024'
      }
    ],
    
    inspectionChecklist: [
      {
        id: 'chk-ioniq-1',
        category: 'Under Hood',
        title: '12V Auxiliary Battery Voltage & SOH Test',
        description: 'Use a digital multimeter to test 12V battery resting voltage (should be >12.4V; <12.0V indicates dying battery or ICCU charging fault).',
        riskSeverity: 'critical',
        status: 'uninspected',
        notes: ''
      },
      {
        id: 'chk-ioniq-2',
        category: 'Exterior & Body',
        title: 'J1772 & CCS Combo Charge Port Thermal Check',
        description: 'Examine high-voltage DC and AC pin connectors for any signs of heat deformation or carbon arcing.',
        riskSeverity: 'high',
        status: 'uninspected',
        notes: ''
      }
    ],
    
    listings: [
      {
        id: 'list-i1',
        dealerName: 'Hyundai Mission Hills',
        dealerType: 'Franchise Dealer',
        title: '2023 Hyundai Ioniq 5 SEL AWD - Clean Title CPO',
        price: 27995,
        marketFairPrice: 28400,
        mileage: 21800,
        distanceMiles: 19.5,
        location: 'Mission Hills, CA',
        vin: 'KM8KNDD47PU192849',
        trim: 'SEL',
        exteriorColor: 'Cyber Gray',
        daysOnMarket: 26,
        carfax: { cleanTitle: true, noAccidents: true, oneOwner: true, serviceRecordsCount: 4 },
        url: 'https://example.com/listing/i1',
        isSaved: true,
        notes: 'Qualifies for $4,000 Used Clean Vehicle Federal Tax Credit if purchaser income meets IRS thresholds!'
      }
    ],
    
    ongoingDeals: [],
    
    communityDeals: [
      {
        id: 'deal-i1',
        source: 'Leasehackr',
        dateReported: '2026-02-22',
        userHandle: 'EV_BargainHunter',
        trim: '2023 SEL AWD (Used - 19k mi)',
        msrp: 29500,
        negotiatedPrice: 27200,
        outTheDoorPrice: 26100, // after $4000 used EV credit!
        discountAmount: 2300,
        discountPercentage: 7.8,
        location: 'Southern CA',
        feesBreakdown: { docFee: 85, addOns: 0, taxes: 2815 },
        incentives: ['$4,000 Point-of-Sale Used EV Federal Tax Credit IRS 25E'],
        notes: 'Depreciation on used EVs is massive right now. Stacked dealer discount with the instant $4k POS tax credit directly at dealership! Best value on the road.',
        dealRating: 'Exceptional',
        upvotes: 94
      }
    ],
    
    tcoInputs: {
      annualMiles: 12000,
      yearsOwned: 5,
      downPayment: 5000,
      interestRate: 6.2,
      loanTermMonths: 60,
      fuelType: 'electric',
      fuelCostPerUnit: 0.28, // $/kWh in CA
      efficiency: 3.4, // mi/kWh
      insurancePerMonth: 165,
      annualMaintenanceRoutine: 280, // no oil changes!
      salesTaxRate: 9.5,
      registrationAnnual: 410 // EV road use fee included
    }
  }
];
