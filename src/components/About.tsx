import React, { useState } from 'react';
import { journeyStages } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code2, 
  Sparkles, 
  Layers, 
  Trophy, 
  Compass, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  Milestone
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);

  // Helper to map icon string to Lucide component
  const getStageIcon = (name: string, className: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Trophy':
        return <Trophy className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      default:
        return <Milestone className={className} />;
    }
  };

  const activeStage = journeyStages.find(s => s.stageNumber === activeStageNumber) || journeyStages[0];

  return (
    <section id="about" className="py-24 relative bg-[#06070B] border-t border-slate-900 overflow-hidden">
      
      {/* Background Ambient Aura Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Developer Journey · 6 Milestone Stages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Me — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">My Developer Journey</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            From the initial spark in computer science to problem-solving mastery, applied artificial intelligence, practical platforms, and collegiate honors.
          </p>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Quick Stage Navigation Stepper (Interactive Tab Strip) */}
        <div className="mb-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] sm:min-w-0 max-w-5xl mx-auto relative px-4">
            
            {/* Glowing Connecting Track Behind Stepper Buttons */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-800/90 z-0">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${((activeStageNumber - 1) / (journeyStages.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stepper Buttons */}
            {journeyStages.map((stage) => {
              const isActive = activeStageNumber === stage.stageNumber;
              const isPast = activeStageNumber >= stage.stageNumber;

              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => setActiveStageNumber(stage.stageNumber)}
                  className="flex flex-col items-center relative z-10 group focus:outline-none"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                    isActive
                      ? 'bg-gradient-to-br from-purple-600 to-cyan-500 text-white scale-110 shadow-purple-600/40 ring-4 ring-purple-500/20'
                      : isPast
                      ? 'bg-[#181D3B] text-cyan-400 border border-cyan-500/40 hover:scale-105'
                      : 'bg-[#101324] text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}>
                    {getStageIcon(stage.iconName, "w-5 h-5")}
                  </div>
                  <span className={`text-[11px] font-mono mt-2 transition-colors ${
                    isActive ? 'text-cyan-300 font-bold' : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {stage.stageLabel}
                  </span>
                  <span className={`text-[11px] font-medium hidden md:inline-block max-w-[100px] text-center truncate ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Active Stage Focus Card */}
        <div className="mb-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#12162B] via-[#0D1022] to-[#121528] border border-purple-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Top Accent Gradient Light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column of Active Stage */}
              <div className="lg:col-span-7">
                
                {/* Stage Badge & Timeframe */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-950/60 border border-purple-500/30 text-purple-300">
                    {activeStage.stageLabel} · {activeStage.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-[#161B35] border border-cyan-500/20 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeStage.timeframe}</span>
                  </div>
                </div>

                {/* Stage Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {activeStage.title}
                </h3>
                
                {/* Stage Tagline */}
                <div className="text-sm sm:text-base font-semibold text-slate-300 mb-5">
                  {activeStage.tagline}
                </div>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {activeStage.description}
                </p>

                {/* Core Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {activeStage.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies / Domain Chips */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Key Domains &amp; Competencies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStage.keyTechnologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#161B35] border border-purple-500/25 text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Stage Visual Metric Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#090C1B]/90 border border-purple-500/20 shadow-xl backdrop-blur-md">
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30">
                      {getStageIcon(activeStage.iconName, "w-6 h-6")}
                    </div>
                    <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                      Milestone Metrics
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {activeStage.summary}
                  </h4>

                  {/* Highlights Grid */}
                  {activeStage.metricsOrHighlights && (
                    <div className="grid grid-cols-1 gap-3 mt-6 pt-6 border-t border-slate-800/80">
                      {activeStage.metricsOrHighlights.map((m, mIdx) => (
                        <div 
                          key={mIdx}
                          className="p-3 rounded-xl bg-[#11152B] border border-slate-800 flex items-center justify-between"
                        >
                          <span className="text-xs text-slate-400 font-mono">{m.label}</span>
                          <span className="text-xs font-bold font-mono text-cyan-300">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stage Quick Switcher Next Button */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveStageNumber(prev => (prev > 1 ? prev - 1 : journeyStages.length))}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      ← Previous
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {activeStage.stageNumber} of {journeyStages.length}
                    </span>
                    <button
                      onClick={() => setActiveStageNumber(prev => (prev < journeyStages.length ? prev + 1 : 1))}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Complete Vertical Scrolling Timeline with Glowing Spine */}
        <div className="mt-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Full Chronological Timeline
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Scroll through each milestone to explore the evolution of skills and technical contributions.
            </p>
          </div>

          <div className="relative">
            
            {/* Center Glowing Vertical Spine */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 through-cyan-400 to-purple-600 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0" />

            <div className="space-y-12 relative z-10">
              {journeyStages.map((stage, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={stage.stageNumber}
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* Content Card (Half Width) */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                      <div 
                        onClick={() => setActiveStageNumber(stage.stageNumber)}
                        className={`p-6 sm:p-7 rounded-3xl bg-[#101326] border transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer group ${
                          activeStageNumber === stage.stageNumber
                            ? 'border-purple-400/60 shadow-purple-950/40 bg-gradient-to-br from-[#13172E] to-[#101326]'
                            : 'border-purple-500/20 hover:border-purple-500/40'
                        }`}
                      >
                        {/* Header Badge & Date */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-0.5 rounded-full bg-[#161B35] border border-cyan-500/30">
                            {stage.stageLabel} · {stage.badge}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-purple-400" />
                            <span>{stage.timeframe}</span>
                          </span>
                        </div>

                        {/* Stage Title */}
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                          {stage.title}
                        </h4>

                        {/* Tagline */}
                        <div className="text-xs font-semibold text-slate-300 mb-3">
                          {stage.tagline}
                        </div>

                        {/* Summary */}
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {stage.summary}
                        </p>

                        {/* Key Skills Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                          {stage.keyTechnologies.slice(0, 4).map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161B35] text-slate-300 border border-purple-500/15"
                            >
                              {tech}
                            </span>
                          ))}
                          {stage.keyTechnologies.length > 4 && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-500/20">
                              +{stage.keyTechnologies.length - 4} more
                            </span>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Central Node on Glowing Spine */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <button
                        onClick={() => setActiveStageNumber(stage.stageNumber)}
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl z-20 ${
                          activeStageNumber === stage.stageNumber
                            ? 'bg-gradient-to-br from-purple-500 to-cyan-400 text-white ring-4 ring-purple-500/30 scale-110 shadow-purple-600/50'
                            : 'bg-[#12162B] text-slate-300 border border-purple-500/40 hover:scale-105'
                        }`}
                        title={stage.title}
                      >
                        {getStageIcon(stage.iconName, "w-4 h-4")}
                      </button>
                    </div>

                    {/* Empty Half-Space for alternating grid on desktop */}
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
