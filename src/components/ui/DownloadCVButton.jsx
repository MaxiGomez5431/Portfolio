import { useTranslation } from "react-i18next";
import CV_ES from "/pdf/C.V_Maximiliano_T._Gomez_ES.pdf"
import CV_EN from "/pdf/C.V_Maximiliano_T._Gomez_EN.pdf"

export default function DownloadCVButton() {
  const { t, i18n } = useTranslation();

  const getFile = () => {
    if (i18n.language === "en") {
      return CV_EN; 
    } else if (i18n.language === "es") {
      return CV_ES;
    }
  };

  return (
    <button className="
      h-10 p-1 m-1
      rounded-xl 
      text-sm font-bold text-brand-blue-50 dark:text-brand-blue-950
      duration-200
      bg-brand-blue-950 hover:bg-brand-blue-600
      dark:bg-brand-blue-100 dark:hover:bg-brand-blue-600" 
    >
      <a href={getFile()} download>
        {t("CVBtn")}
      </a>
    </button>
  );
}