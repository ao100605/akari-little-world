import { projects } from "@/app/data";
import SectionKicker from "@/components/SectionKicker";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
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
  );
}
