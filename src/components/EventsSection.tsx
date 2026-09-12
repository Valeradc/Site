import React from 'react';
import { EVENTS_DATA } from '../data/siteContent';
import { Language } from '../types';

interface EventsSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  currentLang,
  isDark
}) => {
  return (
    <section 
      id="conferences" 
      className={`py-20 sm:py-28 border-b transition-colors duration-200 ${
        isDark ? 'border-neutral-800 bg-[#090a0f] text-white' : 'border-neutral-200 bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Title */}
        <div>
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Конференции' : 'Conferences'}
          </h2>
          <div className={`mt-3 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Выступления и доклады' : 'Keynotes & Speaking'}
          </div>
        </div>

        {/* Minimalist Events Table/List */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
            >
              <div className="space-y-1.5 md:max-w-xl">
                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-light tracking-wider uppercase ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    {event.date} • {currentLang === 'ru' ? event.locationRu : event.locationEn}
                  </span>
                </div>

                <h3 className={`text-lg sm:text-xl font-[250] tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {currentLang === 'ru' ? event.titleRu : event.titleEn}
                </h3>

                <p className={`text-sm sm:text-base font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  <span className="text-neutral-400 font-light">{currentLang === 'ru' ? 'Тема: ' : 'Topic: '}</span>
                  {currentLang === 'ru' ? event.topicRu : event.topicEn}
                </p>
              </div>

              <div className="flex items-center">
                <span className={`text-xs px-3 py-1 rounded-full border font-light tracking-wide ${
                  isDark 
                    ? 'border-neutral-800 text-neutral-400 bg-neutral-900/60' 
                    : 'border-neutral-200 text-neutral-600 bg-neutral-50'
                }`}>
                  {currentLang === 'ru' ? event.roleRu : event.roleEn}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
