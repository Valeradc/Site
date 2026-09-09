import React, { useState } from 'react';
import { EVENTS_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language, EventItem } from '../types';
import { sound } from '../utils/audio';
import { 
  Calendar, 
  MapPin, 
  Mic2, 
  Video, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  Users
} from 'lucide-react';

interface EventsSectionProps {
  currentLang: Language;
  showBlueprintMode?: boolean;
  isDark: boolean;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  currentLang,
  showBlueprintMode = false,
  isDark
}) => {
  const [activeEventId, setActiveEventId] = useState<string>(EVENTS_DATA[0].id);

  return (
    <section 
      id="conferences" 
      className={`py-14 sm:py-20 border-b transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#090a0f]' : 'border-[#d2d2d7] bg-[#fbfbfd]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className={`flex items-baseline justify-between border-b pb-3 ${isDark ? 'border-white/15' : 'border-[#d2d2d7]'}`}>
          <div className="flex items-center gap-2.5">
            <h2 className={`text-xs font-semibold tracking-[0.2em] uppercase font-mono ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              04. {currentLang === 'ru' ? 'КОНФЕРЕНЦИИ И ВЫСТУПЛЕНИЯ' : 'CONFERENCES & SPEAKING'}
            </h2>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-100 text-neutral-700'
            }`}>
              {EVENTS_DATA.length} {currentLang === 'ru' ? 'доклада' : 'events'}
            </span>
          </div>
          <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>04 / 06</span>
        </div>

        {/* Blueprint Spec Note */}
        {showBlueprintMode && (
          <div className={`p-4 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-white/5 border-white/15 text-neutral-300' : 'bg-[#f5f5f7] border-[#d2d2d7] text-neutral-700'
          }`}>
            <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 04 (ВЫСТУПЛЕНИЯ):' : 'SECTION 04 SPEC (SPEAKING):'}
            </div>
            <p>
              {currentLang === 'ru' 
                ? 'Информация для организаторов форумов и конференций: темы, опыт, форматы. Хронологический таймлайн.' 
                : 'Dossier for organizers: keynotes, panels, hands-on workshop topics without bureaucratic speech.'}
            </p>
          </div>
        )}

        {/* Events Timeline Cards Grid */}
        <div className="space-y-4">
          {EVENTS_DATA.map((event, idx) => {
            const isExpanded = activeEventId === event.id;
            const isUpcoming = event.status === 'upcoming';

            return (
              <div
                key={event.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? isDark 
                      ? 'bg-[#14161b] border-white/30 shadow-xl shadow-black/40' 
                      : 'bg-white border-[#1d1d1f] shadow-md'
                    : isDark
                      ? 'bg-[#101217] border-white/10 hover:border-white/20'
                      : 'bg-white border-[#e5e5ea] hover:border-neutral-300'
                }`}
              >
                {/* Event Summary Bar (Clickable) */}
                <button
                  onClick={() => {
                    sound.play('light');
                    setActiveEventId(isExpanded ? '' : event.id);
                  }}
                  className="w-full p-5 sm:p-6 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                      {/* Status Badge */}
                      <span className={`px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                        isUpcoming
                          ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400'
                          : isDark ? 'bg-white/10 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                      }`}>
                        {isUpcoming ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                        <span>
                          {isUpcoming 
                            ? (currentLang === 'ru' ? 'ПРЕДСТОЯЩЕЕ' : 'UPCOMING') 
                            : (currentLang === 'ru' ? 'ПРОВЕДЕНО' : 'COMPLETED')}
                        </span>
                      </span>

                      {/* Date & Location */}
                      <span className={`flex items-center gap-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="opacity-40">•</span>
                      <span className={`flex items-center gap-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        <MapPin className="w-3 h-3" />
                        {currentLang === 'ru' ? event.locationRu : event.locationEn}
                      </span>
                    </div>

                    {/* Event Name */}
                    <h3 className={`text-base sm:text-lg font-semibold tracking-[-0.015em] ${
                      isDark ? 'text-white' : 'text-[#1d1d1f]'
                    }`}>
                      {currentLang === 'ru' ? event.titleRu : event.titleEn}
                    </h3>
                  </div>

                  {/* Right: Role Badge & Expand toggle */}
                  <div className="flex items-center gap-3 self-start md:self-auto font-mono">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                      isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-800'
                    }`}>
                      <Mic2 className="w-3 h-3 inline mr-1.5 opacity-70" />
                      {currentLang === 'ru' ? event.roleRu : event.roleEn}
                    </span>
                    <div className={`p-1.5 rounded-full border transition-transform duration-200 ${
                      isExpanded ? 'rotate-90' : ''
                    } ${isDark ? 'border-white/10 text-neutral-400' : 'border-neutral-200 text-neutral-500'}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className={`px-5 sm:px-6 pb-6 pt-2 border-t space-y-4 font-mono text-xs ${
                    isDark ? 'border-white/10' : 'border-neutral-100'
                  }`}>
                    {/* Keynote Topic */}
                    <div className={`p-4 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-neutral-50 border-neutral-200 text-[#1d1d1f]'
                    }`}>
                      <div className={`text-[10px] uppercase tracking-widest font-semibold mb-1 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        {currentLang === 'ru' ? 'ТЕМА ВЫСТУПЛЕНИЯ:' : 'KEYNOTE / SESSION TOPIC:'}
                      </div>
                      <div className="font-sans font-medium text-sm sm:text-base leading-snug">
                        {currentLang === 'ru' ? event.topicRu : event.topicEn}
                      </div>
                    </div>

                    {/* Key Takeaways / Agenda Points */}
                    <div className="space-y-2">
                      <div className={`text-[11px] font-bold uppercase tracking-wider ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {currentLang === 'ru' ? 'КЛЮЧЕВЫЕ ТЕЗИСЫ И МАТЕРИАЛЫ:' : 'KEY POINTS & AGENDA:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(currentLang === 'ru' ? event.keyPointsRu : event.keyPointsEn).map((pt, i) => (
                          <div 
                            key={i} 
                            className={`p-3 rounded-lg border flex items-start gap-2 text-[11px] font-sans ${
                              isDark ? 'border-white/10 bg-white/5 text-neutral-300' : 'border-neutral-200 bg-white text-neutral-700'
                            }`}
                          >
                            <span className="text-emerald-500 font-bold mt-0.5">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions inside card */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px]">
                      {event.recordingAvailable && (
                        <span className="flex items-center gap-1.5 text-sky-400">
                          <Video className="w-3.5 h-3.5" />
                          <span>{currentLang === 'ru' ? 'Видеозапись доступна по запросу' : 'Video recording available on request'}</span>
                        </span>
                      )}

                      <a
                        href="https://t.me/Valera_dc"
                        target="_blank"
                        rel="noreferrer"
                        className={`px-4 py-2 rounded-xl border uppercase tracking-wider font-semibold transition-all ml-auto flex items-center gap-1.5 ${
                          isDark 
                            ? 'bg-white text-black hover:bg-neutral-200' 
                            : 'bg-[#1d1d1f] text-white hover:bg-black'
                        }`}
                      >
                        <span>{currentLang === 'ru' ? 'Пригласить спикером' : 'Invite as Speaker'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Organizer Notice Banner */}
        <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs ${
          isDark ? 'bg-[#14161b] border-white/15 text-neutral-300' : 'bg-white border-[#d2d2d7] text-neutral-800'
        }`}>
          <div className="space-y-1">
            <div className="font-semibold uppercase text-emerald-500 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{currentLang === 'ru' ? 'ДЛЯ ОРГАНИЗАТОРОВ МЕРОПРИЯТИЙ' : 'FOR EVENT PRODUCERS'}</span>
            </div>
            <p className="text-[11px] font-sans text-neutral-400">
              {currentLang === 'ru'
                ? 'Выступления без чиновничьего пафоса. Опыт работы у станка, цифры, реальные кейсы колледжа и внедрений.'
                : 'Ground-level speaking without bureaucratic jargon. Direct shop-floor data, machining metrics, and student case studies.'}
            </p>
          </div>

          <a
            href="https://t.me/Valera_dc"
            target="_blank"
            rel="noreferrer"
            className={`px-5 py-2.5 rounded-full uppercase tracking-wider font-medium text-xs whitespace-nowrap transition-all text-center ${
              isDark ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : 'bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300'
            }`}
          >
            {currentLang === 'ru' ? 'Обсудить дату доклада' : 'Coordinate Keynote Date'}
          </a>
        </div>

      </div>
    </section>
  );
};
