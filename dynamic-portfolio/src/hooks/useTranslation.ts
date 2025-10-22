import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../content/translations';

export const useTranslation = () => {
  const { language, setLanguage, available } = useLanguage();
  const t = translations[language];

  return {
    t,
    language,
    setLanguage,
    available
  };
};
