"use client";

import { motion } from "framer-motion";
import { experiences } from "@/app/data";
import SectionKicker from "@/components/SectionKicker";

export default function Experience() {
  return (
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
  );
}
