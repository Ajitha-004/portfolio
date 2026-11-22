import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  FileText,
  MessageSquare,
  ShieldCheck 
} from 'lucide-react';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Create mailto fallback link with prefilled details
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090A0F] border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recruiter &amp; Placement Coordination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Available for software engineering and AI/ML internship opportunities, hackathons, and technical collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-[#111425] border border-purple-500/20 shadow-xl space-y-6">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#161B35] border border-purple-500/20 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                      Email Address (Editable)
                    </div>
                    <div className="text-slate-200 font-medium text-xs sm:text-sm">
                      {personalDetails.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#161B35] border border-purple-500/20 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                      Phone Number (Editable)
                    </div>
                    <div className="text-slate-200 font-medium text-xs sm:text-sm">
                      {personalDetails.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalDetails.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#161B35] border border-purple-500/20 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-slate-200 font-medium text-xs sm:text-sm">
                    {personalDetails.location}
                  </div>
                </div>
              </div>

              {/* Verified Professional Profiles */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Verified Social Channels
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#14182E] border border-slate-700 hover:border-blue-500/50 text-slate-200 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#14182E] border border-slate-700 hover:border-purple-500/50 text-slate-200 hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Resume Callout in Contact Section */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-[#111425] border border-purple-500/30 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Need a Printable Resume?
                </h4>
                <p className="text-xs text-slate-300">
                  Download Ajitha_Resume.pdf directly for campus interviews.
                </p>
              </div>
              <button
                onClick={onOpenResumeModal}
                className="shrink-0 p-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform"
                aria-label="Download Resume"
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#111425] border border-purple-500/20 shadow-xl relative overflow-hidden">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span>Send a Direct Message</span>
              </h3>
              
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill in the details below. This form generates an immediate email dispatch to <span className="text-purple-300 font-mono">{personalDetails.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiters / Engineering Lead"
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0F1F] border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. talent@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0D0F1F] border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Subject / Opportunity *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Development Internship 2026 / Interview Invitation"
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0F1F] border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share role specifications, internship timeframe, or questions regarding Ajitha's projects..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0D0F1F] border border-slate-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email Client...' : 'Send Message'}</span>
                </button>

              </form>

              {submitSuccess && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Message dispatched to your default mail application! If it didn't open automatically, you can directly email: <strong className="text-white">{personalDetails.email}</strong></span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

