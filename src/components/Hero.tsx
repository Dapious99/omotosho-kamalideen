"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-gold font-inter text-sm tracking-wider uppercase mb-4 block animate-fade-up">
            Welcome to my portfolio
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 relative overflow-hidden">
            <span className="block animate-text-reveal">
              I'm Omotosho Kamalideen
            </span>
          </h1>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up">
            Crafting digital experiences with passion and precision.
            Specializing in modern web development and creative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-inter px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  );
};

export default Hero;
