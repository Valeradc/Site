import React from 'react';
import { GENERAL_INFO, NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: SectionId) => void;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  isDark
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`w-full border-t py-3.5 text-xs font-light transition-colors duration-200 ${
      isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
    }`}>
      <div className="max-w-4xl mx-auto flex flex-row items-center justify-between gap-4">
        
        {/* Brand & Name */}
        <div className="flex items-center gap-2 sm:gap-3 text-left">
          <span className={`text-xs uppercase tracking-[0.16em] font-[250] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            INDUSTRIAL CREATOR
          </span>
          <span className="opacity-30">•</span>
          <span className="text-[11px] sm:text-xs">
            {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="hidden sm:inline text-neutral-400 text-[11px]">
            {currentLang === 'ru' ? 'Новосибирск' : 'Novosibirsk'}
          </span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className={`p-1.5 rounded-full border transition-all active:scale-95 flex-shrink-0 ${
            isDark ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-300' : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600'
          }`}
          aria-label={currentLang === 'ru' ? 'Наверх' : 'To top'}
          title={currentLang === 'ru' ? 'Наверх' : 'To top'}
        >
          <ArrowUp className="w-3.5 h-3.5 stroke-[1.2]" />
        </button>

      </div>
    </footer>
  );
};
