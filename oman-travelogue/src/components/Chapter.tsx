import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { clsx } from 'clsx';

interface ChapterProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  alignment: 'left' | 'right' | 'center';
  index: number;
}

export const Chapter: React.FC<ChapterProps> = ({ id, title, subtitle, content, image, alignment }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Smooth out the parallax
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, mass: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen relative flex items-center justify-center py-24 overflow-hidden"
    >
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-oman-rock/20">
        <motion.div
          style={{ y: smoothY, scale }}
          className="absolute inset-0 w-full h-[120%]"
        >
           <img
             src={image}
             alt={subtitle}
             className="w-full h-full object-cover opacity-100 brightness-[0.9] filter contrast-[0.9] saturate-[0.8]"
           />
           {/* Gradient Overlays for readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-oman-sky/10 via-transparent to-oman-sky/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className={clsx(
        "relative z-10 w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center",
        alignment === 'left' ? "md:text-left" : alignment === 'right' ? "md:text-right" : "text-center md:text-center"
      )}>
        <motion.div
          style={{ opacity }}
          className={clsx(
            "col-span-1 md:col-span-6 flex flex-col space-y-8 p-8 md:p-12 bg-oman-sky/90 backdrop-blur-md border border-oman-rock/10 shadow-2xl rounded-sm",
            alignment === 'left' ? "md:col-start-2" : alignment === 'right' ? "md:col-start-6" : "md:col-start-4 md:col-span-6"
          )}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-oman-rock font-sans opacity-80">{subtitle}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-oman-dark leading-tight">
            {title}
          </h2>
          <div className="w-12 h-[1px] bg-oman-rock/40 my-6 self-start mx-0"
               style={{ alignSelf: alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start' }}
          ></div>
          <p className="text-lg md:text-xl font-serif text-oman-dark/80 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
