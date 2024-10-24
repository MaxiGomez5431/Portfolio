import cv from "../assets/svg/cv-icon.svg"
import github from "../assets/svg/github-icon.svg"
import linkedin from "../assets/svg/linkedin-icon.svg"

function SocialIcon() {
 

  return (
    <div className="flex justify-center">
      <img className="h-10 w-10" src={github}></img>
      <img className="h-10 w-10" src={linkedin}></img>
      <img className="h-10 w-10" src={cv}></img>
    </div>
    

  )
}

export default SocialIcon