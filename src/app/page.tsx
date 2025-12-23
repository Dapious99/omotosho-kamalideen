"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { currentYear } from "@/utils";
import { ArrowUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/animations/ScrollProgress";

// const FloatingCircles = () => {
//   const circles = Array.from({ length: 15 });

//   return (
//     <>
//       {circles.map((_, index) => {
//         const size = Math.random() * 60 + 20;
//         const xStart = Math.random() * 100 + "vw";
//         const yStart = Math.random() * 100 + "vh";

//         return (
//           <motion.div
//             key={index}
//             className="absolute bg-[#C9A000] z-40 rounded-full opacity-50"
//             style={{
//               width: size,
//               height: size,
//             }}
//             initial={{
//               x: xStart,
//               y: yStart,
//             }}
//             animate={{
//               x: ["0vw", "100vw", "50vw", "0vw"],
//               y: ["0vh", "50vh", "100vh", "0vh"],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 80;
          const height = element.offsetHeight;

          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-brutal-white relative">
      <ScrollProgress />
      <nav className="fixed w-full z-40 bg-brutal-white border-b-brutal shadow-brutal px-6 md:px-12 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="font-space text-2xl md:text-3xl font-bold hover:text-brutal-pink transition-colors"
            >
              <span className="bg-brutal-yellow px-3 py-1 border-brutal shadow-brutal inline-block transform hover:-rotate-2 transition-transform">
                Kodewarlock
              </span>
            </Link>
          </motion.div>

          <div
            onClick={() => setToggle(false)}
            className={`${
              toggle
                ? "text-lg font-space font-bold pl-6 pt-4 pb-8 md:hidden flex flex-col gap-4 absolute w-[80%] left-0 top-16 bg-brutal-white border-brutal shadow-brutal-lg"
                : "hidden font-space font-bold md:text-lg md:block space-x-6"
            }`}
          >
            <Link
              href="#home"
              className={`hover:text-brutal-pink transition-colors relative group ${
                activeSection === "home"
                  ? "text-brutal-pink"
                  : "text-brutal-black"
              }`}
            >
              Home
              {activeSection === "home" && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brutal-yellow" />
              )}
            </Link>

            <Link
              href="#about"
              className={`hover:text-brutal-pink transition-colors relative group ${
                activeSection === "about"
                  ? "text-brutal-pink"
                  : "text-brutal-black"
              }`}
            >
              About
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brutal-yellow" />
              )}
            </Link>
            <Link
              href="#projects"
              className={`hover:text-brutal-pink transition-colors relative group ${
                activeSection === "projects"
                  ? "text-brutal-pink"
                  : "text-brutal-black"
              }`}
            >
              Works
              {activeSection === "projects" && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brutal-yellow" />
              )}
            </Link>
            <Link
              href="#experience"
              className={`hover:text-brutal-pink transition-colors relative group ${
                activeSection === "experience"
                  ? "text-brutal-pink"
                  : "text-brutal-black"
              }`}
            >
              Experience
              {activeSection === "experience" && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brutal-yellow" />
              )}
            </Link>
            <Link
              href="#contact"
              className={`hover:text-brutal-pink transition-colors relative group ${
                activeSection === "contact"
                  ? "text-brutal-pink"
                  : "text-brutal-black"
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-brutal-yellow" />
              )}
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`text-brutal-black p-2 md:hidden border-brutal shadow-brutal ${
              toggle ? "bg-brutal-yellow" : "bg-brutal-white"
            } transition-colors cursor-pointer`}
            onClick={handleToggle}
          >
            {!toggle ? <Menu size={28} /> : <X size={28} />}
          </motion.div>
        </div>
      </nav>
      <div id="kodewarlock"></div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <FloatingCircles /> */}
      <section id="projects">
        <Projects />
      </section>
      {/* <FloatingCircles /> */}
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="bg-brutal-black text-brutal-white w-full px-6 md:px-12 py-6 border-t-brutal-thick">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-space font-bold text-lg">
            &#169; {currentYear} Kodewarlock | Built with ❤️
          </div>
          <Link href="#kodewarlock">
            <motion.div
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-brutal-yellow text-brutal-black border-brutal shadow-brutal p-3 hover:shadow-brutal-pink transition-all cursor-pointer"
            >
              <ArrowUp size={28} />
            </motion.div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
