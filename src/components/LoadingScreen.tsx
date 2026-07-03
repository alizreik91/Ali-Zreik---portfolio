import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600); // Small pause for UX feel
          return 100;
        }
        // Random organic increments
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080808] p-8 md:p-16 select-none"
      >
        {/* Header decoration */}
        <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#B8B8B8]/40">
          <span>CREATIVE PORTFOLIO 2026</span>
          <span>ALI ZREIK ©</span>
        </div>

        {/* Center Name & Visual Title */}
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.3em] uppercase">Visual Storyteller</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-5xl md:text-8xl font-medium tracking-tight leading-none text-white"
            >
              ALI ZREIK
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.p 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-sm font-light text-[#B8B8B8] max-w-md tracking-wide"
            >
              Immersive Branding, Packaging, and Fine Graphic Design Systems.
            </motion.p>
          </div>
        </div>

        {/* Bottom Progress Block */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-t border-white/5 pt-8">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-[#B8B8B8]/40 tracking-wider">ESTABLISHING FRAMEWORKS</span>
            <span className="text-sm font-mono text-white/80 mt-1">
              {progress < 40 ? 'Synthesizing layout grid...' : progress < 80 ? 'Aligning premium pixels...' : 'Curating creative canvas...'}
            </span>
          </div>
          <div className="flex items-baseline gap-2 self-end md:self-auto">
            <span className="font-serif text-7xl md:text-9xl font-light text-[#D4AF37] leading-none select-none">
              {progress.toString().padStart(3, '0')}
            </span>
            <span className="text-xl font-mono text-[#B8B8B8]/40">%</span>
          </div>
        </div>

        {/* Animated slide background indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </motion.div>
    </AnimatePresence>
  );
}
