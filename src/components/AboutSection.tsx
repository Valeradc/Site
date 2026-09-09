import React from 'react';
import { GENERAL_INFO, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { sound } from '../utils/audio';
import { Award, Wrench, GraduationCap, CheckCircle2, Shield, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  showBlueprintMode,
  isDark
}) => {
  return (
    <section 
      id="about" 
      className={`py-14 sm:py-20 border-b transition-colors duration-300 ${
        isDark ? 'border-white/10 bg-[#090a0f]' : 'border-[#d2d2d7] bg-[#fbfbfd]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className={`flex items-baseline justify-between border-b pb-3 ${isDark ? 'border-white/15' : 'border-[#d2d2d7]'}`}>
          <div className="flex items-center gap-2.5">
            <h2 className={`text-xs font-semibold tracking-[0.2em] uppercase font-mono ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              02. {currentLang === 'ru' ? 'ОБО МНЕ' : 'ABOUT ME'}
            </h2>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-100 text-neutral-700'
            }`}>
              {currentLang === 'ru' ? '21 год • Практик' : '21 y.o. • Practitioner'}
            </span>
          </div>
          <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>02 / 06</span>
        </div>

        {/* Blueprint Note if toggled */}
        {showBlueprintMode && (
          <div className={`p-4 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-white/5 border-white/15 text-neutral-300' : 'bg-[#f5f5f7] border-[#d2d2d7] text-neutral-700'
          }`}>
            <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'БРИФ: РАЗДЕЛ ОБО МНЕ' : 'SPEC: ABOUT ME'}
            </div>
            <p>
              {currentLang === 'ru'
                ? 'Прямой, честный тон практика: красный диплом, 2 года на производстве, мастер обучения.'
                : 'Direct, honest practitioner narrative: honors degree, 2 years shop floor, vocational trainer.'}
            </p>
          </div>
        )}

        {/* 2-Column Swiss/Apple Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Exact Bio Narrative */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className={`text-xs font-mono uppercase tracking-widest ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {currentLang === 'ru' ? 'ПРАКТИЧЕСКИЙ ОПЫТ У СТАНКА' : 'HANDS-ON SHOP-FLOOR BACKGROUND'}
              </span>
              <h3 className={`text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-snug ${
                isDark ? 'text-white' : 'text-[#1d1d1f]'
              }`}>
                {currentLang === 'ru' 
                  ? 'Привет, меня зовут Доценко Валерий' 
                  : 'Hello, my name is Valeriy Dotsenko'}
              </h3>
            </div>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed font-normal ${
              isDark ? 'text-neutral-300' : 'text-[#424245]'
            }`}>
              <p>
                {currentLang === 'ru' ? (
                  <>
                    Окончил техникум с красным дипломом на кафедре «Технология машиностроения». Отработал 2 года слесарем механосборочных работ на реальном производстве.
                  </>
                ) : (
                  <>
                    Graduated with honors from technical college in Mechanical Engineering Technology. Completed 2 years as an assembly fitter on an active manufacturing shop floor.
                  </>
                )}
              </p>

              <p>
                {currentLang === 'ru' ? (
                  <>
                    Сегодня я — мастер производственного обучения. Обучаю студентов ремонту и работе с технологическим оборудованием (станки).
                  </>
                ) : (
                  <>
                    Today I serve as a Master of Vocational Training. I instruct students in repair, maintenance, and operation of industrial machinery and machine tools.
                  </>
                )}
              </p>
            </div>

            {/* Mission Statement Quote Box */}
            <div className={`p-5 rounded-2xl border space-y-2 ${
              isDark ? 'bg-[#14161b] border-white/15' : 'bg-white border-[#d2d2d7]'
            }`}>
              <div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentLang === 'ru' ? 'МИССИЯ' : 'CORE MISSION'}</span>
              </div>
              <p className={`text-sm font-medium italic ${isDark ? 'text-neutral-200' : 'text-[#1d1d1f]'}`}>
                "{currentLang === 'ru' ? GENERAL_INFO.missionRu : GENERAL_INFO.missionEn}"
              </p>
            </div>

            {/* Core Competency Chips */}
            <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200'}`}>
                <div className="font-bold text-sm">16К20</div>
                <div className="text-[10px] opacity-70">{currentLang === 'ru' ? 'Универсалы' : 'Manual'}</div>
              </div>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200'}`}>
                <div className="font-bold text-sm">CNC / ЧПУ</div>
                <div className="text-[10px] opacity-70">{currentLang === 'ru' ? 'G-код / CAD' : 'G-code / CAM'}</div>
              </div>
              <div className={`p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200'}`}>
                <div className="font-bold text-sm">ЕСКД</div>
                <div className="text-[10px] opacity-70">{currentLang === 'ru' ? 'Чертежи / Допуски' : 'Drawings & Fits'}</div>
              </div>
            </div>
          </div>

          {/* Col 2: Structured Timeline & Metrics Table */}
          <div className="md:col-span-5 space-y-5">
            <div className={`rounded-2xl border p-6 space-y-4 font-mono text-xs transition-colors shadow-sm ${
              isDark ? 'bg-[#14161b] border-white/15' : 'bg-white border-[#d2d2d7]'
            }`}>
              <div className={`text-[10px] uppercase tracking-widest border-b pb-2.5 font-semibold flex items-center justify-between ${
                isDark ? 'text-neutral-400 border-white/10' : 'text-[#86868b] border-[#e5e5ea]'
              }`}>
                <span>{currentLang === 'ru' ? 'КВАЛИФИКАЦИЯ И ОПЫТ' : 'CREDENTIALS & DOSSIER'}</span>
                <span className="text-emerald-500 font-bold">● {currentLang === 'ru' ? 'ВЕРИФИЦИРОВАНО' : 'VERIFIED'}</span>
              </div>

              <div className="space-y-3">
                <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/5' : 'border-[#f0f0f2]'}`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-[#86868b]'}>{currentLang === 'ru' ? 'Возраст' : 'Age'}</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>21 {currentLang === 'ru' ? 'год' : 'years old'}</span>
                </div>

                <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/5' : 'border-[#f0f0f2]'}`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-[#86868b]'}>{currentLang === 'ru' ? 'Образование' : 'Education'}</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>{currentLang === 'ru' ? 'Красный диплом' : 'Honors Degree'}</span>
                </div>

                <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/5' : 'border-[#f0f0f2]'}`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-[#86868b]'}>{currentLang === 'ru' ? 'Специальность' : 'Specialty'}</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>15.02.08 ({currentLang === 'ru' ? 'Технология машиностроения' : 'Machining Tech'})</span>
                </div>

                <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-white/5' : 'border-[#f0f0f2]'}`}>
                  <span className={isDark ? 'text-neutral-400' : 'text-[#86868b]'}>{currentLang === 'ru' ? 'Опыт на заводе' : 'Plant Experience'}</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>2 {currentLang === 'ru' ? 'года (слесарь МСР)' : 'years (fitter)'}</span>
                </div>

                <div className="flex justify-between">
                  <span className={isDark ? 'text-neutral-400' : 'text-[#86868b]'}>{currentLang === 'ru' ? 'Текущая должность' : 'Current Position'}</span>
                  <span className={`font-semibold text-right text-emerald-400`}>{currentLang === 'ru' ? 'Мастер ПО' : 'Vocational Master'}</span>
                </div>
              </div>
            </div>

            {/* Standards & Tolerances Badge */}
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono ${
              isDark ? 'bg-white/5 border-white/10 text-neutral-300' : 'bg-neutral-100 border-neutral-300 text-neutral-800'
            }`}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="font-semibold">{currentLang === 'ru' ? 'СТАНДАРТ ТОЧНОСТИ:' : 'TOLERANCE CODE:'}</span>
              </div>
              <span className="font-bold">ISO 2768-mK / Ra 0.8</span>
            </div>

            {/* Novosibirsk Location Quick Link */}
            <a
              href="#novosibirsk"
              className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all group ${
                isDark 
                  ? 'bg-sky-950/20 border-sky-800/40 text-sky-300 hover:border-sky-500' 
                  : 'bg-sky-50 border-sky-200 text-sky-800 hover:border-sky-400'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base">📍</span>
                <div>
                  <div className="font-semibold flex items-center gap-1.5">
                    <span>{currentLang === 'ru' ? 'Новосибирск, Сибирь' : 'Novosibirsk, Siberia'}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400">55°N 82°E</span>
                  </div>
                  <div className="text-[10px] opacity-75 mt-0.5">
                    {currentLang === 'ru' ? 'Смотреть интерактивную карту цехов и локаций' : 'View interactive map of workshops & city'}
                  </div>
                </div>
              </div>
              <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
