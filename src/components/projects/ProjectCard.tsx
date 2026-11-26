import { Apple, ArrowRight, ArrowUpRight, Brain, CarFront, Cpu, Layers3, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const projectIcons: Record<string, LucideIcon> = {
  colivera: Cpu,
  "ihealth-edu": Layers3,
  dopamind: Brain,
  nourish: Apple,
  racingcar: CarFront,
};

export default function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  const ProjectIcon = projectIcons[project.id] ?? Layers3;

  return (
    <button className="project-card" onClick={() => onSelect(project)}>
      <div className="project-art">
        <div className="project-art-top"><span>{project.number} / PROJECT</span><ArrowUpRight size={18}/></div>
        <div className={`project-art-mark mark-${project.id}`}><ProjectIcon size={52}/></div>
        <span className="project-art-name">{project.name}</span>
        <span className="project-art-caption">PROJECT OVERVIEW</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-title">
          <div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div>
          <span className="round-arrow"><ArrowUpRight size={17}/></span>
        </div>
        <p>{project.summary}</p>
        <div className="tag-list">{project.technologies.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <span className="text-link">Explore case study <ArrowRight size={14}/></span>
      </div>
    </button>
  );
}
