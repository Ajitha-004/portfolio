import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  X, 
  ExternalLink,
  Info 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadInitiated(true);
    // Trigger download
    const link = document.createElement('a');
    link.href = personalDetails.resumeDownloadPath;
    link.download = personalDetails.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#111425] border border-purple-500/30 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
              Curriculum Vitae / Resume
            </span>
            <h3 className="text-xl font-bold text-white">
              {personalDetails.resumeFileName}
            </h3>
          </div>
        </div>

        {/* Resume Details Card */}
        <div className="p-5 rounded-2xl bg-[#0C0E1E] border border-slate-800 space-y-3 mb-6 text-xs sm:text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Candidate:</span>
            <span className="text-white font-semibold">{personalDetails.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Education:</span>
            <span className="text-cyan-400 font-medium">B.E. CSE (AI &amp; ML) · KPRIET</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">CGPA:</span>
            <span className="text-emerald-400 font-mono font-bold">8.39 / 10.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Format:</span>
            <span className="text-purple-300 font-mono">Adobe PDF Document</span>
          </div>
        </div>

        {/* Status / Instructions Note */}
        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-slate-300 mb-6 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white mb-0.5">Resume Integration Ready:</p>
            <p className="text-slate-300">
              When ready, save your latest updated resume PDF directly into <code className="text-purple-300 font-mono bg-black/40 px-1 py-0.5 rounded">public/resume/Ajitha_Resume.pdf</code> to update the download instantly.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Ajitha_Resume.pdf</span>
          </button>

          <a
            href={personalDetails.resumeDownloadPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Tab</span>
          </a>
        </div>

        {downloadInitiated && (
          <div className="mt-4 text-center text-xs text-emerald-400 font-medium flex items-center justify-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Download started successfully!</span>
          </div>
        )}

      </div>
    </div>
  );
};
