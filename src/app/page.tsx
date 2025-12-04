import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-black overflow-x-hidden">
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <BentoGrid />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
