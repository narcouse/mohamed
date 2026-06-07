import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareCode } from 'lucide-react';

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      className="relative py-24 bg-navy-950 border-t border-white/5 overflow-hidden"
    >
      {/* Absolute decorative blurred balls */}
      <div className="absolute top-1/2 left-[15%] w-72 h-72 bg-brand-teal/8 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[10%] w-60 h-60 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase">
            Client Verification
          </span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold text-white tracking-tight leading-none">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-teal to-brand-teal-light mx-auto rounded-full" />
          <p className="font-sans text-slate-400 font-light text-base sm:text-lg leading-relaxed pt-1">
            Trusted by businesses for exceptional digital solutions. Read their verified direct-experience commentary.
          </p>
        </div>

        {/* Carousel Showcase Layout Frame */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-10">
          
          <div className="relative overflow-hidden glass-panel rounded-3xl p-8 sm:p-12 border-white/10 shadow-2xl relative">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                {/* Rating Stars Grid */}
                <div className="flex items-center space-x-1">
                  {[...Array(REVIEWS[index].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold-light fill-brand-gold-light" />
                  ))}
                </div>

                {/* Main feedback content quote */}
                <p className="font-sans text-white text-base sm:text-lg font-light leading-relaxed italic">
                  "{REVIEWS[index].content}"
                </p>

                {/* Author Credentials bar */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-teal/40 shrink-0">
                    <img
                      src={REVIEWS[index].avatar}
                      alt={REVIEWS[index].author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm sm:text-base">
                      {REVIEWS[index].author}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-slate-400 font-light">
                      {REVIEWS[index].role} —{' '}
                      <span className="text-brand-teal-light font-medium font-mono">
                        {REVIEWS[index].company}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Buttons Control Arrows */}
          <div className="absolute top-1/2 -left-3 sm:-left-6 transform -translate-y-1/2 z-20">
            <button
              id="carousel-prev"
              onClick={prevReview}
              className="w-11 h-11 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-teal transition-all duration-300 hover:scale-105 active:scale-0.95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-3 sm:-right-6 transform -translate-y-1/2 z-20">
            <button
              id="carousel-next"
              onClick={nextReview}
              className="w-11 h-11 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-teal transition-all duration-300 hover:scale-105 active:scale-0.95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Extended Carousel Pagination Bullet Points indicators */}
        <div className="flex items-center justify-center space-x-2 pt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              id={`carousel-bullet-${i}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-400 ${
                index === i ? 'w-8 bg-brand-teal-light' : 'w-2.5 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Extra Bottom Trust Boarding Banner Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto glass-panel p-6 sm:p-8 rounded-2xl border-white/5 flex flex-col md:flex-row items-center md:justify-between text-left gap-6"
        >
          <div className="space-y-1 w-full md:w-2/3">
            <span className="font-mono text-[10px] font-bold text-brand-gold-light uppercase tracking-wider block">
              Continuous Delivery Checklist
            </span>
            <h3 className="font-display font-semibold text-lg text-white">
              Ready to construct similar digital conversion metrics?
            </h3>
            <p className="font-sans text-xs text-slate-450 font-light leading-relaxed">
              We coordinate with leading financial, retail, and tech enterprises to streamline operational experiences.
            </p>
          </div>

          <a
            id="read-testimonials-cta-button"
            href="#contact"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl border border-white/15 text-white hover:border-brand-teal hover:bg-white/5 font-display text-xs font-semibold uppercase tracking-wider text-center transition-all duration-300"
          >
            Review Strategic Term Sheets
          </a>
        </motion.div>

      </div>
    </section>
  );
}
