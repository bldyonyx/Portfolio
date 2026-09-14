import { ArrowRight } from 'lucide-react'

import HandwrittenNote from './HandwrittenNote'

function HeroIntro() {
  return (
    <div
      className="
        relative
        z-10
        w-full
        lg:translate-x-7
        lg:translate-y-6
        lg:pl-8
        xl:pl-12
      "
    >
      {/* DESIGN CODE LEARNING */}
      <div className="mb-4 flex items-center gap-4">
        <span className="text-lg text-wine">
          ✦
        </span>

        <p className="font-typewriter text-[10px] uppercase tracking-[0.24em] text-mauve sm:text-xs sm:tracking-[0.28em]">
          design ・ code ・ learning
        </p>
      </div>

      {/* TITLE */}
      <h1
        className="
          font-display
          text-[3.5rem]
          font-normal
          leading-[0.92]
          text-ink
          sm:text-[4.5rem]
          lg:whitespace-nowrap
          lg:text-[clamp(3.6rem,5.45vw,5.9rem)]
        "
      >
        Hi, I&apos;m Maya.
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 max-w-lg font-typewriter text-sm leading-[1.7] text-ink/80 md:text-base">
        Student exploring front-end development,
        <br className="hidden sm:block" />
        one project at a time.
      </p>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
        <a
          href="#projects"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-dark
            px-6
            py-3
            font-typewriter
            text-xs
            text-paper
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-wine
            sm:px-7
          "
        >
          <span>see my work</span>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>

        <a
          href="#about"
          className="
            rounded-full
            border
            border-dark/70
            bg-paper
            px-6
            py-3
            font-typewriter
            text-xs
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-cream
            sm:px-7
          "
        >
          about me
        </a>
      </div>

      <HandwrittenNote />
    </div>
  )
}

export default HeroIntro