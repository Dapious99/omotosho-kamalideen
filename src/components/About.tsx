"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "bg-brutal-yellow" },
    { name: "Mobile Development", level: 20, color: "bg-brutal-pink" },
    { name: "UI/UX Principles", level: 80, color: "bg-brutal-blue" },
  ];

  return (
    <section className="py-20 bg-brutal-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-brutal-pink border-brutal opacity-20 transform rotate-45" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-brutal-blue border-brutal opacity-20 rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="font-space text-5xl md:text-6xl font-bold bg-brutal-yellow border-brutal shadow-brutal-lg px-8 py-4 inline-block transform -rotate-1">
                About Me
              </h2>
            </motion.div>
          </div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brutal-white border-brutal-thick shadow-brutal-lg p-8 mb-12"
          >
            <h3 className="text-3xl font-space font-bold mb-4 border-b-3 border-brutal-black pb-2 inline-block">
              Expertise
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl font-inter leading-relaxed"
            >
              Specialized in{" "}
              <span className="bg-brutal-yellow px-2 py-1 border-2 border-brutal-black font-bold">
                React/Next.js
              </span>
              ,{" "}
              <span className="bg-brutal-pink text-brutal-white px-2 py-1 border-2 border-brutal-black font-bold">
                JavaScript
              </span>
              ,{" "}
              <span className="bg-brutal-blue px-2 py-1 border-2 border-brutal-black font-bold">
                TypeScript
              </span>
              , Git and Github, React Native, Angular, Tailwind CSS, Redux,
              React Query and more...
            </motion.p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <User className="w-12 h-12" />,
                title: "Background",
                description:
                  "4+ years of experience in web and mobile development",
                color: "bg-brutal-yellow",
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: "Development Approach",
                description:
                  "Focused on building user-friendly, high-performance applications with a strong emphasis on scalability, maintainability, and UI/UX best practices.",
                color: "bg-brutal-pink",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Focus",
                description:
                  "Building scalable, aesthetic and performant applications",
                color: "bg-brutal-blue",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  rotate: index % 2 === 0 ? 2 : -2,
                  scale: 1.05,
                }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`${item.color} border-brutal-thick shadow-brutal-lg p-6 hover:shadow-brutal-pink transition-all duration-300`}
              >
                <div className="flex justify-center mb-4 text-brutal-black">
                  {item.icon}
                </div>
                <h3 className="text-xl font-space font-bold mb-3 text-center text-brutal-black">
                  {item.title}
                </h3>
                <p className="font-inter text-brutal-black leading-relaxed text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress */}
          <div className="bg-brutal-white border-brutal-thick shadow-brutal-lg p-8">
            <h3 className="text-3xl font-space font-bold mb-6 border-b-3 border-brutal-black pb-2 inline-block">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-space font-bold text-lg">
                      {skill.name}
                    </span>
                    <span className="font-space font-bold text-lg">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-8 bg-brutal-gray border-brutal relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className={`h-full ${skill.color} border-r-3 border-brutal-black flex items-center justify-end pr-2`}
                    >
                      <span className="font-space font-bold text-sm">
                        {skill.level}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

