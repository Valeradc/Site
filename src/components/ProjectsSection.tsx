import React, { useState } from 'react';
import { PROJECTS_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { Activity, MessageSquare, Headphones, Play, Pause, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  showBlueprintMode
}) => {
  const bp = SECTION_BLUEPRINTS.projects;
  const [activeTab, setActiveTab] = useState<string>(PROJECTS_DATA[0].id);

  // Damping demo state
  const [isDampingActive, setIsDampingActive] = useState(true);

  // Telegram bot state
  const [botMessages, setBotMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'bot', text: 'ЦехКонтроль v2.1. Станок #04 (16К20). Выберите действие:', time: '07:55' }
  ]);

  // Podcast state
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEpisode, setActiveEpisode] = useState(18);

  const handleBotAction = (action: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (action === 'shift') {
      setBotMessages(prev => [
        ...prev,
        { sender: 'user', text: 'Сдать смену: Детали вал-шестерня (24 шт). Брак: 0. Пластины Sandvik WNMG (износ 40%).', time },
        { sender: 'bot', text: '✓ Смена принята в журнал. Станок #04 готов к передаче мастеру смены #2.', time }
      ]);
    } else if (action === 'tool') {
      setBotMessages(prev => [
        ...prev,
        { sender: 'user', text: 'Заказ инструмента: Резец проходной упорный 25x25 + 5 пластин CNMG 120408.', time },
        { sender: 'bot', text: '✓ Заявка #412 отправлена кладовщику цеха #3.', time }
      ]);
    } else {
      setBotMessages(prev => [
        ...prev,
        { sender: 'user', text: 'Зафиксирован люфт суппорта по оси Z (0.04 мм). Требуется диагностика механика.', time },
        { sender: 'bot', text: '⚠️ Заявка в службу главного механика (ОГМ) сформирована.', time }
      ]);
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? bp.titleRu : bp.titleEn}
          </h2>
          <span className="text-xs font-mono text-neutral-400">02 / 05</span>
        </div>

        {/* Blueprint Spec if enabled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 02 (ПРОЕКТЫ):' : 'SECTION 02 SPEC (PROJECTS):'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-black text-xs font-mono">
          {PROJECTS_DATA.map((p, idx) => {
            const isSelected = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-3.5 text-left transition-colors border-b sm:border-b-0 sm:border-r last:border-r-0 border-neutral-200 ${
                  isSelected
                    ? 'bg-black text-white font-semibold'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <div className={`text-[10px] ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  0{idx + 1} / {currentLang === 'ru' ? p.categoryRu : p.categoryEn}
                </div>
                <div className="truncate mt-1 text-xs">
                  {currentLang === 'ru' ? p.titleRu : p.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project View */}
        {PROJECTS_DATA.filter(p => p.id === activeTab).map((project) => (
          <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Project Details */}
            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-block border border-black px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-black">
                  {currentLang === 'ru' ? project.badgeRu : project.badgeEn}
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-black leading-snug">
                  {currentLang === 'ru' ? project.titleRu : project.titleEn}
                </h3>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {currentLang === 'ru' ? project.fullDescRu : project.fullDescEn}
              </p>

              {/* Technical Specifications Grid */}
              <div className="border-t border-b border-neutral-200 py-4">
                <div className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider mb-3">
                  {currentLang === 'ru' ? 'ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ И РЕЗУЛЬТАТЫ' : 'SPECIFICATIONS & METRICS'}
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  {project.technicalSpecs.map((spec, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-neutral-500 text-[11px]">
                        {currentLang === 'ru' ? spec.labelRu : spec.labelEn}
                      </div>
                      <div className="font-semibold text-black">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact summary */}
              <div className="text-xs text-neutral-600 font-mono">
                <strong>{currentLang === 'ru' ? 'Внедрение: ' : 'Impact: '}</strong>
                {currentLang === 'ru' ? project.impactRu : project.impactEn}
              </div>
            </div>

            {/* Interactive Monochrome Widget Container */}
            <div className="md:col-span-5 border border-black p-5 bg-neutral-50 space-y-4 font-mono text-xs">
              
              {/* Hardware Vibration Simulation */}
              {project.visualType === 'blueprint' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <span className="text-[10px] tracking-wider uppercase text-black font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ru' ? 'ВИБРОГРАММА СТАНКА' : 'VIBRATION PROFILE'}</span>
                    </span>
                    <button
                      onClick={() => setIsDampingActive(!isDampingActive)}
                      className={`px-2 py-0.5 text-[10px] uppercase border transition-colors ${
                        isDampingActive
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-neutral-300'
                      }`}
                    >
                      {isDampingActive ? (currentLang === 'ru' ? 'ДЕПРЕССОР: ВКЛ' : 'DAMPER: ON') : (currentLang === 'ru' ? 'ДЕПРЕССОР: ВЫКЛ' : 'DAMPER: OFF')}
                    </button>
                  </div>

                  {/* Minimalist SVG Waveform */}
                  <div className="h-28 bg-white border border-neutral-200 flex items-center justify-center p-2 relative overflow-hidden">
                    <svg viewBox="0 0 300 80" className="w-full h-full stroke-current text-black fill-none">
                      <path
                        d={
                          isDampingActive
                            ? "M 0 40 Q 20 37, 40 40 T 80 40 T 120 40 T 160 40 T 200 40 T 240 40 T 280 40 T 300 40"
                            : "M 0 40 Q 15 10, 30 40 T 60 40 T 90 10 T 120 70 T 150 15 T 180 65 T 210 20 T 240 60 T 270 30 T 300 40"
                        }
                        strokeWidth="1.5"
                        className="transition-all duration-500"
                      />
                    </svg>
                    <div className="absolute bottom-1 right-2 text-[9px] text-neutral-400">
                      {isDampingActive ? 'Ra 0.8 мкм (Сглажено)' : 'Ra 3.2 мкм (Резонанс)'}
                    </div>
                  </div>

                  <div className="text-[11px] text-neutral-600 space-y-1">
                    <div className="flex justify-between">
                      <span>{currentLang === 'ru' ? 'Снижение биения:' : 'Vibration Cut:'}</span>
                      <span className="font-bold text-black">{isDampingActive ? '-38%' : '0%'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{currentLang === 'ru' ? 'Шероховатость:' : 'Roughness:'}</span>
                      <span className="font-bold text-black">{isDampingActive ? 'Ra 0.8' : 'Ra 3.2'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Telegram Bot Simulation */}
              {project.visualType === 'telegram-bot' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <span className="text-[10px] tracking-wider uppercase text-black font-semibold flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ru' ? 'ТЕРМИНАЛ БОТА' : 'BOT SIMULATOR'}</span>
                    </span>
                    <span className="text-[9px] text-neutral-400">@tseh_control_bot</span>
                  </div>

                  {/* Chat messages */}
                  <div className="h-32 overflow-y-auto space-y-2 p-2 bg-white border border-neutral-200 text-[11px]">
                    {botMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-1.5 border ${
                          msg.sender === 'user'
                            ? 'bg-neutral-100 border-neutral-300 ml-4'
                            : 'bg-white border-black mr-4'
                        }`}
                      >
                        <div className="text-[9px] text-neutral-400 flex justify-between">
                          <span>{msg.sender === 'user' ? 'Токарь (Вы)' : 'Бот ЦехКонтроль'}</span>
                          <span>{msg.time}</span>
                        </div>
                        <div className="text-black mt-0.5">{msg.text}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action triggers */}
                  <div className="grid grid-cols-3 gap-1 pt-1">
                    <button
                      onClick={() => handleBotAction('shift')}
                      className="p-1.5 bg-black text-white hover:bg-neutral-800 text-[10px] tracking-tight uppercase"
                    >
                      Смена
                    </button>
                    <button
                      onClick={() => handleBotAction('tool')}
                      className="p-1.5 border border-black hover:bg-neutral-100 text-[10px] tracking-tight uppercase"
                    >
                      Резец
                    </button>
                    <button
                      onClick={() => handleBotAction('fault')}
                      className="p-1.5 border border-neutral-300 hover:border-black text-[10px] tracking-tight uppercase"
                    >
                      Люфт
                    </button>
                  </div>
                </div>
              )}

              {/* Podcast Player */}
              {project.visualType === 'podcast' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                    <span className="text-[10px] tracking-wider uppercase text-black font-semibold flex items-center gap-1.5">
                      <Headphones className="w-3.5 h-3.5" />
                      <span>{currentLang === 'ru' ? 'ПЛЕЕР ВЫПУСКА #18' : 'EPISODE #18'}</span>
                    </span>
                    <span className="text-[9px] text-neutral-400">35k+ listens</span>
                  </div>

                  <div className="bg-white border border-neutral-200 p-3 space-y-2">
                    <div className="text-[11px] font-semibold text-black">
                      {currentLang === 'ru' 
                        ? '«Токарь 6-го разряда против 5-осевого ЧПУ: мифы о зарплатах»' 
                        : '"Veteran Manual Machinist vs 5-Axis CNC: Wage Truths"'}
                    </div>

                    {/* Fake progress bar */}
                    <div className="space-y-1">
                      <div className="h-1 bg-neutral-200 w-full overflow-hidden">
                        <div className={`h-full bg-black ${isPlaying ? 'w-2/3 transition-all duration-1000' : 'w-1/4'}`} />
                      </div>
                      <div className="flex justify-between text-[9px] text-neutral-400">
                        <span>{isPlaying ? '24:12' : '00:00'}</span>
                        <span>54:30</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full py-1.5 bg-black text-white hover:bg-neutral-800 text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{isPlaying ? (currentLang === 'ru' ? 'Пауза' : 'Pause') : (currentLang === 'ru' ? 'Слушать фрагмент' : 'Play Clip')}</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
