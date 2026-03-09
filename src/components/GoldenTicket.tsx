"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function GoldenTicket() {
  return (
    <section className="py-2 overflow-hidden">
      <ScrollReveal>
        <div className="relative mx-auto max-w-4xl px-4 flex flex-col items-center gap-6">
          {/* Imagen del boleto con animación float + glow */}
          <div className="relative animate-float drop-shadow-[0_0_30px_rgba(212,168,67,0.4)]">
            <Image
              src="/golden-ticket.png"
              alt="Golden Ticket"
              width={500}
              height={350}
              className=""
              priority
            />
          </div>

          {/* Texto debajo */}
          <div className="rounded-xl border-2 border-wonka-gold bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold bg-[length:200%_auto] animate-shimmer px-8 py-6 text-center max-w-xl">
            <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-wonka-purple-dark tracking-wide">
              ¿Tenés un proyecto en mente?
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
