"use client";

import React, { useRef, useState, useEffect } from "react";

export const TextHoverEffect = ({
  text,
  duration = 0,
  className = "",
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const id = useRef(`th-${Math.random().toString(36).slice(2, 8)}`).current;

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 60"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none ${className}`}
    >
      <defs>
        <linearGradient id={`textGradient-${id}`} gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#F0D48A" />
              <stop offset="25%" stopColor="#D4A843" />
              <stop offset="50%" stopColor="#F0D48A" />
              <stop offset="75%" stopColor="#D4A843" />
              <stop offset="100%" stopColor="#F0D48A" />
            </>
          )}
        </linearGradient>

        <radialGradient
          id={`revealMask-${id}`}
          gradientUnits="userSpaceOnUse"
          r="30%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>
        <mask id={`textMask-${id}`}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#revealMask-${id})`} />
        </mask>
      </defs>

      {/* Base text - always visible, dim */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="#D4A843"
        strokeWidth="0.3"
        fill="transparent"
        className="font-heading font-bold"
        style={{ opacity: 0.4 }}
      >
        {text}
      </text>

      {/* Gradient text revealed on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#textGradient-${id})`}
        strokeWidth="0.3"
        fill={`url(#textGradient-${id})`}
        mask={`url(#textMask-${id})`}
        className="font-heading font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
