import React from 'react';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  isDark
}) => {
  return (
    <section 
      id="about" 
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
            {currentLang === 'ru' ? 'Обо мне' : 'About me'}
          </h2>
          <div className={`mt-3 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Доценко Валерий' : 'Valeriy Dotsenko'}
          </div>
          <p className={`mt-1.5 text-sm font-light tracking-wide ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' 
              ? 'Техник-механик • Мастер производственного обучения' 
              : 'Mechanical Technician • Vocational Instructor'}
          </p>
        </div>

        {/* Narrative Text */}
        <div className={`space-y-6 text-base sm:text-lg font-light leading-relaxed ${
          isDark ? 'text-neutral-300' : 'text-neutral-700'
        }`}>
          <p>
            {currentLang === 'ru' ? (
              <>
                Окончил техникум с красным дипломом по специальности «Технология машиностроения». Отработал 2 года слесарем механосборочных работ на реальном производстве.
              </>
            ) : (
              <>
                Graduated with honors from technical college in Mechanical Engineering Technology. Completed 2 years as an assembly fitter on an active manufacturing shop floor.
              </>
            )}
          </p>
          <p>
            {currentLang === 'ru' ? (
              <>
                Сейчас — мастер производственного обучения. Обучаю студентов ремонту, обслуживанию и практической работе на металлообрабатывающих станках и оборудовании.
              </>
            ) : (
              <>
                Currently working as a Master of Vocational Training, instructing students in repair, maintenance, and precision machining on industrial machine tools.
              </>
            )}
          </p>
        </div>

        {/* Key Facts / Summary in Clean Minimalist Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t font-light text-sm ${
          isDark ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200 text-neutral-600'
        }`}>
          <div className="space-y-1">
            <span className={`text-xs uppercase tracking-wider block font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {currentLang === 'ru' ? 'Образование' : 'Education'}
            </span>
            <div className={`font-light ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
              {currentLang === 'ru' ? 'Красный диплом (специальность 15.02.08)' : 'Honors Degree (Mechanical Technology)'}
            </div>
          </div>

          <div className="space-y-1">
            <span className={`text-xs uppercase tracking-wider block font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {currentLang === 'ru' ? 'Опыт на производстве' : 'Shop-Floor Experience'}
            </span>
            <div className={`font-light ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
              {currentLang === 'ru' ? '2 года слесарем МСР' : '2 years assembly fitter'}
            </div>
          </div>

          <div className="space-y-1">
            <span className={`text-xs uppercase tracking-wider block font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {currentLang === 'ru' ? 'Текущая позиция' : 'Current Role'}
            </span>
            <div className={`font-light ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
              {currentLang === 'ru' ? 'Мастер производственного обучения' : 'Master of Vocational Training'}
            </div>
          </div>

          <div className="space-y-1">
            <span className={`text-xs uppercase tracking-wider block font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              {currentLang === 'ru' ? 'Город' : 'Location'}
            </span>
            <div className={`font-light ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
              {currentLang === 'ru' ? 'Новосибирск, Россия' : 'Novosibirsk, Russia'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
