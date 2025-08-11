"use client"; import {useState,useMemo} from "react"; import vehicles from "@/data/vehicles"; import VehicleCard from "@/components/VehicleCard";
export default function StockPage(){ const [q,setQ]=useState(""); const [fuel,setFuel]=useState("all");
  const filtered = useMemo(()=>vehicles.filter(v=>(v.title+" "+v.brand+" "+v.model).toLowerCase().includes(q.toLowerCase())
    && (fuel==="all"||v.fuel===fuel)),[q,fuel]);
  return (<div className="space-y-4"><h1 className="text-3xl font-bold">Stock disponible</h1>
    <div className="card p-4 grid md:grid-cols-3 gap-3"><input placeholder="Rechercher" value={q} onChange={e=>setQ(e.target.value)}/>
      <select value={fuel} onChange={e=>setFuel(e.target.value)}><option value="all">Carburant</option>
        <option>Essence</option><option>Diesel</option><option>Hybride</option><option>Electrique</option></select></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div></div>); }
