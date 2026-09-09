import React from 'react';
import { GENERAL_INFO, NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: SectionId) => void;
  onOpenBlueprint: () => void;
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenBlueprint,
  isDark
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 text-xs font-mono transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-[#07080b] text-neutral-400' : 'border-[#d2d2d7] bg-[#fbfbfd] text-[#6e6e73]'
    }`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Apple 4-Column Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Col 1 */}
          <div className="space-y-1">
            <div className={`font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}
            </div>
            <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
              {currentLang === 'ru' ? 'Техник-механик (15.02.08)' : 'Mechanical Technician'}
            </div>
            <div className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
              {currentLang === 'ru' ? 'Мастер производственного обучения' : 'Vocational Instructor'}
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-1">
            <div className={`font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'НАВИГАЦИЯ' : 'SECTIONS'}
            </div>
            <div className="space-y-0.5 text-[11px]">
              {NAV_ITEMS.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`transition-colors text-left ${isDark ? 'hover:text-white' : 'hover:text-[#1d1d1f]'}`}
                  >
                    {currentLang === 'ru' ? item.labelRu : item.labelEn}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-1">
            <div className={`font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'КОНТАКТЫ' : 'CONTACT'}
            </div>
            <div className="text-[11px]">
              <a href={GENERAL_INFO.telegramUrl} target="_blank" rel="noreferrer" className={`block ${isDark ? 'hover:text-white' : 'hover:text-[#1d1d1f]'}`}>
                Telegram: {GENERAL_INFO.telegram}
              </a>
              <div className={`truncate ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>{GENERAL_INFO.email}</div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-1">
            <div className={`font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'СПЕЦИФИКАЦИЯ' : 'DOCUMENT'}
            </div>
            <div className="text-[11px] space-y-1">
              <button
                onClick={onOpenBlueprint}
                className={`font-semibold underline hover:opacity-75 text-left block ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}
              >
                {currentLang === 'ru' ? 'Открыть ТЗ и бриф' : 'Open Editorial Spec'}
              </button>
              <div className={`text-[10px] ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                Apple San Francisco Edition
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] ${
          isDark ? 'border-white/10 text-neutral-400' : 'border-[#e5e5ea] text-[#86868b]'
        }`}>
          <div>
            © {new Date().getFullYear()} {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}.
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1 font-semibold hover:opacity-75 uppercase tracking-widest ${
              isDark ? 'text-white' : 'text-[#1d1d1f]'
            }`}
          >
            <span>{currentLang === 'ru' ? 'Наверх' : 'Top'}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
