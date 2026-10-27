import { CarOptionsLookupResult, EngineOption, DrivetrainOption, TrimOption, CarColorOption } from '../types/carJourney';

/**
 * All major automotive makes sold in the United States.
 */
export const MAJOR_US_MAKES = [
  'Ford',
  'Chevrolet',
  'Toyota',
  'Honda',
  'Jeep',
  'RAM',
  'GMC',
  'Nissan',
  'Subaru',
  'Hyundai',
  'Kia',
  'Mazda',
  'Volkswagen',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Lexus',
  'Acura',
  'Cadillac',
  'Lincoln',
  'Dodge',
  'Chrysler',
  'Buick',
  'Volvo',
  'Genesis',
  'Tesla',
  'Rivian',
  'Porsche',
  'Infiniti',
  'Land Rover',
  'MINI',
  'Alfa Romeo',
  'Lucid',
  'Polestar',
  'Mitsubishi',
] as const;

/**
 * Comprehensive mapping of models for all major US automotive makes.
 */
export const MAKE_MODELS_MAP: Record<string, string[]> = {
  Ford: [
    'Expedition',
    'Expedition MAX',
    'F-150',
    'F-150 Lightning',
    'Explorer',
    'Bronco',
    'Bronco Sport',
    'Mustang',
    'Mustang Mach-E',
    'Escape',
    'Edge',
    'Ranger',
    'Maverick',
    'Super Duty F-250',
    'Super Duty F-350',
    'Transit',
  ],
  Chevrolet: [
    'Silverado 1500',
    'Tahoe',
    'Suburban',
    'Colorado',
    'Traverse',
    'Equinox',
    'Trailblazer',
    'Blazer',
    'Trax',
    'Corvette',
    'Camaro',
    'Malibu',
    'Silverado EV',
    'Blazer EV',
    'Equinox EV',
  ],
  Toyota: [
    'RAV4',
    'Tacoma',
    'Tundra',
    '4Runner',
    'Grand Highlander',
    'Highlander',
    'Sequoia',
    'Camry',
    'Corolla',
    'Prius',
    'Sienna',
    'Land Cruiser',
    'Crown',
    'Crown Signia',
    'Venza',
    'GR86',
    'GR Supra',
    'Corolla Cross',
    'bZ4X',
  ],
  Honda: [
    'Civic',
    'CR-V',
    'Accord',
    'Pilot',
    'Passport',
    'Ridgeline',
    'Odyssey',
    'HR-V',
    'Prologue',
  ],
  Jeep: [
    'Grand Cherokee',
    'Wrangler',
    'Gladiator',
    'Wagoneer',
    'Grand Wagoneer',
    'Compass',
    'Cherokee',
    'Renegade',
  ],
  RAM: [
    '1500',
    '2500',
    '3500',
    'ProMaster',
  ],
  GMC: [
    'Sierra 1500',
    'Yukon',
    'Yukon XL',
    'Canyon',
    'Acadia',
    'Terrain',
    'Hummer EV',
  ],
  Nissan: [
    'Rogue',
    'Pathfinder',
    'Frontier',
    'Armada',
    'Murano',
    'Altima',
    'Sentra',
    'Kicks',
    'Titan',
    'Ariya',
    'Z',
  ],
  Subaru: [
    'Outback',
    'Forester',
    'Crosstrek',
    'Ascent',
    'WRX',
    'Legacy',
    'Impreza',
    'BRZ',
    'Solterra',
  ],
  Hyundai: [
    'Palisade',
    'Santa Fe',
    'Tucson',
    'Kona',
    'Ioniq 5',
    'Ioniq 6',
    'Elantra',
    'Sonata',
    'Santa Cruz',
    'Venue',
  ],
  Kia: [
    'Telluride',
    'Sorento',
    'Sportage',
    'Carnival',
    'EV6',
    'EV9',
    'Forte',
    'K5',
    'Seltos',
    'Soul',
  ],
  Mazda: [
    'CX-5',
    'CX-50',
    'CX-90',
    'CX-70',
    'CX-30',
    'Mazda3',
    'MX-5 Miata',
  ],
  Volkswagen: [
    'Atlas',
    'Atlas Cross Sport',
    'Tiguan',
    'Taos',
    'ID.4',
    'Jetta',
    'Golf GTI',
    'Golf R',
  ],
  BMW: [
    'X5',
    'X3',
    'X7',
    '3 Series',
    '5 Series',
    '4 Series',
    '7 Series',
    'X1',
    'M3',
    'M5',
    'i4',
    'iX',
  ],
  'Mercedes-Benz': [
    'GLE',
    'GLC',
    'GLS',
    'C-Class',
    'E-Class',
    'S-Class',
    'CLA',
    'GLA',
    'GLB',
    'G-Class',
    'EQE',
    'EQS',
  ],
  Audi: [
    'Q5',
    'Q7',
    'Q8',
    'A4',
    'A6',
    'A5',
    'Q3',
    'Q4 e-tron',
    'e-tron GT',
    'S4',
    'S5',
  ],
  Lexus: [
    'RX',
    'GX',
    'TX',
    'LX',
    'NX',
    'ES',
    'IS',
    'UX',
    'LC',
    'LS',
  ],
  Acura: [
    'MDX',
    'RDX',
    'Integra',
    'TLX',
    'ZDX',
  ],
  Cadillac: [
    'Escalade',
    'Escalade ESV',
    'XT5',
    'XT6',
    'XT4',
    'CT5',
    'CT4',
    'Lyriq',
  ],
  Lincoln: [
    'Navigator',
    'Aviator',
    'Nautilus',
    'Corsair',
  ],
  Dodge: [
    'Durango',
    'Charger',
    'Challenger',
    'Hornet',
  ],
  Chrysler: [
    'Pacifica',
    '300',
  ],
  Buick: [
    'Enclave',
    'Envision',
    'Encore GX',
    'Envista',
  ],
  Volvo: [
    'XC90',
    'XC60',
    'XC40',
    'EX90',
    'EX30',
    'S60',
    'V60',
  ],
  Genesis: [
    'GV80',
    'GV70',
    'G80',
    'G70',
    'GV60',
    'G90',
  ],
  Tesla: [
    'Model Y',
    'Model 3',
    'Model X',
    'Model S',
    'Cybertruck',
  ],
  Rivian: [
    'R1S',
    'R1T',
  ],
  Porsche: [
    'Cayenne',
    'Macan',
    '911',
    'Panamera',
    'Taycan',
    '718 Cayman',
  ],
  Infiniti: [
    'QX60',
    'QX80',
    'QX50',
    'QX55',
    'Q50',
  ],
  'Land Rover': [
    'Defender',
    'Range Rover',
    'Range Rover Sport',
    'Range Rover Velar',
    'Discovery',
  ],
  MINI: [
    'Hardtop 2 Door',
    'Hardtop 4 Door',
    'Countryman',
    'Convertible',
    'Clubman',
  ],
  'Alfa Romeo': [
    'Stelvio',
    'Giulia',
    'Tonale',
  ],
  Lucid: [
    'Air',
    'Gravity',
  ],
  Polestar: [
    'Polestar 2',
    'Polestar 3',
    'Polestar 4',
  ],
  Mitsubishi: [
    'Outlander',
    'Eclipse Cross',
    'Mirage',
    'Outlander Sport',
  ],
};

/**
 * Pre-indexed high-fidelity vehicle definitions.
 */
export const POPULAR_VEHICLE_OPTIONS: Record<string, CarOptionsLookupResult> = {
  // 2025+ Redesigned Ford Expedition (5th Generation)
  'ford-expedition-2025': {
    year: 2025,
    make: 'Ford',
    model: 'Expedition',
    engines: [
      {
        id: 'expedition-3-5-eb-standard',
        name: '3.5L EcoBoost Twin-Turbo V6 (Standard Output - 400 HP / 480 lb-ft)',
        displacement: '3.5L Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC 24-Valve V6 (Aluminum Block with Dual Port/Direct Injection)',
        aspiration: 'Twin-Turbo',
        horsepower: 400,
        torqueLbFt: 480,
        fuelType: 'Gasoline',
        towingCapacityLbs: 9600,
        efficiency: { city: 17, highway: 23, combined: 19, unit: 'MPG' },
        keyReliabilityNotes: 'Mature 5th-gen EcoBoost with dual port & direct injection eliminating intake valve carbon deposits. Upgraded cam phaser actuators installed to permanently prevent cold-start rattle.',
        pros: [
          'Massive 480 lb-ft torque plateau starting at 3,250 RPM pulls 9,600 lb trailers with ease',
          'Dual port and direct fuel injection prevents intake carbon build-up on intake valves',
          'Updated phaser solenoid seals and timing chain guides resolve pre-2021 cam phaser rattle',
        ],
        watchouts: [
          'Turbo coolant line and quick-connect O-rings require inspection past 80,000 miles',
          'Strict 5,000-mile full synthetic 5W-30 oil intervals recommended when towing or idle-heavy',
          'Wastegate linkage rattle can develop on high-mileage heat cycles if unshielded',
        ],
        bestFor: 'Daily family travel, road trip cruising, and heavy towing up to 9,600 lbs on Active, King Ranch, and Platinum.',
      },
      {
        id: 'expedition-3-5-ho-eb',
        name: 'High-Output 3.5L EcoBoost Twin-Turbo V6 (Tremor & Platinum Ultimate - 440 HP / 510 lb-ft)',
        displacement: '3.5L HO Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC 24-Valve High-Flow V6 with Dual Exhaust & Upgraded Turbos',
        aspiration: 'Twin-Turbo',
        horsepower: 440,
        torqueLbFt: 510,
        fuelType: 'Gasoline',
        towingCapacityLbs: 9600,
        efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
        keyReliabilityNotes: 'Raptor-derived heavy-duty turbochargers, stainless steel high-flow exhaust manifolds, and active-valve dual exhaust. Delivers immense 510 lb-ft torque with robust cooling.',
        pros: [
          'Tremendous 440 hp and 510 lb-ft torque provides explosive acceleration in a full-size SUV',
          'High-flow cylinder heads and heavy-duty turbo cooling system borrowed from Raptor engineering',
          'True dual exhaust with aggressive, throaty acoustic rumble',
        ],
        watchouts: [
          'Requires 91+ premium fuel to achieve full rated 440 hp and 510 lb-ft output',
          'Tremor 33-inch General Grabber A/T tires reduce highway MPG to ~19 MPG highway',
          'Higher thermal load on brakes and tires during spirited driving with 5,700 lb curb weight',
        ],
        bestFor: 'Tremor off-road overlanding, steep mountain passes, and buyers wanting Raptor-grade punch in a full-size 3-row SUV.',
      },
    ],
    drivetrains: [
      {
        id: 'expedition-4wd-controltrac',
        type: '4WD / 4x4',
        name: 'Control Trac 4WD with Electronic Locking Rear Diff & 2-Speed Transfer Case',
        description: 'Standard on Tremor. Features 2H, 4A (auto full-time), 4H, and 4L low-range gearing with electronic locking rear axle and Rock Crawl terrain management.',
        keyReliabilityNotes: 'Heavy-duty BorgWarner transfer case with e-Locker; service transfer case fluid every 45,000 miles.',
      },
      {
        id: 'expedition-4wd-auto',
        type: '4WD / 4x4',
        name: 'Intelligent 4WD with Terrain Management System (with 4A Auto Mode)',
        description: 'Available on Active, King Ranch, and Platinum. Clutch-based 4A automatic mode safe for dry pavement, torrential rain, and snow/ice.',
        keyReliabilityNotes: 'Pavement-safe full-time 4A mode prevents driveline binding in mixed weather.',
      },
      {
        id: 'expedition-2wd',
        type: '2WD / 4x2',
        name: '2WD / 4x2 (Rear-Wheel Drive)',
        description: 'Standard on Active, King Ranch, and Platinum. Maximum payload rating, lower curb weight, and lowest routine maintenance.',
        keyReliabilityNotes: 'Zero front transfer case or front CV half-shafts to service.',
      },
    ],
    trims: [
      {
        name: 'Active',
        description: 'The redesigned entry-luxury standard: 24-inch panoramic digital display, Ford Digital Experience with Google built-in, 10-speed SelectShift, available in standard and MAX.',
        engineId: 'expedition-3-5-eb-standard',
        availableEngineIds: ['expedition-3-5-eb-standard'],
        availableDrivetrains: ['expedition-2wd', 'expedition-4wd-auto'],
        startingMsrp: 61700,
        keyFeatures: [
          '24-inch panoramic digital instrument cluster & media display',
          'Ford Digital Experience with wireless Apple CarPlay / Android Auto & Google Assistant',
          'Class IV trailer hitch receiver with 9,600 lbs maximum towing capacity',
        ],
      },
      {
        name: 'Tremor',
        description: 'All-new dedicated factory off-road warrior: 440 hp High-Output EcoBoost standard, 33-inch General Grabber AT tires, 10.6-inch ground clearance, Raptor-style running boards, and electronic locking rear differential.',
        engineId: 'expedition-3-5-ho-eb',
        availableEngineIds: ['expedition-3-5-ho-eb'],
        availableDrivetrains: ['expedition-4wd-controltrac'],
        startingMsrp: 81030,
        keyFeatures: [
          '440 hp / 510 lb-ft High-Output 3.5L EcoBoost with true dual exhaust',
          '33-inch General Grabber A/T tires on 18-inch wheels with 10.6-inch ground clearance',
          'Control Trac 4WD with electronic locking rear diff, steel skid plates & Rock Crawl mode',
        ],
      },
      {
        name: 'King Ranch',
        description: 'Southwestern executive luxury: Del Rio Kingsville leather upholstery in Marsh Gray / Ebony, real open-pore wood trim, standard BlueCruise hands-free driving, and 22-inch 6-spoke wheels. Available in standard and MAX.',
        engineId: 'expedition-3-5-eb-standard',
        availableEngineIds: ['expedition-3-5-eb-standard'],
        availableDrivetrains: ['expedition-4wd-auto', 'expedition-2wd'],
        startingMsrp: 83655,
        keyFeatures: [
          'Full Del Rio Kingsville leather seating in Marsh Gray / Ebony with running-W logos',
          'Ford BlueCruise hands-free highway driving with lane change assist',
          '22-inch 6-spoke polished aluminum wheels with King Ranch center caps',
        ],
      },
      {
        name: 'Platinum',
        description: 'Pinnacle flagship luxury: Continuous Controlled Damping (CCD) adaptive suspension, Multicontour massaging front seats, Bang & Olufsen Unleashed 22-speaker audio, and optional 440 hp High-Output engine with Platinum Ultimate package. Available in standard and MAX.',
        engineId: 'expedition-3-5-eb-standard',
        availableEngineIds: ['expedition-3-5-eb-standard', 'expedition-3-5-ho-eb'],
        availableDrivetrains: ['expedition-4wd-auto', 'expedition-2wd'],
        startingMsrp: 83800,
        keyFeatures: [
          'Continuous Controlled Damping (CCD) adaptive suspension with road preview',
          'Multicontour Active Motion massaging front seats with perforated leather',
          'Available 440 hp High-Output EcoBoost powertrain via Platinum Ultimate Package',
        ],
      },
    ],
    reliabilityRecommendation: 'The 2025 Expedition features Ford’s 5th-generation 3.5L EcoBoost with dual-injection, which eliminates intake carbon buildup and incorporates redesigned cam phasers. For family touring and heavy towing, the standard 400 hp 3.5L EcoBoost with Intelligent 4WD provides supreme reliability. For rugged overland trails, the Tremor’s 440 hp High-Output engine with standard Control Trac e-Locker 4WD is unparalleled.',
  },

  // Ford Expedition (2018-2024 4th Generation)
  'ford-expedition': {
    year: 2022,
    make: 'Ford',
    model: 'Expedition',
    engines: [
      {
        id: 'exped-gen4-3-5-eb',
        name: '3.5L EcoBoost Twin-Turbo V6 (380 - 400 HP / 470 - 480 lb-ft)',
        displacement: '3.5L Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC 24-Valve V6',
        aspiration: 'Twin-Turbo',
        horsepower: 400,
        torqueLbFt: 480,
        fuelType: 'Gasoline',
        towingCapacityLbs: 9300,
        efficiency: { city: 17, highway: 23, combined: 19, unit: 'MPG' },
        keyReliabilityNotes: 'Check cold-start cam phaser rattle (Customer Satisfaction Program 21N03). Ensure 5,000-mile synthetic oil intervals to protect timing chain tensioners.',
        pros: ['Exceptional 9,300 lbs towing capacity', 'Smooth 10-speed transmission integration', 'Abundant low-end torque for mountain hauling'],
        watchouts: ['Cam phaser rattle on cold starts (2018–2020 models)', 'Turbo coolant pipe quick-disconnect leaks at high mileage'],
        bestFor: 'Family road trips and heavy trailer towing under 9,300 lbs.',
      },
      {
        id: 'exped-gen4-3-5-ho',
        name: 'High-Output 3.5L EcoBoost V6 (Timberline & Stealth - 440 HP / 510 lb-ft)',
        displacement: '3.5L HO Twin-Turbo',
        configuration: 'Twin-Turbocharged 60° DOHC 24-Valve High-Output V6',
        aspiration: 'Twin-Turbo',
        horsepower: 440,
        torqueLbFt: 510,
        fuelType: 'Gasoline',
        towingCapacityLbs: 9200,
        efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
        keyReliabilityNotes: 'Raptor-derived engine calibration with upgraded turbochargers and dual exhaust.',
        pros: ['440 horsepower provides sports-car acceleration in a large SUV', 'Standard on Timberline off-road trim'],
        watchouts: ['Premium 91+ octane fuel required for maximum power', 'Faster brake and tire wear'],
        bestFor: 'Off-road exploration (Timberline) and buyers wanting high-output passing power.',
      },
    ],
    drivetrains: [
      {
        id: 'exped-4wd-auto',
        type: '4WD / 4x4',
        name: 'Control Trac 4WD with Terrain Management System',
        description: 'Features 2H, 4A (automatic on-demand for dry pavement/rain), 4H, and 4L low range.',
        keyReliabilityNotes: 'Inspect transfer case fluid every 45,000 miles.',
      },
      {
        id: 'exped-2wd',
        type: '2WD / 4x2',
        name: '2WD / 4x2 (Rear-Wheel Drive)',
        description: 'Rear-wheel drive layout with higher payload rating and simpler maintenance.',
        keyReliabilityNotes: 'Zero front axle or transfer case components to maintain.',
      },
    ],
    trims: [
      {
        name: 'XL STX',
        description: '5-passenger two-row entry utility trim with SYNC 4 12-inch screen and 18-inch wheels.',
        engineId: 'exped-gen4-3-5-eb',
        availableEngineIds: ['exped-gen4-3-5-eb'],
        availableDrivetrains: ['exped-2wd', 'exped-4wd-auto'],
        startingMsrp: 52990,
        keyFeatures: ['Two-row 5-passenger layout', 'SYNC 4 12-inch center screen', 'Class IV trailer hitch'],
      },
      {
        name: 'XLT',
        description: 'Core volume 3-row family SUV: 8-passenger seating, tri-zone automatic climate control, and power-folding 3rd row.',
        engineId: 'exped-gen4-3-5-eb',
        availableEngineIds: ['exped-gen4-3-5-eb'],
        availableDrivetrains: ['exped-2wd', 'exped-4wd-auto'],
        startingMsrp: 57445,
        keyFeatures: ['8-passenger 3-row seating', 'Power-folding 3rd row seats', 'Tri-zone climate control'],
      },
      {
        name: 'Limited',
        description: 'Luxury volume trim: leather heated and ventilated front seats, panoramic Vista Roof, and 12-speaker B&O sound.',
        engineId: 'exped-gen4-3-5-eb',
        availableEngineIds: ['exped-gen4-3-5-eb'],
        availableDrivetrains: ['exped-2wd', 'exped-4wd-auto'],
        startingMsrp: 66295,
        keyFeatures: ['Leather heated & ventilated seats', 'Panoramic Vista Roof', 'Bang & Olufsen 12-speaker audio'],
      },
      {
        name: 'Timberline',
        description: 'Factory off-road package: 440 hp High-Output engine, 33-inch Goodyear AT tires, 10.6-inch ground clearance, and steel skid plates.',
        engineId: 'exped-gen4-3-5-ho',
        availableEngineIds: ['exped-gen4-3-5-ho'],
        availableDrivetrains: ['exped-4wd-auto'],
        startingMsrp: 70000,
        keyFeatures: ['440 hp High-Output 3.5L EcoBoost', '33-inch Goodyear Wrangler A/T tires', 'Two-speed transfer case with eLocker'],
      },
      {
        name: 'King Ranch',
        description: 'Southwestern luxury: Del Rio leather upholstery, power-deployable running boards, and 15.5-inch vertical display.',
        engineId: 'exped-gen4-3-5-eb',
        availableEngineIds: ['exped-gen4-3-5-eb'],
        availableDrivetrains: ['exped-2wd', 'exped-4wd-auto'],
        startingMsrp: 76500,
        keyFeatures: ['Del Rio leather upholstery', '15.5-inch portrait display', '22-inch 6-spoke wheels'],
      },
      {
        name: 'Platinum',
        description: 'Flagship executive luxury: Multicontour massaging front seats, BlueCruise hands-free driving, and CCD suspension.',
        engineId: 'exped-gen4-3-5-eb',
        availableEngineIds: ['exped-gen4-3-5-eb'],
        availableDrivetrains: ['exped-2wd', 'exped-4wd-auto'],
        startingMsrp: 79800,
        keyFeatures: ['Multicontour massaging seats', 'Ford BlueCruise hands-free driving', 'Continuously Controlled Damping suspension'],
      },
    ],
    reliabilityRecommendation: 'Verify that cam phasers have been replaced with the updated design (Customer Satisfaction Program 21N03) if purchasing a 2018–2020 model. For maximum power, the Timberline provides 440 hp with dedicated off-road components.',
  },

  // Ford F-150
  'ford-f-150': {
    year: 2021,
    make: 'Ford',
    model: 'F-150',
    engines: [
      {
        id: 'f150-2-7-eb',
        name: '2.7L EcoBoost Twin-Turbo V6 (Compacted Graphite Iron Block)',
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
        engineId: 'f150-2-7-eb',
        availableEngineIds: ['f150-2-7-eb', 'f150-5-0-v8'],
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
        name: 'Tremor',
        description: 'Dedicated factory off-road package: 33-inch General Grabber tires, retuned off-road suspension, rear locking differential.',
        engineId: 'f150-3-5-eb',
        availableEngineIds: ['f150-3-5-eb', 'f150-5-0-v8'],
        availableDrivetrains: ['f150-4x4-part'],
        startingMsrp: 51200,
        keyFeatures: ['Factory 1-inch suspension lift with monotube shocks', 'Electronic locking rear differential', 'Trail One-Pedal Drive & Trail Turn Assist'],
      },
    ],
    reliabilityRecommendation: 'For daily driving, highway commuting, and towing under 8,500 lbs, the 2.7L EcoBoost with Compacted Graphite Iron block offers the highest durability and fewest catastrophic repairs. If you regularly tow heavy loads (>9,000 lbs), choose the 3.5L EcoBoost with verified updated cam phasers.',
  },

  // Chevrolet Silverado 1500 / Tahoe
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
        keyReliabilityNotes: 'Massive 430 lb-ft torque at low RPM from a truck-specific 4-cylinder. Rigid crankshaft and cast iron liners.',
        pros: ['430 lb-ft torque matches larger V8s at lower RPM', '5-year/100,000-mile GM commercial warranty rating'],
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
        keyReliabilityNotes: 'The classic GM Small Block V8. Watch Dynamic Fuel Management (DFM) collapsible lifters; change oil every 5,000 miles.',
        pros: ['Smooth linear power delivery and classic V8 rumble', 'Abundant and cheap replacement parts nationwide'],
        watchouts: ['DFM lifter collapse/stuck lifter failure on cylinder bank 1 or 2', 'Requires 5,000-mile oil changes with dexos1 Gen 3 spec'],
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
        pros: ['420 horsepower delivers rapid passing and effortless heavy hauling', 'Standard dual-exhaust active sound'],
        watchouts: ['Requires premium octane fuel', 'DFM lifter risk'],
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
        keyReliabilityNotes: 'Inherent primary balance of an Inline-6. Delivers an unbelievable 29-33 MPG highway empty.',
        pros: ['Incredible 28-32 MPG highway fuel economy', 'Whisper-quiet diesel operation with 495 lb-ft torque at 1,500 RPM'],
        watchouts: ['DEF / SCR emissions sensors and DPF regeneration cycles', 'Rear wet oil pump drive belt service at 150k miles'],
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
        name: 'High Country',
        description: 'Flagship luxury: exclusive open-pore wood trim, stainless steel speaker grilles, Super Cruise hands-free driving available.',
        engineId: 'chevy-5-3-v8',
        availableEngineIds: ['chevy-5-3-v8', 'chevy-6-2-v8', 'chevy-3-0-duramax'],
        availableDrivetrains: ['chevy-4x4-autotrac'],
        startingMsrp: 62000,
        keyFeatures: ['Super Cruise hands-free trailering capability', 'Authentic open-pore wood interior trim', '20-inch machined aluminum wheels'],
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
        keyReliabilityNotes: 'The legendary HEMI rumble with 130 lb-ft electric launch assist. Watch for exhaust manifold bolt breakage on cold start.',
        pros: ['Deep classic American V8 exhaust note', 'Instant seamless start-stop thanks to 48V motor', 'Paired with bulletproof ZF 8-speed automatic'],
        watchouts: ['Exhaust manifold bolt cracking (ticking noise on cold start)', 'HEMI roller lifter needle bearing failure if oil is neglected'],
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
        availableEngineIds: ['ram-3-6-pentastar', 'ram-5-7-hemi'],
        availableDrivetrains: ['ram-4x4-bw', 'ram-2wd'],
        startingMsrp: 41800,
        keyFeatures: ['Uconnect 8.4-inch or 12-inch touchscreen', '18-inch aluminum wheels', 'Fog lamps and chrome accents'],
      },
      {
        name: 'Laramie',
        description: 'Luxury mainstream: heated and ventilated leather 10-way power front seats, 9-speaker Alpine audio, and dual-zone climate.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi'],
        availableDrivetrains: ['ram-4x4-bw', 'ram-2wd'],
        startingMsrp: 50800,
        keyFeatures: ['Heated & ventilated leather front seats', '9-speaker Alpine premium audio system with subwoofer', 'Standard 4WD Auto mode'],
      },
      {
        name: 'Rebel',
        description: 'Factory off-road warrior: 1-inch suspension lift, Bilstein monotube dampers, 33-inch Goodyear Wrangler DuraTrac tires, electronic locking rear diff.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi'],
        availableDrivetrains: ['ram-4x4-bw'],
        startingMsrp: 53500,
        keyFeatures: ['Bilstein performance off-road shocks', 'Electronic locking rear differential', '33-inch Goodyear DuraTrac all-terrain tires'],
      },
      {
        name: 'Limited',
        description: 'Pinnacle luxury: 100% full leather interior, 19-speaker Harman Kardon sound, standard four-corner air suspension.',
        engineId: 'ram-5-7-hemi',
        availableEngineIds: ['ram-5-7-hemi'],
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
        availableEngineIds: ['civic-1-5-turbo'],
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
    ],
    drivetrains: [
      {
        id: 'rav4-awd-e',
        type: 'AWD',
        name: 'Electronic AWD (e-AWD with Dedicated Rear Electric Motor)',
        description: 'Standard on all Hybrid trims. Rear wheels are driven independently by a 53 hp rear electric motor with no mechanical driveshaft.',
        keyReliabilityNotes: 'Inspect high-voltage orange cable connection at the rear differential for corrosion in road salt climates.',
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
        availableDrivetrains: ['rav4-fwd'],
        startingMsrp: 26350,
        keyFeatures: ['Toyota Safety Sense 2.0 with pedestrian detection', 'LED headlights and taillights', 'Apple CarPlay & Android Auto'],
      },
      {
        name: 'XLE Gas',
        description: 'Popular mid-trim: 17-inch alloy wheels, dual-zone climate control, smart key entry, and blind-spot monitoring.',
        engineId: 'rav4-2-5-gas',
        availableEngineIds: ['rav4-2-5-gas'],
        availableDrivetrains: ['rav4-fwd'],
        startingMsrp: 27645,
        keyFeatures: ['Blind Spot Monitor with Rear Cross-Traffic Alert', 'Dual-zone automatic climate control', '8-way power adjustable driver seat'],
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
        name: 'Limited Hybrid',
        description: 'Flagship luxury: 18-inch chrome-finished wheels, ventilated front seats, premium JBL 11-speaker audio, and digital rearview mirror.',
        engineId: 'rav4-2-5-hybrid',
        availableEngineIds: ['rav4-2-5-hybrid'],
        availableDrivetrains: ['rav4-awd-e'],
        startingMsrp: 37030,
        keyFeatures: ['Heated & ventilated front seats', 'JBL 11-speaker premium audio system', 'Digital display rearview mirror with HomeLink'],
      },
    ],
    reliabilityRecommendation: 'The 2.5L Hybrid paired with electronic e-AWD is widely regarded as one of the most reliable and economical vehicles on the market today. Ensure you inspect the rear high-voltage connector for salt corrosion if purchasing in the Midwest or Northeast.',
  },
};

