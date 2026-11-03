'use client';

import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import FoxtechLogo from './FoxtechLogo';

export default function Footer() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    escopo: t.footer.form.scopeOptions[0],
    orcamento: t.footer.form.budgetOptions[1],
    detalhes: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `🚀 *SOLICITAÇÃO DE PROJETO — FOXTECH (${language.toUpperCase()})*
    
👤 *Nome:* ${formData.nome || 'Não informado'}
🏢 *Empresa:* ${formData.empresa || 'Não informada'}
🎯 *Solução:* ${formData.escopo}
💰 *Investimento:* ${formData.orcamento}
📝 *Detalhes:* ${formData.detalhes || 'Nenhum detalhe adicional'}

_Enviado via Website Oficial FOXTECH_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5563992581001&text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('osvaldoqueta@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contato" className="relative pt-16 pb-10 bg-[#080B12] border-t border-white/10 overflow-hidden">
      {/* Subtle Orange Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#FF6800]/8 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Direct Contact Interactive Dispatch Form */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl bg-[#11141F] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-[#FF6800] mb-2">
              {t.footer.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {t.footer.titlePre}
              <span className="text-[#FF6800]">{t.footer.titleGradient}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8AFB8]">{t.footer.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#A8AFB8] mb-1.5">
                  {t.footer.form.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.footer.form.namePlaceholder}
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-white placeholder-[#687280] text-sm focus:outline-none focus:border-[#FF6800]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8AFB8] mb-1.5">
                  {t.footer.form.companyLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.footer.form.companyPlaceholder}
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-white placeholder-[#687280] text-sm focus:outline-none focus:border-[#FF6800]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#A8AFB8] mb-1.5">
                  {t.footer.form.scopeLabel}
                </label>
                <select
                  value={formData.escopo}
                  onChange={(e) => setFormData({ ...formData, escopo: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6800]"
                >
                  {t.footer.form.scopeOptions.map((opt, oIdx) => (
                    <option key={oIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A8AFB8] mb-1.5">
                  {t.footer.form.budgetLabel}
                </label>
                <select
                  value={formData.orcamento}
                  onChange={(e) => setFormData({ ...formData, orcamento: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6800]"
                >
                  {t.footer.form.budgetOptions.map((opt, bIdx) => (
                    <option key={bIdx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#A8AFB8] mb-1.5">
                {t.footer.form.detailsLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.footer.form.detailsPlaceholder}
                value={formData.detalhes}
                onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-white placeholder-[#687280] text-sm focus:outline-none focus:border-[#FF6800]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#687280]">{t.footer.form.privacyNote}</span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:from-[#FF7A1A] hover:to-[#FF4500] shadow-[0_0_25px_rgba(255,104,0,0.35)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.footer.form.submitBtn}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* Corporate 4-Column FOXTECH Footer (Matching Reference Image & Spec Section 7) */}
        <div className="pt-10 pb-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1 (4 cols): FOXTECH Footer Logo, Slogan & Institutional Description */}
          <div className="lg:col-span-4 space-y-3">
            <FoxtechLogo
              variant="footer"
              slogan={
                language === 'en'
                  ? 'Innovation. Strategy. Results.'
                  : language === 'es'
                  ? 'Innovación. Estrategia. Resultados.'
                  : 'Inovação. Estratégia. Resultados.'
              }
            />
            <p className="text-xs text-[#A8AFB8] leading-relaxed max-w-sm">
              {t.footer.identityBio}
            </p>
          </div>

          {/* Column 2 (3 cols): Navigation Links (Home, Soluções, Portfólio, Direct Contact) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.ecosystemTitle}
            </h4>
            <ul className="flex flex-wrap md:flex-col gap-x-5 gap-y-2 text-xs text-[#A8AFB8]">
              <li>
                <a href="#" className="hover:text-[#FF6800] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#FF6800] transition-colors">
                  {language === 'en' ? 'Solutions' : language === 'es' ? 'Soluciones' : 'Soluções'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FF6800] transition-colors">
                  {t.navbar.portfolio}
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#FF6800] transition-colors">
                  Direct Contact
                </a>
              </li>
              <li className="pt-1 flex items-center gap-3 text-[11px] text-[#687280]">
                <a
                  href="https://foxstorebr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6800] inline-flex items-center gap-1"
                >
                  <span>FoxStoreBR</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a
                  href="https://libras.foxstorebr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6800] inline-flex items-center gap-1"
                >
                  <span>Fox Libras</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (2 cols): Social Media Icons (LinkedIn, GitHub, YouTube, Instagram) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.guaranteesTitle}
            </h4>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/osvaldo-queta-fernando/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn FOXTECH"
                className="w-8 h-8 rounded-lg bg-[#11141F] border border-white/10 hover:border-[#FF6800] text-[#A8AFB8] hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub FOXTECH"
                className="w-8 h-8 rounded-lg bg-[#11141F] border border-white/10 hover:border-[#FF6800] text-[#A8AFB8] hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://libras.foxstorebr.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube FOXTECH"
                className="w-8 h-8 rounded-lg bg-[#11141F] border border-white/10 hover:border-[#FF6800] text-[#A8AFB8] hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://foxstorebr.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FOXTECH"
                className="w-8 h-8 rounded-lg bg-[#11141F] border border-white/10 hover:border-[#FF6800] text-[#A8AFB8] hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 4 (3 cols): Phone, Email & Location */}
          <div className="lg:col-span-3 space-y-2.5 text-xs">
            <a
              href="tel:+5563992581001"
              className="flex items-center gap-2.5 text-white hover:text-[#FF6800] font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF6800] shrink-0" />
              <span>+55 (63) 9 9258-1001</span>
            </a>

            <div className="flex items-center gap-2.5 text-[#A8AFB8]">
              <Mail className="w-4 h-4 text-[#FF6800] shrink-0" />
              <a
                href="mailto:osvaldoqueta@gmail.com"
                className="hover:text-white transition-colors truncate"
              >
                osvaldoqueta@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="text-[#687280] hover:text-[#FF6800] p-0.5 cursor-pointer"
                title="Copiar e-mail"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2.5 text-[#A8AFB8]">
              <MapPin className="w-4 h-4 text-[#FF6800] shrink-0" />
              <span>Juiz de Fora / MG — Brasil</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687280]">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#contato" className="hover:text-[#A8AFB8] transition-colors">
              {language === 'en'
                ? 'Privacy Policy'
                : language === 'es'
                ? 'Política de Privacidad'
                : 'Política de Privacidade'}
            </a>
            <a href="#contato" className="hover:text-[#A8AFB8] transition-colors">
              {language === 'en'
                ? 'Terms of Use'
                : language === 'es'
                ? 'Términos de Uso'
                : 'Termos de Uso'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
