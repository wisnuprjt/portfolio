"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectDialog from "@/components/projects/ProjectDialog";
import { projects, type Project } from "@/data/projects";

const carouselProjects = [-1, 0, 1].flatMap((copy) =>
  projects.map((project) => ({ project, copy })),
);

function getProjectSetWidth(track: HTMLDivElement) {
  const firstProject = track.children[0] as HTMLElement | undefined;
  const nextSetStart = track.children[projects.length] as HTMLElement | undefined;

  if (!firstProject || !nextSetStart) return 0;
  return nextSetStart.getBoundingClientRect().left - firstProject.getBoundingClientRect().left;
}

function getProjectStep(track: HTMLDivElement) {
  const firstProject = track.children[0] as HTMLElement | undefined;
  const secondProject = track.children[1] as HTMLElement | undefined;

  if (!firstProject || !secondProject) return 0;
  return secondProject.getBoundingClientRect().left - firstProject.getBoundingClientRect().left;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    lastX: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);
  const suppressClickTimerRef = useRef<number | null>(null);
  const isPaused = isHovered || isFocused || isPointerDown;
  const selectedProjectIndex = selectedProject
    ? projects.findIndex((project) => project.id === selectedProject.id)
    : -1;

  const navigateProject = (direction: -1 | 1) => {
    const nextProject = projects[selectedProjectIndex + direction];
    if (nextProject) setSelectedProject(nextProject);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const centerCarousel = () => {
      const setWidth = getProjectSetWidth(track);
      if (!setWidth) return;

      track.classList.add("is-recentering");
      track.scrollLeft = setWidth;
      window.requestAnimationFrame(() => track.classList.remove("is-recentering"));
    };

    centerCarousel();
    window.addEventListener("resize", centerCarousel);

    return () => {
      window.removeEventListener("resize", centerCarousel);
      if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
      if (suppressClickTimerRef.current !== null) window.clearTimeout(suppressClickTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const step = getProjectStep(track);
      if (step) track.scrollBy({ left: step, behavior: "smooth" });
    }, 1500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handleScroll = (track: HTMLDivElement) => {
    if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);

    scrollEndTimerRef.current = window.setTimeout(() => {
      const setWidth = getProjectSetWidth(track);
      if (!setWidth) return;

      const offset = track.scrollLeft < setWidth * 0.5
        ? setWidth
        : track.scrollLeft > setWidth * 1.5
          ? -setWidth
          : 0;

      if (!offset) return;
      track.classList.add("is-recentering");
      track.scrollLeft += offset;
      window.requestAnimationFrame(() => track.classList.remove("is-recentering"));
    }, 120);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    };
    setIsPointerDown(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (!drag.moved && Math.abs(event.clientX - drag.startX) > 5) {
      drag.moved = true;
      if (event.pointerType === "mouse") event.currentTarget.setPointerCapture(event.pointerId);
    }

    if (drag.moved && event.pointerType === "mouse") {
      event.currentTarget.scrollLeft -= event.clientX - drag.lastX;
      event.currentTarget.classList.add("is-dragging");
      event.preventDefault();
    }
    drag.lastX = event.clientX;
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    dragRef.current = null;
    setIsPointerDown(false);
    event.currentTarget.classList.remove("is-dragging");

    if (drag.moved) {
      suppressClickRef.current = true;
      suppressClickTimerRef.current = window.setTimeout(() => {
        suppressClickRef.current = false;
        suppressClickTimerRef.current = null;
      }, 0);
    }
  };

  return (
    <>
      <section className="section-wrap projects-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose." note="A selection of software, IoT, and design work. Open a project to explore its context and implementation."/>
        <div
          ref={trackRef}
          className="project-grid"
          role="region"
          aria-label="Project carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onScroll={(event) => handleScroll(event.currentTarget)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onClickCapture={(event) => {
            if (!suppressClickRef.current) return;
            event.preventDefault();
            event.stopPropagation();
            suppressClickRef.current = false;
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => {
            if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
              setIsFocused(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const step = getProjectStep(event.currentTarget);
            if (step) event.currentTarget.scrollBy({ left: event.key === "ArrowRight" ? step : -step, behavior: "smooth" });
          }}
        >
          {carouselProjects.map(({ project, copy }) => (
            <ProjectCard
              key={`${copy}-${project.id}`}
              project={project}
              onSelect={setSelectedProject}
              isClone={copy !== 0}
            />
          ))}
        </div>
      </section>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={navigateProject}
        hasPrevious={selectedProjectIndex > 0}
        hasNext={selectedProjectIndex >= 0 && selectedProjectIndex < projects.length - 1}
      />
    </>
  );
}
