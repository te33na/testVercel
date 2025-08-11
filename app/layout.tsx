import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Auto — Vente & Achat de véhicules d’occasion à Metz",
  description:
    "Véhicules d’occasion certifiés, financement rapide, reprise immédiate. Nova Auto — Metz/Moselle.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="container my-8">{children}</main>
        <Footer />
        {/* AutoDealer JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "Nova Auto",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 rue des Ateliers",
                addressLocality: "Metz",
                postalCode: "57000",
                addressCountry: "FR",
              },
              telephone: "+33 3 87 00 00 00",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:30",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
