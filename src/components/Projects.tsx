import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { 
  ArrowUpRight, 
  X, 
  Sparkles, 
  FolderKanban, 
  CheckSquare, 
  Calendar, 
  Palette,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('All');

  // Dynamically extract categories
  const categories = ['All', 'Social Media Poster', 'Logo Design'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(proj => 
        proj.category.toLowerCase().includes(filter.toLowerCase()) ||
        proj.title.toLowerCase().includes(filter.toLowerCase())
      );

  // Navigation handlers
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    } else {
      setSelectedProject(filteredProjects[0]); // wrap around
    }
    setIsZoomed(false); // Reset zoom on transition
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    } else {
      setSelectedProject(filteredProjects[filteredProjects.length - 1]); // wrap around
    }
    setIsZoomed(false); // Reset zoom on transition
  };

  // Keyboard Navigation Events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          setIsZoomed(false);
        } else {
          setSelectedProject(null);
        }
      }
      
      if (selectedProject) {
        if (e.key === 'ArrowRight') {
          handleNextProject();
        } else if (e.key === 'ArrowLeft') {
          handlePrevProject();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isLightboxOpen, filteredProjects]);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] left-[5%] w-[40vw] h-[40vw] bg-[#D4AF37]/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
              05 / BRAND ARCHIVE
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
              Selected Works
            </h2>
          </div>

          {/* Filtering bar */}
          <div className="flex flex-wrap gap-2 p-1 bg-[#111111] border border-white/5 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* EXACTLY 9 Premium Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between bg-[#111111] rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-[#D4AF37]/30 hover:shadow-2xl hover:shadow-[#D4AF37]/5 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with Hover zoom & Overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181818]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Dark mask overlay on hover */}
                  <div className="absolute inset-0 bg-[#080808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider text-white uppercase px-1">View Case Study</span>
                      <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Top indicators */}
                  <div className="absolute top-4 left-4 flex justify-between right-4 pointer-events-none">
                    <span className="text-[10px] font-mono text-white bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37] bg-[#080808]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                      PROJECT {project.id}
                    </span>
                  </div>
                </div>

                {/* Info Text Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-[#111111] relative z-10">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#B8B8B8] font-light leading-relaxed tracking-wide line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Button Section */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {project.toolsUsed.slice(0, 2).map((tool, idx) => (
                        <span key={idx} className="text-[9px] font-mono text-[#B8B8B8]/40 bg-white/5 px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] group-hover:text-white flex items-center gap-1 transition-colors duration-300"
                    >
                      View Details
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Detailed Drawer Overlay (Modal) */}
        <AnimatePresence>
          {selectedProject && !isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Area Close Button */}
                <div className="absolute top-6 right-6 z-10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-3 rounded-full bg-[#080808]/80 hover:bg-[#D4AF37] hover:text-black text-[#B8B8B8] transition-all duration-300 cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Column: Image Showcase (Beautifully uncropped, with clear fullscreen tap highlight) */}
                  <div 
                    className="relative aspect-[4/5] md:aspect-auto md:min-h-[500px] bg-[#0c0c0c] flex items-center justify-center p-6 cursor-zoom-in group/img overflow-hidden"
                    onClick={() => setIsLightboxOpen(true)}
                  >
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[450px] md:max-h-[550px] w-auto h-full object-contain rounded-lg shadow-xl transition-all duration-500 group-hover/img:scale-[1.02]"
                    />
                    
                    {/* Hover Overlay indicating zoom action */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#D4AF37]">
                        <Maximize2 className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                        Click to view fullscreen
                      </span>
                    </div>

                    {/* Gradient frame */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                  </div>

                  {/* Right Column: Detailed Text */}
                  <div className="p-8 md:p-12 flex flex-col justify-between bg-[#111111]">
                    <div>
                      {/* Project Index / Meta */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3 text-xs font-mono text-[#D4AF37]">
                          <FolderKanban className="h-4 w-4" />
                          <span>PROJECT {selectedProject.id}</span>
                          <span className="text-[#B8B8B8]/30">•</span>
                          <span>{selectedProject.year}</span>
                        </div>
                        
                        {/* Quick navigation arrows inside modal */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={handlePrevProject}
                            className="p-1.5 rounded-md bg-white/5 hover:bg-[#D4AF37] hover:text-black text-[#B8B8B8] transition-colors"
                            title="Previous Project (Left Arrow)"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={handleNextProject}
                            className="p-1.5 rounded-md bg-white/5 hover:bg-[#D4AF37] hover:text-black text-[#B8B8B8] transition-colors"
                            title="Next Project (Right Arrow)"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <h3 className="font-serif text-3xl md:text-4xl text-white font-medium mb-3">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#D4AF37] uppercase tracking-wider font-mono mb-6">
                        {selectedProject.category}
                      </p>

                      <p className="text-sm text-[#B8B8B8] font-light leading-relaxed mb-8 border-b border-white/5 pb-6">
                        {selectedProject.description}
                      </p>

                      {/* Execution Details Bullet Checklist */}
                      <div className="space-y-3.5 mb-8">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8]/60 mb-2">
                          Project Objectives & Scope:
                        </h4>
                        {selectedProject.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#B8B8B8] leading-relaxed font-light">
                            <CheckSquare className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata Footer */}
                    <div className="border-t border-white/5 pt-6 flex flex-wrap gap-4 items-center justify-end mt-auto">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsLightboxOpen(true)}
                          className="px-4 py-2 bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-lg text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                        >
                          Fullscreen View
                        </button>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-xs font-mono uppercase tracking-widest text-[#B8B8B8] hover:text-white transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Immersive Fullscreen Lightbox Overlay */}
        <AnimatePresence>
          {isLightboxOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex flex-col justify-between p-4 bg-[#050505]/98 backdrop-blur-xl select-none"
              onClick={() => {
                setIsLightboxOpen(false);
                setIsZoomed(false);
              }}
            >
              {/* Top Controls Area */}
              <div 
                className="w-full flex items-center justify-between p-4 md:p-6 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <h4 className="font-serif text-xl md:text-2xl text-white font-medium">
                    {selectedProject.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest mt-1">
                    {selectedProject.category} • PROJECT {selectedProject.id}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Zoom Status Toggle Indicator */}
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider cursor-pointer"
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="h-4 w-4 text-[#D4AF37]" />
                        <span className="hidden sm:inline">Zoom Out</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="h-4 w-4 text-[#D4AF37]" />
                        <span className="hidden sm:inline">Zoom In</span>
                      </>
                    )}
                  </button>

                  {/* Close Lightbox */}
                  <button
                    onClick={() => {
                      setIsLightboxOpen(false);
                      setIsZoomed(false);
                    }}
                    className="p-3 rounded-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black transition-all border border-[#D4AF37]/20 cursor-pointer"
                    title="Close Fullscreen (Esc)"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport Area */}
              <div 
                className="flex-1 w-full flex items-center justify-center overflow-auto py-4 relative"
                onClick={() => {
                  setIsLightboxOpen(false);
                  setIsZoomed(false);
                }}
              >
                {/* Navigation Left (Absolute Position overlay) */}
                <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevProject();
                    }}
                    className="p-3 md:p-4 rounded-full bg-[#080808]/80 hover:bg-[#D4AF37] text-white hover:text-black border border-white/5 transition-all shadow-lg shadow-black/50 cursor-pointer"
                    title="Previous (Arrow Left)"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </div>

                {/* The Uncropped High Resolution Image with dynamic zoom */}
                <div 
                  className={`relative max-w-full max-h-full flex items-center justify-center transition-all duration-300 ${
                    isZoomed ? 'overflow-auto cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                >
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className={`transition-all duration-300 ease-out select-none ${
                      isZoomed 
                        ? 'max-h-[160vh] md:max-h-[220vh] w-auto max-w-none rounded-lg shadow-2xl' 
                        : 'max-h-[72vh] md:max-h-[78vh] w-auto max-w-[92vw] md:max-w-[85vw] object-contain rounded-lg shadow-2xl'
                    }`}
                  />
                </div>

                {/* Navigation Right (Absolute Position overlay) */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextProject();
                    }}
                    className="p-3 md:p-4 rounded-full bg-[#080808]/80 hover:bg-[#D4AF37] text-white hover:text-black border border-white/5 transition-all shadow-lg shadow-black/50 cursor-pointer"
                    title="Next (Arrow Right)"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Lightbox Footer Navigation Context */}
              <div 
                className="w-full text-center p-4 md:p-6 z-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-xs text-[#B8B8B8] font-light max-w-xl mx-auto leading-relaxed pointer-events-auto">
                  {selectedProject.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-3 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest pointer-events-auto">
                  <span>Use Keyboard keys ← and → to navigate • ESC to close</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

