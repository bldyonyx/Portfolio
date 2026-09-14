import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import {
  ExternalLink,
  GitBranch,
} from 'lucide-react'

const positions = [0, 0.5, 1]

function ProjectHeroStepper({
  project,
  copy,
}) {
  const trackRef = useRef(null)
  const contentRef = useRef(null)

  const [activeStep, setActiveStep] = useState(0)
  const [position, setPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const updateStepFromPosition = (progress) => {
    if (progress < 0.25) {
      setActiveStep(0)
    } else if (progress < 0.75) {
      setActiveStep(1)
    } else {
      setActiveStep(2)
    }
  }

  const moveToStep = (step) => {
    const nextStep = Math.max(
      0,
      Math.min(2, step)
    )

    setActiveStep(nextStep)
    setPosition(positions[nextStep])
  }

  const handlePointerDown = (event) => {
    event.preventDefault()
    setIsDragging(true)
  }

  useEffect(() => {
    if (!isDragging) return undefined

    const handlePointerMove = (event) => {
      const track = trackRef.current

      if (!track) return

      const bounds = track.getBoundingClientRect()

      const progress = Math.max(
        0,
        Math.min(
          1,
          (event.clientY - bounds.top) /
            bounds.height
        )
      )

      setPosition(progress)
      updateStepFromPosition(progress)
    }

    const handlePointerUp = () => {
      setIsDragging(false)

      const closestStep = positions.reduce(
        (closest, current, index) => {
          const currentDistance = Math.abs(
            current - position
          )

          const closestDistance = Math.abs(
            positions[closest] - position
          )

          return currentDistance < closestDistance
            ? index
            : closest
        },
        0
      )

      moveToStep(closestStep)
    }

    window.addEventListener(
      'pointermove',
      handlePointerMove
    )

    window.addEventListener(
      'pointerup',
      handlePointerUp
    )

    return () => {
      window.removeEventListener(
        'pointermove',
        handlePointerMove
      )

      window.removeEventListener(
        'pointerup',
        handlePointerUp
      )
    }
  }, [isDragging, position])

  useEffect(() => {
    if (!contentRef.current) return

    const items =
      contentRef.current.querySelectorAll(
        '[data-step-reveal]'
      )

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
      }
    )
  }, [activeStep])

  const handleTrackClick = (event) => {
    if (isDragging) return

    const track = trackRef.current

    if (!track) return

    const bounds = track.getBoundingClientRect()

    const progress = Math.max(
      0,
      Math.min(
        1,
        (event.clientY - bounds.top) /
          bounds.height
      )
    )

    const closestStep = positions.reduce(
      (closest, current, index) => {
        const currentDistance = Math.abs(
          current - progress
        )

        const closestDistance = Math.abs(
          positions[closest] - progress
        )

        return currentDistance < closestDistance
          ? index
          : closest
      },
      0
    )

    moveToStep(closestStep)
  }

  const handleKeyDown = (event) => {
    if (
      event.key === 'ArrowDown' ||
      event.key === 'ArrowRight'
    ) {
      event.preventDefault()
      moveToStep(activeStep + 1)
    }

    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowLeft'
    ) {
      event.preventDefault()
      moveToStep(activeStep - 1)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      moveToStep(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      moveToStep(2)
    }
  }

  return (
    <div className="grid min-h-[280px] grid-cols-[32px_1fr] gap-7 sm:grid-cols-[40px_1fr] sm:gap-9">
      {/* SLIDER */}
      <div className="relative flex justify-center py-2">
        <div
          ref={trackRef}
          onClick={handleTrackClick}
          className="
            relative
            h-full
            min-h-[250px]
            w-px
            cursor-pointer
            bg-paper/15
          "
        >
          {/* SLIDER KNOB */}
          <button
            type="button"
            role="slider"
            aria-label="Project information section"
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={activeStep + 1}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            className="
              absolute
              left-1/2
              z-10
              h-4
              w-4
              -translate-x-1/2
              -translate-y-1/2
              cursor-grab
              touch-none
              rounded-full
              border
              border-pink/40
              bg-pink
              shadow-[0_0_0_4px_rgba(227,196,202,0.08)]
              transition-[box-shadow,transform]
              duration-200
              hover:scale-110
              hover:shadow-[0_0_0_6px_rgba(227,196,202,0.1)]
              active:cursor-grabbing
            "
            style={{
              top: `${position * 100}%`,
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="flex min-h-[250px] items-center"
      >
        {/* 01 — ABOUT */}
        {activeStep === 0 && (
          <div className="w-full">
            <p
              data-step-reveal
              className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/45"
            >
              01 — about
            </p>

            <h2
              data-step-reveal
              className="
                mt-5
                font-typewriter
                text-sm
                uppercase
                tracking-[0.3em]
                text-pink
                sm:text-[15px]
              "
            >
              {copy.question}
            </h2>

            <p
              data-step-reveal
              className="mt-7 max-w-2xl font-typewriter text-base leading-8 text-paper/75 lg:text-[17px] lg:leading-9"
            >
              {copy.intro}
            </p>
          </div>
        )}

        {/* 02 — TECH STACK */}
        {activeStep === 1 && (
          <div className="w-full">
            <p
              data-step-reveal
              className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/45"
            >
              02 — built with
            </p>

            <h2
              data-step-reveal
              className="
                mt-5
                font-typewriter
                text-sm
                uppercase
                tracking-[0.3em]
                text-pink
                sm:text-[15px]
              "
            >
              Tech stack
            </h2>

            <p
              data-step-reveal
              className="mt-7 max-w-lg font-typewriter text-sm leading-7 text-paper/55"
            >
              the tools and technologies behind this project.
            </p>

            <div
              data-step-reveal
              className="mt-7 flex flex-wrap gap-2"
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-paper/20
                    px-4
                    py-2
                    font-typewriter
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-paper/65
                    transition-colors
                    duration-300
                    hover:border-pink/45
                    hover:text-pink
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 03 — LINKS */}
        {activeStep === 2 && (
          <div className="w-full">
            <p
              data-step-reveal
              className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/45"
            >
              03 — explore
            </p>

            <h2
              data-step-reveal
              className="mt-4 font-display text-4xl text-paper sm:text-5xl"
            >
              See it in action
            </h2>

            <p
              data-step-reveal
              className="mt-4 max-w-lg font-typewriter text-sm leading-7 text-paper/55"
            >
              take a look at the code or explore the live project.
            </p>

            <div
              data-step-reveal
              className="mt-8 flex flex-wrap gap-8 font-typewriter text-xs"
            >
              {/* GITHUB */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-paper/45
                  pb-1.5
                  text-paper/80
                  transition-colors
                  duration-300
                  hover:border-pink
                  hover:text-pink
                "
              >
                <GitBranch
                  size={14}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-rotate-6"
                />

                <span>
                  GitHub
                </span>
              </a>

              {/* LIVE SITE */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-paper/45
                    pb-1.5
                    text-paper/80
                    transition-colors
                    duration-300
                    hover:border-pink
                    hover:text-pink
                  "
                >
                  <ExternalLink
                    size={14}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />

                  <span>
                    live site
                  </span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectHeroStepper