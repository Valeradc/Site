import React from 'react';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  isDark
}) => {
  return (
    <section 
      id="contact" 
      className={`py-24 sm:py-32 transition-colors duration-200 ${
        isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center sm:text-left">
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Раздел 04' : 'Section 04'}
          </h2>
          <div className={`mt-2.5 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Контакты' : 'Contact'}
          </div>
        </div>

        {/* Minimalist Centered Status */}
        <div className="py-16 sm:py-24 flex items-center justify-center">
          <span className={`text-sm sm:text-base font-[250] tracking-[0.2em] lowercase font-light select-none ${
            isDark ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {currentLang === 'ru' ? '«в разработке»' : '«in development»'}
          </span>
        </div>

      </div>
    </section>
  );
};
