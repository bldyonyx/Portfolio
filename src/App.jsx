import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import GithubSection from './components/GithubSection'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <GithubSection />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App