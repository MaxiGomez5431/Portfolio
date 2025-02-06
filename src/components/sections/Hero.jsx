import portfolioImage from "/images/portfolio-image.jpg"
import ellipse from "/svg/Ellipse.svg"
import SocialIcons from "../ui/SocialIcons"

function Hero() {

  return (
    
    <section id="hero" className="flex justify-center content-center flex-col p-4 lg:gap-x-20 lg:flex-row scroll-mt-24">

      <div className="flex justify-center relative mt-16">
        <img className='h-40 w-40 rounded-2xl object-cover object-top z-50 lg:h-60 lg:w-60 ' src={portfolioImage} alt="An image of the portfolio owner"/>
        <img className='h-32 w-32 absolute z-20 right-1/2 bottom-1/2 lg:h-48 lg:w-48' src={ellipse}/>
      </div>

      <div className="flex justify-center text-center flex-col mt-5 lg:mt-20">
        <h2 className="text-2xl text-brand-blue-900 dark:text-brand-blue-100 font-semibold lg:text-3xl">Maximiliano Tomás Gomez</h2>
        <h1 className="text-3xl text-brand-blue-600 font-bold lg:text-4xl">{"< Web Developer />"}</h1>

        <SocialIcons/>
      </div>

    </section>

  )
}

export default Hero

