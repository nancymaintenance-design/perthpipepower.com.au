import type { IntentPages, IntentMetadata, IntentSection } from './types.mjs';
// Implements the reviewed 2026-10-12 gap plan on existing URLs only.
// Research terms are not service approvals. No new prices, licences, cases or promises.
const section=(id:string,heading:string,body:string[],bullets:string[]=[],links:string[][]=[]):IntentSection=>({id,heading,body,bullets,links});
const regions=[
 ['perth-cbd-inner-suburbs.html','CBD and Inner Perth'],
 ['northern-suburbs.html','Northern Suburbs, including Joondalup'],
 ['southern-suburbs.html','Southern Suburbs, including Canning Vale'],
 ['eastern-suburbs.html','Eastern Suburbs'],
 ['western-suburbs.html','Western Suburbs'],
 ['perth-hills-swan-valley.html','Perth Hills and Swan Valley'],
];
const sections={
 'plumbing.html':[
  section('gap-plumbing-prices','Plumber costs in Perth: compare the agreed work',[
   'Use the plumbing price overview as a starting point, then compare the work included in the written quote. Finding a concealed leak, repairing an accessible fitting and replacing equipment are not the same job. A repair-only amount should not be compared with a quote that also includes supply, access and restoration.',
   'Ask about the initial attendance or investigation charge, materials, included work and what needs separate approval. Confirm any charge for a visit where you do not proceed, and any different hours or access arrangements, before booking. The guide does not establish an hourly rate, a free call-out or an after-hours price.'
  ],[],[['faq.html','Booking and quotation questions'],['hot-water-problems-perth.html','Hot-water repair and replacement price guide'],['insights-hot-water-plumbing-or-electrical.html','Which trade should assess a hot-water problem?'],['fixtures-appliances-perth.html#gap-dishwasher-installation','Dishwasher and appliance connection scope']]),
  section('gap-plumbing-regions','Arrange a plumber for your Perth service region',[
   'Choose the region for the property, then describe the plumbing task. These guides organise service enquiries; they are not separate branches or a promise of an arrival time. Tell the team the address and access requirements so the proposed visit can be confirmed.'
  ],[],regions),
 ],
 'electrical.html':[
  section('gap-electrical-prices','Electrician costs in Perth: investigation or installation?',[
   'An electrical fault-finding visit investigates a reported problem. A planned installation quote starts with the fitting or outlet you want and the work needed at that location. Keep both tasks visible if you need an existing fault assessed as well as new equipment installed.',
   'For a useful price comparison, check attendance, investigation, parts, electrical work and any additional access separately. Ask what happens if a fault is intermittent or the initial visit identifies further work. The published guide is not a promise of unlimited investigation, a free call-out or a fixed hourly rate.'
  ],[],[['power-faults-perth.html','Electrical fault finding and investigation costs'],['lighting-power-points-perth.html#gap-power-point-installation','Power-point installation requirements'],['faq.html','Electrical quote and booking questions'],['fixtures-appliances-perth.html','Fixed electrical work versus appliance connections']]),
  section('gap-electrical-regions','Find the region for your electrical work',[
   'Use the property location as well as the service when making the request. For a rental or strata building, add the access contact and the person who can approve the work. A suburb in the directory does not confirm an appointment or specialist service capability.'
  ],[],regions),
 ],
 'fixtures-appliances-perth.html':[
  section('gap-dishwasher-installation','Dishwasher installation enquiries in Perth',[
   'For a dishwasher connection, tell us whether it is replacing an appliance in the same space or going into a new location. An existing cupboard opening does not establish that the water, drainage and electrical arrangements suit the new product. Share the model or installation sheet if available; you can enquire before buying.',
   'The written scope should distinguish connection to suitable existing services from any new plumbing or fixed electrical work. Cabinetry alterations, product delivery, removing the old appliance and internal appliance repairs are not automatically part of a connection request. Confirm which tasks are accepted and who will handle any separate work.'
  ],['Product model and intended kitchen position.','Existing appliance or a new location, with any known access restriction.','Who supplies the product and whether removal or another trade needs coordination.'],[['lighting-power-points-perth.html#gap-power-point-installation','Electrical outlet installation and compatibility'],['tap-mixer-repairs-perth.html','Leaks at an existing tap or connection'],['contact.html','Discuss a dishwasher connection and written scope']]),
  section('gap-toilet-installation','Toilet installation or a cistern repair?',[
   'A toilet installation enquiry concerns the complete fixture and its connections. A running cistern, a faulty flush mechanism or a leaking component may need a repair rather than a new suite. Water rising in the bowl belongs with drainage assessment, not an assumption that the toilet must be replaced.',
   'Before purchasing a replacement, discuss its dimensions, the existing connection position and access to the room. Confirm the accepted installation scope, product supply, removal of the old fixture and any separate floor, wall or connection work. A product-only price does not include every task needed at the property.'
  ],[],[['toilet-repairs-perth.html','Toilet and cistern repair assessment'],['blocked-drains-perth.html','Blocked toilet and drain-clearing scope'],['contact.html','Ask about a proposed toilet replacement']]),
 ],
 'lighting-power-points-perth.html':[
  section('gap-lighting-installation','Lighting installation in Perth: plan the fitting and controls',[
   'For planned lighting work, identify the room, fitting type and whether you are replacing a light or proposing a new position. Tell us about an existing dimmer or other control. The product and installation need to be assessed together; a fitting that looks similar is not automatically a compatible replacement.',
   'The quote should identify who supplies the fittings, the included installation work and any additional wiring or access. For a light that flickers or has stopped working, describe that fault separately from a planned upgrade. Do not remove a fitting or enter the ceiling space to prepare the enquiry.'
  ],[],[['power-faults-perth.html','Fault finding for existing lighting problems'],['renewables-smart-home-perth.html','Discuss a proposed smart-lighting product'],['contact.html','Request lighting installation assessment']]),
  section('gap-power-point-installation','Power-point installation in Perth: new outlet or replacement',[
   'For a new power point, describe the intended position and what you want to use it for. Replacing an existing outlet and adding an outlet in a new location can involve different work. The existing supply, accessible wiring and installation location need assessment before the scope is agreed.',
   'Ask whether the quote includes the outlet, associated wiring and any additional circuit or access work. Identify exterior or wet-area locations in the initial request so the specific requirements can be checked before acceptance. Do not remove an outlet or assume that a new point can be added to any existing circuit.'
  ],[],[['fixtures-appliances-perth.html#gap-dishwasher-installation','Appliance connection and outlet requirements'],['electrical.html','Other electrical repairs and installations'],['contact.html','Discuss a new or replacement power point']]),
 ],
 'smoke-alarm-maintenance-perth.html':[
  section('gap-smoke-alarm-installation','Smoke-alarm installation enquiries: new unit or replacement',[
   'Tell us whether the request is for a reported fault, replacement of an existing unit or a proposed new alarm location. Our existing service covers smoke-alarm assessment, maintenance and replacement. A new position, changed supply or interconnection is a separate installation request whose requirements and acceptance must be confirmed.',
   'Give the property type, the affected rooms and any alarm details that are safely readable. There is no need to remove an alarm, open wiring or reach an unsafe location. The written quote should identify the included units and work rather than treating one replacement as an assessment of the whole property.'
  ],[],[['electrical.html','Electrical installation scope'],['property-management.html#gap-managed-work-order','Approval and records for a managed property'],['contact.html','Confirm the proposed smoke-alarm work']]),
  section('gap-smoke-alarm-testing','Smoke-alarm testing and the record you need',[
   'A reported chirp, an agreed replacement and a planned property-wide check are different requests. If you need testing or a record for an agency, describe the units or areas involved and the documentation you need before the visit. Confirm that the proposed service can provide it.',
   'Ask what was checked, which units were included and what remains outside the agreed scope. A receipt for replacing one alarm is not automatically a whole-property compliance certificate. Routine attendance, a recurring maintenance arrangement or a particular certificate is not assumed from this page.'
  ],[],[['insights-tenant-property-manager-maintenance-handover.html','Pass on an occupant report without losing the property reference']]),
 ],
 'power-faults-perth.html':[
  section('gap-fault-finding-scope','Electrical fault finding: what the investigation needs to establish',[
   'A useful investigation separates the reported symptom, the part of the installation assessed and the findings from that visit. A fault affecting one outlet is not the same request as loss of power across several rooms. Describe what has already happened without repeatedly operating equipment to reproduce it.',
   'Ask what the initial investigation includes, what further access or testing would need approval and whether the repair is quoted separately. If the fault does not occur during the visit, discuss the findings and any agreed next step rather than treating the absence of a symptom as proof that the whole installation is fault-free.'
  ],[],[['safety-switch-tripping-perth.html','Assessment of a repeatedly tripping safety switch'],['lighting-power-points-perth.html','A planned light or outlet installation is a separate task'],['about.html','Business details and privately requested trade documentation']]),
 ],
 'safety-switch-tripping-perth.html':[
  section('gap-rcd-testing','RCD testing enquiries versus a tripping-switch repair',[
   'Our safety-switch page covers fault assessment and the agreed repair. A request for scheduled RCD testing, an instrument test or a register for managed premises has a different purpose. Explain the site, equipment and record required so the team can confirm whether that scope is available.',
   'Keep a reported trip separate from a periodic inspection instruction. If you need a specific report, agree its contents and the circuits or devices included before booking. Do not assume that replacing one device certifies the installation, or that a generic repair visit includes every requested compliance document.'
  ],[],[['power-faults-perth.html','Investigation of a broader power fault'],['smoke-alarm-maintenance-perth.html#gap-smoke-alarm-testing','Separate smoke-alarm maintenance and testing requests'],['property-management.html','Work-order approval and document requirements']]),
 ],
 'hot-water-problems-perth.html':[
  section('gap-hot-water-replacement','Hot-water system replacement in Perth: compare the complete scope',[
   'Compare repair and replacement options for the reported hot-water problem. Before choosing replacement, compare the condition of the existing system and the agreed repair option with the proposed equipment and connection work. A loss of hot water alone does not establish that the unit must be replaced.',
   'For a replacement quote, confirm product supply, removal of the old unit, plumbing connections, any fixed electrical work and the checks included for that work. Access changes and restoration of finishes should be identified separately. The existing price range is a guide for a standard package, not a universal price for every system or property.',
   'State the system type if safely known. Gas, heat-pump, refrigeration and manufacturer-specific tasks still need the relevant capability confirmed; this comparison does not expand the accepted specialist service range.'
  ],[],[['insights-hot-water-plumbing-or-electrical.html','Is the hot-water problem plumbing or electrical?'],['fixtures-appliances-perth.html','Product compatibility and connection planning'],['faq.html','Written quote inclusions and additional approval']]),
 ],
 'blocked-drains-perth.html':[
  section('gap-blocked-toilet-shower','Blocked toilet or shower drain: tell us which outlets are affected',[
   'For a blocked toilet, describe rising water or poor drainage separately from a cistern that runs or will not refill. For a shower, tell us whether water stays in the shower area or also returns through another drain. Several affected outlets provide different context from one slow outlet; neither observation proves the underlying cause.',
   'For a price comparison, check whether the scope is initial clearing only or also includes further investigation or a defined repair. Confirm any additional access, inspection method or replacement work before approval. Do not assume that a camera survey or excavation is included in every clearing visit.'
  ],[],[['toilet-repairs-perth.html','Running cistern and flush-mechanism repairs'],['property-management.html','Approval for a drainage investigation'],['faq.html','Questions about guide prices and the written quote']]),
 ],
 'water-leak-detection-perth.html':[
  section('gap-leak-findings','Leak detection and repair: keep the findings with the quote',[
   'Describe the visible water and when it changes, then ask the assessment to distinguish the observed source from anything still uncertain. A damp mark is useful context, not proof of a failed pipe or a particular detection method. The proposed approach depends on the suspected location and safe access.',
   'When reviewing the repair, separate investigation, opening finishes, the plumbing work and any restoration. If records or photographs are needed for the owner or managing agent, agree that requirement before booking. This does not guarantee an insurance outcome, a non-invasive result or a fixed detection accuracy.'
  ],[],[['insights-reporting-a-plumbing-leak.html','Report a suspected leak clearly'],['burst-pipe-repair-perth.html','Repair of a known damaged pipe'],['about.html','Who is arranging the work and how to request relevant documents']]),
 ],
 'toilet-repairs-perth.html':[
  section('gap-toilet-repair-or-installation','Choose between toilet repair, installation and drain clearing',[
   'Start with the task rather than ordering a new suite for every fault. A running cistern or unreliable flush belongs with this repair assessment. A proposed complete replacement needs its product and connection requirements checked. Water backing up in the bowl belongs with drainage assessment.',
   'If you are comparing replacement options, include the selected product, dimensions if available and who supplies it. Ask the quote to identify removal, connection changes and any separate floor or wall work. The existing toilet-repair guide price is not a complete installed-suite package.'
  ],[],[['fixtures-appliances-perth.html#gap-toilet-installation','Toilet installation and replacement enquiries'],['blocked-drains-perth.html#gap-blocked-toilet-shower','Blocked toilets and shower drains'],['contact.html','Arrange assessment of a toilet or cistern fault']]),
 ],
 'property-management.html':[
  section('gap-managed-work-order','A clear plumbing or electrical work order',[
   'Use the same property reference for the occupant report, requested assessment and approval. The example below is an illustrative format, not a completed customer job or a client endorsement. Adapt it to the actual property and confirm the accepted scope with the team.'
  ],['Property: address and unit; identify the affected room or common area.','Observation: for example, “the kitchen tap continues to drip when closed”; record what the occupant reported, not an unverified diagnosis.','Instruction: assess the stated issue and quote the proposed work; name who may approve investigation and additional repairs.','Access: nominated contact and agreed entry arrangements; share keys or private codes through an agreed private channel.','Records: state any agency reference, completion notes, photographs or invoice breakdown required, and confirm what will be provided.'],[['news-clearer-property-maintenance-enquiry.html','Prepare the first maintenance enquiry'],['news-useful-property-work-order.html','Define an assessable work-order scope'],['smoke-alarm-maintenance-perth.html#gap-smoke-alarm-testing','Specify the smoke-alarm work and record required']]),
 ],
 'faq.html':[
  section('gap-price-guide-routes','Find the price guide for the actual task',[
   'The service pages contain the existing guide ranges and their conditions. Compare the included work, not just the lowest figure: attendance or investigation, products, installation, access and separate repair can change the scope. Where a fixed guide is not offered, request a property-specific written quote.',
   'Confirm any attendance charge, charges if you do not proceed and the scope of further investigation before booking. These questions do not establish that a fee applies or is waived; the team needs to confirm the terms for the proposed visit.'
  ],[],[['plumbing.html#gap-plumbing-prices','Plumber costs and quotation scope'],['electrical.html#gap-electrical-prices','Electrician costs and investigation scope'],['blocked-drains-perth.html#service-quote','Blocked-drain clearing price guide'],['hot-water-problems-perth.html#service-quote','Hot-water repair and replacement price guide'],['toilet-repairs-perth.html#service-quote','Toilet repair price guide'],['lighting-power-points-perth.html#service-quote','Lighting and power-point price guide']]),
 ],
};

