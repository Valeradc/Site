import React, { useState } from 'react';
import { GENERAL_INFO, NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { Globe, Menu, X } from 'lucide-react';

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
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200 text-neutral-900 transition-colors">
      {/* Main Header Container */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <div>
            <a 
              href="#industrial-creator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('industrial-creator');
              }}
              className="text-sm sm:text-base font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 transition-colors block"
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
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-700 hover:text-neutral-950 font-normal'
                  }`}
                >
                  {currentLang === 'ru' ? item.labelRu : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Language Switch */}
          <div className="hidden sm:flex items-center space-x-3 text-xs">
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-full border border-neutral-200 hover:border-neutral-400 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 transition-colors flex items-center gap-1.5 font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span>{currentLang === 'ru' ? 'English' : 'Русский'}</span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 text-xs border border-neutral-200 rounded-lg text-neutral-700 font-medium"
            >
              {currentLang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-neutral-200 text-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-3 pb-2 border-t border-neutral-200 mt-3 space-y-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-100 text-neutral-900 font-semibold'
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
