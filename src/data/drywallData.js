import { ASSETS } from '../utils/assets';

export const COMPANY_INFO = {
  name: 'Menifee Drywall Construction',
  shortName: 'MDC',
  tagline: "Riverside County's Premier Drywall Contractor",
  phone: '(951) 746-8891',
  phoneRaw: '9517468891',
  email: 'Jessie@MenifeeDryWallConstruction.com',
  owner: 'Jessie Lisardo',
  experience: '20+ Years',
  rating: 4.9,
  reviewsCount: 148,
  established: 2004,
  licenseNote: 'Licensed, Bonded & Insured Professional Drywall Contractor',
  serviceAreas: [
    'Menifee', 'Murrieta', 'Temecula', 'Moreno Valley', 
    'Corona', 'Lake Elsinore', 'Perris', 'Winchester', 
    'Wildomar', 'Hemet', 'Mission Viejo', 'Riverside County'
  ],
  hours: 'Mon – Sat: 7:00 AM – 6:00 PM | 24/7 Emergency Leaks',
  guarantee: '100% Texture Match & Craftsmanship Guarantee'
};

export const SERVICES = [
  {
    id: 'drywall-repair',
    title: 'Drywall Repair & Patching',
    shortDesc: 'Giant holes, doorknob punctures, ceiling cracks & stress fractures restored better than new.',
    badge: 'Most Requested',
    icon: 'Wrench',
    priceEstimate: '$175 – $450',
    turnaround: 'Same Day / 1-2 Days',
    image: ASSETS.servicePhotos.repair,
    overview: 'When it comes to repairing drywall, once there is a hole in your wall or ceiling, you can’t seem to think of anything else. At Menifee Drywall Construction, we make it our main focus to restore peace of mind to your home by restoring your damaged drywall to better than new with invisible patch seams.',
    features: [
      'Accidental hole & impact punch repairs',
      'Plumbing / electrical inspection cutouts',
      'Ceiling settlement cracks & nail pops',
      'Doorknob punch-through backer reinforcement',
      'Dust-containment plastic draping & thorough cleanup',
      'Seamless texture blending before prime & paint'
    ],
    faqs: [
      {
        q: 'Can you match my existing wall texture so the patch is invisible?',
        a: 'Yes! Jessie has over 20 years of experience matching orange peel, knockdown, skip trowel, and hand-applied textures. Once painted, you will not be able to tell where the patch occurred.'
      },
      {
        q: 'How fast can you come out for a patch?',
        a: 'We prioritize emergency patches (like move-out escrow deadlines or urgent plumbing cutouts) and often provide same-day or next-day turnaround.'
      }
    ]
  },
  {
    id: 'water-damage',
    title: 'Water Damage Restoration',
    shortDesc: 'Rapid response for burst pipes, roof leaks, bathroom floods, and mold prevention cutbacks.',
    badge: 'Urgent / Priority',
    icon: 'Droplets',
    priceEstimate: '$295 – $1,200+',
    turnaround: '24-48 Hour Rapid Response',
    image: ASSETS.servicePhotos.waterDamage,
    overview: 'Water damage happens. When it does, excess moisture requires damaged drywall sections to be professionally cut back to prevent hazardous mold growth and restore structural integrity. We inspect the studs, treat the area, hang fresh mold-resistant sheetrock, and seamlessly blend the finish.',
    features: [
      'Water heater burst & supply line leak response',
      'Cutback of saturated drywall up to safe dry boundary',
      'Cavity inspection and moisture drying coordination',
      'Installation of greenboard / mold-resistant drywall',
      'Anti-microbial priming & water-stain barrier sealing',
      'Insurance-ready detailed scope documentation'
    ],
    faqs: [
      {
        q: 'Do I have to replace the whole wall if only the bottom got wet?',
        a: 'Usually no! We perform precision flood cuts (commonly 2 or 4 feet up) to remove only the contaminated gypsum and save you substantial expense.'
      }
    ]
  },
  {
    id: 'texture-matching',
    title: 'Texture Matching & Blending',
    shortDesc: 'Never stare at an awkward flat patch again. Flawless matching of any wall or ceiling texture.',
    badge: 'Artisan Precision',
    icon: 'Layers',
    priceEstimate: '$200 – $600',
    turnaround: '1 Day',
    image: ASSETS.servicePhotos.texture,
    overview: 'Did you just move into a new home and realize that parts of your wall don’t match? Maybe you patched up an area a while back and have been ignoring the bald spot surrounded by textured walls. Whatever the reason, no need to worry. We are fully equipped, experienced and ready to come recreate the exact original texture.',
    features: [
      'Orange Peel (Fine, Medium, Heavy spray splatter)',
      'Knockdown & Spanish Lace troweled textures',
      'Skip Trowel, Santa Fe & Old World hand finishes',
      'Acoustic ceiling texture recreation',
      'Feathering edges into existing untouched walls',
      'Guaranteed blending so seams vanish under paint'
    ],
    faqs: [
      {
        q: 'Why do DIY texture cans from big-box stores look so obvious?',
        a: 'Canned spray textures have inconsistent pressure and limited nozzle control. Matching takes professional pneumatic spray rigs and the hand-trowel technique developed over 20+ years in the trade.'
      }
    ]
  },
  {
    id: 'popcorn-removal',
    title: 'Acoustic / Popcorn Removal',
    shortDesc: 'Modernize your ceilings, brighten rooms, and eliminate dated dust-trapping acoustic textures.',
    badge: 'Home Value Booster',
    icon: 'Sparkles',
    priceEstimate: '$1.75 – $3.25 / sq ft',
    turnaround: '2 – 3 Days',
    image: ASSETS.servicePhotos.popcorn,
    overview: 'Acoustic ceiling or drywall, sometimes known as "Popcorn" ceiling, has an outdated look and drags down home resale value. Not only that, it attracts and traps dust and cobwebs, creating an all-over dingy atmosphere. We scrape, repair, skim, and refinish your ceilings to a crisp, modern finish.',
    features: [
      'Full floor-to-ceiling plastic isolation masking',
      'HEPA containment and minimal dust procedure',
      'Complete scraping and substrate smoothing',
      'Skim coating and nail pop stabilization',
      'Conversion to contemporary smooth or knock-down finish',
      'Substantial increase in perceived room height and light'
    ],
    faqs: [
      {
        q: 'Does popcorn removal make a huge mess in my house?',
        a: 'We treat your home like our own. We fully mask floors, walls, and furniture in heavy plastic and seal off doorways so zero dust travels into unaffected rooms.'
      }
    ]
  },
  {
    id: 'drywall-installation',
    title: 'Drywall Installation & Hanging',
    shortDesc: 'From room additions and garage conversions to complete new home framing drywall.',
    badge: 'Core Specialty',
    icon: 'Hammer',
    priceEstimate: 'Custom Bid per Sq Ft',
    turnaround: 'Project Dependent',
    image: ASSETS.servicePhotos.installation,
    overview: 'When it comes to installing drywall, it is critical to get experienced professional help. Whether it is standard sheetrock, gypsum board, sound-dampening drywall, or cement backer board, Jessie Lisardo brings 20+ years of hanging precision to guarantee straight lines, tight seams, and plumb corners.',
    features: [
      'Full residential new construction & custom home hanging',
      'Room additions, ADUs & garage conversions',
      'Vaulted ceilings & double-height great rooms',
      'Corner beads (standard 90°, modern square, bullnose)',
      '3-coat mudding, taping & machine sanding',
      'Inspection-ready work adhering to California building codes'
    ],
    faqs: [
      {
        q: 'Do you handle both hanging and taping?',
        a: 'Yes, we handle the full cycle: delivery staging, hanging panels, tape embedding, multiple mud coats, and final feather sanding ready for paint.'
      }
    ]
  },
  {
    id: 'smooth-wall-finish',
    title: 'Level 5 Smooth Wall Finish',
    shortDesc: 'Convert heavy dated textures into silky, museum-grade smooth walls for modern interiors.',
    badge: 'Luxury Aesthetic',
    icon: 'CheckCircle2',
    priceEstimate: '$2.50 – $4.50 / sq ft',
    turnaround: '3 – 4 Days',
    image: ASSETS.servicePhotos.smoothWall,
    overview: 'Do your textured walls give you an unfinished feel? Are you ready for clean, minimalist architecture in your home? At Menifee Drywall Construction, we provide full skim-coating services to transform old uneven surfaces into Level 5 museum-quality smooth walls.',
    features: [
      'Complete surface degloss and skim-coat application',
      'Multiple cross-directional passes with broad knives',
      'Elimination of texture shadows under angled downlights',
      'Ideal backdrop for designer wallpaper or matte paint',
      'Laser-flat corners and ceiling intersections'
    ],
    faqs: [
      {
        q: 'What is the difference between Level 4 and Level 5 finish?',
        a: 'Level 4 is standard taped drywall where joints are smooth, but drywall paper remains exposed. Level 5 applies a continuous thin skim coat across 100% of the surface so texture and absorption are identical everywhere under harsh lighting.'
      }
    ]
  },
  {
    id: 'demolition',
    title: 'Demolition & Remodel Prep',
    shortDesc: 'Safe interior wall teardowns, partition removals, and site clearance for open floor plans.',
    badge: 'Clean & Safe',
    icon: 'Trash2',
    priceEstimate: 'Custom Estimate',
    turnaround: '1 – 2 Days',
    image: ASSETS.servicePhotos.demolition,
    overview: 'Don’t hire just anyone for demolition. At Menifee Drywall Construction we step beyond our name: we offer expert interior demolition services. When you need a wall torn down, old soffits opened up, or spaces cleared for your open-concept remodel, we are the ones to call.',
    features: [
      'Careful non-load bearing wall removals',
      'Soffit, dropped ceiling & pantry knockdowns',
      'Safe avoidance of electrical, plumbing & HVAC runs',
      'Complete debris haul-away and disposal',
      'Job site left broom-swept and ready for framing'
    ],
    faqs: [
      {
        q: 'Do you haul away all the drywall debris?',
        a: 'Yes! We load all debris into our trucks or designated bins and leave the space swept clean.'
      }
    ]
  },
  {
    id: 'commercial-drywall',
    title: 'Commercial Drywall & Tenant Fit-Outs',
    shortDesc: 'Retail buildouts, office partitions, multi-family units, and commercial repairs on schedule.',
    badge: 'Commercial Grade',
    icon: 'Building2',
    priceEstimate: 'Per Plan / Takeoff',
    turnaround: 'Commercial Schedule',
    image: ASSETS.servicePhotos.commercial,
    overview: 'Menifee Drywall Construction partners with general contractors and commercial business owners across Riverside and Orange County. We provide fast, reliable drywall installation, metal stud framing integration, fire-rated assemblies, and rapid repairs.',
    features: [
      'Type X fire-rated drywall installations',
      'Sound attenuation acoustic insulation & resilient channels',
      'Commercial tenant improvements (TI) & retail build-outs',
      'Weekend and after-hours availability to minimize business downtime',
      'Fast-turn punch list resolution'
    ],
    faqs: [
      {
        q: 'Can you work outside of normal store or office hours?',
        a: 'Yes, we routinely accommodate evening or weekend work to prevent disruption to your customers and staff.'
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 'rev-1',
    name: 'Jenny E.',
    location: 'Murrieta / Menifee, CA',
    rating: 5,
    date: 'Verified Client',
    avatar: ASSETS.reviewsAvatars.jenny,
    service: 'Emergency Water Leak Repair',
    text: "Jessie saved the day! As we were in the process of moving out, and our Home scheduled to close escrow on 3/28, our water line valve sprung a leak, the valve had to be replaced, so a hole had to be cut, so of course we needed a drywall patch. I needed to find a professional, and being a very last minute job, many others were unavailable. Jessie was recommended by a few other previous customers, so I messaged him right away (mind you at 9 o'clock at night). Jessie was both quick to respond, and was able to squeeze me in, along with a very reasonable price. He arrived on time, was professional, and did quality work. He even patched a small ding in the wall as he finished! Thank you again Jessie for helping us out on such short notice!"
  },
  {
    id: 'rev-2',
    name: 'Jeff V.',
    location: 'Riverside County, CA',
    rating: 5,
    date: 'Verified Homeowner',
    avatar: ASSETS.reviewsAvatars.jeff,
    service: 'Ceiling Mud, Tape & Texture (240 sq ft)',
    text: "I interviewed 3 drywall guys for a 240sqft ceiling mud, tape, texture job. I chose Jessie. His pricing was fair for the amount of work involved. Over the 2 day project I saw a guy that showed up on time, cared about details, and most importantly did a good job. I was really happy with the work. I would highly recommend calling Jessie at Menifee Drywall Construction. I will definitely be using him on my future projects."
  },
  {
    id: 'rev-3',
    name: 'Andi Shepherd Albright',
    location: 'Corona, CA',
    rating: 5,
    date: 'Verified Client',
    avatar: ASSETS.reviewsAvatars.andi,
    service: 'Water Heater Burst Damage',
    text: "We had a water heater burst that affected the drywall in three rooms. Jessie did an absolutely fantastic job!!! He matched the texture in my daughter's room perfectly (we were very concerned about matching this room). Not only did he do a great job, but it was truly a pleasure having him working in the house because he is such a nice guy. I will be going to him for our future drywall needs."
  },
  {
    id: 'rev-4',
    name: 'Jen Milner',
    location: 'Temecula, CA',
    rating: 5,
    date: 'Verified Homeowner',
    avatar: ASSETS.reviewsAvatars.jen,
    service: 'Full Bathroom Remodel Drywall',
    text: "Extremely impressed with the work I had done. Jesse did the drywall after I had my bathroom gutted and replaced with all new stuff. He even patched up where my medicine cabinet was. The texturing is EXACTLY the same as the original texture. I really wasn’t expecting it to be flawless and I was ok with that but he exceeded my expectations!! Will definitely be getting more work done with him!!"
  },
  {
    id: 'rev-5',
    name: 'Kristi Townsend',
    location: 'Murrieta Valley, CA',
    rating: 5,
    date: 'Community / Residential',
    avatar: ASSETS.reviewsAvatars.kristi,
    service: 'Kitchen Can Lights & Community Dugout',
    text: "Jessie put up with my very curious 4 year old asking millions of questions and wanting to help along with our annoying husky barking. He had the task of redoing the drywall in our kitchen ceiling from taking out fluorescent lighting and putting in can lights. Did a great job and can't tell where it was patched between old and new! He came out right away to give the Murrieta Valley Pony Baseball snackbar a quote when I called, and patched up the AC unit hole the very next day. Thanks again Jessie!"
  },
  {
    id: 'rev-6',
    name: 'Natalie Flores Valenzuela',
    location: 'Menifee, CA',
    rating: 5,
    date: 'Verified Client',
    avatar: ASSETS.reviewsAvatars.natalie,
    service: 'Interior Wall Finish & Patching',
    text: "Jessie is very professional, and friendly. He did a beautiful job and I would rehire in a heartbeat. Our two interior walls turned out perfect, timely, and the quality speaks for itself."
  }
];

export const ESTIMATOR_QUESTIONS = [
  {
    id: 'serviceType',
    question: 'What kind of drywall work do you need?',
    options: [
      { id: 'patch', label: 'Wall / Ceiling Hole or Patch', icon: 'Wrench', multiplier: 1, base: 195 },
      { id: 'water', label: 'Water Damage / Leak Repair', icon: 'Droplets', multiplier: 1.4, base: 340 },
      { id: 'popcorn', label: 'Popcorn Ceiling Removal', icon: 'Sparkles', multiplier: 1.3, base: 450 },
      { id: 'texture', label: 'Texture Matching or Smoothing', icon: 'Layers', multiplier: 1.15, base: 260 },
      { id: 'remodel', label: 'Room Addition / Full Remodel', icon: 'Hammer', multiplier: 1.8, base: 750 }
    ]
  },
  {
    id: 'areaSize',
    question: 'What is the estimated scope or size?',
    options: [
      { id: 'small', label: 'Small spot (under 12" hole / puncture)', costFactor: 1.0 },
      { id: 'medium', label: 'Medium area (1 to 3 holes or a partial sheet)', costFactor: 1.45 },
      { id: 'large', label: 'Single full room wall or entire ceiling', costFactor: 2.3 },
      { id: 'xlarge', label: 'Multiple rooms or complete home project', costFactor: 3.8 }
    ]
  },
  {
    id: 'textureFinish',
    question: 'What texture does your wall have?',
    options: [
      { id: 'orange', label: 'Orange Peel (Fine / Medium spray)', textureAdd: 0 },
      { id: 'knockdown', label: 'Knockdown / Hand Trowel', textureAdd: 35 },
      { id: 'smooth', label: 'Smooth Level 4 / Level 5 Skim', textureAdd: 75 },
      { id: 'unsure', label: 'Not sure / Need Jessie to match it', textureAdd: 20 }
    ]
  },
  {
    id: 'urgency',
    question: 'How quickly do you need this completed?',
    options: [
      { id: 'urgent', label: 'Emergency / Moving Out / Escrow (1-2 Days)', urgencyAdd: 60, tag: 'Fast Track' },
      { id: 'standard', label: 'Within this upcoming week', urgencyAdd: 0, tag: 'Standard' },
      { id: 'flexible', label: 'Flexible / Next 2-3 weeks', urgencyAdd: -25, tag: 'Best Value' }
    ]
  }
];

export const FAQS_GENERAL = [
  {
    q: 'How does Jessie provide estimates?',
    a: 'We offer free, no-obligation estimates! For quick patches, you can submit photos via our app or text (951) 746-8891 for a fast quote. For larger remodels or whole-room jobs, Jessie will visit your property in person.'
  },
  {
    q: 'What areas in Southern California do you serve?',
    a: 'We serve all of Riverside County and surrounding communities including Menifee, Murrieta, Temecula, Moreno Valley, Corona, Lake Elsinore, Perris, Winchester, Wildomar, and parts of Orange County such as Mission Viejo.'
  },
  {
    q: 'How clean is the job site during and after?',
    a: 'Cleanliness is one of our top customer compliments. We lay down protective drop cloths, tape plastic dust barriers over doors and furniture, and thoroughly vacuum/sweep when the project is done.'
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes, Menifee Drywall Construction is a fully licensed, bonded, and insured professional drywall contractor with over 20 years of verifiable industry experience.'
  }
];
