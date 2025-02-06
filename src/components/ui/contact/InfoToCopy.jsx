import { useState } from "react";
import { useTranslation } from "react-i18next";  // Importamos useTranslation
import copied_es from '/images/copied_es.png';
import copied_en from '/images/copied_en.png';

export default function InfoToCopy({ textToCopy, children }) {
  const [infoIsCopied, setInfoIsCopied] = useState(false);
  const { i18n } = useTranslation();  // Usamos useTranslation para obtener el idioma actual

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setInfoIsCopied(true);

      setTimeout(() => {
        setInfoIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };
  
  return (
    <div
      className="flex items-center relative cursor-pointer"
      onClick={copyTextToClipboard}
    >
      {!infoIsCopied ? (
        children
      ) : (
        <div className='m-1 p-1 border border-black rounded-xl flex justify-center items-center w-60 bg-brand-blue-200'>
          <img
            src={i18n.language === "es" ? copied_es : copied_en}  // Usamos la imagen seleccionada
            alt="Copied"
            className="h-4 m-2"
          />
        </div>
      )}
    </div>
  );
}