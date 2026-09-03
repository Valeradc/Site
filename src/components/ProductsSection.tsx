import React from 'react';
import { Language } from '../types';

interface ProductsSectionProps {
  currentLang: Language;
  showBlueprintMode?: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ currentLang }) => {
  return (
    <section id="products" className="py-12 sm:py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? 'ПРОДУКТЫ' : 'PRODUCTS'}
          </h2>
          <span className="text-xs font-mono text-neutral-400">03 / 06</span>
        </div>

        {/* Clean Empty Container */}
        <div className="border border-neutral-200 bg-neutral-50/50 p-12 sm:p-16 flex flex-col items-center justify-center text-center font-mono">
          <div className="text-xs text-neutral-500 uppercase tracking-widest">
            {currentLang === 'ru' ? 'РАЗДЕЛ В ПОДГОТОВКЕ' : 'SECTION IN PREPARATION'}
          </div>
          <p className="text-[11px] text-neutral-400 mt-1 max-w-sm">
            {currentLang === 'ru' 
              ? 'Информация об инженерных разработках и продуктах будет опубликована позже.' 
              : 'Details on engineering developments and tooling products will be added soon.'}
          </p>
        </div>

      </div>
    </section>
  );
};
