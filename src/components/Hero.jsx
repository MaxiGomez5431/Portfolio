import portfolioImage from "../assets/images/portfolio-image.jpg"
import ellipseMobile from "../assets/svg/Ellipse1-Mobile.svg"
import SocialIcon from "./SocialIcon"


function Hero() {
 

  return (
    
    <div className="flex justify-center content-center flex-col p-4 lg:gap-x-20 lg:flex-row">

      <div className="flex justify-center relative mt-16">
        <img className='h-32 w-32 rounded-2xl object-cover object-top z-50 lg:h-60 lg:w-60 ' src={portfolioImage} alt="An image of the portfolio owner"/>
        <img className='h-28 w-28 absolute z-30 right-1/2 bottom-1/2 lg:h-48 lg:w-48' src={ellipseMobile}/>
      </div>

      <div className="flex justify-center text-center flex-col lg:mt-16">
        <h2 className="text-lg text-brand-blue-900 font-semibold lg:text-3xl">Maximiliano Tomás Gomez</h2>
        <h1 className="text-xl text-brand-blue-600 font-bold lg:text-4xl">Web Developer</h1>
        
        <SocialIcon/>
      </div>

    </div>

  )
}

export default Hero