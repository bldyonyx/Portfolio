import { Pause, Play } from 'lucide-react'

function ShowcaseControls({
  slides,
  activeIndex,
  isPaused,
  onGoToSlide,
  onTogglePause,
}) {
  return (
    <>
      {/* CONTROLS */}
      <div className="mt-8 flex flex-wrap items-center gap-4">

        {/* PROGRESS DOTS */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => onGoToSlide(index)}
              aria-label={`Show ${slide.title}`}
              className={`
                block
                h-2.5
                rounded-full
                transition-all
                duration-500
                ${
                  activeIndex === index
                    ? 'w-8 bg-wine'
                    : 'w-2.5 bg-wine/20 hover:bg-wine/40'
                }
              `}
            />
          ))}
        </div>

        {/* DIVIDER */}
        <span className="h-4 w-px bg-wine/15" />

        {/* PLAY / PAUSE */}
        <button
          type="button"
          onClick={onTogglePause}
          aria-label={
            isPaused
              ? 'Resume slideshow'
              : 'Pause slideshow'
          }
          className="
            inline-flex
            items-center
            gap-2
            border
            border-wine/20
            bg-cream
            px-3
            py-2
            font-typewriter
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-wine/65
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-wine/35
            hover:bg-pink/30
            hover:text-wine
          "
        >
          {isPaused ? (
            <Play
              size={13}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          ) : (
            <Pause
              size={13}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          )}

          <span>
            {isPaused ? 'play' : 'pause'}
          </span>
        </button>
      </div>

      {/* STATUS */}
      <p className="mt-4 font-typewriter text-[8px] uppercase tracking-[0.18em] text-wine/35">
        {isPaused
          ? 'showcase paused ♡'
          : 'changes automatically every 3 seconds'}
      </p>
    </>
  )
}

export default ShowcaseControls