import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Linkedin, 
  Github, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Lighting & Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161B33] border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6 shadow-sm shadow-purple-900/20 animate-pulse-slow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Internships &amp; Placement 2026–2028</span>
            </div>

            {/* Main Greeting Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 glow-text-purple">
                {personalDetails.name}
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5 leading-snug">
              {personalDetails.headline}
            </h2>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {personalDetails.bioIntroduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              
              {/* Primary: View My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-[#14182E] border border-purple-500/40 hover:border-purple-400 hover:bg-purple-950/30 hover:text-white transition-all duration-300 shadow-sm hover:shadow-purple-500/20 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Verification Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#14182E] border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all duration-200 group"
                  aria-label="Ajitha Laxmi LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#14182E] border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-purple-300 transition-all duration-200 group"
                  aria-label="Ajitha Laxmi GitHub Profile"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo Placeholder with Glowing Ambience */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Radiant Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse-slow"></div>
              
              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#111322] border border-purple-500/30 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Visual Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#181D3B] to-[#0D1022] border border-purple-500/20 flex flex-col items-center justify-center p-6 text-center group">
                  
                  {/* Subtle Grid in Background of Image */}
                  <div className="absolute inset-0 bg-dots-pattern opacity-30"></div>
                  
                  {/* Avatar SVG */}
                  <img 
                    src="/assets/profile/ajitha-profile.svg" 
                    alt="Ajitha Laxmi Balamurugan Profile Placeholder"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Clean Honest Placeholder Notice */}
                  <div className="z-10 mt-3 px-3 py-1.5 rounded-lg bg-[#0A0C18]/90 border border-slate-700/80 backdrop-blur-sm">
                    <p className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Professional Profile Photo Placeholder</span>
                    </p>
                  </div>
                </div>

                {/* Info Card Strip below photo */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-semibold">B.E. CSE (AI &amp; ML)</div>
                    <div className="text-slate-400 text-[11px]">KPR Institute · 2024–2028</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      CGPA: 8.39
                    </div>
                    <div className="text-emerald-400 text-[11px] font-medium flex items-center justify-end gap-1">
                      <CheckCircle2 className="w-3 h-3" /> First Class
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#121528]/60 border border-purple-500/15 backdrop-blur-sm">
            <div className="text-purple-400 font-mono text-xs mb-1">INSTITUTION</div>
            <div className="text-white font-semibold text-sm">KPRIET, Coimbatore</div>
            <div className="text-slate-400 text-xs">B.E. CSE (AI &amp; ML)</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#121528]/60 border border-purple-500/15 backdrop-blur-sm">
            <div className="text-cyan-400 font-mono text-xs mb-1">ACADEMICS</div>
            <div className="text-white font-semibold text-sm">8.39 CGPA</div>
            <div className="text-slate-400 text-xs">Graduating Year 2028</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#121528]/60 border border-purple-500/15 backdrop-blur-sm">
            <div className="text-indigo-400 font-mono text-xs mb-1">PROJECT WORK</div>
            <div className="text-white font-semibold text-sm">4 Core Applications</div>
            <div className="text-slate-400 text-xs">ML, NLP &amp; Web Systems</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#121528]/60 border border-purple-500/15 backdrop-blur-sm">
            <div className="text-emerald-400 font-mono text-xs mb-1">CREDENTIALS</div>
            <div className="text-white font-semibold text-sm">8+ Certifications</div>
            <div className="text-slate-400 text-xs">NPTEL, IIT Bombay, Infosys</div>
          </div>
        </div>

      </div>
    </section>
  );
};
