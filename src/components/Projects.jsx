import {
  Fragment,
  useLayoutEffect,
  useRef,
} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import projects from '../data/projects'
import ProjectCard from './projects/ProjectCard'
import ProjectCarousel from './projects/ProjectCarousel'

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin
)

function Projects() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const anchorRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean)

      cards.forEach((card) => {
        const image = card.querySelector(
          '[data-project-image]'
        )

        const info = card.querySelector(
          '[data-project-info]'
        )

        const status = card.querySelector(
          '[data-project-status]'
        )

        if (!image || !info) return

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            once: true,
          },
        })

        timeline
          .fromTo(
            image,
            {
              y: 22,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
            }
          )
          .fromTo(
            info,
            {
              x: 16,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.65,
              ease: 'power3.out',
            },
            '-=0.38'
          )

        if (status) {
          timeline.fromTo(
            status,
            {
              scale: 1.35,
              rotate: -8,
              opacity: 0,
            },
            {
              scale: 1,
              rotate: -2,
              opacity: 1,
              duration: 0.45,
              ease: 'back.out(2)',
            },
            '-=0.18'
          )
        }
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const scrollToProject = (index) => {
    const anchor = anchorRefs.current[index]

    if (!anchor) return

    const rootFontSize = parseFloat(
      getComputedStyle(
        document.documentElement
      ).fontSize
    )

    const stickyTop =
      (6 + index * 4.5) * rootFontSize

    const anchorTop =
      anchor.getBoundingClientRect().top +
      window.scrollY

    const targetTop =
      anchorTop - stickyTop

    gsap.to(window, {
      scrollTo: {
        y: targetTop,
        autoKill: true,
      },
      duration: 1.25,
      ease: 'power3.inOut',
    })
  }

  const stackSpace =
    (projects.length - 1) * 4.5

  const stackCompensation =
    stackSpace / 2

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        hero-dots
        relative
        bg-dark
        px-4
        py-24
        text-paper
        sm:px-6
        lg:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-6xl min-[1800px]:max-w-7xl">

        {/* SECTION INTRO */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            02 — selected work
          </p>

          <h2 className="font-display text-5xl text-paper md:text-6xl">
            Things I&apos;ve built
          </h2>

          <p className="mx-auto mt-4 max-w-md font-typewriter text-sm leading-6 text-paper/60">
            little projects where I learn, experiment,
            <br className="hidden sm:block" />
            and turn ideas into something real ♡
          </p>
        </div>

        {/* =================================
            MOBILE / TABLET CAROUSEL
        ================================= */}
        <div className="lg:hidden">
          <ProjectCarousel
            projects={projects}
          />
        </div>

        {/* =================================
            DESKTOP STICKY STACK
        ================================= */}
        <div
          className="
            relative
            mx-auto
            hidden
            max-w-5xl
            lg:block
            min-[1800px]:max-w-6xl
          "
        >
          {projects.map((project, index) => (
            <Fragment key={project.slug}>

              {/* NATURAL SCROLL ANCHOR */}
              <div
                ref={(element) => {
                  anchorRefs.current[index] =
                    element
                }}
                aria-hidden="true"
                className="h-0"
              />

              {/* STICKY PROJECT CARD */}
              <div
                ref={(element) => {
                  cardRefs.current[index] =
                    element
                }}
                className="
                  relative
                  mb-20
                  sticky
                "
                style={{
                  top: `calc(6rem + ${
                    index * 4.5
                  }rem)`,
                  zIndex: index + 1,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  total={projects.length}
                  onHeaderClick={() =>
                    scrollToProject(index)
                  }
                />
              </div>
            </Fragment>
          ))}

          {/* TECHNICAL SPACE FOR STICKY STACK */}
          <div
            aria-hidden="true"
            style={{
              height: `${stackSpace}rem`,
            }}
          />
        </div>
      </div>

      {/* DESKTOP ONLY STACK COMPENSATION */}
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          marginBottom:
            `-${stackCompensation}rem`,
        }}
      />
    </section>
  )
}

export default Projects