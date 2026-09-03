import React from 'react';
import { GENERAL_INFO } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { Send, ArrowDown, Image as ImageIcon } from 'lucide-react';

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
    <section id="industrial-creator" className="pt-10 sm:pt-16 pb-14 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">

        {/* Blueprint Guide Annotation Banner if active */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-800">
            <div className="font-bold uppercase tracking-wider text-black">
              {currentLang === 'ru' ? 'БРИФ: РАЗДЕЛ INDUSTRIAL CREATOR' : 'SPEC: INDUSTRIAL CREATOR'}
            </div>
            <p className="text-neutral-600">
              {currentLang === 'ru'
                ? 'Названия раздела нет. Заголовок industrial creator, место для картинки и 3 кнопки действий.'
                : 'No section title. Heading: industrial creator, reserved image slot, and 3 action buttons.'}
            </p>
          </div>
        )}

        {/* Main Grid: Content & Image Slot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left: Headline & Buttons */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-black uppercase leading-tight font-sans">
                industrial creator
              </h1>
              <div className="text-xs sm:text-sm font-mono tracking-[0.2em] text-neutral-500 uppercase">
                {currentLang === 'ru' ? 'ДОЦЕНКО ВАЛЕРИЙ • ТЕХНИК-МЕХАНИК' : 'VALERIY DOTSENKO • MECHANICAL TECHNICIAN'}
              </div>
            </div>

            {/* Actions requested: связаться / телеграм @Valera_dc / смотреть проекты */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 text-xs font-mono">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 bg-black text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{currentLang === 'ru' ? 'Связаться' : 'Get in touch'}</span>
              </button>

              <a
                href={GENERAL_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-neutral-300 hover:border-black text-black transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                <span>{currentLang === 'ru' ? 'Телеграм @Valera_dc' : 'Telegram @Valera_dc'}</span>
              </a>

              <button
                onClick={() => onNavigate('products')}
                className="px-5 py-2.5 text-neutral-600 hover:text-black transition-colors uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>{currentLang === 'ru' ? 'Смотреть проекты' : 'View Projects'}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Reserved Image Placeholder Frame */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full border border-black bg-neutral-50 flex flex-col items-center justify-center p-6 text-center text-neutral-500 font-mono relative overflow-hidden group">
              {/* Subtle crosshair guides in Swiss style */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-full border border-dashed border-neutral-400" />
                <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-neutral-400" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-neutral-400" />
              </div>

              <ImageIcon className="w-10 h-10 text-neutral-400 mb-3 stroke-[1.25]" />
              <div className="text-xs uppercase tracking-widest text-black font-semibold">
                {currentLang === 'ru' ? 'МЕСТО ДЛЯ КАРТИНКИ' : 'IMAGE PLACEHOLDER'}
              </div>
              <div className="text-[10px] text-neutral-400 mt-1">
                4:5 PORTRAIT / 800 × 1000 PX
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
