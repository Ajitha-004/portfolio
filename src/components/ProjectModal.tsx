import React, { useEffect } from 'react';
import { ProjectDetail } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Target, 
  Lightbulb, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Info, 
  ArrowLeft,
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto bg-[#101324] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#12162B]/95 border-b border-purple-500/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to projects"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
              {project.developmentStatus}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Section 7 Visual Preview: Each project displays its own unique asset */}
          <div className="rounded-2xl overflow-hidden border border-purple-500/25 bg-[#090C1A] shadow-xl">
            <div className="p-3 bg-[#13172E] border-b border-purple-500/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-mono text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{project.isPrototype ? '7. Single-Page Prototype Preview' : '7. Conceptual UI Preview'}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Independent Custom Visual Identity
              </span>
            </div>
            
            <div className="relative aspect-[16/10] w-full bg-[#080A15]">
              <img
                src={project.imagePlaceholderPath}
                alt={`${project.title} Mockup Preview`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-3 bg-[#0B0E1E] text-[11px] text-slate-400 flex items-center gap-2 border-t border-slate-800">
              <Info className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>
                {project.isPrototype 
                  ? 'Honest Disclosure: This project is structured as an interactive single-page prototype coordinator.' 
                  : 'Honest Disclosure: This is an architectural conceptual UI preview illustrating interface design and system flow.'}
              </span>
            </div>
          </div>

          {/* Action Links Bar: GitHub & Live Demo */}
          <div className="p-4 rounded-2xl bg-[#141830] border border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">Repository &amp; Deployment:</span>
              <span className="text-slate-400 ml-1">Editable central link configuration.</span>
            </div>

            <div className="flex items-center gap-3">
              {/* GitHub Button */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono bg-slate-800/60 border border-slate-700/60 text-slate-400">
                  <Github className="w-3 h-3 text-slate-500" />
                  <span>Repo URL: [Editable Placeholder]</span>
                </div>
              )}

              {/* Live Demo Button */}
              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono bg-purple-950/30 border border-purple-500/30 text-purple-300">
                  <Clock className="w-3 h-3 text-purple-400" />
                  <span>Demo: Coming Soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 1: Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-2 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>1. Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-[#14182E]/50 p-4 rounded-xl border border-purple-500/15">
              {project.description}
            </p>
          </div>

          {/* Section 2: Problem Statement & Section 3: Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#14172C] border border-rose-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-300 font-bold mb-2 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-rose-400" />
                <span>2. Problem Statement</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#14172C] border border-cyan-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-2 flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                <span>3. Proposed Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>

          </div>

          {/* Section 4: Methodology / Key Features (clearly showing implemented vs planned) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>4. Methodology &amp; Feature Implementation</span>
              </h4>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Implemented
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" /> Planned
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.methodologyOrFeatures.map((feat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all ${
                    feat.implemented
                      ? 'bg-[#151A33] border-purple-500/30'
                      : 'bg-[#0E1122] border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="text-xs font-bold text-white flex items-center gap-2">
                      <span>{feat.title}</span>
                    </h5>
                    {feat.implemented ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Implemented
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        Planned Roadmap
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>5. Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-[#161B35] border border-purple-500/30 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 6: My Contribution */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>6. My Contribution</span>
            </h4>
            <div className="p-5 rounded-2xl bg-[#14172C] border border-purple-500/20 space-y-2.5">
              {project.myContribution.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111425] border-t border-purple-500/20">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </button>

          <span className="text-[11px] font-mono text-slate-400">
            KPR Institute AI &amp; ML Coursework Project
          </span>
        </div>

      </div>
    </div>
  );
};

