'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Dictionary, LanguageOption } from './types';
import { dictionaries, languageOptions, defaultLanguage } from './index';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
  options: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: dictionaries[defaultLanguage],
  options: languageOptions,
});

const STORAGE_KEY = 'fox_portfolio_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es')) {
        setLanguageState(savedLang);
        return;
      }

      // Auto-detect browser language
      const browserLang = navigator.language?.toLowerCase() || '';
      if (browserLang.startsWith('es')) {
        setLanguageState('es');
      } else if (browserLang.startsWith('en')) {
        setLanguageState('en');
      } else {
        setLanguageState('pt');
      }
    } catch {
      setLanguageState(defaultLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      // Update HTML lang attribute and document metadata dynamically for accessibility & SEO
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en-US' : 'es-ES';
      const dict = dictionaries[lang];
      if (dict?.metadata) {
        if (window.location.pathname === '/') {
          document.title = dict.metadata.title;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && window.location.pathname === '/') {
          metaDesc.setAttribute('content', dict.metadata.description);
        }
      }
    } catch {
      // Ignored for SSR / private browsing
    }
  };

  const t = dictionaries[language] || dictionaries[defaultLanguage];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, options: languageOptions }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
