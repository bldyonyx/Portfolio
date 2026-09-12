import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="bg-paper px-6 py-24 text-ink lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-wine">
            02 — selected work
          </p>

          <h2 className="font-display text-5xl md:text-6xl">
            Things I've built
          </h2>

          <p className="mx-auto mt-4 max-w-md font-typewriter text-sm leading-6 text-wine/75">
            little projects where I learn, experiment,
            <br className="hidden sm:block" />
            and turn ideas into something real ♡
          </p>
        </div>

        {/* PROJECT STACK */}
        <div className="mx-auto max-w-5xl space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects