import skills from '../data/skills'
import SkillCard from './skills/SkillCard'

function Skills() {
  const skillGroups = [
    {
      number: '01',
      title: 'Frontend',
      skills: skills.frontend,
      className:
        'md:ml-6 md:mr-auto -rotate-[1.5deg] bg-paper',
      tapeClass:
        'left-12 -rotate-3 bg-blush/70',
    },
    {
      number: '02',
      title: 'Frameworks',
      skills: skills.frameworks,
      className:
        'md:ml-auto md:mr-8 rotate-[1.5deg] bg-cream',
      tapeClass:
        'right-14 rotate-3 bg-pink/70',
    },
    {
      number: '03',
      title: 'Tools + Workflow',
      skills: skills.tools,
      className:
        'md:ml-20 md:mr-auto -rotate-[0.8deg] bg-pink',
      tapeClass:
        'left-1/2 -translate-x-1/2 rotate-2 bg-paper/75',
    },
  ]

  return (
    <section
      id="skills"
      className="hero-dots relative overflow-visible bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            03 — my toolkit
          </p>

          <h2 className="font-display text-5xl md:text-6xl">
            Things I work with
          </h2>

          <p className="mx-auto mt-4 max-w-md font-typewriter text-sm leading-6 text-paper/60">
            tools I use to design, build,
            <br className="hidden sm:block" />
            experiment, and bring ideas to life ♡
          </p>
        </div>

        {/* TOOLKIT */}
        <div className="relative mx-auto max-w-5xl space-y-8 py-8">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              number={group.number}
              title={group.title}
              skills={group.skills}
              className={group.className}
              tapeClass={group.tapeClass}
            />
          ))}

          {/* DECORATIONS */}
          <span className="absolute left-[4%] top-[42%] hidden -rotate-12 font-hand text-4xl text-pink/65 md:block">
            ʚଓ
          </span>

          <span className="absolute bottom-[4%] right-[8%] hidden rotate-12 font-hand text-4xl text-pink/65 md:block">
            ♡
          </span>
        </div>
      </div>
    </section>
  )
}

export default Skills