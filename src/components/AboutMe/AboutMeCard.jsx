

function AboutMeCard({title, icon, text}) {
 

  return (

    <div className='flex justify-center justify-self-center text-center flex-col rounded-2xl mt-3 mb-3 lg:mr-3 lg:ml-3 lg:max-w-2xl bg-brand-blue-50'>

      <h4 className='text-2xl lg:text-3xl font-bold mt-3 text-brand-blue-800'>{title}</h4>

      <div className='flex justify-around items-center'>
        <img className='w-12 h-12 lg:w-20 lg:h-20 m-2' src={icon}></img>
        <p className='text-base lg:text-lg m-3 text-left text-brand-blue-950'> {text} </p>
      </div>
    </div>

  )
}

export default AboutMeCard