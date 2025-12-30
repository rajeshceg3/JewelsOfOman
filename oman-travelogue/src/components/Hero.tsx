import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-oman-dark">
      <div className="absolute inset-0 z-0">
         <motion.div
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 2.5, ease: "easeOut" }}
           className="w-full h-full"
         >
           <img
             src="https://images.unsplash.com/photo-1518182170546-0766ce6fec56?q=80&w=2940&auto=format&fit=crop"
             alt="Oman Desert"
             className="w-full h-full object-cover opacity-60"
           />
           {/* Dark overlay for contrast */}
           <div className="absolute inset-0 bg-black/20"></div>
         </motion.div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-oman-sand/90 font-sans"
        >
          Travelogue No. 1
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-oman-sky tracking-tight"
        >
          Oman
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="h-[60px] w-[1px] bg-oman-sand/40 mx-auto mt-12"
        ></motion.div>
      </div>
    </header>
  );
};
