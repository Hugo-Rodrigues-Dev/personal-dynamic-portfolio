import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { defaultLanguage, languages } from '../content/translations';
import type { Language } from '../content/translations';

const STORAGE_KEY = 'portfolio-language';

const isLanguage = (value: string): value is Language =>
  (languages as readonly string[]).includes(value);

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  available: readonly Language[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && isLanguage(stored)) {
    return stored;
  }

  if (typeof navigator !== 'undefined') {
    const browserLanguage = navigator.language.slice(0, 2);
    if (browserLanguage && isLanguage(browserLanguage)) {
      return browserLanguage;
    }
  }

  return defaultLanguage;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      available: languages
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
