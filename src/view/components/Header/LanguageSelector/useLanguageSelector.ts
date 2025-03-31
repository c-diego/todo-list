import { Language } from '@/view/types';
import { useTranslation } from 'react-i18next';

/** Hook to handle the language selector */
export default function useLanguageSelector() {
  // Object with the i18n instance
  const { i18n } = useTranslation();

  /** Function to change the application language */
  const changeLanguage = (language: keyof Language) => {
    i18n.changeLanguage(language);
  };

  return {
    changeLanguage,
  };
}
