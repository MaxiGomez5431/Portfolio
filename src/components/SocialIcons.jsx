
import {IconLinkedin, IconGithub} from "./Icons"

function SocialIcons({style}) {
 

  return (
    <div className="flex justify-center items-center mt-3">
      <IconLinkedin className="h-10 w-10 lg:h-12 lg:w-12 text-brand-blue-950"/>
      <IconGithub className="h-10 w-10 lg:h-12 lg:w-12 mx-5 text-brand-blue-950"/>
      <button className="
        h-10 p-0.5 
        border-2 rounded-xl border-brand-blue-900 hover:border-brand-blue-600
        text-sm font-bold text-brand-blue-50 hover:text-brand-blue-600
        duration-200
        bg-brand-blue-950" 
        value="DescargarCV"
        >
          Descargar CV
      </button>
    </div>
    

  )
}

export default SocialIcons