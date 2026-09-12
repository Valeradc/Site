import React, { useState } from 'react';
import { NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  showBlueprintMode?: boolean;
  onToggleBlueprintMode?: () => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
  onNavigate,
  isDark = false,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark 
        ? 'bg-[#090a0f]/90 border-neutral-800 text-white' 
        : 'bg-white/90 border-neutral-200 text-neutral-900'
    }`}>
      {/* Main Header Container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand / Logo: INDUSTRIAL CREATOR */}
          <div className="flex-shrink-0">
            <a 
              href="#industrial-creator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('industrial-creator');
              }}
              className={`text-sm sm:text-base font-[250] tracking-[0.18em] uppercase transition-colors block ${
                isDark ? 'text-white hover:text-neutral-300' : 'text-neutral-900 hover:text-neutral-600'
              }`}
            >
              INDUSTRIAL CREATOR
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs sm:text-sm tracking-wide transition-colors font-light ${
                    isActive
                      ? isDark
                        ? 'text-white border-b border-white pb-0.5'
                        : 'text-neutral-950 border-b border-neutral-900 pb-0.5'
                      : isDark
                        ? 'text-neutral-400 hover:text-white'
                        : 'text-neutral-500 hover:text-neutral-950'
                  }`}
                >
                  {currentLang === 'ru' ? item.labelRu : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Toggle & Round Theme Button */}
          <div className="flex items-center space-x-2.5">
            {/* Language Switch Button */}
            <button
              onClick={onToggleLang}
              className={`px-3 py-1 rounded-full border text-xs font-light tracking-wide transition-colors flex items-center gap-1.5 active:scale-95 ${
                isDark 
                  ? 'border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300' 
                  : 'border-neutral-200 bg-neutral-50/90 hover:bg-neutral-100 text-neutral-600'
              }`}
              title={currentLang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            >
              <Globe className="w-3.5 h-3.5 opacity-60 stroke-[1.2]" />
              <span>{currentLang === 'ru' ? 'EN' : 'RU'}</span>
            </button>

            {/* Strictly Circular Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className={`w-8 h-8 rounded-full aspect-square flex items-center justify-center border transition-all active:scale-90 flex-shrink-0 ${
                isDark
                  ? 'border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300'
                  : 'border-neutral-200 bg-neutral-50/90 hover:bg-neutral-100 text-neutral-600'
              }`}
              aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
              title={isDark ? (currentLang === 'ru' ? 'Светлая тема' : 'Light theme') : (currentLang === 'ru' ? 'Тёмная тема' : 'Dark theme')}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-200 stroke-[1.2]" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-600 stroke-[1.2]" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-full border md:hidden transition-colors ${
                isDark 
                  ? 'border-neutral-800 text-neutral-300 bg-neutral-900/80' 
                  : 'border-neutral-200 text-neutral-700 bg-neutral-50'
              }`}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 stroke-[1.2]" /> : <Menu className="w-4 h-4 stroke-[1.2]" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pt-3 pb-2 border-t mt-3 space-y-1 text-sm ${
            isDark ? 'border-neutral-800' : 'border-neutral-200'
          }`}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-light text-sm tracking-wide ${
                  activeSection === item.id
                    ? isDark
                      ? 'bg-neutral-800/60 text-white'
                      : 'bg-neutral-100 text-neutral-900'
                    : isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {currentLang === 'ru' ? item.labelRu : item.labelEn}
              </button>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};
