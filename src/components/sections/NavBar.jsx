import DarkModeBtn from "../ui/DarkModeBtn";
import LanguageSwitcher from "../ui/LenguajeSwitcher";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BarsOutline, CrossFilled } from "../ui/Icons";

export default function NavBar() {
  const linkStyle = "p-1 text-[10px] text-lg  font-bold text-brand-blue-950 hover:text-brand-blue-600 dark:text-brand-blue-100 dark:hover:text-brand-blue-600 duration-100";
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef(null);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header 
        className="w-full h-auto 
        flex flex-row justify-between 
        border border-b border-r-0 
        sticky top-0 z-[100] p-4 
        backdrop-blur-xl"
      >

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <BarsOutline/>
        </button>

        <nav className="md:flex items-center w-full relative hidden">
          <a href="#hero" className={linkStyle}>{t("Home")}</a>
          <span className="text-gray-500 m-1 align-middle text-xl">•</span>

          <a href="#about-me" className={linkStyle}>{t("AboutMe")}</a>
          <span className="text-gray-500 m-1 align-middle text-xl">•</span>

          <a href="#projects" className={linkStyle}>{t("MyProjects")}</a>
          <span className="text-gray-500 m-1 align-middle text-xl">•</span>

          <a href="#contact" className={linkStyle}>{t("Contact")}</a>
        </nav>

        <div className="flex justify-center items-center">
          <LanguageSwitcher/>
          <DarkModeBtn/>
        </div>

      </header>

      <aside
        ref={asideRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-brand-blue-950 border-r-white shadow-lg transform z-[100] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button className="absolute top-4 right-4 text-2xl" onClick={() => setIsOpen(false)}>
          <CrossFilled/>
        </button>

        <nav className="flex flex-col mt-20 gap-6 px-6">
          <a href="#hero" className={linkStyle} onClick={() => setIsOpen(false)}>
            {t("Home")}
          </a>
          <a href="#about-me" className={linkStyle} onClick={() => setIsOpen(false)}>
            {t("AboutMe")}
          </a>
          <a href="#projects" className={linkStyle} onClick={() => setIsOpen(false)}>
            {t("MyProjects")}
          </a>
          <a href="#contact" className={linkStyle} onClick={() => setIsOpen(false)}>
            {t("Contact")}
          </a>
        </nav>
      </aside>
    </>
  );
}
