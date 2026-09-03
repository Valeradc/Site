import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { EventsSection } from './components/EventsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { BlueprintOverlay } from './components/BlueprintOverlay';
import { Footer } from './components/Footer';
import { Language, SectionId } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState<SectionId>('industrial-creator');
  const [showBlueprintMode, setShowBlueprintMode] = useState<boolean>(false);
  const [blueprintModalOpen, setBlueprintModalOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['industrial-creator', 'about', 'products', 'conferences', 'articles', 'contact'];
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

        {/* Section 2: Products */}
        <ProductsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 3: Conferences */}
        <EventsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 4: Articles */}
        <ArticlesSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
        />

        {/* Section 5: Contact */}
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
