'use client';

import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  CheckCircle2,
  Cpu,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TimelineSection() {
  const { t } = useLanguage();

  const milestoneTags: string[][] = [
    ['Power BI', 'Next.js', 'React', 'Snowflake', 'AI Agents & RAG', 'Cloud'],
    ['Data Engineering', 'DAX', 'ITIL v4', 'COBIT', 'ISO 27001', 'SQL Server'],
    ['IFTO', 'UFJF', 'UniAcademia', 'Data Science', 'Research', 'Accessibility'],
    ['Software Engineering', 'PostgreSQL', 'Linux', 'Networks', 'Architecture'],
  ];

  const techBadges = [
    { name: 'Power BI & DAX', level: 'Enterprise BI' },
    { name: 'SQL Server, PostgreSQL & Snowflake', level: 'Data Engineering' },
    { name: 'Next.js & React', level: 'Web Applications' },
    { name: 'AI Agents & RAG Vector DB', level: 'Artificial Intelligence' },
    { name: 'ITIL v4, COBIT & ISO 27001', level: 'IT Governance' },
    { name: 'AWS, Azure & Google Cloud', level: 'Cloud & DevOps' },
    { name: 'Workflows & API Integrations', level: 'Automation' },
  ];

  return (
    <section id="trajetoria" className="relative py-20 sm:py-28 bg-[#080B12] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-[#FF6800]/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11141F] border border-white/10 text-[#FF6800] text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t.timeline.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.timeline.titlePre}
            <span className="text-[#FF6800]">{t.timeline.titleGradient}</span>
          </h2>

          <p className="text-[#A8AFB8] text-base sm:text-lg leading-relaxed">
            {t.timeline.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#FF6800]" />
              <span>{t.timeline.careerTitle}</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FF6800]/35 space-y-8">
              {t.timeline.milestones.map((item, idx) => {
                const tags = milestoneTags[idx] || ['FOXTECH', 'Engineering'];

                return (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080B12] border-2 border-[#FF6800] shadow-[0_0_12px_rgba(255,104,0,0.6)] group-hover:scale-125 transition-transform" />

                    <div className="p-5 sm:p-6 rounded-2xl bg-[#11141F] border border-white/10 group-hover:border-[#FF6800]/50 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-[#FF6800] font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#FF6800]" />
                          {item.period}
                        </span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FF6800]/10 text-[#FF6800] border border-[#FF6800]/25">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#FF6800] transition-colors">
                        {item.role}
                      </h4>

                      <span className="text-xs text-[#A8AFB8] font-medium block mb-3">
                        {item.institution}
                      </span>

                      <p className="text-xs sm:text-sm text-[#A8AFB8] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/8">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B12] border border-white/8 text-[#A8AFB8]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Credentials & Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11141F] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#FF6800]" />
                <span>{t.timeline.academicTitle}</span>
              </h3>

              <div className="space-y-3">
                {t.timeline.credentials.map((cred, cIdx) => (
                  <div
                    key={cIdx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#080B12] border border-white/8 hover:border-[#FF6800]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF6800] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                        {cred.title}
                      </h5>
                      <span className="text-[11px] text-[#A8AFB8] font-mono">{cred.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#11141F] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#FF6800]" />
                <span>{t.timeline.techDomainTitle}</span>
              </h3>

              <div className="flex flex-col gap-2">
                {techBadges.map((badge, bIdx) => (
                  <div
                    key={bIdx}
                    className="px-3.5 py-2 rounded-xl bg-[#080B12] border border-white/8 hover:border-[#FF6800]/40 text-xs font-mono flex items-center justify-between gap-2 transition-colors"
                  >
                    <span className="text-white font-medium">{badge.name}</span>
                    <span className="text-[10px] text-[#FF6800]">{badge.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#11141F] border border-white/10 flex items-center justify-between text-xs text-[#A8AFB8]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF6800]/15 text-[#FF6800] border border-[#FF6800]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block">{t.timeline.locationCity}</strong>
                  <span className="text-[11px] text-[#A8AFB8]">{t.timeline.locationSub}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[#FF6800] font-mono text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#FF6800] animate-pulse" />
                <span>{t.timeline.timeZone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
