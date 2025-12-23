"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/utils";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web Development", "Mobile Development"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter projects based on category
  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  // Get the currently visible projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-20 bg-brutal-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-brutal-yellow border-brutal opacity-10 transform -rotate-12" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brutal-pink border-brutal opacity-10 rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="font-space text-5xl md:text-6xl font-bold bg-brutal-pink text-brutal-white border-brutal shadow-brutal-lg px-8 py-4 inline-block transform rotate-1">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(6);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`font-space font-bold px-6 py-3 border-brutal shadow-brutal transition-all ${
                selectedCategory === category
                  ? "bg-brutal-black text-brutal-white shadow-brutal-yellow"
                  : "bg-brutal-white text-brutal-black hover:shadow-brutal-pink"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-brutal-white border-brutal-thick shadow-brutal-lg hover:shadow-brutal-pink transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden border-b-brutal-thick">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brutal-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brutal-yellow text-brutal-black font-space font-bold px-4 py-2 border-brutal shadow-brutal flex items-center gap-2 hover:bg-brutal-pink hover:text-brutal-white transition-colors"
                      >
                        <ExternalLink size={18} />
                        View
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brutal-blue text-brutal-black font-space font-bold px-4 py-2 border-brutal shadow-brutal flex items-center gap-2 hover:bg-brutal-pink hover:text-brutal-white transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-space text-xl font-bold mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-inter text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => {
                      const colors = [
                        "bg-brutal-yellow",
                        "bg-brutal-pink",
                        "bg-brutal-blue",
                      ];
                      return (
                        <span
                          key={index}
                          className={`${
                            colors[index % 3]
                          } text-brutal-black font-space font-bold text-xs px-3 py-1 border-2 border-brutal-black`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <span className="bg-brutal-gray text-brutal-black font-space font-bold text-xs px-3 py-1 border-2 border-brutal-black">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block bg-brutal-gray border-2 border-brutal-black px-3 py-1">
                    <span className="font-space font-bold text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-brutal-black text-brutal-white font-space font-bold px-8 py-4 border-brutal shadow-brutal-lg hover:shadow-brutal-yellow hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-lg"
            >
              View More Projects →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

