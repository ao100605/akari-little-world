import { projects } from "@/app/data";
import SectionKicker from "@/components/SectionKicker";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionKicker number="02" japanese="プロジェクト">PROJECTS</SectionKicker>
      <div className="section-intro">
        <h2>Things I&apos;ve made along the way.</h2>
        <p>Fun projects live here. Click into them to see more details!</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="projects-footnote">
        <span className="footnote-line" />
        <span>more projects are waiting in the sketchbook</span>
        <span className="footnote-sparkle">✦</span>
      </div>
    </section>
  );
}
