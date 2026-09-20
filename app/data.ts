export type ProjectProcessStep = {
  title: string;
  description: string;
  image?: string;
};

export type ProjectMediaItem = {
  /** Static image for this gallery slide (a direct .jpg/.png/.webp URL). */
  image?: string;
  /** Video for this gallery slide (a direct .mp4/.webm URL). */
  video?: string;
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
  links?: {
    live?: string;
    github?: string;
  };
  process?: ProjectProcessStep[];
  /** Carousel of images/videos in the hero area; the rest of the page stays the same regardless of which slide is selected. */
  gallery?: ProjectMediaItem[];
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
    title: "Kana Compass",
    subtitle: "iOS mobile app vibe coding experiment",
    description:
      "Placeholder project description 1.",
    tags: ["SwiftUI", "Xcode", "UI/UX", "Education", "AI Agents"],
    year: "2026",
    object: "note",
    accent: "sky",
    category: "App Design · Development · Iterative Testing · Vibe Coding",
    role: ["UI/UX Design", "Level Design", "Interaction Design"],
    links: { github: "https://github.com/ao100605/kana-compass" },
    gallery: [
      { image: "/projects/project-01/kana-compass-1.jpg" },
      { image: "/projects/project-01/kana-compass-2.jpg" },
      { image: "/projects/project-01/kana-compass-3.jpg" },
    ],
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
      "Prototyping various design with ChatGPT first saved a lot of rework later.",
      "Small motion details make an interface feel much more alive.",
    ],
  },
  {
    id: "project-02",
    title: "HKN Projects Portal",
    subtitle: "Full stack website with an AI chatbot",
    description:
      "Placeholder project description 2.",
    tags: ["Next.js", "React", "TypeScript", "Decap CMS", "RAG"],
    year: "2026",
    object: "screen",
    accent: "lavender",
    category: "Web Development · Content Management · AI Chatbot",
    role: ["Frontend Development", "CMS Development", "Prompt Engineering"],
    links: { github: "https://github.com/hknkappapsiprojects/Projects-Portal" },
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
    title: "Data Science Analysis",
    subtitle: "Project for COGS 108: Data Science in Practice",
    description:
      "Placeholder project description 3.",
    tags: ["Data Science", "Python", "Research"],
    year: "2025",
    object: "book",
    accent: "sakura",
    category: "Data analysis · Pandas · Seaborn · Matplotlib",
    role: ["Concept", "Data Cleaning", "Written Output"],
    links: { github: "https://github.com/ao100605/Group078_WI25" },
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
    title: "CSE 110 (in progress)",
    subtitle: "Project for CSE 110: Software Engineering",
    description:
      "Placeholder project description 4.",
    tags: ["JavaScript", "Data", "Design"],
    year: "2026",
    object: "photo",
    accent: "matcha",
    category: "Software Engineering · Agile Design",
    role: ["Data Analysis", "Visualization Design", "Storytelling"],
    // links: { github: "#" },
    process: [
      {
        title: "Sketch",
        description: "...",
      },
      {
        title: "Design",
        description: "...",
      },
      {
        title: "Build",
        description: "...",
      },
    ],
    lessons: [
      "...",
      "...",
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
        video: "/playground/icam/the_shore.mp4",
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