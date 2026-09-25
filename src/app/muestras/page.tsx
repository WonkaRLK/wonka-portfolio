import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import MuestrasGallery from "@/components/MuestrasGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { rubros } from "@/lib/muestras";

export const metadata: Metadata = {
  title: "Muestras de webs por rubro | Wonka",
  description:
    "Landings de muestra para estéticas, odontólogos, gimnasios, alojamientos, inmobiliarias, estudios jurídicos y tiendas. Así puede quedar la web de tu negocio.",
  openGraph: {
    title: "Muestras de webs por rubro | Wonka",
    description: "Así puede quedar la web de tu negocio. Elegí tu rubro y mirá ejemplos reales.",
    url: "https://www.wonkadev.online/muestras",
    siteName: "Wonka",
    locale: "es_AR",
    type: "website",
  },
};

export default async function MuestrasPage({
  searchParams,
}: {
  searchParams: Promise<{ rubro?: string }>;
}) {
  const { rubro } = await searchParams;
  const label = rubros.find((r) => r.key === rubro)?.label;

  return (
    <main className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <header className="px-6 pt-8 max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl text-wonka-gold">
            Wonka
          </Link>
          <Link
            href="/#contacto"
            className="font-body text-sm text-wonka-cream-dark hover:text-wonka-gold transition-colors"
          >
            Contacto →
          </Link>
        </header>

        <section className="px-6 max-w-5xl mx-auto pt-16 pb-24">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-wonka-gold/70 text-center mb-4">
            Muestras{label ? ` · ${label}` : " por rubro"}
          </p>
          <h1
            className="font-heading font-bold text-4xl sm:text-6xl text-wonka-gold text-center leading-[1.05]"
            style={{ textShadow: "0 4px 15px rgba(0,0,0,0.8)" }}
          >
            Así puede quedar
            <br />
            la web de tu negocio
          </h1>
          <p className="font-body text-wonka-cream-dark/75 text-center text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-14">
            Cada muestra la armé para un negocio real a partir de su ficha de Google: sus fotos, sus horarios y sus
            reseñas. Son demostraciones, no sitios oficiales. La tuya la tenés lista en una semana.
          </p>

          <MuestrasGallery initial={rubro ?? "todos"} />
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}
