"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Boxes } from "@/components/ui/background-boxes";

function FloatingLetter({ letter, index }: { letter: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  // Each letter gets a unique float phase
  const floatY = [-12, -18, -10, -15, -8][index % 5];
  const duration = [2.8, 3.2, 2.5, 3.6, 2.9][index % 5];
  const delay = index * 0.15;

  return (
    <motion.span
      className="inline-block text-9xl sm:text-[10rem] md:text-[13rem] text-wonka-gold cursor-default"
      style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.5)" }}
      animate={
        hovered
          ? {
              y: -80,
              x: (index - 2) * 30,
              opacity: 0,
              scale: 0.5,
              rotate: (index % 2 === 0 ? 1 : -1) * 30,
            }
          : {
              y: [0, floatY, 0],
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: 0,
            }
      }
      transition={
        hovered
          ? { duration: 0.3, ease: "easeOut" }
          : {
              y: { duration, repeat: Infinity, ease: "easeInOut", delay },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotate: { duration: 0.4 },
              x: { duration: 0.4 },
            }
      }
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => {
        setTimeout(() => setHovered(false), 100);
      }}
    >
      {letter}
    </motion.span>
  );
}

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wonka-purple-dark pt-28 sm:pt-36 pb-20">
      {/* Background boxes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Boxes />
      </div>

      {/* Fade mask */}
      <div className="absolute inset-0 bg-wonka-purple-dark [mask-image:radial-gradient(transparent,white)] pointer-events-none z-10" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,4,20,0.7) 70%, rgba(10,4,20,0.95) 100%)",
        }}
      />

      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-wonka-gold-light animate-float pointer-events-none z-20"
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

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          className="flex justify-center select-none"
          style={{ fontFamily: "var(--font-wonka-logo)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {"Wonka".split("").map((letter, i) => (
            <FloatingLetter key={i} letter={letter} index={i} />
          ))}
        </motion.h1>

        <motion.p
          className="font-script text-2xl sm:text-3xl md:text-4xl text-wonka-gold-light mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          tu idea, hecha web
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-wonka-cream-dark mt-6 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          Desarrollo sitios web y e-commerce a medida — con diseño cuidado,
          tecnología moderna y foco en resultados.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <a
            href="https://wa.me/5493442472884?text=Hola%20Wonka!%20Me%20interesa%20un%20proyecto%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-body font-semibold text-wonka-purple-dark bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold bg-[length:200%_auto] animate-shimmer hover:scale-105 transition-transform duration-300"
          >
            <LayoutTextFlip
              text="Comencemos"
              words={["ya", "ahora", "de una", "hoy", "juntos"]}
              wordClassName="text-wonka-purple font-black"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
