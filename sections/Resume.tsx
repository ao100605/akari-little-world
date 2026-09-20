"use client";

import SectionKicker from "@/components/SectionKicker";

export default function Resume() {
  return (
    <section className="section resume-section" id="resume">
      <SectionKicker number="04" japanese="履歴書">RESUME</SectionKicker>
      <div className="resume-wrap">
        <div className="envelope">
          <div className="envelope-flap" />
          <div className="resume-paper">
            <p className="tiny-label">A LETTER FROM</p>
            <h2>AKARI OH</h2>
            <p>Education / Skills / Experience / Projects / Leadership / Clubs</p>
            <div className="resume-rule" />
            <p className="handwritten">~ get to know me better ~</p>
          </div>
        </div>
        <div className="resume-actions">
          <p className="handwritten">a slightly more serious page</p>
          <h2>Everything useful,<br />in one place.</h2>
          <div className="button-row">
            <a className="button primary" href="/resume/Akari_Oh_resume.pdf" target="_blank" rel="noopener noreferrer">
              OPEN RESUME ↗
            </a>
            <a className="button" href="/resume/Akari_Oh_resume.pdf" download="Akari_Oh_Resume.pdf">
              DOWNLOAD PDF ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
