import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium server-side endpoint response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000); // Reset toast/banner after 6 seconds
    }, 1500);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('zreikali222@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#080808] border-t border-white/5 relative overflow-hidden px-6 md:px-12">
      {/* Background soft glowing blur */}
      <div className="absolute bottom-[10%] left-[10%] w-[35vw] h-[35vw] bg-[#D4AF37]/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Technical Coordinates & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block mb-3">
                06 / INQUIRIES
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                Let's Craft Something Divine.
              </h2>
              <p className="text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide mb-12 max-w-md">
                Have a premium branding campaign, social media direction, or layout typography inquiry? Get in touch today. I'm available for global freelance and full-time creative agency commissions.
              </p>

              {/* Direct Info list with micro-actions */}
              <div className="space-y-6">
                {/* Email detail with copy */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest block">
                      Direct Email
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href="mailto:zreikali222@gmail.com"
                        className="text-sm md:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors"
                      >
                        zreikali222@gmail.com
                      </a>
                      <button
                        onClick={copyEmailToClipboard}
                        className="p-1 rounded hover:bg-white/5 text-[#B8B8B8] hover:text-white transition-colors cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copiedEmail ? <Check className="h-3.5 w-3.5 text-[#D4AF37]" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest block">
                      Secure Phone
                    </span>
                    <a
                      href="tel:+96181257231"
                      className="text-sm md:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors block mt-0.5"
                    >
                      +961 81 257 231
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest block">
                      Design Studio
                    </span>
                    <span className="text-sm md:text-base font-semibold text-white block mt-0.5">
                      Beirut, Lebanon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability indicator */}
            <div className="mt-16 border-t border-white/5 pt-8 flex items-center gap-3 text-xs font-mono text-[#B8B8B8]/60">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>CURRENTLY BOOKING FOR MID-2026 COHORTS</span>
            </div>
          </div>

          {/* Right Column: Premium Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-[#111111]/90 border border-white/5 rounded-3xl relative overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center flex flex-col items-center justify-center min-h-[350px]"
                  >
                    <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] mb-6">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="font-serif text-2xl text-white font-medium mb-3">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-xs md:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide max-w-sm mb-6">
                      Thank you for initiating communication. Your message has been routed to Ali Zreik's private desk. You will receive a response within 24 working hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-white hover:bg-white/5 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Raymond V."
                          className="w-full bg-[#181818] border border-white/5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 outline-none p-3.5 rounded-xl text-sm text-white font-sans transition-all"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g., design@agency.com"
                          className="w-full bg-[#181818] border border-white/5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 outline-none p-3.5 rounded-xl text-sm text-white font-sans transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g., Brand Identity Redesign Campaign"
                        className="w-full bg-[#181818] border border-white/5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 outline-none p-3.5 rounded-xl text-sm text-white font-sans transition-all"
                      />
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-mono text-[#B8B8B8]/40 uppercase tracking-widest">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your graphic design timeline, style demands, or layout guidelines here..."
                        className="w-full bg-[#181818] border border-white/5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 outline-none p-3.5 rounded-xl text-sm text-white font-sans transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-mono text-xs uppercase tracking-widest font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting Inquiries...' : 'Transmit Message'}
                      <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
