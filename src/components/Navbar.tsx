import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/75 backdrop-blur-premium border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-baseline gap-1.5 text-left focus:outline-none group cursor-pointer"
          >
            <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
              ALI ZREIK
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors duration-300 cursor-pointer focus:outline-none ${
                      isActive ? 'text-[#D4AF37]' : 'text-[#B8B8B8] hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white/5 rounded-full z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Accent Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-1.5 border border-[#D4AF37]/30 hover:border-[#D4AF37] px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center p-2 text-[#B8B8B8] hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-[#080808]/98 backdrop-blur-xl flex flex-col justify-center p-8"
          >
            <div className="flex flex-col gap-6 items-start">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase">NAVIGATION</span>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-serif text-3xl font-medium tracking-tight focus:outline-none"
                  >
                    <span className={`inline-block mr-2 text-xs font-mono text-[#D4AF37]/40`}>
                      {index.toString().padStart(2, '0')}.
                    </span>
                    <span className={isActive ? 'text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1' : 'text-white'}>
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}

              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.4 }}
                onClick={() => scrollToSection('contact')}
                className="mt-6 flex items-center gap-2 border border-[#D4AF37]/40 hover:border-[#D4AF37] px-6 py-3 rounded-full text-sm font-mono uppercase tracking-widest text-[#D4AF37] w-full justify-center"
              >
                Inquire Collaboration
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
