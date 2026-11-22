import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectDetail } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Machine Learning / NLP', 'Web Development', 'Social Impact'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => {
        if (activeFilter === 'Social Impact') {
          return p.category.includes('Social Impact');
        }
        return p.category.toLowerCase().includes(activeFilter.toLowerCase());
      });

  return (
    <section id="projects" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Engineering Portfolio · 4 Dedicated Visual Mockups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Exploration of machine learning classifiers, student peer-to-peer web applications, cross-zone meeting prototypes, and civic issue tracking systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold'
                  : 'bg-[#121528] text-slate-400 hover:text-white hover:bg-[#181C35] border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onExplore={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-[#101326] border border-purple-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Central Configuration Architecture</h4>
              <p className="text-xs text-slate-400">
                All descriptions, preview visuals, repository links and demo URLs are centrally managed in <code className="text-purple-300 font-mono text-[11px]">src/data/portfolioData.ts</code>.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 shrink-0">
            Ready for Deployment
          </span>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
