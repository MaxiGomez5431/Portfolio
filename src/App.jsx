import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'


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
