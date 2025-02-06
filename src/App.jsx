import './App.css'
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import NavBar from './components/sections/NavBar'
import '../i18n'


function App() {
  

  return (

    <>
      <main className='relative dark:bg-slate-900 transition-colors duration-500 ease-in-out'>
        
        <NavBar/>

        <div className='container mx-auto max-w-7xl px-5'>
          <Hero/>
          <AboutMe />
          <Projects/>
          <Skills/>
          <Contact/>
        </div>
        
      </main>
    </>
  )
}

export default App
