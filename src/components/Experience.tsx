"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/utils";
const Experience = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-[#C9A000] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
