import React, { useState } from 'react';
import { COPYWRITING_MANIFESTO, SECTION_BLUEPRINTS, NAV_ITEMS } from '../data/siteContent';
import { Language } from '../types';
import { X, Copy, Check, FileText } from 'lucide-react';

interface BlueprintOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const BlueprintOverlay: React.FC<BlueprintOverlayProps> = ({
  isOpen,
  onClose,
  currentLang
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const specText = `
ТЕХНИЧЕСКОЕ ЗАДАНИЕ: САЙТ-ПОРТФОЛИО ВАЛЕРИЯ ДОЦЕНКО (21 ГОД)
Стиль: Швейцарская типографика (Swiss Style), монохром (Black & White).

1. МЕНЮ (СТРОГО 5 ПУНКТОВ):
- 01 / Обо мне (About)
- 02 / Проекты (Projects)
- 03 / Статьи (Articles)
- 04 / Выступления (Speaking)
- 05 / Контакты (Contact)

2. ПОЗИЦИОНИРОВАНИЕ И ТОН:
- Квалификация: Красный диплом (15.02.08) + 2 года на заводском конвейере + мастер СПО.
- Тон: Спокойный, уважительный, сдержанный. Факты вместо прилагательных.
- Баланс: Уважение к старой школе (сопромат, 16К20, ЕСКД) и современный подход (ЧПУ, IT-боты).

3. ПРОЕКТЫ:
- Магнитный демпфер (-38% вибраций, Ra 0.8)
- Telegram-трекер парка «ЦехКонтроль» (420+ токарей, -22% простоев)
- Подкаст «Стружка и люди» (18 выпусков, 35k прослушиваний)
  `.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-black p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 font-mono text-xs">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-black pb-4">
          <div className="space-y-1">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
              {currentLang === 'ru' ? 'АРХИТЕКТУРА И КОПИРАЙТИНГ' : 'EDITORIAL SPECIFICATION'}
            </div>
            <h3 className="text-base font-semibold text-black uppercase">
              {currentLang === 'ru' ? 'ТЗ сайта-портфолио Валерия Доценко' : 'Portfolio Blueprint for Valeriy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-neutral-300 hover:border-black text-black"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Concise Spec text */}
        <div className="space-y-4 text-neutral-800 leading-relaxed font-sans text-xs">
          <div className="p-3 border border-neutral-200 bg-neutral-50 font-mono text-[11px]">
            <strong>Главный принцип:</strong> Строгий швейцарский монохром. Никаких кислотных градиентов и лишней «воды». Только факты, чертежи, точные цифры и прямые каналы связи.
          </div>

          <div className="space-y-2 font-mono text-[11px]">
            <div className="font-bold text-black uppercase tracking-wider">Принципы копирайтинга:</div>
            {COPYWRITING_MANIFESTO.principlesRu.map((p, i) => (
              <div key={i} className="border-l border-black pl-3 py-0.5">
                <strong>{p.name}:</strong> <span className="text-neutral-600">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="px-4 py-2 border border-black text-black hover:bg-neutral-100 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Скопировано' : 'Скопировать ТЗ'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800"
          >
            Закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
