import { IconCheckCircle, IconLoading, IconErrorCircle } from '../Icons';
import { useTranslation } from "react-i18next";

export default function EmailResponses ({state, children}) {
  const iconStyle = "h-16 w-16 m-1"
  const textStyle = "text-brand-blue-950 dark:text-brand-blue-100 m-1"
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-center items-center w-10/12 lg:w-5/12 h-auto border p-3 m-3 border-brand-blue-950 dark:border-brand-blue-100 rounded-xl'>
       
      {state === "loading" ? (
        <>
          <IconLoading className={`${iconStyle} animate-spin text-brand-blue-950 dark:text-brand-blue-100 `} />
          <p className={textStyle}>{t("Sending")}</p>
        </>
      ) : state === "succesful" ? (
        <>
          <IconCheckCircle className={`${iconStyle} text-green-600`}/>
          <p className={textStyle}>{t("SentSuccesfull")}</p>
        </>
      ) : (
        <>
          <IconErrorCircle className={`${iconStyle} text-red-500`} />
          <p className={textStyle}>{t("SendError")}</p>
        </>
      )}

      {children}
    </div>
  )
}