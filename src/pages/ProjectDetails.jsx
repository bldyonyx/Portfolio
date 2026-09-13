import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return (
      <main className="hero-dots flex min-h-screen items-center justify-center bg-dark px-6 text-paper">
        <div className="text-center">
          <p className="font-typewriter text-sm text-paper/60">
            Project not found.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 border border-paper/25 bg-paper px-4 py-2.5 font-typewriter text-xs text-wine shadow-[4px_5px_0_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink"
          >
            <span>←</span>
            <span>back home</span>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="hero-dots min-h-screen bg-dark px-6 py-12 text-paper lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* BACK BUTTON */}
        <Link
          to="/#projects"
          className="
            inline-flex
            items-center
            gap-2
            border
            border-paper/25
            bg-paper
            px-4
            py-2.5
            font-typewriter
            text-xs
            text-wine
            shadow-[4px_5px_0_rgba(0,0,0,0.16)]
            transition-all
            duration-300
            hover:-translate-x-1
            hover:-translate-y-0.5
            hover:bg-pink
            hover:shadow-[6px_7px_0_rgba(0,0,0,0.18)]
          "
        >
          <span>←</span>
          <span>back to projects</span>
        </Link>

        {/* HEADER */}
        <div className="mt-12 mb-14">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            project
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-display text-6xl text-paper md:text-7xl">
              {project.title}
            </h1>

            {project.status && (
              <span className="-rotate-2 border border-pink/30 bg-paper/10 px-3 py-1 font-typewriter text-[10px] uppercase tracking-wider text-pink">
                {project.status}
              </span>
            )}
          </div>

          <p className="mt-5 max-w-2xl font-typewriter text-sm leading-7 text-paper/65 md:text-base">
            {project.description}
          </p>
        </div>

        {/* MAIN PROJECT CARD */}
        <div className="relative">

          {/* PAPER BEHIND */}
          <div className="absolute inset-4 rotate-[1.2deg] border border-paper/10 bg-wine/25" />

          {/* MAIN PAPER */}
          <div className="relative border border-paper/15 bg-paper px-6 py-8 text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)] md:px-10 md:py-10 lg:px-12">

            {/* TAPE */}
            <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-blush/65" />

            {/* TOP LABELS */}
            <div className="mb-8 flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[10px] uppercase tracking-[0.22em] text-wine/50">
              <span>project file</span>
              <span>{project.slug}.case-study</span>
            </div>

            {/* PROJECT IMAGE */}
            <div className="border border-wine/15 bg-cream p-3">
              <div className="flex aspect-[16/8] items-center justify-center overflow-hidden bg-pink/30">
                <span className="font-typewriter text-xs uppercase tracking-[0.2em] text-wine/45">
                  project screenshot
                </span>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">

              {/* ABOUT */}
              <div>
                <p className="mb-3 font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/50">
                  about the project
                </p>

                <h2 className="font-display text-4xl text-wine">
                  The idea
                </h2>

                <p className="mt-5 max-w-xl font-typewriter text-sm leading-7 text-ink/70">
                  {project.description}
                </p>

                <p className="mt-8 font-hand text-3xl text-wine">
                  built while learning ♡
                </p>
              </div>

              {/* SIDE INFO */}
              <div className="space-y-6">

                {/* TECH */}
                <div className="rotate-[1deg] border border-wine/20 bg-cream p-6 shadow-[5px_6px_0_rgba(104,69,80,0.08)]">
                  <p className="mb-5 font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/50">
                    built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="border border-wine/20 bg-paper px-3 py-1.5 font-typewriter text-[10px] uppercase tracking-wider text-wine"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* STATUS */}
                <div className="-rotate-[1.5deg] border border-wine/15 bg-pink/30 px-6 py-5">
                  <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/50">
                    status
                  </p>

                  <p className="mt-3 font-hand text-2xl text-wine">
                    {project.status || 'completed ♡'}
                  </p>
                </div>

                {/* LINKS */}
                <div className="flex flex-wrap items-center gap-6 pt-2 font-typewriter text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-wine pb-1 text-wine transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink"
                  >
                    view on GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-wine pb-1 text-wine transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink"
                    >
                      visit live site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* DECORATIONS */}
            <span className="absolute -bottom-5 -left-2 -rotate-12 font-hand text-4xl text-wine">
              ♡
            </span>

            <span className="absolute -right-3 top-16 rotate-12 font-hand text-3xl text-blush">
              ʚଓ
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails