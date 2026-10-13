const {pages:newPages,hours}=require('./expanded-services.cjs');
const addLink=(p,href,label)=>{if(!p.links.some(x=>x[0]===href))p.links.push([href,label]);};
function applyConfirmedExpansion(pages,metadata){
 for(const guide of require('./region-guides').regionGuides)if(guide.seoTitle)metadata[guide.route]={...metadata[guide.route],title:guide.seoTitle};
 for(const p of newPages){
  pages[p.file]={primary:p.primary,owners:[],intent:p.file.startsWith('emergency-')?'commercial-emergency':'commercial-confirmed-service',heading:'Prepare the request and approval',body:'Give the property location, observable symptoms or intended installation, access contact and the person who can approve the work. The agreed quote sets out the assessment and work; submitting a form does not reserve an appointment.',links:[[p.parent,p.parent==='plumbing.html'?'Perth plumbing services':'Perth electrical services'],...p.related],faq:[]};
  // Relevant hub, public FAQ and related services all expose native routes.
  addLink(pages[p.parent],p.file,p.title);
  addLink(pages['faq.html'],p.file,p.title+' questions');
  for(const [related]of p.related)if(pages[related])addLink(pages[related],p.file,p.title);
 }
 for(const file of ['index.html','contact.html','faq.html','plumbing.html','electrical.html']){
  const p=pages[file];
  p.faq=p.faq.filter(([q])=>!['What are your routine hours and emergency arrangements?'].includes(q));
  p.faq.push(['What are your routine hours and emergency arrangements?',hours.text+' Emergency repair fees follow the quoted work plan. For urgent work, call rather than relying on an online enquiry.']);
 }
 const replaceFaq=(file,pattern,answer)=>{pages[file].faq=pages[file].faq.map(([q,a])=>[q,pattern.test(q)?answer:a]);};
 replaceFaq('plumbing.html',/Can you attend immediately/,hours.text+' Emergency fees follow the quoted work plan. Utility faults and immediate danger use the appropriate official channel first.');
 replaceFaq('electrical.html',/Can I book an after-hours/,hours.text+' Call 0413 477 667 for urgent work; an online form does not reserve an appointment. For shock or network danger, use the official safety route first.');
 const education={
  'power-faults-perth.html':[
   ['Why does only one part of a house lose power?','Different rooms and outlets may use different circuits. A circuit, connection or connected-equipment fault may affect part of the property while other areas work. Report the pattern, but do not assume that working lights prove an affected outlet is safe.'],
   ['Can you investigate an intermittent power fault?','Yes. Describe when it occurs, affected outlets or lights and any change in equipment use. Intermittent faults may need staged investigation; assessment and repair inclusions are confirmed in the quote rather than promised from a symptom.']],
  'safety-switch-tripping-perth.html':[
   ['What is the difference between an RCD and a circuit breaker?','An RCD responds to a current imbalance associated with leakage; a circuit breaker protects against overload or short circuit. Combined devices may provide both functions. The device and fault need assessment; do not bypass protection or repeatedly reset it.'],
   ['Does a tripping safety switch mean the switch itself is faulty?','No. A circuit or connected appliance may be responsible. Rain-related trips and trips during washing-machine use are observations to report, not proof of a particular failed component.']],
  'blocked-drains-perth.html':[
   ['Why do drains keep blocking after they have been cleared?','A recurring blockage can have an unresolved underlying cause. Explain the affected fixtures and recurrence so further investigation can be scoped. Clearing a blockage does not by itself prove that pipe replacement or a particular inspection method is needed.'],
   ['Is a slow-flushing toilet always caused by a blocked drain?','No. Cistern operation and the toilet fixture can also affect flushing. Backflow or several affected outlets changes the assessment; a cistern repair and downstream drain clearing are different tasks.'],
   ['Why does my kitchen sink gurgle and drain slowly?','A restriction or another drainage issue may affect how water and air move. Report whether both bowls, the dishwasher or other fixtures are involved. The sound alone does not locate the problem or establish that a pipe must be replaced.']],
  'water-leak-detection-perth.html':[
   ['Can a hidden water leak cause a high bill without visible water damage?','Yes. Water may escape where it is not readily visible, but a higher bill can also reflect changed use or other factors. Compare the timing and report meter observations; investigation is needed before attributing the bill to a concealed pipe leak.'],
   ['Why is my water meter moving when no water is being used?','Unexpected flow may indicate a leak or equipment still drawing water, including a running cistern. It does not by itself identify an underground leak. Follow Water Corporation guidance for meter concerns and arrange assessment of private plumbing where appropriate.']],
  'burst-pipe-repair-perth.html':[
   ['What are the signs of a burst or leaking pipe inside a wall?','Dampness, staining or unexpected water can justify investigation, but similar signs can come from other sources. Report the location and timing without opening walls; water near electrical equipment requires safety-first action.']],
  'tap-mixer-repairs-perth.html':[
   ['Why does a tap keep dripping after it is turned off?','A sealing component or another fitting fault may allow water through. A mixer leaking at its base is a different observation from a drip at the outlet. The fitting and parts need assessment before choosing repair or replacement.'],
   ['Can a dripping tap waste water over time?','Yes. A persistent drip can add up, with the amount depending on its flow and duration. We do not estimate a saving from the sound alone; arrange assessment and compare the agreed repair or replacement option.'],
   ['Can I supply my own replacement mixer tap?','Yes, subject to suitability. Discuss the model and existing connection before purchase so the quote can identify installation, any additional parts and whether other access work is needed.']],
  'toilet-repairs-perth.html':[
   ['What is the difference between a running toilet and a leaking toilet base?','A running toilet may continue filling or passing water through the cistern and pan. Water at the base may involve a connection, fixture or another source. These observations need different checks and do not establish that the whole suite must be replaced.'],
   ['Why does my toilet keep refilling on its own?','Water may be escaping from the cistern so the fill mechanism runs again, but the components need inspection. Describe the timing and visible water. A parts repair may be appropriate; a new suite is not the automatic next step.']],
  'hot-water-problems-perth.html':[
   ['Why has my hot water suddenly stopped working?','A supply, heating, control or plumbing fault may be involved. Report the system type and whether every hot outlet is affected. Do not open the unit, reset protection repeatedly or assume the system must be replaced. Gas and heat-pump specialist work requires separate confirmation.'],
   ['Why is there hot water at some taps but not at the shower?','A local fitting or mixing problem may differ from a system-wide loss of heating. Tell us which outlets work and when the temperature changes. The pattern guides assessment but does not establish the component or trade required.'],
   ['Why might an electric hot water system trip a safety switch?','A fault in the heater or associated electrical installation can cause a trip. The timing is useful for assessment, but it does not identify the failed part. Do not bypass protection; the appropriate plumbing and electrical work is confirmed after investigation.']],
  'fixtures-appliances-perth.html':[
   ['Why does the laundry drain overflow when the washing machine empties?','The external waste connection or drainage may be restricted, but an appliance-related issue can also require attention. Report where water appears and whether other fixtures drain normally. Internal washing-machine repairs and plumbing connections are different scopes.'],
   ['Can you replace leaking washing machine taps?','Yes. We assess the supply tap or connection and agree the replacement or repair. A leaking supply tap is not a promise to repair internal appliance parts.']],
  'smoke-alarm-maintenance-perth.html':[
   ['Why can a hardwired smoke alarm keep chirping?','A warning may relate to the alarm, backup power or the device condition, depending on the model. Note the warning and age if known without removing a hardwired unit. Assessment should follow the device instructions and applicable property requirements.'],
   ['What smoke alarm requirements apply to rental homes in WA?','WA guidance requires compliant mains-powered smoke alarms for homes offered for rent, subject to permitted exceptions. The alarms must be in working order and less than ten years old. Owners are responsible for maintaining compliance; confirm the installation and applicable requirements for the property rather than assuming replacement of one unit certifies the whole home.']],
  'property-management.html':[
   ['Who should a tenant contact first about plumbing or electrical repairs?','For an ordinary repair, contact the managing agent or landlord and follow the agreed reporting and approval process. Immediate danger or utility emergencies need the correct emergency contact first. Responsibility and authorisation should be confirmed for the particular property.']],
  'plumbing.html':[
   ['What jobs should I call a licensed plumber for?','Describe problems with fixed water or drainage installations, leaking fittings, toilets or hot-water plumbing. The team confirms the regulated work and appropriate authorisation for the actual scope. A general repair enquiry does not automatically include gas fitting or every appliance repair.']],
  'electrical.html':[
   ['What household electrical work requires a licensed electrician in WA?','Fixed wiring, power points and fixed electrical installation work should be arranged through appropriately licensed electrical professionals, not an unlicensed general handyman. Ask for the current documentation relevant to the work; an ABN alone does not verify trade authorisation.']],
 };
 const shortAnswers={
  'power-faults-perth.html':['A fault can affect one circuit or connection while other rooms still have power. Working lights do not establish outlet safety.','Yes. An intermittent fault can be investigated, although its timing may require more than one assessment stage.'],
  'safety-switch-tripping-perth.html':['An RCD detects leakage imbalance; a circuit breaker responds to overload or short circuit. A combined device can do both.','No. Tripping can originate in connected equipment or wiring, so replacing the switch alone may not resolve it.'],
  'blocked-drains-perth.html':['An unresolved restriction or other underlying drainage problem can cause recurrence. Further investigation should establish the next scope.','No. Poor flushing can involve the cistern or toilet fixture as well as downstream drainage.','A drainage restriction can cause slow flow and gurgling, but the noise cannot identify its location or cause.'],
  'water-leak-detection-perth.html':['Yes, a concealed leak is possible without visible damage. A bill increase alone is insufficient to diagnose one.','Flow without expected use can indicate a leak or a fixture still drawing water. It cannot locate the source.'],
  'burst-pipe-repair-perth.html':['Unexplained damp patches, stains or water may indicate a concealed leak, but inspection must distinguish plumbing from other sources.'],
  'tap-mixer-repairs-perth.html':['A worn seal or fitting fault can let water pass after shut-off; an outlet drip and base leak need different checks.','Yes. Continued dripping wastes water; the amount depends on the actual rate and how long it continues.','Yes, if the selected mixer suits the installation. Confirm compatibility and the installation inclusions before buying.'],
  'toilet-repairs-perth.html':['A running cistern passes or replenishes water internally; a base leak is external water with a source that needs checking.','Unwanted water loss from the cistern can trigger refilling. Inspection determines which component, if any, needs repair.'],
  'hot-water-problems-perth.html':['Several supply, heating or plumbing faults can interrupt hot water. The system type and affected outlets guide assessment.','A shower-only temperature problem can involve its fitting or mixing arrangement rather than failure of the whole heater.','A heater or its electrical supply may be faulty. Do not bypass the safety switch or keep resetting it.'],
  'fixtures-appliances-perth.html':['A waste-connection restriction or drainage problem is possible; appliance faults require a separate scope.','Yes. Repair or replacement of the water supply tap can be assessed separately from internal washing-machine repairs.'],
  'smoke-alarm-maintenance-perth.html':['Chirping can indicate a device or backup-power warning. Follow the model instructions and arrange assessment without removing hardwired equipment.','WA rental homes require working, compliant mains-powered alarms under the applicable rules and exceptions, with units less than ten years old.'],
  'property-management.html':['For routine repairs, report to the agent or landlord. For immediate danger, use the appropriate emergency channel first.'],
  'plumbing.html':['Use appropriately authorised plumbing trades for regulated fixed-water and drainage work; confirm the specific task and documentation.'],
  'electrical.html':['Arrange fixed wiring and power-point work through appropriately licensed electrical professionals and verify the relevant current documentation.'],
 };
 const guidance={
  'power-faults-perth.html':['insights-safety-switch-keeps-tripping.html','Safe observations before electrical assessment'],
  'safety-switch-tripping-perth.html':['insights-safety-switch-keeps-tripping.html','Understanding recurring trips safely'],
  'blocked-drains-perth.html':['toilet-repairs-perth.html','Distinguishing a cistern fault from drainage'],
  'water-leak-detection-perth.html':['https://www.watercorporation.com.au/help-and-advice/water-issues/leaks/leaking-meter','Water Corporation meter-leak guidance'],
  'burst-pipe-repair-perth.html':['insights-reporting-a-plumbing-leak.html','Reporting water location and timing safely'],
  'tap-mixer-repairs-perth.html':['fixtures-appliances-perth.html','Fitting compatibility and connection scope'],
  'toilet-repairs-perth.html':['blocked-drains-perth.html','When the symptom belongs with drainage'],
  'hot-water-problems-perth.html':['insights-hot-water-plumbing-or-electrical.html','Separate plumbing and electrical hot-water checks'],
  'fixtures-appliances-perth.html':['blocked-drains-perth.html','Drainage symptoms and clearing scope'],
  'smoke-alarm-maintenance-perth.html':['https://dfes.wa.gov.au/hazard-information/fire-in-the-home/smoke-alarms','DFES smoke-alarm guidance'],
  'property-management.html':['insights-tenant-property-manager-maintenance-handover.html','Tenant and manager repair handover'],
  'plumbing.html':['about.html','Business registration and trade documentation boundaries'],
  'electrical.html':['about.html','Requesting the documentation relevant to the work'],
 };
 for(const [file,items]of Object.entries(education)){
  const p=pages[file];
  const id='learn-about-'+file.replace('.html','');
  for(const [i,[q]]of items.entries())if(!p.faq.some(x=>x[0]===q))p.faq.push([q,shortAnswers[file][i],'#'+id]);
  p.sections=p.sections||[];
  p.sections.push({id,heading:'Understand the symptoms before choosing the work',body:items.map(([,a])=>a),links:[guidance[file]],bullets:[]});
 }
 // Make newly confirmed scope explicit without overwriting the preceding local work.
 pages['fixtures-appliances-perth.html'].sections.push({id:'confirmed-supply-removal',heading:'Supply, removal and taking away the old unit',body:['For dishwasher and toilet installations, we can supply the agreed product, remove the old unit and take it away as part of the installation package. The written quote identifies the selected product, connection work and any additional access or making good. Cabinet changes, bathroom renovation and internal appliance repairs are not automatically included.'],links:[['dishwasher-installation-perth.html','Dishwasher supply and installation'],['toilet-installation-perth.html','Toilet supply and installation']],bullets:[]});
 pages['lighting-power-points-perth.html'].heading='Choose the lighting or power-point service you need';
 pages['lighting-power-points-perth.html'].body='Use the dedicated lighting page for flickering lights, LED downlights and light fitting installation. Use the power-point page for outlet installation, replacement, failed switches and power points not working. These different tasks are assessed against the existing installation; a circuit fault belongs with fault finding.';
 for(const file of ['lighting-power-points-perth.html'])pages[file].sections=pages[file].sections.filter(x=>!['gap-lighting-installation','gap-power-point-installation'].includes(x.id));
 // Keep historical section links alive while directing decisions to the new owners.
 pages['lighting-power-points-perth.html'].sections.push({id:'gap-lighting-installation',heading:'Lighting work: use the dedicated service page',body:['For fitting selection, LED compatibility, flickering and new lighting positions, use the lighting installation and repair page.'],links:[['lighting-installation-perth.html','Lighting installation and repairs in Perth']],bullets:[]},{id:'gap-power-point-installation',heading:'Power-point work: use the dedicated service page',body:['For damaged outlets, failed switches and additional or replacement power points, use the power-point service page.'],links:[['power-points-perth.html','Power point installation and repairs in Perth']],bullets:[]});
 pages['lighting-power-points-perth.html'].primary='lighting and power point service overview Perth';
 pages['lighting-power-points-perth.html'].intent='commercial-service-overview';
 pages['lighting-power-points-perth.html'].faq=[
  ['Which page covers a new or replacement power point?','Use the dedicated power-point service page for installation, replacement and outlet faults.','power-points-perth.html'],
  ['Which page covers light fittings and LED downlights?','Use the dedicated lighting page for fitting changes, flickering lights and planned lighting positions.','lighting-installation-perth.html'],
  ['What if the electrical problem is wider than one fitting?','Use electrical fault finding when several points are affected or the source is uncertain.','power-faults-perth.html'],
 ];
 metadata['lighting-power-points-perth.html']={title:'Lighting & Power Point Overview Perth | Ellis',h1:'Lighting & Power Point Electrical Services Overview Perth',description:'Find Perth lighting, power point and switch services. Choose the dedicated repair or installation page, or arrange assessment of a wider electrical fault.'};
 for(const file of ['water-leak-detection-perth.html','safety-switch-tripping-perth.html','hot-water-problems-perth.html','toilet-repairs-perth.html','property-management.html']){
  const qa=[education[file][0][0],shortAnswers[file][0],file+'#learn-about-'+file.replace('.html','')];
  if(!pages['faq.html'].faq.some(([q])=>q===qa[0]))pages['faq.html'].faq.push(qa);
 }
}
module.exports={applyConfirmedExpansion};
