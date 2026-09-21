"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { playgrounds } from "@/app/data";

const TYPE_GLYPH: Record<(typeof playgrounds)[number]["type"], string> = {
  orbit: "✿",
  draw: "✎",
  particles: "✦",
};

export default function PlaygroundCard({
  item,
}: {
  item: (typeof playgrounds)[number];
}) {
  return (
    <motion.article
      className={`play-card play-${item.type}`}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Link href={`/playground/${item.id}`} className="play-card-link">
        <div className="play-preview">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt={`${item.title} preview`} />
          ) : (
            <span className="play-preview-placeholder" aria-hidden="true">
              {TYPE_GLYPH[item.type]}
            </span>
          )}
        </div>
        <div>
          <p className="tiny-label">EXPERIMENT</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <div className="tag-row">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <span className="text-link">
          VIEW PROJECT <span aria-hidden="true">↗</span>
        </span>
      </Link>
    </motion.article>
  );
}
