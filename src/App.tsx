import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { BlueprintOverlay } from './components/BlueprintOverlay';
import { Footer } from './components/Footer';
import { Language, SectionId } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [showBlueprintMode, setShowBlueprintMode] = useState<boolean>(false);
  const [blueprintModalOpen, setBlueprintModalOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['about', 'projects', 'articles', 'events', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLang = () => {
    setCurrentLang(prev => (prev === 'ru' ? 'en' : 'ru'));
  };

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      
      {/* Sticky Navigation Header with 5-item menu & toggles */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        showBlueprintMode={showBlueprintMode}
        onToggleBlueprintMode={() => setShowBlueprintMode(!showBlueprintMode)}
      />

      {/* Main Content Area */}
      <main className="space-y-0">
        
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 1: About Me */}
        <AboutSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 2: Projects (Hardware, Telegram Bot, Podcast) */}
        <ProjectsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 3: Articles & Insights */}
        <ArticlesSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 4: Speaking & Events */}
        <EventsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 5: Contact & Collaboration */}
        <ContactSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Dedicated Comprehensive Copywriting & Structure Blueprint Modal */}
      <BlueprintOverlay
        isOpen={blueprintModalOpen}
        onClose={() => setBlueprintModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}
