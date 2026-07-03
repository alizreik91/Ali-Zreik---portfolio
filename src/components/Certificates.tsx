import { motion } from 'motion/react';
import { certificatesData } from '../data';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      {/* Background glow elements */}
      <div className="absolute top-[20%] left-[15%] w-[20vw] h-[20vw] bg-[#D4AF37]/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
              04 / CREDENTIALS
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
              Professional Certificates
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#B8B8B8] max-w-xs font-light tracking-wide leading-relaxed">
            Continuous development and mastery of cutting-edge creative standards and industry-leading design software.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, index) => {
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="p-6 bg-[#111111]/90 border border-white/5 rounded-2xl transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-2xl hover:shadow-black/70 group relative overflow-hidden flex flex-col justify-between min-h-[200px]"
              >
                {/* Tech Badge Index */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-white/5 rounded-xl group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] text-[#B8B8B8] transition-all duration-300">
                    <Award className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#B8B8B8]/30 tracking-widest uppercase">
                    ID-{(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Certificate Details */}
                <div>
                  <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#B8B8B8]/60 mt-1.5 font-sans font-light">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer and verification check */}
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-[#B8B8B8]/40">
                  <span className="uppercase tracking-wider">YEAR: {cert.year}</span>
                  <div className="flex items-center gap-1 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-300">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
