import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollProgress =
        documentHeight > 0
          ? scrollTop / documentHeight
          : 0

      setScrolled(scrollTop > 20)
      setProgress(scrollProgress)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`
        hero-dots
        sticky
        top-0
        z-50
        text-paper
        transition-all
        duration-300
        ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-md'
            : 'bg-dark/95 backdrop-blur-sm'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-14.5 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="font-typewriter text-lg tracking-wide transition-colors duration-300 hover:text-pink"
          >
            maya ഒ
          </Link>

          {/* NAV LINKS */}
          <div className="hidden items-center gap-10 font-typewriter text-sm md:flex">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="transition-colors duration-300 hover:text-pink"
            >
              home
            </Link>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-pink"
            >
              about
            </a>

            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-pink"
            >
              projects
            </a>

            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-pink"
            >
              skills
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-pink"
            >
              contact
            </a>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com/bldyonyx"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-2xl leading-none text-paper transition-all duration-300 hover:-translate-y-0.5 hover:text-pink"
          >
            ♡
          </a>

        </div>
      </div>

      {/* SCROLL PROGRESS */}
      <div className="h-px w-full bg-paper/10">
        <div
          className="
            h-full
            origin-left
            bg-pink
            shadow-[0_0_8px_rgba(227,196,202,0.35)]
            transition-transform
            duration-100
          "
          style={{
            transform: `scaleX(${progress})`,
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar