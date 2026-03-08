"use client";

import Image from "next/image";

const chocolates = [
  { left: 25, top: 25, size: 90, rotate: -15, delay: 0, duration: 6 },
  { left: 65, top: 50, size: 80, rotate: 20, delay: 1.5, duration: 5 },
  { left: 40, top: 75, size: 100, rotate: 10, delay: 3, duration: 7 },
];

export default function FloatingChocolates() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-visible hidden md:block">
      {chocolates.map((c, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-50"
          style={{
            left: `${c.left}%`,
            top: `${c.top}vh`,
            width: c.size,
            height: c.size,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        >
          <Image
            src="/wonka-bar.png"
            alt=""
            width={c.size}
            height={c.size}
            className="w-full h-full object-contain"
            style={{ transform: `rotate(${c.rotate}deg)` }}
          />
        </div>
      ))}
    </div>
  );
}
