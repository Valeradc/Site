import React from 'react';
import { SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  showBlueprintMode
}) => {
  return (
    <section id="about" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? 'ОБО МНЕ' : 'ABOUT ME'}
          </h2>
          <span className="text-xs font-mono text-neutral-400">02 / 06</span>
        </div>

        {/* Blueprint Note if toggled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ: РАЗДЕЛ ОБО МНЕ' : 'SPEC: ABOUT ME'}
            </div>
            <p>
              {currentLang === 'ru'
                ? 'Прямой, честный тон практика: красный диплом, 2 года на производстве, мастер обучения.'
                : 'Direct, honest practitioner narrative: honors degree, 2 years shop floor, vocational trainer.'}
            </p>
          </div>
        )}

        {/* 2-Column Swiss Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Exact Bio Narrative as requested */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light text-black leading-snug">
              {currentLang === 'ru' 
                ? 'Привет, меня зовут Доценко Валерий' 
                : 'Hello, my name is Valeriy Dotsenko'}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              <p>
                {currentLang === 'ru' ? (
                  <>
                    Окончил техникум с красным дипломом на кафдре «Технология машиностроения». Отработал 2 года слесарем механосборочных работ на реальном производстве.
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
                    Сегодня я — мастер производственного обучения. Обучаю студентов ремонту и работе с технологическим оборудованием (станки).
                  </>
                ) : (
                  <>
                    Today I serve as a Master of Vocational Training. I instruct students in repair, maintenance, and operation of industrial machinery and machine tools.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Col 2: Structured Timeline & Metrics Table */}
          <div className="md:col-span-5 space-y-6">
            <div className="border border-black p-5 space-y-4 font-mono text-xs bg-white">
              <div className="text-[10px] uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2 font-semibold">
                {currentLang === 'ru' ? 'КВАЛИФИКАЦИЯ И ОПЫТ' : 'CREDENTIALS & EXPERIENCE'}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Образование' : 'Education'}</span>
                  <span className="font-semibold text-black text-right">{currentLang === 'ru' ? 'Красный диплом' : 'Honors Degree'}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Кафедра' : 'Department'}</span>
                  <span className="font-semibold text-black text-right">{currentLang === 'ru' ? 'Технология машиностроения' : 'Mechanical Tech'}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Опыт на заводе' : 'Plant Experience'}</span>
                  <span className="font-semibold text-black text-right">2 {currentLang === 'ru' ? 'года (слесарь МСР)' : 'years (fitter)'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Текущая должность' : 'Current Position'}</span>
                  <span className="font-semibold text-black text-right">{currentLang === 'ru' ? 'Мастер ПО' : 'Vocational Master'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
