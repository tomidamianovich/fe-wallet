import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translation from './utils/locals/es/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    initImmediate: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation,
      },
    },
    react: { useSuspense: false },
  })

export default i18n
