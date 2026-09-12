import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/siteContent';
import { Language, ArticleItem } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

interface ArticlesSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  currentLang,
  isDark
}) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section 
      id="articles" 
      className={`py-20 sm:py-28 border-b transition-colors duration-200 ${
        isDark ? 'border-neutral-800 bg-[#090a0f] text-white' : 'border-neutral-200 bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Title */}
        <div>
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Статьи' : 'Articles'}
          </h2>
          <div className={`mt-3 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Публикации и заметки' : 'Essays & Publications'}
          </div>
        </div>

        {/* Minimalist Articles List */}
        <div className="space-y-6">
          {ARTICLES_DATA.map((article) => (
            <div 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
                isDark 
                  ? 'border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700' 
                  : 'border-neutral-200/90 bg-neutral-50/40 hover:border-neutral-300'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-light tracking-wider uppercase ${
                      isDark ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      {article.date} • {currentLang === 'ru' ? article.readTimeRu : article.readTimeEn}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-light ${
                      isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
                    }`}>
                      {currentLang === 'ru' ? article.categoryRu : article.categoryEn}
                    </span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-[250] tracking-tight ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {currentLang === 'ru' ? article.titleRu : article.titleEn}
                  </h3>

                  <p className={`text-sm sm:text-base font-light leading-relaxed ${
                    isDark ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {currentLang === 'ru' ? article.teaserRu : article.teaserEn}
                  </p>
                </div>

                <ArrowUpRight className={`w-4 h-4 flex-shrink-0 mt-1 stroke-[1.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isDark ? 'text-neutral-500' : 'text-neutral-400'
                }`} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clean Minimalist Modal to Read Article */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl ${
              isDark ? 'bg-[#121317] border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-4">
              <span className={`text-xs font-light tracking-wider uppercase ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {selectedArticle.date} • {currentLang === 'ru' ? selectedArticle.readTimeRu : selectedArticle.readTimeEn}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className={`p-1.5 rounded-full border ${isDark ? 'border-neutral-800 hover:bg-neutral-800' : 'border-neutral-200 hover:bg-neutral-100'}`}
              >
                <X className="w-4 h-4 stroke-[1.2]" />
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-[250] tracking-tight leading-snug">
                {currentLang === 'ru' ? selectedArticle.titleRu : selectedArticle.titleEn}
              </h3>
              
              <div className={`text-sm sm:text-base font-light leading-relaxed space-y-4 whitespace-pre-line ${
                isDark ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                <p className="font-light italic text-neutral-400">
                  {currentLang === 'ru' ? selectedArticle.teaserRu : selectedArticle.teaserEn}
                </p>
                <p>
                  {currentLang === 'ru' ? selectedArticle.contentRu : selectedArticle.contentEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
