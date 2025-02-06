import DownloadCVButton from "../ui/DownloadCVButton";
import {IconLinkedin, IconGithub} from "./Icons"
import { useTranslation } from "react-i18next";



function SocialIcons({style}) {
  const { t } = useTranslation();
  const iconStyle = "h-10 w-10 m-1 lg:h-12 lg:w-12 cursor-pointer duration-200 text-brand-blue-950 hover:text-brand-blue-600 dark:text-brand-blue-100 dark:hover:text-brand-blue-600"


  return (
    <div className={`flex justify-center items-center mt-3 ${style}`}>
      <a href="https://www.linkedin.com/in/maximiliano-t-gomez/" target="_blank" >
        <IconLinkedin className={iconStyle}/>
      </a>
      <a href="https://github.com/MaxiGomez5431" target="_blank">
        <IconGithub className={iconStyle}/>
      </a>

      <DownloadCVButton/>
    </div>
    

  )
}

export default SocialIcons