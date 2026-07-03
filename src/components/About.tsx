import { motion } from 'motion/react';
import { Sparkles, Compass, Eye, Compass as DrawCompass, MapPin, Award } from 'lucide-react';

export default function About() {
  const passions = [
    {
      title: 'Branding Systems',
      desc: 'Formulating consistent visual systems that capture a brand\'s core essence, from typography to physical print specifications.',
      icon: Award,
    },
    {
      title: 'Creative Thinking',
      desc: 'Approaching challenges from non-traditional directions to arrive at unique, distinct solutions that demand attention.',
      icon: Sparkles,
    },
    {
      title: 'Visual Storytelling',
      desc: 'Crafting complex brand narratives and emotional journeys utilizing premium editorial rhythm and structured spacing.',
      icon: Eye,
    },
    {
      title: 'Modern Design & Layout',
      desc: 'Adhering to minimal, Swiss-inspired typographic structures, balanced margins, and elite geometric precision.',
      icon: DrawCompass,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] bg-[#D4AF37]/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3"
          >
            01 / PHILOSOPHY
          </motion.span>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white"
          >
            Aesthetic Harmony, Built with Intent.
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm aspect-[4/5] bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl group"
            >
              {/* Decorative Tech Overlay */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#B8B8B8]/30 tracking-widest uppercase">
                GRAPHIC DESIGNER PORTFOLIO
              </div>
              
              {/* Outer Golden Accents */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full filter blur-xl transition-all duration-700 group-hover:scale-125" />

              {/* Central Geometric Icon Representing Logo Craft */}
              <div className="relative flex-1 flex flex-col items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-dashed border-[#D4AF37]/20 flex items-center justify-center p-4 animate-spin-slow">
                  <div className="w-full h-full rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
                    <span className="font-serif text-3xl font-bold tracking-widest text-[#D4AF37]">AZ</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <span className="text-sm font-semibold tracking-wider text-white">Ali Zreik</span>
                  <div className="flex items-center gap-1 text-[11px] text-[#B8B8B8] font-mono justify-center mt-1">
                    <MapPin className="h-3 w-3 text-[#D4AF37]" />
                    Lebanon
                  </div>
                </div>
              </div>

              {/* Spec Coordinates */}
              <div className="flex justify-between items-center text-[10px] font-mono text-[#B8B8B8]/40 border-t border-white/5 pt-4">
                <span>COORD. 33.8938° N, 35.5018° E</span>
                <span>STATUS: CREATIVE ACT</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl text-white tracking-tight">
                Crafting modern visual narratives that bridge strategic communication and flawless creative execution.
              </h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed font-light tracking-wide">
                I am a Lebanese graphic designer with a profound passion for visual storytelling and attention to detail. I specialize in branding, creative thinking, and modern editorial systems. My work is designed with one goal: to create unforgettable brand ecosystems that establish lasting authority.
              </p>
              <p className="text-sm text-[#B8B8B8] leading-relaxed font-light tracking-wide">
                Every line, margin, font choice, and tone vector is placed with absolute structural intent. No templates, no childish trends—just pure, polished, modern design engineered to help your business stand out from the noise.
              </p>
            </motion.div>

            {/* Passion Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {passions.map((passion, index) => {
                const Icon = passion.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Icon className="h-4 w-4 text-[#D4AF37]" />
                      </div>
                      <h4 className="font-semibold text-sm text-white">{passion.title}</h4>
                    </div>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed font-light">
                      {passion.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
