import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutProjectSection } from './components/AboutProjectSection';
import { ArticlesSection } from './components/ArticlesSection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Language, SectionId } from './types';
import { scrollToSection } from './utils/scroll';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [isLangTransitioning, setIsLangTransitioning] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionId>('industrial-creator');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections: SectionId[] = ['industrial-creator', 'about-project', 'articles', 'media', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth fade language toggle
  const handleToggleLang = () => {
    setIsLangTransitioning(true);
    setTimeout(() => {
      setCurrentLang(prev => (prev === 'ru' ? 'en' : 'ru'));
      setTimeout(() => {
        setIsLangTransitioning(false);
      }, 60);
    }, 150);
  };

  // Ultra-smooth easing scroll to section
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId, 850);
  };

  return (
    <div className={`min-h-screen font-sans ${
      isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* Top Fixed-Height Header (56px / h-14) */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content with Smooth Language Crossfade Transition */}
      <main className={`transition-opacity duration-200 ease-in-out will-change-opacity ${
        isLangTransitioning ? 'opacity-25' : 'opacity-100'
      }`}>
        
        {/* 01. First Sheet: INDUSTRIAL CREATOR Centered */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          isDark={isDark}
        />

        {/* 02. About Project: О проекте */}
        <AboutProjectSection
          currentLang={currentLang}
          isDark={isDark}
          onNavigate={handleNavigate}
        />

        {/* 03. Articles: Статьи */}
        <ArticlesSection
          currentLang={currentLang}
          isDark={isDark}
          onNavigate={handleNavigate}
        />

        {/* 04. Media: Медиа */}
        <MediaSection
          currentLang={currentLang}
          isDark={isDark}
          onNavigate={handleNavigate}
        />

        {/* 05. Contact: Контакты (with integrated full-width bottom footer bar) */}
        <ContactSection
          currentLang={currentLang}
          isDark={isDark}
        />

      </main>

    </div>
  );
}
