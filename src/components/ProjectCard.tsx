import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-wonka-chocolate border border-wonka-chocolate-light hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] transition-all duration-300"
    >
      <div className="relative aspect-video bg-wonka-purple-dark">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-wonka-gold">
          {project.name}
        </h3>
        <p className="font-body text-sm text-wonka-cream-dark mt-2 leading-relaxed">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="font-body text-sm text-wonka-cream-dark flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-wonka-gold shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-body font-medium px-3 py-1 rounded-full bg-wonka-purple-light/50 text-wonka-gold-light border border-wonka-purple-light"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-xs text-wonka-cream-dark/60 mt-4 font-body">
          {project.year}
        </p>
      </div>
    </a>
  );
}
