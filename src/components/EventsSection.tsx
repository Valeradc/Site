import React from 'react';
import { EVENTS_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { Calendar, MapPin, Mic, Video, CheckCircle2 } from 'lucide-react';

interface EventsSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  currentLang,
  showBlueprintMode
}) => {
  const bp = SECTION_BLUEPRINTS.events;

  return (
    <section id="events" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? bp.titleRu : bp.titleEn}
          </h2>
          <span className="text-xs font-mono text-neutral-400">04 / 05</span>
        </div>

        {/* Blueprint Spec if enabled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 04 (ВЫСТУПЛЕНИЯ):' : 'SECTION 04 SPEC (SPEAKING):'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* Swiss Chronological Events Table */}
        <div className="border border-black divide-y divide-neutral-200 font-mono text-xs">
          
          {/* Table Header */}
          <div className="hidden sm:grid sm:grid-cols-12 bg-neutral-100 p-3 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
            <div className="col-span-2">{currentLang === 'ru' ? 'ДАТА / СТАТУС' : 'DATE / STATUS'}</div>
            <div className="col-span-4">{currentLang === 'ru' ? 'СОБЫТИЕ И ГОРОД' : 'EVENT & CITY'}</div>
            <div className="col-span-4">{currentLang === 'ru' ? 'ТЕМА ДОКЛАДА' : 'TOPIC / KEYNOTE'}</div>
            <div className="col-span-2 text-right">{currentLang === 'ru' ? 'РОЛЬ' : 'ROLE'}</div>
          </div>

          {/* Table Rows */}
          {EVENTS_DATA.map((item) => (
            <div key={item.id} className="p-4 sm:p-3 sm:grid sm:grid-cols-12 gap-2 items-center bg-white hover:bg-neutral-50 transition-colors space-y-2 sm:space-y-0">
              
              {/* Col 1: Date & Status */}
              <div className="col-span-2 space-y-1">
                <div className="font-semibold text-black">{item.date}</div>
                <div className="text-[10px] text-neutral-400 uppercase">
                  {item.status === 'upcoming' 
                    ? (currentLang === 'ru' ? '• АНОНС' : '• UPCOMING') 
                    : (currentLang === 'ru' ? '✓ ЗАВЕРШЕНО' : '✓ COMPLETED')}
                </div>
              </div>

              {/* Col 2: Event Name & Location */}
              <div className="col-span-4 space-y-0.5">
                <div className="text-black font-medium">
                  {currentLang === 'ru' ? item.titleRu : item.titleEn}
                </div>
                <div className="text-neutral-500 text-[11px]">
                  {currentLang === 'ru' ? item.locationRu : item.locationEn}
                </div>
              </div>

              {/* Col 3: Topic */}
              <div className="col-span-4 text-neutral-700 text-[11px] leading-relaxed">
                {currentLang === 'ru' ? item.topicRu : item.topicEn}
              </div>

              {/* Col 4: Role */}
              <div className="col-span-2 sm:text-right">
                <span className="inline-block border border-neutral-300 px-2 py-0.5 text-[10px] uppercase text-black bg-white">
                  {currentLang === 'ru' ? item.roleRu : item.roleEn}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Speaker Topics Card for Event Organizers */}
        <div className="border border-neutral-300 p-5 bg-neutral-50 space-y-3 font-mono text-xs">
          <div className="text-black font-bold uppercase tracking-wider text-[11px]">
            {currentLang === 'ru' ? 'ДЛЯ ОРГАНИЗАТОРОВ КОНФЕРЕНЦИЙ:' : 'FOR EVENT ORGANIZERS:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-neutral-700 text-[11px]">
            <div className="p-3 bg-white border border-neutral-200">
              <strong>1. Реформа СПО:</strong> Как учить станочников в 2026 году без формализма.
            </div>
            <div className="p-3 bg-white border border-neutral-200">
              <strong>2. Удержание кадров:</strong> Как заводам не терять выпускников в первые 90 дней.
            </div>
            <div className="p-3 bg-white border border-neutral-200">
              <strong>3. Цифровой цех:</strong> Боты, трекеры и автоматизация без миллионных затрат.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
