import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  lt: {
    translation: {
      "Home": "Pagrindinis",
      "About": "Apie mane",
      "Projects": "Projektai",
      "Contact": "Kontaktai"
    }
  },
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Projects": "Projects",
      "Contact": "Contact"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "lt", // Pradinė kalba
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
