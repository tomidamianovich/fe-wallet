// i18nForTests.js

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  ns: ['foobar'],
  defaultNS: 'foobar',
  debug: true,
  resources: {
    foo: {},
    bar: {},
  },
})

export default i18n
