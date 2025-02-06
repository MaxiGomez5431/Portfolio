import SocialIcons from '../../ui/SocialIcons'
import phoneImage2 from '/images/phone2.png'
import mailImage2 from '/images/mail2.png'
import InfoToCopy from './InfoToCopy'

export default function ContactInfo() {

  return (
    <div className='m-3 flex flex-col justify-center items-center '>

      <InfoToCopy textToCopy={"maxigomez02@hotmail.com"}>

        <div className='m-1 p-1 border border-black rounded-xl flex justify-center items-center w-60 bg-brand-blue-200'>
          <img
            src={mailImage2}
            alt="Phone"
            className={`h-4 m-2`}
          />
        </div>

      </InfoToCopy>

      <InfoToCopy textToCopy={"+54 11 66016895"}>
      <div className='m-1 p-1 border border-black rounded-xl flex justify-center items-center w-60 bg-brand-blue-200'>
          <img
            src={phoneImage2}
            alt="Mail"
            className={`h-4 m-2`}
          />
      </div>
      </InfoToCopy>

      <SocialIcons/>
    </div>
  )
}