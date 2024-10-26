import portfolioImage from "../assets/images/portfolio-image.jpg"
import ellipseMobile from "../assets/svg/Ellipse1-Mobile.svg"
import SocialIcons from "./SocialIcons"



function Hero() {

  return (
    
    <section className="flex justify-center content-center flex-col p-4 lg:gap-x-20 lg:flex-row ">

      <div className="flex justify-center relative mt-16">
        <img className='h-40 w-40 rounded-2xl object-cover object-top z-50 lg:h-60 lg:w-60 ' src={portfolioImage} alt="An image of the portfolio owner"/>
        <img className='h-32 w-32 absolute z-30 right-1/2 bottom-1/2 lg:h-48 lg:w-48' src={ellipseMobile}/>
      </div>

      <div className="flex justify-center text-center flex-col mt-5 lg:mt-20">
        <h2 className="text-xl text-brand-blue-900 font-semibold lg:text-3xl">Maximiliano Tomás Gomez</h2>
        <h1 className="text-2xl text-brand-blue-600 font-bold lg:text-4xl">{"< Web Developer />"}</h1>

        <SocialIcons style='h-10 w-10 lg:h-14 lg:w-14'/>
      </div>

    </section>

  )
}

export default Hero

