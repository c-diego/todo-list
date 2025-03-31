export type Task = {
  id: string;
  description: string;
  completed: boolean;
};

export type Language = {
  pt: string;
  en: string;
  es: string;
};

export interface TranslationKeys {
  language: keyof Language;
}
