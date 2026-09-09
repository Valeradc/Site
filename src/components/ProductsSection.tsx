import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language, ProjectItem } from '../types';
import { sound } from '../utils/audio';
import { 
  Activity, 
  MessageSquare, 
  Headphones, 
  Play, 
  Pause, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  Cpu, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ProductsSectionProps {
  currentLang: Language;
  showBlueprintMode?: boolean;
  isDark: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  currentLang, 
  showBlueprintMode = false, 
  isDark 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem>(PROJECTS_DATA[0]);

  // Damping demo state
  const [isDampingActive, setIsDampingActive] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Telegram bot interactive simulator
  const [botMessages, setBotMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { 
      sender: 'bot', 
      text: currentLang === 'ru' 
        ? '🤖 Бот «ЦехКонтроль» v2.4 готов. Станок #04 (16К20). Выберите действие:' 
        : '🤖 "TsehControl" bot v2.4 online. Machine #04 (16K20). Select an action:', 
      time: '07:55' 
    }
  ]);

  // Podcast state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeEpisode, setActiveEpisode] = useState<number>(18);
  const [audioProgress, setAudioProgress] = useState<number>(34);

  // Animate podcast progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress(prev => (prev >= 100 ? 0 : prev + 1));
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Canvas Oscilloscope for Vibration Damper
  useEffect(() => {
    if (activeProject.id !== 'magnetic-suspension') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const render = () => {
      offset += isDampingActive ? 0.05 : 0.12;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const h = canvas.height;
      const w = canvas.width;
      const cy = h / 2;

      // Draw oscilloscope grid
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Vibration Wave
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = isDampingActive 
        ? '#10b981' // Green controlled curve
        : '#ef4444'; // Red resonant spikes

      for (let x = 0; x < w; x++) {
        let y: number;
        if (isDampingActive) {
          // Controlled, damped vibration (Ra 0.8)
          y = cy + Math.sin(x * 0.03 + offset) * 12 + Math.sin(x * 0.08 + offset * 1.5) * 4;
        } else {
          // Uncontrolled resonance (Ra 3.2 - chattering tool)
          y = cy + Math.sin(x * 0.04 + offset) * 36 + Math.sin(x * 0.15 + offset * 3) * 22 + (Math.random() - 0.5) * 8;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Laser sweep line
      const sweepX = (offset * 35) % w;
      ctx.strokeStyle = isDampingActive ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(sweepX, 0);
      ctx.lineTo(sweepX, h);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeProject.id, isDampingActive, isDark]);

  const handleBotAction = (action: 'shift' | 'tool' | 'alarm') => {
    sound.play('tab');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (action === 'shift') {
      setBotMessages(prev => [
        ...prev,
        { 
          sender: 'user', 
          text: currentLang === 'ru' 
            ? 'Сдать смену: Детали вал-шестерня (24 шт). Брак: 0. Пластины Sandvik WNMG (износ 40%).' 
            : 'Shift log: Pinion shaft parts (24 pcs). Scrap: 0. Sandvik WNMG inserts (40% wear).', 
          time 
        },
        { 
          sender: 'bot', 
          text: currentLang === 'ru' 
            ? '✓ Смена зафиксирована в цеховом журнале. Станок #04 готов к сдаче смене #2.' 
            : '✓ Shift logged in floor registry. Machine #04 certified for shift #2.', 
          time 
        }
      ]);
    } else if (action === 'tool') {
      setBotMessages(prev => [
        ...prev,
        { 
          sender: 'user', 
          text: currentLang === 'ru' 
            ? 'Заказ инструмента: Резец проходной 25x25 + 5 пластин CNMG 120408.' 
            : 'Tool request: Turning tool 25x25 + 5x CNMG 120408 inserts.', 
          time 
        },
        { 
          sender: 'bot', 
          text: currentLang === 'ru' 
            ? '✓ Заявка #418 передана кладовщику цеха #3. Выдача в 14:00.' 
            : '✓ Requisition #418 queued at shop crib #3. Pickup ready 14:00.', 
          time 
        }
      ]);
    } else {
      setBotMessages(prev => [
        ...prev,
        { 
          sender: 'user', 
          text: currentLang === 'ru' 
            ? 'Люфт суппорта по оси Z (0.04 мм). Требуется диагностика механика.' 
            : 'Z-axis carriage backlash detected (0.04 mm). Mechanic inspect required.', 
          time 
        },
        { 
          sender: 'bot', 
          text: currentLang === 'ru' 
            ? '⚠️ Приоритет ВЫСОКИЙ. Заявка направлена в ОГМ (отдел главного механика).' 
            : '⚠️ HIGH PRIORITY. Ticket dispatched to Chief Mechanical Dept.', 
          time 
        }
      ]);
    }
  };

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => {
        if (selectedCategory === 'hardware') return p.id === 'magnetic-suspension';
        if (selectedCategory === 'digital') return p.id === 'telegram-shop-bot';
        if (selectedCategory === 'media') return p.id === 'machinist-podcast';
        return true;
      });

  return (
    <section 
      id="products" 
      className={`py-14 sm:py-20 border-b transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#0c0d11]' : 'border-[#d2d2d7] bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className={`flex items-baseline justify-between border-b pb-3 ${isDark ? 'border-white/15' : 'border-[#d2d2d7]'}`}>
          <div className="flex items-center gap-2.5">
            <h2 className={`text-xs font-semibold tracking-[0.2em] uppercase font-mono ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              03. {currentLang === 'ru' ? 'ПРОДУКТЫ И РАЗРАБОТКИ' : 'PRODUCTS & DEVELOPMENTS'}
            </h2>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-100 text-neutral-700'
            }`}>
              {PROJECTS_DATA.length} {currentLang === 'ru' ? 'проекта' : 'projects'}
            </span>
          </div>
          <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>03 / 06</span>
        </div>

        {/* Blueprint Spec Note if toggled */}
        {showBlueprintMode && (
          <div className={`p-4 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-white/5 border-white/15 text-neutral-300' : 'bg-[#f5f5f7] border-[#d2d2d7] text-neutral-700'
          }`}>
            <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 03 (ПРОДУКТЫ):' : 'SECTION 03 SPEC (PRODUCTS):'}
            </div>
            <p>
              {currentLang === 'ru' 
                ? 'Демонстрация трёх компетенций: хардверная разработка, цифровой инструмент, отраслевое медиа.' 
                : 'Three disciplines: hardware engineering, digital workflow, and industry media.'}
            </p>
          </div>
        )}

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {[
            { id: 'all', labelRu: 'ВСЕ РАЗРАБОТКИ', labelEn: 'ALL PROJECTS' },
            { id: 'hardware', labelRu: 'ХАРДВЕР / ЖЕЛЕЗО', labelEn: 'HARDWARE' },
            { id: 'digital', labelRu: 'IT-АВТОМАТИЗАЦИЯ', labelEn: 'DIGITAL / BOT' },
            { id: 'media', labelRu: 'МЕДИА / ПОДКАСТ', labelEn: 'MEDIA' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                sound.play('tab');
                setSelectedCategory(tab.id);
              }}
              className={`px-3.5 py-1.5 rounded-full transition-all text-[11px] uppercase tracking-wider border ${
                selectedCategory === tab.id
                  ? isDark 
                    ? 'bg-white text-black border-white font-semibold' 
                    : 'bg-[#1d1d1f] text-white border-[#1d1d1f] font-semibold'
                  : isDark
                    ? 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:border-white/25'
                    : 'bg-[#f5f5f7] border-[#e5e5ea] text-neutral-600 hover:text-[#1d1d1f] hover:border-neutral-300'
              }`}
            >
              {currentLang === 'ru' ? tab.labelRu : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Horizontal Project Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
          {filteredProjects.map((p, idx) => {
            const isSelected = activeProject.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  sound.play('light');
                  setActiveProject(p);
                }}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? isDark
                      ? 'bg-[#14161b] border-white/40 shadow-lg shadow-black/40 ring-1 ring-white/20'
                      : 'bg-[#fbfbfd] border-[#1d1d1f] shadow-md ring-1 ring-[#1d1d1f]'
                    : isDark
                      ? 'bg-[#101217] border-white/10 text-neutral-400 hover:border-white/20 hover:text-neutral-200'
                      : 'bg-white border-[#e5e5ea] text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] mb-2">
                  <span className="opacity-70">0{idx + 1} / {currentLang === 'ru' ? p.categoryRu : p.categoryEn}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ${
                    isSelected 
                      ? isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black' 
                      : isDark ? 'bg-white/5 text-neutral-500' : 'bg-neutral-100 text-neutral-500'
                  }`}>
                    {currentLang === 'ru' ? p.badgeRu : p.badgeEn}
                  </span>
                </div>
                <div className={`font-semibold text-sm truncate ${
                  isSelected ? (isDark ? 'text-white' : 'text-[#1d1d1f]') : ''
                }`}>
                  {currentLang === 'ru' ? p.titleRu : p.titleEn}
                </div>
                <p className="text-[11px] opacity-75 line-clamp-2 mt-1 font-sans">
                  {currentLang === 'ru' ? p.shortDescRu : p.shortDescEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Inspector for Active Project */}
        <div 
          className={`rounded-2xl border p-6 sm:p-8 transition-all space-y-6 ${
            isDark ? 'bg-[#14161b] border-white/15' : 'bg-[#fbfbfd] border-[#d2d2d7]'
          }`}
        >
          {/* Active Project Title & Metadata Bar */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b pb-4 border-current/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded ${
                  isDark ? 'bg-white/10 text-neutral-300' : 'bg-neutral-200 text-neutral-800'
                }`}>
                  {currentLang === 'ru' ? activeProject.categoryRu : activeProject.categoryEn}
                </span>
                <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  {currentLang === 'ru' ? activeProject.statusRu : activeProject.statusEn}
                </span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-semibold tracking-[-0.02em] ${
                isDark ? 'text-white' : 'text-[#1d1d1f]'
              }`}>
                {currentLang === 'ru' ? activeProject.titleRu : activeProject.titleEn}
              </h3>
            </div>
            
            <div className={`text-xs font-mono px-3 py-1 rounded-full border self-start sm:self-auto ${
              isDark ? 'border-white/10 text-neutral-400' : 'border-neutral-300 text-neutral-600'
            }`}>
              {currentLang === 'ru' ? activeProject.badgeRu : activeProject.badgeEn}
            </div>
          </div>

          {/* Body Narrative */}
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-neutral-300' : 'text-[#424245]'
          }`}>
            {currentLang === 'ru' ? activeProject.fullDescRu : activeProject.fullDescEn}
          </p>

          {/* Interactive Feature: Specific to each project type */}
          {activeProject.id === 'magnetic-suspension' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span className={`font-semibold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {currentLang === 'ru' ? 'ИНТЕРАКТИВНЫЙ ОСЦИЛЛОГРАФ ВИБРАЦИЙ (ТОЧЕНИЕ L/D > 8)' : 'VIBRATION OSCILLOSCOPE (TURNING L/D > 8)'}
                  </span>
                </div>
                
                {/* Damping Toggle Button */}
                <button
                  onClick={() => {
                    sound.play('toggle');
                    setIsDampingActive(!isDampingActive);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 border transition-all ${
                    isDampingActive
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold'
                      : 'bg-red-500/10 border-red-500/30 text-red-400 font-semibold'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isDampingActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                  <span>
                    {isDampingActive 
                      ? (currentLang === 'ru' ? 'ДЕФМПЕР ВКЛЮЧЕН (-38%)' : 'DAMPER ENGAGED (-38%)')
                      : (currentLang === 'ru' ? 'БЕЗ ДЕМПФЕРА (РЕЗОНАНС)' : 'WITHOUT DAMPER (RESONANT)')}
                  </span>
                </button>
              </div>

              {/* Real-time HTML5 Oscilloscope Canvas */}
              <div className="relative rounded-xl overflow-hidden border border-current/15 bg-black">
                <canvas 
                  ref={canvasRef} 
                  width={800} 
                  height={180} 
                  className="w-full h-44 block"
                />
                <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-400 flex items-center gap-4">
                  <span>CH1: ACCELEROMETER 10mV/g</span>
                  <span className={isDampingActive ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                    {isDampingActive ? 'Ra 0.8 μm (ЗЕРКАЛО)' : 'Ra 3.2 μm (ДРОБЛЕНИЕ)'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeProject.id === 'telegram-shop-bot' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span className={`font-semibold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {currentLang === 'ru' ? 'СИМУЛЯТОР ЦЕХОВОГО БОТА «ЦЕХКОНТРОЛЬ»' : '"TSEHCONTROL" SHOP BOT SIMULATOR'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  {currentLang === 'ru' ? '420+ токарей и мастеров онлайн' : '420+ machinists & foremen online'}
                </span>
              </div>

              {/* Smartphone Telegram Terminal Mockup */}
              <div className={`rounded-xl border p-4 space-y-4 font-mono text-xs ${
                isDark ? 'bg-[#090a0f] border-white/10' : 'bg-white border-[#e5e5ea]'
              }`}>
                {/* Chat window */}
                <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                  {botMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className={`px-3 py-2 rounded-xl max-w-[85%] text-[11px] leading-snug ${
                        msg.sender === 'user'
                          ? 'bg-sky-600 text-white rounded-br-none'
                          : isDark ? 'bg-white/10 text-neutral-200 rounded-bl-none' : 'bg-neutral-100 text-neutral-800 rounded-bl-none'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-neutral-500 mt-0.5 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Action Buttons */}
                <div className="pt-2 border-t border-current/10 flex flex-wrap gap-2 text-[11px]">
                  <button
                    onClick={() => handleBotAction('shift')}
                    className={`px-3 py-1.5 rounded-lg border transition-all hover:scale-[1.02] ${
                      isDark 
                        ? 'border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20' 
                        : 'border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100'
                    }`}
                  >
                    📝 {currentLang === 'ru' ? 'Сдать смену (25 сек)' : 'Log shift (25s)'}
                  </button>

                  <button
                    onClick={() => handleBotAction('tool')}
                    className={`px-3 py-1.5 rounded-lg border transition-all hover:scale-[1.02] ${
                      isDark 
                        ? 'border-white/15 bg-white/5 text-neutral-300 hover:bg-white/10' 
                        : 'border-neutral-300 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    📦 {currentLang === 'ru' ? 'Заказ резцов/пластин' : 'Order tooling/inserts'}
                  </button>

                  <button
                    onClick={() => handleBotAction('alarm')}
                    className={`px-3 py-1.5 rounded-lg border transition-all hover:scale-[1.02] ${
                      isDark 
                        ? 'border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20' 
                        : 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100'
                    }`}
                  >
                    ⚠️ {currentLang === 'ru' ? 'Сигнал механику (люфт)' : 'Downtime alert (Z-axis)'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeProject.id === 'machinist-podcast' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <Headphones className="w-4 h-4 text-amber-500" />
                  <span className={`font-semibold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                    {currentLang === 'ru' ? 'ИНТЕРАКТИВНЫЙ ПЛЕЕР ПОДКАСТА «СТРУЖКА И ЛЮДИ»' : 'INTERACTIVE PODCAST PLAYER'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  35k+ {currentLang === 'ru' ? 'прослушиваний' : 'total listens'}
                </span>
              </div>

              {/* Player UI */}
              <div className={`rounded-xl border p-4 sm:p-5 space-y-4 font-mono text-xs ${
                isDark ? 'bg-[#090a0f] border-white/10' : 'bg-white border-[#e5e5ea]'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">
                      {currentLang === 'ru' ? `ВЫПУСК #${activeEpisode}` : `EPISODE #${activeEpisode}`}
                    </div>
                    <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                      {activeEpisode === 18 
                        ? (currentLang === 'ru' ? '«ЧПУ против Универсала: кто победит в цеху 2026?»' : '"CNC vs Manual Lathe: Who Wins the 2026 Machine Shop?"')
                        : (currentLang === 'ru' ? '«Реальные зарплаты станочников и брак на оборонных деталях»' : '"Real Machinist Wages & Scrap on Defense Parts"')}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.play('heavy');
                      setIsPlaying(!isPlaying);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isPlaying 
                        ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30' 
                        : isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#1d1d1f] text-white hover:bg-black'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                  </button>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="flex items-center gap-1 h-12 py-1">
                  {Array.from({ length: 48 }).map((_, i) => {
                    const isPassed = (i / 48) * 100 <= audioProgress;
                    const height = isPlaying 
                      ? Math.max(15, Math.sin(i * 0.4 + Date.now() * 0.005) * 100) 
                      : (Math.sin(i * 0.3) * 35 + 45);
                    return (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className={`flex-1 rounded-full transition-all duration-150 ${
                          isPassed 
                            ? 'bg-amber-500' 
                            : isDark ? 'bg-white/15' : 'bg-neutral-200'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Progress bar and episode selector */}
                <div className="flex items-center justify-between text-[10px] text-neutral-400">
                  <span>14:20 / 52:10</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => {
                        sound.play('tab');
                        setActiveEpisode(18);
                      }}
                      className={`px-2 py-0.5 rounded ${activeEpisode === 18 ? 'bg-amber-500/20 text-amber-400' : 'hover:text-neutral-200'}`}
                    >
                      #18
                    </button>
                    <button 
                      onClick={() => {
                        sound.play('tab');
                        setActiveEpisode(17);
                      }}
                      className={`px-2 py-0.5 rounded ${activeEpisode === 17 ? 'bg-amber-500/20 text-amber-400' : 'hover:text-neutral-200'}`}
                    >
                      #17
                    </button>
                    <span className="opacity-50">• Яндекс Музыка, YouTube, VK</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technical Specs 4-Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
            {activeProject.technicalSpecs.map((spec, i) => (
              <div 
                key={i} 
                className={`p-3.5 rounded-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white border-[#e5e5ea]'
                }`}
              >
                <div className={`text-[10px] uppercase tracking-wider mb-1 ${
                  isDark ? 'text-neutral-400' : 'text-[#86868b]'
                }`}>
                  {currentLang === 'ru' ? spec.labelRu : spec.labelEn}
                </div>
                <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Impact Note & Link */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono ${
            isDark ? 'bg-emerald-500/5 border-emerald-500/20 text-neutral-300' : 'bg-emerald-50/60 border-emerald-200 text-neutral-800'
          }`}>
            <div>
              <span className="font-semibold uppercase tracking-wider text-emerald-500">
                {currentLang === 'ru' ? 'РЕЗУЛЬТАТ ВНЕДРЕНИЯ: ' : 'VERIFIED IMPACT: '}
              </span>
              <span>{currentLang === 'ru' ? activeProject.impactRu : activeProject.impactEn}</span>
            </div>

            <a
              href="https://t.me/Valera_dc"
              target="_blank"
              rel="noreferrer"
              className={`px-3 py-1.5 rounded-lg border whitespace-nowrap self-start sm:self-auto transition-colors flex items-center gap-1.5 text-[11px] font-semibold ${
                isDark 
                  ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white' 
                  : 'border-neutral-300 bg-white hover:bg-neutral-100 text-[#1d1d1f]'
              }`}
            >
              <span>{currentLang === 'ru' ? 'Запросить чертежи / демо' : 'Request CAD / Demo'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
