import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Trophy } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Digital Marketing', percentage: 92 },
    { name: 'SEO Optimization', percentage: 88 },
    { name: 'Branding & Identity', percentage: 85 },
    { name: 'Content Strategy', percentage: 87 }
  ];

  const highlights = [
    {
      id: 'high-1',
      title: 'Expert Craftsmanship',
      description: 'We don’t believe in broad templates. Every pixel is written from scratch, aligned with strict standard performance rules.',
      icon: ShieldCheck
    },
    {
      id: 'high-2',
      title: 'Ultra Fast Velocity',
      description: 'Engineered for near-instant rendering. Speed directly preserves conversions, minimizing bounces and boosting scores.',
      icon: Zap
    },
    {
      id: 'high-3',
      title: 'Dedicated Specialists',
      description: 'Our team comprises elite developers, technical SEO operators, and narrative specialists who love coding.',
      icon: Users
    },
    {
      id: 'high-4',
      title: 'Premium Growth',
      description: 'Consistently pushing limits to drive qualified customer flows. Scalable enterprise solutions optimized for ROI.',
      icon: Trophy
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-charcoal-900 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text & Interactive Skill Bars Column */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase">
                Enterprise Credibility
              </span>
              <h2 className="font-display text-3xl sm:text-4.5xl font-bold text-white tracking-tight leading-none">
                Delivering Excellence,<br />
                Securing Results
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full" />
            </div>

            <p className="font-sans text-slate-350 text-base sm:text-lg font-light leading-relaxed">
              MERMO LLC is a professional digital agency dedicated to delivering creative,
              reliable, and high-performance solutions to businesses. Our team combines technical
              expertise and innovation to ensure measurable structural results. We bridge the gap
              between modern aesthetic guidelines and rigorous engineering standards.
            </p>

            {/* Skill Bars animations on scroll */}
            <div className="space-y-5 pt-3">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-display font-medium text-slate-250">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-brand-teal-light font-bold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-brand-teal to-brand-teal-light rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights Grid Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="glass-panel hover:border-brand-teal/40 hover:bg-white/5 p-6 rounded-2xl transition-all duration-300 flex flex-col text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-5 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-all duration-300">
                    <Icon className="w-5.5 h-5.5 text-brand-teal-light group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
