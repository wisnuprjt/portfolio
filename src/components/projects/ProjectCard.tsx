import { Apple, ArrowRight, ArrowUpRight, Brain, CarFront, Cpu, Layers3, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import ProjectTechStack from "@/components/projects/ProjectTechStack";

const projectIcons: Record<string, LucideIcon> = {
  colivera: Cpu,
  "ihealth-edu": Layers3,
  dopamind: Brain,
  nourish: Apple,
  racingcar: CarFront,
};

export default function ProjectCard({
  project,
  onSelect,
  isClone = false,
}: {
  project: Project;
  onSelect: (project: Project) => void;
  isClone?: boolean;
}) {
  const ProjectIcon = projectIcons[project.id] ?? Layers3;

  return (
    <button
      className="project-card"
      onClick={() => onSelect(project)}
      aria-hidden={isClone}
      tabIndex={isClone ? -1 : undefined}
    >
      <div className={`project-art${project.image ? " project-art-with-image" : ""}`}>
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name} project preview`}
            fill
            sizes="(max-width: 680px) 100vw, 50vw"
            className="project-art-image"
          />
        )}
        <div className="project-art-top"><span>{project.number} / PROJECT</span><ArrowUpRight size={18}/></div>
        {!project.image && (
          <div className={`project-art-mark mark-${project.id}`}><ProjectIcon size={52}/></div>
        )}
        <span className="project-art-name">{project.name}</span>
        <span className="project-art-caption">PROJECT OVERVIEW</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-title">
          <div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div>
          <span className="round-arrow"><ArrowUpRight size={17}/></span>
        </div>
        <p>{project.summary}</p>
        <ProjectTechStack technologies={project.technologies.slice(0, 4)} />
        <span className="text-link">Explore case study <ArrowRight size={14}/></span>
      </div>
    </button>
  );
}
