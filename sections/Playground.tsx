import { playgrounds } from "@/app/data";
import SectionKicker from "@/components/SectionKicker";
import PlaygroundCard from "@/components/PlaygroundCard";

export default function Playground() {
  return (
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
  );
}
