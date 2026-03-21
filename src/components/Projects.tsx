"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { projects, type Project } from "@/lib/projects";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import ScrollReveal from "./ScrollReveal";

function CyclingImage({ project }: { project: Project }) {
  const images = project.images && project.images.length > 1 ? project.images : null;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!images) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  const src = images ? images[index] : project.image;

  return (
    <Image
      src={src}
      alt={project.name}
      fill
      className={`object-cover object-top transition-all duration-400 group-hover:scale-105 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDuration: "400ms" }}
      sizes="100vw"
    />
  );
}

export default function Projects({ id }: { id?: string }) {
  return (
    <section id={id} className="px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2
          className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-center mb-4 pt-20"
          style={{ textShadow: "0 0 30px rgba(212,168,67,0.5)" }}
        >
          Proyectos
        </h2>
        <p className="font-body text-wonka-cream-dark/70 text-center text-base sm:text-lg">
          Algunos trabajos que hice
        </p>
      </ScrollReveal>

      {projects.map((project) => (
        <ContainerScroll
          key={project.slug}
          titleComponent={
            <div className="mb-2">
              <span className="font-body text-xs uppercase tracking-widest text-wonka-gold/60">
                {project.tech.join(" · ")}
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-wonka-gold mt-1">
                {project.name}
              </h3>
              <p className="font-body text-sm text-wonka-cream-dark/70 mt-2 max-w-lg mx-auto">
                {project.description}
              </p>
            </div>
          }
        >
          {/* Card content */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full overflow-hidden"
          >
            <CyclingImage project={project} />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-wonka-purple-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center justify-center gap-2 font-body text-wonka-cream text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-wonka-gold shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="inline-block px-6 py-3 rounded-full font-body font-semibold text-wonka-purple-dark bg-gradient-to-r from-wonka-gold via-wonka-gold-light to-wonka-gold">
                  Ver proyecto →
                </span>
              </div>
            </div>

            {/* Year badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-wonka-chocolate/80 backdrop-blur-sm border border-wonka-gold/30">
              <span className="font-body text-xs text-wonka-gold">{project.year}</span>
            </div>
          </a>
        </ContainerScroll>
      ))}
    </section>
  );
}
