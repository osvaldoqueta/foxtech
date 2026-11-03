'use client';

import React from 'react';
import {
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  CloudCog,
  ArrowRight,
  Check,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServicesGrid() {
  const { t } = useLanguage();

  const serviceVisuals: Record<
    string,
    {
      icon: React.ElementType;
      linkHref: string;
    }
  > = {
    'bi-data': {
      icon: BarChart3,
      linkHref: '#powerbi',
    },
    'software-ai': {
      icon: BrainCircuit,
      linkHref: '#contato',
    },
    'it-consulting': {
      icon: ShieldCheck,
      linkHref: '#contato',
    },
    'cloud-automation': {
      icon: CloudCog,
      linkHref: '#contato',
    },
  };

  return (
    <section id="servicos" className="relative py-14 sm:py-20 bg-[#080B12] overflow-hidden">
      {/* Subtle ambient orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF6800]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header (Matching Reference Image 1:1) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold text-[#FF6800] tracking-wide mb-2">
            {t.services.badge || 'Nossas Soluções'}
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight mb-3 leading-tight">
            {t.services.titlePre || 'O que podemos fazer por você?'}
          </h2>

          <p className="text-[#A8AFB8] text-sm sm:text-base leading-relaxed">
            {t.services.description ||
              'Soluções completas em tecnologia, dados e inteligência artificial.'}
          </p>
        </div>

        {/* 4 FOXTECH Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((service) => {
            const visual = serviceVisuals[service.id] || serviceVisuals['bi-data'];
            const Icon = visual.icon;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-6 bg-[#11141F] border border-white/10 hover:border-[#FF6800]/65 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,104,0,0.16)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Top-left subtle orange radial glow behind icon */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF6800]/18 rounded-full blur-2xl group-hover:bg-[#FF6800]/30 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Glowing Orange Icon + Discrete Number & Top Navigation Arrow */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-[#FF6800]/15 border border-[#FF6800]/45 text-[#FF6800] flex items-center justify-center shadow-[0_0_18px_rgba(255,104,0,0.28)] group-hover:bg-[#FF6800] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#687280] group-hover:text-[#FF6800]/80 transition-colors">
                        {service.number}
                      </span>
                      <a
                        href={visual.linkHref}
                        aria-label={service.title}
                        className="text-[#A8AFB8] group-hover:text-[#FF6800] group-hover:translate-x-0.5 transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-white mb-2.5 leading-snug group-hover:text-[#FF6800] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description + Right Arrow (As seen in Reference Card Layout) */}
                  <div className="flex items-end justify-between gap-2 pb-4 mb-4 border-b border-white/8">
                    <p className="text-xs text-[#A8AFB8] leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href={visual.linkHref}
                      aria-label={`${service.ctaText} - ${service.title}`}
                      className="text-[#A8AFB8] group-hover:text-[#FF6800] shrink-0 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* List of 6 Services */}
                  <ul className="space-y-2 text-xs text-[#A8AFB8]">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FF6800] shrink-0 mt-0.5" />
                        <span className="leading-snug text-slate-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Subtle Orange Line Accent on Hover */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#A8AFB8] group-hover:text-white transition-colors">
                  <span>{service.badge}</span>
                  <a
                    href={visual.linkHref}
                    className="inline-flex items-center gap-1 text-[#FF6800] hover:underline"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
