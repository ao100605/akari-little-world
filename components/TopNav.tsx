"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["playground", "Playground"],
  // ["experience", "Journey"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function TopNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["top", ...navItems.map(([id]) => id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id === "top" ? null : entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`top-nav ${menuOpen ? "open" : ""}`}>
      <a className="brand" href="#top">✦ AKARI OH</a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </button>
      <nav>
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={id === activeId ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
