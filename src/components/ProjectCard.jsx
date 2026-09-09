import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article>
      <div>
        <h3>{project.title}</h3>

        {project.status && (
          <span>{project.status}</span>
        )}
      </div>

      <p>{project.description}</p>

      <div>
        {project.tech.map((item) => (
          <span key={item}>{item} </span>
        ))}
      </div>

      <div>
        <Link to={`/projects/${project.slug}`}>
          View project
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard