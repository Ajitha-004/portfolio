import React from 'react';
import { codingProfiles } from '../data/portfolioData';
import { ExternalLink, Terminal, Code, Award, Github, Sparkles } from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5 text-purple-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-20 relative bg-[#090A0F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Problem Solving &amp; Competitive Coding Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coding Profiles &amp; Repositories
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Direct access to algorithmic platforms, open-source repositories and collegiate assessment profiles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {codingProfiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#111425] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group relative overflow-hidden h-full"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-xl transition-all" />

              <div>
                {/* Header with icon and badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#161B35] border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {getIcon(profile.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    {profile.badge}
                  </span>
                </div>

                {/* Platform Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {profile.platform}
                </h3>

                {/* Handle / Username */}
                <div className="text-xs font-mono text-cyan-400 mb-3 truncate" title={profile.username}>
                  {profile.platform === 'SkillRack' ? profile.username : `@${profile.username}`}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {profile.description}
                </p>

                {/* Verified SkillRack / Language Breakdown Stats */}
                {profile.stats && profile.stats.length > 0 && (
                  <div className="mt-2 pt-3 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                      <span>Verified Solved Stats</span>
                      <span className="text-cyan-400 font-bold">{profile.highlightMetric?.value}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {profile.stats.map((st, sIdx) => (
                        <div 
                          key={sIdx}
                          className="flex items-center justify-between text-[11px] font-mono px-2 py-1 rounded bg-[#161B35]/80 border border-purple-500/15 text-slate-300"
                        >
                          <span className="text-slate-400 truncate pr-1">{st.label}</span>
                          <span className="font-semibold text-cyan-300">{st.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Link Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                <span>Open Profile</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

