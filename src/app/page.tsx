import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
