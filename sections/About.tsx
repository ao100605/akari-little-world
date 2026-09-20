import SectionKicker from "@/components/SectionKicker";
import StickyNote from "@/components/StickyNote";

export default function About() {
  return (
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
              ...
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
  );
}
