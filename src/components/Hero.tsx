import { motion } from 'motion/react';
import { ArrowDown, Download, Mail, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Simple print handler for CV download
  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#080808] overflow-hidden px-6 md:px-12 pt-24"
    >
      {/* Cinematic Ambient Glow Backdrops */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[10%] right-[15%] w-[45vw] h-[45vw] bg-white/2 rounded-full filter blur-[150px] pointer-events-none animate-float-reverse" />

      {/* Floating Abstract Rings / Geometries (Minimalist Luxury) */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-[#D4AF37]/5 rounded-full pointer-events-none animate-float-slow" />
      <div className="absolute top-[60%] right-[10%] w-12 h-12 border border-[#D4AF37]/10 rounded-full pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      {/* Elegant Technical Grid Background Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Designer Role Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[#B8B8B8] uppercase">
            Available for Select Projects
          </span>
        </motion.div>

        {/* Large Elegant Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-6xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-white select-none leading-none"
          >
            ALI ZREIK
          </motion.h1>
        </div>

        {/* Elegant Profession Indicator */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="text-lg md:text-2xl font-sans font-light tracking-[0.2em] text-[#D4AF37] uppercase"
          >
            Graphic Designer
          </motion.h2>
        </div>

        {/* High-Concept Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-sm md:text-base text-[#B8B8B8] max-w-xl mx-auto font-light leading-relaxed tracking-wide mb-12"
        >
          I create memorable visual identities, premium branding systems and engaging digital experiences that help businesses stand out. Based in Lebanon, serving global visionaries.
        </motion.p>

        {/* Call to Actions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          {/* Main View Work button */}
          <button
            onClick={() => onScrollTo('projects')}
            className="relative px-8 py-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-mono text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 w-full sm:w-auto shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Portfolio
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>

          {/* Download CV button */}
          <button
            onClick={handleDownloadCV}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            Download CV
            <Download className="h-3.5 w-3.5 text-[#D4AF37]" />
          </button>

          {/* Contact button */}
          <button
            onClick={() => onScrollTo('contact')}
            className="px-8 py-4 bg-transparent hover:bg-white/5 text-[#B8B8B8] hover:text-white font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            Contact Me
            <Mail className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => onScrollTo('about')}
        >
          <span className="text-[9px] font-mono tracking-[0.4em] text-[#B8B8B8] uppercase">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
