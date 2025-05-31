import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: {
            title: 'Welcome to NUTECH Tour',
            subtitle: 'Experience our campus in stunning 360° views',
            startButton: 'Start Tour'
          },
          navigation: {
            previous: 'Previous Location',
            next: 'Next Location',
            home: 'Home'
          },
          tutorial: {
            title: 'Tutorial',
            skip: 'Skip Tutorial',
            next: 'Next',
            finish: 'Finish'
          }
        }
      },
      ur: {
        translation: {
          welcome: {
            title: 'نیوٹیک ٹور میں خوش آمدید',
            subtitle: 'ہمارے کیمپس کو 360° ویوز میں دیکھیں',
            startButton: 'ٹور شروع کریں'
          },
          navigation: {
            previous: 'پچھلا مقام',
            next: 'اگلا مقام',
            home: 'ہوم'
          },
          tutorial: {
            title: 'ٹیوٹوریل',
            skip: 'ٹیوٹوریل چھوڑیں',
            next: 'اگلا',
            finish: 'مکمل'
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;