import { Link } from 'react-router-dom'

function ProjectCard({ project, index, total }) {
  const number = String(index + 1).padStart(2, '0')
  const totalProjects = String(total).padStart(2, '0')

  return (
    <article className="relative mx-auto max-w-5xl">
      {/* PAPER BEHIND */}
      <div className="absolute inset-4 rotate-[1.5deg] border border-wine/15 bg-cream" />

      {/* SECOND PAPER LAYER */}
      <div className="absolute inset-2 -rotate-[1deg] border border-wine/10 bg-pink/20" />

      {/* MAIN CARD */}
      <div className="relative border border-wine/20 bg-paper px-6 py-8 shadow-[8px_10px_0_rgba(104,69,80,0.08)] md:px-10 md:py-10 lg:px-12">
        {/* TAPE */}
        <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-blush/60" />

        {/* PROJECT COUNT */}
        <div className="mb-8 flex items-center justify-between font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/55">
          <span>project {number}</span>
          <span>
            {number} / {totalProjects}
          </span>
        </div>

        {/* CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* SCREENSHOT */}
          <div className="relative">
            <div className="border border-wine/15 bg-cream p-3">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-pink/30">
                <span className="font-typewriter text-xs uppercase tracking-[0.2em] text-wine/55">
                  project screenshot
                </span>
              </div>
            </div>

            {/* SIDE TAB */}
            <div className="absolute -left-5 top-1/2 flex -translate-y-1/2 flex-col gap-2 rounded-full border border-wine/20 bg-blush/70 px-2 py-4 font-typewriter text-[10px] text-wine">
              <span>♡</span>
              <span>♡</span>
              <span>♡</span>
            </div>

            {/* HEART */}
            <span className="absolute -bottom-5 -left-2 -rotate-12 font-hand text-3xl text-wine">
              ♡
            </span>
          </div>

          {/* INFO */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h3 className="font-display text-5xl md:text-6xl">
                {project.title}
              </h3>

              {project.status && (
                <span className="-rotate-2 border border-wine/25 bg-cream px-3 py-1 font-typewriter text-[10px] uppercase tracking-wider text-wine">
                  {project.status}
                </span>
              )}
            </div>

            <p className="max-w-md font-typewriter text-sm leading-7 text-ink/70">
              {project.description}
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="border border-wine/20 bg-cream px-3 py-1.5 font-typewriter text-[10px] uppercase tracking-wider text-wine"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="mt-8 flex items-center gap-6 font-typewriter text-xs">
              <Link
                to={`/projects/${project.slug}`}
                className="border-b border-wine pb-1 text-wine transition-all duration-300 hover:border-pink hover:text-pink"
              >
                view project →
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink/60 transition-colors duration-300 hover:text-wine"
              >
                github ↗
              </a>
            </div>

            {/* FUTURE ANIMATION HINT */}
            <p className="mt-10 font-hand text-2xl text-wine/65">
              keep scrolling ♡
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard