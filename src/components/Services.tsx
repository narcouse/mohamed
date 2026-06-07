import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Megaphone, TrendingUp, Palette, PenTool, Briefcase, Plus, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { useNavigate } from 'react-router-dom';

// Lookup map for Lucide icons
const iconMap: Record<string, any> = {
  Code,
  Megaphone,
  TrendingUp,
  Palette,
  PenTool,
  Briefcase
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleBookService = (serviceId: string) => {
    setSelectedService(null);
    navigate('/contact', { state: { initialService: serviceId } });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-navy-950 border-t border-white/5"
    >
      {/* Decorative light glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase">
            Service Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold text-white tracking-tight leading-none">
            Digital Engineering Solutions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-teal to-brand-teal-light mx-auto rounded-full" />
          <p className="font-sans text-slate-400 font-light text-base sm:text-lg leading-relaxed pt-2">
            We provide a complete spectrum of high-end business growth resources, ensuring flawless implementation and strategic ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass-panel rounded-2xl overflow-hidden hover:border-brand-teal/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-brand-teal/5"
              >
                {/* Fixed aspect ratios for service thumbnail images */}
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 logic-overlay z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Category icon pill */}
                  <div className="absolute top-4 left-4 z-20 w-11 h-11 rounded-xl bg-navy-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-brand-teal-light" />
                  </div>
                </div>

                {/* Content body description */}
                <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-white group-hover:text-brand-teal-light transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-sans text-slate-350 text-xs sm:text-sm font-light leading-relaxed flex-grow">
                    {service.shortDescription}
                  </p>
                  
                  {/* Quick result metrics banner */}
                  <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-450">{service.resultsTitle}</span>
                    <span className="text-brand-teal-light font-bold">{service.resultsMetric}</span>
                  </div>

                  {/* Interactive Trigger CTA Button */}
                  <button
                    id={`btn-service-learn-${service.id}`}
                    onClick={() => handleLearnMore(service)}
                    className="mt-2 w-full flex items-center justify-center gap-1.5 py-3 rounded-xl border border-white/10 text-white font-display text-xs font-semibold uppercase tracking-wider group-hover:bg-white/5 transition-all duration-300 hover:border-brand-teal/50"
                  >
                    Learn Capabilities
                    <Plus className="w-4 h-4 text-brand-teal-light transition-transform group-hover:rotate-90 duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal Details Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div
            id="service-details-modal"
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-navy-950/85 backdrop-blur-lg"
            />

            {/* Modal Body card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-2xl bg-charcoal-900 border border-white/10 rounded-2xl shadow-2xl z-10 overflow-hidden text-left"
            >
              {/* Close icon button */}
              <button
                _id="close-services-modal"
                id="close-services-modal-btn"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-navy-950/85 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-450 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-48 sm:h-64 relative border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent z-10" />
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/85 backdrop-blur-md flex items-center justify-center">
                    {(() => {
                      const IconComp = iconMap[selectedService.iconName] || Code;
                      return <IconComp className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Full description copy */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-450 uppercase tracking-widest">Capabilities Context</h4>
                  <p className="font-sans text-slate-350 text-sm font-light leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Key feature checkboxes list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-slate-450 uppercase tracking-widest">Technical Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal-light mt-0.5 shrink-0" />
                        <span className="font-sans text-slate-200 text-xs sm:text-sm font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proof Metrics banner */}
                <div className="bg-navy-950/60 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-[10px] font-mono text-slate-450 uppercase tracking-widest block">Expected ROI Metric</span>
                    <span className="font-sans text-slate-300 text-xs sm:text-sm">{selectedService.resultsTitle}</span>
                  </div>
                  <div className="w-full sm:w-auto text-left sm:text-right">
                    <span className="font-display text-lg sm:text-xl font-bold text-brand-teal-light">
                      {selectedService.resultsMetric}
                    </span>
                  </div>
                </div>

                {/* Actions paths */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    id="modal-cta-book"
                    onClick={() => handleBookService(selectedService.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-teal to-brand-teal-light text-white font-display text-sm font-semibold uppercase tracking-wider hover:scale-1.02 transition-transform duration-300"
                  >
                    Select Capability
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    id="modal-cta-dismiss"
                    onClick={handleCloseModal}
                    className="py-3.5 px-6 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-display text-sm font-semibold uppercase tracking-wider transition-colors"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
