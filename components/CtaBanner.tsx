'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FoxtechIcon } from './FoxtechLogo';

export default function CtaBanner() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-10 sm:py-14 bg-[#080B12] overflow-hidden">
      {/* Diagonal Orange Geometric Laser Accents Around CTA (Matching Reference Bottom Section) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-32 bg-[#FF6800]/15 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-32 bg-[#FF3600]/15 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-2xl sm:rounded-full bg-[#11141F]/95 border border-[#FF6800]/35 px-6 py-6 sm:px-10 sm:py-6 shadow-[0_15px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(255,104,0,0.12)] overflow-hidden">
          {/* Subtle top & bottom glowing border lines */}
          <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-[#FF6800]/60 to-transparent" />
          <div className="absolute bottom-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-[#FF6800]/40 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side: Circular Fox Emblem + Title & Description */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 text-center sm:text-left">
              {/* Circular Dark Badge with Glowing Fox Symbol */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#080B12] border-2 border-white/10 shadow-[0_0_25px_rgba(255,104,0,0.25)] flex items-center justify-center shrink-0 p-3">
                <FoxtechIcon className="w-full h-full drop-shadow-[0_0_10px_rgba(255,104,0,0.5)]" />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight mb-1">
                  {language === 'pt'
                    ? 'Pronto para levar seu negócio para o próximo nível?'
                    : `${t.ctaBanner.headingPre}${t.ctaBanner.headingHighlight}`}
                </h2>
                <p className="text-xs sm:text-sm text-[#A8AFB8]">
                  {t.ctaBanner.description ||
                    'Fale com a FOXTECH e descubra como podemos ajudar.'}
                </p>
              </div>
            </div>

            {/* Right Side: Orange Pill Button "Fale Conosco →" */}
            <div className="shrink-0">
              <a
                href="https://wa.me/5563992581001?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20FOXTECH%20e%20levar%20meu%20neg%C3%B3cio%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:from-[#FF7A1A] hover:to-[#FF4500] shadow-[0_0_25px_rgba(255,104,0,0.45)] hover:shadow-[0_0_35px_rgba(255,104,0,0.65)] transition-all duration-300 group active:scale-95"
              >
                <span>{t.ctaBanner.btnText || 'Fale Conosco'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
