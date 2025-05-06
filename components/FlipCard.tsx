import Image from "next/image";
import { motion } from "framer-motion";
type ImageProps = {
   src: string,
   alt: string,
}

export function FlipCard({ image, children }: { image: ImageProps, children: React.ReactNode }) {
   return (
      <div className="flip-card">
         <div className="content">
            <div className="front">
               <div className="front-content">
                  <Image
                     src={image.src || ''}
                     alt={image.src}
                     fill
                  />
                  
                  <motion.div
                     className="flip-icon"
                     initial={{ opacity: 0.75, scale: 1 }}
                     animate={{
                        opacity: [0.5, 0.75, 0.5], // Fade in and out
                        scale: [1, 1.05, 1], // Grow and shrink the icon
                        transition: {
                           duration: 2,
                           repeat: Infinity,
                           repeatType: "loop", // Continuously loop the animation
                           ease: "easeInOut"
                        }
                     }}
                     whileHover={{
                        opacity: 1,
                     }}

                  >
                  </motion.div>
               </div>
            </div>
            <div className="back">
               <div className="back-content">
                  {children}
               </div>
            </div>
         </div>
      </div>
   )
}
