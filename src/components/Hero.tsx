import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Play } from 'lucide-react';

export default function Hero() {
  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-28 pb-16 px-6 md:px-12"
    >
      {/* Aesthetic Background Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* High-end Floating Glassmorphic Gradient Elements */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -35, 15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-24 left-[10%] w-[350px] h-[350px] bg-brand-teal/15 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 40, -15, 0],
          scale: [1, 0.98, 1.04, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-[15%] w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="absolute top-1/4 right-[5%] w-[200px] h-[200px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Messaging Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left z-10">
          
          {/* Creative Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/10 border border-brand-teal/20 rounded-full"
          >
            <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal-light">
              Premium Digital Agency
            </span>
          </motion.div>

          {/* Staggered Heading Display */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight text-white"
            >
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-brand-teal-light">
                Business Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed max-w-lg font-light"
            >
              Delivering innovative digital marketing, web development, SEO, and branding solutions tailored for high-end success.
            </motion.p>
          </div>

          {/* Interactive Calls To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 pt-4"
          >
            <button
              id="hero-cta-view-services"
              onClick={() => handleScrollToSection('#services')}
              className="px-8 py-4 bg-brand-gold text-navy-950 hover:bg-brand-gold-light font-bold rounded-xl shadow-xl shadow-brand-gold/10 transition-all cursor-pointer hover:scale-102 active:scale-0.98 text-sm"
            >
              View Services
            </button>
            <button
              id="hero-cta-view-portfolio"
              onClick={() => handleScrollToSection('#portfolio')}
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/45 text-white font-semibold rounded-xl hover:bg-white/5 transition-all text-sm"
            >
              Our Portfolio
            </button>
          </motion.div>

          {/* Subtle Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 border-t border-white/5 w-full grid grid-cols-3 gap-6"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-display font-semibold text-white">99%</div>
              <div className="text-[11px] font-mono text-slate-450 uppercase tracking-wider">Lighthouse Speed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-semibold text-white">4.6x</div>
              <div className="text-[11px] font-mono text-slate-450 uppercase tracking-wider">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-semibold text-white">100%</div>
              <div className="text-[11px] font-mono text-slate-450 uppercase tracking-wider">Client Praise</div>
            </div>
          </motion.div>
        </div>

        {/* Right High-Fidelity Interface Layout Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateY: 12 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="lg:col-span-5 hidden lg:block perspective-1000"
        >
          {/* Glassmorphic interactive agency panel */}
          <div className="relative glass-panel rounded-3xl p-6 shadow-2xl border-white/10 overflow-hidden transform hover:-translate-y-2.5 transition-transform duration-500 group">
            {/* Ambient decorative glowing light behind card */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-teal/40 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-500" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="font-mono text-xs text-slate-400 pl-2">mermo_analytics.sys</span>
              </div>
              <Code className="w-4 h-4 text-brand-teal-light" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-450 uppercase tracking-widest">Active Client Deliverables</div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '94%' }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full"
                  />
                </div>
              </div>

              {/* Dynamic Mock Live Activity Panel */}
              <div className="bg-navy-950/60 rounded-2xl p-4 border border-white/5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display text-white font-medium">Digital Reach Lift</span>
                  <span className="text-xs font-mono font-semibold text-brand-teal-light">+320%</span>
                </div>
                
                {/* Simulated visual bar charts */}
                <div className="flex items-end gap-2.5 h-20 pt-2 px-1">
                  {[35, 55, 45, 75, 60, 95, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-md h-full relative overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.2, delay: 0.8 + (i * 0.1) }}
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-teal/80 to-brand-teal rounded-md"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-[9px] font-mono text-slate-500 px-1 pt-1">
                  <span>MON</span>
                  <span>WED</span>
                  <span>FRI</span>
                  <span>SUN</span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 rounded-2xl p-4 mt-2">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-brand-gold-light fill-brand-gold-light" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-display text-white font-semibold">Corporate Proof Of Concept</div>
                  <div className="text-[10px] font-sans text-slate-400">99.4% Client Validation Checked</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
