function ProjectCard({ project }) {
  return (
    <article>
      <h3>{project.title}</h3>

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
        GitHub
      </a>
    </article>
  )
}

export default ProjectCard