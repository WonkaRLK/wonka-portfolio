"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LayoutTextFlip({
  text,
  words,
  className = "",
  wordClassName = "text-wonka-gold",
}: {
  text: string;
  words: string[];
  className?: string;
  wordClassName?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.span layout className={`inline-flex items-center gap-3 ${className}`}>
      <motion.span layout className="whitespace-nowrap">
        {text}
      </motion.span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`whitespace-nowrap ${wordClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
