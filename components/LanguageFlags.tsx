'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/types';

interface LanguageFlagsProps {
  className?: string;
}

function BrazilFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full rounded-full" aria-hidden="true">
      <defs>
        <clipPath id="br-circle">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#br-circle)">
        <rect width="32" height="32" fill="#009b3a" />
        <polygon points="16,3.5 30,16 16,28.5 2,16" fill="#fedf00" />
        <circle cx="16" cy="16" r="6.5" fill="#002776" />
        <path
          d="M 10 16.5 C 12 14.5, 20 14.5, 22 17"
          stroke="#ffffff"
          strokeWidth="1.2"
          fill="none"
        />
      </g>
    </svg>
  );
}

function UsaFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full rounded-full" aria-hidden="true">
      <defs>
        <clipPath id="us-circle">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-circle)">
        <rect width="32" height="32" fill="#b22234" />
        <rect y="2.46" width="32" height="2.46" fill="#ffffff" />
        <rect y="7.38" width="32" height="2.46" fill="#ffffff" />
        <rect y="12.30" width="32" height="2.46" fill="#ffffff" />
        <rect y="17.22" width="32" height="2.46" fill="#ffffff" />
        <rect y="22.14" width="32" height="2.46" fill="#ffffff" />
        <rect y="27.06" width="32" height="2.46" fill="#ffffff" />
        <rect width="14" height="15" fill="#3c3b6e" />
        <circle cx="4" cy="4" r="1" fill="#ffffff" />
        <circle cx="8" cy="4" r="1" fill="#ffffff" />
        <circle cx="12" cy="4" r="1" fill="#ffffff" />
        <circle cx="6" cy="7.5" r="1" fill="#ffffff" />
        <circle cx="10" cy="7.5" r="1" fill="#ffffff" />
        <circle cx="4" cy="11" r="1" fill="#ffffff" />
        <circle cx="8" cy="11" r="1" fill="#ffffff" />
        <circle cx="12" cy="11" r="1" fill="#ffffff" />
      </g>
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg viewBox="0 0 32 32" className="w-full h-full rounded-full" aria-hidden="true">
      <defs>
        <clipPath id="es-circle">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath="url(#es-circle)">
        <rect width="32" height="8" fill="#aa151b" />
        <rect y="8" width="32" height="16" fill="#f1bf00" />
        <rect y="24" width="32" height="8" fill="#aa151b" />
        <rect x="7" y="12" width="5" height="8" rx="1.5" fill="#aa151b" opacity="0.85" />
        <circle cx="9.5" cy="10.5" r="1.5" fill="#aa151b" />
      </g>
    </svg>
  );
}

export default function LanguageFlags({ className = '' }: LanguageFlagsProps) {
  const { language, setLanguage, t } = useLanguage();

  const flagItems: { code: Language; label: string; country: string; FlagComponent: React.ComponentType }[] = [
    { code: 'pt', label: 'Português', country: 'Brasil', FlagComponent: BrazilFlag },
    { code: 'en', label: 'English', country: 'United States', FlagComponent: UsaFlag },
    { code: 'es', label: 'Español', country: 'España', FlagComponent: SpainFlag },
  ];

  return (
    <div
      className={`flex items-center gap-1.5 px-1.5 py-1 rounded-full bg-[#11141F]/90 border border-white/10 ${className}`}
      role="group"
      aria-label={t.navbar.switchLanguage}
    >
      {flagItems.map(({ code, label, country, FlagComponent }) => {
        const isSelected = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            title={`${label} (${country})`}
            aria-label={`${label} (${country})`}
            aria-pressed={isSelected}
            className={`relative w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 flex items-center justify-center p-0.5 focus:outline-none cursor-pointer ${
              isSelected
                ? 'ring-2 ring-[#FF6800] bg-[#FF6800]/25 shadow-[0_0_12px_rgba(255,104,0,0.5)] scale-105 z-10'
                : 'opacity-65 hover:opacity-100 hover:scale-105 border border-white/10'
            }`}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <FlagComponent />
            </div>
          </button>
        );
      })}
    </div>
  );
}
