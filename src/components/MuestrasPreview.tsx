"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { MuestraCard } from "./MuestrasGallery";
import { muestras, rubros } from "@/lib/muestras";

// Una muestra destacada por rubro (la de más reseñas), hasta 3 en la home.
const featured = rubros
  .map((r) => muestras.find((m) => m.rubroKey === r.key))
  .filter((m): m is NonNullable<typeof m> => Boolean(m))
  .slice(0, 3);

export default function MuestrasPreview({ id }: { id?: string }) {
  return (
    <section id={id} className="px-6 max-w-5xl mx-auto pt-24 pb-10">
      <ScrollReveal>
        <h2
          className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-center mb-4"
          style={{ textShadow: "0 4px 15px rgba(0,0,0,0.8)" }}
        >
          Muestras por rubro
        </h2>
        <p className="font-body text-wonka-cream-dark/70 text-center text-base sm:text-lg max-w-xl mx-auto">
          Webs de demostración que armé para negocios reales. Elegí tu rubro y mirá cómo quedaría la tuya.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-2 justify-center mt-8 mb-10">
          {rubros
            .filter((r) => muestras.some((m) => m.rubroKey === r.key))
            .map((r) => (
              <Link
                key={r.key}
                href={`/muestras?rubro=${r.key}`}
                className="px-4 py-2 rounded-full font-body text-sm font-medium bg-white/5 text-wonka-cream-dark border border-white/10 hover:border-wonka-gold/50 hover:text-wonka-gold transition-all duration-200"
              >
                {r.label}
              </Link>
            ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((m, i) => (
          <ScrollReveal key={m.slug} delay={0.15 + i * 0.1}>
            <MuestraCard m={m} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-10">
          <Link
            href="/muestras"
            className="inline-block px-8 py-4 rounded-full font-body font-semibold text-wonka-gold border border-wonka-gold/60 hover:bg-wonka-gold hover:text-wonka-purple-dark hover:shadow-[0_10px_40px_rgba(212,168,67,0.4)] transition-all duration-300"
          >
            Ver las {muestras.length} muestras →
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
