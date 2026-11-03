'use client';

import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FoxtechIcon } from './FoxtechLogo';

export default function WorksSection() {
  const { t } = useLanguage();

  const works = t.works?.items || [];

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#080B12] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 opacity-15 pointer-events-none cyber-grid-bg" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF6800]/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11141F] border border-white/10 mb-3">
            <span className="text-xs font-mono font-semibold text-[#FF6800] uppercase tracking-widest">
              {t.works?.badge || 'PORTFÓLIO FOXTECH ✱ CASOS REAIS'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            {t.works?.headingPre || 'Projetos Entregues & '}
            <span className="text-[#FF6800]">
              {t.works?.headingHighlight || 'Soluções em Produção'}
            </span>
          </h2>

          <p className="text-[#A8AFB8] text-sm sm:text-base">
            {t.works?.description}
          </p>
        </div>

        {/* 6-Card Portfolio Grid with Centered FOXTECH Badge */}
        <div className="relative">
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-[#11141F] text-white flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,104,0,0.4)] border-2 border-[#FF6800] p-3">
              <FoxtechIcon className="w-12 h-12 mb-1" />
              <span className="text-[11px] font-black tracking-widest uppercase italic text-white">
                FOX<span className="text-[#FF6800]">TECH</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((item, idx) => (
              <div
                key={item.id || idx}
                className="group relative rounded-2xl overflow-hidden bg-[#11141F] border border-white/10 hover:border-[#FF6800]/60 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:shadow-[0_12px_36px_rgba(255,104,0,0.14)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-full bg-[#FF6800]/10 text-[#FF6800] border border-[#FF6800]/25">
                      {item.category}
                    </span>
                    {item.link?.startsWith('http') && (
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#FF6800] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#A8AFB8] text-xs sm:text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#080B12] text-[#A8AFB8] border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                  <a
                    href={item.link || '#'}
                    target={item.link?.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#FF6800] transition-colors"
                  >
                    <span>{t.works?.exploreBtn || 'Explorar Projeto'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {item.link?.startsWith('http') && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#687280] hover:text-white transition-colors"
                      aria-label={`Open ${item.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
