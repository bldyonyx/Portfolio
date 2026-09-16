import HeroIntro from './hero/HeroIntro'
import HeroCollage from './hero/HeroCollage'

function Hero() {
  return (
    <section
      id="top"
      className="hero-dots relative bg-dark px-4 pb-4 pt-9 text-ink sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* HERO WRAPPER */}
        <div className="relative">

          {/* PAPER BEHIND */}
          <div className="absolute inset-3 rotate-[1.5deg] border border-paper/10 bg-wine/25" />

          {/* MAIN PAPER */}
          <div className="relative bg-paper shadow-[10px_12px_0_rgba(0,0,0,0.16)]">

            {/* INNER BORDER */}
            <div className="pointer-events-none absolute inset-4 border border-wine/20" />

            {/* CONTENT */}
            <div
              className="
                relative
                grid
                gap-12
                px-6
                py-14
                sm:px-10
                sm:py-16
                lg:min-h-110
                lg:grid-cols-[52%_48%]
                lg:items-center
                lg:gap-10
                lg:px-16
                lg:py-10
                xl:grid-cols-[50%_50%]
                xl:gap-16
              "
            >
              <HeroIntro />

              <HeroCollage />
            </div>

            {/* CORNER DETAILS */}
            <span className="pointer-events-none absolute left-7 top-7 text-lg text-wine/65">
              ✦
            </span>

            <span className="pointer-events-none absolute bottom-6 right-7 hidden text-xs text-wine/65 min-[422px]:block">
              ♡⸝⸝
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero