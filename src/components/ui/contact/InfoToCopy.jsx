import { useState } from "react";
import copied from '/images/copied.png'

export default function InfoToCopy({ textToCopy, children }) {
  const [infoIsCopied, setInfoIsCopied] = useState(false);

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setInfoIsCopied(true);

      setTimeout(() => {
        setInfoIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };

  return (
    <div
      className="flex items-center relative cursor-pointer"
      onClick={copyTextToClipboard}
    >
      {!infoIsCopied 
        ? 
          children 
        : 
          <div className='m-1 p-1 border border-black rounded-xl flex justify-center items-center w-60 bg-brand-blue-200'>
              <img
                src={copied}
                alt="Mail"
                className={`h-4 m-2`}
              />
          </div>
      }
    </div>
  );
}