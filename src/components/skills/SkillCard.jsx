import { useEffect, useRef } from 'react'

function SkillCard({
  number,
  title,
  skills,
  className,
  tapeClass,
}) {
  const skillRefs = useRef([])
  const timeoutRefs = useRef([])
  const isHoveredRefs = useRef([])

  useEffect(() => {
    const startJitter = (element, index) => {
      if (!element) return

      const scheduleNextJitter = () => {
        const nextDelay =
          3000 + Math.random() * 4500

        timeoutRefs.current[index] = setTimeout(
          jitter,
          nextDelay
        )
      }

      const jitter = () => {
        if (isHoveredRefs.current[index]) {
          scheduleNextJitter()
          return
        }

        const duration = 900 + Math.random() * 500

        element.animate(
          [
            {
              transform: 'translate(0px, 0px)',
            },
            {
              transform: `translate(
                ${Math.random() > 0.5 ? '0.8px' : '-0.8px'},
                -1.5px
              )`,
            },
            {
              transform: `translate(
                ${Math.random() > 0.5 ? '0.4px' : '-0.4px'},
                0.8px
              )`,
            },
            {
              transform: 'translate(0px, 0px)',
            },
          ],
          {
            duration,
            easing: 'ease-in-out',
          }
        )

        scheduleNextJitter()
      }

      const initialDelay =
        1000 + index * 500 + Math.random() * 1800

      timeoutRefs.current[index] = setTimeout(
        jitter,
        initialDelay
      )
    }

    skillRefs.current.forEach((element, index) => {
      startJitter(element, index)
    })

    return () => {
      timeoutRefs.current.forEach((timeout) => {
        clearTimeout(timeout)
      })

      skillRefs.current.forEach((element) => {
        element
          ?.getAnimations()
          .forEach((animation) => animation.cancel())
      })
    }
  }, [skills])

  const handleMouseEnter = (index) => {
    isHoveredRefs.current[index] = true

    const element = skillRefs.current[index]

    element
      ?.getAnimations()
      .forEach((animation) => animation.cancel())
  }

  const handleMouseLeave = (index) => {
    isHoveredRefs.current[index] = false
  }

  return (
    <div
      className={`
        relative
        z-10
        w-full
        max-w-lg
        border
        border-wine/20
        p-7
        text-ink
        shadow-[10px_12px_0_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:z-50
        hover:rotate-0
        ${className}
      `}
    >
      {/* TAPE */}
      <div
        className={`
          absolute
          -top-4
          h-8
          w-24
          ${tapeClass}
        `}
      />

      {/* NUMBER */}
      <p className="mb-2 font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/55">
        {number}
      </p>

      {/* TITLE */}
      <h3 className="mb-6 font-display text-4xl text-wine">
        {title}
      </h3>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={(element) => {
              skillRefs.current[index] = element
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group relative"
          >
            {/* SKILL BUTTON */}
            <div
              className="
                cursor-default
                border
                border-wine/20
                bg-paper/75
                px-4
                py-2
                font-typewriter
                text-xs
                text-wine
                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:rotate-[1deg]
                group-hover:border-wine/50
                group-hover:bg-wine
                group-hover:text-paper
                group-hover:shadow-[3px_4px_0_rgba(104,69,80,0.16)]
              "
            >
              {skill.name}
            </div>

            {/* HOVER POPUP */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-full
                z-[100]
                mt-4
                w-64
                -translate-x-1/2
                -translate-y-2
                border
                border-wine/30
                bg-paper
                p-5
                text-ink
                opacity-0
                shadow-[6px_7px_0_rgba(0,0,0,0.14)]
                transition-all
                duration-300

                group-hover:pointer-events-auto
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {/* LITTLE ARROW */}
              <div className="absolute bottom-full left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border-l border-t border-wine/30 bg-paper" />

              {/* POPUP HEADER */}
              <div className="mb-3 flex items-center justify-between border-b border-wine/25 pb-3">
                <span className="font-typewriter text-[10px] uppercase tracking-[0.18em] text-wine/80">
                  {skill.name}
                </span>

                <span className="font-typewriter text-[10px] text-wine/65">
                  ♡
                </span>
              </div>

              {/* DESCRIPTION */}
              <p className="font-typewriter text-[13px] leading-6 text-ink/85">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FRONTEND HEART */}
      {number === '01' && (
        <span className="absolute -bottom-5 -right-3 rotate-12 font-hand text-4xl text-wine">
          ♡
        </span>
      )}
    </div>
  )
}

export default SkillCard