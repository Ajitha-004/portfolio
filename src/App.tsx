import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <CodingProfiles />
        <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Centralized Resume Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;

