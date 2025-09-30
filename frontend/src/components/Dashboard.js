import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Dashboard(){
  const [kpis, setKpis] = useState(null);
  useEffect(()=>{axios.get('/api/dashboard/kpis').then(r=>setKpis(r.data)).catch(()=>{});},[]);
  return (<div><h1>GCDA Dashboard</h1>{kpis ? (<div><p>Alerts: {kpis.alertsCount}</p><p>Vulnerabilities: {kpis.vulnCount}</p></div>) : <p>Loading KPIs...</p>}</div>);
}
