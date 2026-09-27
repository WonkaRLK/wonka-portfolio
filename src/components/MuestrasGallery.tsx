"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { muestras, rubros, type Muestra } from "@/lib/muestras";

const WA =
  "https://wa.me/5493442472884?text=" +
  encodeURIComponent("Hola Wonka! Vi las muestras y quiero una web así para mi negocio.");

export function MuestraCard({ m, index = 0 }: { m: Muestra; index?: number }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.35), ease: [0.22, 1, 0.36, 1] }}
      href={`/muestras/${m.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-wonka-gold/50 hover:-translate-y-[6px] hover:shadow-[0_16px_50px_rgba(212,168,67,0.25)] transition-[transform,box-shadow,border-color] duration-300 will-change-transform"
    >
      <div className="relative aspect-[16/10] bg-[#1a0830] overflow-hidden isolate [transform:translateZ(0)] [container-type:size]">
        {/* Captura alta: al pasar el mouse "scrollea" la web de la muestra */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/muestras/${m.slug}/preview-full.webp`}
          alt={`Muestra de web para ${m.name}`}
          width={900}
          height={m.fullH || 2000}
          loading="lazy"
          className="absolute inset-x-0 top-0 w-full h-auto [transition-property:transform] [transition-timing-function:cubic-bezier(.4,0,.2,1)] [transition-duration:.9s] group-hover:[transition-timing-function:linear] group-hover:[transition-duration:var(--scroll-dur)] group-hover:[transform:translateY(calc(100cqh-100%))] motion-reduce:transition-none motion-reduce:group-hover:transform-none [backface-visibility:hidden] will-change-transform"
          style={{ ["--scroll-dur" as string]: `${Math.max(3, Math.min(9, ((m.fullH || 2000) / 900) * 2.2))}s` }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-wonka-purple-dark/80 to-transparent pointer-events-none" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-body font-semibold uppercase tracking-wider bg-wonka-purple-dark/80 backdrop-blur text-wonka-gold border border-wonka-gold/30">
          {m.rubro}
        </span>
        <span className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-body font-semibold text-wonka-purple-dark bg-wonka-gold opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Ver muestra <span aria-hidden className="inline-block group-hover:animate-[nudge_1.1s_ease-in-out_infinite]">→</span>
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-wonka-cream leading-tight">{m.name}</h3>
        <p className="font-body text-sm text-wonka-cream-dark/60 mt-1">
          {m.ciudad}
          {m.rating && m.rating >= 4.2 ? ` · ${String(m.rating).replace(".", ",")}★ en Google` : ""}
        </p>
      </div>
    </motion.a>
  );
}

export default function MuestrasGallery({ initial = "todos" }: { initial?: string }) {
  const valid = rubros.some((r) => r.key === initial) ? initial : "todos";
  const [active, setActive] = useState(valid);
  const list = useMemo(
    () => (active === "todos" ? muestras : muestras.filter((m) => m.rubroKey === active)),
    [active]
  );

  function select(key: string) {
    setActive(key);
    const url = key === "todos" ? "/muestras" : `/muestras?rubro=${key}`;
    window.history.replaceState(null, "", url);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {[{ key: "todos", label: "Todos" }, ...rubros].map((r) => {
          const count = r.key === "todos" ? muestras.length : muestras.filter((m) => m.rubroKey === r.key).length;
          if (!count) return null;
          const on = active === r.key;
          return (
            <button
              key={r.key}
              onClick={() => select(r.key)}
              className={`px-4 py-2 rounded-full font-body text-sm font-medium border transition-all duration-200 cursor-pointer ${
                on
                  ? "bg-wonka-gold text-wonka-purple-dark border-wonka-gold shadow-[0_6px_20px_rgba(212,168,67,0.35)]"
                  : "bg-white/5 text-wonka-cream-dark border-white/10 hover:border-wonka-gold/50 hover:text-wonka-gold"
              }`}
            >
              {r.label} <span className={on ? "opacity-70" : "opacity-40"}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* La grilla se vuelve a montar con cada filtro: entrada suave en cascada, sin reacomodos bruscos */}
      <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((m, i) => (
          <MuestraCard key={m.slug} m={m} index={i} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-body text-wonka-cream-dark/70 mb-5">
          ¿Tenés un negocio y querés ver cómo quedaría el tuyo?
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-body font-semibold text-wonka-purple-dark bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold hover:shadow-[0_10px_40px_rgba(212,168,67,0.45)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Pedime una muestra gratis →
        </a>
      </div>
    </div>
  );
}
