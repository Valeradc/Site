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
  onNavigate
}) => {
  return (
    <section 
      id="industrial-creator" 
      className="min-h-[70vh] sm:min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 border-b border-neutral-200 bg-white text-neutral-900"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center space-y-10 sm:space-y-12">
        
        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.06em] sm:tracking-[0.08em] uppercase text-neutral-900 select-none">
          INDUSTRIAL CREATOR
        </h1>

        {/* Minimalist Action Controls (Exact Replica of User Reference) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2">
          
          {/* Dark Pill "Связаться" Button with Paper Airplane Icon */}
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 rounded-full text-sm font-medium bg-[#1d1d1f] hover:bg-black text-white transition-all active:scale-[0.98] flex items-center gap-2.5 shadow-sm"
          >
            <Send className="w-3.5 h-3.5 fill-white stroke-white rotate-12" />
            <span>{currentLang === 'ru' ? 'Связаться' : 'Get in touch'}</span>
          </button>

          {/* Clean "Смотреть проекты ↓" Link */}
          <button
            onClick={() => onNavigate('products')}
            className="text-sm sm:text-base font-normal text-neutral-700 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
          >
            <span>{currentLang === 'ru' ? 'Смотреть проекты' : 'View projects'}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
