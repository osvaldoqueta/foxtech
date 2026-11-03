'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
  Scale,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { legalDictionaries } from '@/lib/i18n/legal';
import Navbar from './Navbar';
import Footer from './Footer';
import { FoxtechIcon } from './FoxtechLogo';

interface LegalDocumentViewProps {
  docType: 'privacy' | 'terms';
}

export default function LegalDocumentView({ docType }: LegalDocumentViewProps) {
  const { language } = useLanguage();
  const dict = legalDictionaries[language] || legalDictionaries.pt;
  const doc = docType === 'privacy' ? dict.privacy : dict.terms;
  const otherHref = docType === 'privacy' ? '/termos' : '/privacidade';

  return (
    <div className="min-h-screen flex flex-col bg-[#080B12] text-white relative overflow-x-hidden">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="relative pt-28 sm:pt-36 pb-12 border-b border-white/10 overflow-hidden">
        {/* Background Glows & Watermark */}
        <div className="absolute top-16 left-1/4 w-96 h-96 bg-[#FF6800]/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FF3600]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute right-[5%] top-[18%] w-72 h-72 opacity-[0.04] pointer-events-none hidden lg:block">
          <FoxtechIcon className="w-full h-full" monochrome="#FFFFFF" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Top Navigation Bar: Back to Home & Switch Legal Document */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A8AFB8] hover:text-white bg-[#11141F] hover:bg-[#181C2B] border border-white/10 hover:border-[#FF6800]/50 px-4 py-2 rounded-full transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF6800]" />
              <span>{doc.backToHome}</span>
            </Link>

            <Link
              href={otherHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6800] hover:text-white bg-[#FF6800]/10 hover:bg-[#FF6800] border border-[#FF6800]/40 px-4 py-2 rounded-full transition-all"
            >
              {docType === 'privacy' ? (
                <Scale className="w-4 h-4" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              <span>{doc.switchDocLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Document Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11141F] border border-[#FF6800]/40 text-[#FF6800] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            {docType === 'privacy' ? (
              <Lock className="w-3.5 h-3.5" />
            ) : (
              <FileText className="w-3.5 h-3.5" />
            )}
            <span>{doc.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {doc.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6800] to-[#FF3600]">
              {doc.titleHighlight}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#A8AFB8] max-w-3xl leading-relaxed mb-6">
            {doc.subtitle}
          </p>

          {/* Last Updated & Compliance Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-mono text-[#687280] bg-[#11141F] border border-white/10 px-3.5 py-1.5 rounded-lg">
              {doc.lastUpdatedLabel} <strong className="text-white">{doc.lastUpdatedDate}</strong>
            </span>

            {doc.complianceBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#A8AFB8] bg-[#11141F]/90 border border-[#FF6800]/30 px-3 py-1.5 rounded-lg"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6800]" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid: Sticky Sidebar TOC + Clauses */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Sidebar (4 cols): Table of Contents + DPO Contact Card */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* TOC Card */}
              <div className="rounded-2xl bg-[#11141F] border border-white/10 p-6 shadow-xl">
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6800] mb-4">
                  {doc.tocTitle}
                </h2>
                <nav aria-label={doc.tocTitle} className="space-y-1.5">
                  {doc.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-start gap-2.5 p-2 rounded-xl text-xs sm:text-sm text-[#A8AFB8] hover:text-white hover:bg-white/5 transition-colors group"
                    >
                      <span className="font-mono font-bold text-[#FF6800] group-hover:translate-x-0.5 transition-transform">
                        {sec.number}.
                      </span>
                      <span className="leading-snug">{sec.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* DPO / Governance Contact Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#11141F] to-[#161A29] border border-[#FF6800]/40 p-6 shadow-[0_0_30px_rgba(255,104,0,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6800]/15 border border-[#FF6800]/40 flex items-center justify-center text-[#FF6800]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{doc.dpoCardTitle}</h3>
                    <p className="text-[11px] font-mono text-[#FF6800]">{doc.dpoRole}</p>
                  </div>
                </div>

                <p className="text-xs text-[#A8AFB8] leading-relaxed mb-4">
                  {doc.dpoDescription}
                </p>

                <div className="space-y-2 text-xs mb-5">
                  <a
                    href="mailto:osvaldoqueta@gmail.com"
                    className="flex items-center gap-2 text-[#A8AFB8] hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF6800]" />
                    <span>osvaldoqueta@gmail.com</span>
                  </a>
                  <a
                    href="tel:+5563992581001"
                    className="flex items-center gap-2 text-[#A8AFB8] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FF6800]" />
                    <span>+55 (63) 9 9258-1001</span>
                  </a>
                </div>

                <a
                  href="https://wa.me/5563992581001?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20FOXTECH%20sobre%20Governan%C3%A7a%20de%20Dados%20/%20Termos%20Corporativos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] hover:from-[#FF7A1A] hover:to-[#FF4500] flex items-center justify-center gap-2 shadow-lg shadow-[#FF6800]/25 transition-all"
                >
                  <span>{doc.contactCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </aside>

            {/* Right Column (8 cols): Legal Clauses */}
            <div className="lg:col-span-8 space-y-6">
              {doc.sections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 rounded-2xl bg-[#11141F] border border-white/10 hover:border-[#FF6800]/40 p-6 sm:p-8 transition-all shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg bg-[#FF6800]/15 border border-[#FF6800]/40 font-mono text-xs font-bold text-[#FF6800]">
                      {sec.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-base text-[#A8AFB8] leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-2.5 pt-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 p-3 rounded-xl bg-[#080B12]/70 border border-white/5 text-xs sm:text-sm text-[#A8AFB8]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF6800] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
