import { Hero } from './components/Hero';
import { Chapter } from './components/Chapter';
import { Footer } from './components/Footer';
import { chapters } from './content';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scrolling effect for the whole page could be added here with lenis,
  // but framer-motion is handling the component level animations.

  return (
    <div className="bg-oman-sky min-h-screen selection:bg-oman-rock/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-oman-rock z-50 origin-left"
        style={{ scaleX }}
      />

      <Hero />

      <main className="relative z-10">
        {chapters.map((chapter, index) => (
          <Chapter
            key={chapter.id}
            {...chapter}
            index={index}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
