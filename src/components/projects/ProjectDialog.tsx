"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <article className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <div className="dialog-top">
          <span className="eyebrow">Project case study · {project.number}</span>
          <button className="icon-button" onClick={onClose} aria-label="Close project details"><X size={18}/></button>
        </div>
        <div className="dialog-content">
          <p className="project-category">{project.category}</p>
          <h2 id="dialog-title">{project.name}</h2>
          <p className="dialog-summary">{project.summary}</p>
          <div className="dialog-meta">
            <div><span>Period</span><strong>{project.period}</strong></div>
            <div><span>Role</span><strong>{project.role}</strong></div>
          </div>
          <div className="dialog-section"><h3>Context</h3><p>{project.problem}</p></div>
          <div className="dialog-section">
            <h3>Approach & implementation</h3>
            <ul>{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="dialog-section"><h3>Outcome</h3><p>{project.outcome}</p></div>
          <div className="tag-list">{project.technologies.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <p className="placeholder-note">Project links are sample placeholders. Replace them with verified URLs before publishing.</p>
        </div>
      </article>
    </div>
  );
}
