"use client";

import { motion } from "framer-motion";

export default function StickyNote({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`sticky-note ${accent}`}
      whileHover={{ y: -7, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      <div className="tape tape-mini" />
      <p className="tiny-label">{title}</p>
      <p>{children}</p>
    </motion.div>
  );
}
