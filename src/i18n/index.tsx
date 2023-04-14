import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import translationEnglish from './Translation/en-us/translation.json';
import translationSpanish from './Translation/es-es/translation.json';
import translationPortuguese from './Translation/pt-br/translation.json';

// Import translation2 file
// import translationEnglishSecondFile from './Translation/English/translation2.json';

// ---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationPortuguese,
//     },
// }

// ---Using different namespaces
const resources = {
  en: {
    home: translationEnglish,
    // main: translationEnglishSecondFile,
  },
  es: {
    home: translationSpanish,
  },
  pt: {
    home: translationPortuguese,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
});

export { i18next };
