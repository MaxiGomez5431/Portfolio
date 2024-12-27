import Title from "../ui/Title"
import { cloneElement } from "react";
import { techIcons } from "../ui/Icons";

function Skills() {

  return (
    <>
      <Title>Skills</Title>

      <section className="flex flex-wrap justify-center w-full">
        {
        Object.keys(techIcons).map((tech) => (
          <SkillTag 
            key={tech} 
            logo={techIcons[tech]} 
            text={tech} 
          />
        ))
        }
      </section>
      
    </>
  )
}


function SkillTag ({logo, text}) {

  const styledLogo = cloneElement(logo, {
    className: "w-10 h-10 text-brand-blue-950",
  });

  return (
    <div className="flex justify-center items-center bg-brand-blue-200 w-auto h-auto rounded-2xl pl-2 pr-2 m-1">
      {styledLogo}
      <p className="font-bold text-brand-blue-950 pl-1">{text}</p>
    </div>
  )
}


export default Skills