(function(root){
  // One allowlist shared by native-link generation and contact prefill.
  // Mixed-trade requests must not silently become plumbing or electrical jobs.
  const services={
    'plumbing.html':['Plumbing','Plumbing repairs and installation'],
    'electrical.html':['Electrical','Electrical repairs and installation'],
    'property-management.html':['Not sure','Managed-property plumbing and electrical maintenance'],
    'hot-water-problems-perth.html':['Not sure','Hot Water Repairs & System Replacement Perth'],
    'blocked-drains-perth.html':['Plumbing','Blocked Drain Repairs Perth'],
    'water-leak-detection-perth.html':['Plumbing','Water Leak Detection Perth'],
    'burst-pipe-repair-perth.html':['Plumbing','Burst Pipe Repairs Perth'],
    'tap-mixer-repairs-perth.html':['Plumbing','Tap & Mixer Repairs Perth'],
    'toilet-repairs-perth.html':['Plumbing','Toilet Repairs Perth'],
    'power-faults-perth.html':['Electrical','Electrical Fault Finding Perth'],
    'safety-switch-tripping-perth.html':['Electrical','Safety Switch Tripping Repairs Perth'],
    'lighting-power-points-perth.html':['Electrical','Lighting & Power Point Service Overview Perth'],
    'smoke-alarm-maintenance-perth.html':['Electrical','Smoke Alarm Maintenance Perth'],
    'fixtures-appliances-perth.html':['Not sure','Fixtures & Appliance Connections Perth'],
    'renewables-smart-home-perth.html':['Electrical','Renewables & Smart Home Enquiries Perth'],
    'lighting-installation-perth.html':['Electrical','Lighting Installation & Repairs Perth'],
    'power-points-perth.html':['Electrical','Power Point Installation & Repairs Perth'],
    'dishwasher-installation-perth.html':['Plumbing','Dishwasher Installation & Connections Perth'],
    'toilet-installation-perth.html':['Plumbing','Toilet Installation & Replacement Perth'],
    'shower-plumbing-repairs-perth.html':['Plumbing','Shower Plumbing Leak Repairs Perth'],
    'water-pressure-perth.html':['Plumbing','Low Water Pressure & Water Hammer Perth'],
    'ceiling-fans-perth.html':['Electrical','Ceiling Fan Installation & Repairs Perth'],
    'exhaust-fans-perth.html':['Electrical','Bathroom Exhaust Fan Replacement Perth'],
    'switchboard-upgrades-perth.html':['Electrical','Switchboard Repairs & Upgrades Perth'],
    'rcd-testing-perth.html':['Electrical','RCD Testing & Safety Switch Checks Perth'],
    'emergency-plumber-perth.html':['Plumbing','24-Hour Emergency Plumber Perth'],
    'emergency-electrician-perth.html':['Electrical','24-Hour Emergency Electrician Perth'],
  };
  function serviceFromSearch(search){
    const values=new URLSearchParams(search).getAll('service');
    if(values.length!==1||!Object.prototype.hasOwnProperty.call(services,values[0]))return null;
    const [type,label]=services[values[0]];
    return {route:values[0],type,label};
  }
  function serviceFromRoute(pathname){
    const route=String(pathname||'').split('/').pop();
    if(!Object.prototype.hasOwnProperty.call(services,route))return null;
    const [type,label]=services[route];return {route,type,label};
  }
  function safeSuburbFromSearch(search){
    const raw=String(search).match(/(?:^|[?&])suburb=([^&]*)/);
    if(!raw||/%(?![0-9a-f]{2})/i.test(raw[1]))return null;
    const values=new URLSearchParams(search).getAll('suburb');
    const suburb=values.length===1?values[0].trim():'';
    return suburb&&suburb.length<=240&&!/[\uFFFD\x00-\x1f\x7f]/.test(values[0])?suburb:null;
  }
  function resolveBookingContext(pathname,search){
    return {service:serviceFromSearch(search)||serviceFromRoute(pathname),suburb:safeSuburbFromSearch(search)};
  }
  const api={services,serviceFromSearch,serviceFromRoute,safeSuburbFromSearch,resolveBookingContext};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  if(root)root.EllisBookingContext=api;
})(typeof window!=='undefined'?window:null);
