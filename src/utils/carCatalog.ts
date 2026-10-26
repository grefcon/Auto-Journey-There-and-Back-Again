import { CarOptionsLookupResult, EngineOption, DrivetrainOption, TrimOption } from '../types/carJourney';

export const POPULAR_VEHICLE_OPTIONS: Record<string, CarOptionsLookupResult> = {
  // Ford F-150 (all common variations normalize to this key)
  'ford-f-150': {
    year: 2021,
    make: 'Ford',
    model: 'F-150',
    engines: [
      {
        id: 'f150-2-7-eb',
        name: '2.7L EcoBoost Twin-Turbo V6 (Nano Engine Architecture)',
        displacement: '2.7L Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° V6 (Compacted Graphite Iron Block)',
        aspiration: 'Twin-Turbo',
        horsepower: 325,
        torqueLbFt: 400,
        fuelType: 'Gasoline',
        towingCapacityLbs: 10100,
        efficiency: { city: 20, highway: 26, combined: 22, unit: 'MPG' },
        keyReliabilityNotes: 'Compacted Graphite Iron (CGI) diesel-spec block eliminates bore flex. Outstanding low-end spool, but watch the plastic composite oil pan gasket.',
        pros: [
          'Compacted Graphite Iron block eliminates cylinder distortion and bore wear',
          'Fast-spooling lightweight twin turbos provide immediate low-RPM throttle response',
          'Highest real-world fuel economy among all gasoline F-150 engines (up to 26 MPG hwy)',
        ],
        watchouts: [
          'Plastic composite oil pan and drain plug can weep silicone sealant over time',
          'Oil feed and turbo coolant line o-rings can seep after 90,000 miles',
          'Mandatory 5,000-mile full synthetic oil intervals to prevent turbo oil coking',
        ],
        bestFor: 'Daily commuting, highway road trips, and light-to-moderate towing under 8,500 lbs with lowest fuel costs.',
      },
      {
        id: 'f150-3-5-eb',
        name: '3.5L EcoBoost Twin-Turbo V6 (Max Towing Workhorse)',
        displacement: '3.5L Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC V6 (Aluminum Block with Iron Sleeves)',
        aspiration: 'Twin-Turbo',
        horsepower: 400,
        torqueLbFt: 500,
        fuelType: 'Gasoline',
        towingCapacityLbs: 14000,
        efficiency: { city: 18, highway: 24, combined: 20, unit: 'MPG' },
        keyReliabilityNotes: 'Class-leading 500 lb-ft torque at 3,100 RPM for heavy trailer hauling. Inspect cold-start cam phasers for timing chain noise.',
        pros: [
          'Unrivaled 14,000 lbs maximum towing capacity — pulls effortlessly through steep mountain grades',
          'Dual injection (port and direct) prevents intake valve carbon deposit buildup',
          'Massive 500 lb-ft torque plateau from 3,000 to 5,000 RPM',
        ],
        watchouts: [
          'Cold-start cam phaser rattle (TSB 21-2119 / Customer Program 20M04); verify updated phasers installed',
          'Timing chain stretch if oil changes exceeded 7,500 miles under heavy towing',
          'Turbo wastegate linkage wear causing high-mileage deceleration rattle',
        ],
        bestFor: 'Heavy trailer towing (car haulers, boats, large campers 8,000–14,000 lbs) and commercial job sites.',
      },
      {
        id: 'f150-5-0-v8',
        name: '5.0L Coyote Naturally Aspirated V8 (American Modular V8)',
        displacement: '5.0L V8',
        configuration: 'Naturally Aspirated 90° DOHC 32-Valve V8',
        aspiration: 'Naturally Aspirated',
        horsepower: 400,
        torqueLbFt: 410,
        fuelType: 'Gasoline',
        towingCapacityLbs: 13000,
        efficiency: { city: 17, highway: 24, combined: 20, unit: 'MPG' },
        keyReliabilityNotes: 'Classic high-revving naturally aspirated American V8. Zero turbochargers, intercoolers, or boost plumbing complexity.',
        pros: [
          'Pure naturally aspirated simplicity — no turbo heat, wastegates, or intercooler plumbing',
          'Legendary Coyote exhaust note and linear high-RPM power curve (redlines at 7,000 RPM)',
          'High payload capacity rating and compatible with commercial snow plow prep package',
        ],
        watchouts: [
          '2018–2020 models had oil consumption issues (TSB 19-2365 PCV and dipstick recalibration)',
          '2021+ models added cylinder deactivation; check oil level every 2,500 miles',
          'Lower low-end torque below 3,000 RPM compared to the 3.5L EcoBoost',
        ],
        bestFor: 'Traditional truck buyers, snow plow operations, and drivers who want million-mile naturally aspirated simplicity.',
      },
      {
        id: 'f150-3-5-powerboost',
        name: '3.5L PowerBoost Full Hybrid V6 (Pro Power Onboard 7.2kW)',
        displacement: '3.5L Hybrid V6',
        configuration: 'Twin-Turbo V6 + 35 kW (47 hp) Transmission Electric Motor + 1.5 kWh Battery',
        aspiration: 'Hybrid',
        horsepower: 430,
        torqueLbFt: 570,
        fuelType: 'Hybrid',
        towingCapacityLbs: 12700,
        efficiency: { city: 25, highway: 26, combined: 25, unit: 'MPG' },
        keyReliabilityNotes: 'The most powerful production F-150 powertrain (570 lb-ft). Mobile generator bed outlets can power an entire campsite or job site.',
        pros: [
          'Monster 570 lb-ft torque delivered instantly from electric motor and twin turbos',
          'Pro Power Onboard generator in truck bed (2.4kW standard, 7.2kW optional with 240V 30A outlet)',
          'Over 700 miles of driving range on a single 30.6-gallon fuel tank (25 MPG combined)',
        ],
        watchouts: [
          'Higher electronic complexity with high-voltage battery inverter and auxiliary 12V AGM batteries',
          'Heavier curb weight reduces maximum payload capacity by ~300 lbs compared to 3.5L gas',
          'Occasional transmission shudder during hybrid gas-to-electric handover modes',
        ],
        bestFor: 'Overland camping, contractors running heavy power tools without a separate gas generator, and maximum fuel range.',
      },
      {
        id: 'f150-3-3-v6',
        name: '3.3L Ti-VCT Naturally Aspirated V6 (Base Work Fleet)',
        displacement: '3.3L V6',
        configuration: 'Naturally Aspirated 60° DOHC V6 with Dual Injection',
        aspiration: 'Naturally Aspirated',
        horsepower: 290,
        torqueLbFt: 265,
        fuelType: 'Gasoline',
        towingCapacityLbs: 8200,
        efficiency: { city: 19, highway: 24, combined: 21, unit: 'MPG' },
        keyReliabilityNotes: 'Base fleet engine with port and direct fuel injection. Very simple and reliable, but limited towing capability.',
        pros: [
          'Very low maintenance requirements and inexpensive repair parts',
          'Proven dual-injection fuel delivery with no carbon buildup',
        ],
        watchouts: [
          'Struggles with heavy trailers over 6,000 lbs or mountain highway climbs',
          'Paired with basic 6-speed or 10-speed transmission',
        ],
        bestFor: 'Fleet work trucks, city delivery, and basic homeowner utility tasks.',
      },
      {
        id: 'f150-raptor-3-5-ho',
        name: 'High-Output 3.5L EcoBoost Twin-Turbo V6 (Raptor Spec)',
        displacement: '3.5L HO Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC V6 with BorgWarner Turbos',
        aspiration: 'Twin-Turbo',
        horsepower: 450,
        torqueLbFt: 510,
        fuelType: 'Gasoline',
        towingCapacityLbs: 8200,
        efficiency: { city: 15, highway: 18, combined: 16, unit: 'MPG' },
        keyReliabilityNotes: 'Dedicated Raptor high-output motor with upgraded stainless steel manifolds and larger intercooler.',
        pros: ['450 horsepower and 510 lb-ft torque for desert pre-running', 'True dual exhaust with active valves'],
        watchouts: ['Aggressive fuel consumption on premium 91+ octane fuel', 'High-heat turbo wear'],
        bestFor: 'High-speed off-road desert running and dune driving.',
      },
    ],
    drivetrains: [
      {
        id: 'f150-4x4-part',
        type: '4WD / 4x4',
        name: '4x4 / 4WD (Part-Time Four-Wheel Drive with Low Range)',
        description: 'Shift-on-the-fly transfer case with 2H, 4H, and 4L low-range gearing. Standard on XL, XLT, and Tremor.',
        keyReliabilityNotes: 'Inspect front Integrated Wheel End (IWE) vacuum check valves for grinding noise in 2WD mode.',
      },
      {
        id: 'f150-4x4-auto',
        type: '4WD / 4x4',
        name: '4x4 / 4WD with 4A (Full-Time Automatic 4WD Mode)',
        description: 'Standard on Lariat, King Ranch, Platinum, Limited, and Raptor. Features an on-demand clutch-based 4A mode safe for dry, wet, and snowy pavement.',
        keyReliabilityNotes: 'More versatile in winter slush and rain; change transfer case fluid every 45,000 miles.',
      },
      {
        id: 'f150-2wd',
        type: '2WD / 4x2',
        name: '2WD / 4x2 (Rear-Wheel Drive)',
        description: 'Rear-wheel drive layout with solid rear axle. Higher payload capacity, lower curb weight, and better fuel economy.',
        keyReliabilityNotes: 'Zero front transfer case, front differential, or CV half-shafts to service.',
      },
    ],
    trims: [
      {
        name: 'XL',
        description: 'Fleet and budget-friendly utility truck with durable vinyl/cloth flooring, 8-inch screen, and basic driver aids.',
        engineId: 'f150-3-3-v6',
        availableEngineIds: ['f150-3-3-v6', 'f150-2-7-eb', 'f150-5-0-v8'],
        availableDrivetrains: ['f150-4x4-part', 'f150-2wd'],
        startingMsrp: 29990,
        keyFeatures: ['Black bumpers and grille', '17-inch steel wheels', 'Ford Co-Pilot360 basic'],
      },
      {
        name: 'XLT',
        description: 'The sweet spot volume family truck: chrome or sport exterior, SYNC 4 12-inch screen, and power accessories.',
        engineId: 'f150-2-7-eb',
        availableEngineIds: ['f150-2-7-eb', 'f150-5-0-v8', 'f150-3-5-eb', 'f150-3-5-powerboost'],
        availableDrivetrains: ['f150-4x4-part', 'f150-2wd'],
        startingMsrp: 36050,
        keyFeatures: ['Chrome or Sport appearance package', '12-inch center touchscreen', 'Blind Spot Information System (BLIS) with trailer coverage'],
      },
      {
        name: 'Lariat',
        description: 'Premium luxury standard: leather heated/ventilated seats, standard 4A automatic 4WD, B&O audio, and memory seating.',
        engineId: 'f150-2-7-eb',
        availableEngineIds: ['f150-2-7-eb', 'f150-5-0-v8', 'f150-3-5-eb', 'f150-3-5-powerboost'],
        availableDrivetrains: ['f150-4x4-auto', 'f150-2wd'],
        startingMsrp: 46980,
        keyFeatures: ['Standard 4A full-time automatic 4WD mode', 'Heated & ventilated leather front bucket seats', 'Bang & Olufsen sound system'],
      },
      {
        name: 'King Ranch',
        description: 'Southwestern luxury trim with custom Del Rio leather, two-tone Java paint, and genuine real wood interior trim.',
        engineId: 'f150-5-0-v8',
        availableEngineIds: ['f150-5-0-v8', 'f150-3-5-eb', 'f150-3-5-powerboost'],
        availableDrivetrains: ['f150-4x4-auto', 'f150-2wd'],
        startingMsrp: 57830,
        keyFeatures: ['Del Rio Kingsville leather upholstery', 'Standard 5.0L V8 or 3.5L EcoBoost', 'Power deployable running boards'],
      },
      {
        name: 'Platinum',
        description: 'High-end executive luxury: multicontour massaging front seats, brushed aluminum accents, and premium 20-inch polished wheels.',
        engineId: 'f150-5-0-v8',
        availableEngineIds: ['f150-5-0-v8', 'f150-3-5-eb', 'f150-3-5-powerboost'],
        availableDrivetrains: ['f150-4x4-auto', 'f150-2wd'],
        startingMsrp: 60800,
        keyFeatures: ['Active Motion massaging front seats', 'Satin chrome exterior accents', 'Ford BlueCruise hands-free highway driving'],
      },
      {
        name: 'Limited',
        description: 'Pinnacle flagship: standard 3.5L PowerBoost hybrid, twin-panel panoramic moonroof, 18-speaker B&O Unleashed sound.',
        engineId: 'f150-3-5-powerboost',
        availableEngineIds: ['f150-3-5-powerboost'],
        availableDrivetrains: ['f150-4x4-auto'],
        startingMsrp: 75230,
        keyFeatures: ['Standard 7.2 kW Pro Power Onboard generator', 'Twin-panel panoramic moonroof', 'Admiral Blue leather interior'],
      },
      {
        name: 'Tremor',
        description: 'Dedicated factory off-road package: 33-inch General Grabber tires, retuned off-road suspension, rear locking differential.',
        engineId: 'f150-3-5-eb',
        availableEngineIds: ['f150-3-5-eb', 'f150-5-0-v8'],
        availableDrivetrains: ['f150-4x4-part'],
        startingMsrp: 51200,
        keyFeatures: ['Factory 1-inch suspension lift with monotube shocks', 'Electronic locking rear differential', 'Trail One-Pedal Drive & Trail Turn Assist'],
      },
      {
        name: 'Raptor',
        description: 'High-speed desert trophy truck: 450 hp High-Output 3.5L EcoBoost, 5-link rear suspension with panhard rod, Fox LiveValve shocks.',
        engineId: 'f150-raptor-3-5-ho',
        availableEngineIds: ['f150-raptor-3-5-ho'],
        availableDrivetrains: ['f150-4x4-auto'],
        startingMsrp: 65840,
        keyFeatures: ['Fox 3.1 LiveValve internal bypass electronic shocks', '35-inch or 37-inch BFGoodrich KO2 tires', 'Wide-body fenders with functional heat extractors'],
      },
    ],
    reliabilityRecommendation: 'For daily driving, highway commuting, and towing under 8,500 lbs, the 2.7L EcoBoost with Compacted Graphite Iron block offers the highest durability and fewest catastrophic repairs. If you regularly tow heavy loads (>9,000 lbs), choose the 3.5L EcoBoost with verified updated cam phasers. If you want naturally aspirated simplicity, choose the 5.0L Coyote V8.',
  },

  // Chevrolet Silverado 1500 / GMC Sierra 1500
  'chevrolet-silverado': {
    year: 2022,
    make: 'Chevrolet',
    model: 'Silverado 1500',
    engines: [
      {
        id: 'chevy-2-7-turbomax',
        name: '2.7L TurboMax High-Output Turbo Inline-4',
        displacement: '2.7L TurboMax',
        configuration: 'Turbocharged DOHC 4-Cylinder with TriPower Variable Valve Train',
        aspiration: 'Turbocharged',
        horsepower: 310,
        torqueLbFt: 430,
        fuelType: 'Gasoline',
        towingCapacityLbs: 9500,
        efficiency: { city: 19, highway: 22, combined: 20, unit: 'MPG' },
        keyReliabilityNotes: 'Massive 430 lb-ft torque at low RPM from a truck-specific 4-cylinder. Very rigid crankshaft and cast iron cylinder liners.',
        pros: ['430 lb-ft torque matches larger V8s at lower RPM', '5-year/100,000-mile GM commercial warranty rating', 'Nimble front-end steering due to lower engine weight'],
        watchouts: ['Turbo coolant return hose leaks', 'Higher engine RPM sound signature compared to classic V8'],
        bestFor: 'Daily utility driving, regional contractors, and towing under 9,000 lbs.',
      },
      {
        id: 'chevy-5-3-v8',
        name: '5.3L EcoTec3 V8 with Dynamic Fuel Management (DFM)',
        displacement: '5.3L V8',
        configuration: 'Naturally Aspirated 90° Pushrod OHV V8 (Aluminum Block)',
        aspiration: 'Naturally Aspirated',
        horsepower: 355,
        torqueLbFt: 383,
        fuelType: 'Gasoline',
        towingCapacityLbs: 11500,
        efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
        keyReliabilityNotes: 'The legendary GM Small Block V8. Watch the Dynamic Fuel Management (DFM) collapsible lifters and pushrods.',
        pros: ['Smooth linear power delivery and classic V8 rumble', 'Abundant and cheap replacement parts nationwide', 'Paired with robust 10-speed automatic transmission'],
        watchouts: ['DFM lifter collapse/stuck lifter failure on cylinder bank 1 or 2 (Service Bulletin 21-NA-149)', 'Requires 5,000-mile oil changes with dexos1 Gen 3 spec'],
        bestFor: 'Worksite towing, fleet duty, and drivers who want traditional American V8 power.',
      },
      {
        id: 'chevy-6-2-v8',
        name: '6.2L EcoTec3 High-Output V8 (Corvette-Derived)',
        displacement: '6.2L V8',
        configuration: 'Naturally Aspirated 90° Pushrod OHV V8',
        aspiration: 'Naturally Aspirated',
        horsepower: 420,
        torqueLbFt: 460,
        fuelType: 'Gasoline',
        towingCapacityLbs: 13300,
        efficiency: { city: 15, highway: 20, combined: 17, unit: 'MPG' },
        keyReliabilityNotes: 'Maximum gasoline horsepower (420 hp). Needs 91+ premium fuel. Watch main bearing clearance and DFM lifters.',
        pros: ['420 horsepower delivers rapid passing and effortless heavy hauling', 'Standard dual-exhaust active sound', '13,300 lbs towing capacity'],
        watchouts: ['Requires premium octane fuel', 'Occasional crankshaft/connecting rod bearing noise on early production runs', 'DFM lifter risk'],
        bestFor: 'High-end luxury trims (High Country / LTZ) and buyers wanting maximum naturally aspirated acceleration.',
      },
      {
        id: 'chevy-3-0-duramax',
        name: '3.0L Duramax Turbo-Diesel Inline-6 (LZ0 / LM2)',
        displacement: '3.0L Turbo-Diesel',
        configuration: 'Turbocharged Inline-6 Aluminum Diesel',
        aspiration: 'Turbocharged',
        horsepower: 305,
        torqueLbFt: 495,
        fuelType: 'Diesel',
        towingCapacityLbs: 13300,
        efficiency: { city: 24, highway: 29, combined: 26, unit: 'MPG' },
        keyReliabilityNotes: 'Inherent primary balance of an Inline-6. Delivers an unbelievable 29-33 MPG highway empty. Rear oil pump belt replacement scheduled at 150k miles.',
        pros: ['Incredible 28-32 MPG highway fuel economy', 'Whisper-quiet diesel operation with 495 lb-ft torque at 1,500 RPM', 'Exhaust engine braking for controlled mountain towing'],
        watchouts: ['DEF / SCR emissions sensors and DPF regeneration cycles', 'Rear wet oil pump drive belt service requires transmission removal at 150k miles'],
        bestFor: 'Long-distance highway commuters, cross-country travel trailer haulers, and diesel enthusiasts.',
      },
    ],
    drivetrains: [
      {
        id: 'chevy-4x4-autotrac',
        type: '4WD / 4x4',
        name: '4x4 / 4WD Autotrac 2-Speed Transfer Case (with Auto 4WD)',
        description: 'Selectable 2WD, Auto 4WD (pavement safe), 4-High, and 4-Low gear reduction with electronic locking rear differential (G80).',
        keyReliabilityNotes: 'Automatic torque transfer to front axle when slip occurs; change transfer case fluid every 45k miles.',
      },
      {
        id: 'chevy-2wd',
        type: '2WD / 4x2',
        name: '2WD / 4x2 (Rear-Wheel Drive)',
        description: 'Rear-wheel drive layout with solid rear axle. Higher payload rating and lower routine maintenance.',
        keyReliabilityNotes: 'Simpler undercarriage with no front differential or transfer case.',
      },
    ],
    trims: [
      {
        name: 'WT (Work Truck)',
        description: 'Fleet-oriented pickup with vinyl seating, 7-inch touchscreen, and heavy-duty suspension.',
        engineId: 'chevy-2-7-turbomax',
        availableEngineIds: ['chevy-2-7-turbomax', 'chevy-5-3-v8'],
        availableDrivetrains: ['chevy-4x4-autotrac', 'chevy-2wd'],
        startingMsrp: 34600,
        keyFeatures: ['Durable vinyl flooring', 'Rear bumper CornerStep', 'Chevy Safety Assist'],
      },
      {
        name: 'Custom',
        description: 'Popular styling upgrade with 20-inch bright silver wheels, body-color bumpers, and remote start.',
        engineId: 'chevy-2-7-turbomax',
        availableEngineIds: ['chevy-2-7-turbomax'],
        availableDrivetrains: ['chevy-4x4-autotrac', 'chevy-2wd'],
        startingMsrp: 41200,
        keyFeatures: ['20-inch silver-painted aluminum wheels', 'Remote vehicle starter system', 'Trailering package'],
      },
      {
        name: 'LT',
        description: 'The core volume model: 13.4-inch horizontal touchscreen, 12.3-inch digital driver cluster, and chrome accents.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-2-7-turbomax', 'chevy-5-3-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac', 'chevy-2wd'],
        startingMsrp: 47000,
        keyFeatures: ['13.4-inch touchscreen with Google built-in', '12.3-inch digital instrument cluster', 'Dual-zone automatic climate control'],
      },
      {
        name: 'RST',
        description: 'Street-performance styling with monochromatic body-color trim, black Bowties, and sport suspension.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-5-3-v8', 'chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac', 'chevy-2wd'],
        startingMsrp: 51300,
        keyFeatures: ['Body-color center grille bar and bumpers', 'LED fog lights and taillamps', 'Optional 6.2L V8'],
      },
      {
        name: 'LT Trail Boss',
        description: 'Factory 2-inch suspension lift, Rancho monotube shocks, Goodyear Wrangler Territory MT tires, and Z71 package.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-5-3-v8', 'chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac'],
        startingMsrp: 56300,
        keyFeatures: ['Factory 2-inch suspension lift', 'Z71 Off-Road package with skid plates', 'Automatic locking rear differential (G80)'],
      },
      {
        name: 'LTZ',
        description: 'Luxury touring: perforated leather heated and ventilated front bucket seats, 20-inch polished wheels, and power tailgate.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-5-3-v8', 'chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac', 'chevy-2wd'],
        startingMsrp: 56000,
        keyFeatures: ['Perforated leather heated & ventilated seating', 'Bose premium 7-speaker sound system', 'Power up/down tailgate'],
      },
      {
        name: 'High Country',
        description: 'Flagship luxury: exclusive open-pore wood trim, stainless steel speaker grilles, Super Cruise hands-free driving available.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-5-3-v8', 'chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac'],
        startingMsrp: 62000,
        keyFeatures: ['Super Cruise hands-free trailering capability', 'Authentic open-pore wood interior trim', '20-inch machined aluminum wheels'],
      },
      {
        name: 'ZR2',
        description: 'Ultimate off-road truck: Multimatic DSSV spool-valve dampers, front and rear electronic locking differentials, steel bumpers.',
        engineId: 'chevy-6-2-v8',
        availableEngineIds: ['chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac'],
        startingMsrp: 70000,
        keyFeatures: ['Multimatic DSSV spool-valve dampers', 'Front and rear electronic locking differentials', 'High-approach steel front bumper with 31.8° approach angle'],
      },
    ],
    reliabilityRecommendation: 'The 3.0L Duramax Inline-6 diesel provides outstanding durability and class-leading fuel economy. If choosing the 5.3L or 6.2L V8, be diligent about 5,000-mile synthetic oil changes to protect the DFM lifter pins from collapsing.',
  },

  // RAM 1500
  'ram-1500': {
    year: 2022,
    make: 'RAM',
    model: '1500',
    engines: [
      {
        id: 'ram-5-7-hemi',
        name: '5.7L HEMI V8 with eTorque Mild Hybrid',
        displacement: '5.7L HEMI V8',
        configuration: 'Naturally Aspirated 90° Pushrod OHV V8 + 48V Belt-Driven Motor Generator',
        aspiration: 'Naturally Aspirated',
        horsepower: 395,
        torqueLbFt: 410,
        fuelType: 'Gasoline',
        towingCapacityLbs: 12750,
        efficiency: { city: 17, highway: 23, combined: 19, unit: 'MPG' },
        keyReliabilityNotes: 'The legendary HEMI rumble with 130 lb-ft electric launch assist. Watch for exhaust manifold bolt breakage and camshaft lifter wear under extended idle.',
        pros: ['Deep classic American V8 exhaust note', 'Instant seamless start-stop thanks to 48V motor', 'Paired with bulletproof ZF 8-speed automatic (TorqueFlite 8)'],
        watchouts: ['Exhaust manifold bolt cracking (ticking noise on cold start)', 'HEMI roller lifter needle bearing failure if oil is not changed every 5,000 miles'],
        bestFor: 'General truck buyers wanting reliable V8 towing and acceleration.',
      },
      {
        id: 'ram-3-6-pentastar',
        name: '3.6L Pentastar V6 with eTorque Mild Hybrid',
        displacement: '3.6L V6',
        configuration: 'Naturally Aspirated 60° DOHC 24-Valve V6 + 48V Mild Hybrid',
        aspiration: 'Naturally Aspirated',
        horsepower: 305,
        torqueLbFt: 269,
        fuelType: 'Gasoline',
        towingCapacityLbs: 7730,
        efficiency: { city: 20, highway: 25, combined: 22, unit: 'MPG' },
        keyReliabilityNotes: 'Proven V6 produced in the millions. Inspect the plastic oil filter housing/cooler in the engine valley for oil leaks.',
        pros: ['Low routine maintenance costs and great fuel economy', 'Smooth 48V eTorque start-stop integration'],
        watchouts: ['Plastic oil filter housing adapter cracks and leaks oil into engine valley', 'Rocker arm needle bearing tick at high mileage'],
        bestFor: 'Commuters, light hauling, and budget-conscious fleet owners.',
      },
      {
        id: 'ram-3-0-hurricane',
        name: '3.0L Hurricane Twin-Turbo Inline-6 (SST 420 hp)',
        displacement: '3.0L Twin-Turbo I6',
        configuration: 'Twin-Turbocharged DOHC 24-Valve Inline-6 with Dual Water-to-Air Intercoolers',
        aspiration: 'Twin-Turbo',
        horsepower: 420,
        torqueLbFt: 469,
        fuelType: 'Gasoline',
        towingCapacityLbs: 11560,
        efficiency: { city: 18, highway: 24, combined: 20, unit: 'MPG' },
        keyReliabilityNotes: 'State-of-the-art Stellantis twin-turbo straight-6. Massive low-end torque with water-to-air cooling.',
        pros: ['Smooth primary balance of an Inline-6', '469 lb-ft torque available from 2,500 RPM', 'Replaces the 5.7L HEMI with higher efficiency'],
        watchouts: ['Newer architecture; requires strict high-grade synthetic oil', 'Twin turbocharger heat fatigue on high mileage'],
        bestFor: 'Modern truck buyers wanting maximum refinement and punchy turbo boost.',
      },
    ],
    drivetrains: [
      {
        id: 'ram-4x4-bw',
        type: '4WD / 4x4',
        name: '4x4 / 4WD On-Demand Transfer Case (BorgWarner 48-12 with 4WD Auto)',
        description: 'Electronic transfer case featuring 2WD, 4WD Auto (full-time pavement safe), 4WD High, and 4WD Low.',
        keyReliabilityNotes: '4WD Auto mode allows driving in rain and patchy snow without driveline binding.',
      },
      {
        id: 'ram-2wd',
        type: '2WD / 4x2',
        name: '2WD / 4x2 (Rear-Wheel Drive)',
        description: 'Rear-wheel drive layout with coil spring multi-link rear suspension.',
        keyReliabilityNotes: 'Best-in-class unladen ride comfort and lower maintenance.',
      },
    ],
    trims: [
      {
        name: 'Tradesman',
        description: 'Base commercial truck with vinyl or cloth seats, 5-inch Uconnect screen, and class IV hitch.',
        engineId: 'ram-3-6-pentastar',
        availableEngineIds: ['ram-3-6-pentastar', 'ram-5-7-hemi'],
        availableDrivetrains: ['ram-4x4-bw', 'ram-2wd'],
        startingMsrp: 35900,
        keyFeatures: ['Heavy-duty vinyl or cloth seats', 'Keyless Go push-button start', 'Coil-spring rear suspension'],
      },
      {
        name: 'Big Horn / Lone Star',
        description: 'The core family truck: chrome bumpers, 8.4-inch or 12-inch touchscreen, leather-wrapped steering wheel, and fog lamps.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-3-6-pentastar', 'ram-5-7-hemi', 'ram-3-0-hurricane'],
        availableDrivetrains: ['ram-4x4-bw', 'ram-2wd'],
        startingMsrp: 41800,
        keyFeatures: ['Uconnect 8.4-inch or 12-inch touchscreen', '18-inch aluminum wheels', 'Fog lamps and chrome accents'],
      },
      {
        name: 'Laramie',
        description: 'Luxury mainstream: heated and ventilated leather 10-way power front seats, 9-speaker Alpine audio, and dual-zone climate.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi', 'ram-3-0-hurricane'],
        availableDrivetrains: ['ram-4x4-bw', 'ram-2wd'],
        startingMsrp: 50800,
        keyFeatures: ['Heated & ventilated leather front seats', '9-speaker Alpine premium audio system with subwoofer', 'Standard 4WD Auto mode'],
      },
      {
        name: 'Rebel',
        description: 'Factory off-road warrior: 1-inch suspension lift, Bilstein monotube dampers, 33-inch Goodyear Wrangler DuraTrac tires, electronic locking rear diff.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi', 'ram-3-0-hurricane'],
        availableDrivetrains: ['ram-4x4-bw'],
        startingMsrp: 53500,
        keyFeatures: ['Bilstein performance off-road shocks', 'Electronic locking rear differential', '33-inch Goodyear DuraTrac all-terrain tires'],
      },
      {
        name: 'Limited',
        description: 'Pinnacle luxury: 100% full leather interior, 19-speaker Harman Kardon sound, standard four-corner air suspension.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi', 'ram-3-0-hurricane'],
        availableDrivetrains: ['ram-4x4-bw'],
        startingMsrp: 62500,
        keyFeatures: ['Active-Level four-corner air suspension', '19-speaker 900W Harman Kardon audio system', '12-inch digital driver display'],
      },
    ],
    reliabilityRecommendation: 'The 5.7L HEMI with ZF 8-speed automatic is a well-understood, reliable workhorse when serviced every 5,000 miles. Watch out for exhaust manifold tick on high mileage. For coil spring ride comfort, the RAM 1500 leads the half-ton segment.',
  },

  // Honda Civic
  'honda-civic': {
    year: 2022,
    make: 'Honda',
    model: 'Civic',
    engines: [
      {
        id: 'civic-2-0-na',
        name: '2.0L Naturally Aspirated Inline-4 (K20C2)',
        displacement: '2.0L NA',
        configuration: 'Naturally Aspirated DOHC 16-Valve 4-Cylinder with i-VTEC',
        aspiration: 'Naturally Aspirated',
        horsepower: 158,
        torqueLbFt: 138,
        fuelType: 'Gasoline',
        efficiency: { city: 31, highway: 40, combined: 35, unit: 'MPG' },
        keyReliabilityNotes: 'Port fuel injection, durable timing chain, zero turbo heat fatigue, and zero oil dilution risk. The most reliable powertrain in the Civic range.',
        pros: [
          'Simple port and direct injection architecture with zero intake carbon fouling',
          'No turbocharger or intercooler heat fatigue',
          'Proven K-series engine block with multi-hundred-thousand-mile track record',
        ],
        watchouts: [
          'Modest highway passing power (158 hp) compared to the 1.5L Turbo',
          'Requires steady throttle input on steep mountain climbs',
        ],
        bestFor: 'Commuters who prioritize rock-solid reliability, low repair bills, and plan to keep the car 10+ years.',
      },
      {
        id: 'civic-1-5-turbo',
        name: '1.5L VTEC Turbocharged Inline-4 (L15CA)',
        displacement: '1.5L Turbo',
        configuration: 'Turbocharged DOHC 16-Valve 4-Cylinder with Direct Injection',
        aspiration: 'Turbocharged',
        horsepower: 180,
        torqueLbFt: 177,
        fuelType: 'Gasoline',
        efficiency: { city: 33, highway: 42, combined: 36, unit: 'MPG' },
        keyReliabilityNotes: 'Punchy low-end torque with 42 MPG highway capability. Watch for cold-weather short trip oil dilution and head gasket seals.',
        pros: [
          'Effortless highway merging with 177 lb-ft torque peaking at just 1,700 RPM',
          'Outstanding 42 MPG highway fuel efficiency',
          'Sporty throttle response and smooth CVT integration',
        ],
        watchouts: [
          'Cold weather fuel dilution into engine oil on repeated short trips under 15 minutes',
          'Head gasket breach between cylinders 2 and 3 reported on higher-mileage tuned cars',
          'Requires strict 5,000-mile full synthetic oil changes regardless of dash Maintenance Minder',
        ],
        bestFor: 'Enthusiastic daily drivers who want swift highway acceleration and 40+ MPG fuel efficiency.',
      },
      {
        id: 'civic-2-0-hybrid',
        name: '2.0L Dual-Motor Hybrid (e:HEV 200 hp / 232 lb-ft)',
        displacement: '2.0L Hybrid',
        configuration: 'Atkinson-Cycle 2.0L 4-Cylinder + Dual Electric Propulsion Motors',
        aspiration: 'Hybrid',
        horsepower: 200,
        torqueLbFt: 232,
        fuelType: 'Hybrid',
        efficiency: { city: 50, highway: 47, combined: 49, unit: 'MPG' },
        keyReliabilityNotes: 'Electric drive direct to front wheels with lock-up highway clutch. Zero traditional transmission gears or belts.',
        pros: ['50 MPG city fuel economy', 'Instant 232 lb-ft electric torque out of corners', 'Extremely smooth linear acceleration'],
        watchouts: ['Higher upfront purchase price', '12V auxiliary battery discharge if parked for extended weeks'],
        bestFor: 'High-mileage commuters wanting 50 MPG without sacrificing acceleration.',
      },
    ],
    drivetrains: [
      {
        id: 'civic-fwd',
        type: 'FWD',
        name: 'FWD (Front-Wheel Drive / 2x4)',
        description: 'Front-wheel drive layout with electronic traction control and Agile Handling Assist brake vectoring.',
        keyReliabilityNotes: 'Simple layout with zero transfer case or rear differential fluids to maintain.',
      },
    ],
    trims: [
      {
        name: 'LX',
        description: 'Base model with standard 2.0L naturally aspirated engine, 7-inch touchscreen, and Honda Sensing suite.',
        engineId: 'civic-2-0-na',
        availableEngineIds: ['civic-2-0-na'],
        availableDrivetrains: ['civic-fwd'],
        startingMsrp: 22550,
        keyFeatures: ['Honda Sensing driver assistance', 'LED headlights', '7-inch color touchscreen'],
      },
      {
        name: 'Sport',
        description: 'Sporty exterior styling with gloss black 18-inch alloy wheels, paddle shifters, sport pedals, and leather-wrapped wheel.',
        engineId: 'civic-2-0-na',
        availableEngineIds: ['civic-2-0-na'],
        availableDrivetrains: ['civic-fwd'],
        startingMsrp: 23950,
        keyFeatures: ['18-inch gloss-black wheels', 'Sport pedals & paddle shifters', 'Smart Entry with Walk Away Auto Lock'],
      },
      {
        name: 'EX',
        description: 'Upgrades to the 180 hp 1.5L Turbo engine, one-touch power moonroof, heated front seats, and dual-zone climate control.',
        engineId: 'civic-1-5-turbo',
        availableEngineIds: ['civic-1-5-turbo'],
        availableDrivetrains: ['civic-fwd'],
        startingMsrp: 25550,
        keyFeatures: ['1.5L Turbocharged 180 hp engine', 'One-touch power moonroof', 'Blind Spot Information System (BSI)'],
      },
      {
        name: 'Touring',
        description: 'Top-tier luxury: leather-trimmed seats, 9-inch touchscreen with wireless CarPlay, Bose 12-speaker audio, and wireless phone charging.',
        engineId: 'civic-1-5-turbo',
        availableEngineIds: ['civic-1-5-turbo', 'civic-2-0-hybrid'],
        availableDrivetrains: ['civic-fwd'],
        startingMsrp: 29150,
        keyFeatures: ['Bose premium 12-speaker audio system', '9-inch HD touchscreen with wireless smartphone projection', 'Leather upholstery & power front seats'],
      },
      {
        name: 'Si',
        description: 'Manual-only performance sedan: 200 hp 1.5L Turbo, helical limited-slip differential, rev-matching, and sport-tuned suspension.',
        engineId: 'civic-1-5-turbo',
        availableEngineIds: ['civic-1-5-turbo'],
        availableDrivetrains: ['civic-fwd'],
        startingMsrp: 28315,
        keyFeatures: ['Helical limited-slip differential (LSD)', 'Short-throw 6-speed manual with rev-matching', 'Sport bucket seats with red embroidery'],
      },
    ],
    reliabilityRecommendation: 'The 2.0L Naturally Aspirated engine on the LX and Sport trims offers the lowest long-term mechanical failure risk. If you choose the EX or Touring for the 1.5L Turbo, perform oil changes every 5,000 miles to prevent fuel dilution wear.',
  },

  // Toyota RAV4
  'toyota-rav4': {
    year: 2021,
    make: 'Toyota',
    model: 'RAV4',
    engines: [
      {
        id: 'rav4-2-5-gas',
        name: '2.5L Dynamic Force Inline-4 (A25A-FKS)',
        displacement: '2.5L Gas',
        configuration: 'Naturally Aspirated 4-Cylinder with D-4S Dual Injection',
        aspiration: 'Naturally Aspirated',
        horsepower: 203,
        torqueLbFt: 184,
        fuelType: 'Gasoline',
        efficiency: { city: 28, highway: 35, combined: 30, unit: 'MPG' },
        keyReliabilityNotes: 'Dual injection (port and direct) prevents intake carbon. Direct-Shift 8-speed automatic with physical launch gear.',
        pros: [
          'High thermal efficiency (40%) naturally aspirated 4-cylinder',
          'Traditional 8-speed torque converter automatic with physical gears (no CVT)',
          'Low routine service costs and widespread replacement part availability',
        ],
        watchouts: [
          'Coolant bypass valve failure (error code P2681) triggering cluster warnings',
          'Engine can sound coarse and loud under full throttle highway acceleration',
        ],
        bestFor: 'Drivers who prefer traditional gasoline engines without hybrid battery packs or CVTs.',
      },
      {
        id: 'rav4-2-5-hybrid',
        name: '2.5L Hybrid Synergy Drive (Dual Motor Electronic eCVT)',
        displacement: '2.5L Hybrid',
        configuration: 'Atkinson-Cycle 4-Cylinder + Dual Electric Motor Generators',
        aspiration: 'Hybrid',
        horsepower: 219,
        torqueLbFt: 163,
        fuelType: 'Hybrid',
        efficiency: { city: 41, highway: 38, combined: 40, unit: 'MPG' },
        keyReliabilityNotes: 'Planetary gear eCVT has no belts or clutches to wear out. The benchmark for crossover fuel economy and longevity.',
        pros: [
          'Spectacular 40 MPG combined fuel economy in real-world driving',
          'Planetary power-split device has zero belts, cones, or friction clutches — virtually indestructible transmission',
          'Regenerative braking dramatically extends brake pad lifespan (often 90k+ miles on factory pads)',
        ],
        watchouts: [
          'Rear high-voltage motor cable harness corrosion ("Cablegate" / Customer Support 22TE09) in road salt states',
          '12V auxiliary lead-acid battery discharge bug on vehicles with outdated DCM telematics firmware',
        ],
        bestFor: 'Family commuting, rideshare, and long-term ownership where fuel savings and powertrain durability are top priorities.',
      },
      {
        id: 'rav4-2-5-prime',
        name: '2.5L Plug-in Hybrid Prime PHEV (302 hp Triple Motor)',
        displacement: '2.5L PHEV',
        configuration: 'Atkinson-Cycle 4-Cylinder + Triple Electric Motors & 18.1 kWh Battery',
        aspiration: 'Plug-in Hybrid',
        horsepower: 302,
        torqueLbFt: 288,
        fuelType: 'Plug-in Hybrid',
        efficiency: { city: 40, highway: 36, combined: 94, unit: 'MPGe' },
        keyReliabilityNotes: '42 miles of pure electric driving range. Blistering 0-60 in 5.5 seconds.',
        pros: [
          '42 miles of all-electric range covers most daily commutes without burning a drop of gas',
          '302 horsepower makes it the second-quickest accelerating Toyota behind the GR Supra',
          'Eligible for clean vehicle rebates and HOV lane access in many states',
        ],
        watchouts: [
          'Substantially higher upfront purchase price and dealer markups',
          'Heavier battery adds ~600 lbs of curb weight affecting suspension bushing wear',
        ],
        bestFor: 'Commuters with home charging capability who want EV efficiency on weekdays and gas hybrid freedom on road trips.',
      },
    ],
    drivetrains: [
      {
        id: 'rav4-awd-e',
        type: 'AWD',
        name: 'Electronic AWD (e-AWD with Dedicated Rear Electric Motor)',
        description: 'Standard on all Hybrid and Prime trims. Rear wheels are driven independently by a 53 hp rear electric motor with no mechanical driveshaft.',
        keyReliabilityNotes: 'Inspect high-voltage orange cable connection at the rear differential for corrosion in road salt climates.',
      },
      {
        id: 'rav4-awd-mech',
        type: 'AWD',
        name: 'Mechanical AWD (Dynamic Torque Vectoring AWD)',
        description: 'Traditional mechanical driveshaft with rear driveline disconnect on Adventure and TRD Off-Road trims.',
        keyReliabilityNotes: 'Requires transfer case and rear differential gear oil changes every 30,000–60,000 miles.',
      },
      {
        id: 'rav4-fwd',
        type: 'FWD',
        name: 'FWD (Front-Wheel Drive / 2x4)',
        description: 'Standard front-wheel drive on gasoline LE and XLE trims. Lower weight and simpler mechanical undercarriage.',
        keyReliabilityNotes: 'Zero rear differential or transfer case fluids to service.',
      },
    ],
    trims: [
      {
        name: 'LE Gas',
        description: 'Base model with 2.5L gas engine, 7-inch touchscreen, and Toyota Safety Sense 2.0.',
        engineId: 'rav4-2-5-gas',
        availableEngineIds: ['rav4-2-5-gas'],
        availableDrivetrains: ['rav4-fwd', 'rav4-awd-mech'],
        startingMsrp: 26350,
        keyFeatures: ['Toyota Safety Sense 2.0 with pedestrian detection', 'LED headlights and taillights', 'Apple CarPlay & Android Auto'],
      },
      {
        name: 'XLE Gas',
        description: 'Popular mid-trim: 17-inch alloy wheels, dual-zone climate control, smart key entry, and blind-spot monitoring.',
        engineId: 'rav4-2-5-gas',
        availableEngineIds: ['rav4-2-5-gas'],
        availableDrivetrains: ['rav4-fwd', 'rav4-awd-mech'],
        startingMsrp: 27645,
        keyFeatures: ['Blind Spot Monitor with Rear Cross-Traffic Alert', 'Dual-zone automatic climate control', '8-way power adjustable driver seat'],
      },
      {
        name: 'LE Hybrid',
        description: 'Standard hybrid efficiency with standard electronic all-wheel drive at an accessible price point.',
        engineId: 'rav4-2-5-hybrid',
        availableEngineIds: ['rav4-2-5-hybrid'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 28800,
        keyFeatures: ['40 MPG combined hybrid system', 'Standard electronic e-AWD', 'Dual-zone automatic climate control'],
      },
      {
        name: 'XLE Hybrid',
        description: 'The sweet spot for hybrid buyers: combines 40 MPG with alloy wheels, blind spot monitoring, and projector LEDs.',
        engineId: 'rav4-2-5-hybrid',
        availableEngineIds: ['rav4-2-5-hybrid'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 30095,
        keyFeatures: ['Electronic on-demand AWD', 'Smart Key system on front doors and liftgate', 'Projector-style LED headlights with chrome bezels'],
      },
      {
        name: 'Adventure / TRD Off-Road',
        description: 'Rugged styling, 8.6 inches ground clearance, dynamic torque vectoring AWD, and multi-terrain select dial.',
        engineId: 'rav4-2-5-gas',
        availableEngineIds: ['rav4-2-5-gas'],
        availableDrivetrains: ['rav4-awd-mech'],
        startingMsrp: 33455,
        keyFeatures: ['Dynamic Torque Vectoring AWD with rear driveline disconnect', '3,500 lbs towing capacity', 'Falken Wildpeak all-terrain tires (TRD)'],
      },
      {
        name: 'XSE Hybrid',
        description: 'Sport-tuned suspension, two-tone black roof exterior styling, 18-inch black alloy wheels, and blue accent stitching.',
        engineId: 'rav4-2-5-hybrid',
        availableEngineIds: ['rav4-2-5-hybrid'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 34750,
        keyFeatures: ['Sport-tuned suspension calibration', 'Two-tone exterior with Midnight Black roof', 'SofTex synthetic leather upholstery'],
      },
      {
        name: 'Limited Hybrid',
        description: 'Flagship luxury: 18-inch chrome-finished wheels, ventilated front seats, premium JBL 11-speaker audio, and digital rearview mirror.',
        engineId: 'rav4-2-5-hybrid',
        availableEngineIds: ['rav4-2-5-hybrid'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 37030,
        keyFeatures: ['Heated & ventilated front seats', 'JBL 11-speaker premium audio system', 'Digital display rearview mirror with HomeLink'],
      },
      {
        name: 'Prime SE / XSE',
        description: '302 hp Plug-in Hybrid with 42 miles EV range, standard fast charging, and paddle shifters.',
        engineId: 'rav4-2-5-prime',
        availableEngineIds: ['rav4-2-5-prime'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 38350,
        keyFeatures: ['42 miles pure EV range', '302 hp combined output (0-60 in 5.5s)', 'Paddle shifters with regenerative brake force control'],
      },
    ],
    reliabilityRecommendation: 'The 2.5L Hybrid paired with electronic e-AWD is widely regarded as one of the most reliable and economical vehicles on the market today. Ensure you inspect the rear high-voltage connector for salt corrosion if purchasing in the Midwest or Northeast.',
  },
};

/**
 * Normalizes input make and model into a canonical lookup key.
 * Handles variations like 'f150', 'f-150', 'f 150', 'chevy silverado', 'silverado 1500', etc.
 */
export function normalizeCarKey(make: string, model: string): string {
  const cleanMake = make.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const cleanModel = model.toLowerCase().trim().replace(/[^a-z0-9]/g, '');

  // Ford truck variations
  if ((cleanMake.includes('ford') || cleanMake === '') && (cleanModel.includes('f150') || cleanModel.includes('f-150'))) {
    return 'ford-f-150';
  }

  // Chevy Silverado variations
  if ((cleanMake.includes('chev') || cleanMake.includes('gmc') || cleanMake === '') && cleanModel.includes('silverado')) {
    return 'chevrolet-silverado';
  }

  // RAM 1500 variations
  if ((cleanMake.includes('ram') || cleanMake.includes('dodge')) && (cleanModel.includes('1500') || cleanModel.includes('ram'))) {
    return 'ram-1500';
  }

  // Honda Civic variations
  if (cleanMake.includes('honda') && cleanModel.includes('civic')) {
    return 'honda-civic';
  }

  // Toyota RAV4 variations
  if (cleanMake.includes('toyota') && (cleanModel.includes('rav4') || cleanModel.includes('rav'))) {
    return 'toyota-rav4';
  }

  return `${cleanMake}-${cleanModel}`;
}

/**
 * Fetch engine and drivetrain options:
 * Checks pre-indexed database first, falls back to server API with Gemini AI,
 * and finally uses smart heuristic breakout so engines are NEVER clumped together.
 */
export async function lookupVehicleOptions(
  year: number,
  make: string,
  model: string
): Promise<CarOptionsLookupResult> {
  const key = normalizeCarKey(make, model);

  // Check known pre-indexed vehicles for instant zero-latency response
  if (POPULAR_VEHICLE_OPTIONS[key]) {
    const cached = POPULAR_VEHICLE_OPTIONS[key];
    return {
      ...cached,
      year: year || cached.year,
    };
  }

  // Attempt live lookup via Express server Gemini endpoint
  try {
    const response = await fetch('/api/car-options', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ year, make, model }),
    });

    if (response.ok) {
      const data: CarOptionsLookupResult = await response.json();
      if (data.engines && data.engines.length > 0 && data.trims && data.trims.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('API options lookup failed, using heuristic fallback:', err);
  }

  // Heuristic breakout for un-indexed models:
  // Distinct engine breakout (NEVER clumped into 2.7/3.5/5.0) and populated trims
  const cleanM = model.toLowerCase();
  const isTruck = /truck|f-?150|silverado|sierra|ram|tundra|titan|tacoma|colorado|ranger|frontier/i.test(cleanM);
  const isHybridOrEv = /hybrid|phev|prime|electric|ev|lightning|ioniq|mach-e|model 3|model y|leaf/i.test(cleanM);
  const isSuv = /suv|rav4|cr-v|cx-5|outback|forester|explorer|tahoe|suburban|cherokee|grand cherokee|highlander|pilot|telluride|palisade/i.test(cleanM);

  if (isTruck) {
    return {
      year,
      make,
      model,
      engines: [
        {
          id: 'truck-2-7-turbo',
          name: '2.7L Turbocharged High-Torque Engine',
          displacement: '2.7L Turbo',
          configuration: 'Turbocharged Inline-4 / Compact V6',
          aspiration: 'Turbocharged',
          horsepower: 315,
          torqueLbFt: 400,
          fuelType: 'Gasoline',
          towingCapacityLbs: 9500,
          efficiency: { city: 19, highway: 24, combined: 21, unit: 'MPG' },
          keyReliabilityNotes: 'Compact displacement with fast turbo boost. Outstanding fuel economy when unladen; check turbo oil line seals.',
          pros: ['Instant 400 lb-ft torque at low RPM', 'Lowest fuel consumption in truck segment'],
          watchouts: ['Turbo heat stress under continuous heavy towing', 'Requires 5,000-mile synthetic oil changes'],
          bestFor: 'Daily driving, highway commuting, and trailer towing under 8,500 lbs.',
        },
        {
          id: 'truck-3-5-twinturbo',
          name: '3.5L Twin-Turbocharged V6 Workhorse',
          displacement: '3.5L Twin-Turbo',
          configuration: 'Twin-Turbocharged 60° DOHC V6',
          aspiration: 'Twin-Turbo',
          horsepower: 400,
          torqueLbFt: 500,
          fuelType: 'Gasoline',
          towingCapacityLbs: 13500,
          efficiency: { city: 18, highway: 23, combined: 20, unit: 'MPG' },
          keyReliabilityNotes: 'Class-leading maximum towing torque. Monitor cold-start cam phasers and timing chain tensioners.',
          pros: ['Massive 500 lb-ft torque plateau for heavy trailer pulling', 'Exceptional mountain grade acceleration'],
          watchouts: ['Cam phaser cold rattle on higher mileage', 'Turbo wastegate linkage play over 90k miles'],
          bestFor: 'Heavy duty towing (campers, boats, equipment trailers over 9,000 lbs).',
        },
        {
          id: 'truck-5-0-v8',
          name: '5.0L Naturally Aspirated American V8',
          displacement: '5.0L V8',
          configuration: 'Naturally Aspirated 90° DOHC/OHV V8',
          aspiration: 'Naturally Aspirated',
          horsepower: 400,
          torqueLbFt: 410,
          fuelType: 'Gasoline',
          towingCapacityLbs: 12500,
          efficiency: { city: 16, highway: 22, combined: 18, unit: 'MPG' },
          keyReliabilityNotes: 'Classic naturally aspirated V8 simplicity. Zero turbochargers, intercoolers, or boost plumbing complexity.',
          pros: ['Linear throttle response and authentic V8 exhaust note', 'Simple underhood maintenance and long-term durability'],
          watchouts: ['Lower highway fuel economy', 'Monitor oil consumption level every 3,000 miles'],
          bestFor: 'Traditional truck buyers, snow plow prep, and million-mile simplicity.',
        },
      ],
      drivetrains: [
        {
          id: 'truck-4x4-part',
          type: '4WD / 4x4',
          name: '4x4 / 4WD (Part-Time Four-Wheel Drive with Low Range)',
          description: 'True part-time 4WD transfer case with 4-High and 4-Low gear reduction for off-road and deep snow.',
          keyReliabilityNotes: 'Check transfer case fluid and front vacuum axle actuators every 45k miles.',
        },
        {
          id: 'truck-4x4-auto',
          type: '4WD / 4x4',
          name: '4x4 / 4WD with Automatic 4A (Full-Time Pavement Safe)',
          description: 'Clutch-based on-demand 4WD that can remain engaged on dry and wet pavement in rainy/wintry conditions.',
          keyReliabilityNotes: 'Change transfer case fluid every 45k miles to maintain clutch pack longevity.',
        },
        {
          id: 'truck-2wd',
          type: '2WD / 4x2',
          name: '2WD / 4x2 (Rear-Wheel Drive)',
          description: 'Two-wheel drive with solid rear axle. Highest towing payload capacity and lowest mechanical complexity.',
          keyReliabilityNotes: 'Zero front transfer case or differential components to service.',
        },
      ],
      trims: [
        {
          name: 'Work Truck (WT / XL)',
          description: 'Fleet and utility truck with durable vinyl or cloth, basic touchscreen, and trailer hitch.',
          engineId: 'truck-2-7-turbo',
          availableDrivetrains: ['truck-4x4-part', 'truck-2wd'],
          startingMsrp: 35000,
          keyFeatures: ['Heavy-duty steel wheels', 'Class IV trailer hitch', 'Basic driver assistance'],
        },
        {
          name: 'Mid-Grade Volume (XLT / LT / Big Horn)',
          description: 'The core volume model: alloy wheels, 12-inch touchscreen, heated front seats, and appearance package.',
          engineId: 'truck-2-7-turbo',
          availableDrivetrains: ['truck-4x4-part', 'truck-2wd'],
          startingMsrp: 44000,
          keyFeatures: ['12-inch infotainment screen', 'Heated seats and steering wheel', 'Blind spot monitoring with trailer coverage'],
        },
        {
          name: 'Luxury Trim (Lariat / LTZ / Laramie)',
          description: 'Full luxury: leather heated/ventilated seating, premium sound system, automatic 4WD, and memory seating.',
          engineId: 'truck-3-5-twinturbo',
          availableDrivetrains: ['truck-4x4-auto', 'truck-2wd'],
          startingMsrp: 54000,
          keyFeatures: ['Heated & ventilated leather seats', 'Premium surround sound', 'Automatic 4WD on-demand transfer case'],
        },
        {
          name: 'Flagship Luxury / Off-Road (Platinum / High Country / Rebel)',
          description: 'Pinnacle luxury or off-road specification with all-terrain suspension, 360-degree cameras, and adaptive cruise.',
          engineId: 'truck-5-0-v8',
          availableDrivetrains: ['truck-4x4-auto'],
          startingMsrp: 65000,
          keyFeatures: ['Off-road suspension with monotube shocks', 'Massaging or premium leather seats', 'Head-up display & 360° cameras'],
        },
      ],
      reliabilityRecommendation: 'For daily driving and fuel economy, choose the 2.7L Turbo. For heavy trailer towing, the 3.5L Twin-Turbo provides maximum pulling power. For long-term simplicity without turbo boost plumbing, choose the 5.0L V8.',
    };
  }

  if (isHybridOrEv) {
    return {
      year,
      make,
      model,
      engines: [
        {
          id: 'ev-single-motor',
          name: 'Single Motor Electric / Hybrid Powertrain',
          displacement: 'Single Motor (Standard Range)',
          configuration: 'Permanent Magnet Synchronous Electric Motor',
          aspiration: 'Electric',
          horsepower: 225,
          torqueLbFt: 258,
          fuelType: 'Electric',
          efficiency: { city: 110, highway: 90, combined: 100, unit: 'mi/kWh' },
          keyReliabilityNotes: 'Extremely simple single electric drive unit with no spark plugs, engine oil, or exhaust system.',
          pros: ['Instant electric torque from 0 RPM', 'Virtually zero routine powertrain maintenance'],
          watchouts: ['Cold weather range reduction (~20-25%)', '12V auxiliary battery discharge bugs'],
          bestFor: 'Daily city commuting and drivers prioritizing lowest running cost.',
        },
        {
          id: 'ev-dual-motor',
          name: 'Dual Motor Performance AWD Powertrain',
          displacement: 'Dual Motor (Long Range / AWD)',
          configuration: 'Front and Rear Electric Motors with Electronic Torque Split',
          aspiration: 'Electric',
          horsepower: 320,
          torqueLbFt: 446,
          fuelType: 'Electric',
          efficiency: { city: 100, highway: 85, combined: 92, unit: 'mi/kWh' },
          keyReliabilityNotes: 'Instant dual-axle all-wheel drive traction with sub-5-second 0-60 acceleration.',
          pros: ['320+ horsepower and instant all-wheel launch', 'Superb winter traction without mechanical driveshafts'],
          watchouts: ['Higher tire wear rate due to immediate high electric torque', 'High-voltage inverter coolant check at 40k miles'],
          bestFor: 'Inclement weather driving and performance enthusiasts.',
        },
      ],
      drivetrains: [
        {
          id: 'ev-rwd',
          type: 'RWD',
          name: '2WD / RWD (Rear-Wheel Drive)',
          description: 'Single motor powering the rear axle. Maximum efficiency and longest driving range.',
          keyReliabilityNotes: 'Simple single drive unit with no front axle components.',
        },
        {
          id: 'ev-awd',
          type: 'AWD',
          name: 'AWD (Dual-Motor All-Wheel Drive)',
          description: 'Dedicated front and rear electric motors with computer-managed instant torque vectoring.',
          keyReliabilityNotes: 'Seamless wet/snow traction; maintain balanced tire tread across both axles.',
        },
      ],
      trims: [
        {
          name: 'Standard / SE',
          description: 'Essential trim with digital cockpit, fast DC charging, and full active safety suite.',
          engineId: 'ev-single-motor',
          availableDrivetrains: ['ev-rwd', 'ev-awd'],
          startingMsrp: 41000,
          keyFeatures: ['DC fast-charging capability', 'Digital instrument cluster & touchscreen', 'Lane keeping assist'],
        },
        {
          name: 'Premium / SEL',
          description: 'Added comfort: heated synthetic leather seats, wireless phone charger, and power tailgate.',
          engineId: 'ev-dual-motor',
          availableDrivetrains: ['ev-rwd', 'ev-awd'],
          startingMsrp: 47000,
          keyFeatures: ['Wireless smartphone charging', 'Hands-free smart power liftgate', 'Heated front seats & steering wheel'],
        },
        {
          name: 'Limited / Performance',
          description: 'Flagship trim: panoramic glass roof, head-up display, ventilated seats, and premium surround sound.',
          engineId: 'ev-dual-motor',
          availableDrivetrains: ['ev-awd'],
          startingMsrp: 54000,
          keyFeatures: ['Vision panoramic glass roof', 'Head-Up Display with Augmented Reality', 'Ventilated leather seating'],
        },
      ],
      reliabilityRecommendation: 'Electric powertrains offer substantially fewer mechanical failure points than internal combustion engines. Inspect battery health degradation state and ensure all high-voltage software updates are current.',
    };
  }

  // Standard SUV or Sedan fallback
  return {
    year,
    make,
    model,
    engines: [
      {
        id: 'engine-na-base',
        name: 'Naturally Aspirated 4-Cylinder Engine',
        displacement: isSuv ? '2.5L NA' : '2.0L NA',
        configuration: 'Naturally Aspirated DOHC 16-Valve 4-Cylinder',
        aspiration: 'Naturally Aspirated',
        horsepower: 185,
        torqueLbFt: 180,
        fuelType: 'Gasoline',
        efficiency: { city: 28, highway: 36, combined: 31, unit: 'MPG' },
        keyReliabilityNotes: 'Simple mechanical architecture with low long-term maintenance costs and zero turbo heat fatigue.',
        pros: ['Inexpensive routine service', 'Proven long-term longevity without turbo heat fatigue'],
        watchouts: ['Modest highway passing power under heavy passenger load'],
        bestFor: 'Long-term owners prioritizing dependability and low repair costs.',
      },
      {
        id: 'engine-turbo-opt',
        name: 'Turbocharged Performance 4-Cylinder',
        displacement: isSuv ? '2.0L Turbo' : '1.5L Turbo',
        configuration: 'Turbocharged DOHC 16-Valve 4-Cylinder with Direct Injection',
        aspiration: 'Turbocharged',
        horsepower: 250,
        torqueLbFt: 275,
        fuelType: 'Gasoline',
        efficiency: { city: 24, highway: 32, combined: 27, unit: 'MPG' },
        keyReliabilityNotes: 'Spirited acceleration; requires strict 5,000-mile synthetic oil intervals to protect the turbo bearings.',
        pros: ['Strong mid-range torque for merging and highway passing', 'Fun and engaging driving dynamics'],
        watchouts: ['Higher thermal stress on oil and cylinder head gaskets', 'Requires strict 5,000-mile oil changes'],
        bestFor: 'Drivers seeking spirited acceleration without stepping up to a V6.',
      },
    ],
    drivetrains: isSuv
      ? [
          {
            id: 'dt-awd',
            type: 'AWD',
            name: 'AWD (All-Wheel Drive / 4x4 Crossover Mode)',
            description: 'Active torque split to all four wheels for enhanced inclement weather and cornering traction.',
            keyReliabilityNotes: 'Check rear differential fluid; maintain balanced tire tread depth across all 4 wheels.',
          },
          {
            id: 'dt-fwd',
            type: 'FWD',
            name: 'FWD (Front-Wheel Drive / 2x4)',
            description: 'Standard front-wheel drive. Lighter weight, best fuel efficiency, and lowest long-term maintenance.',
            keyReliabilityNotes: 'Simplest mechanical layout with no rear driveshaft or differential.',
          },
        ]
      : [
          {
            id: 'dt-fwd',
            type: 'FWD',
            name: 'FWD (Front-Wheel Drive / 2x4)',
            description: 'Standard front-wheel drive. Lighter weight, best fuel efficiency, and lowest long-term maintenance.',
            keyReliabilityNotes: 'Simplest mechanical layout with no rear driveshaft or differential.',
          },
          {
            id: 'dt-awd',
            type: 'AWD',
            name: 'AWD (All-Wheel Drive)',
            description: 'Active all-wheel drive for rain, ice, and highway confidence.',
            keyReliabilityNotes: 'Check center differential coupling fluid every 45k miles.',
          },
        ],
    trims: [
      {
        name: 'Base / Standard',
        description: 'Entry-level model with standard features, cloth seating, and essential driver aids.',
        engineId: 'engine-na-base',
        availableDrivetrains: isSuv ? ['dt-awd', 'dt-fwd'] : ['dt-fwd'],
        startingMsrp: isSuv ? 28000 : 23000,
        keyFeatures: ['Standard touchscreen', 'Safety assist suite', 'LED headlights'],
      },
      {
        name: 'Mid-Grade Premium',
        description: 'Popular mid-tier trim with alloy wheels, heated front seats, dual-zone climate, and enhanced audio.',
        engineId: 'engine-na-base',
        availableDrivetrains: isSuv ? ['dt-awd', 'dt-fwd'] : ['dt-fwd', 'dt-awd'],
        startingMsrp: isSuv ? 33000 : 26500,
        keyFeatures: ['Alloy wheels', 'Heated front seats', 'Blind spot monitoring with rear cross-traffic alert'],
      },
      {
        name: 'Top-Tier Luxury / Sport',
        description: 'Full luxury specification with leather upholstery, premium sound, moonroof, and high-output engine.',
        engineId: 'engine-turbo-opt',
        availableDrivetrains: isSuv ? ['dt-awd'] : ['dt-fwd', 'dt-awd'],
        startingMsrp: isSuv ? 39000 : 31000,
        keyFeatures: ['Leather upholstery', 'Premium surround audio', 'Panoramic moonroof'],
      },
    ],
    reliabilityRecommendation: 'Opt for the naturally aspirated engine paired with 2WD/FWD for the most predictable and lowest-cost ownership, or choose AWD/4x4 if winter capability is a non-negotiable priority.',
  };
}
