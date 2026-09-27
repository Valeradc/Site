import React from 'react';
import { Language, SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

interface ProductsSectionProps {
  currentLang: Language;
  isDark: boolean;
  onNavigate?: (sectionId: SectionId) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  currentLang, 
  isDark,
  onNavigate
}) => {
  return (
    <section 
      id="products" 
      className={`h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] scroll-mt-14 snap-start snap-always overflow-hidden flex flex-col justify-between px-6 sm:px-8 py-6 sm:py-10 transition-colors duration-200 ${
        isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
      }`}
    >
      {/* Top Header Row */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <div>
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Раздел 01' : 'Section 01'}
          </h2>
          <div className={`mt-1.5 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Продукты' : 'Products'}
          </div>
        </div>
        <span className={`text-xs font-light tracking-[0.2em] uppercase select-none ${
          isDark ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          01 / 04
        </span>
      </div>

      {/* Minimalist Centered Status */}
      <div className="flex flex-col items-center justify-center my-auto">
        <span className={`text-sm sm:text-base font-[250] tracking-[0.2em] lowercase font-light select-none ${
          isDark ? 'text-neutral-500' : 'text-neutral-400'
        }`}>
          {currentLang === 'ru' ? '«в разработке»' : '«in development»'}
        </span>
      </div>

      {/* Bottom Hint to Next Section */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-end">
        {onNavigate && (
          <button
            onClick={() => onNavigate('articles')}
            className={`flex items-center gap-1.5 text-xs font-light tracking-wider transition-colors ${
              isDark ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-400 hover:text-neutral-800'
            }`}
            aria-label={currentLang === 'ru' ? 'Перейти к разделу Статьи' : 'Go to Articles'}
          >
            <span>{currentLang === 'ru' ? 'Статьи' : 'Articles'}</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[1.2]" />
          </button>
        )}
      </div>
    </section>
  );
};
