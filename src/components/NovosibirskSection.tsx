import React from 'react';
import { NovosibirskMapCard } from './NovosibirskMapCard';
import { Language } from '../types';
import { Building2, GraduationCap, Waves } from 'lucide-react';

interface NovosibirskSectionProps {
  currentLang: Language;
  showBlueprintMode?: boolean;
  isDark?: boolean;
}

export const NovosibirskSection: React.FC<NovosibirskSectionProps> = ({
  currentLang
}) => {
  return (
    <section id="novosibirsk" className="py-16 sm:py-24 px-6 border-b border-neutral-200 bg-white text-neutral-900">
      
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
            03 / {currentLang === 'ru' ? 'География и цеха' : 'Workshops & City'}
          </span>
          <span className="h-px flex-1 bg-neutral-100"></span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
            55.00° N • 82.93° E
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
              {currentLang === 'ru' ? 'Новосибирск: Город и цеха' : 'Novosibirsk: Workshops & Life'}
            </h2>
            <p className="mt-2 text-base text-neutral-600 max-w-2xl leading-relaxed">
              {currentLang === 'ru' 
                ? 'Здесь я учился, точил детали на 16К20 в заводском цехе, преподаю в мастерских и живу. Интерактивная карта ключевых инженерных точек, реки Обь и знаковых мест.'
                : 'Where I studied, machined parts on 16K20 lathes, instruct students, and live. Interactive map of key engineering locations, the Ob river, and favorite spots.'}
            </p>
          </div>

          {/* Quick Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-700 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{currentLang === 'ru' ? 'Станционная' : 'Stantsionnaya Hub'}</span>
            </div>

            <div className="px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-700 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>{currentLang === 'ru' ? 'Кафедра ТМ' : 'Tech Dept'}</span>
            </div>

            <div className="px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-700 flex items-center gap-1.5">
              <Waves className="w-3.5 h-3.5 text-teal-600" />
              <span>{currentLang === 'ru' ? 'Река Обь' : 'Ob River'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Card Component */}
      <div className="max-w-5xl mx-auto">
        <NovosibirskMapCard
          currentLang={currentLang}
        />
      </div>

    </section>
  );
};
