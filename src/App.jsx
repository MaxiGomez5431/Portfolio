import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
 

  return (
    <>
      <main className='container mx-auto px-5'>
        
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>

      </main>
    </>
  )
}

export default App
