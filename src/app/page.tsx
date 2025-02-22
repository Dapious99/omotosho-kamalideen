import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { currentYear } from "@/utils";

export default function Home() {
  return (
    <div className="bg-white ">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <footer className="text-[#C9A000] container mx-auto px-4 py-2 border-t border-t-[#C9A000]">
        &#169; Copyright {currentYear} | Kodewarlock
      </footer>
    </div>
  );
}
