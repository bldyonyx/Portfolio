import { useParams } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <p>Project not found.</p>
  }

  return (
    <main>
      <p>project</p>

      <h1>{project.title}</h1>

      {project.status && (
        <p>{project.status}</p>
      )}

      <p>{project.description}</p>

      <div>
        {project.tech.map((item) => (
          <span key={item}>{item} </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </main>
  )
}

export default ProjectDetails