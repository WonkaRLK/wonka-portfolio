"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

function StepCircle({ number, delay }: { number: number; delay: number }) {
  return (
    <motion.div
      className="relative z-10 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-wonka-gold to-wonka-gold-light flex items-center justify-center text-wonka-purple-dark font-heading font-bold text-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 15,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-wonka-gold/40"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0] }}
        transition={{ delay: delay + 0.2, duration: 0.8 }}
      />
      {number}
    </motion.div>
  );
}

function DesktopTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="hidden md:block">
      <div className="relative">
        {/* Animated connecting line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-wonka-gold/10" />
        <motion.div
          className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-wonka-gold/40 via-wonka-gold to-wonka-gold/40 origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const circleDelay = 0.3 + i * 0.3;
            const textDelay = circleDelay + 0.2;

            return (
              <div key={step.number} className="relative text-center">
                {isInView && (
                  <StepCircle number={step.number} delay={circleDelay} />
                )}
                {!isInView && (
                  <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-wonka-gold to-wonka-gold-light flex items-center justify-center text-wonka-purple-dark font-heading font-bold text-lg opacity-0">
                    {step.number}
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: textDelay, duration: 0.5 }}
                >
                  <h3 className="font-heading font-bold text-lg text-wonka-gold mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-wonka-cream-dark leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Process({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          ¿Cómo trabajo?
        </h2>
      </ScrollReveal>

      <DesktopTimeline />

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.15}>
            <div className="relative flex gap-4">
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-wonka-gold to-wonka-gold/20" />
              )}
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
