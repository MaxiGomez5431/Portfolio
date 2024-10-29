import Title from './Title'
import {IconUserGroup, IconBxsUserCircle, IconResponsive, IconBook} from './Icons'

function AboutMe() {
 
  let commonStyle = "m-3 ml-6 text-brand-blue-800"

  return (
    
    <>
      <Title>Sobre mí</Title>

      <section className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2'>

        <AboutMeCard
          title='Quién Soy'
          icon={<IconBxsUserCircle className={`h-auto min-w-12 lg:min-w-16 ${commonStyle}`}/>}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />
        <AboutMeCard
          title='Responsive Desing'
          icon={<IconResponsive className={`h-auto min-w-12 lg:min-w-16 ${commonStyle}`}/>}
          text='Utilizo técnicas modernas de CSS y frameworks como Tailwind o Bootstrap para asegurar que los sitios se adapten fluidamente a diferentes tamaños de pantalla, ofreciendo siempre la mejor experiencia de usuario.'
        />
        <AboutMeCard 
          title='Soft Skills'
          icon={<IconUserGroup className={`h-auto min-w-12 lg:min-w-16 ${commonStyle}`}  />}
          text='Cuento con habilidades como comunicación efectiva, trabajo en equipo y resolución de problemas. Estas soft skills me permiten colaborar eficientemente en proyectos, buscando siempre soluciones creativas e innovadoras.'
        />
        <AboutMeCard
          title='Estudios'
          icon={<IconBook className={`h-auto min-w-12 lg:min-w-16 ${commonStyle}`}/>}
          text='Mi formación incluye estudios especializados en HTML, CSS, JavaScript y React, con un enfoque en el diseño de interfaces web accesibles y funcionales para garantizar una experiencia de usuario óptima.'
        />

      </section>
    </>

  )
}

function AboutMeCard({title, icon, text}) {
 
  return (
    <div className="flex">
      
      <div className='
        z-50 text-center
        mt-3 mb-3 lg:mr-3 lg:ml-3 
        hover:shadow-about-me duration-300 ease-in-out
        bg-brand-blue-50 rounded-2xl'
      >
        
        <h4 className='text-2xl lg:text-3xl font-bold mt-3 text-brand-blue-800'>{title}</h4>
        
        <div className='flex'>
          {icon}
          <p className='text-base text-left lg:text-lg m-3 text-brand-blue-950'> {text} </p>
        </div>
        
      </div>

    </div>
  )
}

export default AboutMe