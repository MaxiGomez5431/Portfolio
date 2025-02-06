import DarkModeBtn from "../ui/DarkModeBtn";

export default function NavBar() {
  const linkStyle = "p-1 text-[10px] sm:text-sm lg:text-lg  font-bold text-brand-blue-950 hover:text-brand-blue-600 dark:text-brand-blue-100 dark:hover:text-brand-blue-600 duration-100"

  return (
    <header 
      className="w-full h-auto 
      flex flex-row justify-between 
      border border-b border-r-0 
      sticky top-0 z-[100] p-4 
      backdrop-blur-xl"
    >
      <nav className="flex items-center w-full relative ">
        <a href="#hero" className={linkStyle}>Inicio</a>
        <span className="text-gray-500 m-1 align-middle text-xl">•</span>

        <a href="#about-me" className={linkStyle}>Sobre mí</a>
        <span className="text-gray-500 m-1 align-middle text-xl">•</span>

        <a href="#projects" className={linkStyle}>Proyectos</a>
        <span className="text-gray-500 m-1 align-middle text-xl">•</span>

        <a href="#contact" className={linkStyle}>Contacto</a>
      </nav>

      <DarkModeBtn/>

    </header>
  );
}