import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [emailValue, setEmailValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailValue) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmailValue('');
    }, 1000);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer-component"
      className="bg-navy-950 border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden text-left"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        
        {/* Column 1: Organization Branding and Description */}
        <div className="md:col-span-4 space-y-6">
          <Link
            id="footer-logo-link"
            to="/"
            onClick={handleBackToTop}
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-teal to-brand-teal-light flex items-center justify-center shadow-lg shadow-brand-teal/20 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5.5 h-5.5 text-white animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white">MERMO</span>
              <span className="text-[10px] font-mono text-brand-teal-light tracking-widest uppercase -mt-1 font-bold">Digital Agency</span>
            </div>
          </Link>
          
          <p className="font-sans text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
            MERMO LLC delivers premium digital solutions to elevate enterprise brands. We combine rapid engineering, technical SEO, and expert visual systems to ensure conversion-first growth.
          </p>

          <div className="flex items-center space-x-3.5">
            <span className="text-xs font-mono text-slate-550 uppercase tracking-widest">Connect Coordinates</span>
            <div className="h-px bg-white/10 w-12" />
            <a
              id="footer-linkedin-link"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <ArrowUpRight className="w-4 h-4 text-brand-teal-light" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2 space-y-5">
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 font-sans text-xs sm:text-sm font-light text-slate-400">
            <li>
              <Link id="footer-link-home" to="/" onClick={handleBackToTop} className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a href="/#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="hover:text-white transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <Link id="footer-link-blog" to="/blog" onClick={handleBackToTop} className="hover:text-white transition-colors">
                Insights Hub
              </Link>
            </li>
            <li>
              <Link id="footer-link-contact" to="/contact" onClick={handleBackToTop} className="hover:text-white transition-colors">
                Contact Coordinates
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal Provisions and Policies */}
        <div className="md:col-span-2 space-y-5">
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Governance
          </h4>
          <ul className="space-y-2.5 font-sans text-xs sm:text-sm font-light text-slate-400">
            <li>
              <Link id="footer-link-privacy" to="/privacy" onClick={handleBackToTop} className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link id="footer-link-terms" to="/terms" onClick={handleBackToTop} className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <span className="text-[11px] font-mono text-slate-500 block">SLA v2.5 Enforced</span>
            </li>
            <li>
              <span className="text-[11px] font-mono text-slate-500 block">SOC-2 Data Trust</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signups */}
        <div className="md:col-span-4 space-y-5">
          <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
            Quarterly Insights Brief
          </h4>
          <p className="font-sans text-slate-400 text-xs font-light leading-relaxed">
            Stay aligned with technical SEO updates and premium B2B UI paradigms. Strictly valuable content.
          </p>

          <AnimatePresence mode="wait">
            {!subscribed ? (
              <motion.form
                key="newsletter-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubscribe}
                className="relative"
              >
                <input
                  type="email"
                  id="newsletter-email-input"
                  required
                  placeholder="executive@luminary.com"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 hover:border-white/20 focus:border-brand-teal focus:outline-none rounded-xl pl-4 pr-12 py-3.5 text-xs text-slate-200 placeholder-slate-600 font-sans transition-all"
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  disabled={loading}
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-teal hover:bg-brand-teal-light text-white flex items-center justify-center transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="subscribed-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 p-3 bg-brand-teal/15 border border-brand-teal/20 rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-teal-light shrink-0" />
                <span className="font-sans text-[11px] font-medium text-slate-200">
                  Subscribed securely to insights.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer Bottom segment */}
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span>&copy; {new Date().getFullYear()} MERMO LLC. All Rights Reserved.</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-teal" />
            1001 S Main St, Ste 600, Kalispell, MT 59901-1498
          </span>
        </div>

        <button
          id="back-to-top-footer-btn"
          onClick={handleBackToTop}
          className="hover:text-white transition-colors"
        >
          Scroll Back To Zenith &uarr;
        </button>
      </div>
    </footer>
  );
}
