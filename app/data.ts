export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  object: "book" | "screen" | "note" | "photo";
  accent: "sakura" | "sky" | "matcha" | "lavender" | "butter";
};

export type Experience = {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
  accent: "sakura" | "sky" | "matcha" | "butter";
};

export type Playground = {
  id: string;
  title: string;
  description: string;
  type: "particles" | "orbit" | "draw";
};

export const projects: Project[] = [
  {
    id: "project-01",
    title: "Project One",
    subtitle: "Your first featured project",
    description:
      "Placeholder copy for a project case study. Replace this with what you built, why you built it, and what you learned.",
    tags: ["React", "TypeScript", "UI/UX"],
    year: "2026",
    object: "book",
    accent: "sakura",
  },
  {
    id: "project-02",
    title: "Project Two",
    subtitle: "An interactive web experience",
    description:
      "A placeholder project card designed to show how different project types can live in the same visual system.",
    tags: ["Next.js", "CSS", "Animation"],
    year: "2026",
    object: "screen",
    accent: "sky",
  },
  {
    id: "project-03",
    title: "Project Three",
    subtitle: "A creative coding experiment",
    description:
      "Use this slot for graphics, visualization, a hackathon project, or another experiment.",
    tags: ["C++", "Graphics", "Creative"],
    year: "2025",
    object: "note",
    accent: "lavender",
  },
  {
    id: "project-04",
    title: "Project Four",
    subtitle: "Something you are proud of",
    description:
      "More placeholder content. The layout intentionally supports adding as many projects as you want.",
    tags: ["Python", "Data", "Design"],
    year: "2025",
    object: "photo",
    accent: "matcha",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-01",
    date: "2024",
    title: "University",
    organization: "UC San Diego",
    description:
      "Placeholder for your education, major, minors, coursework, or a short personal note.",
    accent: "sky",
  },
  {
    id: "exp-02",
    date: "2025",
    title: "Engineering",
    organization: "Experience / Internship",
    description:
      "Placeholder for an internship, engineering role, club, volunteer position, or other experience.",
    accent: "sakura",
  },
  {
    id: "exp-03",
    date: "2026",
    title: "Building",
    organization: "Projects & Communities",
    description:
      "Placeholder for a current chapter of your journey.",
    accent: "matcha",
  },
];

export const playgrounds: Playground[] = [
  {
    id: "play-01",
    title: "Particle Garden",
    description: "Move your cursor through a tiny field of particles.",
    type: "particles",
  },
  {
    id: "play-02",
    title: "Little Orbit",
    description: "Hover to gently disturb a miniature orbiting system.",
    type: "orbit",
  },
  {
    id: "play-03",
    title: "Doodle Pad",
    description: "Draw directly on the page.",
    type: "draw",
  },
];