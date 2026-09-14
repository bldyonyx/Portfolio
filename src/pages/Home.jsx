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