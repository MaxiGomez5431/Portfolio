import Title from "../ui/Title"
import place1 from "../../assets/images/place1.png"

function Projects() {
 

  return (
    <>
      <Title>Mis projectos</Title>

      <section className="flex justify-center flex-wrap w-full">
        <ProjectCard
          image={place1}
          title={"Netflix clon"}
          text= {"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"}
        />

        <ProjectCard
          image={place1}
          title={"Netflix clon"}
          text= {"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"}
        />

        <ProjectCard
          image={place1}
          title={"Netflix clon"}
          text= {"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500"}
        />

      </section>
    </>
  )
}

function ProjectCard({image, title, text, url}) {
  return (
    <>

      <div className="flex flex-col border rounded-xl max-w-96 m-5 lg:flex-row lg:max-w-full">
        <img src={image} alt="" className="rounded-t-xl w-auto h-auto lg:max-w-3xl lg:max-h-72 lg:rounded-xl lg:m-4"/>

        <div className="flex justify-center items-center text-center flex-col m-2 lg:justify-around ">
          <h3 className="text-lg font-bold text-brand-blue-950 lg:text-2xl">{title}</h3>
          <p className="text-brand-blue-950 lg:text-lg">{text}</p>
          <button className="p-2 m-1 bg-brand-blue-600 font-bold text-brand-blue-50 rounded-xl">Más Información</button>
        </div>
      </div>

    </>
  )
}

export default Projects