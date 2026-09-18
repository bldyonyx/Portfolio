import { useRef, useState } from 'react'
import gsap from 'gsap'

import ProjectCard from './ProjectCard'

function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] =
    useState(0)

  const cardRef = useRef(null)
  const touchStartX = useRef(null)
  const isAnimating = useRef(false)

  const total = projects.length
  const activeProject = projects[activeIndex]

  const goToProject = (
    nextIndex,
    direction = null
  ) => {
    if (
      isAnimating.current ||
      !cardRef.current ||
      nextIndex === activeIndex
    ) {
      return
    }

    const animationDirection =
      direction ??
      (nextIndex > activeIndex
        ? 'next'
        : 'previous')

    const exitX =
      animationDirection === 'next'
        ? -40
        : 40

    const enterX =
      animationDirection === 'next'
        ? 40
        : -40

    isAnimating.current = true

    gsap.to(cardRef.current, {
      x: exitX,
      y: 6,
      rotate:
        animationDirection === 'next'
          ? -1.5
          : 1.5,
      opacity: 0,
      scale: 0.97,
      duration: 0.28,
      ease: 'power2.in',

      onComplete: () => {
        setActiveIndex(nextIndex)

        requestAnimationFrame(() => {
          if (!cardRef.current) return

          gsap.fromTo(
            cardRef.current,
            {
              x: enterX,
              y: 6,
              rotate:
                animationDirection === 'next'
                  ? 1.5
                  : -1.5,
              opacity: 0,
              scale: 0.97,
            },
            {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              scale: 1,
              duration: 0.42,
              ease: 'power3.out',
              clearProps:
                'transform,opacity',

              onComplete: () => {
                isAnimating.current = false
              },
            }
          )
        })
      },
    })
  }

  const changeProject = (direction) => {
    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total

    goToProject(nextIndex, direction)
  }

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current == null) {
      return
    }

    const touchEndX =
      event.changedTouches[0].clientX

    const distance =
      touchEndX - touchStartX.current

    touchStartX.current = null

    if (Math.abs(distance) < 45) {
      return
    }

    if (distance < 0) {
      changeProject('next')
    } else {
      changeProject('previous')
    }
  }

  return (
    <div className="relative">

      {/* STACKED PAPER */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-3
          bottom-3
          top-3
          rotate-[1.8deg]
          border
          border-wine/15
          bg-cream
          opacity-60
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-2
          bottom-2
          top-2
          -rotate-[1deg]
          border
          border-wine/10
          bg-pink/30
          opacity-70
        "
      />

      {/* ACTIVE PROJECT */}
      <div
        ref={cardRef}
        className="
          relative
          z-10
          touch-pan-y
        "
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ProjectCard
          project={activeProject}
          index={activeIndex}
          total={total}
        />
      </div>

      {/* PROJECT TABS */}
      <div
        className="
          relative
          z-20
          mt-8
          flex
          items-center
          justify-center
          gap-4
        "
      >
        {projects.map((project, index) => {
          const isActive =
            index === activeIndex

          const number = String(
            index + 1
          ).padStart(2, '0')

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() =>
                goToProject(index)
              }
              aria-label={`Show ${project.title}`}
              aria-current={
                isActive
                  ? 'true'
                  : undefined
              }
              className={`
                relative
                min-w-14
                px-4
                py-2.5
                font-typewriter
                text-xs
                tracking-[0.18em]
                transition-all
                duration-300
                focus-visible:outline-none

                ${
                  isActive
                    ? `
                      -rotate-2
                      border
                      border-wine/15
                      bg-pink
                      text-wine
                      shadow-[3px_4px_0_rgba(0,0,0,0.12)]
                    `
                    : `
                      border
                      border-paper/15
                      bg-paper/10
                      text-paper/65
                      hover:bg-paper/15
                      hover:text-paper
                    `
                }
              `}
            >
              {number}

              {isActive && (
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -right-2
                    -top-2
                    font-hand
                    text-sm
                    text-pink
                  "
                >
                  ♡
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCarousel