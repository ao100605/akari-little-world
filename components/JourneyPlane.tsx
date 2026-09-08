"use client";

import { motion, useTransform } from "framer-motion";

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

export default function JourneyPlane({ progress }: { progress: any }) {
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
