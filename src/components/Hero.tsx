"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#C9A000] font-inter text-sm tracking-wider uppercase mb-4 block animate-fade-up">
            Welcome to my portfolio
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            <span className="block animate-text-reveal">
              I&apos;m Omotosho Kamalideen
            </span>
          </h1>
          <span className="block animate-text-reveal">
            I&apos;m a Frontend Developer
          </span>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up">
            I love Crafting digital experiences with passion and precision.
            Specializing in modern web development and creative solutions.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-inter px-4 md:px-8 py-3 rounded-full hover:py-4 hover:bg-gray-700 transition-colors"
            >
              View CV
            </a>
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white font-inter px-4 md:px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                View My Work
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="relative inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  );
};

export default Hero;
