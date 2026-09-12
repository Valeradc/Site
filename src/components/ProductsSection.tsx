import React from 'react';
import { Language } from '../types';
import { PROJECTS_DATA } from '../data/siteContent';

interface ProductsSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  currentLang, 
  isDark 
}) => {
  return (
    <section 
      id="products" 
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
            {currentLang === 'ru' ? 'Продукты' : 'Products'}
          </h2>
          <div className={`mt-3 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Разработки и проекты' : 'Projects & Developments'}
          </div>
        </div>

        {/* Clean Minimalist Projects List */}
        <div className="space-y-8">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 ${
                isDark 
                  ? 'border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700/80' 
                  : 'border-neutral-200/90 bg-neutral-50/40 hover:border-neutral-300'
              }`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className={`text-lg sm:text-xl font-[250] tracking-tight ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {currentLang === 'ru' ? project.titleRu : project.titleEn}
                  </h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-light tracking-wide ${
                    isDark 
                      ? 'border-neutral-800 text-neutral-400' 
                      : 'border-neutral-200 text-neutral-500'
                  }`}>
                    {currentLang === 'ru' ? project.badgeRu : project.badgeEn}
                  </span>
                </div>

                <p className={`text-sm sm:text-base font-light leading-relaxed ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {currentLang === 'ru' ? project.fullDescRu : project.fullDescEn}
                </p>

                {project.technicalSpecs && project.technicalSpecs.length > 0 && (
                  <div className={`pt-4 mt-4 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-light ${
                    isDark ? 'border-neutral-800' : 'border-neutral-200'
                  }`}>
                    {project.technicalSpecs.map((spec, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className={`block text-[11px] font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                          {currentLang === 'ru' ? spec.labelRu : spec.labelEn}
                        </span>
                        <span className={`font-light ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
