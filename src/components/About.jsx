function About() {
  return (
    <section
      id="about"
      className="hero-dots bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-14">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            01 — about me
          </p>

          <h2 className="font-display text-5xl text-paper md:text-6xl">
            A little about me
          </h2>
        </div>

        {/* ABOUT WINDOW */}
        <div className="relative mx-auto max-w-5xl">
          {/* paper behind */}
          <div className="absolute inset-3 rotate-[1.5deg] border border-paper/10 bg-wine/25" />

          <div className="relative overflow-hidden border border-paper/20 bg-paper text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)]">
            {/* WINDOW BAR */}
            <div className="flex items-center justify-between border-b border-wine/20 bg-pink/35 px-5 py-3">
              <div className="flex items-center gap-2 font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine">
                <span>⌘</span>
                <span>about.txt</span>
              </div>

              <div className="flex items-center gap-3 font-typewriter text-xs text-wine">
                <span>—</span>
                <span>□</span>
                <span>×</span>
              </div>
            </div>

            {/* WINDOW CONTENT */}
            <div className="grid gap-12 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
              {/* TEXT */}
              <div>
                <p className="mb-6 font-typewriter text-xs uppercase tracking-[0.25em] text-wine/65">
                  hi, i&apos;m maya ♡
                </p>

                <div className="space-y-6 font-typewriter text-sm leading-7 text-ink/75 md:text-base md:leading-8">
                  <p>
                    I&apos;m a student who recently found her way into
                    front-end development. I started learning by building small
                    projects and quickly discovered how much I enjoy turning an
                    idea into something I can actually see and interact with.
                  </p>

                  <p>
                    I especially love the creative side of coding :
                    experimenting with colors, layouts, and little details until
                    a project starts to feel like my own.
                  </p>
                </div>

                <p className="mt-8 font-hand text-3xl text-wine">
                  learning as I go ♡
                </p>
              </div>

              {/* SIDE CARDS */}
              <div className="relative space-y-6">
                {/* LANGUAGES */}
                <div className="rotate-[1deg] border border-wine/20 bg-cream p-6 shadow-[5px_6px_0_rgba(104,69,80,0.08)]">
                  <p className="mb-5 font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/65">
                    languages
                  </p>

                  <div className="space-y-4 font-typewriter text-sm">
                    <div className="flex items-center justify-between gap-6">
                      <span>French</span>
                      <span className="text-wine/60">native</span>
                    </div>

                    <div className="border-t border-wine/10" />

                    <div className="flex items-center justify-between gap-6">
                      <span>English</span>
                      <span className="text-wine/60">fluent</span>
                    </div>
                  </div>
                </div>

                {/* LITTLE NOTE */}
                <div className="-rotate-[2deg] border border-wine/15 bg-pink/35 px-6 py-5">
                  <p className="font-hand text-2xl leading-7 text-wine">
                    curious mind,
                    <br />
                    creative heart ♡
                  </p>
                </div>

                {/* DECORATIVE HEART */}
                <span className="absolute -bottom-5 -right-2 rotate-12 font-hand text-4xl text-pink">
                  ♡
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About