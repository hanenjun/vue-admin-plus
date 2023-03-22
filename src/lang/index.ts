import { createI18n } from 'vue-i18n';
import ZH from './models/zh';
import EN from './models/en';
const messages = {
  zh: { ...ZH  },
  en: { ...EN  },
};
 
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  messages
});
export default i18n;