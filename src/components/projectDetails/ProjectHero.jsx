import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  ArrowDown,
  ArrowLeft,
} from 'lucide-react'

import ProjectHeroStepper from './ProjectHeroStepper'

function ProjectHero({
  project,
  copy,
  onBackToProjects,
}) {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = heroRef.current?.querySelector(
        '[data-hero-intro]'
      )

      const title = heroRef.current?.querySelector(
        '[data-hero-title]'
      )

      const status = heroRef.current?.querySelector(
        '[data-hero-status]'
      )

      const note = heroRef.current?.querySelector(
        '[data-hero-note]'
      )

      const explore = heroRef.current?.querySelector(
        '[data-hero-explore]'
      )

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power2.out',
        },
      })

      if (intro) {
        timeline.fromTo(
          intro,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.35,
          }
        )
      }

      if (title) {
        timeline.fromTo(
          title,
          {
            y: 14,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.15'
        )
      }

      if (note) {
        timeline.fromTo(
          note,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.45,
          },
          '-=0.25'
        )
      }

      if (status) {
        timeline.fromTo(
          status,
          {
            scale: 1.4,
            rotate: -9,
            opacity: 0,
          },
          {
            scale: 1,
            rotate: -2,
            opacity: 1,
            duration: 0.42,
            ease: 'back.out(2)',
          },
          '-=0.2'
        )
      }

      if (explore) {
        timeline.fromTo(
          explore,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          },
          '-=0.1'
        )
      }
    }, heroRef)

    return () => {
      ctx.revert()
    }
  }, [project.slug])

  return (
    <section
      ref={heroRef}
      className="px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP NAV */}
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            onClick={onBackToProjects}
            className="
              group
              inline-flex
              items-center
              gap-2
              border
              border-paper/20
              bg-paper
              px-4
              py-2.5
              font-typewriter
              text-[10px]
              text-wine
              shadow-[4px_5px_0_rgba(0,0,0,0.14)]
              transition-all
              duration-300
              hover:-translate-x-1
              hover:bg-pink
            "
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
              "
            />

            <span>
              back to projects
            </span>
          </button>

          <p className="hidden font-typewriter text-[10px] uppercase tracking-[0.28em] text-pink/45 sm:block">
            {copy.category}
          </p>
        </div>

        {/* MAIN INTRO */}
        <div className="mt-20 lg:mt-24">
          <p
            data-hero-intro
            className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-pink/75"
          >
            project case study
          </p>

          <div className="mt-7 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
            {/* LEFT SIDE */}
            <div>
              <h1
                data-hero-title
                className="
                  font-display
                  text-7xl
                  leading-[0.82]
                  text-paper
                  sm:text-8xl
                  lg:text-[8rem]
                "
              >
                {project.title}
              </h1>

              {/* STATUS */}
              {project.status && (
                <span
                  data-hero-status
                  className="
                    mt-6
                    inline-block
                    origin-center
                    -rotate-2
                    border
                    border-pink/25
                    px-3
                    py-1.5
                    font-typewriter
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-pink
                  "
                >
                  {project.status}
                </span>
              )}

              {/* HANDWRITTEN NOTE */}
              <p
                data-hero-note
                className="
                  mt-7
                  -rotate-2
                  font-hand
                  text-3xl
                  text-pink/75
                  lg:text-4xl
                "
              >
                {copy.note}
              </p>
            </div>

            {/* INTERACTIVE INFO */}
            <div
              className="
                relative
                border-t
                border-paper/10
                pt-9
                lg:border-t-0
                lg:pl-9
                lg:pt-0
              "
            >
              <ProjectHeroStepper
                project={project}
                copy={copy}
              />
            </div>
          </div>

          {/* EXPLORE INDICATOR */}
          <div
            data-hero-explore
            className="
              mt-14
              flex
              items-center
              gap-4
              font-typewriter
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-paper/35
            "
          >
            <span className="h-px w-14 bg-paper/20" />

            <span>
              explore project
            </span>

            <ArrowDown
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
              className="animate-[project-explore-arrow_2s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero