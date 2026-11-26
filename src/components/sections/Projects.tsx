"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDialog from "@/components/projects/ProjectDialog";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="section-wrap projects-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose." note="A selection of software, IoT, and design work. Open a project to explore its context and implementation."/>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject}/>)}
        </div>
      </section>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)}/>
    </>
  );
}
