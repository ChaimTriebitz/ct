"use client";
import { svgs } from "@/assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Stack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: -10,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const icons = [
    svgs.reactjs,
    svgs.nextjs,
    svgs.mongodb,
    svgs.nodejs,
    svgs.scss,
    svgs.css,
    svgs.html,
    svgs.js,
    svgs.expressjs,
  ];

  // Create three copies of the icons for a seamless loop
  const tripledIcons = [...icons, ...icons, ...icons];

  return (
    <div className="stack">
      <motion.div
        className="icons"
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        <motion.div
          className="icons-container"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {tripledIcons.map((icon, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
