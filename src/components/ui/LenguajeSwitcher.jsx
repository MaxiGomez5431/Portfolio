import { useTranslation } from "react-i18next";
import spain from "/svg/es.svg";
import unitedKingdom from "/svg/gb.svg";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <img 
      onClick={toggleLanguage}
      src={i18n.language === "en" ? spain : unitedKingdom}
      alt="Language flag"
      className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity mx-2"
    />
);
}