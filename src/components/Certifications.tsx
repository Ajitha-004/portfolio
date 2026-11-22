import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { 
  ExternalLink, 
  Trophy, 
  BookOpen, 
  FileCheck 
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeCertModal, setActiveCertModal] = useState<CertificationItem | null>(null);

  const categories = ['All', 'Specialization', 'Course', 'Hackathon', 'Award'];

  const filteredCerts = filter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors, Competitions &amp; Certified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements &amp; Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Verified academic certifications from NPTEL, IIT Bombay, Infosys, and collegiate hackathons.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold'
                  : 'bg-[#121528] text-slate-400 hover:text-white hover:bg-[#181C35] border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Credentials (8)' : cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-[#111425] border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div>
                
                {/* Category & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                    cert.category === 'Award' 
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-300' 
                      : cert.category === 'Hackathon'
                      ? 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                      : 'bg-purple-500/15 border-purple-500/30 text-purple-300'
                  }`}>
                    {cert.category}
                  </span>
                  
                  <span className="text-[11px] font-mono text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-semibold text-cyan-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills Gained Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skillsGained.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161B33] border border-purple-500/15 text-slate-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: View Certificate Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                
                {cert.verificationAvailable && cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveCertModal(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Certificate Info</span>
                  </button>
                )}

                <span className="text-[10px] font-mono text-slate-400">
                  {cert.verificationAvailable ? 'Verified' : 'Document on File'}
                </span>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certification Details Modal */}
      {activeCertModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveCertModal(null)}
        >
          <div 
            className="w-full max-w-lg p-6 rounded-3xl bg-[#111425] border border-purple-500/30 shadow-2xl text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 font-semibold">
                {activeCertModal.issuer}
              </span>
              <button
                onClick={() => setActiveCertModal(null)}
                className="text-slate-400 hover:text-white text-xs font-mono"
              >
                [Close]
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {activeCertModal.title}
            </h3>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {activeCertModal.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0C0E1E] border border-slate-800 text-xs mb-5 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Issuer:</span>
                <span className="text-white font-medium">{activeCertModal.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Category:</span>
                <span className="text-cyan-400 font-medium">{activeCertModal.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Verification Link:</span>
                <span className="text-slate-400 font-mono text-[11px]">[Editable in portfolioData.ts]</span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCertModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
