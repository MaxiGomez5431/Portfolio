import Title from '../Title'
import AboutMeCard from './AboutMeCard'
import cv from "../../assets/svg/cv-icon.svg"


function AboutMe() {
 

  return (
    
    <>
      <Title>Sobre mí</Title>

      <section className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2'>

        <AboutMeCard
          title='Quién Soy'
          icon={cv}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />
        <AboutMeCard
          title='Quién Soy'
          icon={cv}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />
        <AboutMeCard
          title='Quién Soy'
          icon={cv}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />
        <AboutMeCard
          title='Quién Soy'
          icon={cv}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />

      </section>
    </>

  )
}

export default AboutMe