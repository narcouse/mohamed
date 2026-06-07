import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Calendar, User, Tag, ArrowUpRight, X, ExternalLink, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Website Development', 'Digital Marketing', 'SEO Optimization', 'Branding & Identity', 'Portfolio Management'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-charcoal-900 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase">
            Luxury Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold text-white tracking-tight leading-none">
            Proven Performance Records
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-teal to-brand-teal-light mx-auto rounded-full" />
          <p className="font-sans text-slate-400 font-light text-base sm:text-lg leading-relaxed pt-1">
            An exclusive look into our high-ticket case studies demonstrating concrete ROI metrics, clean architectures, and retail transitions.
          </p>
        </div>

        {/* Filter Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-xl font-display text-xs font-medium cursor-pointer transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-brand-teal to-brand-teal-light text-white shadow-lg shadow-brand-teal/15 scale-102 border border-brand-teal/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Portfolio Grid with Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-brand-teal/40 transition-all duration-350 flex flex-col h-full"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Thumbnail Area with Hover Scale */}
                <div className="h-56 relative overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-navy-950/60 opacity-60 group-hover:opacity-30 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-navy-950/80 backdrop-blur-md border border-white/10 rounded-lg font-display text-[10px] font-semibold text-brand-teal-light uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Absolute Hover Action Display Arrow */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-950/40 backdrop-blur-sm">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white text-navy-950 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <ArrowUpRight className="w-5 h-5 font-bold" />
                    </motion.div>
                  </div>
                </div>

                {/* Card Descriptions Text blocks */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-teal-light transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-sans text-slate-350 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Core Metrics Grid of project */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5 bg-white/[0.01] p-3 rounded-xl">
                    {project.stats.slice(0, 3).map((stat, statIdx) => (
                      <div key={statIdx} className="text-center">
                        <span className="text-[14px] sm:text-[16px] font-display font-bold text-white block">
                          {stat.value}
                        </span>
                        <span className="text-[9px] font-mono text-slate-450 uppercase tracking-tight block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detailed Lightbox Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="portfolio-case-study-modal"
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy-950/85 backdrop-blur-lg"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-3xl bg-charcoal-900 border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden text-left"
            >
              {/* Close button */}
              <button
                id="close-portfolio-modal-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-450 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Banner visual */}
              <div className="h-56 sm:h-72 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent z-10" />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6 z-20 space-y-1.5">
                  <span className="px-3 py-1 bg-brand-teal text-white rounded-lg font-display text-[9px] font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2.5xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Data Specifications Content Area */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
                {/* Meta details bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-b border-white/5 pb-5">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4.5 h-4.5 text-brand-teal-light" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase block">Client Name</span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4.5 h-4.5 text-brand-teal-light" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase block">Launch Year</span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                    <Tag className="w-4.5 h-4.5 text-brand-teal-light" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-450 uppercase block">Strategy Class</span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>

                {/* Case description details */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-450 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-teal-light" />
                    Case Study Analysis
                  </h4>
                  <p className="font-sans text-slate-350 text-sm font-light leading-relaxed">
                    {selectedProject.fullDetails || selectedProject.description}
                  </p>
                </div>

                {/* Performance Analytics statistics blocks */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-450 uppercase tracking-widest">Attributed Performance</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.stats.map((stat, sidx) => (
                      <div key={sidx} className="bg-navy-950/60 border border-white/5 rounded-xl p-4 text-center space-y-1">
                        <span className="font-display text-xl sm:text-2xl font-bold text-brand-teal-light block">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-sans text-slate-450 font-medium uppercase tracking-wider block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {selectedProject.tags.map((tag, tagidx) => (
                    <span key={tagidx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Modal footer call links */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5">
                  <button
                    id="back-to-portfolio-btn"
                    onClick={() => setSelectedProject(null)}
                    className="py-3 px-5 rounded-xl border border-white/10 text-slate-350 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Go Back
                  </button>
                  <a
                    id="case-study-live-check-link"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-teal-light text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:scale-102 transition-transform duration-300"
                  >
                    Discuss Similar Metrics
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
