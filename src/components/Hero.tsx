import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { HeroCanvas3D } from './HeroCanvas3D';
import { 
  ArrowRight, 
  FileText, 
  Compass, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Trophy,
  BrainCircuit,
  Code2
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#07080E]"
    >
      {/* Interactive 3D Ambient WebGL Canvas */}
      <HeroCanvas3D />

      {/* Atmospheric Background Lighting Gradients (Behind 3D) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Tagline, Introduction, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12162B]/80 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6 backdrop-blur-md shadow-lg shadow-purple-950/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Internships &amp; Placement 2026–2028</span>
            </div>

            {/* Name Heading with Vibrant Electric Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-3">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                {personalDetails.name}
              </span>
            </h1>

            {/* Main Tagline (Requirement: "Turning Ideas into Intelligent Solutions.") */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-5 leading-snug tracking-tight flex items-center gap-2">
              <span>{personalDetails.headline}</span>
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 hidden sm:inline-block animate-pulse" />
            </h2>

            {/* Professional Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {personalDetails.bioIntroduction}
            </p>

            {/* 3 Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              
              {/* Button 1: Explore My Journey (Scrolls smoothly to #about / #journey) */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <Compass className="w-4 h-4 text-cyan-200 group-hover:rotate-45 transition-transform" />
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Button 2: View My Projects (Navigates to #projects) */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#13172E]/90 hover:bg-[#1C2244] border border-purple-500/30 hover:border-purple-400/60 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg group"
              >
                <Code2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>View My Projects</span>
              </a>

              {/* Button 3: Download Resume (Direct PDF Download/Open) */}
              <a
                href={personalDetails.resumeDownloadPath}
                target="_blank"
                rel="noopener noreferrer"
                download="Ajitha_Laxmi_Balamurugan_resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#12162B]/80 hover:bg-[#1A203E] border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-200 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg group"
              >
                <FileText className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

            </div>

            {/* Social Verification Handles */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#13172E]/80 border border-slate-800 hover:border-purple-500/50 hover:bg-[#1C2244] text-slate-300 hover:text-purple-400 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#13172E]/80 border border-slate-800 hover:border-purple-500/50 hover:bg-[#1C2244] text-slate-300 hover:text-purple-400 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glassmorphism Profile Showcase with Real Photo & Quick Metrics */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Radiant Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse-slow"></div>
              
              {/* Main Glass Card Frame */}
              <div className="relative rounded-3xl bg-[#101326]/90 border border-purple-500/30 p-5 shadow-2xl backdrop-blur-2xl group">
                
                {/* Visual Image Container with Real Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#181D3B] to-[#0D1022] border border-purple-500/30 shadow-inner">
                  <img 
                    src="/profile.jpg" 
                    alt="Ajitha Laxmi Balamurugan"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle edge vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101326]/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Corner Badge: AI & ML Specialization */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
                      <span>AI &amp; ML</span>
                    </span>
                  </div>

                  {/* Floating Metric Badge: 518 Solved */}
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/80 text-purple-300 border border-purple-500/40 backdrop-blur-md shadow-lg">
                      <Code2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>518+ Solved</span>
                    </span>
                  </div>
                </div>

                {/* Academic & Achievement Strip below photo */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-semibold flex items-center gap-1.5">
                      <span>B.E. CSE (AI &amp; ML)</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">KPRIET, Coimbatore · 2024–2028</div>
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

                {/* Achievement Highlight Strip */}
                <div className="mt-3 p-2.5 rounded-xl bg-[#151936] border border-amber-500/20 flex items-center justify-between text-[11px]">
                  <span className="text-amber-300 font-medium flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>IEEE Brain Bid Winner</span>
                  </span>
                  <span className="font-mono text-slate-400 text-[10px]">CIT Hackathon</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Key Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-[#11142A]/80 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/40 transition-colors">
            <div className="text-purple-400 font-mono text-xs mb-1">ACADEMIC FOUNDATION</div>
            <div className="text-white font-semibold text-sm">KPRIET, Coimbatore</div>
            <div className="text-slate-400 text-xs">B.E. CSE (AI &amp; ML) · 8.39 CGPA</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11142A]/80 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
            <div className="text-cyan-400 font-mono text-xs mb-1">PROBLEM SOLVING</div>
            <div className="text-white font-semibold text-sm">518+ Programs Solved</div>
            <div className="text-slate-400 text-xs">SkillRack &amp; CodeChef Pro</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11142A]/80 border border-indigo-500/20 backdrop-blur-md hover:border-indigo-400/40 transition-colors">
            <div className="text-indigo-400 font-mono text-xs mb-1">ENGINEERED PROJECTS</div>
            <div className="text-white font-semibold text-sm">4 Core Platforms</div>
            <div className="text-slate-400 text-xs">NLP, Civic Tech &amp; Web Systems</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#11142A]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-400/40 transition-colors">
            <div className="text-emerald-400 font-mono text-xs mb-1">HONORS &amp; CREDENTIALS</div>
            <div className="text-white font-semibold text-sm">10 Official Certifications</div>
            <div className="text-slate-400 text-xs">IIT Bombay, CodeChef &amp; IEEE Winner</div>
          </div>
        </div>

      </div>
    </section>
  );
};
