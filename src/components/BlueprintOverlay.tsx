import React, { useState } from 'react';
import { COPYWRITING_MANIFESTO, SECTION_BLUEPRINTS, NAV_ITEMS } from '../data/siteContent';
import { Language } from '../types';
import { X, Copy, Check, FileText } from 'lucide-react';

interface BlueprintOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  isDark?: boolean;
}

export const BlueprintOverlay: React.FC<BlueprintOverlayProps> = ({
  isOpen,
  onClose,
  currentLang,
  isDark = false
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const specText = `
ТЕХНИЧЕСКОЕ ЗАДАНИЕ: САЙТ-ПОРТФОЛИО ВАЛЕРИЯ ДОЦЕНКО (21 ГОД)
Стиль: Швейцарская типографика (Swiss Style), монохром (Black & White).

1. МЕНЮ:
- 01 / Обо мне (About)
- 02 / Продукты (Products)
- 03 / Конференции (Conferences)
- 04 / Статьи (Articles)
- 05 / Контакты (Contact)

2. ПОЗИЦИОНИРОВАНИЕ И ТОН:
- Квалификация: Красный диплом (15.02.08) + 2 года на заводском конвейере + мастер СПО.
- Тон: Спокойный, уважительный, сдержанный. Факты вместо прилагательных.
- Баланс: Уважение к старой школе (сопромат, 16К20, ЕСКД) и современный подход (ЧПУ, IT-боты).
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className={`relative w-full max-w-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 font-mono text-xs rounded-2xl transition-colors ${
        isDark ? 'bg-[#14161b] border-white/20 text-neutral-200' : 'bg-white border-[#d2d2d7] text-neutral-800'
      }`}>
        
        {/* Header */}
        <div className={`flex items-start justify-between border-b pb-4 ${isDark ? 'border-white/10' : 'border-[#d2d2d7]'}`}>
          <div className="space-y-1">
            <div className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
              {currentLang === 'ru' ? 'АРХИТЕКТУРА И КОПИРАЙТИНГ' : 'EDITORIAL SPECIFICATION'}
            </div>
            <h3 className={`text-base font-semibold uppercase ${isDark ? 'text-white' : 'text-black'}`}>
              {currentLang === 'ru' ? 'ТЗ сайта-портфолио Валерия Доценко' : 'Portfolio Blueprint for Valeriy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg border transition-colors ${
              isDark ? 'border-white/20 hover:border-white text-white' : 'border-neutral-300 hover:border-black text-black'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Concise Spec text */}
        <div className="space-y-4 leading-relaxed font-sans text-xs">
          <div className={`p-3 rounded-xl border font-mono text-[11px] ${
            isDark ? 'border-white/10 bg-white/5 text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700'
          }`}>
            <strong>{currentLang === 'ru' ? 'Главный принцип:' : 'Core Principle:'}</strong>{' '}
            {currentLang === 'ru' 
              ? 'Строгий швейцарский стиль, вдохновленный Apple и минималистичной эстетикой Pinterest. Никакой «воды». Только факты, чертежи, точные данные и интерактивный визуализатор.'
              : 'Strict Swiss typographic hierarchy inspired by Apple and minimalist Pinterest aesthetics. Clean facts, data tables, CRT rendering, and direct channels.'}
          </div>

          <div className="space-y-2 font-mono text-[11px]">
            <div className={`font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
              {currentLang === 'ru' ? 'Принципы копирайтинга:' : 'Copywriting Principles:'}
            </div>
            {COPYWRITING_MANIFESTO.principlesRu.map((p, i) => (
              <div key={i} className={`border-l pl-3 py-0.5 ${isDark ? 'border-white/30 text-neutral-300' : 'border-black text-neutral-600'}`}>
                <strong className={isDark ? 'text-white' : 'text-black'}>{p.name}:</strong> <span>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-white/10' : 'border-neutral-200'}`}>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-xl border text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
              isDark 
                ? 'border-white/20 text-white hover:bg-white/10' 
                : 'border-black text-black hover:bg-neutral-100'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (currentLang === 'ru' ? 'Скопировано' : 'Copied') : (currentLang === 'ru' ? 'Скопировать ТЗ' : 'Copy Spec')}</span>
          </button>

          <button
            onClick={onClose}
            className={`px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors ${
              isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            {currentLang === 'ru' ? 'Закрыть' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
