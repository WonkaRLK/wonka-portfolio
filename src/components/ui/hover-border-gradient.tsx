"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("relative flex rounded-xl p-px", containerClassName)}
      {...props}
    >
      {/* Border layer */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl z-0 transition-all duration-300",
          hovered ? "border-rotate-hover" : "border-rotate"
        )}
      />
      {/* Inner content */}
      <div className={cn("relative z-10 w-full h-full rounded-[11px]", className)}>
        {children}
      </div>
    </Tag>
  );
}
