"use client";

import { motion } from "framer-motion";

const sparkles = [
  { id: 0, size: 7, left: 12, top: 8, delay: 0, duration: 4 },
  { id: 1, size: 5, left: 85, top: 15, delay: 1.2, duration: 5 },
  { id: 2, size: 9, left: 45, top: 5, delay: 2.5, duration: 3.5 },
  { id: 3, size: 4, left: 72, top: 70, delay: 0.8, duration: 4.5 },
  { id: 4, size: 6, left: 20, top: 60, delay: 3.1, duration: 5.5 },
  { id: 5, size: 8, left: 90, top: 45, delay: 1.7, duration: 3.8 },
  { id: 6, size: 5, left: 35, top: 85, delay: 0.4, duration: 4.2 },
  { id: 7, size: 7, left: 60, top: 30, delay: 2.9, duration: 5.2 },
  { id: 8, size: 4, left: 8, top: 40, delay: 3.6, duration: 3.3 },
  { id: 9, size: 6, left: 52, top: 90, delay: 1.5, duration: 4.8 },
  { id: 10, size: 9, left: 78, top: 20, delay: 0.6, duration: 5.8 },
  { id: 11, size: 5, left: 30, top: 50, delay: 2.2, duration: 3.6 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent pt-28 sm:pt-36 pb-20">
      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-wonka-gold-light animate-float pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.5,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          className="text-9xl sm:text-[10rem] md:text-[13rem] text-wonka-gold text-glow-gold select-none"
          style={{ fontFamily: "var(--font-wonka-logo)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Wonka
        </motion.h1>

        <motion.p
          className="font-script text-2xl sm:text-3xl md:text-4xl text-wonka-gold-light mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          tu idea, hecha web
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-wonka-cream-dark mt-6 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Hago webs y tiendas online que funcionan. Vos me contás qué necesitás,
          yo me encargo de que quede bien y ande de 10.
        </motion.p>

        <motion.a
          href="https://wa.me/5493442472884?text=Hola%20Wonka!%20Me%20interesa%20un%20proyecto%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-8 py-4 rounded-full font-body font-semibold text-wonka-purple-dark bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold bg-[length:200%_auto] animate-shimmer hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Charlemos
        </motion.a>
      </div>
    </section>
  );
}
