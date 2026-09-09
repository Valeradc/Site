import React from 'react';
import { GENERAL_INFO } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { Send, ArrowDown, Award, Wrench, ShieldCheck, ExternalLink, MapPin } from 'lucide-react';

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
      className="pt-14 sm:pt-24 pb-16 sm:pb-24 border-b border-neutral-200 bg-white text-neutral-900"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Quick Credentials Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 flex items-center gap-1.5 font-medium">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            {currentLang === 'ru' ? 'Красный диплом (15.02.08)' : 'Honors Degree (15.02.08)'}
          </span>

          <span className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 flex items-center gap-1.5 font-medium">
            <Wrench className="w-3.5 h-3.5 text-emerald-600" />
            {currentLang === 'ru' ? '2 года на заводе' : '2 years factory experience'}
          </span>

          <span className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            {currentLang === 'ru' ? '21 год • Мастер ПО' : '21 y.o. • Vocational Master'}
          </span>

          <span className="px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            {currentLang === 'ru' ? 'Новосибирск' : 'Novosibirsk'}
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-none text-neutral-900">
            industrial creator
          </h1>

          <div className="text-sm sm:text-base text-neutral-600 font-medium">
            {currentLang === 'ru' 
              ? 'Валерий Доценко • Техник-механик • Кафедра технологии машиностроения' 
              : 'Valeriy Dotsenko • Mechanical Technician • Machining Technology Dept'}
          </div>
        </div>

        {/* Tagline / Mission */}
        <p className="text-base sm:text-xl text-neutral-600 leading-relaxed max-w-2xl font-normal">
          {currentLang === 'ru' ? GENERAL_INFO.taglineRu : GENERAL_INFO.taglineEn}
        </p>

        {/* 3 Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-sm">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full font-medium bg-neutral-900 text-white hover:bg-black transition-colors flex items-center gap-2 shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span>{currentLang === 'ru' ? 'Связаться' : 'Get in touch'}</span>
          </button>

          <a
            href={GENERAL_INFO.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full font-medium border border-neutral-300 hover:border-neutral-400 bg-white hover:bg-neutral-50 text-neutral-900 transition-colors flex items-center gap-2"
          >
            <span>{currentLang === 'ru' ? 'Телеграм @Valera_dc' : 'Telegram @Valera_dc'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>

          <button
            onClick={() => onNavigate('products')}
            className="px-5 py-3 rounded-full font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
          >
            <span>{currentLang === 'ru' ? 'Смотреть проекты' : 'View Projects'}</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
