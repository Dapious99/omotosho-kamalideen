// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import { currentYear } from "@/utils";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="bg-white relative">
//       <div className="absolute top-1/2 size-10 bg-[#C9A000] rounded-full "></div>
//       <div className="absolute top-1/2 right-2 size-10 border border-[#D4AF37] rounded-full "></div>
//       <nav className="fixed w-full z-40 bg-[#D4AF37] p-4">
//         <div className="container mx-auto">
//           <a href="#" className="text-xl font-bold">
//             Kodewarlock
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Intro
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             About
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Works
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Experience
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Contact
//           </a>
//         </div>
//       </nav>
//       <Hero />
//       <About />
//       <Projects />
//       <Experience />
//       <footer className="text-[#C9A000] container mx-auto px-4 py-2 border-t border-t-[#C9A000]">
//         &#169; Copyright {currentYear} | Kodewarlock
//       </footer>
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import { currentYear } from "@/utils";

// const FloatingCircles = () => {
//   const circles = Array.from({ length: 15 }); // Generate 10 circles

//   return (
//     <>
//       {circles.map((_, index) => {
//         // Generate random positions and sizes
//         const size = Math.random() * 60 + 20; // Between 20px and 80px
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
//               duration: Math.random() * 10 + 5, // 5s to 15s random duration
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default function Home() {
//   return (
//     <div className="bg-white relative overflow-hidden">
//       <FloatingCircles />

//       <nav className="fixed w-full z-40 bg-[#D4AF37] px-12 py-4">
//         <div className="container mx-auto">
//           <a href="#" className="font-agbalumo text-xl font-bold">
//             Kodewarlock
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Intro
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             About
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Works
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Experience
//           </a>
//           <a href="#" className="ml-4 text-gray-500 hover:text-gray-600">
//             Contact
//           </a>
//         </div>
//       </nav>

//       <Hero />
//       <About />
//       <FloatingCircles />
//       <Projects />
//       <FloatingCircles />
//       <Experience />
//       <footer className="text-[#C9A000] container mx-auto px-12 py-2 border-t border-t-[#C9A000]">
//         &#169; Copyright {currentYear} | Kodewarlock
//       </footer>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { currentYear } from "@/utils";

const FloatingCircles = () => {
  const circles = Array.from({ length: 15 });

  return (
    <>
      {circles.map((_, index) => {
        const size = Math.random() * 60 + 20;
        const xStart = Math.random() * 100 + "vw";
        const yStart = Math.random() * 100 + "vh";

        return (
          <motion.div
            key={index}
            className="absolute bg-[#C9A000] z-40 rounded-full opacity-50"
            style={{
              width: size,
              height: size,
            }}
            initial={{
              x: xStart,
              y: yStart,
            }}
            animate={{
              x: ["0vw", "100vw", "50vw", "0vw"],
              y: ["0vh", "50vh", "100vh", "0vh"],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </>
  );
};

export default function Home() {
  return (
    <div className="bg-white relative overflow-hidden">
      <FloatingCircles />
      <nav className="fixed w-full z-40 bg-[#D4AF37] px-12 py-4">
        <div className="container mx-auto flex items-center space-x-6">
          <Link href="#top" className="font-agbalumo text-xl font-bold">
            Kodewarlock
          </Link>

          <Link href="#hero" className="text-gray-500 hover:text-gray-600">
            Intro
          </Link>
          <Link href="#about" className="text-gray-500 hover:text-gray-600">
            About
          </Link>
          <Link href="#projects" className="text-gray-500 hover:text-gray-600">
            Works
          </Link>
          <Link
            href="#experience"
            className="text-gray-500 hover:text-gray-600"
          >
            Experience
          </Link>
          <Link href="#contact" className="text-gray-500 hover:text-gray-600">
            Contact
          </Link>
        </div>
      </nav>
      {/* Sections with IDs */}
      <div id="top"></div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>{" "}
      <FloatingCircles />
      <section id="projects">
        <Projects />
      </section>{" "}
      <FloatingCircles />
      <section id="experience">
        <Experience />
      </section>
      <section id="contact"></section>
      <footer className="text-[#C9A000] container mx-auto px-12 py-2 border-t border-t-[#C9A000]">
        &#169; Copyright {currentYear} | Kodewarlock
      </footer>
    </div>
  );
}
