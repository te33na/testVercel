import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/stock/${vehicle.id}`}
      className="card overflow-hidden hover:shadow-lg transition group"
    >
      <div className="relative h-52">
        <Image
          src={vehicle.photos[0]}
          alt={vehicle.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition"
        />
        <div className="absolute top-3 left-3 badge bg-white/90 border-slate-200">
          {vehicle.year}
        </div>
        <div className="absolute top-3 right-3 badge bg-white/90 border-slate-200">
          {vehicle.mileage_km.toLocaleString("fr-FR")} km
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="font-semibold">{vehicle.title}</div>
        <div className="flex gap-2">
          <span className="pill">{vehicle.fuel}</span>
          <span className="pill">{vehicle.gearbox}</span>
        </div>
        <div className="text-lg font-bold">
          {vehicle.price.toLocaleString("fr-FR")} €
        </div>
      </div>
    </Link>
  );
}
