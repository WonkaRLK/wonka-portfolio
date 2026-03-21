"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function InteractiveHoverButton({
  text = "Enviar",
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group relative w-full cursor-pointer overflow-hidden rounded-lg px-6 py-3 font-heading font-bold text-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Gold background */}
      <div className="absolute inset-0 bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold animate-shimmer" />

      {/* Dark fill that slides in from left on hover */}
      <div className="absolute inset-0 translate-x-[-100%] bg-wonka-purple-dark transition-transform duration-300 group-hover:translate-x-0" />

      {/* Text - slides left on hover */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-wonka-purple-dark transition-all duration-300 group-hover:text-wonka-gold group-hover:-translate-x-2">
        {text}
      </span>

      {/* Arrow - slides in from right on hover */}
      <span className="absolute right-6 top-1/2 z-10 -translate-y-1/2 translate-x-8 text-wonka-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowRight className="w-5 h-5" />
      </span>
    </button>
  );
}
