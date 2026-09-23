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
            <h2>I like making things that feel alive.</h2>
            <p>
              I&apos;m a Math-CS student interested in the space between
              software engineering, graphics, HCI, and creative technology.
            </p>
            <p>
              I come from a very international background — born in Japan 🇯🇵, 
              grew up in China 🇨🇳, studying in the US 🇺🇸.
            </p>
            {/* <span className="annotation">← more to come</span> */}
          </div>
          <div className="paperclip">⌇</div>
        </div>

        <div className="about-notes">
          <StickyNote title="BUILD" accent="sakura">
            full-stack web · mobile apps · engineering
          </StickyNote>
          <StickyNote title="CREATE" accent="lavender">
            graphics · interaction · creative coding
          </StickyNote>
          <StickyNote title="EXPLORE" accent="matcha">
            AI · design · HCI · new ideas
          </StickyNote>
        </div>
      </div>
    </section>
  );
}
