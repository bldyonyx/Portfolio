import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import GithubSection from '../components/GithubSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ClickEffect from '../components/ClickEffect'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.scrollTo !== 'projects') return

    const projectsSection =
      document.getElementById('projects')

    if (!projectsSection) return

    requestAnimationFrame(() => {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })

    navigate('/', {
      replace: true,
      state: null,
    })
  }, [location.state, navigate])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <ClickEffect />
    </>
  )
}

export default Home