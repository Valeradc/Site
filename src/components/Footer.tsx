import React from 'react';
import { GENERAL_INFO, NAV_ITEMS } from '../data/siteContent';
import { Language, SectionId } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: SectionId) => void;
  onOpenBlueprint: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenBlueprint
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black bg-white py-12 text-xs font-mono">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Swiss 4-Column Footer Grid (like the photo) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-600">
          
          {/* Col 1 */}
          <div className="space-y-1">
            <div className="font-semibold text-black uppercase tracking-wider">
              {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}
            </div>
            <div className="text-[11px] text-neutral-500">
              {currentLang === 'ru' ? 'Техник-механик (15.02.08)' : 'Mechanical Technician'}
            </div>
            <div className="text-[11px] text-neutral-500">
              {currentLang === 'ru' ? 'Мастер производственного обучения' : 'Vocational Instructor'}
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-1">
            <div className="font-semibold text-black uppercase tracking-wider">
              {currentLang === 'ru' ? 'НАВИГАЦИЯ' : 'SECTIONS'}
            </div>
            <div className="space-y-0.5 text-[11px]">
              {NAV_ITEMS.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-black transition-colors text-left"
                  >
                    {currentLang === 'ru' ? item.labelRu : item.labelEn}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-1">
            <div className="font-semibold text-black uppercase tracking-wider">
              {currentLang === 'ru' ? 'КОНТАКТЫ' : 'CONTACT'}
            </div>
            <div className="text-[11px]">
              <a href="https://t.me/valera_mechanic" target="_blank" rel="noreferrer" className="hover:text-black block">
                Telegram: @valera_mechanic
              </a>
              <div className="text-neutral-500 truncate">{GENERAL_INFO.email}</div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-1">
            <div className="font-semibold text-black uppercase tracking-wider">
              {currentLang === 'ru' ? 'СПЕЦИФИКАЦИЯ' : 'DOCUMENT'}
            </div>
            <div className="text-[11px] space-y-1">
              <button
                onClick={onOpenBlueprint}
                className="text-black font-semibold underline hover:opacity-70 text-left block"
              >
                {currentLang === 'ru' ? 'Открыть ТЗ и бриф' : 'Open Editorial Spec'}
              </button>
              <div className="text-[10px] text-neutral-400">
                Swiss Grid v2.4 (B&W)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} {currentLang === 'ru' ? GENERAL_INFO.nameRu : GENERAL_INFO.nameEn}.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-black font-semibold hover:opacity-70 uppercase tracking-widest"
          >
            <span>{currentLang === 'ru' ? 'Наверх' : 'Top'}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
