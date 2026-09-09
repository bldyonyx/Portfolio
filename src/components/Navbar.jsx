import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="hero-dots relative z-50 bg-dark text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-[58px] items-center justify-between border-b border-paper/15">

          {/* LOGO */}
          <Link
            to="/"
            className="font-typewriter text-lg tracking-wide transition-colors duration-300 hover:text-pink"
          >
            maya ഒ
          </Link>

          {/* NAV LINKS */}
          <div className="hidden items-center gap-10 font-typewriter text-sm md:flex">
            <Link
              to="/"
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
    </nav>
  )
}

export default Navbar