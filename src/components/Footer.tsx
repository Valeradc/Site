import React from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  isDark
}) => {
  const handleScrollToTop = () => {
    scrollToSection('industrial-creator', 850);
  };

  return (
    <footer className={`w-full border-t py-4 text-xs font-light transition-colors duration-200 ${
      isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
    }`}>
      <div className="w-full px-6 sm:px-10 flex flex-row items-center justify-between">
        
        {/* Brand Name on the Left */}
        <button
          onClick={handleScrollToTop}
          className={`text-xs sm:text-sm uppercase tracking-[0.18em] font-[250] transition-colors text-left ${
            isDark ? 'text-white hover:text-neutral-300' : 'text-neutral-900 hover:text-neutral-600'
          }`}
          title="INDUSTRIAL CREATOR"
        >
          INDUSTRIAL CREATOR
        </button>

        {/* Back to top arrow button on the Right */}
        <button
          onClick={handleScrollToTop}
          className={`p-1.5 sm:p-2 rounded-full border transition-all active:scale-95 flex-shrink-0 ${
            isDark 
              ? 'border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300' 
              : 'border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-600'
          }`}
          aria-label="Наверх"
          title="Наверх"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.2]" />
        </button>

      </div>
    </footer>
  );
};
