import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useProjectShowcase from '../hooks/useProjectShowcase'
import ShowcaseControls from './ShowcaseControls'

gsap.registerPlugin(ScrollTrigger)

function ProjectShowcase({ slides }) {
  const sectionRef = useRef(null)

  const {
    activeIndex,
    activeSlide,
    isPaused,
    imageRef,
    changingTextRef,
    goToSlide,
    togglePause,
  } = useProjectShowcase(slides)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const label = sectionRef.current?.querySelector(
        '[data-showcase-label]'
      )

      const title = sectionRef.current?.querySelector(
        '[data-showcase-title]'
      )

      const note = sectionRef.current?.querySelector(
        '[data-showcase-note]'
      )

      const paper = sectionRef.current?.querySelector(
        '[data-showcase-paper]'
      )

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
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

      if (title) {
        timeline.fromTo(
          title,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.18'
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
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.2'
        )
      }

      if (paper) {
        timeline.fromTo(
          paper,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.22'
        )
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  if (!activeSlide) return null

  const currentNumber = String(activeIndex + 1).padStart(2, '0')
  const totalSlides = String(slides.length).padStart(2, '0')

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* SECTION INTRO */}
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p
              data-showcase-label
              className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/70"
            >
              project showcase
            </p>

            <h2
              data-showcase-title
              className="mt-2 font-display text-4xl text-paper md:text-5xl"
            >
              A closer look
            </h2>
          </div>

          <p
            data-showcase-note
            className="hidden max-w-xs text-right font-typewriter text-[10px] leading-5 text-paper/40 sm:block"
          >
            autoplaying through the details ♡
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div
          data-showcase-paper
          className="relative"
        >
          {/* BACK PAPER */}
          <div className="absolute inset-3 rotate-[0.7deg] border border-paper/10 bg-wine/15" />

          {/* MAIN PAPER */}
          <div
            className="
              relative
              border
              border-paper/15
              bg-paper
              p-5
              text-ink
              shadow-[10px_12px_0_rgba(0,0,0,0.16)]
              sm:p-7
              lg:p-9
            "
          >
            {/* TAPE */}
            <div className="absolute -top-4 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-2 bg-blush/65" />

            {/* TOP BAR */}
            <div className="mb-7 flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[9px] uppercase tracking-[0.22em] text-wine/45">
              <span>feature view</span>

              <span>
                {currentNumber} / {totalSlides}
              </span>
            </div>

            {/* CONTENT */}
            <div className="overflow-hidden">
              <div className="grid gap-9 lg:grid-cols-[1.22fr_0.78fr] lg:items-stretch lg:gap-14">

                {/* IMAGE AREA */}
                <div className="relative self-start overflow-hidden border border-wine/15 bg-cream">
                  <div
                    ref={imageRef}
                    className="w-full overflow-hidden"
                  >
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className={`
                        block
                        max-h-[500px]
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        ease-out
                        ${
                          isPaused
                            ? 'hover:scale-[1.07]'
                            : ''
                        }
                      `}
                    />
                  </div>

                  {/* IMAGE LABEL */}
                  <span
                    className="
                      absolute
                      bottom-3
                      right-3
                      z-10
                      bg-paper/90
                      px-2
                      py-1
                      font-typewriter
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-wine/60
                    "
                  >
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* RIGHT SIDE */}
                <div
                  className="
                    flex
                    min-h-[320px]
                    flex-col
                    justify-between
                    py-2
                    lg:min-h-[430px]
                    lg:py-4
                  "
                >
                  {/* TOP CONTENT */}
                  <div>
                    <p className="font-typewriter text-[9px] uppercase tracking-[0.26em] text-wine/45">
                      {activeSlide.eyebrow}
                    </p>

                    <div ref={changingTextRef}>
                      <h3 className="mt-4 font-display text-4xl leading-none text-wine md:text-5xl">
                        {activeSlide.title}
                      </h3>

                      <p className="mt-6 max-w-md font-typewriter text-xs leading-6 text-ink/65 sm:text-sm sm:leading-7">
                        {activeSlide.description}
                      </p>
                    </div>
                  </div>

                  {/* BOTTOM AREA */}
                  <div className="mt-10">
                    <div className="mb-6 h-px w-full bg-wine/10" />

                    <ShowcaseControls
                      slides={slides}
                      activeIndex={activeIndex}
                      isPaused={isPaused}
                      onGoToSlide={goToSlide}
                      onTogglePause={togglePause}
                    />

                    <div className="mt-8 flex items-center gap-3">
                      <p className="-rotate-2 font-hand text-2xl text-wine/65">
                        little details
                      </p>

                      <span className="font-hand text-2xl text-wine/55">
                        ♡
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HEART */}
            <span className="pointer-events-none absolute -bottom-4 -left-2 z-20 -rotate-12 font-hand text-3xl text-wine">
              ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase