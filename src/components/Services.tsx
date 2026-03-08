"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Tiendas Online",
    description:
      "Tu negocio vendiendo 24/7. Pagos, stock, envíos — todo automatizado para que no tengas que estar encima.",
    icon: (
      <svg
        className="w-10 h-10 text-wonka-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Webs a Medida",
    description:
      "Landing pages, portfolios, páginas para tu negocio. Nada de templates — se hace desde cero para vos.",
    icon: (
      <svg
        className="w-10 h-10 text-wonka-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    title: "Apps Web",
    description:
      "Sistemas con login, panel de admin, base de datos. Lo que necesites para manejar tu operación.",
    icon: (
      <svg
        className="w-10 h-10 text-wonka-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
];

export default function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          Qué hago
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.15}>
            <div className="group rounded-2xl bg-wonka-chocolate border border-wonka-chocolate-light p-8 text-center hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] transition-all duration-300">
              <div className="flex justify-center mb-5">{service.icon}</div>
              <h3 className="font-heading font-bold text-xl text-wonka-gold mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-wonka-cream-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
