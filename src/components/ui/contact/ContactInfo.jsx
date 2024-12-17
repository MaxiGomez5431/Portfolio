import SocialIcons from '../../ui/SocialIcons'

import phoneImage from '/images/phone.png'
import mailImage from '/images/mail.png'

import InfoToCopy from './InfoToCopy'

export default function ContactInfo() {

  return (
    <div className='m-3 flex flex-col'>

      <InfoToCopy textToCopy={"maxigomez02@hotmail.com"}>
        <img
          src={mailImage}
          alt="Phone"
          className={`h-10 m-2`}
        />
      </InfoToCopy>

      <InfoToCopy textToCopy={"+54 11 66016895"}>
        <img
          src={phoneImage}
          alt="Phone"
          className={`h-10 m-2`}
        />
      </InfoToCopy>

      <SocialIcons/>
    </div>
  )
}