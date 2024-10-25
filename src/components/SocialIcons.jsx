import cv from "../assets/svg/cv-icon.svg"
import github from "../assets/svg/github-icon.svg"
import linkedin from "../assets/svg/linkedin-icon.svg"

function SocialIcons({style}) {
 

  return (
    <div className="flex justify-center">
      <img className={style} src={github}></img>
      <img className={style} src={linkedin}></img>
      <img className={style} src={cv}></img>
    </div>
    

  )
}

export default SocialIcons