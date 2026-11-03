import { Language, LanguageOption, Dictionary } from './types';
import { pt } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';

export * from './types';

export const dictionaries: Record<Language, Dictionary> = {
  pt,
  en,
  es,
};

export const languageOptions: LanguageOption[] = [
  {
    code: 'pt',
    label: 'Português',
    shortLabel: 'PT',
    flag: '🇧🇷',
    country: 'Brasil'
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: '🇺🇸',
    country: 'United States'
  },
  {
    code: 'es',
    label: 'Español',
    shortLabel: 'ES',
    flag: '🇪🇸',
    country: 'España'
  }
];

export const defaultLanguage: Language = 'pt';
