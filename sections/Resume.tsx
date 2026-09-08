"use client";

import SectionKicker from "@/components/SectionKicker";

export default function Resume() {
  return (
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
  );
}
