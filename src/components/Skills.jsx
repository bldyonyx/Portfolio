import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills">
      <p>my toolkit</p>
      <h2>Things I work with ♡</h2>

      <div>
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills