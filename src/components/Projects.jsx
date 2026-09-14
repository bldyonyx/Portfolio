import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import projects from '../data/projects'
import ProjectCard from './projects/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean)

      cards.forEach((card) => {
        const image = card.querySelector('[data-project-image]')
        const info = card.querySelector('[data-project-info]')
        const status = card.querySelector('[data-project-status]')

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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        hero-dots
        bg-dark
        px-4
        pb-24
        pt-24
        text-paper
        sm:px-6
        lg:px-8
        lg:pb-32
        lg:pt-32
      "
    >
      <div className="mx-auto max-w-6xl">
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

        <div className="mx-auto max-w-5xl">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              ref={(element) => {
                cardRefs.current[index] = element
              }}
              className="
                relative
                mb-16
                sm:mb-20
                lg:sticky
                lg:top-[calc(6rem+var(--stack-index)*1.125rem)]
              "
              style={{
                '--stack-index': index,
                zIndex: index + 1,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                total={projects.length}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects