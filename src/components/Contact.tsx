import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <p className="font-playfair text-xl md:text-2xl pb-4">Get in touch</p>
          <p className="font-agbalumo text-2xl text-justify md:text-6xl text-[#C9A000]">
            I will love to hear from you, whether you have a question, need a
            qoute or want to collaborate — shoot me a message.
          </p>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col gap-4 text-xl md:text-2xl font-medium">
              <p className="text-[#C9A000] text-xl md:text-3xl font-semibold">
                Reach me at
              </p>
              <a href="mailto:dapious99@gmail.com">dapious99@gmail.com</a>
              <a href="tel:+2348110792758">+2348110792758</a>
            </div>
            <div>
              <p className="text-[#C9A000] text-xl md:text-2xl">Socials</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/kamalideen-omotosho-a50135270/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/itsdapious/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram{" "}
                </a>
                <a
                  href="https://github.com/Dapious99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github{" "}
                </a>
                <a href="https://wa.me/+2348110792758" target="_blank">
                  Whatsapp
                </a>
              </div>
            </div>
            <a href="mailto:dapious99@gmail.com">
              <motion.button className="text-white bg-[#C9A000] font-inter px-12 md:px-20 py-3 hover:bg- transition-colors">
                Say Hi!
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
