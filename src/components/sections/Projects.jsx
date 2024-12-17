import Title from "../ui/Title"
import ProjectCard from "../ui/projects/ProjectCard"
import projectsData from "../../data/projectsData.json"

function Projects() {

  return (
    <>
      <Title>Mis projectos</Title>

      <section className="flex justify-center flex-wrap w-full">

        {
          projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              text= {project.text}
              url= {project.url}
              github= {project.github}
              technologies= {project.technologies}
            />
          ))
        }

      </section>
    </>
  )
}

export default Projects