import React from 'react';
import { ProjectDetail } from '../types';
import { 
  ArrowUpRight, 
  Eye, 
  CheckCircle2,
  Clock
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectDetail;
  onExplore: (project: ProjectDetail) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExplore }) => {
  return (
    <div className="group rounded-3xl bg-[#111425] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col overflow-hidden">
      
      {/* Visual Image Preview Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D1D] border-b border-purple-500/15">
        
        {/* Project Specific SVG Image */}
        <img
          src={project.imagePlaceholderPath}
          alt={`${project.title} Conceptual UI Preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Overlay with Action Button */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
          <button
            onClick={() => onExplore(project)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-600/40 hover:from-purple-500 hover:to-indigo-500 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Explore Architecture</span>
          </button>

          <span className="text-[11px] font-mono text-purple-300 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md border border-purple-500/30">
            {project.isPrototype ? 'Prototype Preview' : 'Conceptual UI'}
          </span>
        </div>

        {/* Category Pill Tag on Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#0E1226]/90 border border-purple-500/40 text-purple-300 backdrop-blur-md shadow-sm">
            {project.category}
          </span>
          {project.isPrototype && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
              Single-Page Prototype
            </span>
          )}
        </div>

        {/* Honest Disclosure Tag on Top Right */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-slate-400 border border-slate-700/60 backdrop-blur-md">
            UI Preview
          </span>
        </div>

      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          
          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2.5 leading-snug">
            {project.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs font-medium text-cyan-400/90 mb-3 line-clamp-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#161B35] border border-purple-500/20 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-lg text-[11px] font-mono bg-slate-800/60 text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

        </div>

        {/* Bottom Card Action Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          
          <button
            onClick={() => onExplore(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group/btn"
          >
            <span>Explore Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          {/* Status Badge */}
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
            {project.developmentStatus === 'Completed Concept' ? (
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            ) : (
              <Clock className="w-3 h-3 text-purple-400" />
            )}
            <span>{project.developmentStatus}</span>
          </span>

        </div>

      </div>

    </div>
  );
};
