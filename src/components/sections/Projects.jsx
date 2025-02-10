import Title from "../ui/Title"
import ProjectCard from "../ui/projects/ProjectCard"
import projectsData from "../../data/projectsData.json"
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Title id="projects">{t("MyProjects")}</Title>

      <section className="flex justify-center flex-wrap w-full">
        {
          projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={i18n.language === "es" ? project.title_es : project.title_en}
              text={i18n.language === "es" ? project.text_es : project.text_en}
              url={project.url}
              github={project.github}
              technologies={project.technologies}
              backend={project.isBackEnd}
            />
          ))
        }
      </section>
    </>
  );
}

export default Projects;