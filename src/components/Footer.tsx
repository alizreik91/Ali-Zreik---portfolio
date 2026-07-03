import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="py-12 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12 select-none text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left text-[#B8B8B8]/40">
          <span>ALI ZREIK © 2026</span>
          <span className="hidden md:inline text-white/5">|</span>
          <span className="tracking-widest">LUXURY BRANDING SYSTEMS</span>
        </div>

        {/* Right Side: Back to Top Trigger */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 border border-white/5 hover:border-[#D4AF37]/30 bg-[#111111]/80 rounded-full text-[#B8B8B8] hover:text-white transition-all duration-300 cursor-pointer group"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="h-3.5 w-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
}
