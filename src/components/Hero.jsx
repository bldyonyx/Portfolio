import bow from '../assets/decorations/bow.png'

function Hero() {
  return (
    <section
      id="top"
      className="hero-dots relative bg-dark px-4 pb-4 pt-9 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* MAIN PAPER */}
        <div className="relative bg-paper shadow-[0_24px_70px_rgba(20,12,14,0.24)]">

          {/* INNER BORDER */}
          <div className="pointer-events-none absolute inset-4 border border-wine/20" />

          {/* TOP BOW */}
          <img
            src={bow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-30 w-44 -translate-x-1/2 -translate-y-[32%] opacity-90 sm:w-48 lg:w-52"
          />

          {/* CONTENT */}
          <div className="relative grid min-h-[54vh] items-center gap-4 px-10 py-10 md:grid-cols-[57%_43%] lg:px-16">

            {/* LEFT */}
            <div className="relative z-10 w-full translate-x-7 translate-y-6 lg:pl-8 xl:pl-12">

              {/* DESIGN CODE LEARNING */}
              <div className="mb-4 flex items-center gap-4">
                <span className="text-lg text-wine">
                  ✦
                </span>

                <p className="font-typewriter text-xs uppercase tracking-[0.28em] text-mauve">
                  design ・ code ・ learning
                </p>
              </div>

              {/* TITLE */}
              <h1 className="whitespace-nowrap font-display text-[clamp(3.6rem,5.45vw,5.9rem)] font-normal leading-[0.92] text-ink">
                Hi, I&apos;m Maya.
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-lg font-typewriter text-sm leading-[1.7] text-ink/80 md:text-base">
                Student exploring front-end development,
                <br />
                one project at a time.
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-dark px-7 py-3 font-typewriter text-xs text-paper transition duration-300 hover:-translate-y-1 hover:bg-wine"
                >
                  see my work →
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-dark/70 bg-paper px-7 py-3 font-typewriter text-xs transition duration-300 hover:-translate-y-1 hover:bg-cream"
                >
                  about me
                </a>
              </div>

              {/* HANDWRITTEN NOTE */}
              <p className="ml-[55%] mt-14 hidden w-fit -rotate-6 font-hand text-3xl leading-[0.95] text-wine/80 lg:block">
                same girl,
                <br />
                bigger dreams ♡
              </p>
            </div>

            {/* RIGHT COLLAGE */}
            <div className="relative z-10 mx-auto ml-4 w-full max-w-[250px] -translate-y-1 lg:ml-8 lg:max-w-[265px]">

              <div className="relative">

                {/* BACK PAPER 1 */}
                <div className="absolute -left-3 -top-2 h-full w-full -rotate-[3deg] border border-wine/15 bg-cream" />

                {/* BACK PAPER 2 */}
                <div className="absolute -right-4 top-2 h-full w-full rotate-[3deg] border border-wine/15 bg-pink/30" />

                {/* MAIN POLAROID */}
                <div className="relative -rotate-[1.5deg] border border-wine/25 bg-paper p-2.5 pb-7 shadow-[7px_9px_18px_rgba(104,69,80,0.15)]">

                  {/* DEVELOPING LABEL */}
                  <div className="absolute left-4 top-4 z-20 rotate-[-2deg] bg-wine/45 px-3 py-1">
                    <span className="font-typewriter text-[8px] text-paper">
                      ♡ developing...
                    </span>
                  </div>

                  {/* PHOTO */}
                  <div className="aspect-[4/5] overflow-hidden bg-pink/30">
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#ead7da,#f4e8e9)]">
                      <span className="text-3xl text-wine/80">
                        ꒰ ᧔ෆ᧓ ꒱
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM HEART */}
                  <div className="absolute bottom-2 left-4 font-hand text-base text-wine/55">
                    ♡
                  </div>
                </div>

                {/* HEART TAB */}
                <div className="absolute -left-4 top-12 z-30 flex flex-col gap-2 rounded-full border border-wine/25 bg-pink px-3 py-4 text-[10px] text-wine shadow-sm">
                  <span>♥</span>
                  <span>♥</span>
                  <span>♥</span>
                </div>

                {/* GOOD THINGS NOTE */}
                <div className="absolute -right-12 top-9 z-40 rotate-[4deg] border border-wine/20 bg-paper px-4 py-3 shadow-[4px_6px_12px_rgba(104,69,80,0.15)]">
                  <p className="font-typewriter text-[10px] leading-[1.55] text-ink">
                    good
                    <br />
                    things
                    <br />
                    take time
                  </p>

                  <span className="mt-1 block text-[10px] text-wine">
                    ♡
                  </span>
                </div>

                {/* SMALL HEART DECORATION */}
                <span className="pointer-events-none absolute -bottom-3 left-3 z-40 -rotate-12 font-hand text-3xl text-wine/60">
                  ♡
                </span>

                {/* CURRENTLY WINDOW */}
                <div className="absolute -bottom-6 -right-14 z-40 w-36 border border-wine/30 bg-paper shadow-[4px_6px_14px_rgba(104,69,80,0.15)]">

                  {/* WINDOW HEADER */}
                  <div className="flex h-6 items-center justify-between border-b border-wine/25 bg-pink/45 px-2">
                    <span className="font-typewriter text-[9px] text-wine">
                      ⌘
                    </span>

                    <div className="flex gap-1.5 font-typewriter text-[8px] text-wine">
                      <span>—</span>
                      <span>□</span>
                      <span>×</span>
                    </div>
                  </div>

                  {/* WINDOW CONTENT */}
                  <div className="px-4 py-3 font-typewriter text-[9px] leading-[1.45] text-ink/85">
                    <p>currently:</p>
                    <p>learning</p>
                    <p>building</p>
                    <p>improving</p>
                    <p className="mt-1">♡</p>
                  </div>
                </div>

                {/* SPARKLE */}
                <span className="pointer-events-none absolute -right-10 -top-2 text-lg text-wine/70">
                  ✦
                </span>
              </div>
            </div>
          </div>

          {/* CORNER DETAILS */}
          <span className="pointer-events-none absolute left-7 top-7 text-lg text-wine/65">
            ✦
          </span>

          <span className="pointer-events-none absolute bottom-6 right-7 text-xs text-wine/65">
            ♡⸝⸝
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero