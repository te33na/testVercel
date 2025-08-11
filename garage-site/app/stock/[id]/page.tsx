import vehicles from "@/data/vehicles"; import Image from "next/image"; import Link from "next/link";
export default function VehicleDetail({params}:{params:{id:string}}){ const v=vehicles.find(x=>x.id===params.id);
  if(!v) return <div>Véhicule introuvable.</div>;
  return (<div className="grid md:grid-cols-2 gap-6">
    <div className="card overflow-hidden"><div className="relative h-80">
      <Image src={v.photos[0]} alt={v.title} fill className="object-cover"/></div></div>
    <div><h1 className="text-3xl font-bold">{v.title}</h1>
      <div className="text-2xl font-semibold">{v.price.toLocaleString('fr-FR')} €</div>
      <ul className="text-slate-700 grid grid-cols-2 gap-1 text-sm">
        <li>Année : {v.year}</li><li>Km : {v.mileage_km.toLocaleString('fr-FR')}</li>
        <li>Carburant : {v.fuel}</li><li>Boîte : {v.gearbox}</li></ul>
      <p className="text-slate-600 mt-3">{v.description}</p>
      <div className="flex gap-3 mt-4"><Link href="/contact" className="btn btn-primary">Demander un essai</Link></div>
    </div></div>); }
