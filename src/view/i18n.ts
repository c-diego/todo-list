import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import ptTranslation from './locales/pt';
import enTranslation from './locales/en';
import esTranslation from './locales/es';

const navigatorLanguage = navigator.language.split('-')[0];

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: navigatorLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
