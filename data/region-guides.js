const sharedPlumbing = [
  'Plumbing repair enquiries can start with what is observable at the property: a blocked drain, slow fixture, gurgling, overflow, visible water, loss of hot water, a dripping tap, or a toilet that continues to run. Describing the affected fixture and what changed helps keep drainage, leak and hot-water concerns distinct when the scope is discussed.',
  'For blocked drains or a blocked toilet, note whether the issue affects one fixture or several, whether water is backing up, and whether there is an odour or recurring slow drainage. For leak concerns, share the visible location and avoid opening fittings, walls or equipment to investigate. For hot-water problems, explain whether the change is temperature, supply, pressure or visible water around the system.'
];

const sharedElectrical = [
  'Electrical repair enquiries are clearer when they identify the affected area or equipment: a power fault, a circuit that trips, a safety switch that will not reset, a switchboard concern, lighting, a power point, or a smoke-alarm maintenance issue. The useful information is what changed and what can be safely observed, not an attempted diagnosis or repair.',
  'If a safety switch has tripped, record which room, circuit or appliance was in use when the change happened, if known. Do not repeatedly force a switch to reset, dismantle an outlet, or touch damaged wiring. For lighting and power-point concerns, identify the fitting or outlet and whether the issue appears limited to that point or is affecting more of the property.'
];

const sharedProperty = [
  'For homes, rentals, strata and managed properties, a useful service enquiry includes the property address, best access contact, observed issue and whether the request is plumbing or electrical. Property managers can add tenant communication, building access, parking, keys or concierge instructions, together with the person authorised to discuss the work.',
  'Keeping plumbing and electrical issues in separate sentences reduces uncertainty. A rental property plumber or property-manager electrician enquiry does not need a technical diagnosis; it needs a factual description of the symptom, location, access arrangement and approval path.'
];

const sharedQuote = [
  'Assessment and quote discussion begins with the service category, the property location, safe observations and access details. This lets the work required be discussed before it is confirmed. If more than one issue is present, list each concern separately so the scope can be considered without assuming that separate systems have the same cause.',
  'After work is discussed, retain the completed-work and invoice information with the property records. Where the issue presents an immediate risk, do not approach it to obtain more detail; for immediate danger, call 000.'
];

