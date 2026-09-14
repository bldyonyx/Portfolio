import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function ProjectCard({ project, index, total }) {
  const number = String(index + 1).padStart(2, '0')
  const totalProjects = String(total).padStart(2, '0')

  return (
    <article className="relative mx-auto max-w-5xl min-[1800px]:max-w-6xl">
      {/* PAPER BEHIND */}
      <div className="absolute inset-4 rotate-[1.25deg] border border-wine/15 bg-cream" />

      {/* SECOND PAPER LAYER */}
      <div className="absolute inset-2 rotate-[-0.8deg] border border-wine/10 bg-pink/20" />

      {/* MAIN CARD */}
      <div
        className="
          relative
          border
          border-wine/20
          bg-paper
          px-6
          py-8
          text-ink
          shadow-[10px_12px_0_rgba(0,0,0,0.16)]
          md:px-10
          md:py-10
          lg:px-12
        "
      >
        {/* TAPE */}
        <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-blush/60" />

        {/* PROJECT COUNT */}
        <div className="mb-8 flex items-center justify-between font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/50">
          <span>project {number}</span>

          <span>
            {number} / {totalProjects}
          </span>
        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* SCREENSHOT */}
          <div
            data-project-image
            className="relative"
          >
            <div className="border border-wine/15 bg-cream p-3">
              <div className="aspect-4/3 overflow-hidden bg-pink/30">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-[1.02]
                  "
                />
              </div>
            </div>

            {/* SIDE HEARTS */}
            <div
              className="
                absolute
                -left-4
                top-1/2
                flex
                -translate-y-1/2
                flex-col
                gap-1.5
                rounded-full
                border
                border-wine/15
                bg-blush/60
                px-1.5
                py-3.5
                font-typewriter
                text-[8px]
                text-wine/70
              "
            >
              <span>♡</span>
              <span>♡</span>
              <span>♡</span>
            </div>

            {/* HEART */}
            <span className="absolute -bottom-5 -left-2 -rotate-12 font-hand text-3xl text-wine/80">
              ♡
            </span>
          </div>

          {/* INFO */}
          <div
            data-project-info
            className="flex h-full flex-col justify-center text-ink"
          >
            {/* TITLE + MOBILE CTA */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-5xl leading-none text-ink md:text-6xl">
                    {project.title}
                  </h3>

                  {/* STATUS STAMP */}
                  {project.status && (
                    <span
                      data-project-status
                      className="
                        inline-block
                        origin-center
                        -rotate-2
                        border
                        border-wine/25
                        bg-cream
                        px-3
                        py-1
                        font-typewriter
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-wine
                      "
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                {/* MOBILE VIEW PROJECT */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="
                    group
                    mt-1
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    border-b
                    border-wine
                    pb-1
                    font-typewriter
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-wine
                    transition-colors
                    duration-300
                    hover:border-pink
                    hover:text-pink
                    md:hidden
                  "
                >
                  <span>view</span>

                  <ArrowRight
                    size={12}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="animate-[project-arrow-float_1.8s_ease-in-out_infinite]"
                  />
                </Link>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-md font-typewriter text-sm leading-7 text-ink/65">
              {project.description}
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-wine/15
                    bg-cream
                    px-3
                    py-1.5
                    font-typewriter
                    text-[9px]
                    uppercase
                    tracking-[0.13em]
                    text-wine/80
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* DESKTOP / TABLET VIEW PROJECT */}
            <div className="mt-8 hidden font-typewriter text-xs md:block">
              <Link
                to={`/projects/${project.slug}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-wine
                  pb-1
                  text-wine
                  transition-colors
                  duration-300
                  hover:border-pink
                  hover:text-pink
                "
              >
                <span>view project</span>

                <ArrowRight
                  size={13}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="animate-[project-arrow-float_1.8s_ease-in-out_infinite]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
