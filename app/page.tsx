import Image from "next/image";
import Link from "next/link";
import vehicles from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";

export default function Home() {
  const featured = vehicles.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="hero hero-shadow">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="badge border-brand-600 text-brand-700 mb-4">
              Garage à Metz
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Véhicules d’occasion certifiés.
              <br className="hidden md:block" />
              Financement & reprise immédiate.
            </h1>
            <p className="text-slate-600 mb-6">
              Sélection soignée, historique limpide, garantie jusqu’à 12 mois.
            </p>
            <div className="flex gap-3">
              <Link href="/stock" className="btn btn-primary">
                Voir le stock
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <li>✓ Contrôle & révision effectués</li>
              <li>✓ Dossier complet</li>
              <li>✓ Financement rapide</li>
              <li>✓ Reprise sur place</li>
            </ul>
          </div>
          <div className="relative h-72 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* NOUVEAUTÉS */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Nos nouveautés</h2>
          <Link href="/stock" className="text-brand-700 font-medium">
            Tout le stock →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </section>

      {/* BLOC FINANCEMENT */}
      <section className="card p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-3">Financement & Assurance</h3>
        <p className="text-slate-600 mb-4">
          Simulation en 24h : mensualités, apport, durée. Partenaires : Cofidis,
          Franfinance.
        </p>
        <div className="flex gap-3">
          <Link href="/contact" className="btn btn-primary">
            Je fais une demande
          </Link>
          <a href="tel:+33387000000" className="btn btn-ghost">
            Nous appeler
          </a>
        </div>
      </section>
    </div>
  );
}
