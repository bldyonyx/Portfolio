import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProjectRoadmap({ roadmap }) {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!roadmap) return

    const ctx = gsap.context(() => {
      const heading =
        sectionRef.current?.querySelector(
          '[data-roadmap-heading]'
        )

      const cards = gsap.utils.toArray(
        '[data-roadmap-card]',
        sectionRef.current
      )

      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }

      cards.forEach((card, index) => {
        const rotation =
          index % 2 === 0 ? -0.8 : 0.8

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 24,
            rotate:
              index % 2 === 0 ? -2 : 2,
          },
          {
            opacity: 1,
            y: 0,
            rotate: rotation,
            duration: 0.55,
            delay: index * 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [roadmap])

  if (!roadmap) return null

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl min-[1800px]:max-w-7xl">

        {/* SECTION HEADER */}
        <div
          data-roadmap-heading
          className="mb-14 text-center"
        >
          <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/70">
            {roadmap.eyebrow}
          </p>

          <h2 className="mt-2 font-display text-4xl text-paper md:text-5xl">
            {roadmap.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-typewriter text-xs leading-6 text-paper/50 sm:text-sm sm:leading-7">
            {roadmap.description}
          </p>
        </div>

        {/* ROADMAP CARDS */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-10">

          {roadmap.items.map(
            (item, index) => {
              const backgroundClass =
                index % 3 === 0
                  ? 'bg-paper'
                  : index % 3 === 1
                    ? 'bg-cream'
                    : 'bg-pink'

              const rotationClass =
                index % 2 === 0
                  ? '-rotate-[0.8deg]'
                  : 'rotate-[0.8deg]'

              const tapeClass =
                index % 2 === 0
                  ? 'left-8 -rotate-3'
                  : 'right-8 rotate-3'

              return (
                <article
                  key={item.number}
                  data-roadmap-card
                  className={`
                    relative
                    border
                    border-wine/15
                    px-7
                    py-8
                    text-ink
                    shadow-[7px_8px_0_rgba(0,0,0,0.14)]
                    sm:px-8
                    sm:py-9
                    ${backgroundClass}
                    ${rotationClass}
                  `}
                >
                  {/* TAPE */}
                  <div
                    aria-hidden="true"
                    className={`
                      absolute
                      -top-3
                      h-6
                      w-20
                      bg-blush/60
                      ${tapeClass}
                    `}
                  />

                  {/* TOP BAR */}
                  <div className="mb-7 flex items-center justify-between font-typewriter text-[9px] uppercase tracking-[0.24em] text-wine/45">
                    <span>
                      coming next
                    </span>

                    <span>
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="font-display text-3xl leading-none text-wine sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 font-typewriter text-xs leading-6 text-ink/65 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>

                  {/* NOTE */}
                  <div className="mt-7 border-t border-wine/10 pt-5">
                    <p className="-rotate-1 font-hand text-xl text-wine/60">
                      {item.note} ♡
                    </p>
                  </div>
                </article>
              )
            }
          )}

          {/* END NOTE */}
          <div
            className="
              flex
              min-h-32
              items-center
              justify-center
              md:col-span-2
            "
          >
            <p className="-rotate-2 text-center font-hand text-2xl text-pink/70 sm:text-3xl">
              more pages still being written...
              ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectRoadmap