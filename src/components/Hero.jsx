import HeroIntro from './hero/HeroIntro'
import HeroCollage from './hero/HeroCollage'

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
              lg:min-h-[54vh]
              lg:grid-cols-[57%_43%]
              lg:items-center
              lg:gap-4
              lg:px-16
              lg:py-10
            "
          >
            <HeroIntro />

            <HeroCollage />
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