const extraLinks={
 'plumbing.html':[['fixtures-appliances-perth.html','Fixture and appliance connection enquiries'],['faq.html','Plumbing booking and price questions'],['insights-hot-water-plumbing-or-electrical.html','When hot water needs plumbing or electrical assessment']],
 'electrical.html':[['fixtures-appliances-perth.html','Appliance connections and related fixed electrical work'],['faq.html','Electrical booking and price questions']],
 'fixtures-appliances-perth.html':[['plumbing.html','Perth plumbing repairs and installation scope']],
 'property-management.html':[['smoke-alarm-maintenance-perth.html','Smoke-alarm work for managed properties'],['news-clearer-property-maintenance-enquiry.html','Prepare the first maintenance enquiry']],
 'contact.html':[['news-clearer-property-maintenance-enquiry.html','What to include in a maintenance enquiry'],['fixtures-appliances-perth.html#gap-dishwasher-installation','Dishwasher connection enquiry checklist']],
 'hot-water-problems-perth.html':[['faq.html','Booking and quote questions']],
 'safety-switch-tripping-perth.html':[['smoke-alarm-maintenance-perth.html','Separate smoke-alarm maintenance requests']],
 'northern-suburbs.html':[['plumbing.html','Plumber enquiries for Joondalup and northern Perth'],['electrical.html','Electrical work in northern Perth']],
 'southern-suburbs.html':[['electrical.html','Electrician enquiries for Canning Vale and southern Perth'],['plumbing.html','Plumbing services in southern Perth']],
 'eastern-suburbs.html':[['plumbing.html','Plumbing work in eastern Perth']],
 'western-suburbs.html':[['plumbing.html','Plumbing work in western Perth'],['electrical.html','Electrical work in western Perth']],
 'perth-cbd-inner-suburbs.html':[['plumbing.html','Plumbing services for CBD and inner Perth'],['electrical.html','Electrical work for apartments and inner Perth properties']],
 'perth-hills-swan-valley.html':[['service-areas.html','Check the listed Perth service areas']],
};
const extraFaq={
 'fixtures-appliances-perth.html':[
  ['Is dishwasher installation the same as repairing a faulty dishwasher?','No. A connection request concerns the water, drainage and any agreed electrical arrangements. An internal appliance fault is a separate service. Describe the model, intended location and task so the accepted scope can be confirmed.'],
  ['Can I buy a replacement toilet before checking the connections?','Discuss the proposed product first. Dimensions, the existing connection position and access can affect installation. Confirm product supply, removal and any separate connection or restoration work before treating a product price as the full installed cost.'],
 ],
 'smoke-alarm-maintenance-perth.html':[
  ['Can I request a new alarm location as well as replacement of a faulty unit?','Yes, include both proposed tasks in the enquiry. The team needs to confirm the requirements and accepted scope for the new location separately. Replacement of an existing unit does not automatically include a changed supply, interconnection or additional locations.'],
 ],
 'lighting-power-points-perth.html':[
  ['Does a new power-point price include every possible circuit change?','No. The existing installation and intended use need assessment. Confirm the outlet, wiring and any additional circuit or access work included in the written quote rather than assuming that every new point is the same task.'],
 ],
 'property-management.html':[
  ['Can I request completion notes or an agency invoice reference?','Include the required records and agency reference when arranging the visit. Agree what documentation will be provided for the defined work. A reference or maintenance receipt does not by itself certify parts of the property outside that scope.'],
 ],
};

function applyKeywordGapContent(pages:IntentPages,metadata:IntentMetadata){
 for(const[file,value]of Object.entries(sections))pages[file].sections=value;
 for(const[file,links]of Object.entries(extraLinks))for(const link of links)if(!pages[file].links.some(([url])=>url===link[0]))pages[file].links.push(link);
 for(const[file,faq]of Object.entries(extraFaq))for(const qa of faq)if(!pages[file].faq.some(([q])=>q===qa[0]))pages[file].faq.push(qa);
 metadata['fixtures-appliances-perth.html']={description:'Dishwasher and fixture connections in Perth. Assess product compatibility and plumbing or electrical work, with an on-site assessment and written quote.'};
 metadata['smoke-alarm-maintenance-perth.html']={description:'Smoke alarm repairs, replacement and maintenance in Perth. On-site assessment, repair plan and written quote. Do not remove hardwired units.'};
}
const legacy = {applyKeywordGapContent};
export default legacy;
