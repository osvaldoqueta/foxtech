'use client';

import React from 'react';
import { Trophy, ShieldCheck, Rocket, Headphones } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function StatsBanner() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Trophy,
      value: t.statsBanner?.yearsVal || '16+',
      label: t.statsBanner?.yearsLabel || 'Anos de Experiência',
    },
    {
      icon: ShieldCheck,
      value: t.statsBanner?.clientsVal || '100%',
      label: t.statsBanner?.clientsLabel || 'Compromisso com Qualidade',
    },
    {
      icon: Rocket,
      value: t.statsBanner?.projectsVal || '+500',
      label: t.statsBanner?.projectsLabel || 'Projetos Entregues',
    },
    {
      icon: Headphones,
      value: t.statsBanner?.ratingVal || 'Suporte 24/7',
      label: t.statsBanner?.ratingLabel || 'Sempre ao seu lado',
    },
  ];

  return (
    <section className="relative z-20 -mt-1 pb-12 sm:pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl bg-[#11141F]/95 border border-[#FF6800]/30 shadow-[0_15px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(255,104,0,0.1)] backdrop-blur-xl px-6 py-6 sm:px-10 sm:py-7 overflow-hidden">
          {/* Subtle top & bottom orange neon edge highlights */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#FF6800]/50 to-transparent" />
          <div className="absolute bottom-0 left-24 right-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF6800]/25 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 group px-2 py-1"
                >
                  {/* Linear Orange Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FF6800]/10 border border-[#FF6800]/30 text-[#FF6800] flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(255,104,0,0.2)] group-hover:bg-[#FF6800] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Value & Label */}
                  <div className="flex flex-col text-left">
                    <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-[#A8AFB8] font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
