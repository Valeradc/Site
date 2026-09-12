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
  onNavigate,
  isDark
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 text-xs font-light transition-colors duration-200 ${
      isDark ? 'border-neutral-800 bg-[#07080b] text-neutral-400' : 'border-neutral-200 bg-neutral-50 text-neutral-500'
    }`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Name */}
        <div className="space-y-1 text-center sm:text-left">
          <div className={`text-sm uppercase tracking-[0.18em] font-[250] ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            INDUSTRIAL CREATOR
          </div>
          <div className="text-xs font-light">
            {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn} • {currentLang === 'ru' ? 'Новосибирск' : 'Novosibirsk'}
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors font-light ${
                isDark ? 'hover:text-white' : 'hover:text-neutral-950'
              }`}
            >
              {currentLang === 'ru' ? item.labelRu : item.labelEn}
            </button>
          ))}
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className={`p-2 rounded-full border transition-all active:scale-95 ${
            isDark ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-300' : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600'
          }`}
          aria-label="Наверх"
          title="Наверх"
        >
          <ArrowUp className="w-3.5 h-3.5 stroke-[1.2]" />
        </button>

      </div>
    </footer>
  );
};
