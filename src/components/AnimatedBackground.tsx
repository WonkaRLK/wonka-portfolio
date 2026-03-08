"use client";

const particles = [
  { size: 3, left: 5, duration: 18, delay: 0 },
  { size: 2, left: 15, duration: 22, delay: 3 },
  { size: 4, left: 25, duration: 16, delay: 7 },
  { size: 2, left: 35, duration: 24, delay: 1 },
  { size: 3, left: 45, duration: 20, delay: 5 },
  { size: 2, left: 55, duration: 19, delay: 9 },
  { size: 4, left: 65, duration: 17, delay: 2 },
  { size: 2, left: 75, duration: 23, delay: 6 },
  { size: 3, left: 85, duration: 21, delay: 4 },
  { size: 2, left: 95, duration: 18, delay: 8 },
  { size: 3, left: 10, duration: 25, delay: 11 },
  { size: 2, left: 30, duration: 20, delay: 13 },
  { size: 4, left: 50, duration: 15, delay: 10 },
  { size: 2, left: 70, duration: 22, delay: 14 },
  { size: 3, left: 90, duration: 19, delay: 12 },
];

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradientes nebulosa animados */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-wonka-purple-light/20 blur-[120px] animate-[nebula1_20s_ease-in-out_infinite] top-[-10%] left-[-10%]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-wonka-purple/30 blur-[100px] animate-[nebula2_25s_ease-in-out_infinite] top-[30%] right-[-5%]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-wonka-gold/8 blur-[80px] animate-[nebula3_18s_ease-in-out_infinite] bottom-[10%] left-[20%]" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-wonka-purple-light/15 blur-[90px] animate-[nebula4_22s_ease-in-out_infinite] top-[60%] right-[30%]" />

      {/* Partículas doradas que suben */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-wonka-gold/60 animate-[rise_var(--dur)_linear_infinite]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: "-5%",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
