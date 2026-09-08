"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      className={`project-card ${project.accent} object-${project.object}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.07 }}
      whileHover={{ y: -10, rotate: index % 2 ? 1 : -1 }}
    >
      <div className="object-visual">
        {project.object === "book" && (
          <div className="book-object"><span>01</span><strong>{project.title}</strong><small>PROJECT NOTEBOOK</small></div>
        )}
        {project.object === "screen" && (
          <div className="screen-object"><div className="screen-bar" /><div className="screen-lines" /></div>
        )}
        {project.object === "note" && (
          <div className="note-object"><span>IDEA</span><strong>{project.title}</strong><small>✦ ✦ ✦</small></div>
        )}
        {project.object === "photo" && (
          <div className="photo-object"><div className="photo-placeholder">PROJECT<br />PHOTO</div></div>
        )}
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.year}</span><span>#{String(index + 1).padStart(2, "0")}</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <button className="text-link">VIEW PROJECT →</button>
      </div>
    </motion.article>
  );
}
