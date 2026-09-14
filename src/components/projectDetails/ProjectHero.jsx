import {
  ArrowDown,
  ArrowLeft,
  ExternalLink,
  GitBranch,
} from 'lucide-react'

function ProjectHero({
  project,
  copy,
  onBackToProjects,
}) {
  return (
    <section className="px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-7xl">

        {/* TOP NAV */}
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            onClick={onBackToProjects}
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
            <ArrowLeft
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>
              back to projects
            </span>
          </button>

          <p className="hidden font-typewriter text-[10px] uppercase tracking-[0.28em] text-pink/45 sm:block">
            {copy.category}
          </p>
        </div>

        {/* MAIN INTRO */}
        <div className="mt-20 lg:mt-24">
          <p className="font-typewriter text-[11px] uppercase tracking-[0.3em] text-pink/75">
            project case study
          </p>

          <div className="mt-7 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10">

            {/* LEFT SIDE */}
            <div>
              <h1 className="font-display text-7xl leading-[0.82] text-paper sm:text-8xl lg:text-[8rem]">
                {project.title}
              </h1>

              {project.status && (
                <span className="mt-6 inline-block -rotate-2 border border-pink/25 px-3 py-1.5 font-typewriter text-[9px] uppercase tracking-[0.2em] text-pink">
                  {project.status}
                </span>
              )}

              <p className="mt-7 -rotate-2 font-hand text-3xl text-pink/75 lg:text-4xl">
                {copy.note}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative lg:pl-9">

              {/* SEPARATOR */}
              <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-paper/15 lg:block" />

              {/* DOT */}
              <span className="absolute -left-[5px] top-1 hidden h-2.5 w-2.5 rounded-full bg-pink lg:block" />

              <p className="font-typewriter text-[11px] uppercase tracking-[0.28em] text-pink/75">
                {copy.question}
              </p>

              <p className="mt-6 max-w-2xl font-typewriter text-base leading-8 text-paper/75 lg:text-[17px] lg:leading-9">
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
              <div className="mt-8 flex flex-wrap gap-7 font-typewriter text-[11px]">

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
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
                    />

                    <span>
                      live site
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* EXPLORE INDICATOR */}
          <div className="mt-14 flex items-center gap-4 font-typewriter text-[10px] uppercase tracking-[0.24em] text-paper/35">
            <span className="h-px w-14 bg-paper/20" />

            <span>
              explore project
            </span>

            <ArrowDown
              size={13}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero