import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProjectEnd() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const label = sectionRef.current?.querySelector(
        '[data-project-end-label]'
      )

      const line = sectionRef.current?.querySelector(
        '[data-project-end-line]'
      )

      const message = sectionRef.current?.querySelector(
        '[data-project-end-message]'
      )

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      if (label) {
        timeline.fromTo(
          label,
          {
            opacity: 0,
            y: 6,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
          }
        )
      }

      if (line) {
        timeline.fromTo(
          line,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.15'
        )
      }

      if (message) {
        timeline.fromTo(
          message,
          {
            opacity: 0,
            y: 8,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.25'
        )
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-6 pb-24 pt-16 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto max-w-6xl border-t border-paper/15 pt-14">
        <div className="flex flex-col items-center text-center">
          <p
            data-project-end-label
            className="font-typewriter text-[9px] uppercase tracking-[0.3em] text-pink/55"
          >
            end of project
          </p>

          <span
            data-project-end-line
            className="mt-5 h-px w-10 origin-center bg-pink/35"
          />

          <p
            data-project-end-message
            className="mt-6 -rotate-1 font-hand text-3xl text-paper/90 sm:text-4xl"
          >
            thanks for looking ♡
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectEnd