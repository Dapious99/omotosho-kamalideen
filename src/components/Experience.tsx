"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/utils";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const colors = ["bg-brutal-yellow", "bg-brutal-pink", "bg-brutal-blue"];

  return (
    <section className="py-20 bg-brutal-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-20 w-28 h-28 bg-brutal-blue border-brutal opacity-10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-brutal-yellow border-brutal opacity-10 transform rotate-12" />

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
            <h2 className="font-space text-5xl md:text-6xl font-bold bg-brutal-blue border-brutal shadow-brutal-lg px-8 py-4 inline-block transform -rotate-1">
              Experience
            </h2>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-brutal-black hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`mb-12 last:mb-0 relative ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-8 h-8 ${
                  colors[index % 3]
                } border-brutal-thick shadow-brutal z-10 flex items-center justify-center`}
              >
                <Briefcase size={16} className="text-brutal-black" />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                } bg-brutal-white border-brutal-thick shadow-brutal-lg hover:shadow-brutal-pink transition-all duration-300 p-6 md:p-8`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-space font-bold text-brutal-black mb-1">
                      {exp.role}
                    </h3>
                    <p className={`font-space font-bold text-lg ${
                      index % 3 === 0
                        ? "text-brutal-yellow"
                        : index % 3 === 1
                        ? "text-brutal-pink"
                        : "text-brutal-blue"
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className={`${
                      colors[index % 3]
                    } border-2 border-brutal-black px-4 py-2 inline-block`}
                  >
                    <span className="font-space font-bold text-sm whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 font-inter text-brutal-black leading-relaxed"
                    >
                      <span
                        className={`${
                          colors[index % 3]
                        } w-2 h-2 border-2 border-brutal-black mt-2 flex-shrink-0`}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

