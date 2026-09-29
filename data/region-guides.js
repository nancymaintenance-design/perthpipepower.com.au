const regionGuides = [
  {
    route: 'perth-cbd-inner-suburbs.html', name: 'CBD & Inner Perth',
    title: 'CBD & Inner Perth Plumber & Electrician | Electrical Repairs & Blocked Drains',
    description: 'Plumbing and electrical repair enquiries for CBD and Inner Perth properties, including electrical faults, blocked drains and property maintenance.',
    intro: 'For a CBD or Inner Perth property, clear information about the issue, access and whether the request is plumbing or electrical helps make the next discussion practical.',
    services: [['Electrical repairs', 'Power faults, lighting, power points and safety-related electrical enquiries.', 'electrical.html'], ['Blocked drains', 'Drainage and blocked toilet enquiries with useful symptom details.', 'blocked-drains-perth.html'], ['Property maintenance', 'Coordinated plumbing and electrical maintenance enquiries for managed properties.', 'property-management.html']],
    scenarios: [['Apartment and strata access', 'Include building access, parking or concierge details with the enquiry so the property requirements are clear.'], ['Rental property maintenance', 'Property managers can separate plumbing and electrical issues, provide tenant contact details and note the required approval path.'], ['Electrical fault or drainage concern', 'Describe what changed, which areas are affected and anything that can be safely observed without dismantling equipment.']],
    property: 'For rental, strata and managed properties, a concise work order with the property address, access contact, observed issue and approval contact supports a clearer scope discussion.',
    faqs: [['What should a CBD or Inner Perth maintenance enquiry include?', 'Include the property address, access requirements, observed issue and whether the request is plumbing or electrical.'], ['Can plumbing and electrical issues be included in one enquiry?', 'Yes. List each issue separately so the required work can be considered clearly.']]
  },
  {
    route: 'northern-suburbs.html', name: 'Northern Suburbs',
    title: 'Northern Suburbs Electrician & Plumber | Power Faults, Hot Water & Safety Switches',
    description: 'Northern Suburbs plumbing and electrical enquiries for power faults, hot water concerns, safety switches, drainage and property maintenance.',
    intro: 'Northern Suburbs property owners and managers can use this guide to prepare clear plumbing or electrical repair enquiries before work is confirmed.',
    services: [['Electrical fault finding', 'Power faults, recurring circuit concerns and electrical repair enquiries.', 'power-faults-perth.html'], ['Safety switches', 'Safety-switch concerns, tripping and reset information.', 'safety-switch-tripping-perth.html'], ['Hot water concerns', 'Useful questions to prepare for a hot-water plumbing enquiry.', 'hot-water-problems-perth.html']],
    scenarios: [['Power changes at home', 'Note the rooms or circuits affected and whether a safety switch has tripped; do not dismantle electrical equipment.'], ['Hot water changes', 'State whether the issue is temperature, supply, visible water or a system concern, along with property access details.'], ['Managed property request', 'Provide the approval contact and any tenant access arrangements with the maintenance enquiry.']],
    property: 'A well-prepared rental or property-management enquiry identifies the affected service, safe observations, access arrangements and the person authorised to discuss scope.',
    faqs: [['What details help with a Northern Suburbs electrical enquiry?', 'The property address, affected area, safe observations and access details help describe the request.'], ['What should be included for a hot-water concern?', 'Explain what has changed and include the property address and any safe, visible signs of a problem.']]
  },
  {
    route: 'southern-suburbs.html', name: 'Southern Suburbs',
    title: 'Southern Suburbs Plumber & Electrician | Drain Repairs, Leak Detection & Electrical Faults',
    description: 'Southern Suburbs plumbing and electrical repair enquiries, including drainage, leak concerns, electrical faults and managed-property maintenance.',
    intro: 'Southern Suburbs properties may need plumbing and electrical issues assessed separately. This guide outlines the information that supports a clear enquiry and quote discussion.',
    services: [['Drain repairs', 'Blocked-drain and drainage enquiries with clear symptom information.', 'blocked-drains-perth.html'], ['Water leak concerns', 'Leak detection and visible-water enquiry guidance.', 'water-leak-detection-perth.html'], ['Electrical repairs', 'Power, lighting and safety-related electrical repair enquiries.', 'electrical.html']],
    scenarios: [['Drainage change', 'Describe slow drainage, overflow, odour or affected fixtures, and avoid using a fixture if water is overflowing.'], ['Visible water or leak concern', 'Note the location and what is visible without opening walls, fittings or electrical equipment.'], ['Electrical and plumbing together', 'Send each observed issue in its own sentence so the scope can be discussed without assumptions.']],
    property: 'For strata, rental and managed properties, include access arrangements and the person responsible for approving the requested scope.',
    faqs: [['What is useful to include in a Southern Suburbs drain enquiry?', 'The affected fixture, observed symptoms, property address and access details provide a useful starting point.'], ['Can a property manager include multiple maintenance concerns?', 'Yes. Keep each plumbing or electrical issue distinct so the scope can be discussed clearly.']]
  },
  {
    route: 'eastern-suburbs.html', name: 'Eastern Suburbs',
    title: 'Eastern Suburbs Electrician & Plumber | Switchboards, Safety Switches & Hot Water',
    description: 'Eastern Suburbs electrical and plumbing enquiries for switchboards, safety switches, hot water, lighting and property maintenance.',
    intro: 'For Eastern Suburbs homes and managed properties, the clearest enquiry explains the observed issue, property access and whether electrical or plumbing assessment is needed.',
    services: [['Safety switches', 'Safety-switch and circuit-protection enquiries.', 'safety-switch-tripping-perth.html'], ['Electrical repairs', 'Lighting, power-point and electrical fault enquiries.', 'electrical.html'], ['Hot water concerns', 'Hot-water system and plumbing enquiry guidance.', 'hot-water-problems-perth.html']],
    scenarios: [['Safety switch concern', 'If a switch will not reset, do not repeatedly force it. Record what was operating when the change occurred.'], ['Switchboard question', 'Share safe observations such as labels, affected circuits and whether other areas of the property still have power.'], ['Hot water or lighting issue', 'Describe the specific fixture or system affected, not just the room where it is located.']],
    property: 'When a managed property has electrical or hot-water concerns, access details and the approval contact help avoid uncertainty before a quote is discussed.',
    faqs: [['What information helps with a safety-switch enquiry?', 'Include the property address, what changed, affected areas and any safe observations about the switch.'], ['Should a switchboard concern be described with other maintenance work?', 'It can be included in the same enquiry, but identify the switchboard concern separately from plumbing or general maintenance items.']]
  },
  {
    route: 'western-suburbs.html', name: 'Western Suburbs',
    title: 'Western Suburbs Plumber & Electrician | Lighting, Power Points & Plumbing Repairs',
    description: 'Western Suburbs plumbing and electrical repair enquiries for lighting, power points, taps, toilets, drainage and property maintenance.',
    intro: 'Western Suburbs homeowners, tenants and property managers can use this guide to describe lighting, power-point and plumbing repair concerns with the details needed for a useful discussion.',
    services: [['Lighting and power points', 'Lighting, switches and outlet concern enquiries.', 'lighting-power-points-perth.html'], ['Plumbing repairs', 'Tap, toilet, shower and fixture repair enquiries.', 'tap-mixer-repairs-perth.html'], ['Drainage concerns', 'Blocked drains and toilet drainage enquiries.', 'blocked-drains-perth.html']],
    scenarios: [['Lighting or power point concern', 'Describe the fitting or outlet, affected room and whether the change is limited to one point or more broadly noticeable.'], ['Tap, toilet or fixture issue', 'Note dripping, running water, poor flow or a visible fitting issue without attempting a repair.'], ['Tenant or owner access', 'Share the contact person and access requirements before the scope or quote conversation.']],
    property: 'For property managers, separating electrical and plumbing items in the initial work order supports clearer communication with tenants and owners.',
    faqs: [['What should a Western Suburbs lighting enquiry include?', 'Include the affected fitting or outlet, property address and a description of what changed.'], ['Can plumbing fixtures and electrical issues be sent together?', 'Yes. List each issue separately so they can be assessed as distinct service requests.']]
  },
  {
    route: 'perth-hills-swan-valley.html', name: 'Perth Hills & Swan Valley',
    title: 'Perth Hills & Swan Valley Plumber & Electrician | Hot Water, Electrical Repairs & Maintenance',
    description: 'Perth Hills and Swan Valley plumbing and electrical repair enquiries for hot water, power faults, drainage and property maintenance.',
    intro: 'For Perth Hills and Swan Valley properties, include the address, access information and the service concern so the enquiry can be scoped clearly before work is confirmed.',
    services: [['Hot water concerns', 'Hot-water plumbing enquiry guidance and useful observations.', 'hot-water-problems-perth.html'], ['Electrical repairs', 'Power faults, lighting and safety-related electrical enquiries.', 'electrical.html'], ['Property maintenance', 'Plumbing and electrical maintenance coordination for managed properties.', 'property-management.html']],
    scenarios: [['Property access', 'Include gates, driveways, site contacts or other access information that is relevant to arranging an enquiry.'], ['Electrical concern', 'Describe the affected equipment or area and avoid touching damaged wiring or attempting a repair.'], ['Water or drainage concern', 'Note the location, visible symptoms and whether the issue affects one fixture or several.']],
    property: 'Clear access and contact details are especially useful for rental, managed and larger properties when a plumbing or electrical scope is being discussed.',
    faqs: [['What should Perth Hills or Swan Valley property owners include in an enquiry?', 'Include the property address, access details, service type and a concise description of the issue.'], ['How should an electrical concern be described safely?', 'Share observable changes and affected areas without opening equipment or approaching a hazard.']]
  }
];

module.exports = { regionGuides };
