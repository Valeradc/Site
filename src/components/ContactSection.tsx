import React, { useState } from 'react';
import { GENERAL_INFO } from '../data/siteContent';
import { Language } from '../types';
import { Send, Check, Copy, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  isDark
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(GENERAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', message: '' });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 sm:py-28 transition-colors duration-200 ${
        isDark ? 'bg-[#090a0f] text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Title */}
        <div>
          <h2 className={`text-xs uppercase tracking-[0.25em] font-light ${
            isDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            {currentLang === 'ru' ? 'Контакты' : 'Contact'}
          </h2>
          <div className={`mt-3 text-2xl sm:text-3xl font-[250] tracking-tight ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {currentLang === 'ru' ? 'Связаться со мной' : 'Get in Touch'}
          </div>
        </div>

        {/* Direct Channels & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          
          {/* Channels */}
          <div className="space-y-6">
            <p className={`text-base font-light leading-relaxed ${
              isDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              {currentLang === 'ru'
                ? 'Открыт к профессиональному общению: предложения по работе, наставничество, участие в конференциях и отраслевые проекты.'
                : 'Open for professional inquiries: career opportunities, mentorship, conference talks, and manufacturing projects.'}
            </p>

            <div className="space-y-3 font-light text-sm">
              {/* Telegram */}
              <a 
                href={GENERAL_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark ? 'border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-800/60' : 'border-neutral-200/90 bg-neutral-50/60 hover:bg-neutral-100'
                }`}
              >
                <div>
                  <span className={`block text-xs uppercase tracking-wider font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    Telegram
                  </span>
                  <span className={`font-light ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {GENERAL_INFO.telegram}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 stroke-[1.2] opacity-70" />
              </a>

              {/* Email */}
              <div 
                onClick={handleCopyEmail}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                  isDark ? 'border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-800/60' : 'border-neutral-200/90 bg-neutral-50/60 hover:bg-neutral-100'
                }`}
              >
                <div>
                  <span className={`block text-xs uppercase tracking-wider font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                    Email
                  </span>
                  <span className={`font-light ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {GENERAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  className={`p-1.5 rounded-full border text-xs flex items-center gap-1 ${
                    isDark ? 'border-neutral-700 text-neutral-300' : 'border-neutral-200 text-neutral-700'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[1.5]" /> : <Copy className="w-3.5 h-3.5 stroke-[1.2]" />}
                </button>
              </div>

              {/* Location */}
              <div className={`p-4 rounded-xl border ${
                isDark ? 'border-neutral-800/80 bg-neutral-900/40' : 'border-neutral-200/90 bg-neutral-50/60'
              }`}>
                <span className={`block text-xs uppercase tracking-wider font-light ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {currentLang === 'ru' ? 'Город' : 'City'}
                </span>
                <span className={`font-light ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {currentLang === 'ru' ? GENERAL_INFO.locationRu : GENERAL_INFO.locationEn}
                </span>
              </div>
            </div>
          </div>

          {/* Minimalist Message Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-xs uppercase tracking-wider mb-1.5 font-light ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                {currentLang === 'ru' ? 'Имя или организация' : 'Name or Organization'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={currentLang === 'ru' ? 'Иван' : 'John'}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-light transition-colors focus:outline-none ${
                  isDark 
                    ? 'border-neutral-800 bg-neutral-900 text-white focus:border-neutral-600' 
                    : 'border-neutral-200 bg-white text-neutral-900 focus:border-neutral-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-xs uppercase tracking-wider mb-1.5 font-light ${
                isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                {currentLang === 'ru' ? 'Сообщение' : 'Message'}
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={currentLang === 'ru' ? 'Тема сотрудничества...' : 'Your message...'}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-light transition-colors focus:outline-none resize-none ${
                  isDark 
                    ? 'border-neutral-800 bg-neutral-900 text-white focus:border-neutral-600' 
                    : 'border-neutral-200 bg-white text-neutral-900 focus:border-neutral-400'
                }`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl text-sm font-light tracking-wide transition-all active:scale-[0.99] flex items-center justify-center gap-2 ${
                isDark 
                  ? 'bg-white text-neutral-950 hover:bg-neutral-100' 
                  : 'bg-neutral-900 text-white hover:bg-black'
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 stroke-[1.5]" />
                  <span>{currentLang === 'ru' ? 'Отправлено' : 'Sent'}</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 stroke-[1.2]" />
                  <span>{currentLang === 'ru' ? 'Отправить' : 'Send message'}</span>
                </>
              )}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
