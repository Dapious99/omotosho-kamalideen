"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";
const About = () => {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Mobile Development", level: 20 },
    // { name: "UI/UX Design", level: 80 },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <User className="w-8 h-8 mb-4 text-[#D4AF37]" />,
                title: "Background",
                description:
                  "2+ years of experience in web and mobile development",
              },
              {
                icon: <Code className="w-8 h-8 mb-4 text-[#C9A000]" />,
                title: "Expertise",
                description:
                  "Specialized in React/Nextjs, JavaScript, TypeScript, Git and Github, React Native, Angular, Tailwind CSS, Redux, React Query and more...",
              },
              {
                icon: <Globe className="w-8 h-8 mb-4 text-[#D4AF37]" />,
                title: "Focus",
                description:
                  "Building scalable, aesthetic and performant applications",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-[#D4AF37]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
