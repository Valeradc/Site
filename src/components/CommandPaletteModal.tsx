import React, { useState, useEffect, useRef } from 'react';
import { SectionId, Language } from '../types';
import { Search, Moon, Sun, Globe, Send, FileText, ArrowRight, X } from 'lucide-react';
import { GENERAL_INFO } from '../data/siteContent';
import { sound } from '../utils/audio';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (sectionId: SectionId) => void;
  onOpenBlueprint: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onToggleLang,
  isDark,
  onToggleTheme,
  onNavigate,
  onOpenBlueprint,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      sound.play('heavy');
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        sound.play('light');
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAction = (cb: () => void) => {
    sound.play('confirm');
    cb();
  };

  const actions = [
    {
      id: 'industrial-creator',
      title: currentLang === 'ru' ? 'Главная: Industrial Creator' : 'Home: Industrial Creator',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('industrial-creator'); onClose(); })
    },
    {
      id: 'about',
      title: currentLang === 'ru' ? '02. Обо мне (Биография и опыт)' : '02. About Me (Bio & Experience)',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('about'); onClose(); })
    },
    {
      id: 'novosibirsk',
      title: currentLang === 'ru' ? '03. Карта: Новосибирск, заводы и локации' : '03. Map: Novosibirsk, Plants & City',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('novosibirsk'); onClose(); })
    },
    {
      id: 'products',
      title: currentLang === 'ru' ? '04. Продукты (Инженерные разработки)' : '04. Products (Engineering)',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('products'); onClose(); })
    },
    {
      id: 'conferences',
      title: currentLang === 'ru' ? '04. Конференции (Выступления)' : '04. Conferences (Keynotes)',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('conferences'); onClose(); })
    },
    {
      id: 'articles',
      title: currentLang === 'ru' ? '05. Статьи (Машиностроение)' : '05. Articles (Manufacturing)',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('articles'); onClose(); })
    },
    {
      id: 'contact',
      title: currentLang === 'ru' ? '06. Контакты и форма' : '06. Contact & Inquiry Form',
      category: currentLang === 'ru' ? 'Разделы' : 'Navigation',
      perform: () => handleAction(() => { onNavigate('contact'); onClose(); })
    },
    {
      id: 'theme',
      title: isDark 
        ? (currentLang === 'ru' ? 'Переключить на светлую тему' : 'Switch to Light Theme')
        : (currentLang === 'ru' ? 'Переключить на темную тему' : 'Switch to Dark Theme'),
      category: currentLang === 'ru' ? 'Настройки' : 'Settings',
      icon: isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />,
      perform: () => handleAction(() => { onToggleTheme(); onClose(); })
    },
    {
      id: 'lang',
      title: currentLang === 'ru' ? 'Сменить язык на English' : 'Switch language to Russian',
      category: currentLang === 'ru' ? 'Настройки' : 'Settings',
      icon: <Globe className="w-4 h-4" />,
      perform: () => handleAction(() => { onToggleLang(); onClose(); })
    },
    {
      id: 'telegram',
      title: currentLang === 'ru' ? 'Написать в Telegram @Valera_dc' : 'Message on Telegram @Valera_dc',
      category: currentLang === 'ru' ? 'Связь' : 'Connect',
      icon: <Send className="w-4 h-4" />,
      perform: () => handleAction(() => { window.open(GENERAL_INFO.telegramUrl, '_blank'); onClose(); })
    },
    {
      id: 'blueprint',
      title: currentLang === 'ru' ? 'Открыть техническое задание и бриф' : 'Open Editorial Blueprint',
      category: currentLang === 'ru' ? 'Справка' : 'Documentation',
      icon: <FileText className="w-4 h-4" />,
      perform: () => handleAction(() => { onOpenBlueprint(); onClose(); })
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className={`w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border transition-all ${
          isDark 
            ? 'bg-[#18191f] border-white/15 text-white shadow-black/80' 
            : 'bg-white border-neutral-200 text-neutral-900 shadow-neutral-900/20'
        }`}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-inherit/40 gap-3">
          <Search className="w-4 h-4 opacity-50 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={currentLang === 'ru' ? 'Поиск команды или переход по разделам...' : 'Type a command or jump to section...'}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm font-sans placeholder:opacity-40"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md opacity-50 hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="p-2 max-h-80 overflow-y-auto space-y-1 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="py-8 text-center opacity-40">
              {currentLang === 'ru' ? 'Ничего не найдено' : 'No commands found'}
            </div>
          ) : (
            filtered.map((action) => (
              <button
                key={action.id}
                onClick={action.perform}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left group ${
                  isDark 
                    ? 'hover:bg-white/10 text-neutral-300 hover:text-white' 
                    : 'hover:bg-black/5 text-neutral-700 hover:text-black'
                }`}
              >
                <div className="flex items-center gap-3">
                  {action.icon || <span className="w-4 h-4 flex items-center justify-center opacity-40 font-mono text-[10px]">#</span>}
                  <span className="font-sans font-medium text-sm">{action.title}</span>
                </div>
                <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-wider">{action.category}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Modal Footer Key Hints */}
        <div className="px-4 py-2 border-t border-inherit/30 flex items-center justify-between text-[11px] opacity-50 font-mono">
          <span>{currentLang === 'ru' ? 'Используйте Enter для выбора' : 'Press Enter to select'}</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-inherit border border-inherit/40 text-[10px]">esc</kbd> {currentLang === 'ru' ? 'закрыть' : 'to close'}
          </span>
        </div>
      </div>
    </div>
  );
};
