import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { EventsSection } from './components/EventsSection';
import { ArticlesSection } from './components/ArticlesSection';
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

      {/* Main Content Sections */}
      <main>
        
        {/* 01. First Sheet: INDUSTRIAL CREATOR Centered */}
        <Hero
          currentLang={currentLang}
          onNavigate={handleNavigate}
          isDark={isDark}
        />

        {/* 02. About Me: Обо мне */}
        <AboutSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 03. Products: Продукты */}
        <ProductsSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 04. Conferences: Конференции */}
        <EventsSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 05. Articles: Статьи */}
        <ArticlesSection
          currentLang={currentLang}
          isDark={isDark}
        />

        {/* 06. Contact: Контакты */}
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
