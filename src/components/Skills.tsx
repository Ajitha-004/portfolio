import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Sparkles, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';

export const Skills: React.FC = () => {
  // Map string icon names to Lucide icon components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-300" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      default:
        return <Code2 className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honest Technical Inventory · No Fake Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Structured inventory of programming languages, machine learning toolkits, and software engineering foundations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#111424] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-950/30 flex flex-col justify-between group"
            >
              <div>
                
                {/* Header with category icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#171B35] border border-purple-500/30 group-hover:scale-105 transition-transform">
                    {renderIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Category description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Skill Items in Category */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        skill.highlight 
                          ? 'bg-[#161C38] border-purple-500/30 text-white' 
                          : 'bg-[#0E1020] border-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                        <div className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-purple-400 shadow-sm shadow-purple-400' : 'bg-slate-500'}`} />
                        <span>{skill.name}</span>
                      </div>
                      
                      {skill.badge && (
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          skill.highlight 
                            ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{cat.skills.length} Competencies</span>
                <span className="text-purple-400">Verified Knowledge</span>
              </div>

            </div>
          ))}
        </div>

        {/* Ethical / Professional Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-[#0D1020] border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-semibold font-mono">Note for Recruiters:</span>
            <span>Skill proficiencies reflect genuine academic and project-tested experience without arbitrary progress bars or inflated percentage metrics.</span>
          </div>
          <div className="shrink-0 text-cyan-400 font-mono text-[11px]">
            Updated for 2026 Campus Placement
          </div>
        </div>

      </div>
    </section>
  );
};
