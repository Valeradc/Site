import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language, SectionId } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ru');
  const [activeSection, setActiveSection] = useState<SectionId>('industrial-creator');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = ['industrial-creator', 'products', 'articles', 'media', 'contact'];
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
    <div className={`min-h-screen transition-colors duration-200 font-sans ${
      isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
    }`}>
      
      {/* Top Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content Sections in requested order */}
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
        />

        {/* 03. Articles: Статьи */}
        <ArticlesSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 04. Media: Медиа */}
        <MediaSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 05. Contact: Контакты */}
        <ContactSection
          currentLang={currentLang}
          isDark={isDark}
        />

      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        isDark={isDark}
      />

    </div>
  );
}
