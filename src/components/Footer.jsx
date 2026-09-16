import { useEffect, useRef } from 'react'
import { GitBranch } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const stack = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Vite',
  ]

  const techRef = useRef(null)
  const tagsRef = useRef([])

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        techRef.current,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        tagsRef.current,
        {
          opacity: 0,
          y: 10,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: techRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, techRef)

    return () => context.revert()
  }, [])

  return (
    <footer className="hero-dots bg-dark px-6 pb-10 text-paper lg:px-8">
      <div className="mx-auto max-w-6xl border-t border-paper/15 pt-10 2xl:max-w-352">

        {/* MAIN */}
        <div className="grid gap-10 text-center md:grid-cols-[1fr_auto_1fr] md:items-end md:text-left">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-typewriter text-lg tracking-wide text-paper">
              maya ഒ
            </p>

            <p className="mt-3 max-w-sm font-typewriter text-xs leading-6 text-paper/80">
              designed &amp; built while learning,
              <br />
              one project at a time.
            </p>
          </div>

          {/* TECH STACK */}
          <div
            ref={techRef}
            className="flex flex-col items-center"
          >
            <p className="font-typewriter text-[9px] uppercase tracking-[0.2em] text-paper/45">
              &lt;/&gt; built with
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {stack.map((tech, index) => (
                <span
                  key={tech}
                  ref={(element) => {
                    tagsRef.current[index] = element
                  }}
                  className="
                    border
                    border-paper/15
                    bg-paper/3
                    px-5
                    py-2.5
                    font-typewriter
                    text-[9px]
                    uppercase
                    tracking-[0.14em]
                    text-paper/65
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-pink/40
                    hover:bg-pink/10
                    hover:text-paper
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="font-hand text-2xl text-paper">
              see you around ♡
            </p>

            <a
              href="https://github.com/bldyonyx"
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-typewriter
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-paper/60
                transition-colors
                duration-300
                hover:text-paper
              "
            >
              <GitBranch
                size={12}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-rotate-6"
              />

              github
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-paper/10 pt-5 font-typewriter text-[10px] uppercase tracking-[0.2em] md:flex-row md:justify-between md:gap-0">
          <span className="text-paper/35">
            © 2026 Maya
          </span>

          <span className="text-paper/50">
            ഒ
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer