import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEng from './locales/en/translation.json';
import translationTr from './locales/tr/translation.json';

i18n.use(LanguageDetector).init({
    debug: true,
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: localStorage.getItem('i18nextLng') || 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },

    resources: {
        en: {
            translations: translationEng
        },
        tr: {
            translations: translationTr
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

export default i18n;
