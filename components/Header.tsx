
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/stock", label: "Stock" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-brand-700">
          Nova Auto
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "hover:text-brand-700 transition",
                pathname === l.href && "text-brand-700"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+33387000000" className="btn btn-primary hidden sm:inline-flex">
          Appeler
        </a>
      </div>
    </header>
  );
}
