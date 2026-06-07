import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquareCode, Linkedin, ArrowUpRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-dev',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Parse state from routing if coming from Learn More selectors
  useEffect(() => {
    if (location.state && (location.state as any).initialService) {
      setFormData((prev) => ({
        ...prev,
        service: (location.state as any).initialService
      }));
    }
  }, [location.state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate standard secure backend network latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'web-dev',
        message: ''
      });
    }, 1200);
  };

  return (
    <div
      id="contact-main-page"
      className="min-h-screen bg-navy-950 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Headings */}
        <div className="text-left space-y-4">
          <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase block">
            Initiate Engagement
          </span>
          <h1 className="font-display text-4.5xl sm:text-5.5xl font-bold text-white tracking-tight leading-none">
            Corporate Consultation
          </h1>
          <p className="font-sans text-slate-350 text-base sm:text-lg font-light max-w-2xl">
            Contact MERMO LLC today to grow your business. Discuss specific SLA metrics, custom integrations, or SEO diagnostic crawls.
          </p>
        </div>

        {/* Dual Info panels and Forms Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
          
          {/* Left Column: Coordinates details & embedded map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left h-full">
            
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl text-white">
                HQ Contact Coordinates
              </h3>
              
              {/* Contact lists */}
              <div className="space-y-4 pt-2">
                <a
                  id="mailto-info-link"
                  href="mailto:info@mermoagency.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-brand-teal/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 shrink-0">
                    <Mail className="w-4.5 h-4.5 text-brand-teal-light group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block">Inbound Inquiries</span>
                    <span className="text-sm text-slate-200 font-medium group-hover:text-brand-teal-light transition-colors">info@mermoagency.com</span>
                  </div>
                </a>

                <a
                  id="mailto-sales-link"
                  href="mailto:sales@mermollc.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-brand-teal/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 shrink-0">
                    <Mail className="w-4.5 h-4.5 text-brand-teal-light group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block">Sales Department</span>
                    <span className="text-sm text-slate-200 font-medium group-hover:text-brand-teal-light transition-colors">sales@mermollc.com</span>
                  </div>
                </a>

                <a
                  id="tel-link"
                  href="tel:+14065550190"
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-brand-teal/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 shrink-0">
                    <Phone className="w-4.5 h-4.5 text-brand-teal-light group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block">Main Line</span>
                    <span className="text-sm text-slate-200 font-medium group-hover:text-brand-teal-light transition-colors">+1 (406) 555-0190</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-brand-teal-light" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-450 uppercase block">Office Location</span>
                    <span className="text-sm text-slate-200 font-medium leading-relaxed block">
                      1001 S Main St, Ste 600<br />
                      Kalispell, MT 59901-1498
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-navy-900 relative">
              <iframe
                id="contact-google-map-iframe"
                title="MERMO LLC Headquarters in Kalispell, Montana"
                src="https://maps.google.com/maps?q=1001%20S%20Main%20St,%20Ste%20600,%20Kalispell,%20MT%2059901&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.1) brightness(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-navy-950/90 border border-white/5 backdrop-blur-md flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-teal-light" />
                <span className="text-[9px] font-mono font-semibold uppercase tracking-wider text-white">MERMO LLC Kalispell MT</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border-white/10 shadow-2xl relative overflow-hidden text-left flex flex-col flex-grow">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  /* PRIMARY FORM INSTEAD */
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 flex flex-col flex-grow"
                  >
                    <div className="space-y-1.5">
                      <h3 className="font-display font-semibold text-xl text-white">Strategic Proposal Brief</h3>
                      <p className="font-sans text-xs text-slate-400 font-light">
                        Fill in coordinates below. Our solutions architect will respond within 2 hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-xs font-mono text-slate-405 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Julian Mercer"
                          className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4.5 py-3 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-xs font-mono text-slate-405 uppercase tracking-wide">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="julian@luminary.com"
                          className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4.5 py-3 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-phone" className="text-xs font-mono text-slate-405 uppercase tracking-wide">
                          Contact Phone
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 012-3456"
                          className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4.5 py-3 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                        />
                      </div>

                      {/* Company input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-company" className="text-xs font-mono text-slate-405 uppercase tracking-wide">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Luminary Asset Management"
                          className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4.5 py-3 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all"
                        />
                      </div>
                    </div>

                    {/* Service selectors */}
                    <div className="space-y-2">
                      <label htmlFor="contact-service" className="text-xs font-mono text-slate-405 uppercase tracking-wide bg-transparent">
                        Select Core Service Capability
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4 py-3.5 text-sm text-slate-300 font-medium font-sans transition-all cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-navy-950 text-slate-200">
                            {s.name} (e.g. {s.resultsMetric})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message description */}
                    <div className="space-y-2 flex-grow flex flex-col">
                      <label htmlFor="contact-message" className="text-xs font-mono text-slate-405 uppercase tracking-wide">
                        Project Scope Description *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your objectives, timelines, and technical constraints..."
                        className="w-full bg-navy-950 border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl px-4.5 py-3 text-sm text-slate-200 placeholder-slate-600 font-sans transition-all flex-grow resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-brand-teal to-brand-teal-light text-white font-display text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-brand-teal/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-brand-teal/35 hover:scale-1.01"
                    >
                      {loading ? (
                        <div className="w-5.5 h-5.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      ) : (
                        <>
                          Transmit RFP Brief
                          <Send className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* SUCCESS TRANSITION FEEDBACK BOARD */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-6 flex-grow"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-8 h-8 text-brand-teal-light" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-white">Transmission Secured</h4>
                      <div className="text-[11px] font-mono text-brand-teal-light font-bold uppercase tracking-widest">Transaction Code: MERMO-RFP-38B1</div>
                    </div>

                    <p className="font-sans text-slate-350 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
                      Thank you for contacting MERMO LLC. Your digital agency briefing parameters have been saved. A certified solutions architect will initiate contact relative to your coordinates within the hour.
                    </p>

                    <button
                      id="contact-reset-btn"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-display text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Transmit Secondary RFP Brochure
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
