import React from 'react';
import { GENERAL_INFO, NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { Globe, FileText, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  showBlueprintMode: boolean;
  onToggleBlueprintMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  activeSection,
  onNavigate,
  showBlueprintMode,
  onToggleBlueprintMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-5">
        <div className="flex items-baseline justify-between">
          
          {/* Brand / Name in Tracked Swiss Caps */}
          <div className="space-y-0.5">
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-black hover:opacity-70 transition-opacity"
            >
              {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}
            </a>
            <div className="text-[10px] sm:text-[11px] tracking-[0.15em] text-neutral-500 uppercase">
              {currentLang === 'ru' ? 'ТЕХНИК-МЕХАНИК • 21 ГОД' : 'MECHANICAL TECHNICIAN • 21 Y.O.'}
            </div>
          </div>

          {/* Desktop 5-Item Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs tracking-[0.1em] uppercase transition-all pb-0.5 ${
                    isActive
                      ? 'text-black font-semibold border-b border-black'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <span className="text-[10px] text-neutral-400 mr-1.5 font-mono">0{idx + 1}</span>
                  {currentLang === 'ru' ? item.labelRu : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Controls: Language toggle & Spec view */}
          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono">
            <button
              onClick={onToggleBlueprintMode}
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider border transition-colors flex items-center gap-1.5 ${
                showBlueprintMode
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
              }`}
              title="Режим заметок копирайтера"
            >
              <FileText className="w-3 h-3" />
              <span>{currentLang === 'ru' ? 'ТЗ / БРИФ' : 'SPEC'}</span>
            </button>

            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 text-[11px] uppercase tracking-wider border border-neutral-300 hover:border-black text-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLang === 'ru' ? 'EN' : 'RU'}</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleLang}
              className="px-2 py-1 text-[10px] font-mono border border-neutral-300 text-black"
            >
              {currentLang === 'ru' ? 'EN' : 'RU'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border border-neutral-300 text-black"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-4 border-t border-neutral-200 space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-1.5 text-xs uppercase tracking-wider ${
                  activeSection === item.id ? 'font-bold text-black' : 'text-neutral-600'
                }`}
              >
                <span className="font-mono text-neutral-400 mr-2">0{idx + 1}</span>
                {currentLang === 'ru' ? item.labelRu : item.labelEn}
              </button>
            ))}
            <div className="pt-2 border-t border-neutral-200">
              <button
                onClick={() => {
                  onToggleBlueprintMode();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1 text-xs font-mono uppercase text-neutral-600"
              >
                {showBlueprintMode ? '✓ ТЗ АКТИВНО' : '📄 ПОКАЗАТЬ ТЗ'}
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
