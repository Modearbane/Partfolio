import { createContext, useState, useContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "lt");

  const toggleLanguage = () => {
    const newLang = language === "lt" ? "en" : "lt";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook patogesniam naudojimui
export const useLanguage = () => useContext(LanguageContext);
