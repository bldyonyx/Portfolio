import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'
import ProjectShowcase from '../components/ProjectShowcase'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  const [showBackToTop, setShowBackToTop] = useState(false)

  /*
    Always start a project page from the top.
    This prevents React Router from keeping the previous scroll position.
  */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  /*
    Show the back-to-top button only after
    the user has scrolled down the page.
  */
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!project) {
    return (
      <main className="hero-dots flex min-h-screen items-center justify-center bg-dark px-6 text-paper">
        <div className="text-center">
          <p className="font-typewriter text-sm text-paper/60">
            Project not found.
          </p>

          <Link
            to="/"
            className="
              mt-6
              inline-flex
              border
              border-paper/20
              bg-paper
              px-5
              py-3
              font-typewriter
              text-xs
              text-wine
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-pink
            "
          >
            ← back home
          </Link>
        </div>
      </main>
    )
  }

  const projectCopy = {
    colorly: {
      category: 'color exploration',

      question: 'What I wanted to explore',

      intro:
        'I wanted to explore how a simple interaction could make choosing colors feel less intimidating and a little more playful.',

      note: 'playing with color ♡',
    },

    taskly: {
      category: 'productivity experiment',

      question: 'What I wanted to explore',

      intro:
        'I wanted to build a task manager that feels calm and approachable while experimenting with more interactive React features and everyday productivity flows.',

      note: 'making everyday tools nicer ♡',
    },
  }

  const copy = projectCopy[project.slug]

  const getSlides = () => {
    if (project.slug === 'colorly') {
      return [
        {
          image: project.details.moods.light,
          eyebrow: 'palette mood · 01',
          title: 'Light',
          description:
            'Soft and airy combinations for palettes that feel calm, bright, and gentle.',
        },

        {
          image: project.details.moods.vibrant,
          eyebrow: 'palette mood · 02',
          title: 'Vibrant',
          description:
            'Brighter colors and stronger contrast create combinations with more energy.',
        },

        {
          image: project.details.moods.dark,
          eyebrow: 'palette mood · 03',
          title: 'Dark',
          description:
            'Deeper shades create richer and moodier palettes while keeping the same simple workflow.',
        },

        {
          image: project.details.fromColor,
          eyebrow: 'custom palette · 04',
          title: 'From a Color',
          description:
            'Choose a starting color you already like and let Colorly build a harmonious palette around it.',
        },
      ]
    }

    if (project.slug === 'taskly') {
      return [
        {
          image: project.details.main,
          eyebrow: 'daily workspace · 01',
          title: 'Daily Tasks',
          description:
            'Add tasks, keep track of what is finished, and follow your progress through the day.',
        },

        {
          image: project.details.calendar,
          eyebrow: 'planning · 02',
          title: 'Calendar',
          description:
            'Move between different days and plan tasks ahead instead of only working with today.',
        },

        {
          image: project.details.savedLists,
          eyebrow: 'templates · 03',
          title: 'Saved Lists',
          description:
            'Save reusable task lists so routines and recurring plans can be loaded again easily.',
        },

        {
          image: project.details.finishedDay,
          eyebrow: 'history · 04',
          title: 'Finished Days',
          description:
            'Revisit previous days and see the tasks that were completed.',
        },

        {
          image: project.details.settings,
          eyebrow: 'customization · 05',
          title: 'Themes & Settings',
          description:
            'Change the visual theme and adjust Taskly to make the workspace feel more personal.',
        },
      ]
    }

    return []
  }

  const slides = getSlides()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="hero-dots min-h-screen bg-dark text-paper">

      {/* ======================================================
          PROJECT INTRO
      ====================================================== */}

      <section className="px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="mx-auto max-w-7xl">

          {/* TOP NAV */}
          <div className="flex items-center justify-between gap-5">

            <Link
              to="/#projects"
              className="
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
              <span>←</span>

              <span>
                back to projects
              </span>
            </Link>

            <p className="
              hidden
              font-typewriter
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-pink/45
              sm:block
            ">
              {copy.category}
            </p>
          </div>

          {/* MAIN INTRO */}
          <div className="mt-20 lg:mt-24">

            <p className="
              font-typewriter
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-pink/75
            ">
              project case study
            </p>

            <div className="
              mt-7
              grid
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
              lg:gap-10
            ">

              {/* LEFT SIDE */}
              <div>
                <h1 className="
                  font-display
                  text-7xl
                  leading-[0.82]
                  text-paper
                  sm:text-8xl
                  lg:text-[8rem]
                ">
                  {project.title}
                </h1>

                {project.status && (
                  <span className="
                    mt-6
                    inline-block
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
                  ">
                    {project.status}
                  </span>
                )}

                <p className="
                  mt-7
                  -rotate-2
                  font-hand
                  text-3xl
                  text-pink/75
                  lg:text-4xl
                ">
                  {copy.note}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative lg:pl-9">

                {/* SEPARATOR */}
                <div className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  hidden
                  w-px
                  bg-paper/15
                  lg:block
                " />

                {/* DOT */}
                <span className="
                  absolute
                  -left-[5px]
                  top-1
                  hidden
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-pink
                  lg:block
                " />

                <p className="
                  font-typewriter
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-pink/75
                ">
                  {copy.question}
                </p>

                <p className="
                  mt-6
                  max-w-2xl
                  font-typewriter
                  text-base
                  leading-8
                  text-paper/75
                  lg:text-[17px]
                  lg:leading-9
                ">
                  {copy.intro}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-8 flex flex-wrap gap-2">
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
                        text-paper/60
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="
                  mt-8
                  flex
                  flex-wrap
                  gap-7
                  font-typewriter
                  text-[11px]
                ">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
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
                    GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
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
                      live site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* EXPLORE INDICATOR */}
            <div className="
              mt-14
              flex
              items-center
              gap-4
              font-typewriter
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-paper/35
            ">
              <span className="h-px w-14 bg-paper/20" />

              <span>
                explore project
              </span>

              <span>
                ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECT SHOWCASE
      ====================================================== */}

      <div className="px-6 lg:px-8">
        <ProjectShowcase slides={slides} />
      </div>

      {/* ======================================================
          END OF PROJECT
      ====================================================== */}

      <section className="px-6 py-20 lg:px-8">
        <div className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          gap-8
          border-t
          border-paper/15
          pt-12
          sm:flex-row
          sm:items-end
          sm:justify-between
        ">

          <div>
            <p className="
              font-typewriter
              text-[9px]
              uppercase
              tracking-[0.26em]
              text-pink/60
            ">
              end of project
            </p>

            <p className="
              mt-3
              font-hand
              text-3xl
              text-paper
            ">
              thanks for looking ♡
            </p>
          </div>

          <Link
            to="/#projects"
            className="
              font-typewriter
              text-[10px]
              text-paper/60
              transition-colors
              duration-300
              hover:text-pink
            "
          >
            ← see all projects
          </Link>
        </div>
      </section>

      {/* ======================================================
          BACK TO TOP
          Hidden at the top of the page.
          Appears after scrolling 450px.
      ====================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-11
          w-11
          items-center
          justify-center
          border
          border-paper/20
          bg-paper
          font-typewriter
          text-sm
          text-wine
          shadow-[4px_5px_0_rgba(0,0,0,0.16)]
          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-pink

          ${
            showBackToTop
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : 'translate-y-4 opacity-0 pointer-events-none'
          }
        `}
      >
        ↑
      </button>
    </main>
  )
}

export default ProjectDetails