export type ProjectProcessStep = {
  title: string;
  description: string;
  image?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  object: "book" | "screen" | "note" | "photo";
  accent: "sakura" | "sky" | "matcha" | "lavender" | "butter";
  category?: string;
  role?: string[];
  heroImage?: string;
  links?: {
    live?: string;
    github?: string;
  };
  process?: ProjectProcessStep[];
  gallery?: string[];
  lessons?: string[];
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
  tags: string[];
  year: string;
  type: "particles" | "orbit" | "draw";
  category?: string;
  about?: string;
  notes?: string[];
  links?: {
    live?: string;
    github?: string;
  };
  /** Static preview image shown on the playground card. */
  image?: string;
  /** Video shown on the playground detail page (a direct .mp4/.webm URL). */
  video?: string;
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
    category: "Web Design · Development",
    role: ["UI/UX Design", "Frontend Development", "Interaction Design"],
    links: { live: "#", github: "#" },
    process: [
      {
        title: "Sketch",
        description: "Rough wireframes and pen-and-paper layouts to work out the structure before touching code.",
      },
      {
        title: "Design",
        description: "Mockups and a small component system, refined until the interface felt calm and consistent.",
      },
      {
        title: "Build",
        description: "Translated the designs into a working React app, iterating on interaction details along the way.",
      },
    ],
    lessons: [
      "Prototyping on paper first saved a lot of rework later.",
      "Small motion details make an interface feel much more alive.",
    ],
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
    category: "Web Development · Motion",
    role: ["Frontend Development", "Motion Design", "Accessibility"],
    links: { live: "#" },
    process: [
      {
        title: "Sketch",
        description: "Mapped out the page flow and the moments that deserved a little motion.",
      },
      {
        title: "Design",
        description: "Built a moodboard of transitions and timing curves before writing any animation code.",
      },
      {
        title: "Build",
        description: "Implemented the experience in Next.js, tuning easing and performance on real devices.",
      },
    ],
    lessons: [
      "Subtlety usually reads as more polished than a big flashy effect.",
      "Testing animations on a low-power device early catches a lot of jank.",
    ],
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
    category: "Creative Coding · Graphics",
    role: ["Concept", "Graphics Programming", "Sound Design"],
    links: { github: "#" },
    process: [
      {
        title: "Sketch",
        description: "Filled a few notebook pages with ideas before settling on the core visual concept.",
      },
      {
        title: "Design",
        description: "Prototyped the visual system in a shader playground to find the right feel.",
      },
      {
        title: "Build",
        description: "Wrote the C++ rendering pipeline and tuned it until it ran smoothly in real time.",
      },
    ],
    lessons: [
      "Constraints from a hackathon timeline forced faster, better decisions.",
      "Graphics work rewards a lot of small, quick iterations.",
    ],
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
    category: "Data · Visualization",
    role: ["Data Analysis", "Visualization Design", "Storytelling"],
    links: { github: "#" },
    process: [
      {
        title: "Sketch",
        description: "Explored the raw data and sketched a few chart types that could tell the story well.",
      },
      {
        title: "Design",
        description: "Designed a small visual language for the charts, from color to typography.",
      },
      {
        title: "Build",
        description: "Built the pipeline in Python and generated the final set of visuals.",
      },
    ],
    lessons: [
      "The clearest chart is usually the simplest one, not the fanciest.",
      "Talking to people about what they wanted to know shaped the whole project.",
    ],
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
    title: "IRL Crafts",
    description: "Some crafts I've done throughout the years.",
    tags: ["Embroidery", "Origami", "Needle Felt", "Fuse Beads"],
    year: "2018-2026",
    type: "particles",
    category: "Hands On · Tinkering",
    about:
      "A tiny sandbox for playing with attraction and drag. Every dot drifts on its own until the cursor comes close, then it leans toward it and settles again.",
    notes: [
      "Started as a one-file sketch just to see how a crowd of points would feel.",
      "The gentle drag on each particle ended up mattering more than the pull strength.",
    ],
    links: { github: "#" },
  },
  {
    id: "play-02",
    title: "Little Orbit",
    description: "Hover to gently disturb a miniature orbiting system.",
    tags: ["TouchDesign", "Audio Visualizer"],
    year: "2026",
    type: "orbit",
    category: "Motion · Audio Visualizer",
    about:
      "A small orbiting system built to react to sound. Hovering nudges the paths off balance for a moment before they settle back into rhythm.",
    notes: [
      "Built first in TouchDesign to prototype the timing before touching any code.",
      "Letting the system wobble and recover felt more alive than forcing it to loop perfectly.",
    ],
    links: { github: "#" },
  },
  {
    id: "play-03",
    title: "3D Modeling",
    description: "Draw directly on the page.",
    tags: ["Spline", "Blender"],
    year: "2026",
    type: "draw",
    category: "3D · Interaction",
    about:
      "A quick experiment in letting a page feel like scratch paper — somewhere to leave a mark without it needing to mean anything.",
    notes: [
      "Modeled a few reference shapes in Blender before simplifying everything down to a single stroke.",
      "The least polished version ended up being the most fun to use.",
    ],
    links: { live: "https://my.spline.design/popsicle-MlzVlGOrfBlTe69RZj1XoIN6/" },
  },
];