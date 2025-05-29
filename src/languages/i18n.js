import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import de from './de/translation.json';
import it from './it/translation.json';

const resources = {
  en: { translation: en },
  de: { translation: de },
  it: { translation: it },
};

i18n
  .use(LanguageDetector) // auto-detect language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
