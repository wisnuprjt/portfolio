"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import type { Project } from "@/data/projects";

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <div className="dialog-top">
          <span className="eyebrow">Project case study · {project.number}</span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="dialog-content">
          <div className={`dialog-hero${project.image ? "" : " dialog-hero-no-image"}`}>
            {project.image && (
              <div className="dialog-cover">
                <Image
                  src={project.image}
                  alt={`${project.name} project cover`}
                  fill
                  sizes="(max-width: 720px) calc(100vw - 80px), 650px"
                />
              </div>
            )}

            <div className="dialog-intro">
              <p className="project-category">{project.category}</p>
              <h2 id="dialog-title">{project.name}</h2>
              <p className="dialog-summary">{project.summary}</p>

              <div className="dialog-meta">
                <div>
                  <span>Period</span>
                  <strong>{project.period}</strong>
                </div>
                <div>
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
              </div>
            </div>

            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="dialog-gallery">
                {project.galleryImages.map((image, index) => (
                  <div className="dialog-gallery-item" key={`${image}-${index}`}>
                    <Image
                      src={image}
                      alt={`${project.name} gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 680px) 20vw, 130px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dialog-section">
            <h3 className="eyebrow">Context</h3>
            <p>{project.problem}</p>
          </div>

          <div className="dialog-section">
            <h3 className="eyebrow">Approach & implementation</h3>
            <ul>
              {project.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dialog-section">
            <h3 className="eyebrow">Outcome</h3>
            <p>{project.outcome}</p>
          </div>

          <ProjectTechStack technologies={project.technologies} />

          {project.links.length > 0 && (
            <div className="project-links" aria-label={`${project.name} project links`}>
              {project.links.map((link) => (
                <a
                  className="button button-quiet project-link-button"
                  href={link.url}
                  key={`${link.label}-${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}

          <p className="placeholder-note">
            Some project links are temporary placeholders and will be replaced
            with the final URLs before publishing.
          </p>
        </div>
      </article>
    </div>
  );
}
