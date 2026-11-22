import React from 'react';
import { internshipExperiences } from '../data/portfolioData';
import { Briefcase, Calendar, Clock, Sparkles, Edit3, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Internship Experience &amp; Professional Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Industry internship training in web development and artificial intelligence / machine learning.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internshipExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-8 rounded-3xl bg-[#111425] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                
                {/* Header: Company & Role */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#171C38] border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {exp.status}
                  </span>
                </div>

                {/* Editable Dates & Duration Strip */}
                <div className="flex flex-wrap items-center gap-3 py-3 px-4 rounded-xl bg-[#0C0E1E] border border-slate-800 text-xs font-mono mb-6">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.dates}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Key Responsibilities &amp; Learning
                  </h4>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Learned */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                    Technologies &amp; Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologiesLearned.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#161B35] border border-purple-500/20 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Editable Field Notice for Ajitha */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-mono text-purple-300">
                  <Edit3 className="w-3 h-3 text-cyan-400" />
                  <span>Configurable in portfolioData.ts</span>
                </span>
                <span className="font-mono text-slate-400">Experience #{idx + 1}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono">
          <span>* Internship dates, duration, and specific deliverables can be updated anytime in the central configuration file.</span>
        </div>

      </div>
    </section>
  );
};

