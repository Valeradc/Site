import React, { useState } from 'react';
import { ARTICLES_DATA, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { ArrowRight, X, Clock, Calendar } from 'lucide-react';

interface ArticlesSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  showBlueprintMode
}) => {
  const bp = SECTION_BLUEPRINTS.articles;
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = ARTICLES_DATA.find(a => a.id === selectedArticleId);

  return (
    <section id="articles" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? bp.titleRu : bp.titleEn}
          </h2>
          <span className="text-xs font-mono text-neutral-400">03 / 05</span>
        </div>

        {/* Blueprint Spec if enabled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 03 (СТАТЬИ):' : 'SECTION 03 SPEC (ARTICLES):'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* Swiss Newspaper / Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <article 
              key={article.id}
              className="border border-neutral-200 p-5 bg-white flex flex-col justify-between space-y-5 hover:border-black transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-2">
                  <span>0{idx + 1} / {currentLang === 'ru' ? article.categoryRu : article.categoryEn}</span>
                  <span>{currentLang === 'ru' ? article.readTimeRu : article.readTimeEn}</span>
                </div>

                <h3 className="text-base font-medium text-black leading-snug">
                  {currentLang === 'ru' ? article.titleRu : article.titleEn}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {currentLang === 'ru' ? article.teaserRu : article.teaserEn}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400">
                  {article.date}
                </span>

                <button
                  onClick={() => setSelectedArticleId(article.id)}
                  className="text-xs font-mono text-black font-semibold hover:underline flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>{currentLang === 'ru' ? 'Читать' : 'Read'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Reader for Selected Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white border border-black p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    {currentLang === 'ru' ? selectedArticle.categoryRu : selectedArticle.categoryEn} • {selectedArticle.date}
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-black leading-snug">
                    {currentLang === 'ru' ? selectedArticle.titleRu : selectedArticle.titleEn}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="p-1 border border-neutral-300 hover:border-black text-black"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Article Content */}
              <div className="text-sm text-neutral-800 space-y-4 leading-relaxed whitespace-pre-line font-normal">
                {currentLang === 'ru' ? selectedArticle.contentRu : selectedArticle.contentEn}
              </div>

              {/* Key takeaways */}
              <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-2">
                <div className="font-bold text-black uppercase">
                  {currentLang === 'ru' ? 'КЛЮЧЕВЫЕ ВЫВОДЫ:' : 'KEY TAKEAWAYS:'}
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  {(currentLang === 'ru' ? selectedArticle.keyTakeawaysRu : selectedArticle.keyTakeawaysEn).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Close Button */}
              <div className="pt-2 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="px-4 py-2 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800"
                >
                  {currentLang === 'ru' ? 'Закрыть статью' : 'Close Article'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
