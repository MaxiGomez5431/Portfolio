import Title from '../ui/Title'
import {IconUserGroup, IconBxsUserCircle, IconResponsive, IconBook} from '../ui/Icons'
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  let commonStyle = "h-auto min-w-12 lg:min-w-16m-3 ml-6 text-brand-blue-800 dark:text-brand-blue-300"

  return (
    
    <>
      <Title id="about-me">{t("AboutMe")}</Title>

      <section className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2'>

        <AboutMeCard
          title={t("WhoAmI")}
          icon={<IconBxsUserCircle className={commonStyle}/>}
          text={t("WhoAmIText")}
        />
        <AboutMeCard
          title='Responsive Desing'
          icon={<IconResponsive className={commonStyle}/>}
          text={t("ResponsiveText")}
        />
        <AboutMeCard 
          title='Soft Skills'
          icon={<IconUserGroup className={commonStyle}  />}
          text={t("SoftSkillsText")}
        />
        <AboutMeCard
          title={t("Studies")}
          icon={<IconBook className={commonStyle}/>}
          text={t("StudiesText")}
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
        bg-brand-blue-50 dark:bg-brand-blue-950
        rounded-2xl'
      >
        
        <h4 className='text-2xl lg:text-3xl font-bold mt-3 text-brand-blue-800 dark:text-brand-blue-300'>{title}</h4>
        
        <div className='flex'>
          {icon}
          <p className='text-base text-left lg:text-lg m-3 text-brand-blue-950 dark:text-brand-blue-100'> {text} </p>
        </div>
      
      </div>

    </div>
  )
}

export default AboutMe