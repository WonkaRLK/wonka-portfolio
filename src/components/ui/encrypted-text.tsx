"use client";

import { useEffect, useRef, useState } from "react";

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  animateOn?: "hover" | "view";
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export function EncryptedText({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 50,
  animateOn = "view",
  className = "",
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [revealed, setRevealed] = useState<boolean[]>(new Array(text.length).fill(false));
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRevealed(new Array(text.length).fill(false));

    // Scramble phase
    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char) => (char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("")
      );
    }, 50);

    // Reveal each char one by one
    text.split("").forEach((_, i) => {
      const t = setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        if (i === text.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsAnimating(false);
        }
      }, revealDelayMs * i + 300);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { startAnimation(); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={animateOn === "hover" ? startAnimation : undefined}
    >
      {(isAnimating ? displayText : text).split("").map((char, i) => (
        <span key={i} className={revealed[i] || !isAnimating ? revealedClassName : encryptedClassName}>
          {isAnimating && !revealed[i] ? displayText[i] : char}
        </span>
      ))}
    </span>
  );
}
