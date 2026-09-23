"use client";

import { useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import TopNav from "@/components/TopNav";
import JourneyPlane from "@/components/JourneyPlane";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Playground from "@/sections/Playground";
import Experience from "@/sections/Experience";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const planeProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <TopNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <JourneyPlane progress={planeProgress} />

      <Hero />
      <About />
      <Projects />
      <Playground />
      {/* <Experience /> */}
      <Resume />
      <Contact />

      <Footer />
    </main>
  );
}
