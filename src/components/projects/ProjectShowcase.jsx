import useProjectShowcase from '../hooks/useProjectShowcase'
import ShowcaseControls from './ShowcaseControls'

function ProjectShowcase({ slides }) {
  const {
    activeIndex,
    activeSlide,
    isPaused,
    imageRef,
    changingTextRef,
    goToSlide,
    togglePause,
  } = useProjectShowcase(slides)

  if (!activeSlide) return null

  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">

        {/* SECTION INTRO */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-pink/70">
              project showcase
            </p>

            <h2 className="mt-2 font-display text-4xl text-paper md:text-5xl">
              A closer look
            </h2>
          </div>

          <p className="hidden max-w-xs text-right font-typewriter text-[10px] leading-5 text-paper/40 sm:block">
            autoplaying through the details ♡
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="relative">

          {/* BACK PAPER */}
          <div className="absolute inset-3 rotate-[0.7deg] border border-paper/10 bg-wine/15" />

          {/* MAIN PAPER */}
          <div className="relative border border-paper/15 bg-paper p-5 text-ink shadow-[10px_12px_0_rgba(0,0,0,0.15)] sm:p-7 lg:p-9">

            {/* TAPE */}
            <div className="absolute -top-4 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-2 bg-blush/65" />

            {/* TOP BAR */}
            <div className="mb-6 flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[9px] uppercase tracking-[0.22em] text-wine/45">
              <span>feature view</span>

              <span>
                {String(activeIndex + 1).padStart(2, '0')}
                {' / '}
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* ANIMATED CONTENT */}
            <div className="overflow-hidden">
              <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">

                {/* IMAGE AREA */}
                <div className="relative overflow-hidden border border-wine/15 bg-cream">

                  {/* SCREENSHOT */}
                  <div ref={imageRef}>
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="block max-h-[480px] w-full object-contain"
                    />
                  </div>

                  {/* IMAGE LABEL */}
                  <span className="absolute bottom-3 right-3 z-10 bg-paper/90 px-2 py-1 font-typewriter text-[8px] uppercase tracking-[0.18em] text-wine/60">
                    {activeSlide.eyebrow}
                  </span>
                </div>

                {/* RIGHT SIDE */}
                <div>

                  {/* EYEBROW */}
                  <div className="flex h-5 items-start">
                    <p className="font-typewriter text-[9px] uppercase leading-none tracking-[0.26em] text-wine/45">
                      {activeSlide.eyebrow}
                    </p>
                  </div>

                  {/* CHANGING TEXT */}
                  <div ref={changingTextRef}>
                    <h3 className="mt-3 font-display text-4xl text-wine md:text-5xl">
                      {activeSlide.title}
                    </h3>

                    <p className="mt-5 max-w-md font-typewriter text-xs leading-6 text-ink/65 sm:text-sm sm:leading-7">
                      {activeSlide.description}
                    </p>
                  </div>

                  {/* CONTROLS */}
                  <ShowcaseControls
                    slides={slides}
                    activeIndex={activeIndex}
                    isPaused={isPaused}
                    onGoToSlide={goToSlide}
                    onTogglePause={togglePause}
                  />

                  {/* DECORATION */}
                  <p className="mt-8 -rotate-2 font-hand text-2xl text-wine/65">
                    little details ♡
                  </p>
                </div>
              </div>
            </div>

            {/* HEART */}
            <span className="pointer-events-none absolute -bottom-4 -left-2 z-20 -rotate-12 font-hand text-3xl text-wine">
              ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase