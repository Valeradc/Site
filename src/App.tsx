import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Language, SectionId } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState<SectionId>('industrial-creator');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Track active section using IntersectionObserver for precise slide detection
  useEffect(() => {
    const sections: SectionId[] = ['industrial-creator', 'products', 'articles', 'media', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.5,
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
    <div className={`min-h-screen transition-colors duration-200 font-sans ${
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

      {/* Main Content: Exactly 5 Full-Screen Cells */}
      <main>
        
        {/* 01. First Sheet: INDUSTRIAL CREATOR Centered */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          isDark={isDark}
        />

        {/* 02. Products: Продукты */}
        <ProductsSection
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

        {/* 05. Contact: Контакты (with integrated bottom footer bar) */}
        <ContactSection
          currentLang={currentLang}
          isDark={isDark}
          onNavigate={handleNavigate}
        />

      </main>

    </div>
  );
}
