"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function Projects({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-wonka-gold text-glow-gold text-center mb-14">
          Proyectos
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.15}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
