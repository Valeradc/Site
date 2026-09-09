import React, { useState, useEffect, useRef } from 'react';
import { SectionId, Language } from '../types';
import { ChevronsUpDown, ListOrdered, Check } from 'lucide-react';
import { sound } from '../utils/audio';

interface FloatingIndexDockProps {
  currentLang: Language;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  isDark: boolean;
}

interface IndexItem {
  id: SectionId;
  num: string;
  titleRu: string;
  titleEn: string;
}

const SECTIONS: IndexItem[] = [
  { id: 'industrial-creator', num: '01', titleRu: 'Industrial Creator', titleEn: 'Industrial Creator' },
  { id: 'about', num: '02', titleRu: 'Обо мне', titleEn: 'About Me' },
  { id: 'novosibirsk', num: '03', titleRu: 'Карта Новосибирска', titleEn: 'Novosibirsk Map' },
  { id: 'products', num: '04', titleRu: 'Продукты', titleEn: 'Products' },
  { id: 'conferences', num: '05', titleRu: 'Конференции', titleEn: 'Conferences' },
  { id: 'articles', num: '06', titleRu: 'Статьи', titleEn: 'Articles' },
  { id: 'contact', num: '07', titleRu: 'Контакты', titleEn: 'Contact' },
];

export const FloatingIndexDock: React.FC<FloatingIndexDockProps> = ({
  currentLang,
  activeSection,
  onNavigate,
  isDark
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Calculate scroll percentage smoothly (matching the video 0% -> 100%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) {
        setScrollPercentage(0);
        return;
      }
      const current = Math.min(100, Math.max(0, Math.round((window.scrollY / scrollTotal) * 100)));
      setScrollPercentage(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (id: SectionId) => {
    sound.play('heavy');
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 left-6 z-50 select-none font-mono">
      {/* Upward Floating Popover Menu (Directly modeled after Pinterest Video) */}
      {isOpen && (
        <div 
          className={`absolute bottom-14 left-0 w-72 sm:w-80 rounded-2xl p-2 mb-2 shadow-2xl backdrop-blur-2xl transition-all border animate-in fade-in slide-in-from-bottom-3 duration-200 ${
            isDark 
              ? 'bg-[#16181d]/90 border-white/10 text-white shadow-black/60' 
              : 'bg-white/95 border-black/10 text-neutral-900 shadow-neutral-900/15'
          }`}
        >
          <div className="px-3 py-2 border-b border-inherit/40 flex items-center justify-between text-[11px] text-neutral-400">
            <span className="uppercase tracking-widest font-semibold">
              {currentLang === 'ru' ? 'Оглавление' : 'Table of Contents'}
            </span>
            <span className="text-[10px] font-sans opacity-70">
              {scrollPercentage}% {currentLang === 'ru' ? 'прочитано' : 'read'}
            </span>
          </div>

          <div className="py-1 space-y-0.5 max-h-72 overflow-y-auto">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelect(sec.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left group ${
                    isActive
                      ? isDark 
                        ? 'bg-white/15 text-white font-semibold' 
                        : 'bg-black/8 text-black font-semibold'
                      : isDark
                        ? 'text-neutral-400 hover:text-white hover:bg-white/8'
                        : 'text-neutral-600 hover:text-black hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={`text-[11px] opacity-60 ${isActive ? 'opacity-100 font-bold' : ''}`}>
                      {sec.num}.
                    </span>
                    <span className="truncate">
                      {currentLang === 'ru' ? sec.titleRu : sec.titleEn}
                    </span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 shrink-0 opacity-80" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Dock: [ Index ↕ | 26% ] */}
      <div 
        className={`flex items-center rounded-full p-1 shadow-xl backdrop-blur-xl border transition-all ${
          isDark
            ? 'bg-[#18191f]/85 border-white/15 text-white shadow-black/50'
            : 'bg-black/85 border-black/20 text-white shadow-black/20'
        }`}
      >
        {/* Left Toggle Button */}
        <button
          onClick={() => {
            sound.play('light');
            setIsOpen(!isOpen);
          }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:bg-white/15 transition-all text-xs active:scale-95"
          title={currentLang === 'ru' ? 'Навигация по разделам' : 'Navigation Index'}
        >
          <ListOrdered className="w-3.5 h-3.5 opacity-80" />
          <span className="font-semibold tracking-wider uppercase text-[11px]">Index</span>
          <ChevronsUpDown className="w-3 h-3 opacity-60 ml-0.5" />
        </button>

        {/* Vertical Divider */}
        <div className="h-4 w-px bg-white/20 my-auto" />

        {/* Right Scroll Percentage Badge */}
        <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-white/90 min-w-[3.25rem] text-center">
          {scrollPercentage}%
        </div>
      </div>
    </div>
  );
};
