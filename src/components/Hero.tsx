import React from 'react';
import { GENERAL_INFO, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { ArrowDown, Download, Send } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: SectionId) => void;
  showBlueprintMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  showBlueprintMode
}) => {
  return (
    <section className="pt-10 sm:pt-14 pb-12 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Blueprint Guide Annotation Banner if active */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1.5 text-neutral-800">
            <div className="font-bold uppercase tracking-wider text-black">
              {currentLang === 'ru' ? 'КОПИРАЙТИНГ-БРИФ: ГЛАВНЫЙ ЭКРАН' : 'EDITORIAL SPEC: HERO'}
            </div>
            <p className="text-neutral-600">
              {currentLang === 'ru' 
                ? 'Стиль: Швейцарская типографика (Swiss Style). Чистый монохром, четкая сетка, минимум слов. Акцент на красном дипломе, 2 годах на заводе и наставничестве.' 
                : 'Style: Minimalist Swiss letterhead. High contrast monochrome, concise facts, no corporate fluff.'}
            </p>
          </div>
        )}

        {/* Editorial Metadata Grid (Swiss Letterhead style) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-b border-neutral-200 pb-8 text-xs font-mono">
          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">
              {currentLang === 'ru' ? 'СПЕЦИАЛЬНОСТЬ' : 'FIELD'}
            </div>
            <div className="text-black font-medium">15.02.08 / ТЕХНОЛОГИЯ</div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">
              {currentLang === 'ru' ? 'КВАЛИФИКАЦИЯ' : 'CREDENTIALS'}
            </div>
            <div className="text-black font-medium">
              {currentLang === 'ru' ? 'КРАСНЫЙ ДИПЛОМ' : 'HONORS DEGREE'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">
              {currentLang === 'ru' ? 'ОПЫТ РАБОТЫ' : 'EXPERIENCE'}
            </div>
            <div className="text-black font-medium">
              {currentLang === 'ru' ? 'ЦЕХ (2 ГОДА) + СПО' : 'SHOP FLOOR + LAB'}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">
              {currentLang === 'ru' ? 'ЛОКАЦИЯ / СТАТУС' : 'LOCATION / STATUS'}
            </div>
            <div className="text-black font-medium">
              {currentLang === 'ru' ? 'РОССИЯ • 21 ГОД' : 'RUSSIA • 21 Y.O.'}
            </div>
          </div>
        </div>

        {/* Hero Title & Concise Manifesto */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-2xl sm:text-4xl font-normal tracking-tight text-black leading-snug">
            {currentLang === 'ru' ? (
              <>
                Техник-механик и мастер обучения. Соединяю культуру классического станка с современными ЧПУ и цифровыми инструментами.
              </>
            ) : (
              <>
                Mechanical technician and vocational mentor. Uniting classical shop-floor precision with CNC and modern automation.
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            {currentLang === 'ru' ? (
              <>
                Практик у станка: 2 года в заводском механосборочном цеху, красный диплом, сейчас обучаю станочников в политехническом колледже и разрабатываю прикладные решения для цеха.
              </>
            ) : (
              <>
                Hands-on machinist: 2 years shop-floor assembly experience, honors technician degree, now training machinists at polytechnic college and developing practical tooling solutions.
              </>
            )}
          </p>
        </div>

        {/* Minimal Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-black text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{currentLang === 'ru' ? 'Связаться' : 'Get in touch'}</span>
          </button>

          <a
            href="https://t.me/valera_mechanic"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-neutral-300 hover:border-black text-black transition-colors uppercase tracking-wider flex items-center gap-2"
          >
            <span>Telegram @valera_mechanic</span>
          </a>

          <button
            onClick={() => onNavigate('projects')}
            className="px-5 py-2.5 text-neutral-600 hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5 ml-auto"
          >
            <span>{currentLang === 'ru' ? 'Смотреть проекты' : 'View Projects'}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
