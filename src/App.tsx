import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { NovosibirskSection } from './components/NovosibirskSection';
import { ProductsSection } from './components/ProductsSection';
import { EventsSection } from './components/EventsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { BlueprintOverlay } from './components/BlueprintOverlay';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { Language, SectionId } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState<SectionId>('industrial-creator');
  const [showBlueprintMode, setShowBlueprintMode] = useState<boolean>(false);
  const [blueprintModalOpen, setBlueprintModalOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['industrial-creator', 'about', 'novosibirsk', 'products', 'conferences', 'articles', 'contact'];
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
    <div className={`min-h-screen transition-colors duration-300 font-sans selection:bg-neutral-500 selection:text-white ${
      isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* Sticky Browser Chrome & Navigation Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        showBlueprintMode={showBlueprintMode}
        onToggleBlueprintMode={() => setShowBlueprintMode(!showBlueprintMode)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenCommandPalette={() => setCmdPaletteOpen(true)}
      />

      {/* Main Content Area */}
      <main className="space-y-0">
        
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 02: About Me */}
        <AboutSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 02.5: Novosibirsk Geography & Workshops Map */}
        <NovosibirskSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 03: Products */}
        <ProductsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 04: Conferences */}
        <EventsSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 05: Articles */}
        <ArticlesSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

        {/* Section 06: Contact */}
        <ContactSection
          currentLang={currentLang}
          showBlueprintMode={showBlueprintMode}
          isDark={isDark}
        />

      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
        isDark={isDark}
      />

      {/* Command Palette (⌘K) */}
      <CommandPaletteModal
        isOpen={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Editorial Specification Overlay */}
      <BlueprintOverlay
        isOpen={blueprintModalOpen}
        onClose={() => setBlueprintModalOpen(false)}
        currentLang={currentLang}
        isDark={isDark}
      />

    </div>
  );
}
