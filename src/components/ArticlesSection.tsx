import React, { useState } from 'react';
import { ARTICLES_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language, ArticleItem } from '../types';
import { sound } from '../utils/audio';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Share2, 
  Check, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ArticlesSectionProps {
  currentLang: Language;
  showBlueprintMode?: boolean;
  isDark: boolean;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  showBlueprintMode = false,
  isDark
}) => {
  const [readingArticle, setReadingArticle] = useState<ArticleItem | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleOpenArticle = (art: ArticleItem) => {
    sound.play('heavy');
    setReadingArticle(art);
  };

  const handleCloseArticle = () => {
    sound.play('light');
    setReadingArticle(null);
  };

  const handleShare = () => {
    sound.play('confirm');
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section 
      id="articles" 
      className={`py-14 sm:py-20 border-b transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#0c0d11]' : 'border-[#d2d2d7] bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className={`flex items-baseline justify-between border-b pb-3 ${isDark ? 'border-white/15' : 'border-[#d2d2d7]'}`}>
          <div className="flex items-center gap-2.5">
            <h2 className={`text-xs font-semibold tracking-[0.2em] uppercase font-mono ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              05. {currentLang === 'ru' ? 'СТАТЬИ И АНАЛИТИКА' : 'ARTICLES & ESSAYS'}
            </h2>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-100 text-neutral-700'
            }`}>
              {ARTICLES_DATA.length} {currentLang === 'ru' ? 'публикации' : 'articles'}
            </span>
          </div>
          <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>05 / 06</span>
        </div>

        {/* Blueprint Spec Note */}
        {showBlueprintMode && (
          <div className={`p-4 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-white/5 border-white/15 text-neutral-300' : 'bg-[#f5f5f7] border-[#d2d2d7] text-neutral-700'
          }`}>
            <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 05 (СТАТЬИ):' : 'SECTION 05 SPEC (ARTICLES):'}
            </div>
            <p>
              {currentLang === 'ru' 
                ? 'Экспертный анализ ключевых проблем машиностроения: кадры, парк станков, реальные зарплаты.' 
                : 'Deep analysis of manufacturing bottlenecks: labor retention, manual vs CNC machines, and wage hierarchy.'}
            </p>
          </div>
        )}

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ARTICLES_DATA.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => handleOpenArticle(art)}
              className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                isDark 
                  ? 'bg-[#14161b] border-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/50' 
                  : 'bg-[#fbfbfd] border-[#e5e5ea] hover:border-[#1d1d1f] hover:shadow-md'
              }`}
            >
              {/* Card Header Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className={`px-2 py-0.5 rounded uppercase tracking-wider font-semibold ${
                    isDark ? 'bg-white/10 text-neutral-300' : 'bg-neutral-200 text-neutral-700'
                  }`}>
                    {currentLang === 'ru' ? art.categoryRu : art.categoryEn}
                  </span>
                  
                  <span className={`flex items-center gap-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    <Clock className="w-3 h-3" />
                    {currentLang === 'ru' ? art.readTimeRu : art.readTimeEn}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className={`text-base sm:text-lg font-semibold tracking-[-0.015em] leading-snug group-hover:text-amber-500 transition-colors ${
                  isDark ? 'text-white' : 'text-[#1d1d1f]'
                }`}>
                  {currentLang === 'ru' ? art.titleRu : art.titleEn}
                </h3>

                {/* Article Teaser */}
                <p className={`text-xs leading-relaxed line-clamp-3 font-sans ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {currentLang === 'ru' ? art.teaserRu : art.teaserEn}
                </p>
              </div>

              {/* Card Footer */}
              <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs font-mono ${
                isDark ? 'border-white/10 text-neutral-400' : 'border-neutral-200 text-neutral-500'
              }`}>
                <span>{art.date}</span>
                <span className={`flex items-center gap-1 uppercase tracking-wider text-[11px] font-semibold transition-transform group-hover:translate-x-0.5 ${
                  isDark ? 'text-white' : 'text-[#1d1d1f]'
                }`}>
                  <span>{currentLang === 'ru' ? 'Читать' : 'Read'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {readingArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={handleCloseArticle}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-10 shadow-2xl space-y-6 transition-colors ${
              isDark 
                ? 'bg-[#12141a] border-white/20 text-neutral-200 shadow-black' 
                : 'bg-white border-[#d2d2d7] text-neutral-800 shadow-xl'
            }`}
          >
            {/* Top Bar with category, read-time and close */}
            <div className={`flex items-center justify-between border-b pb-4 ${isDark ? 'border-white/10' : 'border-neutral-200'}`}>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className={`px-2.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
                  isDark ? 'bg-white/10 text-neutral-300' : 'bg-neutral-100 text-neutral-700'
                }`}>
                  {currentLang === 'ru' ? readingArticle.categoryRu : readingArticle.categoryEn}
                </span>
                <span className="opacity-40">•</span>
                <span className={`flex items-center gap-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  <Clock className="w-3 h-3" />
                  {currentLang === 'ru' ? readingArticle.readTimeRu : readingArticle.readTimeEn} {currentLang === 'ru' ? 'чтения' : 'read'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isDark ? 'border-white/20 hover:border-white text-white' : 'border-neutral-300 hover:border-black text-black'
                  }`}
                  title="Копировать ссылку"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleCloseArticle}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isDark ? 'border-white/20 hover:border-white text-white' : 'border-neutral-300 hover:border-black text-black'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Headline */}
            <div className="space-y-2">
              <h2 className={`text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-snug ${
                isDark ? 'text-white' : 'text-[#1d1d1f]'
              }`}>
                {currentLang === 'ru' ? readingArticle.titleRu : readingArticle.titleEn}
              </h2>
              <div className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                {readingArticle.date} • {currentLang === 'ru' ? 'Автор: Доценко Валерий' : 'Author: Valeriy Dotsenko'}
              </div>
            </div>

            {/* Teaser Highlight */}
            <div className={`p-4 rounded-xl border text-sm italic font-sans ${
              isDark ? 'border-white/10 bg-white/5 text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700'
            }`}>
              "{currentLang === 'ru' ? readingArticle.teaserRu : readingArticle.teaserEn}"
            </div>

            {/* Article Main Text */}
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed font-sans whitespace-pre-line ${
              isDark ? 'text-neutral-300' : 'text-neutral-800'
            }`}>
              {currentLang === 'ru' ? readingArticle.contentRu.trim() : readingArticle.contentEn.trim()}
            </div>

            {/* Key Takeaways Box */}
            <div className={`p-5 rounded-xl border space-y-2.5 font-mono text-xs ${
              isDark ? 'bg-amber-500/5 border-amber-500/20 text-neutral-200' : 'bg-amber-50/70 border-amber-200 text-neutral-800'
            }`}>
              <div className="font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentLang === 'ru' ? 'ГЛАВНЫЕ ВЫВОДЫ:' : 'KEY TAKEAWAYS:'}</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside font-sans text-xs sm:text-sm opacity-90">
                {(currentLang === 'ru' ? readingArticle.keyTakeawaysRu : readingArticle.keyTakeawaysEn).map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Close Button */}
            <div className={`pt-4 border-t flex justify-end ${isDark ? 'border-white/10' : 'border-neutral-200'}`}>
              <button
                onClick={handleCloseArticle}
                className={`px-6 py-2.5 rounded-xl uppercase tracking-wider font-mono text-xs font-semibold transition-colors ${
                  isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#1d1d1f] text-white hover:bg-black'
                }`}
              >
                {currentLang === 'ru' ? 'Закрыть статью' : 'Close Article'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
