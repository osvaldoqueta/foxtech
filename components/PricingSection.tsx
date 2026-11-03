'use client';

import React from 'react';
import {
  Check,
  Sparkles,
  Zap,
  Clock,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="planos" className="relative py-20 sm:py-28 bg-[#080B12] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-[#FF6800]/6 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11141F] border border-white/10 text-[#FF6800] text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.pricing.titlePre}
            <span className="text-[#FF6800]">{t.pricing.titleGradient}</span>
          </h2>

          <p className="text-[#A8AFB8] text-base sm:text-lg leading-relaxed">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {t.pricing.plans.map((plan) => {
            const isPopular = plan.id === 'enterprise';
            const encodedMsg = encodeURIComponent(plan.whatsappMessage);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=5563992581001&text=${encodedMsg}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#11141F] border-2 border-[#FF6800] shadow-[0_15px_45px_rgba(255,104,0,0.18)] lg:-translate-y-2'
                    : 'bg-[#11141F] border border-white/10 hover:border-[#FF6800]/50'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF6800] to-[#FF3600] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-lg shadow-[#FF6800]/40">
                      <Sparkles className="w-3 h-3 text-white" />
                      {t.pricing.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-[#A8AFB8] font-medium">{plan.tagline}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#080B12] border border-white/8 mb-6">
                    <span className="text-xs text-[#687280] font-mono block mb-1">
                      {t.pricing.priceModel}
                    </span>
                    <span className="text-xl font-extrabold font-mono text-[#FF6800]">
                      {plan.priceNote}
                    </span>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#A8AFB8] font-mono">
                      <Clock className="w-3 h-3 text-[#FF6800]" />
                      <span>{plan.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="mb-6 p-3 rounded-xl bg-[#080B12]/60 border border-white/5 text-xs text-[#A8AFB8] leading-snug">
                    <strong className="text-white font-semibold block mb-0.5">
                      {t.pricing.idealLabel}
                    </strong>
                    {plan.idealFor}
                  </div>

                  <div className="mb-6 border-t border-white/8 pt-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#687280] block mb-3">
                      {t.pricing.scopeLabel}
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-200">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#FF6800] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:from-[#FF7A1A] hover:to-[#FF4500] text-white shadow-[0_0_25px_rgba(255,104,0,0.35)]'
                        : 'bg-[#080B12] hover:bg-[#FF6800] text-white border border-white/12 hover:border-[#FF6800]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#11141F] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#FF6800]/15 border border-[#FF6800]/35 text-[#FF6800] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                {t.pricing.customScopeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#A8AFB8]">{t.pricing.customScopeDesc}</p>
            </div>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5563992581001&text=Ol%C3%A1!%20Gostaria%20de%20uma%20proposta%20personalizada%20da%20FOXTECH."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:opacity-95 shadow-lg shadow-[#FF6800]/25 transition-all shrink-0"
          >
            {t.pricing.customScopeBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
