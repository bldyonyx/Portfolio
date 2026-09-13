import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import gsap from 'gsap'

function ProjectShowcase({ slides }) {
  const imageRef = useRef(null)
  const changingTextRef = useRef(null)

  const intervalRef = useRef(null)
  const animatingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const directionRef = useRef(1)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  if (!slides.length) return null

  const activeSlide = slides[activeIndex]

  useLayoutEffect(() => {
    const image = imageRef.current
    const changingText = changingTextRef.current

    if (!image || !changingText) return

    const direction = directionRef.current

    gsap.killTweensOf([image, changingText])

    const timeline = gsap.timeline({
      onComplete: () => {
        animatingRef.current = false
      },
    })

    timeline.fromTo(
      image,
      {
        opacity: 0,
        x: direction > 0 ? 24 : -24,
        scale: 0.995,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.58,
        ease: 'power3.out',
      }
    )

    timeline.fromTo(
      changingText,
      {
        opacity: 0,
        x: direction > 0 ? 18 : -18,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.52,
        ease: 'power3.out',
      },
      '<0.06'
    )

    return () => {
      timeline.kill()
    }
  }, [activeIndex])

  const changeSlide = (nextIndex, direction = 1) => {
    if (animatingRef.current) return
    if (nextIndex === activeIndexRef.current) return

    const image = imageRef.current
    const changingText = changingTextRef.current

    if (!image || !changingText) return

    animatingRef.current = true
    directionRef.current = direction

    gsap.killTweensOf([image, changingText])

    const timeline = gsap.timeline({
      onComplete: () => {
        activeIndexRef.current = nextIndex
        setActiveIndex(nextIndex)
      },
    })

    timeline.to(
      image,
      {
        opacity: 0,
        x: direction > 0 ? -22 : 22,
        scale: 0.995,
        duration: 0.32,
        ease: 'power2.inOut',
      },
      0
    )

    timeline.to(
      changingText,
      {
        opacity: 0,
        x: direction > 0 ? -16 : 16,
        duration: 0.28,
        ease: 'power2.inOut',
      },
      0.03
    )
  }

  const goToNextSlide = () => {
    if (animatingRef.current) return

    const current = activeIndexRef.current
    const nextIndex = (current + 1) % slides.length

    changeSlide(nextIndex, 1)
  }

  const goToSlide = (index) => {
    const current = activeIndexRef.current

    if (index === current) return

    const direction = index > current ? 1 : -1

    changeSlide(index, direction)
  }

  useEffect(() => {
    clearInterval(intervalRef.current)

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        if (!animatingRef.current) {
          goToNextSlide()
        }
      }, 3000)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [slides.length, isPaused])

  useEffect(() => {
    return () => {
      gsap.killTweensOf([
        imageRef.current,
        changingTextRef.current,
      ])
    }
  }, [])

  const togglePause = () => {
    setIsPaused((current) => !current)
  }

  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">

        {/* SECTION INTRO */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/70">
              project showcase
            </p>

            <h2 className="mt-2 font-display text-4xl text-paper md:text-5xl">
              A closer look
            </h2>
          </div>

          <p className="hidden max-w-xs text-right font-typewriter text-[10px] leading-5 text-paper/40 sm:block">
            autoplaying through the details ♡
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="relative">

          {/* BACK PAPER */}
          <div className="absolute inset-3 rotate-[0.7deg] border border-paper/10 bg-wine/15" />

          {/* MAIN PAPER */}
          <div className="relative border border-paper/15 bg-paper p-5 text-ink shadow-[10px_12px_0_rgba(0,0,0,0.15)] sm:p-7 lg:p-9">

            {/* TAPE */}
            <div className="absolute -top-4 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-2 bg-blush/65" />

            {/* TOP BAR */}
            <div className="mb-6 flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[9px] uppercase tracking-[0.22em] text-wine/45">
              <span>
                feature view
              </span>

              <span>
                {String(activeIndex + 1).padStart(2, '0')}
                {' / '}
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* ANIMATED CONTENT */}
            <div className="overflow-hidden">
              <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">

                {/* IMAGE AREA */}
                <div className="relative overflow-hidden border border-wine/15 bg-cream">

                  {/* SCREENSHOT */}
                  <div ref={imageRef}>
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="block max-h-[480px] w-full object-contain"
                    />
                  </div>

                  {/* FIXED IMAGE LABEL */}
                  <span className="absolute bottom-3 right-3 z-10 bg-paper/90 px-2 py-1 font-typewriter text-[8px] uppercase tracking-[0.18em] text-wine/60">
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* RIGHT SIDE */}
                <div>

                  {/* FIXED EYEBROW AREA */}
                  <div className="flex h-5 items-start">
                    <p className="font-typewriter text-[9px] uppercase leading-none tracking-[0.26em] text-wine/45">
                      {activeSlide.eyebrow}
                    </p>
                  </div>

                  {/* CHANGING TEXT */}
                  <div ref={changingTextRef}>
                    <h3 className="mt-3 font-display text-4xl text-wine md:text-5xl">
                      {activeSlide.title}
                    </h3>

                    <p className="mt-5 max-w-md font-typewriter text-xs leading-6 text-ink/65 sm:text-sm sm:leading-7">
                      {activeSlide.description}
                    </p>
                  </div>

                  {/* CONTROLS */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">

                    {/* PROGRESS DOTS */}
                    <div className="flex items-center gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={`${slide.title}-${index}`}
                          type="button"
                          onClick={() => goToSlide(index)}
                          aria-label={`Show ${slide.title}`}
                          className={`
                            block h-2.5 rounded-full
                            transition-all duration-500
                            ${
                              activeIndex === index
                                ? 'w-8 bg-wine'
                                : 'w-2.5 bg-wine/20 hover:bg-wine/40'
                            }
                          `}
                        />
                      ))}
                    </div>

                    {/* DIVIDER */}
                    <span className="h-4 w-px bg-wine/15" />

                    {/* PLAY / PAUSE */}
                    <button
                      type="button"
                      onClick={togglePause}
                      aria-label={
                        isPaused
                          ? 'Resume slideshow'
                          : 'Pause slideshow'
                      }
                      className="
                        inline-flex items-center gap-2
                        border border-wine/20
                        bg-cream px-3 py-2
                        font-typewriter text-[9px]
                        uppercase tracking-[0.16em]
                        text-wine/65
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-wine/35
                        hover:bg-pink/30
                        hover:text-wine
                      "
                    >
                      {isPaused ? (
                        <Play
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      ) : (
                        <Pause
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {isPaused ? 'play' : 'pause'}
                      </span>
                    </button>
                  </div>

                  {/* STATUS */}
                  <p className="mt-4 font-typewriter text-[8px] uppercase tracking-[0.18em] text-wine/35">
                    {isPaused
                      ? 'showcase paused ♡'
                      : 'changes automatically every 3 seconds'}
                  </p>

                  {/* DECORATION */}
                  <p className="mt-8 -rotate-2 font-hand text-2xl text-wine/65">
                    little details ♡
                  </p>
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