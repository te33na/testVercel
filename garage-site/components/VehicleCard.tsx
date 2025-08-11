import Image from "next/image"; import Link from "next/link"; import type { Vehicle } from "@/data/vehicles";
export default function VehicleCard({vehicle}:{vehicle:Vehicle}){
  return (<Link href={`/stock/${vehicle.id}`} className="card overflow-hidden hover:shadow-lg transition">
    <div className="relative h-40"><Image src={vehicle.photos[0]} alt={vehicle.title} fill className="object-cover"/></div>
    <div className="p-3 space-y-1"><div className="font-semibold">{vehicle.title}</div>
      <div className="text-slate-600 text-sm">{vehicle.fuel} • {vehicle.gearbox}</div>
      <div className="text-lg font-bold">{vehicle.price.toLocaleString('fr-FR')} €</div></div></Link>);
}
