import React from 'react';
import { Language, SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

interface AboutProjectSectionProps {
  currentLang: Language;
  isDark: boolean;
  onNavigate?: (sectionId: SectionId) => void;
}

export const AboutProjectSection: React.FC<AboutProjectSectionProps> = ({ 
  currentLang, 
  isDark,
  onNavigate
}) => {
  return (
    <section 
      id="about-project" 
      className={`h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] max-h-[calc(100dvh-3.5rem)] scroll-mt-14 overflow-hidden flex flex-col justify-between px-6 sm:px-8 py-6 sm:py-10 transition-colors duration-200 ${
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
            {currentLang === 'ru' ? 'О проекте' : 'About project'}
          </div>
        </div>
        <span className={`text-xs font-light tracking-[0.2em] uppercase select-none ${
          isDark ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          01 / 04
        </span>
      </div>

      {/* Editorial Text / About Creator */}
      <div className="max-w-3xl mx-auto w-full my-auto py-3 sm:py-6 overflow-y-auto space-y-3.5 sm:space-y-4 text-sm sm:text-[15px] md:text-base font-[250] leading-relaxed">
        <p className={`text-base sm:text-lg md:text-xl font-[300] tracking-tight ${
          isDark ? 'text-white' : 'text-neutral-900'
        }`}>
          {currentLang === 'ru' 
            ? 'Привет, меня зовут Доценко Валерий, я создатель и автор редакции Industrial Creator.'
            : 'Hi, my name is Valeriy Dotsenko, I am the creator and author of the Industrial Creator editorial.'}
        </p>

        <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
          {currentLang === 'ru'
            ? 'Мне 21. Недавно закончил технический колледж по направлению машиностроения, успел два года поработать механиком станков на предприятиях. Сейчас обучаю студентов и готовлю рабочие кадры по своей специальности.'
            : "I'm 21. I recently graduated from technical college with a degree in mechanical engineering, having worked for two years as a machine tool mechanic at industrial plants. Currently, I teach students and train the vocational workforce in my field."}
        </p>

        <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
          {currentLang === 'ru'
            ? 'Industrial Creator — это моя редакция, которую я делаю так, как считаю нужным. Со своим оформлением, в своём формате.'
            : 'Industrial Creator is my editorial project, run strictly as I see fit. With my own visual style, in my own format.'}
        </p>

        <p className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
          {currentLang === 'ru'
            ? 'Здесь я пишу о том, что сам считаю важным и интересным в машиностроении: о станках, инструментах, предприятиях, своём опыте и поездках. Рассказываю о своём пути — как я расту, что делаю, как участвую в развитии отрасли. Время от времени делюсь собственными мыслями.'
            : 'Here I write about what I consider essential and engaging in mechanical engineering: machine tools, cutting tooling, plants, personal shop-floor experience, and work travels. I share my journey — how I grow, what I build, and how I contribute to advancing the industry. From time to time, I share personal perspectives.'}
        </p>

        <div className="pt-1.5 space-y-2">
          <p className={`font-[300] tracking-wide ${isDark ? 'text-neutral-100' : 'text-neutral-900'}`}>
            {currentLang === 'ru'
              ? 'Без пафоса. Интересно и по-своему.'
              : 'Zero hype. Insightful and on my own terms.'}
          </p>
          <p className={`text-xs sm:text-sm font-light ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {currentLang === 'ru'
              ? 'Спасибо, что читаете и следите за редакцией!'
              : 'Thank you for reading and following the editorial!'}
          </p>
        </div>
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
