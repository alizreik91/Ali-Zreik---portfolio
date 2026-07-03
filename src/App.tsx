import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceAndEducation from './components/ExperienceAndEducation';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Progress
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // IntersectionObserver to sync navbar links
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { 
          // Highlight section when it occupies 40% of the viewport height
          rootMargin: '-30% 0px -40% 0px',
          threshold: 0 
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [isLoading]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#080808] min-h-screen text-white relative selection:bg-[#D4AF37] selection:text-[#080808]"
        >
          {/* Scroll Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
            <div
              className="h-full bg-[#D4AF37] transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Golden Cursor Spotlights Tracker */}
          <CursorGlow />

          {/* Sticky Navigation */}
          <Navbar activeSection={activeSection} />

          {/* Main Portfolio Layout Elements */}
          <main>
            <Hero onScrollTo={handleScrollTo} />
            <About />
            <Skills />
            <ExperienceAndEducation />
            <Projects />
            <Certificates />
            <Contact />
          </main>

          {/* Minimal Elegant Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
