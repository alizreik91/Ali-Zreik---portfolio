import { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import { Skill } from '../types';
import { Image, PenTool, Sparkles, Film, Figma, BookOpen, Layers, Video, FileText, BarChart2 } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Creative Software' | 'Design' | 'Office & Productivity'>('All');

  const categories = ['All', 'Creative Software', 'Design', 'Office & Productivity'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Map icon name to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Image': return <Image className="h-5 w-5 text-[#D4AF37]" />;
      case 'PenTool': return <PenTool className="h-5 w-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="h-5 w-5 text-[#D4AF37]" />;
      case 'Film': return <Film className="h-5 w-5 text-[#D4AF37]" />;
      case 'Figma': return <Figma className="h-5 w-5 text-[#D4AF37]" />;
      case 'BookOpen': return <BookOpen className="h-5 w-5 text-[#D4AF37]" />;
      case 'Layers': return <Layers className="h-5 w-5 text-[#D4AF37]" />;
      case 'Video': return <Video className="h-5 w-5 text-[#D4AF37]" />;
      case 'FileText': return <FileText className="h-5 w-5 text-[#D4AF37]" />;
      case 'BarChart': return <BarChart2 className="h-5 w-5 text-[#D4AF37]" />;
      default: return <PenTool className="h-5 w-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      <div className="absolute top-[10%] left-[-5%] w-[25vw] h-[25vw] bg-white/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
              02 / CAPABILITIES
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
              The Creative Arsenal
            </h2>
          </div>

          {/* Luxury Categories Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-[#111111] border border-white/5 rounded-full self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: Skill, index: number) => {
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-[#111111]/80 border border-white/5 rounded-2xl hover:border-[#D4AF37]/20 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-500" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/5 transition-colors duration-300">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white">{skill.name}</h3>
                      <span className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs font-medium text-[#D4AF37]">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
