"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Playground } from "@/app/data";

const TYPE_GLYPH: Record<Playground["type"], string> = {
  orbit: "✿",
  draw: "✎",
  particles: "✦",
};

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}

export default function PlaygroundDetail({
  item,
  index,
  total,
  prevItem,
  nextItem,
}: {
  item: Playground;
  index: number;
  total: number;
  prevItem: Playground;
  nextItem: Playground;
}) {
  const [slide, setSlide] = useState(0);
  const entries = item.entries;
  const current = entries[slide];
  const hasCarousel = entries.length > 1;

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  return (
    <main className={`playground-page type-${item.type}`}>
      <div className="playground-page-top">
        <Link href="/#playground" className="playground-back-link">
          ← BACK TO LITTLE WORLD
        </Link>
        <span className="playground-page-counter">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}{" "}
          <span className="sparkle">✦</span>
        </span>
      </div>

      <motion.p className="playground-page-kicker" {...fadeUp()}>
        EXPERIMENT · {item.year}
      </motion.p>

      <motion.div className="playground-page-header" {...fadeUp(0.05)}>
        <h1>{item.title}</h1>
        {item.category && <p className="playground-page-category">{item.category}</p>}
        <div className="playground-page-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {current.links && (current.links.live || current.links.github) && (
          <div className="playground-page-links">
            {current.links.live && <a href={current.links.live} target="_blank" rel="noopener noreferrer">VISIT LIVE ↗</a>}
            {current.links.github && <a href={current.links.github} target="_blank" rel="noopener noreferrer">VIEW CODE ↗</a>}
          </div>
        )}
      </motion.div>

      <motion.div className="playground-stage-wrap" {...fadeUp(0.1)}>
        <div className="playground-stage-frame">
          <div className="playground-stage-tape" aria-hidden="true" />

          {hasCarousel && (
            <button
              type="button"
              className="stage-arrow stage-arrow-left"
              onClick={() => setSlide((i) => (i - 1 + entries.length) % entries.length)}
              aria-label="Previous video"
            >
              ‹
            </button>
          )}

          <div className="playground-stage">
            {current.video ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video key={current.video} src={current.video} controls playsInline />
            ) : current.embed ? (
              <iframe
                key={current.embed}
                src={current.embed}
                title={`${item.title} embed`}
                loading="lazy"
                allow="fullscreen; autoplay"
              />
            ) : current.image ? (
              <button
                key={current.image}
                type="button"
                className="playground-stage-image-trigger"
                onClick={() => setLightboxImage(current.image!)}
                aria-label="View larger image"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={current.image} alt={`${item.title} preview`} />
              </button>
            ) : (
              <div className="playground-stage-placeholder">
                <span className="glyph" aria-hidden="true">{TYPE_GLYPH[item.type]}</span>
                <span>Coming Soon</span>
              </div>
            )}
          </div>

          {hasCarousel && (
            <button
              type="button"
              className="stage-arrow stage-arrow-right"
              onClick={() => setSlide((i) => (i + 1) % entries.length)}
              aria-label="Next video"
            >
              ›
            </button>
          )}
        </div>

        {hasCarousel && (
          <div className="stage-dots" role="tablist" aria-label="Select video">
            {entries.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === slide}
                aria-label={`Show video ${i + 1} of ${entries.length}`}
                className={`stage-dot ${i === slide ? "active" : ""}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        )}
      </motion.div>
      {/* <p className="playground-stage-caption">taped onto the page</p> */}

      <motion.section className="playground-about" key={`about-${slide}`} {...fadeUp()}>
        <h3>About</h3>
        <p>{current.about ?? item.description}</p>
      </motion.section>

      {current.notes && current.notes.length > 0 && (
        <>
          <div className="playground-sparkles" aria-hidden="true">✦ ✦ ✦</div>
          <motion.section className="playground-notes" key={`notes-${slide}`} {...fadeUp()}>
            <h3>Notes</h3>
            <ul>
              {current.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </motion.section>
        </>
      )}

      <nav className="playground-page-nav">
        <Link href={`/playground/${prevItem.id}`} className="playground-nav-link prev">
          <span className="playground-nav-eyebrow">← Previous</span>
          <span className="playground-nav-title">{prevItem.title}</span>
        </Link>
        <Link href={`/playground/${nextItem.id}`} className="playground-nav-link next">
          <span className="playground-nav-eyebrow">Next →</span>
          <span className="playground-nav-title">{nextItem.title}</span>
        </Link>
      </nav>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="image-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="image-lightbox-card"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="image-lightbox-close"
                onClick={() => setLightboxImage(null)}
                aria-label="Close image"
              >
                ×
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightboxImage} alt="" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
