"use client";

import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 1 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: custom,
      },
    }),
  };

  const child = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const rocketAnimation = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        opacity: {
          duration: 0.1,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.1,
        },
      },
    },
  };

  return (
    <main className="main home">
      <section className="home-section">
        <motion.h1
          variants={container}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          {"Hello World!".split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          variants={container}
          custom={1.2}
          initial="hidden"
          animate="visible"
        >
          {"My name is".split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
          <br />
          {"Chaim Triebitz".split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.h3
          variants={container}
          custom={2.4}
          initial="hidden"
          animate="visible"
        >
          {"I'm a Fullstack Developer".split("").map((letter, index) => (
            <motion.span key={index} variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.h3>
        <motion.p
          variants={container}
          custom={3.6}
          initial="hidden"
          animate="visible"
        >
          {"I build modern, state-of-the-art, performant   web   applications, using  the  very  latest and  best stack technologies."
            .split("")
            .map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter}
              </motion.span>
            ))}
          <motion.span variants={rocketAnimation} className="rocket">
            🚀
          </motion.span>
        </motion.p>
      </section>
    </main>
  );
}
