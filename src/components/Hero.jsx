function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center px-8">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.2em]">
          front-end developer
        </p>

        <h1 className="text-6xl font-semibold leading-tight">
          Hi, I'm Maya.
          <br />
          I make little things
          <br />
          for the web. ♡
        </h1>

        <p className="mt-6 max-w-md text-lg">
          I'm learning React, JavaScript and Tailwind while building
          projects that feel useful, playful and a little personal.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full border border-black px-5 py-2"
          >
            see my work
          </a>

          <a
            href="https://github.com/bldyonyx"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black px-5 py-2"
          >
            github
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero