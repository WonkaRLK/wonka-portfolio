"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amplitude: 60, frequency: 0.008, speed: 0.015, yOffset: 0.3, color1: "rgba(92, 45, 145, 0.25)", color2: "rgba(92, 45, 145, 0)" },
      { amplitude: 80, frequency: 0.006, speed: 0.012, yOffset: 0.45, color1: "rgba(191, 0, 255, 0.15)", color2: "rgba(191, 0, 255, 0)" },
      { amplitude: 50, frequency: 0.01, speed: 0.02, yOffset: 0.55, color1: "rgba(212, 168, 67, 0.12)", color2: "rgba(212, 168, 67, 0)" },
      { amplitude: 70, frequency: 0.007, speed: 0.018, yOffset: 0.65, color1: "rgba(59, 18, 97, 0.2)", color2: "rgba(59, 18, 97, 0)" },
      { amplitude: 40, frequency: 0.012, speed: 0.025, yOffset: 0.75, color1: "rgba(240, 212, 138, 0.08)", color2: "rgba(240, 212, 138, 0)" },
    ];

    // Aurora shimmer spots
    const auroras = [
      { x: 0.2, y: 0.25, rx: 300, ry: 120, color: "rgba(92, 45, 145, 0.15)", speed: 0.003, phaseX: 0, phaseY: 0.5 },
      { x: 0.7, y: 0.35, rx: 250, ry: 100, color: "rgba(212, 168, 67, 0.08)", speed: 0.004, phaseX: 1, phaseY: 0 },
      { x: 0.5, y: 0.6, rx: 350, ry: 140, color: "rgba(191, 0, 255, 0.1)", speed: 0.002, phaseX: 2, phaseY: 1.5 },
      { x: 0.3, y: 0.8, rx: 280, ry: 110, color: "rgba(240, 212, 138, 0.06)", speed: 0.005, phaseX: 0.5, phaseY: 2 },
    ];

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Draw aurora glow spots
      for (const a of auroras) {
        const cx = (a.x + Math.sin(time * a.speed + a.phaseX) * 0.08) * width;
        const cy = (a.y + Math.cos(time * a.speed + a.phaseY) * 0.05) * height;
        const scale = 1 + Math.sin(time * a.speed * 1.5) * 0.2;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, a.rx * scale);
        gradient.addColorStop(0, a.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(cx, cy, a.rx * scale, a.ry * scale, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw flowing waves
      for (const wave of waves) {
        ctx.beginPath();

        const baseY = height * wave.yOffset;

        for (let x = 0; x <= width; x += 2) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * wave.amplitude * 0.5 +
            Math.cos(x * wave.frequency * 0.3 + time * wave.speed * 0.7) * wave.amplitude * 0.3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, baseY + wave.amplitude + 200);
        gradient.addColorStop(0, wave.color1);
        gradient.addColorStop(1, wave.color2);

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
