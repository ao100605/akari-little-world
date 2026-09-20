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

export type PlaygroundEntry = {
  /** Video shown on the playground detail page for this slide (a direct .mp4/.webm URL). */
  video?: string;
  /** Static image shown for this slide instead of a video (a direct .jpg/.png/.webp URL). */
  image?: string;
  /** Embed a live website or demo (e.g. a Spline scene) for this slide via iframe. */
  embed?: string;
  about?: string;
  notes?: string[];
  links?: {
    live?: string;
    github?: string;
  };
};

export type Playground = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  type: "particles" | "orbit" | "draw";
  category?: string;
  /** Static preview image shown on the playground card. */
  image?: string;
  /** One slide per video in the detail-page carousel; each slide has its own about/notes/links. */
  entries: PlaygroundEntry[];
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
    // links: { live: "#", github: "#" },
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
    // links: { live: "#" },
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
    // links: { github: "#" },
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
    // links: { github: "#" },
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
    title: "Visual Designs",
    description: "Projects done for my ICAM (interdisciplinary computing and the arts) minor.",
    tags: ["TouchDesign", "Audio Visualizer", "Python"],
    year: "2025-2026",
    type: "orbit",
    category: "Motion · Audio Visualizer",
    entries: [
      {
        about:
          "An audio-reactive dancing wave of lines built with TouchDesigner for VIS 145A: Time- and Process-Based Digital Media I.",
        notes: [
          "Referenced tutorials: www.youtube.com/watch?v=R7sAomk2vR4, www.youtube.com/watch?v=kcHhg9JXE90, www.youtube.com/watch?v=bBbyMkzTNpg",
          "I wanted to focus on visual aesthetics and trying to really make audio waves visible",
        ],
        video: "/playground/play-01/the_shore.mp4",
      },
      {
        about:
          "Pendulum swirls made with pygame for VIS 142: Practices in Computing Arts.",
        notes: [
          "Referenced tutorial: www.youtube.com/watch?v=NBWMtlbbOag&t=475s",
          "I wanted to explore the connection between physics and visuals",
        ],
        links: {github: "https://github.com/ao100605/pendulum-swirls"},
        video: "/playground/play-01/pendulum_swirls.mp4",
      },
    ],
  },
  {
    id: "play-02",
    title: "3D Modeling",
    description: "Exploring 3D modeling as a hobby.",
    tags: ["Blender", "Spline", "Fusion360"],
    year: "2020-2026",
    type: "draw",
    category: "3D · Interaction",
    entries: [
      {
        about:
          "3D popsicle model built with Spline that plays music when clicked on.",
        notes: [
          "Tutorial: //www.youtube.com/watch?v=TO-hT6jyDKU&t=66s",
          "First introduction into Spline, built just to learn the platform.",
        ],
        embed: "https://my.spline.design/popsicle-MlzVlGOrfBlTe69RZj1XoIN6/",
      },
      {
        about:
          "3D model of Toothless from How To Train Your Dragon movie built in Fusion360.",
        notes: [
          "Part of a project for a 3D Modeling elective in high school",
          "Sculpted the mesh using reference images found online for multiple angles",
        ],
        image: "/playground/play-02/toothless.png"
      },
    ],
  },
  {
    id: "play-03",
    title: "IRL Crafts",
    description: "Some crafts I've done throughout the years.",
    tags: ["Embroidery", "Origami", "Needle Felt", "Fuse Beads"],
    year: "2018-2026",
    type: "particles",
    category: "Hands On · Tinkering",
    entries: [
      {
        about:
          "Wisteria embroidery on a Chinese round fan.",
        notes: [
          "Finished in one day as a project in middle school",
          "Learned to be patient and focused for a long period of time",
        ],
        image: "/playground/play-03/embroidery.jpg"
      },
      {
        about:
          "Mother holding child & heart with flower origami.",
        notes: [
          "Made as a mother's day gift, following tutorials online",
          "Required attention to detail and precision in folding",
        ],
        image: "/playground/play-03/origami.jpg"
      },
      {
        about:
          "3D emojis made with needle felting (a dry craft that uses special barbed needles to sculpt and interlock wool fibers into firm 2D designs or 3D objects).",
        notes: [
          "Made into keychains to sell to classmates for a high school entrepreneurship project",
          "Fun expereience despite accidently poking myself a lot in the process",
        ],
        image: "/playground/play-03/needle-felt.jpg"
      },
      {
        about:
          "Cute fuse bead designs (small, hollow plastic tubes that you arrange on a pegboard to create flat pixel art and then melt together using a household iron).",
        notes: [
          "Made as decorations and functional coasters",
          "Finished within 3.5 hours in one sitting (relatively fast)",
        ],
        image: "/playground/play-03/fuse-beads.jpg"
      },
    ],
  },
];