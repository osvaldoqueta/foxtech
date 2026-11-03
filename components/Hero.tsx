'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Rocket } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FoxtechIcon } from './FoxtechLogo';

export default function Hero() {
  const { t, language } = useLanguage();

  // Split tagline so the first word ("Transforme" / "Turn" / "Transforme") is highlighted in orange #FF6800 as in the reference
  const taglineWords = (t.hero.tagline || 'Transforme suas ideias em realidade').split(' ');
  const firstTagWord = taglineWords[0];
  const restTagWords = taglineWords.slice(1).join(' ');

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-0 overflow-hidden bg-[#080B12]">
      {/* Technological Background SVG: Diagonal Orange Laser Lines, Geometric Polygons & Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Top-left subtle orange flare */}
        <div className="absolute top-12 -left-20 w-80 h-80 bg-[#FF6800]/12 rounded-full blur-[110px]" />
        {/* Center-right orange backlight behind portrait */}
        <div className="absolute top-1/3 left-[58%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[440px] bg-gradient-to-tr from-[#FF6800]/22 via-[#FF3600]/12 to-transparent rounded-full blur-[120px]" />
        {/* Bottom-right warm glow */}
        <div className="absolute bottom-0 right-0 w-96 h-64 bg-[#FF6800]/15 rounded-full blur-[110px]" />

        {/* Geometric Diagonal Lines & Tech Polygons (Matching Reference Artwork) */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hero-beam-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6800" stopOpacity="0.05" />
              <stop offset="45%" stopColor="#FF6800" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#FF3600" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#FF6800" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-beam-2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6800" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FF3600" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF6800" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="hero-poly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6800" stopOpacity="0.16" />
              <stop offset="40%" stopColor="#11141F" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#080B12" stopOpacity="0.9" />
            </linearGradient>
            <filter id="orange-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Angled Dark Tech Polygon Frame Behind Executive Portrait */}
          <polygon
            points="540,760 885,35 1370,35 1030,760"
            fill="url(#hero-poly-grad)"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />

          {/* Secondary Inner Geometric Tech Plate */}
          <polygon
            points="595,760 765,390 1280,390 1095,760"
            fill="rgba(255, 104, 0, 0.04)"
          />

          {/* Left Top Corner Diagonal Accent Line */}
          <line
            x1="-40"
            y1="210"
            x2="130"
            y2="-20"
            stroke="url(#hero-beam-1)"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Main Diagonal Glowing Orange Laser Line (Behind Portrait Right Shoulder) */}
          <line
            x1="510"
            y1="740"
            x2="890"
            y2="25"
            stroke="url(#hero-beam-1)"
            strokeWidth="2.5"
            filter="url(#orange-neon-glow)"
          />

          {/* Secondary Parallel Diagonal Line (Mid-Left Behind Portrait) */}
          <line
            x1="465"
            y1="550"
            x2="635"
            y2="225"
            stroke="url(#hero-beam-1)"
            strokeWidth="2"
            opacity="0.75"
          />
          <line
            x1="635"
            y1="225"
            x2="755"
            y2="225"
            stroke="#FF6800"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />

          {/* Right Diagonal Glowing Orange Laser Line */}
          <line
            x1="1040"
            y1="740"
            x2="1385"
            y2="180"
            stroke="url(#hero-beam-2)"
            strokeWidth="3"
            filter="url(#orange-neon-glow)"
          />

          {/* Right Glowing Orange Corner Polygon Wedge */}
          <polygon
            points="1265,380 1440,110 1440,440"
            fill="url(#hero-beam-2)"
            opacity="0.22"
          />
        </svg>

        {/* Large FOXTECH Fox Silhouette Watermark in Background Right */}
        <div className="Optional watermark absolute right-[3%] sm:right-[6%] lg:right-[7%] top-[14%] sm:top-[12%] w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] opacity-[0.06] pointer-events-none">
          <FoxtechIcon className="w-full h-full" monochrome="#FFFFFF" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* LEFT COLUMN: Tag, FOXTECH Title, Subtitle, Description, Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left pt-4 sm:pt-6 pb-8 lg:pb-14 z-20">
            {/* Top Rocket Badge: "🚀 Transforme suas ideias em realidade" */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#11141F]/90 border border-white/12 shadow-[0_0_25px_rgba(255,104,0,0.15)] w-fit mb-6">
              <span className="w-6 h-6 rounded-full bg-[#FF6800]/20 border border-[#FF6800]/50 flex items-center justify-center text-[#FF6800] shadow-[0_0_10px_rgba(255,104,0,0.4)]">
                <Rocket className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs sm:text-sm tracking-tight">
                <strong className="text-[#FF6800] font-bold">{firstTagWord}</strong>{' '}
                <span className="text-white font-medium">{restTagWords}</span>
              </span>
            </div>

            {/* Giant FOXTECH Brand Headline */}
            <h1
              className="text-5xl sm:text-7xl lg:text-[82px] xl:text-[90px] font-black tracking-wider leading-none mb-4 select-none italic"
              style={{ transform: 'skewX(-6deg)' }}
            >
              <span className="text-white">FOX</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6800] to-[#FF3600] drop-shadow-[0_0_25px_rgba(255,104,0,0.25)]">
                TECH
              </span>
            </h1>

            {/* Main Subtitle with "eficiente." highlighted in #FF6800 */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.16] mb-5 max-w-xl">
              {language === 'pt' ? (
                <>
                  Soluções Inteligentes para
                  <br />
                  um futuro mais <span className="text-[#FF6800]">eficiente.</span>
                </>
              ) : (
                <>
                  {t.hero.headlinePre}
                  <span className="text-[#FF6800]">{t.hero.headlineGradient}</span>
                </>
              )}
            </h2>

            {/* Institutional Description */}
            <p className="text-sm sm:text-base text-[#A8AFB8] font-normal leading-relaxed mb-8 max-w-lg">
              {t.hero.description}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Orange Pill Button: "Comece Agora →" */}
              <a
                href="#contato"
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:from-[#FF7A1A] hover:to-[#FF4500] shadow-[0_0_28px_rgba(255,104,0,0.45)] hover:shadow-[0_0_38px_rgba(255,104,0,0.65)] transition-all duration-300 flex items-center gap-2.5 group active:scale-95"
              >
                <span>{t.hero.btnPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Dark Pill Button: "> Conheça Nossos Serviços" */}
              <a
                href="#servicos"
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#11141F]/90 hover:bg-[#181C2B] border border-white/15 hover:border-[#FF6800]/50 transition-all duration-300 flex items-center gap-2.5 group active:scale-95"
              >
                <span className="w-5 h-5 rounded-full bg-[#FF6800]/15 border border-[#FF6800]/40 text-[#FF6800] flex items-center justify-center group-hover:bg-[#FF6800] group-hover:text-white transition-colors">
                  <ChevronRight className="w-3 h-3" />
                </span>
                <span>{t.hero.btnSecondary}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Real Executive Portrait Cutout Integrated with Orange Rim Lighting */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-start items-end relative self-end">
            <div className="relative w-[310px] sm:w-[390px] md:w-[430px] lg:w-[460px] aspect-[1125/1320] flex items-end justify-center">
              {/* Subtle Orange Rim Backlight behind Osvaldo's shoulders */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[78%] h-[62%] bg-[#FF6800]/22 rounded-full blur-[70px] pointer-events-none -z-10" />

              <Image
                src="/osvaldo_portrait_terno_cutout.png"
                alt="Osvaldo Queta Fernando — CEO & Principal Architect FOXTECH"
                fill
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1200px) 420px, 460px"
                className="object-contain object-bottom drop-shadow-[0_12px_35px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
