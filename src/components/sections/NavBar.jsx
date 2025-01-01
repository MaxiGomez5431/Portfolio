import DarkModeBtn from "../ui/DarkModeBtn";

export default function NavBar() {
  const linkStyle = "p-1 text-sm lg:text-lg  font-bold text-brand-blue-950 hover:text-brand-blue-600 dark:text-brand-blue-100 dark:hover:text-brand-blue-600 duration-100"

  return (
    <header 
      className="w-full h-auto 
      flex flex-row justify-between 
      border border-b border-r-0 
      sticky top-0 z-[100] p-4 
      backdrop-blur-xl"
    >
      <nav className="flex items-center w-full relative">
        <a href="#hero" className={linkStyle}>Inicio</a>
        <span className="border-l h-5 mx-1"/>

        <a href="#about-me" className={linkStyle}>Sobre mí</a>
        <span className="border-l h-5 mx-1"/>

        <a href="#projects" className={linkStyle}>Proyectos</a>
        <span className="border-l h-5 mx-1"/>

        <a href="#contact" className={linkStyle}>Contacto</a>
      </nav>

      <DarkModeBtn/>

    </header>
  );
}