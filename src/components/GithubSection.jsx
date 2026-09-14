import {
  ExternalLink,
  GitBranch,
  Minus,
  Square,
  X,
} from 'lucide-react'

import GithubCalendar from './github/GithubCalendar'
import GithubProfile from './github/GithubProfile'
import GithubTimelineNote from './github/GithubTimelineNote'

function GithubSection() {
  return (
    <section
      id="github"
      className="hero-dots bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl min-[1800px]:max-w-6xl">
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
        <div className="relative">
          {/* BACK PAPER */}
          <div className="absolute inset-3 rotate-[1.2deg] border border-paper/10 bg-wine/25" />

          {/* MAIN WINDOW */}
          <div className="relative overflow-hidden border border-paper/20 bg-paper text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)]">
            {/* WINDOW BAR */}
            <div className="flex items-center justify-between border-b border-wine/20 bg-pink/35 px-5 py-3">
              <div className="flex items-center gap-2 text-wine">
                <GitBranch size={12} strokeWidth={1.5} />

                <span className="font-typewriter text-[10px] uppercase tracking-[0.18em]">
                  github.activity
                </span>
              </div>

              <div className="flex items-center gap-3 text-wine/60">
                <Minus size={12} strokeWidth={1.5} />
                <Square size={10} strokeWidth={1.5} />
                <X size={12} strokeWidth={1.5} />
              </div>
            </div>

            {/* STATUS BAR */}
            <div className="flex items-center gap-2 border-b border-wine/10 bg-paper px-5 py-2.5">
              <span className="font-typewriter text-[10px] text-wine/45">
                &gt;
              </span>

              <span className="font-typewriter text-[9px] tracking-[0.12em] text-wine/45">
                fetching contributions...
              </span>

              <span className="ml-auto flex items-center gap-2 font-typewriter text-[9px] text-wine/45">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine/25" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine/60" />
                </span>

                synced
              </span>
            </div>

            {/* WINDOW CONTENT */}
            <div className="grid gap-12 px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
              {/* LEFT */}
              <div className="min-w-0">
                <div className="mb-7">
                  <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-wine/55">
                    contribution activity
                  </p>

                  <p className="mt-2 font-hand text-2xl text-wine">
                    one commit at a time ♡
                  </p>
                </div>

                {/* CALENDAR */}
                <div className="relative">
                  <div className="absolute -inset-1 rotate-[0.7deg] bg-pink/25" />

                  <div className="relative border border-wine/15 bg-cream px-4 py-5 shadow-[5px_6px_0_rgba(104,69,80,0.07)]">
                    <GithubCalendar username="bldyonyx" />
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                <GithubProfile username="bldyonyx" />

                {/* NOTE */}
                <div className="mt-8 rotate-[-1.5deg] border border-wine/15 bg-pink/30 px-5 py-5 shadow-[4px_5px_0_rgba(104,69,80,0.06)]">
                  <p className="mb-3 font-typewriter text-[9px] uppercase tracking-[0.22em] text-wine/45">
                    little timeline
                  </p>

                  <p className="font-typewriter text-[11px] leading-5 text-wine/70">
                    joined GitHub on : 
                  </p>

                  <GithubTimelineNote />
                </div>

                {/* LINK */}
                <a
                  href="https://github.com/bldyonyx"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-wine pb-1 font-typewriter text-xs text-wine transition-all duration-300 hover:-translate-y-1 hover:border-pink hover:text-pink"
                >
                  <span>view my GitHub</span>

                  <ExternalLink
                    size={12}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* DECORATION */}
                <span className="absolute -bottom-4 right-1 rotate-12 font-hand text-3xl text-wine/60">
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
