import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-purple-900/30">
              <div className="w-full h-full bg-[#0D0F1B] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-base">
                  AL
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm tracking-tight group-hover:text-purple-300 transition-colors">
                Ajitha Laxmi B.
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> AI &amp; ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121526]/80 p-1.5 rounded-full border border-purple-500/20 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm shadow-purple-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-[#161A30] border border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/40 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-500/20 group"
              aria-label="Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">
                PDF
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 rounded-lg bg-[#161A30] border border-purple-500/30 text-purple-300"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#161A30] border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0F1222] border border-purple-500/20 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume (PDF)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
