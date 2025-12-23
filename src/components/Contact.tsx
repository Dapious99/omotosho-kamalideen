"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kamalideen-omotosho-a50135270/",
      color: "bg-brutal-blue",
    },
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      href: "https://www.instagram.com/itsdapious/",
      color: "bg-brutal-pink",
    },
    {
      icon: <Github size={24} />,
      label: "Github",
      href: "https://github.com/Dapious99",
      color: "bg-brutal-yellow",
    },
  ];

  return (
    <section className="py-20 bg-brutal-gray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brutal-yellow border-b-3 border-brutal-black" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-brutal-pink border-brutal opacity-20 transform rotate-45" />
      <div className="absolute bottom-10 left-10 w-28 h-28 bg-brutal-blue border-brutal opacity-20 rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Let&apos;s Work{" "}
              <span className="bg-brutal-yellow border-brutal shadow-brutal px-4 py-2 inline-block transform -rotate-2">
                Together
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-inter text-lg md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Feel free to reach out for questions, quotes, or collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href="mailto:dapious99@gmail.com">
                <MagneticButton className="bg-brutal-pink text-brutal-white font-space font-bold text-lg px-12 py-4 border-brutal shadow-brutal-lg hover:shadow-brutal-yellow hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                  Say Hi! 👋
                </MagneticButton>
              </a>
            </motion.div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brutal-white border-brutal-thick shadow-brutal-lg p-8"
            >
              <h3 className="text-3xl font-space font-bold mb-6 border-b-3 border-brutal-black pb-2 inline-block">
                Reach Me At
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:dapious99@gmail.com"
                  className="flex items-center gap-4 font-inter text-lg hover:text-brutal-pink transition-colors group"
                >
                  <div className="bg-brutal-yellow border-brutal p-3 group-hover:bg-brutal-pink transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium">dapious99@gmail.com</span>
                </a>
                <a
                  href="tel:+2348110792758"
                  className="flex items-center gap-4 font-inter text-lg hover:text-brutal-blue transition-colors group"
                >
                  <div className="bg-brutal-blue border-brutal p-3 group-hover:bg-brutal-yellow transition-colors">
                    <PhoneCall size={24} />
                  </div>
                  <span className="font-medium">+234 811 079 2758</span>
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brutal-white border-brutal-thick shadow-brutal-lg p-8"
            >
              <h3 className="text-3xl font-space font-bold mb-6 border-b-3 border-brutal-black pb-2 inline-block">
                Socials
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 font-inter text-lg group"
                  >
                    <div
                      className={`${social.color} border-brutal p-3 group-hover:shadow-brutal transition-all`}
                    >
                      {social.icon}
                    </div>
                    <span className="font-medium group-hover:text-brutal-pink transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="https://wa.me/+2348110792758"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 font-inter text-lg group"
                >
                  <div className="bg-brutal-yellow border-brutal p-3 group-hover:shadow-brutal transition-all">
                    <PhoneCall size={24} />
                  </div>
                  <span className="font-medium group-hover:text-brutal-pink transition-colors">
                    WhatsApp
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

