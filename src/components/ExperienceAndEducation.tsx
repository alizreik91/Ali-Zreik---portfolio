import { motion } from 'motion/react';
import { experienceData, educationData } from '../data';
import { Briefcase, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';

export default function ExperienceAndEducation() {
  return (
    <section id="experience" className="py-24 md:py-36 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      {/* Background radial effects */}
      <div className="absolute bottom-[20%] right-[-10%] w-[30vw] h-[30vw] bg-[#D4AF37]/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
            03 / JOURNEY
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
            Experience & Education
          </h2>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Professional Timeline (Nova) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                <Briefcase className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium">Professional Career</h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
              {experienceData.map((exp, index) => {
                return (
                  <motion.div
                    key={exp.role + exp.company + index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Timeline Dot Indicator */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#D4AF37] flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                      <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#D4AF37]" />
                    </div>

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-baseline gap-2 mb-3">
                      <span className="font-serif text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {exp.role}
                      </span>
                      {exp.company && (
                        <>
                          <span className="text-[#B8B8B8]/40 font-serif text-sm">at</span>
                          <span className="text-sm font-semibold tracking-wider text-white bg-white/5 px-2.5 py-0.5 rounded-md">
                            {exp.company}
                          </span>
                        </>
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#B8B8B8]/60 ml-auto pt-1 md:pt-0">
                        <Calendar className="h-3 w-3 text-[#D4AF37]" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-3 mt-4">
                      {exp.responsibilities.map((resp, idx) => {
                        // Split title from description if colon is present
                        const parts = resp.split(': ');
                        return (
                          <li key={idx} className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed font-light flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-[#D4AF37]/80 shrink-0" />
                            <span>
                              {parts.length > 1 ? (
                                <>
                                  <strong className="text-white font-medium">{parts[0]}:</strong>{' '}
                                  {parts[1]}
                                </>
                              ) : (
                                resp
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic & Education Block */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <GraduationCap className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-white font-medium">Academic Foundation</h3>
              </div>

              {educationData.map((edu, index) => {
                return (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="p-8 bg-[#111111] border border-white/5 hover:border-[#D4AF37]/20 rounded-2xl relative overflow-hidden group transition-all duration-300 shadow-xl"
                  >
                    <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-white/2 rounded-full filter blur-xl transition-all duration-700 group-hover:scale-125" />

                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="font-serif text-2xl font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono tracking-widest text-[#B8B8B8]/60 uppercase block mt-1.5">
                          {edu.institution}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/10">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-[#B8B8B8] leading-relaxed font-light mt-6 border-t border-white/5 pt-4">
                      {edu.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Design Quote Box */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#181818] to-[#111111] border border-white/5 flex flex-col justify-between"
            >
              <span className="text-4xl font-serif text-[#D4AF37] select-none leading-none">“</span>
              <p className="text-xs md:text-sm italic text-[#B8B8B8] font-light leading-relaxed mb-4">
                Design is not just what it looks like and feels like. Design is how it works. I strip away the noise to let the pure, functional message speak clearly.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-px w-6 bg-[#D4AF37]" />
                <span className="text-[10px] font-mono tracking-wider text-white uppercase">Ali Zreik Philosophy</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
