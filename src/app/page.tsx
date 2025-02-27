"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { currentYear } from "@/utils";
import { ArrowBigUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";

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
    <div className="bg-white relative">
      {/* <FloatingCircles /> */}
      <nav className="fixed w-full z-40 drop-shadow-sm bg-white px-6 md:px-12 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Link
              href="/"
              className="font-poppins text-[#ECAAFB] text-2xl md:text-3xl font-bold"
            >
              Kodewarlock
            </Link>
          </motion.div>

          <div
            onClick={() => setToggle(false)}
            className={`${
              toggle
                ? "text-lg font-semibold pl-6 pt-4 pb-8 md:hidden flex flex-col gap-4 absolute w-[80%] left-0 top-16 bg-white shadow"
                : "hidden font-semibold md:text-xl md:block space-x-6"
            }`}
          >
            <Link
              href="#home"
              className={`hover:text-[#B4A2F6] transition-colors ${
                activeSection === "home"
                  ? "text-[#B4A2F6] font-bold"
                  : "text-gray-700 "
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`hover:text-[#B4A2F6] transition-colors ${
                activeSection === "about"
                  ? "text-[#B4A2F6] font-bold"
                  : "text-gray-700"
              }`}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`hover:text-[#B4A2F6] transition-colors ${
                activeSection === "projects"
                  ? "text-[#B4A2F6] font-bold"
                  : "text-gray-700"
              }`}
            >
              Works
            </Link>
            <Link
              href="#experience"
              className={`hover:text-[#B4A2F6] transition-colors ${
                activeSection === "experience"
                  ? "text-[#B4A2F6] font-bold"
                  : "text-gray-700"
              }`}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className={`hover:text-[#B4A2F6] transition-colors ${
                activeSection === "contact"
                  ? "text-[#B4A2F6] font-bold"
                  : "text-gray-700"
              }`}
            >
              Contact
            </Link>
          </div>
          <div
            className={`text-black p-2 md:hidden ${
              toggle ? "bg-white hover:bg-white" : ""
            } rounded-full transition-colors`}
            onClick={handleToggle}
          >
            {!toggle ? <Menu size={30} /> : <X size={30} />}
          </div>
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
      <footer className="text-[#B4A2F6] w-full px-6 md:px-12 py-2 border-t border-t-[#ECAAFB] ">
        <div className="container mx-auto inline-flex justify-between items-center">
          &#169; Copyright {currentYear} | Kodewarlock{" "}
          <Link href="#kodewarlock" className="border border-[#ECAAFB] p-3">
            <ArrowBigUp size={30} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
