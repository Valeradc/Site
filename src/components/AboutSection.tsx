import React from 'react';
import { GENERAL_INFO, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  showBlueprintMode
}) => {
  const bp = SECTION_BLUEPRINTS.about;

  return (
    <section id="about" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? bp.titleRu : bp.titleEn}
          </h2>
          <span className="text-xs font-mono text-neutral-400">01 / 05</span>
        </div>

        {/* Blueprint Note if toggled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 01:' : 'SECTION 01 SPEC:'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* 2-Column Swiss Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Concise Bio Narrative */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-normal text-black leading-snug">
              {currentLang === 'ru' 
                ? '«Мой путь начался не в кабинетах, а у заводского токарного станка»' 
                : '"My background was built at the factory spindle, not behind a desk"'}
            </h3>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                {currentLang === 'ru' ? (
                  <>
                    Мне 21 год. Окончил машиностроительный техникум с <strong>красным дипломом</strong> по специальности «Технология машиностроения». Отработал 2 года слесарем механосборочных работ на реальном производстве.
                  </>
                ) : (
                  <>
                    I am 21 years old. Graduated with an <strong>Honors Degree</strong> in Mechanical Engineering Technology. Completed 2 years as an assembly fitter on an industrial plant floor.
                  </>
                )}
              </p>

              <p>
                {currentLang === 'ru' ? (
                  <>
                    Сегодня я — <strong>мастер производственного обучения</strong>. Обучаю студентов токарной и фрезерной обработке, работе со стойками ЧПУ (Fanuc, Syntec), теории резания и культуре точного машиностроения.
                  </>
                ) : (
                  <>
                    Today I serve as a <strong>Master of Vocational Training</strong>, teaching students lathe and milling operations, CNC programming (Fanuc, Syntec), cutting tool physics, and the precision ethos of mechanical engineering.
                  </>
                )}
              </p>
            </div>

            {/* Core Values / 2 Bullets */}
            <div className="pt-2 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 border border-neutral-200 space-y-1">
                <div className="font-bold text-black uppercase">
                  {currentLang === 'ru' ? 'ДЛЯ ЗАВОДОВ (45+):' : 'FOR INDUSTRY (45+):'}
                </div>
                <p className="text-neutral-600">
                  {currentLang === 'ru' 
                    ? 'Понимание ЕСКД, теории резания, бережное отношение к оборудованию.' 
                    : 'Deep respect for metallurgy, tolerances, and shop discipline.'}
                </p>
              </div>

              <div className="p-3 border border-neutral-200 space-y-1">
                <div className="font-bold text-black uppercase">
                  {currentLang === 'ru' ? 'ДЛЯ МОЛОДЁЖИ (18–25):' : 'FOR STUDENTS (18-25):'}
                </div>
                <p className="text-neutral-600">
                  {currentLang === 'ru' 
                    ? 'Современный подход: САПР, ЧПУ, собственные IT-боты и достойный доход.' 
                    : 'Modern pathway: CAD/CAM, CNC coding, and high earning potential.'}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Structured Timeline & Metrics Table */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Minimalist Profile Card */}
            <div className="border border-black p-5 space-y-4 font-mono text-xs">
              <div className="text-[10px] uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
                {currentLang === 'ru' ? 'ФАКТЫ И КВАЛИФИКАЦИЯ' : 'VERIFIED MILESTONES'}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Возраст' : 'Age'}</span>
                  <span className="font-semibold text-black">21 {currentLang === 'ru' ? 'год' : 'y.o.'}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Диплом' : 'Degree'}</span>
                  <span className="font-semibold text-black">{currentLang === 'ru' ? 'Красный (15.02.08)' : 'Honors (Tech)'}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Опыт в цеху' : 'Shop Experience'}</span>
                  <span className="font-semibold text-black">2 {currentLang === 'ru' ? 'года (слесарь МСР)' : 'years (fitter)'}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Текущая роль' : 'Current Role'}</span>
                  <span className="font-semibold text-black text-right">{currentLang === 'ru' ? 'Мастер СПО' : 'Vocational Master'}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">{currentLang === 'ru' ? 'Станки' : 'Machines'}</span>
                  <span className="font-semibold text-black">16К20, 1К62, ЧПУ</span>
                </div>
              </div>
            </div>

            {/* Visual Photography note */}
            <div className="p-4 border border-neutral-200 bg-neutral-50 text-[11px] font-mono text-neutral-600 space-y-1">
              <div className="text-black font-semibold uppercase">
                {currentLang === 'ru' ? 'ФОТОКОНЦЕПЦИЯ:' : 'PHOTO CONCEPT:'}
              </div>
              <p>
                {currentLang === 'ru' 
                  ? 'Чёрно-белое портретное фото в опрятной спецовке/поло у станка с микрометром в руках.' 
                  : 'Monochrome portrait in tidy workshop workwear beside an operational lathe.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
