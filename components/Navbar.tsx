'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Phone,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  HandHeart,
  BarChart3,
  Briefcase,
  CreditCard,
  Layers,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import LanguageFlags from './LanguageFlags';
import FoxtechLogo from './FoxtechLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const standardLinks = [
    { id: 'home', name: t.navbar.home || 'Home', href: '#' },
    { id: 'services', name: t.navbar.services || 'Soluções & Serviços', href: '#servicos' },
    { id: 'portfolio', name: t.navbar.portfolio || 'Portfólio', href: '#portfolio' },
    { id: 'contact', name: t.navbar.contact || 'Direct Contact', href: '#contato' },
  ];

  const extraLinks = [
    { name: t.navbar.powerbi, href: '#powerbi', icon: BarChart3, desc: 'Dashboards & Engenharia' },
    { name: 'Sobre a FOXTECH', href: '#about', icon: Layers, desc: 'Expertise & Capacidades' },
    { name: t.navbar.pricing, href: '#planos', icon: CreditCard, desc: 'Planos & Contratação' },
    { name: t.navbar.timeline, href: '#trajetoria', icon: Briefcase, desc: '+16 Anos de Liderança' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-10 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B12]/92 shadow-[0_10px_40px_rgba(0,0,0,0.85)] border border-white/12 py-2.5 px-4 sm:px-6 backdrop-blur-xl'
            : 'bg-[#080B12]/75 py-3 px-4 sm:px-6 border border-white/10 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          {/* Left: Vector FOXTECH Logo */}
          <Link
            href="/"
            onClick={() => setActiveNav('home')}
            className="shrink-0 focus:outline-none"
            aria-label="FOXTECH Home"
          >
            <FoxtechLogo variant="header" />
          </Link>

          {/* Center: Navigation Links + "+ MORE" Dropdown (Matching Reference Image 1:1) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4" aria-label="Main Navigation">
            {standardLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveNav(link.id)}
                  className={`text-xs xl:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6800]/30 to-[#FF3600]/20 text-white border border-[#FF6800]/70 shadow-[0_0_18px_rgba(255,104,0,0.35)] font-semibold'
                      : 'text-[#A8AFB8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* "+ MORE" Pill Dropdown */}
            <div className="relative ml-1" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A8AFB8] hover:text-white px-3.5 py-1.5 rounded-full bg-[#11141F] hover:bg-white/10 border border-white/12 transition-all cursor-pointer"
                aria-expanded={moreDropdownOpen}
              >
                <span>{t.navbar.more || '+ MORE'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreDropdownOpen ? 'rotate-180 text-[#FF6800]' : ''
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#11141F]/98 p-2.5 shadow-2xl border border-white/12 backdrop-blur-2xl z-50 animate-fade-in-up">
                  <div className="space-y-1">
                    {extraLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setMoreDropdownOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 text-[#A8AFB8] hover:text-white transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#FF6800]/10 border border-[#FF6800]/30 flex items-center justify-center text-[#FF6800] group-hover:bg-[#FF6800] group-hover:text-white transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">{item.name}</div>
                            <div className="text-[10px] text-[#687280] font-mono">{item.desc}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/10 grid grid-cols-2 gap-1.5 text-[11px]">
                    <a
                      href="https://foxstorebr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 p-2 rounded-lg text-[#A8AFB8] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#FF6800]" />
                      <span>{t.navbar.storeOfficial}</span>
                    </a>
                    <a
                      href="https://libras.foxstorebr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 p-2 rounded-lg text-[#A8AFB8] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <HandHeart className="w-3.5 h-3.5 text-[#FF6800]" />
                      <span>Fox Libras</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Language Flags + White Phone Pill Button with Orange Telephone Icon */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5">
            <LanguageFlags />

            <a
              href="https://wa.me/5563992581001?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20a%20FOXTECH%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-white hover:bg-slate-100 text-[#080B12] font-bold pl-2 pr-4 py-1.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_25px_rgba(255,104,0,0.3)] active:scale-95 text-xs xl:text-sm shrink-0"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF6800] to-[#FF3600] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="tracking-tight font-extrabold">{t.navbar.phoneLabel}</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="sm:hidden">
              <LanguageFlags />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A8AFB8] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF6800]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-[#11141F]/98 p-5 border border-white/12 shadow-2xl backdrop-blur-2xl animate-fade-in-up">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span className="text-xs text-[#A8AFB8] font-mono">{t.navbar.operationalStatus}</span>
            <div className="flex items-center gap-1.5 text-xs text-[#FF6800] font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF6800] animate-pulse" />
              <span>{t.navbar.statusOnline}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            {standardLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.id);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-sm font-medium text-white transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#FF6800]" />
              </a>
            ))}
          </nav>

          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="text-[10px] font-mono text-[#687280] uppercase tracking-wider px-2 mb-1">
              {t.navbar.more || '+ MORE'}
            </div>
            <div className="flex flex-col gap-1">
              {extraLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-xs text-[#A8AFB8] hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-[#687280] font-mono">{link.desc}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/5563992581001"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full text-sm font-bold text-[#080B12] bg-white shadow-lg"
            >
              <span className="w-6 h-6 rounded-full bg-[#FF6800] text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>{t.navbar.phoneLabel}</span>
            </a>

            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF6800] to-[#FF3600] shadow-lg shadow-[#FF6800]/30"
            >
              {t.hero.btnPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
