export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10 text-sm text-slate-600 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold text-slate-800 mb-2">Nova Auto</div>
          <p>Vente de véhicules d’occasion — Metz & Moselle.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-800 mb-2">Infos</div>
          <ul className="space-y-1">
            <li><a href="/stock">Stock</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-800 mb-2">Contact</div>
          <p>12 rue des Ateliers, 57000 Metz<br/>+33 3 87 00 00 00<br/>contact@nova-auto.fr</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Nova Auto. Tous droits réservés.
      </div>
    </footer>
  );
}
