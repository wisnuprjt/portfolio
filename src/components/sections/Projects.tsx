"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDialog from "@/components/projects/ProjectDialog";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="section-wrap projects-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose." note="A selection of software, IoT, and design work. Open a project to explore its context and implementation."/>
        <div className="project-featured-grid">
          {featured.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject}/>)}
        </div>
        <div className="project-list">
          {projects.filter((project) => !project.featured).map((project) => (
            <button className="project-row" key={project.id} onClick={() => setSelectedProject(project)}>
              <span className="project-row-number">{project.number}</span>
              <span className="project-row-main"><strong>{project.name}</strong><small>{project.category}</small></span>
              <span className="project-row-period">{project.period}</span>
              <ArrowUpRight size={18}/>
            </button>
          ))}
        </div>
      </section>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)}/>
    </>
  );
}
