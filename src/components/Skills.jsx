import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills">
      <p>my toolkit</p>
      <h2>Things I work with ଓ</h2>

      <div>
        <div>
          <h3>Frontend</h3>
          {skills.frontend.map((skill) => (
            <span key={skill}>{skill} </span>
          ))}
        </div>

        <div>
          <h3>Frameworks</h3>
          {skills.frameworks.map((skill) => (
            <span key={skill}>{skill} </span>
          ))}
        </div>

        <div>
          <h3>Tools</h3>
          {skills.tools.map((skill) => (
            <span key={skill}>{skill} </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills