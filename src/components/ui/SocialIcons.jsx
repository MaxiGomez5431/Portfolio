
import {IconLinkedin, IconGithub} from "./Icons"

  const iconStyle = "h-10 w-10 m-1 lg:h-12 lg:w-12 cursor-pointer duration-200 text-brand-blue-950 hover:text-brand-blue-600"

function SocialIcons({style}) {
 

  return (
    <div className={`flex justify-center items-center mt-3 ${style}`}>
      <a href="https://www.linkedin.com/in/maximiliano-t-gomez/" target="_blank" >
        <IconLinkedin className={iconStyle}/>
      </a>
      <a href="https://github.com/MaxiGomez5431" target="_blank">
        <IconGithub className={iconStyle}/>
      </a>

      <button className="
        h-10 p-1 m-1
        rounded-xl 
        text-sm font-bold text-brand-blue-50 
        duration-200
        bg-brand-blue-950 hover:bg-brand-blue-600" 
        value="DescargarCV"
        >
          Descargar CV
      </button>
    </div>
    

  )
}

export default SocialIcons