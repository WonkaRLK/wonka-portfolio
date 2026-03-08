"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "¿Cuánto sale?",
    answer:
      "Depende de lo que necesites. Pero te doy un precio fijo desde el arranque, no cobro por hora ni hay sorpresas al final.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Una web simple, 1-2 semanas. Una tienda online completa, 3-4 semanas. Te doy fechas concretas, no un \"depende\".",
  },
  {
    question: "¿Qué me incluye?",
    answer:
      "Todo: diseño, desarrollo, lo subo a producción, configuro el dominio y después quedo para soporte. No te dejo colgado.",
  },
  {
    question: "¿Puedo ir viendo cómo va?",
    answer:
      "Sí. Desde el día uno tenés un link de prueba donde vas viendo los avances en tiempo real.",
  },
  {
    question: "¿Y si necesito cambios después?",
    answer:
      "Los primeros ajustes van incluidos. Después, mantenimiento mensual a un precio accesible si lo necesitás.",
  },
];

export default function FAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="py-20 px-6 max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          Preguntas
        </h2>
      </ScrollReveal>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="rounded-xl bg-wonka-chocolate border border-wonka-chocolate-light overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-heading font-bold text-wonka-cream pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-wonka-gold text-2xl shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 font-body text-sm text-wonka-cream-dark leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
