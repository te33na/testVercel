export default function Contact(){ return (<div className="card p-8">
  <h1 className="text-3xl font-bold mb-2">Contact</h1>
  <p className="text-slate-600 mb-4">Réponse en 24h ouvrées.</p>
  <form method="POST" action="https://formspree.io/f/your-id" className="grid gap-3">
    <input name="name" placeholder="Nom" required/><input name="email" type="email" placeholder="Email" required/>
    <input name="phone" placeholder="Téléphone"/><textarea name="message" rows={6} placeholder="Votre message..."/>
    <button className="btn btn-primary">Envoyer</button></form></div>); }
