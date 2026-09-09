"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
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
      <div className="project-card-inner">
        <div className="object-visual">
          <div className="object-shadow" aria-hidden="true" />

          {project.object === "book" && (
            <div className="book-object">
              <div className="book-tape book-tape-left" />
              <div className="book-cover">
                <span className="book-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="book-flower" aria-hidden="true">✿</div>
                <strong>{project.title}</strong>
                <small>PROJECT NOTEBOOK</small>
                <span className="book-stamp">MADE WITH<br />CURIOSITY</span>
              </div>
              <div className="book-pages">
                <span />
                <span />
                <span />
              </div>
              <div className="paperclip" aria-hidden="true" />
            </div>
          )}

          {project.object === "screen" && (
            <div className="screen-object">
              <div className="screen-sticker">BUILD<br />LOG</div>
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="browser-bar">
                    <i /><i /><i />
                    <span>localhost / project</span>
                  </div>
                  <div className="screen-content">
                    <div className="ui-sidebar" />
                    <div className="ui-main">
                      <b>{project.title}</b>
                      <span />
                      <span />
                      <span className="short" />
                      <div className="ui-card-row">
                        <em /><em /><em />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base">
                  <span />
                </div>
              </div>
            </div>
          )}

          {project.object === "note" && (
            <div className="note-object">
              <div className="washi washi-pink" />
              <div className="washi washi-blue" />
              <div className="idea-paper">
                <span className="idea-label">IDEA</span>
                <strong>{project.title}</strong>
                <div className="sketch-arrows" aria-hidden="true">
                  <span>↗</span><span>→</span><span>↘</span>
                </div>
                <div className="wireframe" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </div>
                <small>TRY · MAKE · REMAKE</small>
              </div>
              <div className="pencil" aria-hidden="true">
                <span />
              </div>
              <div className="tiny-star">✦</div>
            </div>
          )}

          {project.object === "photo" && (
            <div className="photo-object">
              <div className="photo-tape" />
              <div className="polaroid">
                <div className="photo-image">
                  <div className="photo-sun" />
                  <div className="photo-mountain photo-mountain-back" />
                  <div className="photo-mountain photo-mountain-front" />
                  <div className="photo-window">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="polaroid-caption">
                  <strong>{project.title}</strong>
                  <span>FIELD NOTE · {project.year}</span>
                </div>
              </div>
              <div className="photo-pin" aria-hidden="true" />
            </div>
          )}
        </div>

        <div className="project-info">
          <div className="project-meta">
            <span>{project.year}</span>
            <span>#{String(index + 1).padStart(2, "0")}</span>
          </div>

          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.description}</p>

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button className="text-link" type="button">
            VIEW PROJECT <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
