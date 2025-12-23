"use client";

import { motion } from "framer-motion";

const shapes = [
  { type: "circle", color: "bg-brutal-yellow", size: 60, delay: 0 },
  { type: "square", color: "bg-brutal-pink", size: 80, delay: 0.5 },
  { type: "circle", color: "bg-brutal-blue", size: 40, delay: 1 },
  { type: "square", color: "bg-brutal-yellow", size: 50, delay: 1.5 },
  { type: "circle", color: "bg-brutal-pink", size: 70, delay: 2 },
  { type: "square", color: "bg-brutal-blue", size: 45, delay: 2.5 },
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomRotate = Math.random() * 360;

        return (
          <motion.div
            key={index}
            className={`absolute ${shape.color} opacity-20 border-3 border-brutal-black`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${randomX}%`,
              top: `${randomY}%`,
              borderRadius: shape.type === "circle" ? "50%" : "0%",
            }}
            initial={{
              rotate: randomRotate,
              scale: 0,
            }}
            animate={{
              rotate: [randomRotate, randomRotate + 360],
              y: [0, -30, 0],
              scale: [0, 1, 1],
            }}
            transition={{
              duration: 8,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
