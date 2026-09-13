import GithubCalendar from './GithubCalendar'

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
            04 — coding lately
          </p>

          <h2 className="font-display text-5xl text-paper md:text-6xl">
            My GitHub activity
          </h2>

          <p className="mt-4 max-w-lg font-typewriter text-sm leading-6 text-paper/60">
            a little look at my recent GitHub activity,
            <br className="hidden sm:block" />
            one contribution at a time ♡
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
            <div className="grid gap-10 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-10">

              {/* LEFT */}
              <div className="min-w-0">

                <div className="mb-6">
                  <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/55">
                    contribution activity
                  </p>

                  <p className="mt-2 font-hand text-2xl text-wine">
                    one commit at a time ♡
                  </p>
                </div>

                {/* CUSTOM LIVE CALENDAR */}
                <div className="border border-wine/15 bg-cream px-4 py-5">
                  <GithubCalendar username="bldyonyx" />
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative space-y-6">

                {/* PROFILE */}
                <div className="rotate-[1deg] border border-wine/20 bg-cream p-5 shadow-[5px_6px_0_rgba(104,69,80,0.08)]">
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

                {/* JOURNEY NOTE */}
                <div className="-rotate-[2deg] border border-wine/15 bg-pink/35 px-5 py-5">
                  <p className="mb-2 font-typewriter text-[9px] uppercase tracking-[0.22em] text-wine/45">
                    little timeline
                  </p>

                  <p className="font-hand text-[1.65rem] leading-7 text-wine">
                    joined GitHub in August ♡
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

                {/* DECORATION */}
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