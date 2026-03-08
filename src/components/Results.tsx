"use client";

import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "2+", label: "Proyectos en producción" },
  { value: "100%", label: "Clientes que repiten" },
  { value: "<24hs", label: "Te respondo" },
];

export default function Results({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          Números
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center rounded-2xl bg-wonka-chocolate/50 border border-wonka-chocolate-light/50 p-8"
            >
              <p className="font-heading font-bold text-5xl text-wonka-gold text-glow-gold">
                {metric.value}
              </p>
              <p className="font-body text-sm text-wonka-cream-dark mt-3">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
