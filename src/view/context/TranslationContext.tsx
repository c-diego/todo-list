import type { PropsWithChildren } from 'react';
import type { UseTranslationResponse } from 'react-i18next';
import { createContext, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '../types';

interface TranslationContextValue {
  t: UseTranslationResponse<'translation', undefined>['t'];
  i18n: UseTranslationResponse<'translation', undefined>['i18n'];
  ready: boolean;
  translate: (key: keyof TranslationKeys) => string;
}

const TranslationContext = createContext<TranslationContextValue>(
  {} as TranslationContextValue
);

export default function TranslationContextProvider({
  children,
}: PropsWithChildren) {
  // Object with the i18n instance
  const { t, i18n, ready } = useTranslation();

  // Function to translate a key
  const translate = useCallback((key: keyof TranslationKeys) => {
    return key;
  }, []);

  return (
    <TranslationContext.Provider value={{ t, i18n, ready, translate }}>
      {children}
    </TranslationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMyTranslation = () => useContext(TranslationContext);
