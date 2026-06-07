/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div id="mermo-llc-root-app" className="min-h-screen bg-navy-950 text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-teal/30 selection:text-brand-teal-light">
        {/* Ambient Background Decorative Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none -z-20" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none -z-20" />

        {/* Persistent High-Fidelity Navigation Header */}
        <Navbar />

        {/* Dynamic Route Container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            {/* Catch-all route to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Elegant Context Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}
