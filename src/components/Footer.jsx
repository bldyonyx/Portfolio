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
  const updatedRef = useRef(null)
  const updatedLabelRef = useRef(null)
  const updatedDateRef = useRef(null)
  const updatedHeartRef = useRef(null)

  const lastUpdated = new Intl.DateTimeFormat(
    'en',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  )
    .format(new Date(__BUILD_DATE__))
    .toLowerCase()

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

      const updateTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: updatedRef.current,
          start: 'top 96%',
          once: true,
        },
      })

      updateTimeline
        .fromTo(
          updatedLabelRef.current,
          {
            opacity: 0,
            x: 8,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: 'power2.out',
          }
        )
        .fromTo(
          updatedDateRef.current,
          {
            opacity: 0,
            x: 10,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.15'
        )
        .fromTo(
          updatedHeartRef.current,
          {
            opacity: 0,
            scale: 0,
            rotate: -15,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: 'back.out(2)',
          },
          '-=0.15'
        )
    })

    return () => context.revert()
  }, [])

  return (
    <footer className="hero-dots bg-dark px-6 pb-10 text-paper lg:px-8">

      <div className="w-full border-t border-paper/15 pt-10">

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
        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-center
            gap-3
            border-t
            border-paper/10
            pt-5
            font-typewriter
            text-[10px]
            uppercase
            tracking-[0.2em]
            md:grid-cols-[1fr_auto_1fr]
            md:gap-6
          "
        >
          {/* COPYRIGHT */}
          <span className="order-2 text-center text-paper/35 md:order-1 md:text-left">
            © 2026 Maya
          </span>

          {/* LAST UPDATED */}
          <div
            ref={updatedRef}
            className="
              order-1
              flex
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              md:order-2
            "
          >
            <span
              ref={updatedLabelRef}
              className="text-paper/30"
            >
              last updated ·
            </span>

            <span
              ref={updatedDateRef}
              className="text-paper/55"
            >
              {lastUpdated}
            </span>

            <span
              ref={updatedHeartRef}
              aria-hidden="true"
              className="
                -rotate-6
                font-hand
                text-sm
                text-pink/70
              "
            >
              ♡
            </span>
          </div>

          {/* DECORATION */}
          <span className="order-3 hidden text-right text-paper/50 md:block">
            ഒ
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer