import { useEffect, useState } from "react";
import { IconDarkMode } from "../ui/Icons"

export default function DarkModeBtn() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button className="flex justify-center items-center w-auto" onClick={() => setDarkMode(!darkMode)}>
      <IconDarkMode 
        className="flex justify-center items-center 
        min-w-7 min-h-7 lg:w-10 lg:h-10 
        m-1 text-brand-blue-950
        hover:text-brand-blue-600
        dark:text-brand-blue-100
        dark:hover:text-brand-blue-600
        duration-100"
      />
    </button>    
  );
}