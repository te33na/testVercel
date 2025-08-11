import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Garage Nova Auto — Metz" };
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="fr"><body><header className="border-b bg-white">
    <div className="container h-14 flex items-center justify-between">
      <a href="/" className="font-bold text-brand-700">Garage Nova Auto</a>
      <nav className="flex gap-4 text-sm"><a href="/stock">Stock</a><a href="/contact">Contact</a></nav>
    </div></header><main className="container my-8">{children}</main>
    <footer className="border-t"><div className="container py-8 text-sm text-slate-600">
      © {new Date().getFullYear()} Nova Auto</div></footer></body></html>);
}
