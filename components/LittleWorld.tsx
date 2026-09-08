"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experiences, playgrounds, projects } from "@/app/data";

const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["playground", "Playground"],
  ["experience", "Journey"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function LittleWorld() {
  const { scrollYProgress } = useScroll();
  const planeProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <TopNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <JourneyPlane progress={planeProgress} />

      <section className="hero section" id="top">
        <div className="cloud cloud-a">☁</div>
        <div className="cloud cloud-b">☁</div>
        <div className="sparkle sparkle-a">✦</div>
        <div className="sparkle sparkle-b">✦</div>

        <div className="hero-copy">
          <p className="handwritten">hello, little traveler!</p>
          <h1>AKARI</h1>
          <p className="hero-subtitle">
            software <span>×</span> creativity <span>×</span> interaction
          </p>
          <p className="hero-description">
            A little collection of things I&apos;ve built, learned, and loved.
          </p>
        </div>

        <div className="hero-paper">
          <div className="tape tape-top" />
          <p className="tiny-label">WELCOME TO</p>
          <h2>AKARI&apos;S<br />LITTLE WORLD</h2>
          <div className="paper-line" />
          <p>Math-CS · HCI · Graphics · Creative Technology</p>
          <span className="paper-stamp">✦ Hi ✦</span>
          <span className="paper-stamp">✦ こんにちは ✦</span>
          <span className="paper-stamp">✦ 你好 ✦</span>
        </div>

        <div className="scroll-hint">
          <span>follow the plane</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <SectionKicker number="01" japanese="私について">ABOUT ME</SectionKicker>
        <div className="about-layout">
          <div className="notebook-page rotate-left">
            <div className="notebook-lines">
              <p className="handwritten">Dear visitor,</p>
              <h2>I like making<br />things that feel alive.</h2>
              <p>
                I&apos;m a Math-CS student interested in the space between
                software engineering, graphics, HCI, and creative technology.
              </p>
              <p>
                This page is a placeholder for the real story you want to tell.
              </p>
              <span className="annotation">← write your own story here</span>
            </div>
            <div className="paperclip">⌇</div>
          </div>

          <div className="about-notes">
            <StickyNote title="BUILD" accent="sakura">
              Web apps · full-stack · engineering
            </StickyNote>
            <StickyNote title="CREATE" accent="lavender">
              Graphics · interaction · creative coding
            </StickyNote>
            <StickyNote title="EXPLORE" accent="matcha">
              HCI · design · new ideas
            </StickyNote>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionKicker number="02" japanese="プロジェクト">PROJECTS</SectionKicker>
        <div className="section-intro">
          <h2>Things I&apos;ve made along the way.</h2>
          <p>These are placeholders for now — the data lives in one simple file, so expanding this section is easy.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="section playground-section" id="playground">
        <SectionKicker number="03" japanese="遊び場">PLAYGROUND</SectionKicker>
        <div className="section-intro">
          <h2>Some things don&apos;t need a reason.</h2>
          <p>Interactive experiments live here. Add a new item to the data file when you want another playground.</p>
        </div>
        <div className="playground-grid">
          {playgrounds.map((item) => (
            <PlaygroundCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionKicker number="04" japanese="これまで">JOURNEY</SectionKicker>
        <div className="section-intro">
          <h2>Little milestones.</h2>
          <p>A timeline that can grow with you.</p>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <div className={`timeline-dot ${item.accent}`} />
              <div className="timeline-date">{item.date}</div>
              <div className="postcard">
                <span className="postcard-stamp">✦</span>
                <p className="tiny-label">{item.organization}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section resume-section" id="resume">
        <SectionKicker number="05" japanese="履歴書">RESUME</SectionKicker>
        <div className="resume-wrap">
          <div className="envelope">
            <div className="envelope-flap" />
            <div className="resume-paper">
              <p className="tiny-label">A LETTER FROM</p>
              <h2>AKARI OH</h2>
              <p>Resume / Experience / Projects</p>
              <div className="resume-rule" />
              <p className="handwritten">open me →</p>
            </div>
          </div>
          <div className="resume-actions">
            <p className="handwritten">a slightly more serious page</p>
            <h2>Everything useful,<br />in one place.</h2>
            <p>
              Keep this section clean and recruiter-friendly. Replace the
              placeholder button with your actual PDF or resume route.
            </p>
            <div className="button-row">
              <a className="button primary" href="#" onClick={(e) => e.preventDefault()}>
                OPEN RESUME ↗
              </a>
              <a className="button" href="#" onClick={(e) => e.preventDefault()}>
                DOWNLOAD PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <SectionKicker number="06" japanese="お問い合わせ">CONTACT</SectionKicker>
        <div className="contact-postcard">
          <div className="contact-copy">
            <p className="handwritten">Dear future teammate,</p>
            <h2>Let&apos;s make<br />something lovely.</h2>
            <p>
              Whether it&apos;s a job, collaboration, project, or just a hello,
              I&apos;d love to hear from you.
            </p>
            <div className="contact-links">
              <a href="#">GitHub ↗</a>
              <a href="#">LinkedIn ↗</a>
              <a href="#">Email ↗</a>
            </div>
          </div>
          <div className="postcard-art">
            <div className="sun">✦</div>
            <div className="mountain mountain-one" />
            <div className="mountain mountain-two" />
            <div className="landing-plane">✈</div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-plane">✈</div>
        <p className="handwritten">thanks for visiting ♡</p>
        <p>built with curiosity + code</p>
        <small>© 2026 Akari Oh</small>
      </footer>
    </main>
  );
}

function TopNav({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className={`top-nav ${menuOpen ? "open" : ""}`}>
      <a className="brand" href="#top">✦ AKARI OH</a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        ☰
      </button>
      <nav>
        {navItems.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

// Right-side rail the plane travels down as the page scrolls.
const RAIL_X_MIN = 78; // vw
const RAIL_X_MAX = 95; // vw
const RAIL_Y_MIN = 7; // vh
const RAIL_Y_MAX = 94; // vh

// Two loop-the-loops along the way, each a full 360° circle blended
// into the descending path with an eased envelope so both position
// AND heading stay continuous — no sharp kinks entering or exiting.
const LOOPS = [
  { center: 0.33, halfWidth: 0.065, radiusX: 3.6, radiusY: 5.2 },
  { center: 0.68, halfWidth: 0.065, radiusX: 3.6, radiusY: 5.2 },
];

function railPoint(t: number) {
  const clamped = Math.min(1, Math.max(0, t));
  const sway = Math.sin((clamped + 0.12) * Math.PI * 1.35);
  const xFrac = 0.5 + sway * 0.46;

  let xVw = RAIL_X_MIN + xFrac * (RAIL_X_MAX - RAIL_X_MIN);
  let yVh = RAIL_Y_MIN + clamped * (RAIL_Y_MAX - RAIL_Y_MIN);

  for (const loop of LOOPS) {
    const start = loop.center - loop.halfWidth;
    const end = loop.center + loop.halfWidth;
    if (clamped > start && clamped < end) {
      const u = (clamped - start) / (end - start);
      const angle = u * Math.PI * 2;
      // sin²(πu) eases the loop's amplitude in and out, so its
      // contribution (and slope) is zero at both edges of the window.
      const envelope = Math.sin(u * Math.PI) ** 2;
      xVw += loop.radiusX * Math.sin(angle) * envelope;
      yVh += loop.radiusY * (1 - Math.cos(angle)) * envelope;
    }
  }

  return { xVw, yVh };
}

function railPathState(t: number) {
  const eps = 0.0015;
  const before = railPoint(Math.max(0, t - eps));
  const after = railPoint(Math.min(1, t + eps));
  const here = railPoint(t);
  const angleDeg =
    (Math.atan2(after.yVh - before.yVh, after.xVw - before.xVw) * 180) / Math.PI;
  return { xVw: here.xVw, yVh: here.yVh, angleDeg };
}

const GUIDE_PATH_D = (() => {
  const steps = 220;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const { xVw, yVh } = railPoint(i / steps);
    d += `${i === 0 ? "M" : "L"}${xVw.toFixed(2)},${yVh.toFixed(2)} `;
  }
  return d.trim();
})();

function JourneyPlane({ progress }: { progress: any }) {
  const state = useTransform(progress, railPathState);
  const left = useTransform(state, (s) => `${s.xVw}vw`);
  const top = useTransform(state, (s) => `${s.yVh}vh`);
  const rotate = useTransform(state, (s) => s.angleDeg);

  return (
    <div className="journey-rail" aria-hidden="true">
      <svg className="journey-guide" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={GUIDE_PATH_D} />
      </svg>
      <motion.div className="paper-plane" style={{ top, left, rotate }}>
        <span>✈</span>
      </motion.div>
    </div>
  );
}

function SectionKicker({
  number,
  japanese,
  children,
}: {
  number: string;
  japanese: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-kicker">
      <span>{number}</span>
      <div>
        <p>{children}</p>
        <small>{japanese}</small>
      </div>
    </div>
  );
}

function StickyNote({
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

function ProjectCard({
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

function PlaygroundCard({
  item,
}: {
  item: (typeof playgrounds)[number];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const points = Array.from({ length: 42 }, (_, i) => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: 1 + Math.random() * 2.5,
      a: Math.random() * Math.PI * 2,
    }));

    let mouse = { x: canvas.clientWidth / 2, y: canvas.clientHeight / 2 };

    const move = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", move);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      points.forEach((p, i) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.max(40, Math.hypot(dx, dy));
        const force = Math.min(24, 900 / dist);
        p.x += (dx / dist) * force * 0.002;
        p.y += (dy / dist) * force * 0.002;
        const pulse = 1 + Math.sin(t / 700 + i) * 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(70,68,75,0.38)";
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.article
      className={`play-card play-${item.type}`}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="play-canvas-wrap">
        <canvas ref={canvasRef} />
        <span className="play-symbol">✦</span>
      </div>
      <div>
        <p className="tiny-label">EXPERIMENT</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </motion.article>
  );
}