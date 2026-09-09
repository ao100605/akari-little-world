"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Playground } from "@/app/data";

const TYPE_GLYPH: Record<Playground["type"], string> = {
  particles: "✦",
  orbit: "◐",
  draw: "✎",
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
        {item.links && (item.links.live || item.links.github) && (
          <div className="playground-page-links">
            {item.links.live && <a href={item.links.live}>VISIT LIVE ↗</a>}
            {item.links.github && <a href={item.links.github}>VIEW CODE ↗</a>}
          </div>
        )}
      </motion.div>

      <motion.div className="playground-stage-wrap" {...fadeUp(0.1)}>
        <div className="playground-stage-frame">
          <div className="playground-stage-tape" aria-hidden="true" />
          <div className="playground-stage">
            {item.video ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={item.video} controls playsInline />
            ) : (
              <div className="playground-stage-placeholder">
                <span className="glyph" aria-hidden="true">{TYPE_GLYPH[item.type]}</span>
                <span>Video Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <p className="playground-stage-caption">taped onto the page</p>

      <motion.section className="playground-about" {...fadeUp()}>
        <h3>About</h3>
        <p>{item.about ?? item.description}</p>
      </motion.section>

      {item.notes && item.notes.length > 0 && (
        <>
          <div className="playground-sparkles" aria-hidden="true">✦ ✦ ✦</div>
          <motion.section className="playground-notes" {...fadeUp()}>
            <h3>Notes</h3>
            <ul>
              {item.notes.map((note) => (
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
    </main>
  );
}