const regionGuides = [
  {
    route: 'perth-cbd-inner-suburbs.html', name: 'CBD & Inner Perth',
    title: 'CBD & Inner Perth Plumber & Electrician | Electrical Repairs, Blocked Drains & Property Maintenance',
    description: 'CBD and Inner Perth plumber and electrician enquiries for electrical repairs, blocked drains, leak concerns, hot water and managed-property maintenance.',
    intro: 'CBD and Inner Perth homes, apartments, rentals and strata properties can use this guide to prepare a clear plumber or electrician enquiry for common repair and maintenance concerns.',
    localFocus: 'In CBD and Inner Perth, apartment, strata and managed-property access details are often central to arranging plumbing repairs or electrical fault finding. Include building entry, concierge, lift, parking or tenancy information when it is relevant.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Electrical repairs', 'Electrical fault finding, lighting, power points and safety switches.'], ['Blocked drains', 'Drainage and blocked-toilet concerns.'], ['Property maintenance', 'Plumbing and electrical enquiries for managed properties.']],
    faqs: [['What should a CBD or Inner Perth maintenance enquiry include?', 'Include the property address, access requirements, observed issue and whether the request is plumbing or electrical.'], ['Can plumbing and electrical issues be included in one enquiry?', 'Yes. List each issue separately so the requested scope can be considered clearly.']]
  },
  {
    route: 'northern-suburbs.html', name: 'Northern Suburbs',
    title: 'Northern Suburbs Electrician & Plumber | Power Faults, Hot Water, Safety Switches & Drain Repairs',
    description: 'Northern Suburbs electrician and plumber enquiries for power faults, safety switches, hot-water problems, blocked drains, leak concerns and property maintenance.',
    intro: 'Northern Suburbs property owners, tenants and managers can use this guide for plumbing repairs, electrical repairs and a practical scope-and-quote discussion.',
    localFocus: 'For Northern Suburbs properties, state whether the request concerns a single home, rental, strata property or managed portfolio, then add the suburb and a safe description of the symptom. That gives the enquiry an accurate starting point without overstating the cause.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Electrical fault finding', 'Power faults, circuits and electrical repair concerns.'], ['Safety switches', 'Safety-switch tripping and reset concerns.'], ['Hot-water problems', 'Hot-water supply, temperature and visible-water concerns.']],
    faqs: [['What details help with a Northern Suburbs electrical enquiry?', 'The property address, affected area, safe observations and access details help describe the request.'], ['What should be included for a hot-water concern?', 'Explain what has changed and include the property address and any safe, visible signs of a problem.']]
  },
  {
    route: 'southern-suburbs.html', name: 'Southern Suburbs',
    title: 'Southern Suburbs Plumber & Electrician | Drain Repairs, Leak Detection & Electrical Fault Finding',
    description: 'Southern Suburbs plumber and electrician enquiries for drainage, leak concerns, hot-water problems, electrical repairs, power faults and managed-property maintenance.',
    intro: 'Southern Suburbs homes, rentals and managed properties can use this guide to organise a clear plumbing or electrical repair enquiry before scope and quote details are discussed.',
    localFocus: 'For Southern Suburbs properties, visible water, drainage changes and electrical faults should be described as separate observations. This is especially useful where a property manager is coordinating tenant access and approval for more than one maintenance concern.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Drain repairs', 'Blocked drains, fixture drainage and overflow concerns.'], ['Leak concerns', 'Visible water and leak-detection enquiries.'], ['Electrical repairs', 'Power faults, lighting and safety-related electrical concerns.']],
    faqs: [['What is useful to include in a Southern Suburbs drain enquiry?', 'The affected fixture, observed symptoms, property address and access details provide a useful starting point.'], ['Can a property manager include multiple maintenance concerns?', 'Yes. Keep each plumbing or electrical issue distinct so the scope can be discussed clearly.']]
  },
  {
    route: 'eastern-suburbs.html', name: 'Eastern Suburbs',
    title: 'Eastern Suburbs Electrician & Plumber | Switchboards, Safety Switches, Hot Water & Electrical Repairs',
    description: 'Eastern Suburbs electrician and plumber enquiries for switchboards, safety switches, electrical repairs, lighting, hot-water problems and plumbing maintenance.',
    intro: 'Eastern Suburbs homeowners, tenants and property managers can use this guide to describe switchboard, safety-switch, plumbing and hot-water concerns clearly and safely.',
    localFocus: 'For Eastern Suburbs properties, a switchboard or safety-switch concern should identify the affected circuit or area only if it can be observed safely. Pair that with the property access contact and any separate plumbing issue so the enquiry remains clear.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Safety switches', 'Safety-switch, circuit-protection and reset concerns.'], ['Switchboards and electrical repairs', 'Switchboard, lighting, power-point and fault-finding enquiries.'], ['Hot-water problems', 'Hot-water system and plumbing repair enquiries.']],
    faqs: [['What information helps with a safety-switch enquiry?', 'Include the property address, what changed, affected areas and any safe observations about the switch.'], ['Should a switchboard concern be described with other maintenance work?', 'It can be included in the same enquiry, but identify the switchboard concern separately from plumbing or general maintenance items.']]
  },
  {
    route: 'western-suburbs.html', name: 'Western Suburbs',
    title: 'Western Suburbs Plumber & Electrician | Lighting, Power Points, Plumbing Repairs & Blocked Drains',
    description: 'Western Suburbs plumber and electrician enquiries for lighting, power points, electrical repairs, taps, toilets, blocked drains, hot water and property maintenance.',
    intro: 'Western Suburbs homes, rentals and managed properties can use this guide for plumbing repairs, electrical fault finding, lighting and power-point concerns, and a clear quote discussion.',
    localFocus: 'For Western Suburbs properties, distinguish fixture repairs such as taps, toilets and drainage from lighting, switches and power points. Clear wording helps an owner, tenant or manager raise the right service enquiry without assuming a repair method.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Lighting and power points', 'Lighting, switches, outlets and electrical fault concerns.'], ['Plumbing repairs', 'Taps, toilets, showers and visible fixture issues.'], ['Blocked drains', 'Drainage, slow fixtures and toilet blockage concerns.']],
    faqs: [['What should a Western Suburbs lighting enquiry include?', 'Include the affected fitting or outlet, property address and a description of what changed.'], ['Can plumbing fixtures and electrical issues be sent together?', 'Yes. List each issue separately so they can be assessed as distinct service requests.']]
  },
  {
    route: 'perth-hills-swan-valley.html', name: 'Perth Hills & Swan Valley',
    title: 'Perth Hills & Swan Valley Plumber & Electrician | Hot Water, Electrical Repairs & Property Maintenance',
    description: 'Perth Hills and Swan Valley plumber and electrician enquiries for hot-water problems, electrical repairs, power faults, blocked drains, leak concerns and property maintenance.',
    intro: 'Perth Hills and Swan Valley properties can use this guide to prepare a detailed plumbing or electrical repair enquiry, including practical property access and maintenance information.',
    localFocus: 'For Perth Hills and Swan Valley properties, include the suburb, driveway, gate, site-contact or access information that may affect an appointment discussion. Keep electrical, hot-water, drainage and leak observations separate so the requested scope is easy to understand.',
    plumbing: sharedPlumbing, electrical: sharedElectrical, property: sharedProperty, quote: sharedQuote,
    services: [['Hot-water problems', 'Hot-water, pressure, temperature and visible-water concerns.'], ['Electrical repairs', 'Power faults, lighting, safety switches and electrical fault finding.'], ['Property maintenance', 'Plumbing and electrical maintenance coordination.']],
    faqs: [['What should Perth Hills or Swan Valley property owners include in an enquiry?', 'Include the property address, access details, service type and a concise description of the issue.'], ['How should an electrical concern be described safely?', 'Share observable changes and affected areas without opening equipment or approaching a hazard.']]
  }
];

module.exports = { regionGuides };
