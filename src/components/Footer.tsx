import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07080E] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                AL
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                {personalDetails.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              {personalDetails.headline}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-purple-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111425] border border-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111425] border border-slate-800 text-slate-300 hover:text-purple-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111425] border border-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span>KPR Institute of Engineering and Technology · CSE (AI &amp; ML)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
