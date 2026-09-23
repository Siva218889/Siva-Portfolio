import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PaperModal } from './components/PaperModal';
import { ProjectSimulatorModal } from './components/ProjectSimulatorModal';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [isPaperOpen, setIsPaperOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeSimulatorId, setActiveSimulatorId] = useState<string | null>(null);

  const handleOpenContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0e11] text-[#e2e2e6] font-sans antialiased selection:bg-[#2563eb]/30 selection:text-[#f3f4f6]">
      {/* Top Fixed Header */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Sections Stack */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={handleOpenContact}
        />

        {/* [01 // PEER-REVIEWED RESEARCH] */}
        <ResearchSection
          onOpenPaperModal={() => setIsPaperOpen(true)}
        />

        {/* [02 // INDUSTRY INTERNSHIPS] */}
        <ExperienceSection />

        {/* [03 // SELECTED PROJECTS] */}
        <ProjectsSection
          onOpenSimulator={(id) => setActiveSimulatorId(id)}
        />

        {/* [04 // TECHNICAL TOOLKIT] */}
        <ToolkitSection />

        {/* [05 // ACADEMICS & CERTIFICATIONS] */}
        <AcademicsSection />

        {/* Call to action & Contact Banner */}
        <ContactSection />
      </main>

      {/* Global Architectural Footer */}
      <Footer />

      {/* Interactive Overlay Modals */}
      <PaperModal
        isOpen={isPaperOpen}
        onClose={() => setIsPaperOpen(false)}
      />

      <ProjectSimulatorModal
        projectId={activeSimulatorId}
        onClose={() => setActiveSimulatorId(null)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => {
          const a = document.createElement('a');
          a.href = '/Final%20Resume%20(AI&ML).pdf';
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.click();
        }}
        onOpenPaper={() => setIsPaperOpen(true)}
        onOpenSimulator={(id) => setActiveSimulatorId(id)}
      />
    </div>
  );
}
