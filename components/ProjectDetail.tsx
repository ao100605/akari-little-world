"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/app/data";

const OBJECT_GLYPH: Record<Project["object"], string> = {
  book: "✿",
  screen: "◧",
  note: "✎",
  photo: "☼",
};

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}

export default function ProjectDetail({
  project,
  index,
  total,
  prevProject,
  nextProject,
}: {
  project: Project;
  index: number;
  total: number;
  prevProject: Project;
  nextProject: Project;
}) {
  const [slide, setSlide] = useState(0);
  const gallery = project.gallery ?? [];
  const current = gallery[slide];
  const hasCarousel = gallery.length > 1;

  return (
    <main className={`project-page ${project.accent}`}>
      <div className="project-page-top">
        <Link href="/#projects" className="project-back-link">
          ← BACK TO LITTLE WORLD
        </Link>
        <span className="project-page-counter">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}{" "}
          <span className="sparkle">✦</span>
        </span>
      </div>

      <motion.p className="project-page-kicker" {...fadeUp()}>
        PROJECT NOTE · {project.year}
      </motion.p>

      <motion.div className="project-page-header" {...fadeUp(0.05)}>
        <h1>{project.title}</h1>
        <p className="project-page-subtitle">{project.subtitle}</p>
        {project.category && <p className="project-page-category">{project.category}</p>}
        <div className="project-page-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.links && (project.links.live || project.links.github) && (
          <div className="project-page-links">
            {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">VISIT LIVE ↗</a>}
            {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer">VIEW CODE ↗</a>}
          </div>
        )}
      </motion.div>

      <motion.div className="project-hero-wrap" {...fadeUp(0.1)}>
        <div className="project-hero-frame">
          <div className="project-hero-tape" aria-hidden="true" />

          {hasCarousel && (
            <button
              type="button"
              className="stage-arrow stage-arrow-left"
              onClick={() => setSlide((i) => (i - 1 + gallery.length) % gallery.length)}
              aria-label="Previous media"
            >
              ‹
            </button>
          )}

          <div className="project-hero-image">
            {current?.video ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video key={current.video} src={current.video} controls playsInline />
            ) : current?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={current.image} src={current.image} alt={`${project.title} screenshot`} />
            ) : (
              <div className="project-hero-placeholder">
                <span className="glyph">{OBJECT_GLYPH[project.object]}</span>
                <span>Hero Screenshot</span>
              </div>
            )}
          </div>

          {hasCarousel && (
            <button
              type="button"
              className="stage-arrow stage-arrow-right"
              onClick={() => setSlide((i) => (i + 1) % gallery.length)}
              aria-label="Next media"
            >
              ›
            </button>
          )}
        </div>

        {hasCarousel && (
          <div className="stage-dots" role="tablist" aria-label="Select media">
            {gallery.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === slide}
                aria-label={`Show media ${i + 1} of ${gallery.length}`}
                className={`stage-dot ${i === slide ? "active" : ""}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        )}
      </motion.div>
      {/* <p className="project-hero-caption">taped onto the page</p> */}

      <motion.div className="project-detail-grid" {...fadeUp()}>
        <div>
          <h3>About</h3>
          <p>{project.description}</p>
        </div>
        <div>
          <h3>My Role</h3>
          {project.role && project.role.length > 0 ? (
            <ul className="project-role-list">
              {project.role.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Design + Development</p>
          )}
        </div>
      </motion.div>

      <hr className="project-divider" />

      {project.process && project.process.length > 0 && (
        <section className="project-process">
          <motion.h3 {...fadeUp()}>The Process</motion.h3>
          <div className="project-process-steps">
            {project.process.map((step, i) => (
              <motion.div className="process-step" key={step.title} {...fadeUp(i * 0.08)}>
                <span className="process-step-index">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="process-step-title">{step.title}</h4>
                <div className="process-step-visual">
                  {step.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={step.image} alt={step.title} />
                  ) : (
                    <span aria-hidden="true">✦</span>
                  )}
                </div>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <div className="project-sparkles" aria-hidden="true">✦ ✦ ✦</div>

      {project.lessons && project.lessons.length > 0 && (
        <motion.section className="project-lessons" {...fadeUp()}>
          <h3>What I Learned</h3>
          <ul>
            {project.lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </motion.section>
      )}

      <nav className="project-page-nav">
        <Link href={`/projects/${prevProject.id}`} className="project-nav-link prev">
          <span className="project-nav-eyebrow">← Previous</span>
          <span className="project-nav-title">{prevProject.title}</span>
        </Link>
        <Link href={`/projects/${nextProject.id}`} className="project-nav-link next">
          <span className="project-nav-eyebrow">Next →</span>
          <span className="project-nav-title">{nextProject.title}</span>
        </Link>
      </nav>
    </main>
  );
}
