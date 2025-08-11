import Link from "next/link"; import vehicles from "@/data/vehicles"; import VehicleCard from "@/components/VehicleCard";
export default function Home(){ const featured = vehicles.slice(0,3);
  return (<div className="space-y-8">
    <section className="card p-8"><h1 className="text-3xl font-bold mb-2">Véhicules d’occasion certifiés</h1>
    <p className="text-slate-600 mb-4">Financement, reprise et essai sur rendez-vous.</p>
    <div className="flex gap-3"><Link href="/stock" className="btn btn-primary">Voir le stock</Link>
    <Link href="/contact" className="btn btn-outline">Contact</Link></div></section>
    <section><h2 className="text-xl font-semibold mb-3">Nos nouveautés</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{featured.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div>
    </section></div>); }
