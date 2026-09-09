import React, { useState } from 'react';
import { GENERAL_INFO, COLLABORATION_OPTIONS, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { sound } from '../utils/audio';
import { Send, Mail, Check, Download, Copy, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  showBlueprintMode,
  isDark
}) => {
  const bp = SECTION_BLUEPRINTS.contact;
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    role: 'factory',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.play('confirm');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', role: 'factory', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    sound.play('confirm');
    navigator.clipboard.writeText(GENERAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className={`py-14 sm:py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#090a0f] text-white' : 'bg-[#fbfbfd] text-neutral-900'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className={`flex items-baseline justify-between border-b pb-3 ${isDark ? 'border-white/15' : 'border-[#d2d2d7]'}`}>
          <div className="flex items-center gap-2.5">
            <h2 className={`text-xs font-semibold tracking-[0.2em] uppercase font-mono ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              06. {currentLang === 'ru' ? 'КОНТАКТЫ И СОТРУДНИЧЕСТВО' : 'CONTACT & COLLABORATION'}
            </h2>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isDark ? 'border-white/15 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-100 text-neutral-700'
            }`}>
              {currentLang === 'ru' ? 'Прямая связь' : 'Direct channel'}
            </span>
          </div>
          <span className={`text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>06 / 06</span>
        </div>

        {/* Blueprint Spec if enabled */}
        {showBlueprintMode && (
          <div className={`p-4 rounded-xl border text-xs font-mono space-y-1 ${
            isDark ? 'bg-white/5 border-white/15 text-neutral-300' : 'bg-[#f5f5f7] border-[#d2d2d7] text-neutral-700'
          }`}>
            <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 06 (КОНТАКТЫ):' : 'SECTION 06 SPEC (CONTACT):'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* Collaboration Tracks (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {COLLABORATION_OPTIONS.map((collab, i) => (
            <div 
              key={collab.id} 
              className={`rounded-2xl border p-5 space-y-2 transition-all shadow-sm group ${
                isDark 
                  ? 'border-white/10 bg-[#14161b] hover:border-white/30 text-white' 
                  : 'border-[#e5e5ea] bg-white hover:border-[#86868b] text-[#1d1d1f]'
              }`}
            >
              <div className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                {currentLang === 'ru' ? `НАПРАВЛЕНИЕ 0${i + 1}` : `TRACK 0${i + 1}`}
              </div>
              <div className="font-semibold text-sm group-hover:text-amber-500 transition-colors">
                {currentLang === 'ru' ? collab.titleRu : collab.titleEn}
              </div>
              <p className={`text-[11px] leading-relaxed font-sans ${isDark ? 'text-neutral-400' : 'text-[#6e6e73]'}`}>
                {currentLang === 'ru' ? collab.descriptionRu : collab.descriptionEn}
              </p>
              <div className={`pt-2 border-t text-[10px] ${isDark ? 'border-white/5 text-neutral-500' : 'border-neutral-100 text-neutral-400'}`}>
                {currentLang === 'ru' ? 'Для кого: ' : 'Audience: '}
                <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
                  {currentLang === 'ru' ? collab.suitableForRu : collab.suitableForEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Channels & Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels */}
          <div className="md:col-span-5 space-y-6 font-mono text-xs">
            <div className={`rounded-2xl border p-6 space-y-4 shadow-sm ${
              isDark ? 'border-white/10 bg-[#14161b]' : 'border-[#d2d2d7] bg-white'
            }`}>
              <div className={`text-[10px] uppercase tracking-widest border-b pb-2 font-semibold flex items-center justify-between ${
                isDark ? 'text-neutral-400 border-white/10' : 'text-[#86868b] border-[#e5e5ea]'
              }`}>
                <span>{currentLang === 'ru' ? 'ПРЯМЫЕ КАНАЛЫ СВЯЗИ' : 'DIRECT CHANNELS'}</span>
                <span className="text-emerald-500 font-bold">● FAST RESPONSE</span>
              </div>

              <div className="space-y-3">
                <a
                  href="https://t.me/Valera_dc"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.play('light')}
                  className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                    isDark
                      ? 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 text-white'
                      : 'border-[#e5e5ea] hover:border-[#1d1d1f] hover:bg-white text-[#1d1d1f] bg-[#f5f5f7]/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                    <span className="font-semibold">Telegram</span>
                  </div>
                  <span className="text-sky-400 font-semibold">@Valera_dc ↗</span>
                </a>

                <div className={`flex items-center justify-between p-3.5 rounded-xl border ${
                  isDark ? 'border-white/10 bg-white/5 text-white' : 'border-[#e5e5ea] text-[#1d1d1f] bg-[#f5f5f7]/60'
                }`}>
                  <div className="space-y-0.5 truncate mr-2">
                    <div className={`text-[10px] ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>Email</div>
                    <div className="font-semibold truncate">{GENERAL_INFO.email}</div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase transition-colors flex items-center gap-1 font-semibold ${
                      isDark 
                        ? 'border-white/20 bg-white/10 hover:bg-white/20 text-white' 
                        : 'border-[#d2d2d7] hover:border-[#1d1d1f] bg-white text-neutral-800'
                    }`}
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? (currentLang === 'ru' ? 'Скопирован' : 'Copied') : (currentLang === 'ru' ? 'Копировать' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Dossier note */}
            <div className={`p-5 rounded-2xl border text-[11px] space-y-1.5 ${
              isDark ? 'border-white/10 bg-[#14161b] text-neutral-300' : 'border-[#e5e5ea] bg-white text-[#6e6e73]'
            }`}>
              <div className={`font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                {currentLang === 'ru' ? 'РЕЗЮМЕ СПЕЦИАЛИСТА:' : 'SPECIALIST RESUME:'}
              </div>
              <p className="font-sans leading-relaxed">
                {currentLang === 'ru' 
                  ? 'Доступно краткое портфолио, выписка оценок диплома и презентационные материалы по запросу в Telegram.' 
                  : 'Portfolio summary, degree transcripts, and speaking slide decks available on request via Telegram.'}
              </p>
            </div>
          </div>

          {/* Minimalist Message Form */}
          <div className={`md:col-span-7 rounded-2xl border p-6 sm:p-7 space-y-4 font-mono text-xs shadow-sm ${
            isDark ? 'border-white/10 bg-[#14161b]' : 'border-[#d2d2d7] bg-white'
          }`}>
            <div className={`text-[10px] uppercase tracking-widest border-b pb-2 font-semibold ${
              isDark ? 'text-neutral-400 border-white/10' : 'text-[#86868b] border-[#e5e5ea]'
            }`}>
              {currentLang === 'ru' ? 'БЫСТРАЯ ФОРМА ОБРАТНОЙ СВЯЗИ' : 'INQUIRY FORM'}
            </div>

            {submitted ? (
              <div className={`p-8 rounded-xl border text-center space-y-2 ${
                isDark ? 'border-white/10 bg-white/5' : 'border-[#d2d2d7] bg-[#fbfbfd]'
              }`}>
                <Check className="w-6 h-6 mx-auto text-emerald-400" />
                <div className={`font-bold uppercase ${isDark ? 'text-white' : 'text-[#1d1d1f]'}`}>
                  {currentLang === 'ru' ? 'Сообщение отправлено' : 'Message Sent'}
                </div>
                <p className={`text-[11px] font-sans ${isDark ? 'text-neutral-400' : 'text-[#6e6e73]'}`}>
                  {currentLang === 'ru' ? 'Валерий свяжется с вами в течение рабочего дня.' : 'Valeriy will respond within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className={`text-[10px] uppercase font-medium ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                      {currentLang === 'ru' ? 'Ваше имя' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLang === 'ru' ? 'Иван Петров' : 'Alex Mercer'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full p-2.5 rounded-xl border outline-none font-sans text-xs transition-all ${
                        isDark 
                          ? 'border-white/15 bg-white/5 focus:border-white text-white placeholder:text-neutral-500' 
                          : 'border-[#d2d2d7] bg-white focus:border-[#1d1d1f] text-[#1d1d1f]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] uppercase font-medium ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                      {currentLang === 'ru' ? 'Telegram или Email' : 'Telegram or Email'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="@username / email@plant.ru"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className={`w-full p-2.5 rounded-xl border outline-none font-sans text-xs transition-all ${
                        isDark 
                          ? 'border-white/15 bg-white/5 focus:border-white text-white placeholder:text-neutral-500' 
                          : 'border-[#d2d2d7] bg-white focus:border-[#1d1d1f] text-[#1d1d1f]'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className={`text-[10px] uppercase font-medium ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                    {currentLang === 'ru' ? 'Тема обращения' : 'Subject'}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => {
                      sound.play('tab');
                      setFormData({ ...formData, role: e.target.value });
                    }}
                    className={`w-full p-2.5 rounded-xl border outline-none font-sans text-xs transition-all ${
                      isDark 
                        ? 'border-white/15 bg-[#14161b] focus:border-white text-white' 
                        : 'border-[#d2d2d7] bg-white focus:border-[#1d1d1f] text-[#1d1d1f]'
                    }`}
                  >
                    <option value="factory">
                      {currentLang === 'ru' ? 'Руководитель предприятия / Практика и кадры' : 'Plant Director / Apprenticeship & Machining'}
                    </option>
                    <option value="conference">
                      {currentLang === 'ru' ? 'Организатор конференции / Выступление' : 'Event Organizer / Speaking & Keynote'}
                    </option>
                    <option value="student">
                      {currentLang === 'ru' ? 'Студент / Молодой специалист / Подкаст' : 'Student / Young Toolmaker / Podcast Guest'}
                    </option>
                    <option value="other">
                      {currentLang === 'ru' ? 'Другое сотрудничество' : 'Other Collaboration'}
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className={`text-[10px] uppercase font-medium ${isDark ? 'text-neutral-400' : 'text-[#86868b]'}`}>
                    {currentLang === 'ru' ? 'Сообщение' : 'Message'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={currentLang === 'ru' ? 'Опишите задачу или проект...' : 'Describe your project or proposal...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-2.5 rounded-xl border outline-none font-sans text-xs transition-all ${
                      isDark 
                        ? 'border-white/15 bg-white/5 focus:border-white text-white placeholder:text-neutral-500' 
                        : 'border-[#d2d2d7] bg-white focus:border-[#1d1d1f] text-[#1d1d1f]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl uppercase tracking-wider font-semibold text-xs transition-all flex items-center justify-center gap-2 active:scale-[0.99] ${
                    isDark 
                      ? 'bg-white text-black hover:bg-neutral-200' 
                      : 'bg-[#1d1d1f] text-white hover:bg-black'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{currentLang === 'ru' ? 'Отправить обращение' : 'Send Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
