import React from 'react';
import { Language } from '../types';
import { Footer } from './Footer';

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
      className={`h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] scroll-mt-14 overflow-hidden flex flex-col justify-between pt-6 sm:pt-10 pb-0 transition-colors duration-200 ${
        isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
      }`}
    >
      {/* Top Header Row */}
      <div className="max-w-4xl mx-auto w-full px-6 sm:px-8 flex items-center justify-between">
        <div>
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Раздел 04' : 'Section 04'}
          </h2>
          <div className={`mt-1.5 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Контакты' : 'Contact'}
          </div>
        </div>
        <span className={`text-xs font-light tracking-[0.2em] uppercase select-none ${
          isDark ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          04 / 04
        </span>
      </div>

      {/* Center Spacer */}
      <div className="my-auto px-6 sm:px-8" />

      {/* Bottom Integrated Footer Bar (Full Screen Width) */}
      <div className="w-full">
        <Footer isDark={isDark} />
      </div>
    </section>
  );
};
