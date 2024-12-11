import SocialIcons from '../ui/SocialIcons'

import phoneImage from '../../assets/images/phone.png'
import mailImage from '../../assets/images/mail.png'
import { IconMail, IconCellphone } from '../ui/Icons'

import InfoToCopy from './InfoToCopy'

export default function ContactInfo() {

  return (
    <div className='m-3'>

      <InfoToCopy textToCopy={"maxigomez02@hotmail.com"}>
        <IconMail className="m-1 h-10 w-10 text-brand-blue-950" />
        <img
          src={mailImage}
          alt="Phone"
          className={`h-10`}
        />
      </InfoToCopy>

      <InfoToCopy textToCopy={"+54 11 66016895"}>
        <IconCellphone className="m-1 h-10 w-10 text-brand-blue-950" />
        <img
          src={phoneImage}
          alt="Phone"
          className={`h-10`}
        />
      </InfoToCopy>


      <SocialIcons/>
    </div>
  )
}