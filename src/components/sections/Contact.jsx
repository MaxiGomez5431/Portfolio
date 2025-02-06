import EmailForm from '../ui/contact/EmailForm'
import ContactInfo from '../ui/contact/ContactInfo'
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (

    <section id="contact" className='flex justify-center pt-10 pb-10'>

      <div className="text-center z-50 bg-brand-blue-200 dark:bg-brand-blue-950 rounded-2xl lg:w-7/12">

        <h3 className='text-brand-blue-950 dark:text-brand-blue-100 text-3xl font-bold p-3'>{t("Contact")}</h3>

        <div className="flex justify-around flex-wrap m-3">
          <EmailForm/>
          <ContactInfo/>
        </div>
        
      </div>

      {/*Background*/}
      <div className='absolute z-0 bottom-0 left-0 right-0 bg-brand-blue-600 dark:hidden h-56'/>

    </section>
    
  )
}

export default Contact