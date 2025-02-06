import { techIcons } from "../Icons"
import { ProjectCardButton } from "./ProjectCardButton"
import { useTranslation } from "react-i18next"; 

export default function ProjectCard({image, title, text, url, github, technologies}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="flex justify-between items-center flex-col border rounded-xl max-w-96 m-5 lg:flex-row lg:max-w-full">
        
        <img src={image} 
          alt={`image of the front page for the ${title} proyect`} 
          className="rounded-t-xl w-auto h-auto lg:max-w-lg lg:max-h-72 lg:rounded-xl lg:m-4"
        />

        <div className="flex items-center justify-between text-center flex-col m-2 lg:justify-around h-full w-10/12">
          <h3 className="text-lg font-bold text-brand-blue-950 dark:text-brand-blue-100 lg:text-2xl m-1">{title}</h3>
          <p className="text-brand-blue-950 dark:text-brand-blue-100 lg:text-lg m-1">{text}</p>

          <div className="m-3">
            <ProjectCardButton url={url} text={t("Visit")}/>
            <ProjectCardButton url={github} text={t("Code")}/>
          </div>
        </div>

        <div 
          className="
          flex lg:flex-col 
          items-center justify-center 
          h-auto w-[90%]
          lg:w-auto lg:h-[90%]
          border-t lg:border-l lg:border-t-0 p-2"
        >
          {
            technologies.map((tech) => (
              <div key={tech}>
                {techIcons[tech]}
              </div>
            ))
          }
        </div>

      </div>
    </>
  )
}

