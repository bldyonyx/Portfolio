import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects">
      <p>selected work</p>
      <h2>Things I've built ♡</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects