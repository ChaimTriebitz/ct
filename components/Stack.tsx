"use client";
import { svgMap } from "@/assets";
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
      svgMap.stack.reactjs,
      svgMap.stack.nextjs,
      svgMap.stack.mongodb,
      svgMap.stack.nodejs,
      svgMap.stack.scss,
      svgMap.stack.css,
      svgMap.stack.html,
      svgMap.stack.js,
      svgMap.stack.express,
      svgMap.stack.typescript,
      svgMap.stack.git,
      svgMap.stack.github,
      svgMap.stack.docker,
      svgMap.stack.npm,
      svgMap.stack.stripe,
      svgMap.stack.redux,
      svgMap.stack.redis,
      svgMap.stack.prisma,
      svgMap.stack.json,
      
   ];

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
                  <motion.div key={index} variants={item}>
                     {icon}
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>
   );
}
