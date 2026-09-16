import DevelopingLabel from './DevelopingLabel'
import CurrentlyWindow from './CurrentlyWindow'
import selfie from '../../assets/images/mee.jpg'

function HeroCollage() {
  return (
    <div
      className="
        relative
        z-10
        mx-auto
        w-full
        max-w-55
        sm:max-w-61.25
        lg:mx-0
        lg:max-w-66.25
        lg:justify-self-end
        lg:-translate-x-12
        lg:-translate-y-1
        xl:-translate-x-20
        2xl:-translate-x-24
        min-[1800px]:-translate-x-28!
      "
    >
      <div className="relative">

        {/* BACK PAPER 1 */}
        <div className="absolute -left-3 -top-2 h-full w-full -rotate-3 border border-wine/15 bg-cream" />

        {/* BACK PAPER 2 */}
        <div className="absolute -right-3 top-2 h-full w-full rotate-3 border border-wine/15 bg-pink/30 sm:-right-4" />

        {/* MAIN POLAROID */}
        <div className="relative rotate-[-1.5deg] border border-wine/25 bg-paper p-2.5 pb-7 shadow-[7px_9px_18px_rgba(104,69,80,0.15)]">

          <DevelopingLabel />

          {/* PHOTO */}
          <div className="aspect-4/5 overflow-hidden bg-pink/30">
            <img
              src={selfie}
              alt="Maya"
              className="h-full w-full object-cover"
            />
          </div>

          {/* BOTTOM HEART */}
          <div className="absolute bottom-2 left-4 font-hand text-base text-wine/55">
            ♡
          </div>
        </div>

        {/* HEART TAB */}
        <div
          className="
            absolute
            -left-3
            top-12
            z-30
            flex
            flex-col
            gap-2
            rounded-full
            border
            border-wine/25
            bg-pink
            px-2.5
            py-3.5
            text-[9px]
            text-wine
            shadow-sm
            sm:-left-4
            sm:px-3
            sm:py-4
            sm:text-[10px]
          "
        >
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>

        {/* GOOD THINGS NOTE */}
        <div
          className="
            absolute
            -right-7
            top-9
            z-40
            rotate-[4deg]
            border
            border-wine/20
            bg-paper
            px-3
            py-2.5
            shadow-[4px_6px_12px_rgba(104,69,80,0.15)]
            sm:-right-10
            sm:px-4
            sm:py-3
            lg:right-0
            xl:-right-1
          "
        >
          <p className="font-typewriter text-[9px] leading-[1.55] text-ink sm:text-[10px]">
            good
            <br />
            things
            <br />
            take time
          </p>
        </div>

        {/* SMALL HEART */}
        <span className="pointer-events-none absolute -bottom-3 left-3 z-40 -rotate-12 font-hand text-3xl text-wine/60">
          ♡
        </span>

        <CurrentlyWindow />

        {/* SPARKLE */}
        <span
          className="
            pointer-events-none
            absolute
            -right-6
            -top-2
            text-lg
            text-wine/70
            sm:-right-10
            lg:right-0
          "
        >
          ✦
        </span>
      </div>
    </div>
  )
}

export default HeroCollage