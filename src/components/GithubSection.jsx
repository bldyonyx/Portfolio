function GithubSection() {
  return (
    <section
      id="github"
      className="hero-dots bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-14">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            03 — coding lately
          </p>

          <h2 className="font-display text-5xl text-paper md:text-6xl">
            My GitHub activity
          </h2>

          <p className="mt-4 max-w-lg font-typewriter text-sm leading-6 text-paper/60">
            a little snapshot of what I&apos;ve been building,
            learning, and experimenting with lately ♡
          </p>
        </div>

        {/* GITHUB WINDOW */}
        <div className="relative mx-auto max-w-5xl">

          {/* BACK PAPER */}
          <div className="absolute inset-3 rotate-[1.5deg] border border-paper/10 bg-wine/25" />

          {/* MAIN WINDOW */}
          <div className="relative overflow-hidden border border-paper/20 bg-paper text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)]">

            {/* WINDOW BAR */}
            <div className="flex items-center justify-between border-b border-wine/20 bg-pink/35 px-5 py-3">
              <div className="flex items-center gap-2 font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine">
                <span>♡</span>
                <span>github.activity</span>
              </div>

              <div className="flex items-center gap-3 font-typewriter text-xs text-wine">
                <span>—</span>
                <span>□</span>
                <span>×</span>
              </div>
            </div>

            {/* WINDOW CONTENT */}
            <div className="grid gap-10 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[1.35fr_0.65fr]">

              {/* LEFT — CONTRIBUTIONS */}
              <div>
                <div className="mb-6">
                  <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/55">
                    contribution activity
                  </p>

                  <p className="mt-2 font-hand text-2xl text-wine">
                    one commit at a time ♡
                  </p>
                </div>

                {/* GRAPH AREA */}
                <div className="border border-wine/15 bg-cream p-5">
                  <div className="flex min-h-48 items-center justify-center border border-dashed border-wine/20 bg-paper/60 px-6 text-center">
                    <div>
                      <p className="font-typewriter text-xs text-wine/55">
                        GitHub contribution graph
                      </p>

                      <p className="mt-2 font-typewriter text-[10px] text-wine/35">
                        live activity coming here ♡
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — INFO */}
              <div className="relative space-y-6">

                {/* USER CARD */}
                <div className="rotate-[1deg] border border-wine/20 bg-cream p-6 shadow-[5px_6px_0_rgba(104,69,80,0.08)]">
                  <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/50">
                    profile
                  </p>

                  <p className="mt-3 font-display text-3xl text-wine">
                    bldyonyx
                  </p>

                  <p className="mt-3 font-typewriter text-xs leading-6 text-ink/65">
                    learning · building · improving
                  </p>
                </div>

                {/* NOTE */}
                <div className="-rotate-[2deg] border border-wine/15 bg-pink/35 px-6 py-5">
                  <p className="font-hand text-2xl leading-7 text-wine">
                    progress over
                    <br />
                    perfection ♡
                  </p>
                </div>

                {/* LINK */}
                <a
                  href="https://github.com/bldyonyx"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-b border-wine pb-1 font-typewriter text-xs text-wine transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink"
                >
                  view my GitHub ↗
                </a>

                <span className="absolute -bottom-4 -right-2 rotate-12 font-hand text-4xl text-wine">
                  ᛝ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubSection