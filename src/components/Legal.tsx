import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldAlert, Notebook, Scale, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Legal() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  useEffect(() => {
    if (location.pathname === '/terms') {
      setActiveTab('terms');
    } else {
      setActiveTab('privacy');
    }
  }, [location.pathname]);

  return (
    <div
      id="legal-documents-page"
      className="min-h-screen bg-navy-950 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-brand-gold/5 rounded-full blur-[70px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-12 text-left">
        {/* Toggle Nav Bar Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-brand-teal-light tracking-widest uppercase block">
              Governance Frameworks
            </span>
            <h1 className="font-display text-3xl sm:text-4.5xl font-bold text-white tracking-tight leading-none">
              Legal Provisions
            </h1>
          </div>

          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 w-full sm:w-auto">
            <button
              id="privacy-policy-tab-btn"
              onClick={() => setActiveTab('privacy')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'privacy' ? 'bg-brand-teal text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              Privacy Policy
            </button>
            <button
              id="terms-of-service-tab-btn"
              onClick={() => setActiveTab('terms')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'terms' ? 'bg-brand-teal text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              Terms of Service
            </button>
          </div>
        </div>

        {/* Dynamic Legal Text Layouts */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-white/5 shadow-2xl bg-charcoal-900/40 backdrop-blur-2xl">
          {activeTab === 'privacy' ? (
            /* PRIVACY POLICY */
            <motion.article
              key="privacy-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed"
            >
              <div className="space-y-2">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">Privacy Policy</h2>
                <p className="text-xs font-mono text-slate-450">Effective Date: June 07, 2026 | Document Reference: MERMO-PP-v2.5</p>
              </div>

              <p>
                At MERMO LLC, we prioritize the secure handling and preservation of your business coordinates, telemetry profiles, and corporate inquiry datasets. This Privacy Policy documents our analytical methodologies regarding data collection, management, and rights protection.
              </p>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">1. Data Collection Frameworks</h3>
                <p>
                  We compile corporate identifiers (including company names, email coordinates, telephone contacts, and project briefings) transferred voluntarily through our interactive contact portals or request-for-proposal channels. This telemetry ensures our engineers optimize response metrics and align with requested scope parameters.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">2. Browser Cookie Configurations</h3>
                <p>
                  Our portals integrate standard client-side storage technologies (e.g., standard cookies and local storage tokens) to cache user theme parameters, session history selections, and navigation paths. You have the structural authority to deactivate cookies via standard user-agent configurations, though some interactive panels may load slowly without local state caching.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">3. Performance Analytics Tracking</h3>
                <p>
                  To secure our organic benchmarking goals and speed scoring, we logging diagnostic page load times, device viewport dimensions, and approximate geographical network origins. This tracking uses completely anonymous structural indicators that cannot be linked with private consumer variables.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">4. User Governance Rights</h3>
                <p>
                  As an enterprise partner, you hold absolute authority to audit, modify, retrieve, or expunge your stored communication coordinate logs from our directory backups. Transmit an audit proposal to our primary coordinator email at any point to execute these governance rights.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8 space-y-4">
                <h3 className="font-display font-medium text-lg text-white">5. Corporate Custody Details</h3>
                <p>
                  For governance inquiries, reach out immediately to our administrative center relative to the following coordinates:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center gap-2.5 p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
                    <MapPin className="w-4.5 h-4.5 text-brand-teal-light shrink-0" />
                    <span className="text-xs text-slate-300">1001 S Main St, Ste 600, Kalispell, MT</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
                    <Mail className="w-4.5 h-4.5 text-brand-teal-light shrink-0" />
                    <span className="text-xs text-slate-300">legal@mermollc.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3.5 bg-white/[0.02] border border-white/5 rounded-xl">
                    <Phone className="w-4.5 h-4.5 text-brand-teal-light shrink-0" />
                    <span className="text-xs text-slate-300">+1 (406) 555-0190</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ) : (
            /* TERMS OF SERVICE */
            <motion.article
              key="terms-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed"
            >
              <div className="space-y-2">
                <h2 className="font-display text-xl sm:text-2xl font-semibold text-white">Terms of Service</h2>
                <p className="text-xs font-mono text-slate-450">Effective Date: June 07, 2026 | Document Reference: MERMO-TOS-v1.8</p>
              </div>

              <p>
                By navigating this website, you agree to comply with the standard terms and policies outlined below. If you decline these provisions, immediately exit the portal.
              </p>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">1. Acceptable Website Usage</h3>
                <p>
                  You are permitted to query our case portfolios, read technical papers, and interact with our contact systems for the explicit purpose of onboarding digital solutions. Any programmatic extraction, penetration testing, or loading abuse of our hosted containers is strictly prohibited.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">2. Intellectual Property Authority</h3>
                <p>
                  All typography structures, logos, descriptive copy, layout design tokens, code structures, and case metrics are the exclusive property of MERMO LLC. Unauthorized replication, redistribution, or framing of these materials is protected under trademark and copyright statutes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">3. Collaborative Project & Payment Terms</h3>
                <p>
                  Specific project scopes, service level agreements (SLAs), delivery milestones, and payment terms are negotiated independently via custom written statements of work. Initial deposits and scheduled payments must adhere to specified net-payment-dates to ensure engineering continuity.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">4. Agency Service Policies & Liability</h3>
                <p>
                  While we strive for absolute accuracy in technical execution, MERMO LLC provides this portfolio portal on an "as is" baselines without explicit backing warranties. We hold zero liability for transient network disruptions, cloud infrastructure outages, or external software dependency changes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-medium text-lg text-white">5. Governing Regulations</h3>
                <p>
                  These policies are governed of laws matching State of Montana, USA. Any mediation, litigation, or dispute resolution processes will occur exclusively within competent judicial frameworks inside Flathead County, Kalispell, Montana.
                </p>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </div>
  );
}
