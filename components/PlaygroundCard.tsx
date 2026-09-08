"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { playgrounds } from "@/app/data";

export default function PlaygroundCard({
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
