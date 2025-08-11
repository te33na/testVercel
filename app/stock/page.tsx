"use client";
import { useMemo, useState } from "react";
import vehicles from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";

export default function StockPage() {
  const [query, setQuery] = useState("");
  const [fuel, setFuel] = useState("all");
  const [gearbox, setGearbox] = useState("all");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchQ = (
        v.title +
        " " +
        v.brand +
        " " +
        v.model
      ).toLowerCase().includes(query.toLowerCase());
      const matchFuel = fuel === "all" || v.fuel === fuel;
      const matchGear = gearbox === "all" || v.gearbox === gearbox;
      const matchPrice = maxPrice === "" || v.price <= (maxPrice as number);
      return matchQ && matchFuel && matchGear && matchPrice;
    });
  }, [query, fuel, gearbox, maxPrice]);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <h1 className="text-3xl font-bold">Stock disponible</h1>
        <div className="text-sm text-slate-600">
          {filtered.length} véhicule(s)
        </div>
      </div>

      <div className="card p-4 grid md:grid-cols-4 gap-3">
        <input
          placeholder="Rechercher (modèle, marque…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
          <option value="all">Carburant</option>
          <option value="Essence">Essence</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybride">Hybride</option>
          <option value="Electrique">Électrique</option>
        </select>
        <select value={gearbox} onChange={(e) => setGearbox(e.target.value)}>
          <option value="all">Boîte</option>
          <option value="Manuelle">Manuelle</option>
          <option value="Automatique">Automatique</option>
        </select>
        <input
          type="number"
          placeholder="Prix max (€)"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
        {filtered.length === 0 && (
          <div className="text-slate-600">Aucun véhicule ne correspond.</div>
        )}
      </div>
    </div>
  );
}
