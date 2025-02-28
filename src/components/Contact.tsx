import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="font-playfair text-xl text-[#B4A2F6] md:text-2xl">
              Get in touch
            </p>
            <p className="font-playfair text-lg text-justify md:text-6xl mt-6 text-[#B4A2F6]">
              Feel free to reach out for questions, quotes, or collaborations.
            </p>
            <a href="mailto:dapious99@gmail.com" className="">
              <motion.button className="text-white bg-[#B4A2F6] mt-8 rounded-full font-inter px-12 md:px-20 py-3 hover:bg- transition-colors">
                Say Hi!
              </motion.button>
            </a>
          </div>
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row">
            <div className="flex flex-col gap-4 text-[#B4A2F6] text-lg md:text-2xl font-medium">
              <p className="text-black text-xl md:text-3xl font-semibold">
                Reach me at
              </p>
              <a
                href="mailto:dapious99@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail /> dapious99@gmail.com
              </a>
              <a
                href="tel:+2348110792758"
                className="inline-flex items-center gap-2"
              >
                <PhoneCall /> +2348110792758
              </a>
            </div>
            <div className="text-lg md:text-2xl font-medium">
              <p className="text-black text-xl md:text-3xl mb-4 font-semibold">
                Socials
              </p>
              <div className="text-[#B4A2F6] flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/kamalideen-omotosho-a50135270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/itsdapious/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Instagram />
                  Instagram
                </a>
                <a
                  href="https://github.com/Dapious99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github />
                  Github
                </a>
                <a
                  href="https://wa.me/+2348110792758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
