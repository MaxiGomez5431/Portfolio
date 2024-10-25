

function AboutMeCard({title, icon, text}) {
 

  return (
    <div className="relative flex">
      
      <div className='
        z-50 text-center 
        mt-3 mb-3 lg:mr-3 lg:ml-3 
        hover:translate-x-2 duration-500 ease-in-out
        bg-brand-blue-50 rounded-2xl'
      >
        
        <h4 className='text-2xl lg:text-3xl font-bold mt-3 text-brand-blue-800'>{title}</h4>

        <div className='flex justify-around items-center'>
          <img className='w-12 h-12 lg:w-20 lg:h-20 m-2' src={icon}></img>
          <p className='text-base text-left lg:text-lg m-3 text-brand-blue-950'> {text} </p>
        </div>

        <IconArrowDown></IconArrowDown>
        
      </div>

      {/* Sombra */}
      <div className="
        absolute top-0 left-0 right-0 bottom-0 z-0
        mt-3 mb-3 lg:mr-3 lg:ml-3 
        bg-brand-blue-800 rounded-2xl"
      /> 

    </div>
  )
}

export default AboutMeCard