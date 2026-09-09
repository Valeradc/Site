import React from 'react';
import { Language, SectionId } from '../types';
import { Send, ArrowDown } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: SectionId) => void;
  showBlueprintMode?: boolean;
  isDark?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  isDark = false
}) => {
  return (
    <section 
      id="industrial-creator" 
      className={`min-h-[calc(100vh-61px)] min-h-[calc(100dvh-61px)] flex flex-col items-center justify-center text-center px-6 py-12 border-b transition-colors duration-200 ${
        isDark 
          ? 'bg-[#090a0f] border-neutral-800 text-white' 
          : 'bg-white border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center space-y-10 sm:space-y-14 my-auto">
        
        {/* Main Display Headline */}
        <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.06em] sm:tracking-[0.08em] uppercase select-none transition-colors ${
          isDark ? 'text-white' : 'text-neutral-900'
        }`}>
          INDUSTRIAL CREATOR
        </h1>

        {/* Minimalist Action Controls (Exact Replica of User Reference) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2">
          
          {/* "Связаться" Pill Button */}
          <button
            onClick={() => onNavigate('contact')}
            className={`px-8 py-3.5 rounded-full text-sm font-medium transition-all active:scale-[0.98] flex items-center gap-2.5 shadow-sm ${
              isDark
                ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                : 'bg-[#1d1d1f] text-white hover:bg-black'
            }`}
          >
            <Send className={`w-3.5 h-3.5 rotate-12 ${
              isDark ? 'fill-neutral-950 stroke-neutral-950' : 'fill-white stroke-white'
            }`} />
            <span>{currentLang === 'ru' ? 'Связаться' : 'Get in touch'}</span>
          </button>

          {/* Clean "Смотреть проекты ↓" Link */}
          <button
            onClick={() => onNavigate('products')}
            className={`text-sm sm:text-base font-normal transition-colors flex items-center gap-1.5 ${
              isDark 
                ? 'text-neutral-300 hover:text-white' 
                : 'text-neutral-700 hover:text-neutral-950'
            }`}
          >
            <span>{currentLang === 'ru' ? 'Смотреть проекты' : 'View projects'}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
