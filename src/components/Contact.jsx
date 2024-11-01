import SocialIcons from './SocialIcons'
import { IconMail, IconCellphone } from './Icons'
import phoneImage from '../assets/images/phone.png'
import mailImage from '../assets/images/mail.png'
import { useState } from 'react'
import Tooltip from './tooltip'

function Contact() {

  const [selectedNumber, setSelectedNumber] = useState(0)

  const copyTextToClipboard = async (text, number) => {
    try {
      await navigator.clipboard.writeText(text);
      setSelectedNumber(number)
      setTimeout(() => {
        setSelectedNumber(0)
      }, 1500)
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
    }
  };

  return (
    

    <section className='flex justify-center pt-10 pb-10'>

      <div className="text-center z-50 bg-brand-blue-200 rounded-2xl lg:w-7/12">

        <h3 className='text-brand-blue-950 text-3xl font-bold p-3'>Contacto</h3>

        <div className="flex justify-around flex-wrap m-3">

          <form action="" className="flex justify-center items-center flex-col">
            <input type="text" placeholder="Nombre" className='m-1 p-2 rounded-2xl w-full'/>
            <input type="text" placeholder="Email" className='m-1 p-2 rounded-2xl w-full'/>
            <textarea type="text" placeholder="Mensaje" className='m-1 p-2  rounded-2xl w-full'/>
            <button className='p-2 m-1 w-8/12 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl'>Enviar Mensaje</button>
          </form>

          <div className='m-3'>

            <div className='flex items-center relative cursor-pointer'  onClick={() => {copyTextToClipboard("maxigomez02@hotmail.com", 1)}}>
              <IconMail className='m-1 h-10 w-10 text-brand-blue-950'/>
              <img src={mailImage} className='h-10'/>

              <Tooltip
                tooltipNumber={1}
                selectedNumber={selectedNumber}
                text={"Copiado al portapapeles"}
              />
            </div>

            <div className='flex items-center relative cursor-pointer' onClick={() => {copyTextToClipboard("+54 11 66016895", 2)}}>
              <IconCellphone className='m-1 h-10 w-10 text-brand-blue-950'/>
              <img src={phoneImage} className='h-10'/>

              <Tooltip
                tooltipNumber={2}
                selectedNumber={selectedNumber}
                text={"Copiado al portapapeles"}
              />
            </div>

            <SocialIcons/>
          </div>
        </div>
      </div>

      {/*Background*/}
      <div className='absolute z-0 bottom-0 left-0 right-0 bg-brand-blue-600 h-56'/>

    </section>
    
  )
}

export default Contact