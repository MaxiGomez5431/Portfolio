import './App.css'
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'


function App() {
 

  return (
    <main className='relative'>

      <div className='container mx-auto max-w-7xl px-5'>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      
    </main>
  )
}

export default App
