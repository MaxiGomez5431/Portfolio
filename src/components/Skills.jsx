import Title from "./Title"
import { cloneElement } from "react";
import {
  IconBxlJavascript, IconBxlHtml5, IconBxlCss3, 
  IconOracle, IconBxlPostgresql, IconBxlPython,
  IconBxlJava, IconBxlReact, IconBxlNodejs, 
  IconGithub, 
} from './Icons'

function Skills() {

  return (
    <>
      <Title>Skills</Title>

      <section className="flex flex-wrap m-3 justify-evenly">
        <SkillTag logo={<IconBxlJavascript/>} text="JavaScript"/>
        <SkillTag logo={<IconBxlHtml5/>} text="HTML"/>
        <SkillTag logo={<IconBxlCss3/>} text="CSS"/>
        <SkillTag logo={<IconBxlReact/>} text="React"/>
        <SkillTag logo={<IconBxlNodejs/>} text="Node.js"/>
        <SkillTag logo={<IconBxlPython/>} text="Python"/>
        <SkillTag logo={<IconBxlJava/>} text="Java"/>
        <SkillTag logo={<IconOracle/>} text="Oracle"/>
        <SkillTag logo={<IconBxlPostgresql/>} text="Postgresql"/>
      </section>
      
    </>
  )
}


function SkillTag ({logo, text}) {

  const styledLogo = cloneElement(logo, {
    className: "w-10 h-10 text-brand-blue-950", // Estilos estándar
  });

  return (
    <div className="flex justify-center items-center bg-brand-blue-50 w-auto h-auto rounded-2xl pl-2 pr-2 m-1">
      {styledLogo}
      <p className="font-bold text-brand-blue-950 pl-1">{text}</p>
    </div>
  )
}


export default Skills