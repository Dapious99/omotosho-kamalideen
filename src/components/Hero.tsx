"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FloatingShapes from "./animations/FloatingShapes";
import TextScramble from "./animations/TextScramble";
import MagneticButton from "./animations/MagneticButton";

const Hero = () => {
  return (
    <section className="relative mt- min-h-screen flex items-center justify-center bg-brutal-white overflow-hidden">
      <FloatingShapes />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="bg-brutal-yellow border-brutal px-6 py-2 mt-16 shadow-brutal inline-block transform -rotate-2">
              <span className="font-space font-bold text-sm md:text-base uppercase tracking-wider">
                Frontend Developer
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <motion.span
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I&apos;m
            </motion.span>
            <motion.span
              className="block bg-brutal-pink text-brutal-white px-4 py-2 border-brutal shadow-brutal-lg inline-block transform rotate-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <TextScramble text="Omotosho Kamalideen" />
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-inter text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting{" "}
            <span className="bg-brutal-blue px-2 py-1 border-brutal-black border-2 font-bold">
              pixel-perfect
            </span>{" "}
            digital experiences with modern web technologies. Specializing in{" "}
            <span className="bg-brutal-yellow px-2 py-1 border-brutal-black border-2 font-bold">
              React
            </span>
            ,{" "}
            <span className="bg-brutal-pink text-brutal-white px-2 py-1 border-brutal-black border-2 font-bold">
              Next.js
            </span>
            , and creative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#projects">
              <MagneticButton className="bg-brutal-black text-brutal-white font-space font-bold px-8 py-4 border-brutal shadow-brutal-lg hover:shadow-brutal-yellow hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-lg">
                View My Work →
              </MagneticButton>
            </Link>
            <Link href="#contact">
              <MagneticButton className="bg-brutal-white text-brutal-black font-space font-bold px-8 py-4 border-brutal shadow-brutal-lg hover:shadow-brutal-pink hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-lg">
                Let&apos;s Talk ✨
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -bottom-10 left-1/4 w-20 h-20 bg-brutal-yellow border-brutal shadow-brutal hidden md:block"
            animate={{
              rotate: [0, 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-1/4 w-16 h-16 bg-brutal-blue border-brutal shadow-brutal rounded-full hidden md:block"
            animate={{
              scale: [1, 1.2, 1],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brutal-yellow border-t-3 border-brutal-black" />
    </section>
  );
};

export default Hero;

