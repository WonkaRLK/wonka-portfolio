"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function AnimatedBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: ["#D4A843", "#F0D48A", "#5C2D91", "#BF00FF"],
        },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#D4A843",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.25,
              color: "#F0D48A",
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Nebula gradients */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-wonka-purple-light/20 blur-[120px] animate-[nebula1_20s_ease-in-out_infinite] top-[-10%] left-[-10%]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-wonka-purple/30 blur-[100px] animate-[nebula2_25s_ease-in-out_infinite] top-[30%] right-[-5%]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-wonka-gold/8 blur-[80px] animate-[nebula3_18s_ease-in-out_infinite] bottom-[10%] left-[20%]" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-wonka-purple-light/15 blur-[90px] animate-[nebula4_22s_ease-in-out_infinite] top-[60%] right-[30%]" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 pointer-events-auto"
        options={options}
      />
    </div>
  );
}
