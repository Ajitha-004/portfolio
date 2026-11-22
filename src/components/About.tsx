import React from 'react';
import { personalDetails, educationInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle, 
  Brain, 
  Target, 
  Compass, 
  Sparkles 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background &amp; Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Biography & Career Focus */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Narrative Card */}
            <div className="p-8 rounded-3xl bg-[#111425] border border-purple-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Brain className="w-5 h-5 text-purple-400" />
                <span>Engineering Identity &amp; Mindset</span>
              </h3>
              
              <p className="text-slate-200 text-base leading-relaxed mb-4">
                {personalDetails.aboutDetails}
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {personalDetails.academicBackground}
              </p>

              {/* Career Aspirations Callout */}
              <div className="p-4 rounded-2xl bg-[#171B33] border border-purple-500/25">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300 mb-1">
                      Career Aspirations
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {personalDetails.careerAspirations}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Technical Interests Badges */}
            <div className="p-6 rounded-3xl bg-[#111425] border border-purple-500/20 shadow-xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Primary Technical Interests</span>
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {personalDetails.technicalInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-[#171C38] border border-purple-500/20 hover:border-purple-400/50 hover:text-white transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education Card (KPR Institute) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#161B35] to-[#101324] border border-purple-500/30 shadow-2xl relative overflow-hidden group">
              
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                  CGPA: {educationInfo.cgpa}
                </div>
              </div>

              {/* Institution Name */}
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                {educationInfo.institution}
              </h3>
              
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{educationInfo.location}</span>
              </div>

              {/* Degree & Specialization */}
              <div className="p-4 rounded-2xl bg-[#0D1022] border border-slate-800 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
                  Program of Study
                </div>
                <div className="text-slate-100 font-bold text-sm sm:text-base">
                  {educationInfo.degree}
                </div>
                <div className="text-cyan-400 font-medium text-xs mt-0.5">
                  Specialization: {educationInfo.specialization}
                </div>
                <div className="text-slate-400 font-mono text-xs mt-2">
                  Academic Period: {educationInfo.duration} (Graduation: 2028)
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Academic Highlights
                </h4>
                {educationInfo.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Verification Note */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Accredited Academic Record</span>
                <span className="text-purple-400 font-mono">B.E. 2024–2028</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
