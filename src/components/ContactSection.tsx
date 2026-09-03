import React, { useState } from 'react';
import { GENERAL_INFO, COLLABORATION_OPTIONS, SECTION_BLUEPRINTS } from '../data/siteContent';
import { Language } from '../types';
import { Send, Mail, Check, Download, Copy } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  showBlueprintMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  showBlueprintMode
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', role: 'factory', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(GENERAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-black pb-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-black font-mono">
            {currentLang === 'ru' ? bp.titleRu : bp.titleEn}
          </h2>
          <span className="text-xs font-mono text-neutral-400">05 / 05</span>
        </div>

        {/* Blueprint Spec if enabled */}
        {showBlueprintMode && (
          <div className="p-4 bg-neutral-50 border border-neutral-300 text-xs font-mono space-y-1 text-neutral-700">
            <div className="font-bold text-black uppercase">
              {currentLang === 'ru' ? 'БРИФ РАЗДЕЛА 05 (КОНТАКТЫ):' : 'SECTION 05 SPEC (CONTACT):'}
            </div>
            <p>{currentLang === 'ru' ? bp.purposeRu : bp.purposeEn}</p>
          </div>
        )}

        {/* Collaboration Tracks (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {COLLABORATION_OPTIONS.map((collab, i) => (
            <div key={collab.id} className="border border-neutral-200 p-4 space-y-2 bg-white hover:border-black transition-colors">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                {currentLang === 'ru' ? `НАПРАВЛЕНИЕ 0${i + 1}` : `TRACK 0${i + 1}`}
              </div>
              <div className="font-bold text-black text-sm">
                {currentLang === 'ru' ? collab.titleRu : collab.titleEn}
              </div>
              <p className="text-neutral-600 text-[11px] leading-relaxed">
                {currentLang === 'ru' ? collab.descriptionRu : collab.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Channels & Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels */}
          <div className="md:col-span-5 space-y-6 font-mono text-xs">
            <div className="border border-black p-5 space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
                {currentLang === 'ru' ? 'ПРЯМЫЕ КАНАЛЫ СВЯЗИ' : 'DIRECT CHANNELS'}
              </div>

              <div className="space-y-3">
                <a
                  href="https://t.me/Valera_dc"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 border border-neutral-200 hover:border-black transition-colors text-black"
                >
                  <span className="font-semibold">Telegram</span>
                  <span className="text-neutral-500">@Valera_dc ↗</span>
                </a>

                <div className="flex items-center justify-between p-2.5 border border-neutral-200 text-black">
                  <div className="space-y-0.5 truncate mr-2">
                    <div className="text-[10px] text-neutral-400">Email</div>
                    <div className="font-semibold truncate">{GENERAL_INFO.email}</div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 border border-neutral-300 hover:border-black text-[10px] uppercase"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Dossier note */}
            <div className="p-4 border border-neutral-200 bg-neutral-50 text-[11px] text-neutral-600 space-y-1">
              <div className="font-bold text-black uppercase">
                {currentLang === 'ru' ? 'РЕЗЮМЕ СПЕЦИАЛИСТА:' : 'SPECIALIST RESUME:'}
              </div>
              <p>
                {currentLang === 'ru' 
                  ? 'Доступно краткое портфолио и выписка диплома по запросу в Telegram.' 
                  : 'Full credentials and diploma transcripts available via Telegram.'}
              </p>
            </div>
          </div>

          {/* Minimalist Message Form */}
          <div className="md:col-span-7 border border-black p-6 bg-white space-y-4 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
              {currentLang === 'ru' ? 'БЫСТРАЯ ФОРМА ОБРАТНОЙ СВЯЗИ' : 'INQUIRY FORM'}
            </div>

            {submitted ? (
              <div className="p-6 border border-black bg-neutral-50 text-center space-y-2">
                <Check className="w-5 h-5 mx-auto text-black" />
                <div className="font-bold text-black uppercase">
                  {currentLang === 'ru' ? 'Сообщение отправлено' : 'Message Sent'}
                </div>
                <p className="text-neutral-600 text-[11px]">
                  {currentLang === 'ru' ? 'Валерий свяжется с вами в течение рабочего дня.' : 'Valeriy will respond within 24 hours.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-neutral-500">{currentLang === 'ru' ? 'Ваше имя' : 'Your Name'}</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2 border border-neutral-300 focus:border-black outline-none bg-white text-black font-sans text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-neutral-500">{currentLang === 'ru' ? 'Telegram или Email' : 'Telegram or Email'}</label>
                    <input
                      type="text"
                      required
                      placeholder="@username / email@plant.ru"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full p-2 border border-neutral-300 focus:border-black outline-none bg-white text-black font-sans text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-neutral-500">{currentLang === 'ru' ? 'Тема обращения' : 'Subject'}</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full p-2 border border-neutral-300 focus:border-black outline-none bg-white text-black font-sans text-xs"
                  >
                    <option value="factory">{currentLang === 'ru' ? 'Сотрудничество с заводом / Практика' : 'Factory partnership / Apprenticeship'}</option>
                    <option value="speaking">{currentLang === 'ru' ? 'Выступление на конференции / Форуме' : 'Conference speaking invitation'}</option>
                    <option value="podcast">{currentLang === 'ru' ? 'Участие в подкасте «Стружка и люди»' : 'Podcast guest / Media inquiry'}</option>
                    <option value="other">{currentLang === 'ru' ? 'Другой инженерный вопрос' : 'Other inquiry'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-neutral-500">{currentLang === 'ru' ? 'Краткое сообщение' : 'Message'}</label>
                  <textarea
                    rows={3}
                    required
                    placeholder={currentLang === 'ru' ? 'Опишите ваш запрос или проект...' : 'Briefly describe your request...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2 border border-neutral-300 focus:border-black outline-none bg-white text-black font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  {currentLang === 'ru' ? 'Отправить запрос' : 'Submit Inquiry'}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