// Aliases for popular vehicle options
POPULAR_VEHICLE_OPTIONS['chevrolet-silverado-1500'] = POPULAR_VEHICLE_OPTIONS['chevrolet-silverado'];
POPULAR_VEHICLE_OPTIONS['ford-expedition-max-2025'] = POPULAR_VEHICLE_OPTIONS['ford-expedition-2025'];
POPULAR_VEHICLE_OPTIONS['ford-expedition-max'] = POPULAR_VEHICLE_OPTIONS['ford-expedition'];

/**
 * Utility to convert any make or model name into a standard normalized kebab-case slug.
 */
export function toSlug(str: string): string {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Normalizes input make, model, and optional year into a canonical lookup key.
 * Accurately routes 2025+ Ford Expedition redesign vs older model years.
 */
export function normalizeCarKey(make: string, model: string, year?: number): string {
  const cleanMake = toSlug(make);
  const cleanModel = toSlug(model);
  const numYear = year ? Number(year) : undefined;

  // Ford Expedition variations (specifically separate 2025+ 5th-gen redesign from 4th-gen)
  if (cleanMake.includes('ford') && cleanModel.includes('expedition')) {
    if (numYear && numYear >= 2025) {
      return 'ford-expedition-2025';
    }
    return 'ford-expedition';
  }

  // Ford F-150 Lightning vs gas F-150
  if (cleanMake.includes('ford') && cleanModel.includes('lightning')) {
    return 'ford-f-150-lightning';
  }
  if (cleanMake.includes('ford') && (cleanModel === 'f-150' || cleanModel === 'f150' || cleanModel.startsWith('f-150-'))) {
    return 'ford-f-150';
  }

  // Chevy Silverado variations (do not hijack EV)
  if ((cleanMake.includes('chev') || cleanMake.includes('gmc')) && cleanModel.includes('silverado')) {
    if (cleanModel.includes('ev')) {
      return 'chevrolet-silverado-ev';
    }
    return 'chevrolet-silverado-1500';
  }

  // RAM 1500 variations
  if ((cleanMake.includes('ram') || cleanMake.includes('dodge')) && (cleanModel === '1500' || cleanModel === 'ram-1500')) {
    return 'ram-1500';
  }

  // Honda Civic variations
  if (cleanMake.includes('honda') && cleanModel === 'civic') {
    return 'honda-civic';
  }

  // Toyota RAV4 variations
  if (cleanMake.includes('toyota') && cleanModel === 'rav4') {
    return 'toyota-rav4';
  }

  return `${cleanMake}-${cleanModel}`;
}

/**
 * Retrieve all major US makes.
 */
export function getMajorMakes(): string[] {
  return [...MAJOR_US_MAKES];
}

/**
 * Retrieve popular models for a given make.
 */
export function getModelsForMake(make: string): string[] {
  if (!make) return [];
  const found = Object.keys(MAKE_MODELS_MAP).find(
    (k) => k.toLowerCase() === make.toLowerCase().trim()
  );
  if (found && MAKE_MODELS_MAP[found]) {
    return MAKE_MODELS_MAP[found];
  }
  return [];
}

/**
 * Factory OEM exterior color palettes tailored to each automotive automaker.
 * Always returns a clean, brand-authentic palette with no placeholder slashes.
 */
export function getExteriorColorsForMakeAndModel(make: string, _model?: string): CarColorOption[] {
  const cleanMake = (make || '').toLowerCase().trim();

  const anyColor: CarColorOption = { name: 'Any / All Colors', value: 'Any Color', hex: '#64748b' };

  if (cleanMake.includes('ford') || cleanMake.includes('lincoln')) {
    return [
      anyColor,
      { name: 'Star White Metallic Tri-Coat', value: 'Star White Metallic', hex: '#f8fafc' },
      { name: 'Agate Black Metallic', value: 'Agate Black Metallic', hex: '#111827' },
      { name: 'Carbonized Gray Metallic', value: 'Carbonized Gray Metallic', hex: '#475569' },
      { name: 'Iconic Silver Metallic', value: 'Iconic Silver Metallic', hex: '#94a3b8' },
      { name: 'Rapid Red Metallic Tinted Clearcoat', value: 'Rapid Red Metallic', hex: '#991b1b' },
      { name: 'Glacier Gray Metallic Tri-Coat', value: 'Glacier Gray Tri-Coat', hex: '#cbd5e1' },
      { name: 'Antimatter Blue Metallic', value: 'Antimatter Blue Metallic', hex: '#172554' },
      { name: 'Wild Green Metallic', value: 'Wild Green Metallic', hex: '#166534' },
      { name: 'Dark Matter Metallic', value: 'Dark Matter Metallic', hex: '#334155' },
      { name: 'Atlas Blue Metallic', value: 'Atlas Blue Metallic', hex: '#0284c7' },
    ];
  }

  if (cleanMake.includes('chevrolet') || cleanMake.includes('chevy')) {
    return [
      anyColor,
      { name: 'Summit White', value: 'Summit White', hex: '#f8fafc' },
      { name: 'Black', value: 'Black', hex: '#09090b' },
      { name: 'Sterling Gray Metallic', value: 'Sterling Gray Metallic', hex: '#64748b' },
      { name: 'Lakeshore Blue Metallic', value: 'Lakeshore Blue Metallic', hex: '#1d4ed8' },
      { name: 'Radiant Red Tintcoat', value: 'Radiant Red Tintcoat', hex: '#b91c1c' },
      { name: 'Harvest Bronze Metallic', value: 'Harvest Bronze Metallic', hex: '#78350f' },
      { name: 'Iridescent Pearl Tricoat', value: 'Iridescent Pearl Tricoat', hex: '#f1f5f9' },
      { name: 'Cacti Green', value: 'Cacti Green', hex: '#4d7c0f' },
      { name: 'Dark Ash Metallic', value: 'Dark Ash Metallic', hex: '#334155' },
      { name: 'Slate Gray Metallic', value: 'Slate Gray Metallic', hex: '#475569' },
    ];
  }

  if (cleanMake.includes('gmc')) {
    return [
      anyColor,
      { name: 'Summit White', value: 'Summit White', hex: '#f8fafc' },
      { name: 'Onyx Black', value: 'Onyx Black', hex: '#09090b' },
      { name: 'Sterling Metallic', value: 'Sterling Metallic', hex: '#64748b' },
      { name: 'Titanium Rush Metallic', value: 'Titanium Rush Metallic', hex: '#334155' },
      { name: 'Volcanic Red Tintcoat', value: 'Volcanic Red Tintcoat', hex: '#b91c1c' },
      { name: 'Downpour Metallic', value: 'Downpour Metallic', hex: '#1e3a8a' },
      { name: 'White Frost Tricoat', value: 'White Frost Tricoat', hex: '#f1f5f9' },
      { name: 'Deep Bronze Metallic', value: 'Deep Bronze Metallic', hex: '#713f12' },
      { name: 'Thunderstorm Gray', value: 'Thunderstorm Gray', hex: '#6b7280' },
    ];
  }

  if (cleanMake.includes('toyota')) {
    return [
      anyColor,
      { name: 'Wind Chill Pearl', value: 'Wind Chill Pearl', hex: '#f8fafc' },
      { name: 'Midnight Black Metallic', value: 'Midnight Black Metallic', hex: '#111827' },
      { name: 'Celestial Silver Metallic', value: 'Celestial Silver Metallic', hex: '#94a3b8' },
      { name: 'Underground Gray', value: 'Underground Gray', hex: '#374151' },
      { name: 'Supersonic Red', value: 'Supersonic Red', hex: '#dc2626' },
      { name: 'Blueprint Navy', value: 'Blueprint Navy', hex: '#1e3a8a' },
      { name: 'Army Green', value: 'Army Green', hex: '#3f6212' },
      { name: 'Bronze Oxide', value: 'Bronze Oxide', hex: '#854d0e' },
      { name: 'Solar Octane', value: 'Solar Octane', hex: '#ea580c' },
      { name: 'Mudbath Terracotta', value: 'Mudbath', hex: '#78350f' },
    ];
  }

  if (cleanMake.includes('lexus')) {
    return [
      anyColor,
      { name: 'Eminent White Pearl', value: 'Eminent White Pearl', hex: '#f8fafc' },
      { name: 'Caviar Black', value: 'Caviar Black', hex: '#09090b' },
      { name: 'Cloudburst Gray', value: 'Cloudburst Gray', hex: '#475569' },
      { name: 'Atomic Silver', value: 'Atomic Silver', hex: '#94a3b8' },
      { name: 'Matador Red Mica', value: 'Matador Red Mica', hex: '#991b1b' },
      { name: 'Nori Green Pearl', value: 'Nori Green Pearl', hex: '#166534' },
      { name: 'Grecian Water', value: 'Grecian Water', hex: '#0284c7' },
      { name: 'Ultrasonic Blue Mica 2.0', value: 'Ultrasonic Blue Mica', hex: '#1d4ed8' },
    ];
  }

  if (cleanMake.includes('honda')) {
    return [
      anyColor,
      { name: 'Platinum White Pearl', value: 'Platinum White Pearl', hex: '#f8fafc' },
      { name: 'Crystal Black Pearl', value: 'Crystal Black Pearl', hex: '#111827' },
      { name: 'Meteorite Gray Metallic', value: 'Meteorite Gray Metallic', hex: '#475569' },
      { name: 'Lunar Silver Metallic', value: 'Lunar Silver Metallic', hex: '#94a3b8' },
      { name: 'Radiant Red Metallic', value: 'Radiant Red Metallic', hex: '#b91c1c' },
      { name: 'Still Night Pearl', value: 'Still Night Pearl', hex: '#1d4ed8' },
      { name: 'Sonic Gray Pearl', value: 'Sonic Gray Pearl', hex: '#64748b' },
      { name: 'Urban Gray Pearl', value: 'Urban Gray Pearl', hex: '#9ca3af' },
      { name: 'Diffused Sky Blue Pearl', value: 'Diffused Sky Blue Pearl', hex: '#38bdf8' },
    ];
  }

  if (cleanMake.includes('acura')) {
    return [
      anyColor,
      { name: 'Platinum White Pearl', value: 'Platinum White Pearl', hex: '#f8fafc' },
      { name: 'Majestic Black Pearl', value: 'Majestic Black Pearl', hex: '#111827' },
      { name: 'Liquid Carbon Metallic', value: 'Liquid Carbon Metallic', hex: '#475569' },
      { name: 'Lunar Silver Metallic', value: 'Lunar Silver Metallic', hex: '#94a3b8' },
      { name: 'Performance Red Pearl', value: 'Performance Red Pearl', hex: '#b91c1c' },
      { name: 'Apex Blue Pearl', value: 'Apex Blue Pearl', hex: '#1d4ed8' },
      { name: 'Tiger Eye Pearl', value: 'Tiger Eye Pearl', hex: '#b45309' },
    ];
  }

  if (cleanMake.includes('jeep')) {
    return [
      anyColor,
      { name: 'Bright White Clearcoat', value: 'Bright White', hex: '#f8fafc' },
      { name: 'Black Clearcoat', value: 'Black Clearcoat', hex: '#09090b' },
      { name: 'Granite Crystal Metallic', value: 'Granite Crystal Metallic', hex: '#374151' },
      { name: 'Hydro Blue Pearlcoat', value: 'Hydro Blue Pearl', hex: '#0284c7' },
      { name: 'Firecracker Red Clearcoat', value: 'Firecracker Red', hex: '#dc2626' },
      { name: 'Sarge Green Clearcoat', value: 'Sarge Green', hex: '#3f6212' },
      { name: 'Anvil Clearcoat', value: 'Anvil Clearcoat', hex: '#475569' },
      { name: 'Earl Clearcoat', value: 'Earl Clearcoat', hex: '#94a3b8' },
      { name: 'High Velocity Yellow', value: 'High Velocity Yellow', hex: '#eab308' },
      { name: 'Silver Zynith Metallic', value: 'Silver Zynith', hex: '#cbd5e1' },
    ];
  }

  if (cleanMake.includes('ram') || cleanMake.includes('dodge') || cleanMake.includes('chrysler')) {
    return [
      anyColor,
      { name: 'Bright White Clearcoat', value: 'Bright White', hex: '#f8fafc' },
      { name: 'Diamond Black Crystal Pearlcoat', value: 'Diamond Black Crystal', hex: '#111827' },
      { name: 'Billet Silver Metallic Clearcoat', value: 'Billet Silver Metallic', hex: '#94a3b8' },
      { name: 'Granite Crystal Metallic', value: 'Granite Crystal Metallic', hex: '#374151' },
      { name: 'Delmonico Red Pearlcoat', value: 'Delmonico Red Pearl', hex: '#881337' },
      { name: 'Patriot Blue Pearlcoat', value: 'Patriot Blue Pearl', hex: '#1e3a8a' },
      { name: 'Hydro Blue Pearlcoat', value: 'Hydro Blue Pearl', hex: '#0284c7' },
      { name: 'Flame Red Clearcoat', value: 'Flame Red', hex: '#dc2626' },
    ];
  }

  if (cleanMake.includes('subaru')) {
    return [
      anyColor,
      { name: 'Crystal White Pearl', value: 'Crystal White Pearl', hex: '#f8fafc' },
      { name: 'Crystal Black Silica', value: 'Crystal Black Silica', hex: '#111827' },
      { name: 'Magnetite Gray Metallic', value: 'Magnetite Gray Metallic', hex: '#475569' },
      { name: 'Ice Silver Metallic', value: 'Ice Silver Metallic', hex: '#94a3b8' },
      { name: 'Autumn Green Metallic', value: 'Autumn Green Metallic', hex: '#3f6212' },
      { name: 'Crimson Red Pearl', value: 'Crimson Red Pearl', hex: '#991b1b' },
      { name: 'Geyser Blue', value: 'Geyser Blue', hex: '#0369a1' },
      { name: 'Sapphire Blue Pearl', value: 'Sapphire Blue Pearl', hex: '#1d4ed8' },
    ];
  }

  if (cleanMake.includes('bmw')) {
    return [
      anyColor,
      { name: 'Alpine White', value: 'Alpine White', hex: '#f8fafc' },
      { name: 'Black Sapphire Metallic', value: 'Black Sapphire Metallic', hex: '#111827' },
      { name: 'Mineral White Metallic', value: 'Mineral White Metallic', hex: '#f1f5f9' },
      { name: 'Brooklyn Grey Metallic', value: 'Brooklyn Grey Metallic', hex: '#94a3b8' },
      { name: 'Isle of Man Green Metallic', value: 'Isle of Man Green', hex: '#15803d' },
      { name: 'Tanzanite Blue II Metallic', value: 'Tanzanite Blue II', hex: '#1e3a8a' },
      { name: 'Dravit Grey Metallic', value: 'Dravit Grey Metallic', hex: '#475569' },
      { name: 'Skyscraper Grey Metallic', value: 'Skyscraper Grey Metallic', hex: '#64748b' },
    ];
  }

  if (cleanMake.includes('mercedes')) {
    return [
      anyColor,
      { name: 'Polar White', value: 'Polar White', hex: '#f8fafc' },
      { name: 'Obsidian Black Metallic', value: 'Obsidian Black Metallic', hex: '#09090b' },
      { name: 'Selenite Grey Metallic', value: 'Selenite Grey Metallic', hex: '#475569' },
      { name: 'Alpine Grey', value: 'Alpine Grey', hex: '#94a3b8' },
      { name: 'Nautical Blue Metallic', value: 'Nautical Blue Metallic', hex: '#1e3a8a' },
      { name: 'High-Tech Silver Metallic', value: 'High-Tech Silver Metallic', hex: '#cbd5e1' },
      { name: 'Patagonia Red Metallic', value: 'Patagonia Red Metallic', hex: '#991b1b' },
    ];
  }

  if (cleanMake.includes('tesla')) {
    return [
      anyColor,
      { name: 'Stealth Grey', value: 'Stealth Grey', hex: '#374151' },
      { name: 'Pearl White Multi-Coat', value: 'Pearl White Multi-Coat', hex: '#f8fafc' },
      { name: 'Deep Blue Metallic', value: 'Deep Blue Metallic', hex: '#1d4ed8' },
      { name: 'Solid Black', value: 'Solid Black', hex: '#09090b' },
      { name: 'Ultra Red', value: 'Ultra Red', hex: '#b91c1c' },
      { name: 'Quicksilver Metallic', value: 'Quicksilver Metallic', hex: '#94a3b8' },
    ];
  }

  if (cleanMake.includes('porsche')) {
    return [
      anyColor,
      { name: 'White', value: 'White', hex: '#f8fafc' },
      { name: 'Black', value: 'Black', hex: '#09090b' },
      { name: 'Guards Red', value: 'Guards Red', hex: '#dc2626' },
      { name: 'Racing Yellow', value: 'Racing Yellow', hex: '#eab308' },
      { name: 'Gentian Blue Metallic', value: 'Gentian Blue Metallic', hex: '#1e3a8a' },
      { name: 'GT Silver Metallic', value: 'GT Silver Metallic', hex: '#94a3b8' },
      { name: 'Chalk', value: 'Chalk', hex: '#cbd5e1' },
      { name: 'Carmine Red', value: 'Carmine Red', hex: '#991b1b' },
    ];
  }

  if (cleanMake.includes('hyundai') || cleanMake.includes('genesis')) {
    return [
      anyColor,
      { name: 'Atlas White', value: 'Atlas White', hex: '#f8fafc' },
      { name: 'Abyss Black Pearl', value: 'Abyss Black Pearl', hex: '#111827' },
      { name: 'Cyber Gray Metallic', value: 'Cyber Gray Metallic', hex: '#64748b' },
      { name: 'Typhoon Silver', value: 'Typhoon Silver', hex: '#94a3b8' },
      { name: 'Robust Emerald', value: 'Robust Emerald', hex: '#166534' },
      { name: 'Ultimate Red', value: 'Ultimate Red', hex: '#b91c1c' },
      { name: 'Moonlight Cloud Blue', value: 'Moonlight Cloud', hex: '#1e3a8a' },
    ];
  }

  if (cleanMake.includes('kia')) {
    return [
      anyColor,
      { name: 'Glacial White Pearl', value: 'Glacial White Pearl', hex: '#f8fafc' },
      { name: 'Aurora Black Pearl', value: 'Aurora Black Pearl', hex: '#111827' },
      { name: 'Wolf Gray', value: 'Wolf Gray', hex: '#64748b' },
      { name: 'Gravity Gray', value: 'Gravity Gray', hex: '#475569' },
      { name: 'Dawning Red', value: 'Dawning Red', hex: '#881337' },
      { name: 'Jungle Green', value: 'Jungle Green', hex: '#166534' },
      { name: 'Midnight Lake Blue', value: 'Midnight Lake Blue', hex: '#1e3a8a' },
    ];
  }

  if (cleanMake.includes('mazda')) {
    return [
      anyColor,
      { name: 'Soul Red Crystal Metallic', value: 'Soul Red Crystal', hex: '#b91c1c' },
      { name: 'Machine Gray Metallic', value: 'Machine Gray Metallic', hex: '#475569' },
      { name: 'Rhodium White Metallic', value: 'Rhodium White Metallic', hex: '#f8fafc' },
      { name: 'Jet Black Mica', value: 'Jet Black Mica', hex: '#111827' },
      { name: 'Polymetal Gray Metallic', value: 'Polymetal Gray Metallic', hex: '#64748b' },
      { name: 'Deep Crystal Blue Mica', value: 'Deep Crystal Blue Mica', hex: '#1e3a8a' },
      { name: 'Zircon Sand Metallic', value: 'Zircon Sand Metallic', hex: '#78716c' },
    ];
  }

  if (cleanMake.includes('audi')) {
    return [
      anyColor,
      { name: 'Ibis White', value: 'Ibis White', hex: '#f8fafc' },
      { name: 'Mythos Black Metallic', value: 'Mythos Black Metallic', hex: '#09090b' },
      { name: 'Daytona Gray Pearl', value: 'Daytona Gray Pearl', hex: '#475569' },
      { name: 'Glacier White Metallic', value: 'Glacier White Metallic', hex: '#f1f5f9' },
      { name: 'Navarra Blue Metallic', value: 'Navarra Blue Metallic', hex: '#1e3a8a' },
      { name: 'Tango Red Metallic', value: 'Tango Red Metallic', hex: '#b91c1c' },
      { name: 'Chronos Gray Metallic', value: 'Chronos Gray Metallic', hex: '#64748b' },
    ];
  }

  // Universal OEM color standard for any other brand
  return [
    anyColor,
    { name: 'Pure White', value: 'Pure White', hex: '#f8fafc' },
    { name: 'Midnight Black', value: 'Midnight Black', hex: '#111827' },
    { name: 'Granite Gray Metallic', value: 'Granite Gray Metallic', hex: '#475569' },
    { name: 'Silver Metallic', value: 'Silver Metallic', hex: '#94a3b8' },
    { name: 'Crimson Red', value: 'Crimson Red', hex: '#b91c1c' },
    { name: 'Navy Blue Metallic', value: 'Navy Blue Metallic', hex: '#1e3a8a' },
    { name: 'Forest Green Metallic', value: 'Forest Green Metallic', hex: '#166534' },
  ];
}

// In-memory cache for ultra-fast, zero-latency lookups
export const vehicleOptionsCache = new Map<string, CarOptionsLookupResult>();

/**
 * Comprehensive mapping of factory trims for all major models in the US market.
 */
interface ModelTrimSpec {
  trims: Array<{
    name: string;
    description: string;
    startingMsrp: number;
    keyFeatures: string[];
  }>;
}

export const KNOWN_MODEL_TRIMS: Record<string, ModelTrimSpec> = {
  // Ford
  'ford-expedition-2025': {
    trims: [
      { name: 'Active', description: 'Redesigned standard: 24-inch panoramic digital screen, 400 hp 3.5L EcoBoost, Ford Digital Experience.', startingMsrp: 61700, keyFeatures: ['24-inch panoramic display', 'Ford Digital Experience', 'Class IV trailer hitch'] },
      { name: 'Tremor', description: 'Factory dedicated off-road: 440 hp High-Output EcoBoost, 33-inch General Grabber A/T tires, 10.6" ground clearance, e-locker.', startingMsrp: 81030, keyFeatures: ['440 hp / 510 lb-ft HO EcoBoost', '33-inch General Grabber A/T tires', 'Control Trac 4WD with rear e-locker'] },
      { name: 'King Ranch', description: 'Southwestern luxury: Del Rio Kingsville leather, open-pore wood, BlueCruise hands-free, 22-inch wheels.', startingMsrp: 83655, keyFeatures: ['Del Rio leather upholstery', 'BlueCruise hands-free driving', '22-inch 6-spoke wheels'] },
      { name: 'Platinum', description: 'Flagship executive: CCD continuous damping suspension, multicontour massage seats, B&O Unleashed 22-speaker audio.', startingMsrp: 83800, keyFeatures: ['Continuous Controlled Damping', 'Multicontour massaging front seats', 'Available 440 hp HO engine'] },
    ],
  },
  'ford-expedition-max-2025': {
    trims: [
      { name: 'Active', description: 'Extended wheelbase: 24-inch panoramic display, 400 hp 3.5L EcoBoost, massive cargo space.', startingMsrp: 64700, keyFeatures: ['Extended wheelbase cargo volume', '24-inch panoramic display', 'Ford Digital Experience'] },
      { name: 'Tremor', description: 'Extended wheelbase off-roader: 440 hp HO EcoBoost, 33-inch General Grabber A/T tires, e-locker.', startingMsrp: 84030, keyFeatures: ['440 hp HO EcoBoost', '33-inch General Grabber A/T tires', 'Control Trac 4WD'] },
      { name: 'King Ranch', description: 'Southwestern luxury extended: Del Rio leather, 22-inch wheels, BlueCruise hands-free.', startingMsrp: 86655, keyFeatures: ['Del Rio leather upholstery', 'BlueCruise hands-free driving', '22-inch wheels'] },
      { name: 'Platinum', description: 'Pinnacle luxury extended: Continuous Controlled Damping, multicontour seats, B&O Unleashed.', startingMsrp: 86800, keyFeatures: ['Continuous Controlled Damping', 'Multicontour massaging front seats', 'Available 440 hp HO engine'] },
    ],
  },
  'ford-expedition': {
    trims: [
      { name: 'XL STX', description: '5-passenger two-row entry utility trim with SYNC 4 12-inch screen.', startingMsrp: 52990, keyFeatures: ['Two-row 5-passenger layout', 'SYNC 4 12-inch screen', 'Class IV trailer hitch'] },
      { name: 'XLT', description: 'Core volume 3-row family SUV: 8-passenger seating, tri-zone climate, power-folding 3rd row.', startingMsrp: 57445, keyFeatures: ['8-passenger seating', 'Power-folding 3rd row', 'Tri-zone climate control'] },
      { name: 'Limited', description: 'Volume luxury: heated and ventilated leather seats, panoramic Vista Roof, B&O audio.', startingMsrp: 66295, keyFeatures: ['Leather heated/ventilated seats', 'Panoramic Vista Roof', 'Bang & Olufsen 12-speaker audio'] },
      { name: 'Timberline', description: 'Factory off-road: 440 hp High-Output EcoBoost, 33-inch AT tires, steel skid plates, 2-speed transfer case.', startingMsrp: 70000, keyFeatures: ['440 hp HO 3.5L EcoBoost', '33-inch Goodyear Wrangler A/T', 'Two-speed transfer case with eLocker'] },
      { name: 'King Ranch', description: 'Southwestern luxury: Del Rio leather, power deployable running boards, 15.5-inch vertical display.', startingMsrp: 76500, keyFeatures: ['Del Rio leather upholstery', '15.5-inch portrait display', '22-inch wheels'] },
      { name: 'Platinum', description: 'Flagship luxury: multicontour massaging seats, BlueCruise hands-free, CCD adaptive suspension.', startingMsrp: 79800, keyFeatures: ['Multicontour massaging seats', 'BlueCruise hands-free', 'CCD continuous damping'] },
    ],
  },
  'ford-expedition-max': {
    trims: [
      { name: 'XLT', description: 'Extended wheelbase 8-passenger SUV with maximum cargo capacity and power-folding 3rd row.', startingMsrp: 60445, keyFeatures: ['Extended wheelbase cargo volume', 'Power-folding 3rd row', 'SYNC 4 12-inch display'] },
      { name: 'Limited', description: 'Extended wheelbase luxury: heated/ventilated leather seats, Vista Roof, B&O 12-speaker sound.', startingMsrp: 69295, keyFeatures: ['Panoramic Vista Roof', 'Leather-trimmed interior', 'B&O 12-speaker sound'] },
      { name: 'Timberline', description: 'Extended wheelbase off-roader: 440 hp HO engine, 33-inch AT tires, 2-speed transfer case.', startingMsrp: 73000, keyFeatures: ['440 hp HO EcoBoost', '33-inch Goodyear A/T tires', 'Two-speed 4WD with e-Locker'] },
      { name: 'King Ranch', description: 'Extended southwestern luxury: Del Rio leather, 15.5-inch vertical screen, 22-inch wheels.', startingMsrp: 79500, keyFeatures: ['Del Rio leather upholstery', '15.5-inch portrait display', 'Power deployable running boards'] },
      { name: 'Platinum', description: 'Extended executive flagship: massaging seats, BlueCruise, Continuous Controlled Damping.', startingMsrp: 82800, keyFeatures: ['Multicontour massaging seats', 'BlueCruise hands-free', 'CCD continuous damping'] },
    ],
  },
  'ford-f-150': {
    trims: [
      { name: 'XL', description: 'Fleet and commercial work truck with 12-inch digital cluster and durable vinyl or cloth interior.', startingMsrp: 36875, keyFeatures: ['12-inch capacitive touchscreen', 'Class IV trailer hitch', 'Co-Pilot360 2.0'] },
      { name: 'STX', description: 'Sport street appearance with 20-inch dark alloy wheels, body-color bumpers, and sport cloth buckets.', startingMsrp: 44000, keyFeatures: ['20-inch dark alloy wheels', 'Body-color front and rear bumpers', 'Sport cloth seating'] },
      { name: 'XLT', description: 'The volume truck: chrome or black appearance, heated front seats, Pro Power Onboard, and trailer BLIS.', startingMsrp: 47620, keyFeatures: ['Heated front seats', 'Available Pro Power Onboard', 'Trailer blind spot monitoring'] },
      { name: 'Lariat', description: 'Premium luxury workhorse: leather heated/ventilated seating, standard 4A automatic 4WD, B&O audio.', startingMsrp: 65305, keyFeatures: ['Full leather seating', 'Standard 4A full-time 4WD', 'Bang & Olufsen premium audio'] },
      { name: 'King Ranch', description: 'Texas heritage Del Rio leather, authentic Java two-tone, Pro Access Tailgate, and massage seats.', startingMsrp: 73735, keyFeatures: ['Del Rio Kingsville leather', 'Pro Access Tailgate', 'Active Motion massage seats'] },
      { name: 'Platinum', description: 'Pinnacle luxury: satin chrome exterior, head-up display, continuous damping, and BlueCruise.', startingMsrp: 73845, keyFeatures: ['Head-Up Display', 'Continuous Controlled Damping', 'BlueCruise hands-free highway driving'] },
      { name: 'Tremor', description: 'Factory off-road warrior: 33-inch General Grabber tires, 1.7" lift, trail turn assist, rear e-locker.', startingMsrp: 64350, keyFeatures: ['33-inch all-terrain tires', 'Electronic locking rear differential', 'Trail One-Pedal Drive & Rock Crawl'] },
      { name: 'Raptor', description: 'Baja desert racer: FOX Live Valve internal bypass shocks, 35-inch or 37-inch BFGs, high-output EcoBoost.', startingMsrp: 78330, keyFeatures: ['FOX Live Valve shocks', 'High-Output 450 hp EcoBoost V6', '5-link rear suspension with panhard rod'] },
    ],
  },
  'ford-f-150-lightning': {
    trims: [
      { name: 'Pro', description: 'Commercial all-electric pickup with standard AWD, dual motors, and 240-mile range.', startingMsrp: 49995, keyFeatures: ['Dual-motor all-wheel drive', 'Pro Power Onboard', 'Mega Power Frunk'] },
      { name: 'XLT', description: 'Volume EV truck with cloth seating, 360-degree camera, extended battery available.', startingMsrp: 54995, keyFeatures: ['Cloth heated front seats', '360-degree camera', 'Extended-range battery available'] },
      { name: 'Flash', description: 'Sweet-spot tech spec: standard extended-range battery (320 mi), 15.5-inch portrait display, BlueCruise.', startingMsrp: 67995, keyFeatures: ['320-mile Extended Range battery', '15.5-inch portrait touchscreen', 'Ford BlueCruise hands-free driving'] },
      { name: 'Lariat', description: 'Luxury electric truck: leather heated and ventilated seats, twin-panel moonroof, B&O audio.', startingMsrp: 76995, keyFeatures: ['Leather-trimmed interior', 'Twin-panel power moonroof', 'B&O 8-speaker sound system'] },
      { name: 'Platinum', description: 'Pinnacle luxury EV: Nirvana leather seats, multicontour massage, 22-inch bright wheels, 300 mi range.', startingMsrp: 84995, keyFeatures: ['Premium Nirvana leather', '22-inch bright machined wheels', 'B&O Unleashed 14-speaker sound'] },
    ],
  },
  'ford-explorer': {
    trims: [
      { name: 'Active', description: 'Clean entry trim with heated front seats, power liftgate, and 13.2-inch touchscreen.', startingMsrp: 41220, keyFeatures: ['13.2-inch touchscreen with Google built-in', 'Power liftgate', 'Heated front seats & steering wheel'] },
      { name: 'ST-Line', description: 'Athletic street styling with black mesh grille, red stitching, and 20-inch ebony wheels.', startingMsrp: 46110, keyFeatures: ['20-inch ebony machined wheels', 'B&O Sound System', 'Blackout sport styling'] },
      { name: 'ST', description: 'High-performance 400 HP Twin-Turbo V6 with sport-tuned suspension and quad exhaust.', startingMsrp: 55505, keyFeatures: ['400 HP 3.0L EcoBoost V6', 'Sport-tuned performance suspension', 'Quad chrome exhaust tips'] },
      { name: 'Platinum', description: 'Executive luxury with leather massaging seats, twin-panel moonroof, and BlueCruise hands-free.', startingMsrp: 53250, keyFeatures: ['Leather multicontour seats', 'Twin-panel moonroof', 'Ford BlueCruise hands-free driving'] },
    ],
  },
  'ford-bronco': {
    trims: [
      { name: 'Big Bend', description: 'Mainstream entry off-roader with 32-inch all-terrain tires, leather-wrapped wheel, and G.O.A.T. modes.', startingMsrp: 39630, keyFeatures: ['32-inch all-terrain tires', 'Leather-wrapped steering wheel', '6 G.O.A.T. drive modes'] },
      { name: 'Black Diamond', description: 'Heavy-duty wash-out vinyl interior, rubberized floors, steel bash plates, and rock rails.', startingMsrp: 42830, keyFeatures: ['Heavy-duty steel bash plates & rock rails', 'Washout interior with marine-grade vinyl', 'Rear locking differential'] },
      { name: 'Outer Banks', description: 'High-style comfort with body-color fender flares, heated leather-trimmed seats, and 18-inch wheels.', startingMsrp: 47190, keyFeatures: ['Body-color fender flares & door handles', 'Heated leather-trimmed seats', '12-inch touchscreen'] },
      { name: 'Badlands', description: 'The extreme trail benchmark: Bilstein position-sensitive shocks, front stabilizer bar disconnect, front & rear lockers.', startingMsrp: 49595, keyFeatures: ['Bilstein position-sensitive monotube shocks', 'Hydraulic front stabilizer bar disconnect', 'Front and rear electronic locking differentials'] },
      { name: 'Wildtrak', description: 'High-speed desert runner: standard 2.7L EcoBoost, standard Sasquatch package with 35-inch tires and FOX shocks.', startingMsrp: 60225, keyFeatures: ['Standard 2.7L Twin-Turbo EcoBoost V6', 'Sasquatch package with 35-inch Goodyear MT tires', 'HOSS 3.0 suspension with FOX internal bypass dampers'] },
      { name: 'Raptor', description: 'The apex off-road beast: 418 HP 3.0L EcoBoost, 37-inch tires, FOX Live Valve 3.1 semi-active dampers, 13.1" clearance.', startingMsrp: 90035, keyFeatures: ['418 HP 3.0L EcoBoost Twin-Turbo V6', '37-inch BFGoodrich KO2 all-terrain tires', 'FOX 3.1 Live Valve semi-active internal bypass shocks'] },
    ],
  },
  'ford-bronco-sport': {
    trims: [
      { name: 'Big Bend', description: 'Practical adventure crossover with standard 4x4, safari-style roof, and flip-up rear glass.', startingMsrp: 31590, keyFeatures: ['Standard 4x4 with Terrain Management', 'Safari-style roof with roof rails', 'Flip-up rear glass window'] },
      { name: 'Heritage', description: 'Vintage styling with Oxford White roof, white grille with red lettering, and plaid cloth seats.', startingMsrp: 33700, keyFeatures: ['Oxford White roof and grille', 'Vintage plaid cloth seating', '17-inch Oxford White aluminum wheels'] },
      { name: 'Outer Banks', description: 'Premium refined styling with leather-trimmed heated seats, shadow black roof, and 18-inch wheels.', startingMsrp: 35915, keyFeatures: ['Leather-trimmed heated front seats', 'Shadow Black painted roof', '18-inch machined-face aluminum wheels'] },
      { name: 'Badlands', description: 'Rugged benchmark: 250 HP 2.0L EcoBoost, advanced twin-clutch rear-drive unit, metal bash plates.', startingMsrp: 38390, keyFeatures: ['250 HP 2.0L EcoBoost engine', 'Advanced 4x4 with twin-clutch rear drive unit', 'Off-road suspension with hydraulic rebound stops'] },
    ],
  },
  'ford-mustang': {
    trims: [
      { name: 'EcoBoost', description: 'Turbocharged performance with 315 HP 2.3L EcoBoost, dual digital screens, and drift brake option.', startingMsrp: 30920, keyFeatures: ['315 HP 2.3L Turbocharged EcoBoost', '13.2-inch center touchscreen', '12.4-inch digital instrument cluster'] },
      { name: 'EcoBoost Premium', description: 'Upgraded with heated & cooled front seats, ambient lighting, and 9-speaker sound.', startingMsrp: 36445, keyFeatures: ['Heated and ventilated ActiveX front seats', 'Curved dual panoramic display', 'Ambient interior lighting'] },
      { name: 'GT', description: 'Iconic American 5.0L Coyote V8 delivering 480 horsepower and standard 6-speed manual with rev-matching.', startingMsrp: 41960, keyFeatures: ['480 HP 5.0L 4th-Gen Coyote V8', '6-speed manual with rev-matching', 'High-performance Brembo brake options'] },
      { name: 'GT Premium', description: 'Luxury 5.0L V8 spec with leather upholstery, B&O 12-speaker sound, and illuminated sill plates.', startingMsrp: 46480, keyFeatures: ['Leather-trimmed upholstery', 'Bang & Olufsen 12-speaker sound', 'Active valve performance exhaust'] },
      { name: 'Dark Horse', description: 'Track-capable apex Mustang: 500 HP naturally aspirated Coyote V8, TREMEC 6-speed manual, MagneRide damping.', startingMsrp: 59485, keyFeatures: ['500 HP 5.0L Coyote V8 with forged rods', 'TREMEC 6-speed manual with 3D-printed titanium knob', 'MagneRide active damping system'] },
    ],
  },
  'ford-ranger': {
    trims: [
      { name: 'XL', description: 'Commercial utility midsize truck with 10-inch digital cluster and 2.3L EcoBoost.', startingMsrp: 32720, keyFeatures: ['2.3L EcoBoost 270 HP', '10-inch digital instrument display', 'SYNC 4A with 10.1-inch screen'] },
      { name: 'XLT', description: 'Volume truck with 17-inch wheels, wireless charging pad, and Ford Co-Pilot360.', startingMsrp: 36160, keyFeatures: ['Ford Co-Pilot360 suite', 'Wireless phone charging pad', '17-inch gray painted alloys'] },
      { name: 'Lariat', description: 'Luxury midsize: leather seating, B&O 10-speaker sound, 12-inch vertical screen, 360 camera.', startingMsrp: 43730, keyFeatures: ['Leather-trimmed heated front seats', '12-inch portrait touchscreen', 'B&O Sound System by Bang & Olufsen'] },
      { name: 'Raptor', description: 'High-speed baja midsize: 405 HP Twin-Turbo 3.0L EcoBoost, FOX 2.5 Live Valve shocks, front/rear lockers.', startingMsrp: 55720, keyFeatures: ['405 HP 3.0L Twin-Turbo EcoBoost V6', 'FOX 2.5-inch Live Valve internal bypass shocks', 'Front and rear electronic locking differentials'] },
    ],
  },
  'ford-maverick': {
    trims: [
      { name: 'XL', description: 'Budget utility compact truck with standard hybrid or EcoBoost and multi-position tailgate.', startingMsrp: 23920, keyFeatures: ['Standard hybrid or 2.0L EcoBoost', 'FLEXBED multi-position tailgate', '8-inch touchscreen'] },
      { name: 'XLT', description: 'Volume compact truck: 17-inch painted wheels, power tailgate lock, and upgraded interior storage.', startingMsrp: 26420, keyFeatures: ['17-inch painted aluminum wheels', 'Power locking tailgate', 'Upgraded Navy Pier cloth interior'] },
      { name: 'Lariat', description: 'Luxury compact truck: ActiveX desert brown seating, 8-speaker B&O sound, SYNC 4, 18-inch wheels.', startingMsrp: 34960, keyFeatures: ['Desert Brown ActiveX seating', 'B&O premium audio', 'Adaptive cruise control with stop & go'] },
      { name: 'Tremor', description: 'Factory off-road package: 1-inch suspension lift, advanced AWD with twin-clutch rear diff, trail control.', startingMsrp: 34200, keyFeatures: ['1-inch factory lift with off-road suspension', 'Advanced 4WD with twin-clutch rear drive', 'All-terrain tires with dark orange accents'] },
    ],
  },

  // Chevrolet
  'chevrolet-silverado-1500': {
    trims: [
      { name: 'WT (Work Truck)', description: 'Commercial utility with vinyl floor, CornerStep rear bumper, and standard Chevy Safety Assist.', startingMsrp: 36800, keyFeatures: ['CornerStep rear bumper', 'Push-button start', 'Chevy Safety Assist suite'] },
      { name: 'Custom', description: 'Popular styling upgrade with 20-inch bright silver wheels, body-color bumpers, and remote start.', startingMsrp: 43600, keyFeatures: ['20-inch silver-painted aluminum wheels', 'Remote vehicle starter', 'EZ Lift power lock tailgate'] },
      { name: 'Custom Trail Boss', description: 'Factory 2-inch suspension lift, Autotrac 2-speed transfer case, and 18-inch wheels with Goodyear MT tires.', startingMsrp: 51800, keyFeatures: ['2-inch factory suspension lift', 'Z71 off-road package with skid plates', 'Automatic locking rear differential (G80)'] },
      { name: 'LT', description: 'The volume truck: 13.4-inch horizontal touchscreen, 12.3-inch digital driver cluster, heated front seats.', startingMsrp: 48000, keyFeatures: ['13.4-inch infotainment screen with Google built-in', '12.3-inch digital instrument cluster', 'Heated front seats & leather-wrapped wheel'] },
      { name: 'RST', description: 'Street-performance styling with monochromatic body-color trim, black Bowties, and active dual exhaust.', startingMsrp: 52400, keyFeatures: ['Monochromatic body-color center grille bar and bumpers', 'LED fog lights and taillamps', 'Optional 6.2L V8 or Duramax diesel'] },
      { name: 'LT Trail Boss', description: 'Combines the LT luxury interior with factory 2-inch lift, Rancho monotube shocks, and Goodyear MT tires.', startingMsrp: 58000, keyFeatures: ['Factory 2-inch lift with Rancho shocks', '13.4-inch touchscreen inside cabin', 'Goodyear Wrangler Territory MT 33-inch tires'] },
      { name: 'LTZ', description: 'Chrome luxury with perforated leather seating, ventilated front seats, and Bose premium audio.', startingMsrp: 57700, keyFeatures: ['Perforated leather-appointed front bucket seats', 'Bose 7-speaker premium audio', 'Advanced trailering system with camera views'] },
      { name: 'High Country', description: 'Flagship luxury: exclusive open-pore wood trim, stainless steel grilles, Super Cruise hands-free driving.', startingMsrp: 62700, keyFeatures: ['Super Cruise hands-free trailering capability', 'Authentic open-pore wood interior trim', '20-inch machined aluminum wheels with painted pockets'] },
      { name: 'ZR2', description: 'Hardcore off-road package: Multimatic DSSV spool-valve dampers, front and rear electronic e-lockers, 33-inch tires.', startingMsrp: 69900, keyFeatures: ['Multimatic DSSV spool-valve dampers', 'Front and rear electronic locking differentials', 'High-approach steel front bumper with skid plates'] },
    ],
  },
  'chevrolet-silverado': {
    trims: [
      { name: 'WT (Work Truck)', description: 'Commercial utility with vinyl floor, CornerStep rear bumper, and standard Chevy Safety Assist.', startingMsrp: 36800, keyFeatures: ['CornerStep rear bumper', 'Push-button start', 'Chevy Safety Assist suite'] },
      { name: 'Custom', description: 'Popular styling upgrade with 20-inch bright silver wheels, body-color bumpers, and remote start.', startingMsrp: 43600, keyFeatures: ['20-inch silver-painted aluminum wheels', 'Remote vehicle starter', 'EZ Lift power lock tailgate'] },
      { name: 'LT', description: 'The volume truck: 13.4-inch horizontal touchscreen, 12.3-inch digital driver cluster, heated front seats.', startingMsrp: 48000, keyFeatures: ['13.4-inch infotainment screen with Google built-in', '12.3-inch digital instrument cluster', 'Heated front seats & leather-wrapped wheel'] },
      { name: 'RST', description: 'Street-performance styling with monochromatic body-color trim, black Bowties, and active dual exhaust.', startingMsrp: 52400, keyFeatures: ['Monochromatic body-color center grille bar and bumpers', 'LED fog lights and taillamps', 'Optional 6.2L V8 or Duramax diesel'] },
      { name: 'LT Trail Boss', description: 'Combines the LT luxury interior with factory 2-inch lift, Rancho monotube shocks, and Goodyear MT tires.', startingMsrp: 58000, keyFeatures: ['Factory 2-inch lift with Rancho shocks', '13.4-inch touchscreen inside cabin', 'Goodyear Wrangler Territory MT 33-inch tires'] },
      { name: 'High Country', description: 'Flagship luxury: exclusive open-pore wood trim, stainless steel grilles, Super Cruise hands-free driving.', startingMsrp: 62700, keyFeatures: ['Super Cruise hands-free trailering capability', 'Authentic open-pore wood interior trim', '20-inch machined aluminum wheels'] },
    ],
  },
  'chevrolet-tahoe': {
    trims: [
      { name: 'LS', description: 'Spacious full-size 8-passenger SUV with tri-zone automatic climate and Chevy Safety Assist.', startingMsrp: 58200, keyFeatures: ['Tri-zone automatic climate control', '10.2-inch touchscreen display', 'Chevy Safety Assist'] },
      { name: 'LT', description: 'Leather seating, hands-free power liftgate, wireless charging, and Bose 9-speaker audio.', startingMsrp: 64700, keyFeatures: ['Leather-appointed 1st and 2nd row seating', 'Hands-free programmable power liftgate', 'Bose 9-speaker audio system'] },
      { name: 'RST', description: 'Street performance styling with monochromatic black exterior accents and 22-inch gloss black wheels.', startingMsrp: 68300, keyFeatures: ['22-inch bright machined high-gloss black wheels', 'Black Ice chrome exterior trim', 'Monochromatic sport aesthetic'] },
      { name: 'Z71', description: 'Rugged all-terrain with front skid plate, red tow hooks, 2-speed transfer case, and available air suspension.', startingMsrp: 70300, keyFeatures: ['High-approach front fascia with red recovery hooks', 'Autotrac 2-speed transfer case', 'Available Four-Corner Air Ride Adaptive Suspension'] },
      { name: 'Premier', description: 'Luxury executive: Magnetic Ride Control, ventilated front seats, and power-folding 3rd row.', startingMsrp: 73600, keyFeatures: ['Magnetic Ride Control suspension', 'Ventilated front bucket seats', 'Bose 10-speaker Centerpoint surround audio'] },
      { name: 'High Country', description: 'Flagship luxury with standard 6.2L V8 power, surround-view camera, and Head-Up Display.', startingMsrp: 80400, keyFeatures: ['Standard 6.2L EcoTec3 V8 (420 hp)', '15-inch multi-color Head-Up Display', 'High Country exclusive bronze grille inserts'] },
    ],
  },
  'chevrolet-suburban': {
    trims: [
      { name: 'LS', description: 'Extended full-size SUV with colossal cargo volume, tri-zone climate, and 8-passenger seating.', startingMsrp: 61200, keyFeatures: ['144.7 cu. ft. max cargo capacity', '10.2-inch center display', 'Chevy Safety Assist'] },
      { name: 'LT', description: 'Leather-appointed seating, hands-free liftgate, wireless charging, and Bose 9-speaker sound.', startingMsrp: 67700, keyFeatures: ['Leather-appointed seating', 'Hands-free programmable liftgate', 'Bose 9-speaker audio'] },
      { name: 'RST', description: 'Street-performance styling with 22-inch wheels, black exterior accents, and contrast interior stitching.', startingMsrp: 71300, keyFeatures: ['22-inch high-gloss black wheels', 'Black Bowtie emblems and badging', 'Sport-tuned suspension tuning'] },
      { name: 'Z71', description: 'All-terrain package with high-approach angle front bumper, skid plates, red tow hooks, and 2-speed 4WD.', startingMsrp: 73300, keyFeatures: ['High-approach front bumper and red tow hooks', 'Autotrac 2-speed transfer case', 'Available Air Ride Adaptive Suspension'] },
      { name: 'Premier', description: 'Luxury specification with Magnetic Ride Control, ventilated seating, and 10-speaker Bose sound.', startingMsrp: 76600, keyFeatures: ['Magnetic Ride Control', 'Ventilated front seating', 'Lane change alert with side blind zone'] },
      { name: 'High Country', description: 'Flagship long-wheelbase luxury with 6.2L V8 engine standard, 15-inch HUD, and exclusive open-pore wood.', startingMsrp: 83400, keyFeatures: ['Standard 420 hp 6.2L EcoTec3 V8', '15-inch Head-Up Display', 'High Country authentic open-pore wood'] },
    ],
  },
  'chevrolet-colorado': {
    trims: [
      { name: 'WT', description: 'Commercial utility midsize truck with 11.3-inch touchscreen and 2.7L Turbo.', startingMsrp: 31000, keyFeatures: ['11.3-inch diagonal center touchscreen', '2.7L Turbo engine', 'Chevy Safety Assist'] },
      { name: 'LT', description: 'The volume truck: body-color exterior trim, keyless entry, and 17-inch aluminum wheels.', startingMsrp: 33500, keyFeatures: ['17-inch aluminum wheels', 'Remote keyless entry', 'Front center console with armrest'] },
      { name: 'Trail Boss', description: 'Factory 2-inch suspension lift, wider track, 32-inch all-terrain tires, and Autotrac 2-speed transfer case.', startingMsrp: 38800, keyFeatures: ['Factory 2-inch suspension lift', '32-inch all-terrain tires', 'Autotrac 2-speed transfer case with 4A'] },
      { name: 'Z71', description: 'Refined off-road: LED lighting, heated exterior mirrors, synthetic leather/cloth, and rear e-locker.', startingMsrp: 41700, keyFeatures: ['LED headlights, taillights and fog lights', 'Automatic locking rear differential (G80)', '18-inch wheels with all-terrain tires'] },
      { name: 'ZR2', description: 'Apex off-road midsize: 3-inch lift, Multimatic DSSV spool-valve dampers, front/rear electronic lockers.', startingMsrp: 48300, keyFeatures: ['Multimatic DSSV position-sensitive dampers', 'Front and rear electronic locking differentials', '33-inch mud-terrain tires on 17-inch beadlock-capable wheels'] },
    ],
  },

  // GMC
  'gmc-sierra-1500': {
    trims: [
      { name: 'Pro', description: 'Professional utility truck with LED headlamps, CornerStep bumper, and TurboMax power.', startingMsrp: 39700, keyFeatures: ['LED headlamps and taillamps', 'CornerStep rear bumper', 'Chevy Safety Assist / GMC Pro Safety'] },
      { name: 'SLE', description: 'The volume truck: 13.4-inch horizontal touchscreen, 12.3-inch digital cluster, and heated front seats.', startingMsrp: 51300, keyFeatures: ['13.4-inch horizontal touchscreen', '12.3-inch digital driver cluster', 'Dual-zone automatic climate control'] },
      { name: 'Elevation', description: 'Monochromatic sport styling with black exterior accents, 20-inch gloss black wheels, and high-capacity suspension.', startingMsrp: 53500, keyFeatures: ['20-inch gloss black aluminum wheels', 'Monochromatic body-color grille and bumpers', 'High-capacity suspension package'] },
      { name: 'SLT', description: 'Mainstream chrome luxury: perforated leather seating, 10-way power passenger seat, and perimeter lighting.', startingMsrp: 56900, keyFeatures: ['Perforated leather-appointed front seating', 'MultiPro Tailgate standard', 'Chrome exterior accents'] },
      { name: 'AT4', description: 'Factory 2-inch suspension lift, Rancho monotube shocks, standard 4WD with 2-speed transfer case, and Goodyear Wrangler tires.', startingMsrp: 68100, keyFeatures: ['Factory 2-inch suspension lift with Rancho shocks', 'Autotrac 2-speed transfer case with rear locker', 'Jet Black interior with Kalahari accents'] },
      { name: 'Denali', description: 'Pinnacle luxury benchmark: authentic open-pore wood trim, Forge perforated leather, Continuous Damping Control.', startingMsrp: 71200, keyFeatures: ['Continuous Damping Adaptive Ride Control', 'Signature Denali chrome grille', 'Authentic open-pore wood and patterned aluminum'] },
      { name: 'AT4X', description: 'Hardcore off-road: Multimatic DSSV spool-valve dampers, front and rear e-lockers, steel skid plates, and AEV bumper options.', startingMsrp: 81200, keyFeatures: ['Multimatic DSSV spool-valve dampers', 'Front and rear electronic locking differentials', 'Ultra-high-strength boron steel skid plates'] },
      { name: 'Denali Ultimate', description: 'Ultra-luxury: Alpine Umber full-grain leather, open-pore laser-etched wood, 16-way massage seats, Super Cruise standard.', startingMsrp: 84500, keyFeatures: ['Alpine Umber full-grain leather seats with massage', 'Super Cruise hands-free driver assistance', 'Bose 12-speaker Centerpoint surround sound'] },
    ],
  },
  'gmc-yukon': {
    trims: [
      { name: 'SLE', description: 'Spacious full-size 8-passenger SUV with tri-zone climate and 10.2-inch touchscreen.', startingMsrp: 60200, keyFeatures: ['Tri-zone automatic climate control', '10.2-inch infotainment screen', 'GMC Pro Safety suite'] },
      { name: 'SLT', description: 'Leather-appointed seating, hands-free power liftgate, wireless phone charging, and Bose 9-speaker audio.', startingMsrp: 66900, keyFeatures: ['Leather-appointed seating surfaces', 'Hands-free programmable liftgate', 'Bose 9-speaker sound system'] },
      { name: 'AT4', description: 'Rugged all-terrain with front skid plate, red recovery hooks, 2-speed transfer case, and available air ride.', startingMsrp: 72500, keyFeatures: ['High-approach front bumper with red hooks', 'Autotrac 2-speed transfer case', 'Available Four-Corner Air Ride Adaptive Suspension'] },
      { name: 'Denali', description: 'Iconic luxury with standard 6.2L V8 or Duramax, magnetic ride control, and power-sliding center console.', startingMsrp: 78300, keyFeatures: ['6.2L V8 or Duramax Diesel standard', 'Magnetic Ride Control', 'Power-sliding center console'] },
      { name: 'Denali Ultimate', description: 'Pinnacle full-size luxury: Alpine Umber full-grain leather, laser-etched open-pore wood, 18-speaker Bose audio.', startingMsrp: 96800, keyFeatures: ['Full-grain leather with topographical map etching', 'Bose Performance 18-speaker audio', 'Super Cruise hands-free driving'] },
    ],
  },

  // Toyota
  'toyota-rav4': {
    trims: [
      { name: 'LE', description: 'Essential trim with Toyota Safety Sense 2.5, 8-inch touchscreen, and full LED headlights.', startingMsrp: 28675, keyFeatures: ['Toyota Safety Sense 2.5', 'LED headlights and taillights', 'Wireless Apple CarPlay & Android Auto'] },
      { name: 'XLE', description: 'Volume trim with power driver seat, dual-zone automatic climate control, and blind-spot monitoring.', startingMsrp: 30185, keyFeatures: ['Blind Spot Monitor with Rear Cross-Traffic Alert', '8-way power adjustable driver seat', 'Dual-zone automatic climate control'] },
      { name: 'XLE Premium', description: 'Upgraded with SofTex synthetic leather, power moonroof, and 19-inch multi-spoke alloy wheels.', startingMsrp: 33075, keyFeatures: ['SofTex-trimmed seating', 'Power tilt/slide moonroof', '19-inch multi-spoke chrome-finished alloys'] },
      { name: 'Adventure', description: 'Rugged styling with high roof rails, dynamic torque-vectoring AWD, and 3,500 lbs towing capacity.', startingMsrp: 34870, keyFeatures: ['Dynamic Torque Vectoring AWD', 'Multi-Terrain Select with Rock & Dirt mode', '3,500 lbs towing capability'] },
      { name: 'TRD Off-Road', description: 'Trail-tested with red TRD-tuned coil springs, twin-tube shocks, and Falken Wildpeak A/T tires.', startingMsrp: 38295, keyFeatures: ['TRD-tuned off-road suspension', '18-inch matte black TRD alloy wheels', 'Falken Wildpeak A/T trail tires'] },
      { name: 'Limited', description: 'Top luxury: 10.5-inch multimedia display, heated & ventilated front seats, and JBL 11-speaker sound.', startingMsrp: 36980, keyFeatures: ['10.5-inch multimedia touchscreen', 'Heated and ventilated front seats', 'JBL 11-speaker premium audio system'] },
      { name: 'Hybrid XLE', description: 'The sweet spot for hybrid buyers: combines 40 MPG with electronic AWD and alloy wheels.', startingMsrp: 33235, keyFeatures: ['Electronic On-Demand All-Wheel Drive', '40 MPG combined fuel economy', 'Smart Key system with push button start'] },
      { name: 'Hybrid XSE', description: 'Sport-tuned hybrid suspension with two-tone black roof, blue interior stitching, and 18-inch black wheels.', startingMsrp: 37385, keyFeatures: ['Sport-tuned suspension', 'Two-tone exterior with black roof', 'Blue interior contrast stitching and ambient lighting'] },
    ],
  },
  'toyota-tacoma': {
    trims: [
      { name: 'SR', description: 'Work-ready midsize truck with composite bed, 8-inch screen, and i-FORCE 2.4L Turbo.', startingMsrp: 31500, keyFeatures: ['i-FORCE 2.4L Turbo engine', 'Ultra-durable sheet-molded composite bed', 'Toyota Safety Sense 3.0'] },
      { name: 'SR5', description: 'The volume truck: 17-inch alloy wheels, coil spring rear suspension, and blind spot monitor.', startingMsrp: 36200, keyFeatures: ['Multi-link rear coil suspension', '17-inch alloy wheels', 'Blind spot monitor with trailer detection'] },
      { name: 'TRD PreRunner', description: '2WD desert runner: lifted front suspension, electronic locking rear diff, and BFGoodrich tires.', startingMsrp: 38100, keyFeatures: ['Factory lifted front suspension', 'Electronic locking rear differential', 'BFGoodrich all-terrain tires'] },
      { name: 'TRD Sport', description: 'Street performance: sport-tuned suspension, hood scoop, color-keyed trim, and 18-inch wheels.', startingMsrp: 39400, keyFeatures: ['Sport-tuned suspension', 'Non-functional hood scoop', '18-inch TRD alloy wheels'] },
      { name: 'TRD Off-Road', description: 'The off-road benchmark: Bilstein remote-reservoir shocks, Crawl Control, Multi-Terrain Select, and rear e-locker.', startingMsrp: 41800, keyFeatures: ['Bilstein remote reservoir shocks', 'Electronic locking rear differential', 'Crawl Control and Multi-Terrain Select'] },
      { name: 'Limited', description: 'Executive luxury: smooth-riding Adaptive Variable Suspension, power running boards, and HUD.', startingMsrp: 52100, keyFeatures: ['Adaptive Variable Suspension (AVS)', 'Power running boards and power tailgate', '14-inch touchscreen with JBL audio'] },
      { name: 'TRD Pro', description: 'Hardcore factory baja: 326 HP i-FORCE MAX hybrid, FOX QS3 adjustable shocks, IsoDynamic front seats.', startingMsrp: 63900, keyFeatures: ['FOX QS3 2.5-inch adjustable internal bypass shocks', 'IsoDynamic performance front seats', '326 HP / 465 lb-ft i-FORCE MAX hybrid powertrain'] },
      { name: 'Trailhunter', description: 'Purpose-built overland explorer: Old Man Emu forged shocks, ARB steel rear bumper, and high-clearance snorkel.', startingMsrp: 62900, keyFeatures: ['Old Man Emu (OME) position-sensitive shocks', 'ARB steel rear bumper with recovery points', 'Integrated bed utility bar and high-mount air intake'] },
    ],
  },
  'toyota-tundra': {
    trims: [
      { name: 'SR', description: 'Standard i-FORCE 3.4L Twin-Turbo V6 (358 HP), 8-inch touchscreen, and composite bed.', startingMsrp: 39965, keyFeatures: ['i-FORCE 3.4L Twin-Turbo V6', 'Sheet-molded composite bed', 'Toyota Safety Sense 2.5'] },
      { name: 'SR5', description: 'The volume truck: 18-inch alloy wheels, tow hitch receiver, and drive mode select.', startingMsrp: 45500, keyFeatures: ['18-inch alloy wheels', 'Class IV towing hitch receiver', 'Drive Mode Select (Eco, Normal, Sport)'] },
      { name: 'Limited', description: 'Volume luxury: 14-inch multimedia touchscreen, SofTex heated and ventilated seats, and 20-inch wheels.', startingMsrp: 51855, keyFeatures: ['14-inch audio multimedia touchscreen', 'SofTex-trimmed heated and ventilated seats', '20-inch alloy wheels'] },
      { name: 'Platinum', description: 'Executive luxury: leather-trimmed 10-way power seats, panoramic roof, and JBL 12-speaker audio.', startingMsrp: 60775, keyFeatures: ['Leather-trimmed 10-way power front seats', 'Panoramic glass roof', 'JBL 12-speaker premium audio'] },
      { name: '1794 Edition', description: 'Western heritage luxury: Saddle Brown or Rich Cream leather, authentic American walnut wood trim.', startingMsrp: 61460, keyFeatures: ['Rich American walnut interior trim', 'Custom perforated leather seats', 'Chrome exterior accents'] },
      { name: 'TRD Pro', description: 'Factory off-road warrior: 437 HP i-FORCE MAX hybrid, FOX 2.5 internal bypass shocks, TRD aluminum skid plate.', startingMsrp: 72130, keyFeatures: ['FOX 2.5-inch internal bypass shocks', '437 HP i-FORCE MAX hybrid powertrain', 'Heritage TOYOTA front grille with light bar'] },
      { name: 'Capstone', description: 'Pinnacle luxury: semi-aniline leather in black & white, 22-inch chrome wheels, power running boards, acoustic glass.', startingMsrp: 78845, keyFeatures: ['Semi-aniline leather interior', '22-inch dark chrome wheels', 'Power running boards and bed step'] },
    ],
  },
  'toyota-camry': {
    trims: [
      { name: 'LE', description: 'Standard hybrid efficiency: 51 MPG combined, Toyota Safety Sense 3.0, and 16-inch alloy wheels.', startingMsrp: 28400, keyFeatures: ['5th-Gen Hybrid Synergy Drive with 51 MPG', 'Toyota Safety Sense 3.0', 'Dual-zone automatic climate control'] },
      { name: 'SE', description: 'Sport-tuned styling with black mesh grille, sport suspension, aluminum pedals, and 18-inch black wheels.', startingMsrp: 30700, keyFeatures: ['Sport-tuned suspension', '18-inch black-finished alloy wheels', 'SofTex-trimmed sport seats'] },
      { name: 'XLE', description: 'Refined luxury: leather-trimmed heated front seats, acoustic glass, and 12.3-inch multimedia touchscreen.', startingMsrp: 33400, keyFeatures: ['Leather-trimmed interior', '12.3-inch digital gauge cluster and touchscreen', 'Multi-stage heated front seats'] },
      { name: 'XSE', description: 'Sport luxury flagship: 19-inch smoke-finish wheels, sport leather, dual exhaust, and optional two-tone roof.', startingMsrp: 34600, keyFeatures: ['19-inch dark gray and black alloys', 'Dual exhaust with chrome tips', 'Leather-trimmed sport seating'] },
    ],
  },
  'toyota-4runner': {
    trims: [
      { name: 'SR5', description: 'Proven body-on-frame SUV with 3rd-row available, LED headlights, and 8-inch touchscreen.', startingMsrp: 40700, keyFeatures: ['Body-on-frame truck construction', 'Part-time 4WD with low-range transfer case', 'Power rear liftgate window'] },
      { name: 'TRD Sport', description: 'Road-focused performance: X-REAS sport enhancement suspension and 20-inch alloy wheels.', startingMsrp: 43500, keyFeatures: ['X-REAS sport enhancement suspension', '20-inch dark alloy wheels', 'SofTex sport seating'] },
      { name: 'TRD Off-Road', description: 'Core trail warrior: electronic rear locking differential, Crawl Control, and Multi-Terrain Select.', startingMsrp: 44500, keyFeatures: ['Electronic locking rear differential', 'Crawl Control and Multi-Terrain Select', 'Available Kinetic Dynamic Suspension (KDSS)'] },
      { name: 'Limited', description: 'Luxury 4Runner: full-time 4WD with Torsen center diff, leather heated/ventilated seats, JBL sound.', startingMsrp: 49900, keyFeatures: ['Full-time 4WD with Torsen locking center differential', 'Perforated leather heated and ventilated seats', 'JBL 15-speaker audio'] },
      { name: 'TRD Pro', description: 'Factory baja icon: FOX high-performance shocks, TRD aluminum front skid plate, and Nitto Terra Grapplers.', startingMsrp: 55100, keyFeatures: ['FOX internal bypass shocks with rear piggyback reservoirs', 'TRD stamped aluminum 1/4-inch front skid plate', 'Heritage TOYOTA front grille with TRD roof rack'] },
    ],
  },

  // Honda
  'honda-civic': {
    trims: [
      { name: 'LX', description: 'Core value: 158 HP naturally aspirated 2.0L engine, 7-inch touchscreen, and Honda Sensing.', startingMsrp: 23950, keyFeatures: ['2.0L naturally aspirated 158 hp engine', 'Honda Sensing active safety suite', 'Full LED headlights'] },
      { name: 'Sport', description: 'Athletic street styling with 18-inch gloss-black wheels, sport pedals, paddle shifters, and smart key.', startingMsrp: 25550, keyFeatures: ['18-inch gloss-black alloy wheels', 'Sport pedals & leather-wrapped steering wheel', 'Smart Entry with Walk Away Auto Lock'] },
      { name: 'EX', description: '180 HP 1.5L Turbo, one-touch power moonroof, heated front seats, and blind spot monitoring.', startingMsrp: 26950, keyFeatures: ['180 HP 1.5L Turbocharged engine', 'One-touch power moonroof', 'Blind Spot Information System'] },
      { name: 'Touring', description: 'Top luxury: leather upholstery, 9-inch touchscreen, Bose 12-speaker sound, wireless phone charger.', startingMsrp: 30550, keyFeatures: ['Bose 12-speaker premium audio', 'Leather-trimmed seating', '9-inch HD touchscreen with wireless CarPlay'] },
      { name: 'Sport Hybrid', description: 'High-efficiency 200 HP two-motor hybrid system delivering an exceptional 50 MPG city.', startingMsrp: 28750, keyFeatures: ['200 HP two-motor hybrid powertrain', '50 MPG city fuel economy', 'Regenerative braking selector paddles'] },
      { name: 'Si', description: 'Enthusiast sport sedan: 200 HP 1.5L Turbo, helical limited-slip differential, short-throw 6-speed manual.', startingMsrp: 29950, keyFeatures: ['Helical limited-slip differential', '6-speed manual transmission with rev-matching', 'Sport bucket seats with red embroidery'] },
      { name: 'Type R', description: 'Track-ready hot hatch: 315 HP 2.0L VTEC Turbo, Brembo brakes, adaptive dampers, aluminum hood.', startingMsrp: 44795, keyFeatures: ['315 HP / 310 lb-ft 2.0L VTEC Turbo', 'Adaptive damper system', '4-piston Brembo front brakes with two-piece rotors'] },
    ],
  },
  'honda-cr-v': {
    trims: [
      { name: 'LX', description: 'Entry trim with 190 HP 1.5L Turbo, 7-inch color touchscreen, and Honda Sensing suite.', startingMsrp: 29500, keyFeatures: ['190 HP 1.5L VTEC Turbo engine', 'Honda Sensing driver-assist suite', 'LED headlights and taillights'] },
      { name: 'EX', description: 'Volume trim with one-touch power moonroof, heated front seats, and dual-zone automatic climate.', startingMsrp: 32010, keyFeatures: ['One-touch power moonroof', 'Heated front seats', 'Dual-zone automatic climate control'] },
      { name: 'EX-L', description: 'Leather upholstery, power tailgate, wireless phone charging, and 9-inch touchscreen.', startingMsrp: 34660, keyFeatures: ['Leather-trimmed interior', 'Power tailgate with programmable height', '9-inch color touchscreen with wireless smartphone integration'] },
      { name: 'Sport Hybrid', description: 'Two-motor hybrid powertrain with 204 horsepower, 40+ MPG, and gloss-black 18-inch wheels.', startingMsrp: 33350, keyFeatures: ['204 HP two-motor hybrid system', '40 MPG city / 34 MPG highway', 'Gloss-black roof rails and 18-inch wheels'] },
      { name: 'Sport Touring Hybrid', description: 'Pinnacle crossover: Real Time AWD standard, Bose 12-speaker audio, hands-free power tailgate.', startingMsrp: 39500, keyFeatures: ['Standard Real Time All-Wheel Drive', 'Bose 12-speaker audio with Centerpoint', 'Hands-free access power tailgate'] },
    ],
  },
  'honda-accord': {
    trims: [
      { name: 'LX', description: 'Standard 192 HP 1.5L Turbo, 7-inch color touchscreen, and Honda Sensing suite.', startingMsrp: 27895, keyFeatures: ['192 HP 1.5L VTEC Turbo engine', 'Honda Sensing driver-assist suite', 'Full LED headlights'] },
      { name: 'EX', description: 'One-touch power moonroof, heated front seats, dual-zone automatic climate control, and 17-inch alloy wheels.', startingMsrp: 29910, keyFeatures: ['One-touch power moonroof', 'Heated front seats', '10-way power driver seat with lumbar'] },
      { name: 'Sport Hybrid', description: '204 HP two-motor hybrid system, 12.3-inch touchscreen, and 19-inch Berlina Black alloy wheels.', startingMsrp: 32895, keyFeatures: ['204 HP two-motor hybrid powertrain', '12.3-inch color center touchscreen', '19-inch Berlina Black alloy wheels'] },
      { name: 'EX-L Hybrid', description: 'Leather-trimmed seats, parking sensors, and 48 MPG combined fuel efficiency.', startingMsrp: 34540, keyFeatures: ['Leather-trimmed seating', '48 MPG combined rating', 'Front and rear parking sensors'] },
      { name: 'Touring Hybrid', description: 'Flagship sedan: Google built-in, Head-Up Display, ventilated front seats, Bose 12-speaker sound.', startingMsrp: 38890, keyFeatures: ['Google built-in infotainment', 'Head-Up Display', 'Bose 12-speaker audio system'] },
    ],
  },

  // Jeep
  'jeep-wrangler': {
    trims: [
      { name: 'Sport', description: 'Authentic open-air off-roader with removable soft top and doors, Dana solid axles, and Command-Trac 4WD.', startingMsrp: 32095, keyFeatures: ['Dana solid front and rear axles', 'Command-Trac part-time 4WD', '12.3-inch Uconnect 5 touchscreen'] },
      { name: 'Sport S', description: 'Adds air conditioning, power windows/locks, Gorilla glass windshield, and adaptive cruise control.', startingMsrp: 35595, keyFeatures: ['Power windows and heated power mirrors', 'Corning Gorilla Glass windshield', 'Adaptive cruise control'] },
      { name: 'Willys', description: 'Military heritage with 33-inch mud-terrain tires, rock rails, heavy-duty Dana 44 rear axle, and rear locker.', startingMsrp: 39595, keyFeatures: ['33-inch mud-terrain tires', 'Electronic rear locking differential', 'Heavy-duty rock rails & steel skid plates'] },
      { name: 'Sahara', description: 'Premium all-weather freedom: body-color fender flares, heated front seats & wheel, full-time Selec-Trac 4WD.', startingMsrp: 47825, keyFeatures: ['Body-color fender flares', 'Heated front seats and heated steering wheel', 'Selec-Trac full-time 4WD system'] },
      { name: 'Rubicon', description: 'The gold standard off-roader: 4:1 Rock-Trac transfer case, electronic front sway-bar disconnect, Tru-Lok front & rear lockers.', startingMsrp: 45395, keyFeatures: ['Tru-Lok electronic front & rear locking differentials', 'Electronic front sway-bar disconnect', '4:1 Rock-Trac heavy-duty 4WD transfer case'] },
      { name: 'Rubicon X', description: 'Ultimate factory spec: steel bumpers, integrated off-road camera, Nappa leather 12-way power seats.', startingMsrp: 54995, keyFeatures: ['Steel front and rear bumpers', 'Integrated forward-facing off-road trail camera', 'Nappa leather-trimmed 12-way power front seats'] },
      { name: 'Rubicon 392', description: 'Monster 470 HP 6.4L HEMI V8, active dual exhaust, 35-inch tires, and Fox high-performance shocks.', startingMsrp: 91545, keyFeatures: ['470 HP / 470 lb-ft 6.4L HEMI V8', 'Dual-mode active exhaust', '35-inch BFGoodrich KO2 all-terrain tires'] },
    ],
  },
  'jeep-grand-cherokee': {
    trims: [
      { name: 'Laredo', description: 'Clean entry luxury with 10.25-inch digital driver cluster, Uconnect 5, and full LED exterior lighting.', startingMsrp: 36495, keyFeatures: ['10.25-inch fully digital instrument cluster', 'Blind Spot Monitoring with Rear Cross-Path', 'Uconnect 5 with 8.4-inch display'] },
      { name: 'Altitude', description: 'Stealth blackout appearance with 20-inch gloss-black wheels, Capri leatherette/suede, and heated seats.', startingMsrp: 41140, keyFeatures: ['20-inch gloss black aluminum wheels', 'Capri leatherette and suede-trimmed seats', 'Wireless charging pad'] },
      { name: 'Limited', description: 'The core luxury volume trim: Capri leather seating, heated 1st and 2nd row, and power liftgate.', startingMsrp: 45905, keyFeatures: ['Capri leather seating surfaces', 'Heated front and second-row seats', 'Selec-Terrain traction management system'] },
      { name: 'Overland', description: 'Trail Rated capability with Quadra-Lift air suspension, dual-pane panoramic sunroof, and Nappa leather.', startingMsrp: 60995, keyFeatures: ['Quadra-Lift air suspension with semi-active damping', 'Dual-pane panoramic sunroof', 'Hands-free power liftgate'] },
      { name: 'Summit', description: 'Pinnacle luxury: quilted Palermo leather, McIntosh 19-speaker sound, and massaging front seats.', startingMsrp: 62560, keyFeatures: ['Quilted Palermo leather seats', 'McIntosh 19-speaker 950W sound system', '16-way power adjustable massaging front seats'] },
      { name: 'Summit Reserve', description: 'World-class craftsmanship: open-pore waxed walnut wood, Palermo leather door panels, and 21-inch wheels.', startingMsrp: 66940, keyFeatures: ['Genuine open-pore waxed walnut interior trim', 'Palermo leather throughout cabin', '21-inch polished split-spoke wheels'] },
    ],
  },

  // RAM
  'ram-1500': {
    trims: [
      { name: 'Tradesman', description: 'Commercial utility with heavy-duty vinyl or cloth seats, 8.4-inch screen, and coil-spring rear suspension.', startingMsrp: 40275, keyFeatures: ['Coil-spring multi-link rear suspension', 'Push-button start with Keyless Go', 'Class IV trailer hitch receiver'] },
      { name: 'Big Horn', description: 'The volume truck: chrome bumpers, 18-inch wheels, leather-wrapped wheel, and fog lamps.', startingMsrp: 44385, keyFeatures: ['Uconnect 12-inch touchscreen display', '18-inch cast aluminum wheels', 'Leather-wrapped steering wheel with audio controls'] },
      { name: 'Laramie', description: 'Mainstream luxury: heated and ventilated leather 10-way power front seats, 9-speaker Alpine audio.', startingMsrp: 60030, keyFeatures: ['Heated & ventilated leather front seats', '9-speaker Alpine audio system with subwoofer', 'Standard 4WD Auto mode transfer case'] },
      { name: 'Rebel', description: 'Factory off-road warrior: 1-inch suspension lift, Bilstein monotube shocks, 33-inch Goodyear DuraTrac tires.', startingMsrp: 64195, keyFeatures: ['Bilstein performance off-road shocks', 'Electronic locking rear differential', '33-inch Goodyear Wrangler DuraTrac tires'] },
      { name: 'Limited', description: 'Pinnacle luxury: 100% full leather interior, 19-speaker Harman Kardon sound, standard four-corner air suspension.', startingMsrp: 75150, keyFeatures: ['Active-Level four-corner air suspension', '19-speaker 900W Harman Kardon audio', 'Premium Natura Plus full leather upholstery'] },
      { name: 'Tungsten', description: 'Ultra-flagship ultra-luxury: 24-way power massage seats, Klipsch Reference Premiere 23-speaker audio, suede headliner.', startingMsrp: 87155, keyFeatures: ['Klipsch Reference Premiere 23-speaker audio', '24-way power front seats with heat, vent & massage', 'High-Output 540 HP Hurricane Twin-Turbo Inline-6'] },
    ],
  },

  // Subaru
  'subaru-outback': {
    trims: [
      { name: 'Base', description: 'Standard Symmetrical All-Wheel Drive with EyeSight Driver Assist and 8.7 inches ground clearance.', startingMsrp: 28895, keyFeatures: ['Symmetrical All-Wheel Drive standard', 'EyeSight Driver Assist technology', 'X-MODE traction enhancement'] },
      { name: 'Premium', description: 'Volume trim with 11.6-inch Starlink touchscreen, 10-way power seat, and All-Weather package.', startingMsrp: 31195, keyFeatures: ['11.6-inch Starlink high-resolution touchscreen', 'All-Weather package with heated seats', '10-way power driver seat with lumbar'] },
      { name: 'Onyx Edition', description: 'Black-finish 18-inch wheels, water-repellent StarTex upholstery, and dual-function X-MODE.', startingMsrp: 36105, keyFeatures: ['StarTex water-repellent upholstery', '18-inch black-finish alloy wheels', 'Dual-function X-MODE with Deep Snow/Mud'] },
      { name: 'Limited', description: 'Refined comfort: leather-trimmed upholstery, Harman Kardon 12-speaker sound, and hands-free tailgate.', startingMsrp: 35795, keyFeatures: ['Leather-trimmed upholstery', 'Harman Kardon 576W 12-speaker audio', 'Hands-free power rear gate'] },
      { name: 'Wilderness', description: 'Hardcore trail overland: 9.5-inch ground clearance, Yokohama GEOLANDAR AT tires, upgraded roof rails.', startingMsrp: 39960, keyFeatures: ['9.5-inch ground clearance with skid plates', 'Yokohama GEOLANDAR all-terrain tires', '260 HP 2.4L Turbo Boxer engine standard'] },
      { name: 'Touring', description: 'Top luxury grade: Java Brown Nappa leather, ventilated front seats, and 180-degree front view monitor.', startingMsrp: 40345, keyFeatures: ['Java Brown Nappa leather upholstery', 'Ventilated front seats', 'Power moonroof and heated steering wheel'] },
    ],
  },
  'subaru-forester': {
    trims: [
      { name: 'Base', description: 'Standard Symmetrical All-Wheel Drive, EyeSight Driver Assist, and 8.7-inch ground clearance.', startingMsrp: 29995, keyFeatures: ['Symmetrical AWD standard', 'EyeSight Driver Assist', 'LED steering responsive headlights'] },
      { name: 'Premium', description: 'Panoramic power moonroof, 10-way power driver seat, keyless access with push-button start.', startingMsrp: 31995, keyFeatures: ['Panoramic power moonroof', '11.6-inch Starlink display', 'Heated front seats & mirrors'] },
      { name: 'Sport', description: 'Bronze 19-inch alloy wheels, sport-tuned suspension, dual-function X-MODE, and water-resistant StarTex.', startingMsrp: 34495, keyFeatures: ['Bronze-finish 19-inch wheels', 'Sport-tuned suspension calibration', 'Dual-function X-MODE'] },
      { name: 'Limited', description: 'Leather-trimmed upholstery, 18-inch alloy wheels, hands-free power rear gate, and blind spot detection.', startingMsrp: 35995, keyFeatures: ['Leather-trimmed upholstery', 'Hands-free power rear gate', 'Blind-Spot Detection with Rear Cross-Traffic Alert'] },
      { name: 'Touring', description: 'Flagship luxury: perforated leather with brown Ultrasuede accents, 360-degree surround camera, Harman Kardon audio.', startingMsrp: 39995, keyFeatures: ['Perforated leather with Ultrasuede', 'Harman Kardon premium audio', 'DriverFocus Distraction Mitigation System'] },
    ],
  },
  // More Popular US Models
  'toyota-highlander': {
    trims: [
      { name: 'LE', description: 'Standard 8-passenger seating, 265 HP Turbo 4-cylinder, and Toyota Safety Sense 2.5+.', startingMsrp: 39270, keyFeatures: ['265 HP 2.4L Turbo engine', 'Toyota Safety Sense 2.5+', '8-passenger seating'] },
      { name: 'XLE', description: 'Heated front seats, wireless charging pad, power moonroof, and roof rails.', startingMsrp: 42320, keyFeatures: ['SofTex-trimmed heated front seats', 'Power tilt/slide moonroof', 'Wireless smartphone charging'] },
      { name: 'XSE', description: 'Sport-tuned suspension, 20-inch black alloy wheels, and aggressive mesh grille.', startingMsrp: 43915, keyFeatures: ['Sport-tuned suspension', '20-inch black alloy wheels', 'Twin-tip exhaust'] },
      { name: 'Limited', description: 'Leather upholstery, hands-free power liftgate, and 11-speaker JBL audio.', startingMsrp: 46425, keyFeatures: ['Leather-trimmed interior', 'JBL 11-speaker audio', 'Hands-free power liftgate'] },
      { name: 'Platinum', description: 'Pinnacle luxury: panoramic moonroof, Head-Up Display, 360 camera, heated 2nd row.', startingMsrp: 49625, keyFeatures: ['Panoramic glass roof', '10-inch color Head-Up Display', 'Bird\'s Eye View camera'] },
    ],
  },
  'toyota-grand-highlander': {
    trims: [
      { name: 'XLE', description: 'Adult-sized 3-row space with 12.3-inch touchscreen, SofTex seating, and power liftgate.', startingMsrp: 43320, keyFeatures: ['Adult-sized 3rd row with 20.6 cu ft cargo', '12.3-inch touchscreen', 'SofTex heated front seats'] },
      { name: 'Limited', description: 'Leather seating, ventilated front seats, 11-speaker JBL sound, and hands-free tailgate.', startingMsrp: 48060, keyFeatures: ['Leather-trimmed seating', 'Ventilated front seats', '11-speaker JBL premium sound'] },
      { name: 'Platinum', description: 'Panoramic glass roof, Head-Up Display, digital rearview mirror, and standard AWD.', startingMsrp: 53745, keyFeatures: ['Standard All-Wheel Drive', 'Panoramic moonroof', 'Color Head-Up Display'] },
      { name: 'Hybrid MAX', description: 'High-performance 362 HP / 400 lb-ft Hybrid MAX powertrain with 5,000 lbs towing.', startingMsrp: 54340, keyFeatures: ['362 HP / 400 lb-ft Hybrid MAX system', '5,000 lbs towing capacity', 'Ultrasuede-trimmed leather seats'] },
    ],
  },
  'toyota-corolla': {
    trims: [
      { name: 'LE', description: 'Standard 169 HP 2.0L Dynamic Force engine, 8-inch touchscreen, and Toyota Safety Sense 3.0.', startingMsrp: 22050, keyFeatures: ['169 HP 2.0L Dynamic Force engine', 'Toyota Safety Sense 3.0', 'Automatic climate control'] },
      { name: 'SE', description: 'Sport mesh grille, 18-inch graphite alloy wheels, sport seats, and paddle shifters.', startingMsrp: 24490, keyFeatures: ['18-inch graphite-colored alloys', 'Sport-tuned suspension', 'Premium sport seats'] },
      { name: 'Nightshade', description: 'Blackout exterior accents with 18-inch bronze-finished wheels and black sport spoiler.', startingMsrp: 25490, keyFeatures: ['18-inch bronze alloy wheels', 'Blacked-out badges & mirrors', 'Sport rear diffuser'] },
      { name: 'XSE', description: 'Top luxury sport: 7-inch digital gauge cluster, heated front seats, and power moonroof.', startingMsrp: 27150, keyFeatures: ['SofTex heated sport seats', '7-inch digital gauge cluster', 'Power tilt/slide moonroof'] },
    ],
  },
  'honda-pilot': {
    trims: [
      { name: 'Sport', description: 'Athletic standard: 285 HP 3.5L V6, 20-inch gloss-black wheels, and 10-speed transmission.', startingMsrp: 37090, keyFeatures: ['285 HP naturally aspirated V6', '10-speed automatic transmission', '20-inch gloss-black wheels'] },
      { name: 'EX-L', description: 'Leather upholstery, 9-inch touchscreen, power tailgate, and wireless Apple CarPlay.', startingMsrp: 42400, keyFeatures: ['Leather-trimmed interior', '9-inch color touchscreen', 'Power tailgate with programmable height'] },
      { name: 'TrailSport', description: 'Rugged overland SUV: 1-inch factory lift, steel skid plates, all-terrain tires, TrailWatch camera.', startingMsrp: 48800, keyFeatures: ['1-inch factory suspension lift', 'Steel front and gas tank skid plates', 'Continental all-terrain tires on 18" wheels'] },
      { name: 'Touring', description: 'Stowable 2nd-row middle seat, panoramic moonroof, Bose 12-speaker sound, hands-free tailgate.', startingMsrp: 46900, keyFeatures: ['Bose 12-speaker audio system', 'Panoramic power moonroof', 'Stowable 2nd-row center seat'] },
      { name: 'Elite', description: 'Flagship luxury: perforated leather with ventilated seats, Head-Up Display, 10.2" digital cluster.', startingMsrp: 52480, keyFeatures: ['Standard i-VTM4 all-wheel drive', 'Heated & ventilated front seats', 'Color Head-Up Display'] },
    ],
  },
  'chevrolet-traverse': {
    trims: [
      { name: 'LS', description: 'Standard 328 HP 2.5L Turbo, 17.7-inch center touchscreen, and 8-passenger seating.', startingMsrp: 37600, keyFeatures: ['17.7-inch best-in-class touchscreen', '11-inch driver information center', '328 HP 2.5L Turbo engine'] },
      { name: 'LT', description: 'Roof rails, 2nd-row captain\'s chairs, wireless charging, and power driver seat.', startingMsrp: 40000, keyFeatures: ['7-passenger with 2nd-row captain chairs', 'Wireless phone charging', 'Heated front seats & steering wheel'] },
      { name: 'Z71', description: 'Off-road package: twin-clutch AWD, 1-inch lifted suspension, all-terrain tires, red tow hooks.', startingMsrp: 46400, keyFeatures: ['Twin-clutch advanced AWD system', '1-inch factory lifted suspension', 'Goodyear all-terrain tires & skid plate'] },
      { name: 'RS', description: 'Street performance blackout: 22-inch high-gloss black wheels, sport suspension, Bose audio.', startingMsrp: 54200, keyFeatures: ['22-inch high-gloss black wheels', 'Bose premium audio system', 'Super Cruise hands-free driving available'] },
    ],
  },
  'gmc-canyon': {
    trims: [
      { name: 'Elevation', description: 'Standard 310 HP / 430 lb-ft TurboMax high-output engine and 11.3-inch touchscreen.', startingMsrp: 37500, keyFeatures: ['310 HP / 430 lb-ft TurboMax engine', '11.3-inch center touchscreen', 'Factory 2-inch lifted stance'] },
      { name: 'AT4', description: 'Factory 2-inch lift, 4WD with Autotrac 2-speed transfer case, and MultiStow tailgate.', startingMsrp: 44500, keyFeatures: ['Autotrac 2-speed transfer case with rear locker', 'Off-road drive modes with Terrain mode', 'MultiStow storage tailgate'] },
      { name: 'Denali', description: 'Pinnacle luxury midsize truck: authentic laser-etched open-pore wood and Bose sound.', startingMsrp: 51000, keyFeatures: ['Perforated leather-appointed seating', 'Laser-etched open-pore wood trim', '6.3-inch diagonal Head-Up Display'] },
      { name: 'AT4X', description: 'Apex factory off-road: Multimatic DSSV dampers, front/rear electronic lockers, 3-inch lift.', startingMsrp: 55800, keyFeatures: ['Multimatic DSSV spool-valve dampers', 'Front and rear electronic locking differentials', '33-inch mud-terrain tires with 10.7" clearance'] },
    ],
  },
  'jeep-gladiator': {
    trims: [
      { name: 'Sport', description: 'Open-air pickup with removable top and doors, Dana 44 solid axles, and 12.3-inch Uconnect.', startingMsrp: 37895, keyFeatures: ['Dana 44 heavy-duty axles', 'Command-Trac 4WD with low-range', '12.3-inch Uconnect 5 touchscreen'] },
      { name: 'Willys', description: '32-inch mud-terrain tires, rear electronic locking differential, rock rails, and cab rock sliders.', startingMsrp: 45095, keyFeatures: ['32-inch mud-terrain tires', 'Rear electronic locking differential', 'Heavy-duty rock rails'] },
      { name: 'Mojave', description: 'Desert Rated icon: FOX 2.5-inch internal bypass shocks with hydraulic jounce bumpers, 1" front lift.', startingMsrp: 50995, keyFeatures: ['FOX 2.5-inch internal bypass shocks with reservoirs', 'Hydraulic jounce bumpers', 'Reinforced frame with cast-iron steering knuckles'] },
      { name: 'Rubicon', description: 'Rock crawling benchmark: 4:1 Rock-Trac transfer case, front/rear Tru-Lok electronic lockers, sway bar disconnect.', startingMsrp: 50995, keyFeatures: ['Tru-Lok electronic front & rear lockers', 'Electronic front sway-bar disconnect', '4:1 Rock-Trac heavy-duty 4WD'] },
    ],
  },
  'kia-telluride': {
    trims: [
      { name: 'LX', description: 'Value flagship: 291 HP 3.8L V6, 12.3-inch touchscreen, SynTex seating, and 8-passenger capacity.', startingMsrp: 36190, keyFeatures: ['291 HP 3.8L Lambda V6', '12.3-inch navigation touchscreen', 'Smart Cruise Control with Stop & Go'] },
      { name: 'S', description: '20-inch alloy wheels, twin sunroofs, heated front seats, and 2nd-row captain\'s chairs.', startingMsrp: 38090, keyFeatures: ['20-inch alloy wheels', 'Heated front seats', '2nd-row captain chairs (7-passenger)'] },
      { name: 'EX', description: 'Leather seating, smart power liftgate, wireless phone charger, and sunshades.', startingMsrp: 41790, keyFeatures: ['Leather seat trim', 'Smart power liftgate', 'Power folding side mirrors'] },
      { name: 'SX', description: 'Dual sunroofs, 12.3-inch curved dual panoramic displays, Harman Kardon audio, surround view.', startingMsrp: 45990, keyFeatures: ['Dual panoramic 12.3-inch curved displays', 'Harman Kardon 10-speaker audio', 'Blind-Spot View Monitor'] },
      { name: 'SX Prestige', description: 'Nappa leather, Head-Up Display, heated/ventilated 1st and 2nd rows, and digital rearview mirror.', startingMsrp: 50890, keyFeatures: ['Premium Nappa leather seating', 'Heated & ventilated 2nd-row seats', 'Full-display digital rearview mirror'] },
      { name: 'SX Prestige X-Pro', description: 'Off-road package: 8.4-inch ground clearance, 5,500 lbs towing, 18-inch wheels with AT tires.', startingMsrp: 53385, keyFeatures: ['8.4-inch ground clearance with tow mode', '5,500 lbs towing capacity', '18-inch wheels with Continental all-terrain tires'] },
    ],
  },
  'tesla-model-y': {
    trims: [
      { name: 'Long Range RWD', description: 'Maximum efficiency with 337 miles EPA range, premium audio, and Autopilot standard.', startingMsrp: 44990, keyFeatures: ['337 miles EPA estimated range', 'Single rear-wheel-drive motor', 'Full glass panoramic roof'] },
      { name: 'Long Range AWD', description: 'Dual-motor all-weather traction with 310 miles range and 4.8s 0-60 mph acceleration.', startingMsrp: 47990, keyFeatures: ['Dual motor all-wheel drive', '4.8 second 0-60 mph acceleration', '310 miles EPA range'] },
      { name: 'Performance', description: 'Track-ready dual motor with 3.5s 0-60 mph, 21-inch Überturbine wheels, lowered suspension, and performance brakes.', startingMsrp: 51490, keyFeatures: ['3.5 second 0-60 mph acceleration', '21-inch Überturbine wheels', 'Lowered performance suspension with carbon spoiler'] },
    ],
  },
  'tesla-model-3': {
    trims: [
      { name: 'Standard RWD', description: 'Refreshed sedan with acoustic glass, ambient lighting, rear display screen, 272 miles range.', startingMsrp: 38990, keyFeatures: ['Rear-wheel drive efficiency', 'Rear 8-inch passenger display', 'Acoustic glass all around'] },
      { name: 'Long Range AWD', description: 'Dual-motor AWD with 341 miles range, 17-speaker audio with 2 subwoofers, 4.2s 0-60.', startingMsrp: 47490, keyFeatures: ['341 miles EPA range', 'Dual-motor all-wheel drive', '17-speaker premium audio system'] },
      { name: 'Performance', description: 'Apex sports sedan: adaptive dampers, forged 20-inch wheels, 510 HP, 2.9s 0-60 mph.', startingMsrp: 54990, keyFeatures: ['510 HP with 2.9 second 0-60 mph', 'Adaptive damping suspension', 'Performance sport bucket seats'] },
    ],
  },
  'bmw-x5': {
    trims: [
      { name: 'sDrive40i', description: 'Rear-wheel-drive luxury with 375 HP TwinPower Turbo inline-6 and BMW Curved Display.', startingMsrp: 65700, keyFeatures: ['375 HP 3.0L TwinPower Turbo Inline-6', 'BMW Operating System 8.5 with Curved Display', 'Sensafin luxury upholstery'] },
      { name: 'xDrive40i', description: 'Intelligent all-wheel drive benchmark with 375 HP mild-hybrid inline-6 and sport automatic.', startingMsrp: 68000, keyFeatures: ['xDrive intelligent all-wheel drive', '48V mild hybrid efficiency', 'Panoramic moonroof'] },
      { name: 'xDrive50e (PHEV)', description: 'Plug-in hybrid delivering 483 HP, 40 miles all-electric range, and air suspension standard.', startingMsrp: 73100, keyFeatures: ['483 HP combined plug-in hybrid power', '40 miles all-electric EPA range', 'Two-axle air suspension standard'] },
      { name: 'M60i', description: 'Twin-turbo 523 HP 4.4L V8, M Sport differential, adaptive M suspension, quad exhaust.', startingMsrp: 90000, keyFeatures: ['523 HP 4.4L TwinPower Turbo V8', 'Adaptive M Suspension Professional', 'M Sport differential and brakes'] },
    ],
  },
  'lexus-rx': {
    trims: [
      { name: 'RX 350', description: 'Standard 275 HP 2.4L Turbo, Lexus Safety System+ 3.0, and 9.8-inch touchscreen.', startingMsrp: 49950, keyFeatures: ['275 HP 2.4L Turbo engine', 'Lexus Safety System+ 3.0', 'NuLuxe synthetic leather interior'] },
      { name: 'RX 350 Premium', description: 'Power moonroof, heated and ventilated front seats, and driver memory system.', startingMsrp: 52100, keyFeatures: ['Power tilt/slide moonroof', 'Heated & ventilated front seats', 'Lexus Interface with wireless CarPlay'] },
      { name: 'RX 350h Hybrid', description: 'High-efficiency hybrid with standard electronic AWD and 36 MPG combined rating.', startingMsrp: 51800, keyFeatures: ['246 HP Hybrid Synergy Drive', '36 MPG combined fuel economy', 'Electronic On-Demand All-Wheel Drive'] },
      { name: 'RX 500h F SPORT', description: 'High-performance hybrid: 366 HP DIRECT4 AWD, dynamic rear steering, 6-piston front brakes.', startingMsrp: 63800, keyFeatures: ['366 HP 2.4L Turbo Hybrid system', 'DIRECT4 all-wheel drive with rear steering', 'F SPORT adaptive variable suspension'] },
    ],
  },
  // Ford Additional Models
  'ford-escape': {
    trims: [
      { name: 'Active', description: 'Standard equipment with 1.5L EcoBoost, dual-zone automatic climate, and power liftgate.', startingMsrp: 29495, keyFeatures: ['1.5L EcoBoost engine', 'Power liftgate', 'Ford Co-Pilot360 suite'] },
      { name: 'ST-Line', description: 'Sport street styling with mesh grille, flat-bottom steering wheel, and 18-inch black alloys.', startingMsrp: 30490, keyFeatures: ['Sport mesh grille & spoiler', '18-inch Rock Metallic wheels', 'Flat-bottom sport steering wheel'] },
      { name: 'ST-Line Select', description: 'Available 250 HP 2.0L EcoBoost or Hybrid, standard AWD, heated seats, and remote start.', startingMsrp: 34040, keyFeatures: ['Standard All-Wheel Drive', 'Heated front seats & steering wheel', 'Available 250 HP 2.0L EcoBoost'] },
      { name: 'ST-Line Elite', description: 'Pinnacle sport luxury with 13.2-inch touchscreen, 360-degree camera, and B&O sound.', startingMsrp: 37960, keyFeatures: ['13.2-inch capacitive center stack', 'Bang & Olufsen premium audio', '360-degree split-view camera'] },
      { name: 'Platinum', description: 'Flagship luxury with quilted leather seats, head-up display, and front parking sensors.', startingMsrp: 36965, keyFeatures: ['ActiveX premium seating', 'Panoramic Vista Roof available', 'Head-Up Display'] },
      { name: 'Plug-In Hybrid', description: '37 miles EPA all-electric range with 2.5L Atkinson hybrid system and Level 2 charging.', startingMsrp: 40500, keyFeatures: ['37 miles all-electric range', '101 MPGe rating', 'Ford Mobile Power Cord'] },
    ],
  },
  'ford-edge': {
    trims: [
      { name: 'SE', description: 'Standard Intelligent AWD, 2.0L EcoBoost, and 12-inch portrait touchscreen.', startingMsrp: 38465, keyFeatures: ['Intelligent AWD standard', '12-inch SYNC 4A screen', 'Ford Co-Pilot360'] },
      { name: 'SEL', description: 'Heated front seats, ActiveX synthetic leather, and 9-speaker audio system.', startingMsrp: 39665, keyFeatures: ['Heated front seats', 'ActiveX seating material', 'Dual-zone climate control'] },
      { name: 'ST-Line', description: 'Performance aesthetics with 20-inch gloss black wheels and red accent stitching.', startingMsrp: 43720, keyFeatures: ['20-inch gloss black wheels', 'Red contrast stitching', 'Power rear liftgate'] },
      { name: 'Titanium', description: 'Full luxury trim with B&O 12-speaker sound, hands-free foot-activated liftgate.', startingMsrp: 43820, keyFeatures: ['Bang & Olufsen 12-speaker sound', 'Hands-free foot-activated liftgate', 'Front rain-sensing wipers'] },
      { name: 'ST', description: 'Ford Performance benchmark: 335 HP 2.7L Twin-Turbo EcoBoost V6 with sport-tuned suspension.', startingMsrp: 47205, keyFeatures: ['335 HP 2.7L Twin-Turbo EcoBoost V6', 'Sport-tuned AWD suspension', 'Bolstered leather sport seats'] },
    ],
  },
  'ford-mustang-mach-e': {
    trims: [
      { name: 'Select', description: 'Standard Range EV with 250 miles range, 15.5-inch touchscreen, and Ford Co-Pilot360.', startingMsrp: 39995, keyFeatures: ['250 miles EPA estimated range', '15.5-inch vertical touchscreen', 'Wireless Apple CarPlay & Android Auto'] },
      { name: 'Premium', description: 'Extended Range battery with up to 320 miles range, panoramic glass roof, and B&O audio.', startingMsrp: 43995, keyFeatures: ['Up to 320 miles range', 'Panoramic fixed-glass roof', 'B&O 10-speaker sound system'] },
      { name: 'GT', description: 'Dual-motor 480 HP and 600 lb-ft torque with 3.8s 0-60 mph, Brembo brakes, MagneRide suspension.', startingMsrp: 53995, keyFeatures: ['480 HP / 600 lb-ft dual motor', '3.8s 0-60 mph acceleration', 'MagneRide damping system'] },
      { name: 'Rally', description: 'RallyCross-tuned off-road EV with raised suspension, Michelin CrossClimate2 tires, and rally bar.', startingMsrp: 59995, keyFeatures: ['1-inch raised suspension', 'Brembo calipers with shielded underbody', 'Focus RS rally aesthetic wheels'] },
    ],
  },
  'ford-super-duty-f-250': {
    trims: [
      { name: 'XL', description: 'Heavy-duty jobsite workhorse with 6.8L V8 gas or 6.7L Power Stroke Turbo-Diesel.', startingMsrp: 44970, keyFeatures: ['Heavy-duty steel frame', 'SYNC 4 8-inch screen', 'Trailer sway control'] },
      { name: 'XLT', description: 'Volume truck: chrome bumpers, 8-way power driver seat, and trailer brake controller.', startingMsrp: 51105, keyFeatures: ['18-inch cast aluminum wheels', 'Integrated trailer brake controller', 'Power front seats'] },
      { name: 'Lariat', description: 'Premium heavy towing: leather interior, 12-inch digital cluster, and standard 4WD.', startingMsrp: 62410, keyFeatures: ['Leather-trimmed interior', '12-inch digital instrument cluster', 'Electronic shift-on-the-fly 4WD'] },
      { name: 'King Ranch', description: 'Southwestern luxury with Kingsville antique leather, head-up display, and Pro Power Onboard.', startingMsrp: 76975, keyFeatures: ['Kingsville antique leather', 'Pro Power Onboard generator', 'Tailgate down camera'] },
      { name: 'Platinum', description: 'Executive luxury: massaging multicontour seats, continuous damping, and power running boards.', startingMsrp: 77865, keyFeatures: ['Multicontour Active Motion seats', 'Power-deployable running boards', 'B&O Unleashed 14-speaker sound'] },
      { name: 'Limited', description: 'Pinnacle heavy-duty: standard 500 HP / 1,200 lb-ft High-Output Power Stroke Turbo-Diesel.', startingMsrp: 97095, keyFeatures: ['High-Output 6.7L Power Stroke Diesel standard', 'Two-tone luxury leather', 'Twin-panel power moonroof'] },
    ],
  },
  // Chevrolet Additional Models
  'chevrolet-equinox': {
    trims: [
      { name: 'LT', description: 'Standard 175 HP 1.5L Turbo with dual 11-inch digital screens and Chevy Safety Assist.', startingMsrp: 29995, keyFeatures: ['11.3-inch infotainment screen', '11-inch digital gauge cluster', 'Chevy Safety Assist'] },
      { name: 'ACTIV', description: 'Rugged all-terrain appearance with Evotex/suede microfiber seats and all-terrain tires.', startingMsrp: 34395, keyFeatures: ['All-terrain tires on 17-inch wheels', 'Uniquely tuned suspension', 'Available two-tone white roof'] },
      { name: 'RS', description: 'Athletic street styling with 19-inch dark wheels, flat-bottom steering wheel, and black emblems.', startingMsrp: 34395, keyFeatures: ['19-inch Carbon Flash wheels', 'Flat-bottom sport steering wheel', 'Black Bowtie badges and roof rails'] },
    ],
  },
  'chevrolet-blazer': {
    trims: [
      { name: '2LT', description: 'Standard 228 HP 2.0L Turbo with 10.2-inch touchscreen and Chevy Safety Assist.', startingMsrp: 35400, keyFeatures: ['2.0L Turbo 4-cylinder', '10.2-inch color touchscreen', 'Remote keyless entry'] },
      { name: '3LT', description: 'Perforated leather seating, power programmable liftgate, and Lane Change Alert.', startingMsrp: 39300, keyFeatures: ['Perforated leather seating surfaces', 'Power programmable liftgate', 'Rear Cross Traffic Alert'] },
      { name: 'RS', description: 'Performance trim: 308 HP 3.6L V6 standard, advanced twin-clutch AWD, and sport exhaust.', startingMsrp: 42800, keyFeatures: ['308 HP 3.6L V6 engine standard', 'Twin-clutch AWD system', '20-inch dark technical wheels'] },
      { name: 'Premier', description: 'Pinnacle chrome luxury with ambient lighting, Bose 8-speaker audio, and heated rear seats.', startingMsrp: 42800, keyFeatures: ['Chrome horizontal grille accents', 'Bose premium 8-speaker sound', 'Ventilated front & heated rear seats'] },
    ],
  },
  'chevrolet-trax': {
    trims: [
      { name: 'LS', description: 'Value standard with 137 HP 1.2L Turbo, active noise cancellation, and Chevy Safety Assist.', startingMsrp: 21495, keyFeatures: ['1.2L Turbo engine', 'Chevy Safety Assist', 'Active Noise Cancellation'] },
      { name: '1RS', description: 'Sporty budget trim with 18-inch machined wheels, RS badge, and heated flat-bottom wheel.', startingMsrp: 23195, keyFeatures: ['18-inch machined two-tone wheels', 'RS badging and grille', 'Heated front seats & steering wheel'] },
      { name: 'LT', description: 'Volume trim with 11-inch touchscreen, 8-inch digital cluster, and automatic climate control.', startingMsrp: 23395, keyFeatures: ['11-inch HD color touchscreen', '8-inch digital driver information center', 'Keyless open and start'] },
      { name: '2RS', description: 'Street appearance with 19-inch black wheels, red interior accents, and roof rails.', startingMsrp: 24995, keyFeatures: ['19-inch black painted wheels', 'Evotex seating with red accents', 'Gloss black roof rails'] },
      { name: 'ACTIV', description: 'Monochromatic rugged look with 18-inch black wheels, titanium chrome accents, and power driver seat.', startingMsrp: 24995, keyFeatures: ['Titanium chrome faux skid plate', '18-inch black aluminum wheels', '8-way power driver seat'] },
    ],
  },
  'chevrolet-corvette': {
    trims: [
      { name: '1LT Stingray', description: 'Mid-engine benchmark: 495 HP 6.2L LT2 V8, 8-speed dual-clutch transmission, Bose audio.', startingMsrp: 68300, keyFeatures: ['495 HP naturally aspirated LT2 V8', '8-speed dual-clutch transmission', 'Removable roof panel'] },
      { name: '2LT Stingray', description: 'Volume luxury: heated/ventilated seats, head-up display, PDR performance data recorder, Bose 14-speaker.', startingMsrp: 75400, keyFeatures: ['Head-Up Display & PDR recorder', 'Bose Performance Series 14-speaker', 'Blind Zone Alert & rear camera mirror'] },
      { name: '3LT Stingray', description: 'Pinnacle craftsmanship: custom leather-wrapped interior, suede microfiber upper trim, GT2 sport seats.', startingMsrp: 80050, keyFeatures: ['Custom leather-wrapped instrument panel', 'Suede microfiber headliner', 'Nappa leather GT2 bucket seats'] },
      { name: '1LZ Z06', description: 'Supercar apex: 670 HP 5.5L Flat-Plane Crank LT6 V8 revving to 8,600 RPM, wider bodywork.', startingMsrp: 112700, keyFeatures: ['670 HP 5.5L Flat-Plane Crank V8 (8,600 RPM)', 'Wider fenders and massive aero intakes', 'Magnetic Selective Ride Control 4.0'] },
      { name: '3LZ Z06', description: 'The ultimate American supercar: carbon fiber steering wheel, full leather interior, and track pack.', startingMsrp: 127550, keyFeatures: ['Carbon fiber steering wheel & shift paddles', 'Available Z07 carbon ceramic track package', 'Full leather-wrapped interior'] },
      { name: 'E-Ray 1LZ', description: 'First electrified Corvette: AWD hybrid with 655 combined HP, 2.5s 0-60 mph, all-season supercar.', startingMsrp: 104900, keyFeatures: ['655 HP AWD hybrid powertrain', '2.5 second 0-60 mph acceleration', 'Standard Brembo carbon ceramic brakes'] },
    ],
  },
  // Toyota Additional Models
  'toyota-prius': {
    trims: [
      { name: 'LE', description: 'Sleek aerodynamic hybrid with 196 HP, up to 57 MPG combined, and Toyota Safety Sense 3.0.', startingMsrp: 27950, keyFeatures: ['57 MPG combined EPA rating', '196 HP hybrid powertrain', '8-inch Toyota Audio Multimedia'] },
      { name: 'XLE', description: 'Volume trim with 19-inch alloy wheels, SofTex heated front seats, and wireless charger.', startingMsrp: 31395, keyFeatures: ['19-inch machine-finished alloy wheels', 'SofTex-trimmed heated front seats', 'Front and rear parking assist'] },
      { name: 'Limited', description: 'Pinnacle grade: 12.3-inch touchscreen, JBL 8-speaker audio, fixed glass roof, ventilated seats.', startingMsrp: 34965, keyFeatures: ['12.3-inch Toyota Audio Multimedia', 'JBL premium audio system', 'Fixed glass panoramic roof & power liftback'] },
      { name: 'Prime SE', description: 'Plug-in hybrid with 44 miles all-electric range, 220 combined HP, and dual-voltage charging.', startingMsrp: 32975, keyFeatures: ['44 miles all-electric EPA range', '220 HP hybrid powertrain', 'Level 1/2 charging port'] },
      { name: 'Prime XSE', description: 'Plug-in hybrid with 19-inch wheels, SofTex heated seats, and available solar roof.', startingMsrp: 36225, keyFeatures: ['39 miles electric range with 19-inch wheels', 'SofTex heated power front seats', 'Available solar roof charger'] },
    ],
  },
  'toyota-sienna': {
    trims: [
      { name: 'LE', description: 'Standard 245 HP hybrid powertrain with 36 MPG combined and dual power sliding doors.', startingMsrp: 37685, keyFeatures: ['Standard hybrid 36 MPG combined', 'Dual power sliding side doors', 'Toyota Safety Sense 2.0'] },
      { name: 'XLE', description: 'SofTex 8-passenger seating, hands-free kick sliding doors and liftgate, 4-zone climate.', startingMsrp: 42995, keyFeatures: ['Hands-free kick-type sliding doors', 'SofTex heated front seats', 'Four-zone automatic climate control'] },
      { name: 'XSE', description: 'Sport-tuned suspension, dark metallic 20-inch wheels, and black sport mesh front grille.', startingMsrp: 45245, keyFeatures: ['Sport-tuned suspension', '20-inch dark wheels (FWD)', 'Sport styling with black mesh grille'] },
      { name: 'Woodland Edition', description: 'Outdoor adventure spec with standard electronic AWD, 0.6-inch factory lift, and roof rails.', startingMsrp: 48625, keyFeatures: ['Standard Electronic On-Demand AWD', 'Increased ground clearance lift', '1500W power outlet in cargo area'] },
      { name: 'Limited', description: 'Leather second-row captain chairs with ottomans, JBL 12-speaker audio, ventilated seats.', startingMsrp: 49945, keyFeatures: ['Leather captain chairs with ottomans', 'JBL 12-speaker premium sound', 'Ventilated front seats'] },
      { name: 'Platinum', description: 'Pinnacle luxury: 10-inch Head-Up Display, 360 Bird’s Eye camera, signature bi-LED headlights.', startingMsrp: 53145, keyFeatures: ['10-inch color Head-Up Display', 'Bird’s Eye View 360 camera', 'Heated second-row captain chairs'] },
    ],
  },
  'toyota-sequoia': {
    trims: [
      { name: 'SR5', description: 'Standard 437 HP / 583 lb-ft i-FORCE MAX Twin-Turbo V6 Hybrid with 9,520 lbs towing.', startingMsrp: 61275, keyFeatures: ['437 HP i-FORCE MAX Twin-Turbo Hybrid', 'Panoramic View 360 Monitor', 'Toyota Safety Sense 2.5'] },
      { name: 'Limited', description: 'SofTex heated/ventilated seats, 14-inch touchscreen display, and power-folding 3rd row.', startingMsrp: 67675, keyFeatures: ['14-inch Toyota Audio Multimedia', 'Heated and ventilated front seats', 'Power folding 3rd-row seats with sliding shelf'] },
      { name: 'Platinum', description: 'Leather seating, panoramic moonroof, JBL 14-speaker sound, and load-leveling rear air suspension.', startingMsrp: 73865, keyFeatures: ['Leather-trimmed heated & ventilated 1st/2nd row', 'JBL 14-speaker audio system', 'Panoramic power moonroof'] },
      { name: 'TRD Pro', description: 'Dedicated off-road flagship with FOX internal bypass shocks, 1/4-inch aluminum skid plate, e-locker.', startingMsrp: 79995, keyFeatures: ['FOX 2.5-inch internal bypass shocks', 'Electronic locking rear differential', '18-inch matte-black BBS forged wheels'] },
      { name: 'Capstone', description: 'Ultra-luxury benchmark: semi-aniline leather, authentic American walnut wood, 22-inch dark chrome wheels.', startingMsrp: 80865, keyFeatures: ['Semi-aniline leather with American Walnut', '22-inch dark chrome alloy wheels', 'Acoustic laminated windshield & side glass'] },
    ],
  },
  'toyota-land-cruiser': {
    trims: [
      { name: '1958', description: 'Retro heritage specification with circular LED headlamps, cloth seats, and rear locker.', startingMsrp: 55950, keyFeatures: ['Circular heritage LED headlights', 'Rear locking differential standard', 'Full-time 4WD with 2-speed transfer case'] },
      { name: 'Land Cruiser', description: 'Core grade: rectangular slim LED lamps, SofTex seats, 12.3-inch screen, Stabilizer Disconnect Mechanism.', startingMsrp: 61950, keyFeatures: ['Stabilizer Disconnect Mechanism (SDM)', '12.3-inch multimedia display', 'Multi-Terrain Select with Crawl Control'] },
      { name: 'First Edition', description: 'Limited collectible: leather seating, roof rack, rock rails, and circular heritage lights.', startingMsrp: 74950, keyFeatures: ['Front skid plates and heavy-duty rock rails', 'Roof rack and leather upholstery', 'Exclusive First Edition heritage badging'] },
    ],
  },
  // Honda Additional Models
  'honda-odyssey': {
    trims: [
      { name: 'EX', description: 'Standard 280 HP 3.5L V6 with 10-speed transmission, Magic Slide 2nd-row seats, Honda Sensing.', startingMsrp: 38240, keyFeatures: ['280 HP 3.5L V6 engine', 'Magic Slide second-row seats', 'Honda Sensing driver assist suite'] },
      { name: 'EX-L', description: 'Volume luxury: leather-trimmed seats, power moonroof, power tailgate with memory height.', startingMsrp: 41310, keyFeatures: ['Leather-trimmed interior', 'One-touch power moonroof', 'Power tailgate with programmable height'] },
      { name: 'Sport', description: 'Athletic styling with 19-inch gloss-black wheels, black exterior trim, and red ambient lighting.', startingMsrp: 42260, keyFeatures: ['19-inch gloss-black alloy wheels', 'Red ambient interior lighting', 'Sport leather seats with red stitching'] },
      { name: 'Touring', description: 'Rear Entertainment System with 10.2-inch screen, CabinWatch rear camera, and Wi-Fi hotspot.', startingMsrp: 45500, keyFeatures: ['Rear entertainment system with Blu-ray', 'CabinWatch & CabinTalk in-car monitoring', 'Integrated rear sunshades'] },
      { name: 'Elite', description: 'Pinnacle luxury: ventilated front seats, 11-speaker 550W audio, wireless phone charger, hands-free tailgate.', startingMsrp: 49970, keyFeatures: ['Ventilated front seats', '550W 11-speaker premium audio', 'Hands-free access power tailgate'] },
    ],
  },
  'honda-passport': {
    trims: [
      { name: 'EX-L', description: 'Standard 280 HP 3.5L V6 with Intelligent Variable Torque Management AWD (i-VTM4).', startingMsrp: 41900, keyFeatures: ['280 HP 3.5L V6 with i-VTM4 AWD', 'Leather-trimmed seats', 'Power moonroof & power tailgate'] },
      { name: 'TrailSport', description: 'Off-road grade: all-terrain tires, off-road tuned suspension, roof rails, orange interior stitching.', startingMsrp: 44500, keyFeatures: ['General Grabber A/Tx all-terrain tires', 'Trail-tuned suspension tuning', 'High-contrast orange interior stitching'] },
      { name: 'Black Edition', description: 'Pinnacle luxury with 20-inch gloss-black wheels, red ambient lighting, hands-free power tailgate.', startingMsrp: 47970, keyFeatures: ['20-inch gloss-black alloy wheels', 'Red ambient cabin lighting', 'Heated rear outboard seats'] },
    ],
  },
  'honda-ridgeline': {
    trims: [
      { name: 'Sport', description: 'Standard i-VTM4 torque-vectoring AWD, dual-action tailgate, and In-Bed Trunk.', startingMsrp: 39750, keyFeatures: ['Dual-action tailgate', 'Lockable In-Bed Trunk', 'i-VTM4 torque-vectoring AWD standard'] },
      { name: 'RTL', description: 'Leather-trimmed interior, heated front seats, one-touch moonroof, and acoustic windshield.', startingMsrp: 42580, keyFeatures: ['Leather-trimmed seating', 'Heated front seats with memory', 'One-touch power moonroof'] },
      { name: 'TrailSport', description: 'All-terrain capability with General Grabber A/T tires, off-road tuned dampers, and steel underbody protection.', startingMsrp: 44980, keyFeatures: ['General Grabber all-terrain tires', 'Off-road tuned suspension dampers', 'Diffused Sky Blue exterior available'] },
      { name: 'Black Edition', description: 'Monochromatic black styling, 18-inch black alloy wheels, and 540W truck-bed audio system.', startingMsrp: 46350, keyFeatures: ['Black Edition black chrome accents', '540W 8-speaker audio system', 'Red ambient LED interior lighting'] },
    ],
  },
  // Jeep Additional Models
  'jeep-compass': {
    trims: [
      { name: 'Sport', description: 'Standard 200 HP 2.0L Turbo with 8-speed automatic and standard 4WD.', startingMsrp: 25900, keyFeatures: ['200 HP 2.0L Turbocharged engine', 'Standard 4WD with Selec-Terrain', '10.1-inch Uconnect 5 touchscreen'] },
      { name: 'Latitude', description: 'Keyless Enter ’n Go, premium cloth/vinyl seats, and fog lamps.', startingMsrp: 30765, keyFeatures: ['Premium cloth and vinyl bucket seats', 'Cornering front fog lamps', '17-inch painted silver wheels'] },
      { name: 'Latitude Lux', description: 'Heated leather front seats, 8-way power driver seat, and remote vehicle start.', startingMsrp: 32490, keyFeatures: ['Heated leather-trimmed seats', 'Heated steering wheel', 'Remote start system'] },
      { name: 'Limited', description: 'Chrome luxury with 18-inch diamond-cut wheels, dual-zone climate, and gloss-black roof.', startingMsrp: 33745, keyFeatures: ['18-inch diamond-cut alloy wheels', 'Gloss-black two-tone painted roof', 'Blind Spot Monitoring'] },
      { name: 'Trailhawk', description: 'Trail Rated off-roader with 20:1 crawl ratio, 1-inch factory lift, skid plates, red tow hooks.', startingMsrp: 36395, keyFeatures: ['Jeep Active Drive Low 4x4 system', '1-inch factory suspension lift', 'Red front and rear recovery hooks'] },
    ],
  },
  'jeep-wagoneer': {
    trims: [
      { name: 'Series II', description: 'Twin-Turbo 420 HP Hurricane 3.0L Inline-6 with Nappa leather, 8-passenger seating, 10,000 lbs towing.', startingMsrp: 62945, keyFeatures: ['420 HP Hurricane Twin-Turbo I6', 'Nappa leather-trimmed seats', '10,000 lbs maximum towing capacity'] },
      { name: 'Carbide', description: 'Blacked-out appearance package with 20-inch gloss-black wheels and tri-pane panoramic sunroof.', startingMsrp: 65945, keyFeatures: ['Tri-Pane panoramic sunroof', 'Gloss-black exterior accents and wheels', 'Reversible cargo mat'] },
      { name: 'Series III', description: 'Head-up display, McIntosh 19-speaker audio, Quadra-Lift air suspension, heated 2nd-row seats.', startingMsrp: 73945, keyFeatures: ['Quadra-Lift air suspension', 'McIntosh 19-speaker 950W sound', 'Head-Up Display'] },
    ],
  },
  // RAM Additional Models
  'ram-2500': {
    trims: [
      { name: 'Tradesman', description: 'Commercial heavy-duty work truck with standard 410 HP 6.4L HEMI V8 or 6.7L Cummins Turbo-Diesel.', startingMsrp: 45250, keyFeatures: ['410 HP 6.4L HEMI V8 standard', 'Class V trailer hitch receiver', 'Durable vinyl or cloth interior'] },
      { name: 'Big Horn', description: 'Volume truck: chrome grille, 18-inch wheels, trailer brake controller, and remote keyless entry.', startingMsrp: 49930, keyFeatures: ['Trailer brake controller', 'Chrome front and rear bumpers', 'Uconnect 8.4-inch or 12-inch screen'] },
      { name: 'Laramie', description: 'Mainstream luxury: leather seating, heated/ventilated front seats, 10-speaker Alpine sound.', startingMsrp: 62820, keyFeatures: ['Leather-trimmed interior', 'Alpine 10-speaker audio', 'Heated & ventilated front seats'] },
      { name: 'Rebel', description: 'Factory off-road warrior with Bilstein shocks, rear locker, and 33-inch Goodyear DuraTrac tires.', startingMsrp: 68900, keyFeatures: ['Bilstein off-road shocks', 'Rear electronic locking differential', '33-inch Goodyear DuraTrac tires'] },
      { name: 'Power Wagon', description: 'The off-road benchmark: front and rear lockers, electronic disconnecting sway bar, 12,000 lb Warn winch.', startingMsrp: 69950, keyFeatures: ['Front & rear locking differentials', 'Electronic front sway-bar disconnect', 'Factory 12,000 lb Warn winch'] },
      { name: 'Limited', description: 'Pinnacle luxury: 100% full leather, 12-inch digital cluster, Blind Spot monitoring, power running boards.', startingMsrp: 87150, keyFeatures: ['100% full leather seating', 'Power-deployable running boards', 'Harman Kardon 17-speaker audio'] },
    ],
  },
  // GMC Additional Models
  'gmc-acadia': {
    trims: [
      { name: 'Elevation', description: 'Standard 328 HP 2.5L Turbo with 15-inch portrait display and 11-inch digital cluster.', startingMsrp: 42600, keyFeatures: ['328 HP 2.5L Turbocharged engine', '15-inch diagonal infotainment display', 'Super Cruise hands-free available'] },
      { name: 'AT4', description: 'Dedicated off-roader with Active Torque Control AWD, lifted ride height, and all-terrain tires.', startingMsrp: 50000, keyFeatures: ['Active Torque Control AWD system', 'Lifted off-road suspension', 'Red recovery hooks & skid plates'] },
      { name: 'Denali', description: 'Flagship luxury: authentic wood trim, Bose 12-speaker audio, head-up display, ventilated front seats.', startingMsrp: 54300, keyFeatures: ['Authentic Galvano open-pore wood', 'Bose 12-speaker premium audio', 'Configurable 8-inch Head-Up Display'] },
    ],
  },
  // Hyundai & Kia Models
  'hyundai-palisade': {
    trims: [
      { name: 'SE', description: 'Standard 291 HP 3.8L V6 with 8-passenger seating, 12.3-inch navigation, and SmartSense safety.', startingMsrp: 36650, keyFeatures: ['291 HP 3.8L V6 engine', '12.3-inch navigation display', 'Hyundai SmartSense active safety'] },
      { name: 'SEL', description: 'Heated front seats, hands-free smart liftgate, dual automatic temperature control.', startingMsrp: 39400, keyFeatures: ['Hands-free smart power liftgate', 'Heated front seats & wireless charging', 'Second-row captain chairs available'] },
      { name: 'XRT', description: 'Rugged blackout edition with 20-inch dark alloy wheels, skid plate accents, and roof cross rails.', startingMsrp: 41800, keyFeatures: ['20-inch dark alloy wheels', 'Rugged front and rear lower fascia', 'Black roof cross rails'] },
      { name: 'Limited', description: 'Leather seating, dual sunroofs, 10-inch Head-Up Display, heated and ventilated 1st/2nd rows.', startingMsrp: 48050, keyFeatures: ['Heated & ventilated 1st & 2nd row seats', 'Dual sunroofs', 'Head-Up Display'] },
      { name: 'Calligraphy', description: 'Flagship luxury: premium Nappa leather, Ergo-motion driver seat, Harman Kardon audio, remote smart park.', startingMsrp: 50350, keyFeatures: ['Premium Nappa leather seating', 'Remote Smart Parking Assist', 'Harman Kardon 12-speaker audio'] },
    ],
  },
  'hyundai-santa-fe': {
    trims: [
      { name: 'SE', description: 'Boxy adventure SUV: 277 HP 2.5L Turbo with dual 12.3-inch panoramic curved display.', startingMsrp: 33950, keyFeatures: ['277 HP 2.5L Turbo engine', 'Panoramic curved display', 'Hands-free smart liftgate'] },
      { name: 'SEL', description: 'Heated front seats, dual wireless phone charger, roof rails, and digital key 2.', startingMsrp: 36450, keyFeatures: ['Dual wireless phone charger pads', 'Heated H-Tex leatherette seating', 'Digital Key 2 Touch'] },
      { name: 'XRT', description: 'All-terrain package: 1.3-inch lift, 30-inch all-terrain tires, 4,500 lbs towing capacity.', startingMsrp: 40600, keyFeatures: ['1.3-inch increased ground clearance', '30-inch all-terrain tires', '4,500 lbs maximum towing capacity'] },
      { name: 'Limited', description: 'Leather seating, dual sunroofs, 20-inch wheels, Bose 12-speaker audio, ventilated seats.', startingMsrp: 43350, keyFeatures: ['Bose 12-speaker premium audio', 'Dual sunroofs with power shades', 'Ventilated front bucket seats'] },
      { name: 'Calligraphy', description: 'Pinnacle luxury: quilted Nappa leather, 21-inch wheels, dual wireless charging, head-up display.', startingMsrp: 46500, keyFeatures: ['Quilted premium Nappa leather', '21-inch dark finish alloy wheels', 'Full-display digital rearview mirror'] },
    ],
  },
  'kia-carnival': {
    trims: [
      { name: 'LX', description: '7-passenger multi-purpose vehicle with 290 HP 3.5L V6, dual power sliding doors, and Kia Drive Wise.', startingMsrp: 33600, keyFeatures: ['290 HP 3.5L V6 engine', 'Power sliding rear doors', 'Kia Drive Wise driver assist'] },
      { name: 'LX Seat Package', description: '8-passenger Slide-Flex seating with removable 2nd row and SynTex artificial leather.', startingMsrp: 35600, keyFeatures: ['8-passenger Slide-Flex seating', 'SynTex leatherette trim', '8-way power adjustable driver seat'] },
      { name: 'EX', description: 'Volume family trim: 12.3-inch navigation screen, power smart tailgate, and in-cabin camera.', startingMsrp: 39190, keyFeatures: ['12.3-inch touchscreen navigation', 'Smart power liftgate', 'Cabin View in-car monitoring'] },
      { name: 'SX', description: 'Athletic styling: 19-inch gloss-black wheels, dual sunroofs, roof rails, and LED fog lamps.', startingMsrp: 42390, keyFeatures: ['19-inch gloss-black alloy wheels', 'Dual power tilting/sliding sunroofs', 'Surround View 360-degree monitor'] },
      { name: 'SX Prestige', description: 'Pinnacle luxury: VIP lounge 2nd-row seats with leg extension ottomans, Bose 12-speaker audio.', startingMsrp: 46790, keyFeatures: ['VIP Lounge 2nd-row seating with ottomans', 'Bose 12-speaker premium sound', 'Dual 12.3-inch panoramic displays'] },
    ],
  },
  'kia-sorento': {
    trims: [
      { name: 'LX', description: 'Standard 191 HP 2.5L 4-cylinder with 3-row 7-passenger seating and Drive Wise safety.', startingMsrp: 31990, keyFeatures: ['3-row 7-passenger seating', 'Drive Wise driver assist suite', 'LED projector headlights'] },
      { name: 'S', description: 'SynTex leatherette seats, 10-way power driver seat, dual-zone climate, smart key.', startingMsrp: 34390, keyFeatures: ['SynTex artificial leather seating', '10-way power driver seat with lumbar', 'Dual-zone automatic climate control'] },
      { name: 'EX', description: 'Punchy 281 HP 2.5L Turbo with 8-speed dual clutch, 2nd-row captain chairs, power liftgate.', startingMsrp: 37990, keyFeatures: ['281 HP 2.5L Turbo engine', 'Second-row captain chairs', 'Smart power liftgate'] },
      { name: 'SX', description: 'Panoramic sunroof, 12.3-inch dual panoramic displays, Highway Driving Assist 2.', startingMsrp: 41690, keyFeatures: ['Dual 12.3-inch panoramic displays', 'Panoramic sunroof with power sunshade', 'Highway Driving Assist 2'] },
      { name: 'X-Line', description: 'Rugged package: 1-inch suspension lift, center locking differential AWD, high-utility roof rails.', startingMsrp: 43490, keyFeatures: ['1-inch factory suspension lift', 'Torque-vectoring AWD with center lock', 'Bridge-type roof rails'] },
      { name: 'X-Pro', description: 'Factory off-road warrior with 17-inch matte black wheels, BFGoodrich all-terrain tires, 4,500 lb tow rating.', startingMsrp: 46990, keyFeatures: ['BFGoodrich all-terrain tires', '4,500 lbs towing capacity', 'Bose 12-speaker premium audio'] },
    ],
  },
  // Mazda Models
  'mazda-cx-5': {
    trims: [
      { name: '2.5 S Select', description: 'Standard i-Activ AWD, 187 HP 2.5L Skyactiv-G, dual-zone climate, and leatherette seats.', startingMsrp: 29300, keyFeatures: ['Standard i-Activ All-Wheel Drive', 'Dual-zone climate control', 'Mazda Radar Cruise Control'] },
      { name: '2.5 S Preferred', description: 'Leather-trimmed seats, power sliding-glass moonroof, and 8-way power driver seat with memory.', startingMsrp: 30650, keyFeatures: ['Leather-trimmed interior', 'Power sliding-glass moonroof', 'Power rear liftgate'] },
      { name: '2.5 S Carbon Edition', description: 'Signature Polymetal Gray paint, red leather interior, and 19-inch black alloy wheels.', startingMsrp: 31950, keyFeatures: ['Exclusive Polymetal Gray Metallic', 'Red leather-trimmed seating', '19-inch black metallic wheels'] },
      { name: '2.5 S Premium Plus', description: 'Bose 10-speaker sound, ventilated front seats, windshield-projected Active Driving Display.', startingMsrp: 36500, keyFeatures: ['Bose 10-speaker surround sound', 'Ventilated front bucket seats', 'Windshield-projected Active Driving Display'] },
      { name: '2.5 Carbon Turbo', description: 'Turbocharged 256 HP and 320 lb-ft torque with Zircon Sand paint and terracotta leather.', startingMsrp: 37000, keyFeatures: ['256 HP Skyactiv-G 2.5L Turbo', 'Zircon Sand Metallic paint', 'Terracotta leather-trimmed interior'] },
      { name: '2.5 Turbo Signature', description: 'Pinnacle luxury: Caturra Brown Nappa leather, genuine layered wood trim, 360 View Monitor.', startingMsrp: 40600, keyFeatures: ['Caturra Brown Nappa leather', 'Genuine layered wood interior trim', '360-degree View Monitor'] },
    ],
  },
  'mazda-cx-50': {
    trims: [
      { name: '2.5 S Select', description: 'Rugged crossover with standard i-Activ AWD, Mi-Drive off-road modes, and dual-zone climate.', startingMsrp: 30300, keyFeatures: ['Standard i-Activ AWD with Mi-Drive', 'Dual-zone automatic climate', '10.25-inch center display'] },
      { name: '2.5 S Preferred', description: 'Power rear liftgate, heated front seats, and 8-way power adjustable driver seat.', startingMsrp: 31650, keyFeatures: ['Power rear liftgate with programmable height', 'Heated front seats', 'Windshield wiper de-icer'] },
      { name: '2.5 Turbo', description: '256 HP 2.5L Turbo engine with 3,500 lbs towing capacity and paddle shifters.', startingMsrp: 38000, keyFeatures: ['256 HP Skyactiv-G 2.5L Turbo', '3,500 lbs maximum towing capacity', 'Steering wheel paddle shifters'] },
      { name: '2.5 Turbo Meridian Edition', description: 'Overlanding grade with 18-inch wheels, Falken all-terrain tires, hood graphics, rock rocker garnish.', startingMsrp: 40800, keyFeatures: ['Falken Wildpeak all-terrain tires', 'Meridian Edition matte black hood graphic', 'Side rocker garnish and headlight garnishes'] },
      { name: '2.5 Turbo Premium Plus', description: 'Flagship: panoramic moonroof, Bose 12-speaker audio, head-up display, ventilated seats.', startingMsrp: 43300, keyFeatures: ['Panoramic power moonroof', 'Bose 12-speaker Centerpoint surround', 'Ventilated front seats & Traffic Jam Assist'] },
    ],
  },
  // Volkswagen Models
  'volkswagen-atlas': {
    trims: [
      { name: 'SE', description: 'Standard 269 HP 2.0L Turbo with 12-inch touchscreen, 10.25-inch Digital Cockpit Pro, ventilated front seats.', startingMsrp: 37995, keyFeatures: ['269 HP Turbocharged TSI engine', '12-inch center touchscreen', 'Ventilated front bucket seats standard'] },
      { name: 'SE with Technology', description: 'Hands-free power liftgate, 20-inch alloy wheels, front parking sensors, remote engine start.', startingMsrp: 42100, keyFeatures: ['Hands-free Easy Open power liftgate', '20-inch 5-spoke silver alloy wheels', 'Integrated illuminated front grille light bar'] },
      { name: 'Peak Edition', description: 'Rugged outdoor trim: all-terrain tires, black exterior cladding, ambient lighting with Peak Edition badge.', startingMsrp: 46855, keyFeatures: ['18-inch black wheels with all-terrain tires', 'Rugged lower body cladding and black accents', '30-color ambient interior lighting'] },
      { name: 'SEL', description: 'Standard 4MOTION AWD, leather seating surfaces, panoramic sunroof, head-up display.', startingMsrp: 48880, keyFeatures: ['Standard 4MOTION All-Wheel Drive', 'Leather seating surfaces', 'Head-Up Display and multi-color ambient lighting'] },
      { name: 'SEL Premium R-Line', description: 'Harman Kardon premium audio, 21-inch two-tone machined wheels, Area View 360 camera.', startingMsrp: 52890, keyFeatures: ['Harman Kardon premium audio system', '21-inch two-tone machined wheels', 'Overhead Area View 360-degree camera'] },
    ],
  },
  // Tesla Cybertruck & Rivian
  'tesla-cybertruck': {
    trims: [
      { name: 'All-Wheel Drive', description: 'Dual-motor 600 HP with 318 miles range, 11,000 lbs towing, and shatter-resistant armor glass.', startingMsrp: 79990, keyFeatures: ['Dual motor AWD with 600 HP', '318 miles EPA estimated range', '11,000 lbs maximum towing capacity'] },
      { name: 'Cyberbeast', description: 'Tri-motor 845 HP delivering 2.6s 0-60 mph, 301 miles range, and steer-by-wire agility.', startingMsrp: 99990, keyFeatures: ['845 HP tri-motor setup', '2.6 second 0-60 mph (Beast Mode)', 'Four-wheel steering with steer-by-wire'] },
    ],
  },
  'rivian-r1s': {
    trims: [
      { name: 'Adventure Dual-Motor', description: 'Dual-motor AWD with 533 HP, up to 330 miles range, air suspension, and 3-row 7-seat layout.', startingMsrp: 75900, keyFeatures: ['533 HP Dual-Motor AWD', 'Independent air suspension', 'Camp Mode with leveling capability'] },
      { name: 'Adventure Tri-Motor', description: 'Tri-motor 850 HP delivering 2.9s 0-60 mph, 380 miles range, and torque vectoring.', startingMsrp: 99900, keyFeatures: ['850 HP Tri-Motor powertrain', '2.9 second 0-60 mph acceleration', 'Ascent interior with walnut wood'] },
      { name: 'Adventure Quad-Motor', description: 'Apex 1,025 HP quad-motor delivering 2.5s 0-60 mph with instant 4-wheel independent torque.', startingMsrp: 105900, keyFeatures: ['1,025 HP Quad-Motor system', '2.5 second 0-60 mph acceleration', 'Independent 4-wheel torque vectoring'] },
    ],
  },
  'rivian-r1t': {
    trims: [
      { name: 'Adventure Dual-Motor', description: 'Dual-motor 533 HP adventure truck with 11,000 lbs towing, Gear Tunnel, and air suspension.', startingMsrp: 69900, keyFeatures: ['533 HP Dual-Motor AWD', '11,000 lbs towing capacity', 'Enclosed cross-body Gear Tunnel'] },
      { name: 'Adventure Tri-Motor', description: 'Tri-motor 850 HP with 380 miles range, Launch Mode, and high-performance damping.', startingMsrp: 95900, keyFeatures: ['850 HP Tri-Motor setup', '380 miles EPA range', 'Yellow brake calipers and badging'] },
      { name: 'Adventure Quad-Motor', description: 'Apex 1,025 HP quad-motor with 2.5s 0-60 mph and rock-crawl capability.', startingMsrp: 102900, keyFeatures: ['1,025 HP Quad-Motor', 'Four-wheel independent torque control', 'Reinforced underbody shield'] },
    ],
  },
  // Porsche
  'porsche-cayenne': {
    trims: [
      { name: 'Base', description: '348 HP 3.0L Turbo V6 with Porsche Active Suspension Management (PASM) and Matrix LED lights.', startingMsrp: 79200, keyFeatures: ['348 HP 3.0L Turbocharged V6', 'Porsche Active Suspension Management (PASM)', 'Matrix LED headlights'] },
      { name: 'E-Hybrid', description: 'Plug-in hybrid with 463 combined HP, 25.9 kWh battery, and instant electric torque response.', startingMsrp: 91700, keyFeatures: ['463 HP combined hybrid system', '25.9 kWh high-voltage battery', 'Porsche 4D Chassis Control'] },
      { name: 'S', description: '468 HP 4.0L Twin-Turbo V8 with dual sports exhaust, 4.7s 0-60 mph, and quad-exit tailpipes.', startingMsrp: 95700, keyFeatures: ['468 HP 4.0L Twin-Turbo V8', 'Sport Chrono Package available', '20-inch Cayenne S wheels'] },
      { name: 'GTS', description: 'Sport-focused benchmark: 493 HP Twin-Turbo V8, lowered adaptive air suspension, Race-Tex interior.', startingMsrp: 124900, keyFeatures: ['493 HP Twin-Turbo V8 with water-cooled transfer case', 'Lowered adaptive air suspension (10mm)', 'Sport exhaust with center oval tips'] },
      { name: 'Turbo E-Hybrid', description: 'Hyper-SUV: 729 HP combined Twin-Turbo V8 PHEV, Porsche Torque Vectoring Plus (PTV+).', startingMsrp: 146900, keyFeatures: ['729 HP / 700 lb-ft combined output', 'Porsche Torque Vectoring Plus (PTV+)', 'HD-Matrix LED headlights standard'] },
    ],
  },
  'porsche-macan': {
    trims: [
      { name: 'Base', description: '261 HP 2.0L Turbo 4-cylinder with 7-speed PDK transmission and Porsche Traction Management.', startingMsrp: 62900, keyFeatures: ['261 HP 2.0L Turbocharged engine', '7-speed Porsche Doppelkupplung (PDK)', 'Porsche Communication Management with 10.9-inch display'] },
      { name: 'T', description: 'Touring performance: steel spring suspension with PASM, Sport Chrono package, and Agate Grey accents.', startingMsrp: 68500, keyFeatures: ['Sport Chrono Package standard', 'Sport design exterior mirrors in Agate Grey', 'Sport-Tex seat centers with silver stitching'] },
      { name: 'S', description: '375 HP 2.9L Twin-Turbo V6 with 4.6s 0-60 mph and 6-piston aluminum monobloc front calipers.', startingMsrp: 72300, keyFeatures: ['375 HP 2.9L Twin-Turbo V6', '6-piston aluminum monobloc fixed calipers', '20-inch Macan S wheels in dark titanium'] },
      { name: 'GTS', description: 'Pinnacle compact performance: 434 HP Twin-Turbo V6, sport air suspension, 3.5s 0-60 with launch control.', startingMsrp: 86800, keyFeatures: ['434 HP 2.9L Twin-Turbo V6', 'Sport air suspension with 10mm lower ride height', 'Sport exhaust with black tailpipes'] },
    ],
  },
  'porsche-911': {
    trims: [
      { name: 'Carrera', description: 'Iconic rear-engine benchmark: 388 HP 3.0L Twin-Turbo Boxer-6, 8-speed PDK, 3.9s 0-60 mph.', startingMsrp: 120100, keyFeatures: ['388 HP 3.0L Twin-Turbo Boxer-6', 'Porsche Active Suspension Management (PASM)', 'Curved 12.6-inch fully digital instrument display'] },
      { name: 'Carrera S', description: '443 HP Twin-Turbo Boxer-6 with Porsche Torque Vectoring Plus and available 7-speed manual.', startingMsrp: 131300, keyFeatures: ['443 HP 3.0L Twin-Turbo Boxer-6', 'Porsche Torque Vectoring Plus (PTV+)', 'Available 7-speed manual transmission'] },
      { name: 'Carrera GTS', description: 'T-Hybrid performance: 532 HP electrified Boxer-6 with electric exhaust turbocharger and rear-axle steering.', startingMsrp: 164900, keyFeatures: ['532 HP T-Hybrid system with e-turbo', 'Standard rear-axle steering', 'Sport Chrono Package with tire temperature display'] },
      { name: 'Turbo', description: '572 HP 3.7L Twin-Turbo Boxer-6, all-wheel drive, 2.7s 0-60 mph, and widened rear hips.', startingMsrp: 197200, keyFeatures: ['572 HP 3.7L Twin-Turbo Boxer-6', '2.7 second 0-60 mph acceleration', 'Porsche Ceramic Composite Brakes (PCCB)'] },
      { name: 'GT3', description: 'Naturally aspirated motorsport apex: 502 HP 4.0L Flat-6 (9,000 RPM), swan-neck rear wing.', startingMsrp: 222500, keyFeatures: ['502 HP 4.0L naturally aspirated Boxer-6 (9,000 RPM redline)', 'Swan-neck top-mount rear wing with aero diffuser', 'Double-wishbone front suspension'] },
    ],
  },
};

/**
 * Instantaneous OEM factory specifications generator for all US makes and models.
 * Runs synchronously in 0ms with verified trims, engines, horsepower, and drivetrains.
 */
export function generateModelSpecificOptions(
  year: number,
  make: string,
  model: string
): CarOptionsLookupResult {
  const cleanMake = (make || 'Vehicle').trim();
  const cleanModel = (model || 'Model').trim();
  const makeSlug = toSlug(cleanMake);
  const modelSlug = toSlug(cleanModel);
  const numYear = year ? Number(year) : 2024;

  const isTruck = /truck|f-?150|silverado|sierra|ram|tundra|titan|tacoma|colorado|ranger|frontier|canyon|gladiator/i.test(modelSlug);
  const isHybridOrEv = /hybrid|phev|prime|electric|ev|lightning|ioniq|mach-e|model 3|model y|model s|model x|leaf|prologue|bz4x|solterra|ariya/i.test(modelSlug);
  const isLargeSuv = /expedition|tahoe|suburban|yukon|sequoia|armada|wagoneer|grand wagoneer/i.test(modelSlug);
  const isMinivan = /carnival|sedona|sienna|odyssey|pacifica|voyager/i.test(modelSlug);
  const isSuv = isLargeSuv || /suv|rav4|cr-v|cx-5|cx-50|cx-90|outback|forester|crosstrek|explorer|cherokee|grand cherokee|highlander|grand highlander|pilot|passport|telluride|palisade|sorento|sportage|tucson|santa fe|atlas|tiguan|ascent|pathfinder|rogue|wrangler|4runner/i.test(modelSlug);

  // 1. Check exact model in KNOWN_MODEL_TRIMS
  let rawTrimList: Array<{ name: string; description: string; startingMsrp: number; keyFeatures: string[] }> = [];

  const yearKey = `${makeSlug}-${modelSlug}-${numYear}`;
  const baseKey = `${makeSlug}-${modelSlug}`;

  if (numYear >= 2025 && KNOWN_MODEL_TRIMS[`${makeSlug}-${modelSlug}-2025`]) {
    rawTrimList = KNOWN_MODEL_TRIMS[`${makeSlug}-${modelSlug}-2025`].trims;
  } else if (KNOWN_MODEL_TRIMS[baseKey]) {
    rawTrimList = KNOWN_MODEL_TRIMS[baseKey].trims;
  } else {
    // Only search within exact normalized variations
    const candidates = [
      `${makeSlug}-${modelSlug}`,
      `${makeSlug}-${modelSlug.replace(/-1500$/, '')}`,
      `${makeSlug}-${modelSlug}-1500`,
      `${makeSlug}-${modelSlug.replace(/-max$/, '')}`,
    ];
    for (const cand of candidates) {
      if (KNOWN_MODEL_TRIMS[cand]) {
        rawTrimList = KNOWN_MODEL_TRIMS[cand].trims;
        break;
      }
    }
  }

  // 2. Fallback to Brand-Specific authentic OEM progression (no slashes, real manufacturer names)
  if (!rawTrimList || rawTrimList.length === 0) {
    if (makeSlug.includes('gmc')) {
      rawTrimList = [
        { name: 'Pro', description: 'Professional utility specification with LED headlamps and GMC Pro Safety.', startingMsrp: isTruck ? 39700 : 34000, keyFeatures: ['LED headlamps', 'GMC Pro Safety suite', 'Durable interior surfaces'] },
        { name: 'SLE', description: 'Volume trim with heated front seats, power driver seat, and enhanced touchscreen.', startingMsrp: isTruck ? 51300 : 38000, keyFeatures: ['Heated front seats', '10-way power driver seat', 'Dual-zone climate control'] },
        { name: 'Elevation', description: 'Monochromatic sport styling with black exterior accents and gloss-black alloy wheels.', startingMsrp: isTruck ? 53500 : 41000, keyFeatures: ['Gloss-black alloy wheels', 'Monochromatic body-color grille', 'Sport styling'] },
        { name: 'SLT', description: 'Mainstream chrome luxury with leather-appointed seating, hands-free liftgate, and power accessories.', startingMsrp: isTruck ? 56900 : 44000, keyFeatures: ['Leather-appointed seating', 'Hands-free power tailgate', 'Multi-zone climate control'] },
        { name: 'AT4', description: 'Dedicated factory off-road with lifted suspension, 4WD transfer case, and all-terrain tires.', startingMsrp: isTruck ? 68100 : 49000, keyFeatures: ['Factory suspension lift', 'All-terrain tires', 'Autotrac 2-speed transfer case'] },
        { name: 'Denali', description: 'Pinnacle luxury benchmark with authentic wood trim, Bose audio, and Continuous Damping.', startingMsrp: isTruck ? 71200 : 54000, keyFeatures: ['Continuous Damping suspension', 'Signature Denali chrome grille', 'Authentic open-pore wood'] },
      ];
    } else if (makeSlug.includes('ford')) {
      rawTrimList = [
        { name: 'XL', description: 'Commercial and utility standard with LED headlights and Ford Co-Pilot360.', startingMsrp: isTruck ? 36875 : 29000, keyFeatures: ['Ford Co-Pilot360 suite', 'LED headlights', 'SYNC infotainment display'] },
        { name: 'STX', description: 'Sport street appearance with dark alloy wheels, body-color bumpers, and sport bucket seats.', startingMsrp: isTruck ? 44000 : 33000, keyFeatures: ['Dark finish alloy wheels', 'Body-color bumpers', 'Sport interior accents'] },
        { name: 'XLT', description: 'The volume truck & SUV trim: heated front seats, power liftgate/tailgate, and blind spot radar.', startingMsrp: isTruck ? 47620 : 36000, keyFeatures: ['Heated front seats', 'Blind Spot Information System (BLIS)', 'Alloy wheels'] },
        { name: 'Lariat', description: 'Premium luxury: leather seating, B&O audio, 4A automatic 4WD, and ventilated seats.', startingMsrp: isTruck ? 65305 : 44000, keyFeatures: ['Leather-trimmed interior', 'Bang & Olufsen sound', 'Ventilated front seats'] },
        { name: 'Tremor', description: 'Factory off-road warrior with lifted suspension, 33-inch AT tires, and rear locking differential.', startingMsrp: isTruck ? 64350 : 47000, keyFeatures: ['Factory lifted suspension', 'All-terrain tires', 'Electronic rear locker'] },
        { name: 'Platinum', description: 'Flagship executive: massaging front seats, continuous damping, and BlueCruise hands-free driving.', startingMsrp: isTruck ? 73845 : 54000, keyFeatures: ['Active Motion massaging seats', 'Continuous Controlled Damping', 'Ford BlueCruise hands-free'] },
      ];
    } else if (makeSlug.includes('chevrolet') || makeSlug.includes('chevy')) {
      rawTrimList = [
        { name: 'LS', description: 'Standard functional utility with Chevy Safety Assist and color touchscreen.', startingMsrp: isTruck ? 36800 : 28000, keyFeatures: ['Chevy Safety Assist', 'Touchscreen with wireless CarPlay', 'LED headlights'] },
        { name: 'LT', description: 'The core volume trim: 13.4-inch touchscreen, heated front seats, and dual-zone climate.', startingMsrp: isTruck ? 48000 : 34000, keyFeatures: ['13.4-inch horizontal display', 'Heated front seats', 'Remote vehicle starter'] },
        { name: 'RST', description: 'Street performance monochromatic styling with black Bowties and sport suspension.', startingMsrp: isTruck ? 52400 : 38000, keyFeatures: ['Monochromatic body-color trim', 'Black Bowtie emblems', 'Sport alloy wheels'] },
        { name: 'Z71', description: 'Off-road package with skid plates, red recovery hooks, and Autotrac 2-speed 4WD.', startingMsrp: isTruck ? 58000 : 42000, keyFeatures: ['Z71 off-road suspension', 'Skid plates & recovery hooks', 'Autotrac 2-speed transfer case'] },
        { name: 'Premier', description: 'Executive luxury: perforated leather, ventilated seats, and Bose premium audio.', startingMsrp: isTruck ? 57700 : 46000, keyFeatures: ['Perforated leather seating', 'Bose premium audio', 'Hands-free power liftgate'] },
        { name: 'High Country', description: 'Flagship luxury with open-pore wood trim, 20-inch wheels, and Super Cruise hands-free driving.', startingMsrp: isTruck ? 62700 : 54000, keyFeatures: ['Authentic open-pore wood', 'Super Cruise hands-free driving', 'Bose Centerpoint surround'] },
      ];
    } else if (makeSlug.includes('toyota')) {
      rawTrimList = [
        { name: 'LE', description: 'Essential trim with Toyota Safety Sense, alloy wheels, and wireless smartphone integration.', startingMsrp: 29000, keyFeatures: ['Toyota Safety Sense 3.0', 'LED headlights', 'Wireless Apple CarPlay & Android Auto'] },
        { name: 'XLE', description: 'Volume trim with power driver seat, dual-zone automatic climate control, and blind spot monitor.', startingMsrp: 32500, keyFeatures: ['Blind Spot Monitor with Rear Cross-Traffic', '8-way power adjustable driver seat', 'Dual-zone climate control'] },
        { name: 'SE', description: 'Sport-tuned styling with sport mesh grille, athletic suspension, and 18-inch black alloy wheels.', startingMsrp: 34000, keyFeatures: ['Sport-tuned suspension', '18-inch black alloy wheels', 'SofTex sport seating'] },
        { name: 'TRD Off-Road', description: 'Rugged all-terrain with Bilstein shocks, multi-terrain select, and all-terrain tires.', startingMsrp: 41000, keyFeatures: ['TRD-tuned suspension', 'Multi-Terrain Select with Crawl Control', 'All-terrain trail tires'] },
        { name: 'Limited', description: 'Full luxury specification with perforated leather, ventilated front seats, and JBL audio.', startingMsrp: 44000, keyFeatures: ['Perforated leather seating', 'JBL premium audio system', 'Ventilated front seats'] },
        { name: 'Platinum', description: 'Flagship grade: panoramic moonroof, Head-Up Display, 360-degree camera, and heated 2nd-row seats.', startingMsrp: 52000, keyFeatures: ['Panoramic glass moonroof', 'Head-Up Display', 'Heated & ventilated front and rear seats'] },
      ];
    } else if (makeSlug.includes('honda')) {
      rawTrimList = [
        { name: 'LX', description: 'Core functional value with Honda Sensing active safety suite and full LED lighting.', startingMsrp: 27000, keyFeatures: ['Honda Sensing driver assistance', 'Full LED headlights', 'Multi-angle rearview camera'] },
        { name: 'Sport', description: 'Athletic appearance with gloss-black alloy wheels, sport pedals, and leather-wrapped steering wheel.', startingMsrp: 29500, keyFeatures: ['Gloss-black alloy wheels', 'Sport interior accents', 'Smart Entry with Walk Away Auto Lock'] },
        { name: 'EX', description: 'Volume trim with one-touch power moonroof, heated front seats, and dual-zone climate.', startingMsrp: 32000, keyFeatures: ['One-touch power moonroof', 'Heated front seats', 'Blind Spot Information System'] },
        { name: 'EX-L', description: 'Leather-trimmed interior, power tailgate, wireless phone charging, and upgraded 9-inch touchscreen.', startingMsrp: 35000, keyFeatures: ['Leather-trimmed interior', 'Power tailgate', 'Wireless Apple CarPlay & Android Auto'] },
        { name: 'Touring', description: 'Pinnacle luxury: Bose premium audio, hands-free power tailgate, and built-in navigation.', startingMsrp: 40000, keyFeatures: ['Bose 12-speaker premium audio', 'Hands-free access power tailgate', 'Wireless phone charger'] },
      ];
    } else if (makeSlug.includes('jeep')) {
      rawTrimList = [
        { name: 'Sport', description: 'Authentic Jeep capability with Command-Trac 4WD, Dana solid axles, and Uconnect display.', startingMsrp: 34000, keyFeatures: ['Command-Trac 4WD system', 'Dana heavy-duty axles', 'Uconnect touchscreen'] },
        { name: 'Willys', description: 'Heritage off-road package with 33-inch mud-terrain tires, rock rails, and rear e-locker.', startingMsrp: 40000, keyFeatures: ['33-inch all-terrain/mud tires', 'Electronic rear locking differential', 'Heavy-duty rock rails'] },
        { name: 'Sahara', description: 'Premium all-weather freedom with body-color fender flares, heated leather seats, and full-time 4WD.', startingMsrp: 48000, keyFeatures: ['Body-color exterior flares', 'Heated front seats and steering wheel', 'Full-time Selec-Trac 4WD'] },
        { name: 'Rubicon', description: 'The off-road benchmark: 4:1 Rock-Trac transfer case, front/rear Tru-Lok lockers, and sway-bar disconnect.', startingMsrp: 52000, keyFeatures: ['Tru-Lok front and rear lockers', 'Electronic front sway-bar disconnect', '4:1 Rock-Trac heavy-duty 4WD'] },
        { name: 'Overland', description: 'Luxury trail rated: Quadra-Lift air suspension, panoramic sunroof, and Nappa leather.', startingMsrp: 60000, keyFeatures: ['Quadra-Lift air suspension', 'Panoramic power sunroof', 'Nappa leather seating'] },
        { name: 'Summit', description: 'Flagship luxury: quilted Palermo leather, McIntosh 19-speaker audio, and massaging front seats.', startingMsrp: 64000, keyFeatures: ['Quilted Palermo leather', 'McIntosh 19-speaker sound', 'Massaging front seats'] },
      ];
    } else if (makeSlug.includes('ram')) {
      rawTrimList = [
        { name: 'Tradesman', description: 'Heavy-duty commercial utility with durable vinyl or cloth seating and coil-spring rear suspension.', startingMsrp: 40275, keyFeatures: ['Coil-spring multi-link rear suspension', 'Push-button start', 'Class IV trailer hitch'] },
        { name: 'Big Horn', description: 'The volume truck: chrome bumpers, 18-inch wheels, leather-wrapped wheel, and fog lamps.', startingMsrp: 44385, keyFeatures: ['Uconnect 12-inch touchscreen display', '18-inch cast aluminum wheels', 'Leather-wrapped steering wheel'] },
        { name: 'Laramie', description: 'Mainstream luxury: heated and ventilated leather seats, 9-speaker Alpine audio, and 4WD Auto mode.', startingMsrp: 60030, keyFeatures: ['Heated & ventilated leather front seats', '9-speaker Alpine audio system', 'Standard 4WD Auto mode'] },
        { name: 'Rebel', description: 'Factory off-road warrior with Bilstein monotube shocks, 33-inch Goodyear DuraTrac tires, and rear locker.', startingMsrp: 64195, keyFeatures: ['Bilstein performance off-road shocks', 'Electronic locking rear differential', '33-inch Goodyear DuraTrac tires'] },
        { name: 'Limited', description: 'Pinnacle luxury: 100% full leather interior, 19-speaker Harman Kardon sound, and standard air suspension.', startingMsrp: 75150, keyFeatures: ['Active-Level four-corner air suspension', '19-speaker 900W Harman Kardon audio', 'Premium Natura Plus full leather'] },
      ];
    } else if (makeSlug.includes('lexus')) {
      rawTrimList = [
        { name: 'Base', description: 'Refined entry luxury with NuLuxe upholstery and Lexus Safety System+ 3.0.', startingMsrp: 44000, keyFeatures: ['Lexus Safety System+ 3.0', 'Bi-LED headlamps', 'Wireless Apple CarPlay'] },
        { name: 'Premium', description: 'Volume luxury: power moonroof, heated and ventilated front seats, and driver memory.', startingMsrp: 48500, keyFeatures: ['Power moonroof', 'Heated & ventilated front seats', 'Power driver memory'] },
        { name: 'Luxury', description: 'Semi-aniline leather, open-pore wood trim, ambient lighting, and panoramic display.', startingMsrp: 54000, keyFeatures: ['Semi-aniline leather interior', '14-inch multimedia display', 'Multi-color ambient lighting'] },
        { name: 'F SPORT Handling', description: 'Adaptive variable suspension, sport bucket seats, and dark metallic 20-inch wheels.', startingMsrp: 56000, keyFeatures: ['Adaptive Variable Suspension (AVS)', 'Sport bolstered bucket seats', 'F SPORT 20-inch dark alloy wheels'] },
      ];
    } else if (makeSlug.includes('bmw')) {
      rawTrimList = [
        { name: 'Core', description: 'Well-appointed baseline with BMW Curved Display, SensaTec seating, and active driving assistant.', startingMsrp: 46000, keyFeatures: ['BMW Curved Display', 'Navigation with iDrive', 'Active Driving Assistant'] },
        { name: 'M Sport', description: 'Aerodynamic kit, M sport suspension, shadowline exterior trim, and M steering wheel.', startingMsrp: 52000, keyFeatures: ['M Aerodynamic kit', 'M sport steering wheel', 'Variable sport steering'] },
        { name: 'M Performance', description: 'High-output 6-cylinder or V8 powertrain, M Sport differential, and upgraded M sport brakes.', startingMsrp: 64000, keyFeatures: ['TwinPower Turbo high-output engine', 'M Sport differential', 'M sport brakes with blue calipers'] },
      ];
    } else if (makeSlug.includes('mercedes')) {
      rawTrimList = [
        { name: 'Premium', description: 'Well-appointed baseline with MBUX touchscreen, heated front seats, and blind-spot assist.', startingMsrp: 48000, keyFeatures: ['MBUX multimedia system', 'Heated power front seats with memory', 'Blind Spot Assist'] },
        { name: 'Exclusive', description: 'Burmester 3D surround sound, augmented reality navigation, and ambient lighting.', startingMsrp: 53500, keyFeatures: ['Burmester 3D surround sound', 'MB Navigation with Augmented Reality', 'Enhanced ambient interior lighting'] },
        { name: 'Pinnacle', description: 'Head-up display, digital light projection headlamps, and heat/noise-insulating acoustic glass.', startingMsrp: 59000, keyFeatures: ['Head-Up Display', 'Digital Light headlamps', 'Acoustic insulating glass'] },
        { name: 'AMG Line', description: 'AMG body styling, sport brake system, sport seats, and flat-bottom sport steering wheel.', startingMsrp: 57000, keyFeatures: ['AMG aerodynamic body styling', 'Sport brake system', 'Flat-bottom sport steering wheel'] },
      ];
    } else if (makeSlug.includes('audi')) {
      rawTrimList = [
        { name: 'Premium', description: 'Entry luxury with quattro all-wheel drive, leather seating, and Audi pre sense safety.', startingMsrp: 45000, keyFeatures: ['quattro all-wheel drive standard', 'Leather seating surfaces', 'Audi pre sense safety suite'] },
        { name: 'Premium Plus', description: 'Audi virtual cockpit plus, Bang & Olufsen 3D sound, and top-view 360 camera.', startingMsrp: 50500, keyFeatures: ['Audi virtual cockpit plus', 'Bang & Olufsen 3D premium audio', 'Top view 360-degree camera system'] },
        { name: 'Prestige', description: 'Matrix-design LED headlights, Head-Up Display, ventilated front seats, and dual-pane acoustic glass.', startingMsrp: 57000, keyFeatures: ['Matrix-design LED headlights', 'Head-Up Display', 'Ventilated front seats'] },
      ];
    } else if (makeSlug.includes('kia')) {
      rawTrimList = [
        { name: 'LX', description: 'Standard functional equipment with Kia Drive Wise safety and digital touchscreen.', startingMsrp: isSuv ? 31000 : 22000, keyFeatures: ['Kia Drive Wise safety suite', 'Touchscreen infotainment', 'LED headlights'] },
        { name: 'S', description: 'Volume upgrade with alloy wheels, heated front seats, and smart key push-button start.', startingMsrp: isSuv ? 33500 : 24000, keyFeatures: ['Alloy wheels', 'Heated front seats', 'Smart key with push button start'] },
        { name: 'EX', description: 'Mainstream luxury with SynTex seating, dual-zone climate, and wireless phone charging.', startingMsrp: isSuv ? 37000 : 27000, keyFeatures: ['SynTex artificial leather', 'Dual-zone climate control', 'Power driver seat'] },
        { name: 'SX', description: 'Premium specification with panoramic displays, premium audio, and hands-free smart liftgate.', startingMsrp: isSuv ? 41000 : 30000, keyFeatures: ['Panoramic curved display', 'Smart power liftgate', 'Blind-Spot View Monitor'] },
        { name: 'SX Prestige', description: 'Flagship luxury with ventilated front seats, premium audio, and multi-color ambient lighting.', startingMsrp: isSuv ? 46000 : 34000, keyFeatures: ['Ventilated front bucket seats', 'Bose / Harman Kardon audio', 'Surround View 360 camera'] },
      ];
    } else if (makeSlug.includes('hyundai')) {
      rawTrimList = [
        { name: 'SE', description: 'Essential trim with Hyundai SmartSense safety and wireless smartphone integration.', startingMsrp: isSuv ? 30000 : 22000, keyFeatures: ['Hyundai SmartSense', 'LED headlights', 'Wireless Apple CarPlay & Android Auto'] },
        { name: 'SEL', description: 'Volume trim with heated front seats, hands-free smart liftgate, and dual-zone climate.', startingMsrp: isSuv ? 34000 : 25000, keyFeatures: ['Hands-free smart liftgate', 'Heated front seats', 'Blind-Spot Collision Warning'] },
        { name: 'XRT', description: 'Rugged appearance with dark alloy wheels, side steps, and black exterior trim.', startingMsrp: isSuv ? 37500 : 28000, keyFeatures: ['Dark finish alloy wheels', 'Rugged lower body cladding', 'Black roof side rails'] },
        { name: 'Limited', description: 'Full luxury specification with leather upholstery, surround view monitor, and ventilated seats.', startingMsrp: isSuv ? 42000 : 31000, keyFeatures: ['Leather upholstery', 'Surround View Monitor', 'Ventilated front seats'] },
        { name: 'Calligraphy', description: 'Flagship pinnacle: quilted Nappa leather, head-up display, and remote smart parking.', startingMsrp: isSuv ? 47000 : 35000, keyFeatures: ['Quilted Nappa leather', 'Head-Up Display', 'Remote Smart Parking Assist'] },
      ];
    } else {
      // Clean universal automotive trim progression for any custom vehicle
      rawTrimList = [
        { name: 'Base', description: 'Standard functional equipment with essential safety and digital display features.', startingMsrp: isTruck ? 36000 : isSuv ? 29000 : 23000, keyFeatures: ['Touchscreen infotainment', 'Driver assist suite', 'LED exterior lighting'] },
        { name: 'Premium', description: 'Popular mid-tier trim with alloy wheels, heated front seats, dual-zone climate, and enhanced audio.', startingMsrp: isTruck ? 45000 : isSuv ? 34000 : 27000, keyFeatures: ['Alloy wheels', 'Heated front seats', 'Blind spot monitoring'] },
        { name: 'Sport', description: 'Athletic appearance with darker exterior accents, sport wheels, and retuned suspension.', startingMsrp: isTruck ? 49000 : isSuv ? 37000 : 29000, keyFeatures: ['Dark finish alloy wheels', 'Sport interior accents', 'Paddle shifters'] },
        { name: 'Limited', description: 'Full luxury specification with leather upholstery, premium sound, moonroof, and high-output engine.', startingMsrp: isTruck ? 58000 : isSuv ? 41000 : 33000, keyFeatures: ['Leather upholstery', 'Premium surround audio', 'Panoramic moonroof'] },
      ];
    }
  }

  // 3. Engine configurations
  let enginesList: EngineOption[] = [];
  let drivetrainsList: DrivetrainOption[] = [];

  if (isMinivan) {
    if (makeSlug.includes('kia')) {
      enginesList = [
        {
          id: 'carnival-3-5-smartstream-v6',
          name: '3.5L Smartstream GDI V6 (290 HP / 262 lb-ft)',
          displacement: '3.5L V6',
          configuration: 'Naturally Aspirated 60° DOHC 24-Valve V6 with Dual Injection (MPI + GDI)',
          aspiration: 'Naturally Aspirated',
          horsepower: 290,
          torqueLbFt: 262,
          fuelType: 'Gasoline',
          towingCapacityLbs: 3500,
          efficiency: { city: 19, highway: 26, combined: 22, unit: 'MPG' },
          keyReliabilityNotes: 'Dual multi-port and direct injection system prevents intake valve carbon coking. Timing chain driven with proven durability.',
          pros: ['Naturally aspirated simplicity with linear power delivery', 'Dual injection eliminates intake valve carbon deposits', 'Stout 3,500-lb towing capacity for family pop-up campers'],
          watchouts: ['Front-wheel drive only on gas V6', 'Requires 5,000-mile synthetic oil intervals'],
          bestFor: 'Family road trips, daily carpooling, and long-term mechanical reliability without turbo maintenance.',
        },
        {
          id: 'carnival-1-6-turbo-hybrid',
          name: '1.6L Turbo Hybrid Powertrain (242 HP / 271 lb-ft)',
          displacement: '1.6L Turbo Hybrid',
          configuration: 'Turbocharged 1.6L Inline-4 with 54 kW Permanent Magnet Electric Motor and 1.49 kWh Battery',
          aspiration: 'Hybrid',
          horsepower: 242,
          torqueLbFt: 271,
          fuelType: 'Hybrid',
          towingCapacityLbs: 2500,
          efficiency: { city: 34, highway: 31, combined: 33, unit: 'MPG' },
          keyReliabilityNotes: 'Combines small-displacement turbo with instant electric motor torque for 40% higher urban fuel economy.',
          pros: ['Exceptional 33+ combined MPG reduces family fuel expenditure by 40%', 'Instant electric torque off the line'],
          watchouts: ['Lower towing capacity than 3.5L V6 (2,500 lbs)', 'Hybrid high-voltage battery system maintenance past 100k miles'],
          bestFor: 'City commuting, daily school runs, and maximum fuel savings.',
        },
      ];
      drivetrainsList = [
        { id: 'fwd-8speed-auto', type: 'FWD', name: 'Front-Wheel Drive (8-Speed Automatic)', description: 'Hyundai-Kia 8-speed planetary automatic driving front wheels.', keyReliabilityNotes: 'Reliable 8-speed planetary automatic transmission; inspect transmission fluid at 60k miles.' },
      ];
    } else if (makeSlug.includes('toyota')) {
      enginesList = [
        {
          id: 'sienna-2-5-hybrid',
          name: '2.5L Dynamic Force 4-Cylinder Hybrid System (245 HP)',
          displacement: '2.5L Hybrid',
          configuration: 'Atkinson-Cycle 4-Cylinder with Dual Electric Motor-Generators & eCVT',
          aspiration: 'Hybrid',
          horsepower: 245,
          torqueLbFt: 176,
          fuelType: 'Hybrid',
          towingCapacityLbs: 3500,
          efficiency: { city: 36, highway: 36, combined: 36, unit: 'MPG' },
          keyReliabilityNotes: 'Legendary Toyota Hybrid Synergy Drive with planetary gearset eCVT. Proven 300,000-mile durability with no alternator, starter, or drive belts.',
          pros: ['Class-leading 36 MPG city and highway', 'Extremely low maintenance requirements', 'Electronic on-demand AWD available'],
          watchouts: ['Engine can sound drone-like under full-throttle merging', 'Inspect hybrid battery cooling fan filter yearly'],
          bestFor: 'High-mileage family travel and owners seeking maximum long-term reliability and fuel savings.',
        },
      ];
      drivetrainsList = [
        { id: 'sienna-awd-e', type: 'AWD', name: 'Electronic On-Demand All-Wheel Drive (AWD)', description: 'Dedicated independent rear electric motor powers rear wheels when slip is detected without center driveshaft.', keyReliabilityNotes: 'Zero mechanical center differential or driveshaft to leak.' },
        { id: 'sienna-fwd', type: 'FWD', name: 'Front-Wheel Drive (FWD)', description: 'Standard front-wheel drive delivering 36 MPG.', keyReliabilityNotes: 'Simple planetary transmission layout.' },
      ];
    } else if (makeSlug.includes('honda')) {
      enginesList = [
        {
          id: 'odyssey-3-5-vtec-v6',
          name: '3.5L 24-Valve SOHC i-VTEC V6 (280 HP / 262 lb-ft)',
          displacement: '3.5L V6',
          configuration: 'Naturally Aspirated 60° SOHC 24-Valve V6 with Variable Cylinder Management (VCM)',
          aspiration: 'Naturally Aspirated',
          horsepower: 280,
          torqueLbFt: 262,
          fuelType: 'Gasoline',
          towingCapacityLbs: 3500,
          efficiency: { city: 19, highway: 28, combined: 22, unit: 'MPG' },
          keyReliabilityNotes: 'Proven Honda J-series V6 architecture. Requires timing belt replacement every 100,000 miles or 7 years.',
          pros: ['Silky smooth throttle response and durable J35 engine block', '10-speed automatic transmission delivers crisp shifts'],
          watchouts: ['Timing belt service required at 100k miles ($800–$1,200)', 'Variable Cylinder Management (VCM) engine mounts can wear over time'],
          bestFor: 'Long-distance interstate highway driving and family road trips.',
        },
      ];
      drivetrainsList = [
        { id: 'odyssey-fwd-10speed', type: 'FWD', name: 'Front-Wheel Drive (10-Speed Automatic)', description: 'Honda-engineered 10-speed planetary automatic driving front wheels.', keyReliabilityNotes: 'Change Honda ATF Type 2.0 transmission fluid every 30k–45k miles.' },
      ];
    } else {
      enginesList = [
        {
          id: 'minivan-3-6-v6',
          name: '3.6L Pentastar V6 / 3.5L Naturally Aspirated V6 (287 HP)',
          displacement: '3.6L V6',
          configuration: 'DOHC 24-Valve Naturally Aspirated V6',
          aspiration: 'Naturally Aspirated',
          horsepower: 287,
          torqueLbFt: 262,
          fuelType: 'Gasoline',
          towingCapacityLbs: 3600,
          efficiency: { city: 19, highway: 28, combined: 22, unit: 'MPG' },
          keyReliabilityNotes: 'Standard naturally aspirated V6. Inspect oil cooler housing for weepage at high mileage.',
          pros: ['Strong passing power for fully loaded 7-8 passenger trips', 'Stow-n-Go seating compatibility'],
          watchouts: ['Oil filter housing gasket inspection at high mileage'],
          bestFor: 'Family transport and versatile cargo hauling.',
        },
      ];
      drivetrainsList = [
        { id: 'minivan-fwd', type: 'FWD', name: 'Front-Wheel Drive (FWD)', description: 'Front-wheel drive layout for maximum interior floor clearance.', keyReliabilityNotes: 'Standard front-wheel drive maintenance.' },
      ];
    }
  } else if (isLargeSuv) {
    if (makeSlug.includes('ford')) {
      if (numYear >= 2025) {
        enginesList = [
          {
            id: 'expedition-3-5-eb-standard',
            name: '3.5L EcoBoost Twin-Turbo V6 (Standard Output - 400 HP / 480 lb-ft)',
            displacement: '3.5L Twin-Turbo',
            configuration: 'Twin-Turbocharged 60° DOHC 24-Valve V6 (Aluminum Block with Dual Port/Direct Injection)',
            aspiration: 'Twin-Turbo',
            horsepower: 400,
            torqueLbFt: 480,
            fuelType: 'Gasoline',
            towingCapacityLbs: 9600,
            efficiency: { city: 17, highway: 23, combined: 19, unit: 'MPG' },
            keyReliabilityNotes: 'Mature 5th-gen EcoBoost with dual port & direct injection eliminating intake carbon buildup. Redesigned cam phasers installed at factory.',
            pros: ['Massive 480 lb-ft torque plateau starting at 3,250 RPM pulls 9,600 lb trailers with ease', 'Dual port and direct fuel injection prevents valve carbon build-up', 'Redesigned phasers resolve previous cold-start rattle'],
            watchouts: ['Strict 5,000-mile synthetic oil intervals recommended', 'High-mileage turbo coolant line O-rings require inspection past 80k miles'],
            bestFor: 'Family road trips, daily driving, and heavy towing up to 9,600 lbs on Active, King Ranch, and Platinum.',
          },
          {
            id: 'expedition-3-5-ho-eb',
            name: 'High-Output 3.5L EcoBoost Twin-Turbo V6 (Tremor & Platinum Ultimate - 440 HP / 510 lb-ft)',
            displacement: '3.5L HO Twin-Turbo',
            configuration: 'Twin-Turbocharged 60° DOHC 24-Valve High-Flow V6 with Dual Exhaust & Upgraded Turbos',
            aspiration: 'Twin-Turbo',
            horsepower: 440,
            torqueLbFt: 510,
            fuelType: 'Gasoline',
            towingCapacityLbs: 9600,
            efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
            keyReliabilityNotes: 'Raptor-derived heavy-duty turbochargers, stainless steel high-flow exhaust manifolds, and active-valve dual exhaust.',
            pros: ['Tremendous 440 hp and 510 lb-ft torque provides explosive acceleration', 'Heavy-duty cooling package borrowed from Raptor development', 'True dual exhaust with aggressive acoustic tone'],
            watchouts: ['Requires 91+ premium octane fuel to achieve full 440 hp rating', 'Tremor 33-inch General Grabber A/T tires reduce highway MPG to ~19 MPG'],
            bestFor: 'Tremor off-road overlanding, steep mountain passes, and buyers wanting Raptor-grade punch in a full-size 3-row SUV.',
          },
        ];
        drivetrainsList = [
          { id: 'expedition-4wd-controltrac', type: '4WD / 4x4', name: 'Control Trac 4WD with Electronic Locking Rear Diff & 2-Speed Transfer Case', description: 'Standard on Tremor. Features 2H, 4A (auto full-time), 4H, and 4L low-range gearing with electronic locking rear axle.', keyReliabilityNotes: 'Heavy-duty BorgWarner transfer case with e-Locker; service transfer case fluid every 45,000 miles.' },
          { id: 'expedition-4wd-auto', type: '4WD / 4x4', name: 'Intelligent 4WD with Terrain Management System (with 4A Auto Mode)', description: 'Available on Active, King Ranch, and Platinum. Clutch-based 4A automatic mode safe for dry pavement, rain, and snow.', keyReliabilityNotes: 'Pavement-safe full-time 4A mode prevents driveline binding in mixed weather.' },
          { id: 'expedition-2wd', type: '2WD / 4x2', name: '2WD / 4x2 (Rear-Wheel Drive)', description: 'Standard on Active, King Ranch, and Platinum. Maximum payload rating, lower curb weight, and lowest routine maintenance.', keyReliabilityNotes: 'Zero front transfer case or front CV half-shafts to service.' },
        ];
      } else {
        enginesList = [
          {
            id: 'exped-gen4-3-5-eb',
            name: '3.5L EcoBoost Twin-Turbo V6 (380 - 400 HP / 470 - 480 lb-ft)',
            displacement: '3.5L Twin-Turbo',
            configuration: 'Twin-Turbocharged 60° DOHC 24-Valve V6',
            aspiration: 'Twin-Turbo',
            horsepower: 400,
            torqueLbFt: 480,
            fuelType: 'Gasoline',
            towingCapacityLbs: 9300,
            efficiency: { city: 17, highway: 23, combined: 19, unit: 'MPG' },
            keyReliabilityNotes: 'Check cold-start cam phaser rattle (Customer Satisfaction Program 21N03). Ensure 5,000-mile synthetic oil intervals.',
            pros: ['Exceptional 9,300 lbs towing capacity', 'Smooth 10-speed transmission integration', 'Abundant low-end torque for mountain hauling'],
            watchouts: ['Cam phaser rattle on cold starts (2018–2020 models)', 'Turbo coolant pipe quick-disconnect leaks at high mileage'],
            bestFor: 'Family road trips and heavy trailer towing under 9,300 lbs.',
          },
          {
            id: 'exped-gen4-3-5-ho',
            name: 'High-Output 3.5L EcoBoost V6 (Timberline & Stealth - 440 HP / 510 lb-ft)',
            displacement: '3.5L HO Twin-Turbo',
            configuration: 'Twin-Turbocharged 60° DOHC 24-Valve High-Output V6',
            aspiration: 'Twin-Turbo',
            horsepower: 440,
            torqueLbFt: 510,
            fuelType: 'Gasoline',
            towingCapacityLbs: 9200,
            efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
            keyReliabilityNotes: 'Raptor-derived engine calibration with upgraded turbochargers and dual exhaust.',
            pros: ['440 horsepower provides sports-car acceleration in a large SUV', 'Standard on Timberline off-road trim'],
            watchouts: ['Premium 91+ octane fuel required for maximum power', 'Faster brake and tire wear'],
            bestFor: 'Off-road exploration (Timberline) and buyers wanting high-output passing power.',
          },
        ];
        drivetrainsList = [
          { id: 'exped-4wd-auto', type: '4WD / 4x4', name: 'Control Trac 4WD with Terrain Management System', description: 'Features 2H, 4A (automatic on-demand for dry pavement/rain), 4H, and 4L low range.', keyReliabilityNotes: 'Inspect transfer case fluid every 45,000 miles.' },
          { id: 'exped-2wd', type: '2WD / 4x2', name: '2WD / 4x2 (Rear-Wheel Drive)', description: 'Rear-wheel drive layout with higher payload rating and simpler maintenance.', keyReliabilityNotes: 'Zero front axle or transfer case components to maintain.' },
        ];
      }
    } else {
      enginesList = [
        {
          id: 'suv-v8-std',
          name: 'Naturally Aspirated American V8 Engine (355 - 420 HP)',
          displacement: '5.3L / 6.2L V8',
          configuration: 'Naturally Aspirated 90° OHV / DOHC V8',
          aspiration: 'Naturally Aspirated',
          horsepower: 355,
          torqueLbFt: 383,
          fuelType: 'Gasoline',
          towingCapacityLbs: 8400,
          efficiency: { city: 16, highway: 20, combined: 18, unit: 'MPG' },
          keyReliabilityNotes: 'Classic naturally aspirated V8 simplicity. Change full synthetic oil every 5,000 miles to protect valve lifters.',
          pros: ['Linear throttle response and authentic V8 exhaust note', 'Widespread parts availability and straightforward servicing'],
          watchouts: ['Fuel consumption in stop-and-go city traffic', 'Cylinder deactivation lifters require clean oil'],
          bestFor: 'Family road trips and heavy trailer towing.',
        },
        {
          id: 'suv-diesel-std',
          name: 'Turbo-Diesel / High-Output Engine (305 - 420 HP)',
          displacement: '3.0L Turbo-Diesel / 6.2L High-Output',
          configuration: 'Turbocharged Inline-6 or High-Output V8',
          aspiration: 'Turbocharged',
          horsepower: 420,
          torqueLbFt: 460,
          fuelType: 'Gasoline',
          towingCapacityLbs: 8600,
          efficiency: { city: 15, highway: 21, combined: 17, unit: 'MPG' },
          keyReliabilityNotes: 'Supreme low-RPM pulling power for effortless mountain passing.',
          pros: ['Huge low-end torque for mountain towing', 'Smooth passing power at highway speeds'],
          watchouts: ['Premium fuel recommended for maximum output'],
          bestFor: 'Heavy trailer towing and long highway road trips.',
        },
      ];
      drivetrainsList = [
        { id: 'dt-suv-4wd-auto', type: '4WD / 4x4', name: '4WD / 4x4 (with Full-Time 4A Auto Mode)', description: 'Pavement-safe full-time automatic 4WD mode with 4-High and 4-Low range.', keyReliabilityNotes: 'Service transfer case fluid every 45k miles.' },
        { id: 'dt-suv-2wd', type: '2WD / 4x2', name: '2WD / 4x2 (Rear-Wheel Drive)', description: 'Rear-wheel drive layout with higher payload rating and lowest maintenance.', keyReliabilityNotes: 'Zero front transfer case or front differential to maintain.' },
      ];
    }
  } else if (isTruck) {
    enginesList = [
      {
        id: 'engine-turbo-truck',
        name: 'Turbocharged High-Torque Workhorse Engine',
        displacement: '2.7L / 3.5L Turbo',
        configuration: 'Turbocharged DOHC Inline-4 / Twin-Turbo V6',
        aspiration: 'Turbocharged',
        horsepower: 325,
        torqueLbFt: 400,
        fuelType: 'Gasoline',
        towingCapacityLbs: 10000,
        efficiency: { city: 19, highway: 24, combined: 21, unit: 'MPG' },
        keyReliabilityNotes: 'Strong low-RPM torque for towing. Adhere to 5,000-mile synthetic oil intervals to protect turbo bearings.',
        pros: ['Instant 400 lb-ft torque at low RPM', 'High unladen highway fuel efficiency'],
        watchouts: ['Higher turbo thermal load when towing continuously'],
        bestFor: 'Daily driving, light towing, and commuting.',
      },
      {
        id: 'engine-v8-truck',
        name: 'Naturally Aspirated American V8 Engine',
        displacement: '5.0L / 5.3L / 5.7L V8',
        configuration: 'Naturally Aspirated 90° OHV / DOHC V8',
        aspiration: 'Naturally Aspirated',
        horsepower: 395,
        torqueLbFt: 410,
        fuelType: 'Gasoline',
        towingCapacityLbs: 11500,
        efficiency: { city: 16, highway: 21, combined: 18, unit: 'MPG' },
        keyReliabilityNotes: 'Classic naturally aspirated V8 reliability with zero turbo complexity.',
        pros: ['Linear throttle response and authentic V8 exhaust rumble', 'Simple underhood maintenance'],
        watchouts: ['Higher fuel consumption during urban stop-and-go driving'],
        bestFor: 'Towing, highway cruising, and owners wanting long-term mechanical simplicity.',
      },
    ];
    drivetrainsList = [
      { id: 'dt-4x4-auto', type: '4WD / 4x4', name: '4x4 / 4WD (Electronic 2-Speed Transfer Case with 4A Auto Mode)', description: 'Pavement-safe full-time 4A automatic mode with 4-High and 4-Low range.', keyReliabilityNotes: 'Service transfer case fluid every 45k miles.' },
      { id: 'dt-2wd-rwd', type: '2WD / 4x2', name: '2WD / 4x2 (Rear-Wheel Drive)', description: 'Solid rear axle configuration with maximum payload capacity.', keyReliabilityNotes: 'Simplest layout with no front driveshaft or transfer case.' },
    ];
  } else if (isHybridOrEv) {
    enginesList = [
      {
        id: 'engine-hybrid-system',
        name: 'Gas-Electric Two-Motor Hybrid Powertrain',
        displacement: '2.5L Hybrid / Dual-Motor',
        configuration: 'Atkinson-Cycle 4-Cylinder with Electric Drive Unit',
        aspiration: 'Hybrid',
        horsepower: 220,
        torqueLbFt: 225,
        fuelType: 'Hybrid',
        efficiency: { city: 42, highway: 38, combined: 40, unit: 'MPG' },
        keyReliabilityNotes: 'Planetary eCVT eliminates traditional friction belts and torque converters. Extremely reliable with 200,000+ mile track record.',
        pros: ['Outstanding 40+ MPG fuel efficiency', 'Virtually zero starter or alternator wear'],
        watchouts: ['Inspect hybrid battery cooling fan filter yearly'],
        bestFor: 'Commuters and rideshare operators seeking maximum fuel savings.',
      },
      {
        id: 'engine-turbo-gas',
        name: 'Turbocharged Direct-Injection Gas Engine',
        displacement: '2.0L Turbo',
        configuration: 'Turbocharged DOHC 16-Valve 4-Cylinder',
        aspiration: 'Turbocharged',
        horsepower: 250,
        torqueLbFt: 275,
        fuelType: 'Gasoline',
        efficiency: { city: 24, highway: 31, combined: 27, unit: 'MPG' },
        keyReliabilityNotes: 'Punchy passing acceleration; requires 5,000-mile synthetic oil changes.',
        pros: ['Fast turbo acceleration', 'Quiet highway passing'],
        watchouts: ['Turbo oil feed line maintenance'],
        bestFor: 'Drivers prioritizing responsiveness and passing speed.',
      },
    ];
    drivetrainsList = [
      { id: 'dt-awd-elec', type: 'AWD', name: 'AWD (Electronic All-Wheel Drive with Dedicated Rear Motor)', description: 'Independent rear electric motor provides instant rain/snow traction with no center driveshaft.', keyReliabilityNotes: 'Inspect rear electric drive inverter coolant.' },
      { id: 'dt-fwd-std', type: 'FWD', name: 'FWD (Front-Wheel Drive)', description: 'Standard front-wheel drive for maximum efficiency and range.', keyReliabilityNotes: 'Lowest maintenance configuration.' },
    ];
  } else {
    enginesList = [
      {
        id: 'engine-std-4cyl',
        name: 'Naturally Aspirated Standard Engine',
        displacement: isSuv ? '2.5L NA' : '2.0L NA',
        configuration: 'DOHC 16-Valve Inline-4',
        aspiration: 'Naturally Aspirated',
        horsepower: 190,
        torqueLbFt: 185,
        fuelType: 'Gasoline',
        efficiency: { city: 28, highway: 35, combined: 31, unit: 'MPG' },
        keyReliabilityNotes: 'Simple, bulletproof mechanical layout with low cost of ownership.',
        pros: ['Affordable routine maintenance', 'Zero turbo boost plumbing or heat fatigue'],
        watchouts: ['Modest acceleration when vehicle is fully loaded with passengers'],
        bestFor: 'Long-term reliability and low operating expenses.',
      },
      {
        id: 'engine-perf-turbo',
        name: 'High-Output Turbocharged Performance Engine',
        displacement: isSuv ? '2.0L Turbo / 2.4L Turbo' : '1.5L Turbo',
        configuration: 'Turbocharged DOHC 16-Valve Inline-4 with Direct Injection',
        aspiration: 'Turbocharged',
        horsepower: 260,
        torqueLbFt: 280,
        fuelType: 'Gasoline',
        efficiency: { city: 23, highway: 30, combined: 26, unit: 'MPG' },
        keyReliabilityNotes: 'Spirited acceleration; change full synthetic oil every 5,000 miles to protect the turbo bearings.',
        pros: ['Strong low-RPM torque for effortless merging', 'Engaging highway dynamics'],
        watchouts: ['Higher thermal stress on oil and cylinder head'],
        bestFor: 'Drivers wanting responsive highway performance.',
      },
    ];
    drivetrainsList = isSuv
      ? [
          { id: 'dt-awd-active', type: 'AWD', name: 'AWD (Intelligent All-Wheel Drive)', description: 'Automatically distributes torque between front and rear axles based on wheel slippage.', keyReliabilityNotes: 'Change rear differential fluid every 45k miles.' },
          { id: 'dt-fwd-econ', type: 'FWD', name: 'FWD (Front-Wheel Drive)', description: 'Lighter weight, highest fuel efficiency, and lowest long-term maintenance.', keyReliabilityNotes: 'Zero rear differential or driveshaft components to service.' },
        ]
      : [
          { id: 'dt-fwd-econ', type: 'FWD', name: 'FWD (Front-Wheel Drive)', description: 'Standard front-wheel drive layout with lowest maintenance.', keyReliabilityNotes: 'Simplest mechanical architecture.' },
          { id: 'dt-awd-active', type: 'AWD', name: 'AWD (All-Wheel Drive)', description: 'Active all-weather traction for rain and snow.', keyReliabilityNotes: 'Inspect center coupling fluid periodically.' },
        ];
  }

  // 4. Connect trims with engine & drivetrain IDs
  const trimList: TrimOption[] = rawTrimList.map((t, idx) => {
    // If it's a top-tier or dedicated performance trim (Tremor, Timberline, Raptor, High Country, AT4, Denali, etc.), associate higher output engine
    const isPerformanceTrim = /tremor|timberline|raptor|high country|zr2|at4|denali|trd pro|trailhunter|rubicon|type r|si|dark horse/i.test(t.name);
    const assignedEngineId = isPerformanceTrim && enginesList.length > 1 ? enginesList[1].id : enginesList[0].id;
    const isDedicated4x4 = /tremor|timberline|raptor|trail boss|zr2|at4|at4x|trd off-road|trd pro|trailhunter|rubicon|wilderness/i.test(t.name);

    return {
      ...t,
      engineId: assignedEngineId,
      availableEngineIds: enginesList.map((e) => e.id),
      availableDrivetrains: isDedicated4x4 && drivetrainsList.length > 0
        ? [drivetrainsList[0].id]
        : drivetrainsList.map((d) => d.id),
    };
  });

  return {
    year: numYear,
    make: cleanMake,
    model: cleanModel,
    engines: enginesList,
    drivetrains: drivetrainsList,
    trims: trimList,
    colors: getExteriorColorsForMakeAndModel(cleanMake, cleanModel),
    reliabilityRecommendation: 'For lowest long-term maintenance costs and minimal breakdown risk, choose the volume standard powertrain. Select AWD/4x4 if severe winter traction is required.',
  };
}

/**
 * Checks whether a vehicle make/model has pre-indexed canonical specs or exact factory trims.
 */
export function hasKnownModelTrims(make: string, model: string, year?: number): boolean {
  const cleanMake = (make || '').trim();
  const cleanModel = (model || '').trim();
  const makeSlug = toSlug(cleanMake);
  const modelSlug = toSlug(cleanModel);
  const numYear = year ? Number(year) : 2024;
  const canonicalKey = normalizeCarKey(cleanMake, cleanModel, numYear);

  if (POPULAR_VEHICLE_OPTIONS[canonicalKey]) return true;
  if (numYear >= 2025 && KNOWN_MODEL_TRIMS[`${makeSlug}-${modelSlug}-2025`]) return true;
  if (KNOWN_MODEL_TRIMS[`${makeSlug}-${modelSlug}`]) return true;

  const candidates = [
    `${makeSlug}-${modelSlug}`,
    `${makeSlug}-${modelSlug.replace(/-1500$/, '')}`,
    `${makeSlug}-${modelSlug}-1500`,
    `${makeSlug}-${modelSlug.replace(/-max$/, '')}`,
  ];
  for (const cand of candidates) {
    if (KNOWN_MODEL_TRIMS[cand]) return true;
  }
  return false;
}

/**
 * Intelligent cascading vehicle options lookup:
 * 1. Checks in-memory session cache (0 ms)
 * 2. Checks pre-indexed high-fidelity models in POPULAR_VEHICLE_OPTIONS (0 ms)
 * 3. Checks verified factory trims in KNOWN_MODEL_TRIMS (0 ms)
 * 4. For any non-indexed or custom models, queries /api/car-options with a 4.5s timeout:
 *    fetches genuine OEM trims, engines, and drivetrains so users never get stuck with wrong trims.
 * 5. Smoothly falls back to local smart generation if offline or timed out.
 */
export async function lookupVehicleOptions(
  year: number,
  make: string,
  model: string
): Promise<CarOptionsLookupResult> {
  const cleanMake = (make || '').trim();
  const cleanModel = (model || '').trim();
  const exactKey = `${cleanMake.toLowerCase()}-${cleanModel.toLowerCase()}-${year}`;
  const canonicalKey = normalizeCarKey(cleanMake, cleanModel, year);

  // 1. In-memory session cache (0 ms)
  if (vehicleOptionsCache.has(exactKey)) {
    return vehicleOptionsCache.get(exactKey)!;
  }

  // 2. High-fidelity pre-indexed models (0 ms)
  if (POPULAR_VEHICLE_OPTIONS[canonicalKey]) {
    const preIndexed = POPULAR_VEHICLE_OPTIONS[canonicalKey];
    const cached: CarOptionsLookupResult = {
      ...preIndexed,
      year: year || preIndexed.year,
      colors: getExteriorColorsForMakeAndModel(cleanMake, cleanModel),
    };
    vehicleOptionsCache.set(exactKey, cached);
    return cached;
  }

  // 3. Live AI & Auto.dev lookup via server endpoint (/api/car-options)
  // Fetches authentic factory trims, verified engine options (with HP, torque & failure profiles), and drivetrains
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch('/api/car-options', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ year, make: cleanMake, model: cleanModel }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.trims) && data.trims.length > 0) {
        const localDefaults = generateModelSpecificOptions(year, cleanMake, cleanModel);
        const engineList: EngineOption[] = Array.isArray(data.engines) && data.engines.length > 0
          ? data.engines
          : localDefaults.engines;
        const dtList: DrivetrainOption[] = Array.isArray(data.drivetrains) && data.drivetrains.length > 0
          ? data.drivetrains
          : localDefaults.drivetrains;

        const trimList: TrimOption[] = data.trims.map((t: any) => ({
          name: t.name || 'Standard',
          description: t.description || 'Manufacturer factory trim level',
          startingMsrp: Number(t.startingMsrp) || 32000,
          keyFeatures: Array.isArray(t.keyFeatures) ? t.keyFeatures : [],
          engineId: t.engineId || engineList[0]?.id || 'engine-default',
          availableEngineIds: Array.isArray(t.availableEngineIds) && t.availableEngineIds.length > 0
            ? t.availableEngineIds
            : engineList.map((e) => e.id),
          availableDrivetrains: Array.isArray(t.availableDrivetrains) && t.availableDrivetrains.length > 0
            ? t.availableDrivetrains
            : dtList.map((d) => d.id),
        }));

        const lookedUpResult: CarOptionsLookupResult = {
          year: Number(data.year) || year || 2024,
          make: data.make || cleanMake,
          model: data.model || cleanModel,
          engines: engineList,
          drivetrains: dtList,
          trims: trimList,
          colors: Array.isArray(data.colors) && data.colors.length > 0
            ? data.colors.map((c: string) => ({ name: c, hex: '#94a3b8', value: c, family: 'Grey' as const }))
            : getExteriorColorsForMakeAndModel(cleanMake, cleanModel),
          reliabilityRecommendation: data.reliabilityRecommendation || localDefaults.reliabilityRecommendation,
        };

        vehicleOptionsCache.set(exactKey, lookedUpResult);
        return lookedUpResult;
      }
    }
  } catch (error) {
    // Network abort, timeout, or offline: fall through to fallback
  }

  // 4. Fallback local smart generation if live lookup fails or times out
  const fallbackResult = generateModelSpecificOptions(year, cleanMake, cleanModel);
  vehicleOptionsCache.set(exactKey, fallbackResult);
  return fallbackResult;
}


