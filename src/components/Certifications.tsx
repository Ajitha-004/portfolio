import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { 
  ExternalLink, 
  Trophy, 
  BookOpen, 
  Calendar,
  CheckCircle2,
  Eye,
  X,
  FileCheck
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeCertModal, setActiveCertModal] = useState<CertificationItem | null>(null);

  const categories = ['All', 'IIT Bombay', 'CodeChef', 'Hackathon & Award'];

  const filteredCerts = filter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Verified Credentials · 10 Active Certificates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Official certifications from Spoken Tutorial (IIT Bombay), CodeChef Pro, national hackathons, and IEEE competitions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? certificationsData.length 
              : certificationsData.filter(c => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold'
                    : 'bg-[#121528] text-slate-400 hover:text-white hover:bg-[#181C35] border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  filter === cat ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 10 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-[#111425] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-purple-950/30 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* Certificate Visual Image Preview / Dual Preview for Trophy Proof */}
                {cert.trophyImage ? (
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0A0D1D] border-b border-purple-500/15 p-2 grid grid-cols-2 gap-2">
                    {/* Certificate Thumbnail */}
                    <div className="relative h-full rounded-2xl overflow-hidden bg-black/60 border border-purple-500/20 group/cert">
                      <img
                        src={cert.certificateImage}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/cert:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                        Certificate
                      </span>
                    </div>

                    {/* Trophy Photograph Thumbnail */}
                    <div className="relative h-full rounded-2xl overflow-hidden bg-black/60 border border-amber-500/30 group/trophyThumb">
                      <img
                        src={cert.trophyImage}
                        alt="Winner Trophy"
                        className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover/trophyThumb:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-sm flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span>Winner Trophy</span>
                      </span>
                    </div>

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D1D] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-auto">
                      <button
                        onClick={() => setActiveCertModal(cert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Both</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={cert.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-[#1A1F3B] hover:bg-[#252C54] border border-purple-400/30 shadow-md transition-all"
                          title="Open Certificate Image"
                        >
                          <span>Cert</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={cert.trophyImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-amber-300 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-400/40 shadow-md transition-all"
                          title="Open Winner Trophy Photograph"
                        >
                          <Trophy className="w-3 h-3 text-amber-400" />
                          <span>Trophy</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Category Pill Tag on Top Left */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md shadow-sm border bg-emerald-950/80 border-emerald-500/40 text-emerald-300">
                        {cert.category}
                      </span>
                    </div>

                    {/* Verified Indicator Badge on Top Right */}
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span>Winner Trophy</span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0A0D1D] border-b border-purple-500/15">
                    <img
                      src={cert.certificateImage}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D1D] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <button
                        onClick={() => setActiveCertModal(cert)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>

                      <a
                        href={cert.certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#1A1F3B] hover:bg-[#252C54] border border-purple-400/30 shadow-md transition-all"
                      >
                        <span>Open Image</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Category Pill Tag on Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md shadow-sm border ${
                        cert.category === 'IIT Bombay'
                          ? 'bg-purple-950/80 border-purple-500/40 text-purple-300'
                          : cert.category === 'CodeChef'
                          ? 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                          : 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      }`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Verified Indicator Badge on Top Right */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Verified</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="p-6">
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="text-xs font-semibold text-cyan-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="line-clamp-1">{cert.issuer}</span>
                  </div>

                  {/* Date & Score Strip */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 px-2 py-0.5 rounded-md bg-[#161B35] border border-purple-500/15">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.scoreOrCredits && (
                      <span className="text-[10px] font-mono text-purple-300 px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20">
                        {cert.scoreOrCredits}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Skills Gained Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161B33] border border-purple-500/15 text-slate-300"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Card Footer: View Certificate & View Trophy Links */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-2 flex flex-wrap items-center justify-between gap-2">
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* View Certificate Link */}
                  <a
                    href={cert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors py-2 group/btn"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  {/* View Winner Trophy Link (Requirement 3) */}
                  {cert.trophyImage && (
                    <a
                      href={cert.trophyImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors py-2 group/trophy"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Winner Trophy</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/trophy:translate-x-0.5 group-hover/trophy:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                {cert.certificateId && (
                  <span className="text-[10px] font-mono text-slate-400">
                    ID: {cert.certificateId}
                  </span>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Preview for Certificate Inspection */}
      {activeCertModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveCertModal(null)}
        >
          <div 
            className="relative w-full max-w-4xl my-auto bg-[#101324] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#12162B] border-b border-purple-500/20">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                  {activeCertModal.issuer}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {activeCertModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCertModal(null)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="overflow-y-auto p-6 flex flex-col items-center">
              {activeCertModal.trophyImage ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Event Certificate */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-purple-300 mb-2 flex items-center gap-1.5 font-semibold">
                      <FileCheck className="w-4 h-4 text-purple-400" />
                      <span>Event Certificate</span>
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-purple-500/20 bg-black/60 shadow-xl w-full h-[45vh] flex items-center justify-center p-2">
                      <img
                        src={activeCertModal.certificateImage}
                        alt={`${activeCertModal.title} Certificate`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Winner Trophy Photograph */}
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-mono text-amber-300 mb-2 flex items-center gap-1.5 font-semibold">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span>Winner Trophy Proof</span>
                    </span>
                    <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-black/60 shadow-xl w-full h-[45vh] flex items-center justify-center p-2">
                      <img
                        src={activeCertModal.trophyImage}
                        alt="Winner Trophy Photograph"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden border border-purple-500/20 bg-black/40 shadow-xl max-h-[60vh] flex items-center justify-center">
                  <img
                    src={activeCertModal.certificateImage}
                    alt={activeCertModal.title}
                    className="w-full h-auto max-h-[58vh] object-contain"
                  />
                </div>
              )}

              {/* Certificate Metadata */}
              <div className="w-full mt-5 p-4 rounded-2xl bg-[#0D1022] border border-slate-800 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Issue Date:</span>
                  <span className="text-white font-medium">{activeCertModal.date}</span>
                </div>
                {activeCertModal.scoreOrCredits && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Award / Recognition:</span>
                    <span className="text-amber-400 font-semibold">{activeCertModal.scoreOrCredits}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-400">Description:</span>
                  <span className="text-slate-200 text-right max-w-sm">{activeCertModal.description}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#12162B] border-t border-purple-500/20">
              <button
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close View
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={activeCertModal.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-md transition-all"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Open Certificate in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {activeCertModal.trophyImage && (
                  <a
                    href={activeCertModal.trophyImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-amber-200 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-md transition-all"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-200" />
                    <span>Open Trophy in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
