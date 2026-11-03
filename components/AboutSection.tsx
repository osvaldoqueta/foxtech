'use client';

import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const skills = t.about?.skills || [
    { name: 'Business Intelligence, Power BI, DAX & Data Engineering', percent: 98 },
    { name: 'Software Engineering, Next.js & AI Ecosystems (RAG)', percent: 95 },
    { name: 'IT Governance, ITIL v4, COBIT & ISO 27001', percent: 94 },
    { name: 'Cloud Computing (AWS, Azure, GCP) & Enterprise Automation', percent: 92 },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#080B12] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6800]/6 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-semibold text-[#FF6800] uppercase tracking-widest">
                  {t.about?.badge || 'SOBRE A FOXTECH ✱ LIDERANÇA TÉCNICA'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.14] mb-8">
                {t.about?.headingPre || 'Excelência Tecnológica com Mais de 16+ Anos de '}
                <span className="text-[#FF6800]">{t.about?.headingHighlight || 'Resultados'}</span>
              </h2>
            </div>

            <div>
              <a
                href="#contato"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#11141F] border border-white/15 hover:border-[#FF6800] hover:bg-[#FF6800] transition-all duration-300 shadow-md group active:scale-95"
              >
                <span>{t.about?.downloadCv || 'Apresentação Institucional'}</span>
                <div className="w-5 h-5 rounded-full bg-white/15 group-hover:bg-white text-white group-hover:text-[#FF6800] flex items-center justify-center transition-colors">
                  <Download className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[#A8AFB8] text-sm sm:text-base leading-relaxed mb-10">
              {t.about?.bioParagraph}
            </p>

            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center text-sm font-bold text-white mb-2">
                    <span className="group-hover:text-[#FF6800] transition-colors">{skill.name}</span>
                    <span className="font-mono text-base font-black text-[#FF6800]">{skill.percent}%</span>
                  </div>

                  <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-visible">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6800] to-[#FF3600] rounded-full transition-all duration-1000 ease-out flex items-center justify-end"
                      style={{ width: `${skill.percent}%` }}
                    >
                      <span className="absolute -right-2 w-4 h-4 rounded-full bg-[#FF6800] border-2 border-[#080B12] flex items-center justify-center shadow-md">
                        <ChevronRight className="w-2.5 h-2.5 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
