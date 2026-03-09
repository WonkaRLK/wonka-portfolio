"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Charlamos",
    description: "Me contás tu idea, vemos qué necesitás. Sin compromiso.",
  },
  {
    number: 2,
    title: "Presupuesto",
    description: "Te paso precio cerrado y tiempos reales. Sin letra chica.",
  },
  {
    number: 3,
    title: "Lo armo",
    description: "Vas viendo avances todas las semanas en una versión de prueba.",
  },
  {
    number: 4,
    title: "Listo",
    description: "Te lo dejo funcionando en producción y quedo para lo que necesites.",
  },
];

export default function Process({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          ¿Cómo trabajo?
        </h2>
      </ScrollReveal>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <ScrollReveal>
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-wonka-gold/20 via-wonka-gold to-wonka-gold/20" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="relative text-center">
                  {/* Circle */}
                  <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-wonka-gold to-wonka-gold-light flex items-center justify-center text-wonka-purple-dark font-heading font-bold text-lg shadow-[0_0_20px_rgba(212,168,67,0.4)]">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-wonka-gold mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-wonka-cream-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className="relative flex gap-4">
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-wonka-gold to-wonka-gold/20" />
              )}
              {/* Circle */}
              <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-wonka-gold to-wonka-gold-light flex items-center justify-center text-wonka-purple-dark font-heading font-bold text-lg shadow-[0_0_20px_rgba(212,168,67,0.4)]">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-wonka-gold mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-wonka-cream-dark leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
