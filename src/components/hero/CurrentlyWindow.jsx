import { useEffect, useState } from 'react'
import {
  Code2,
  Minus,
  Square,
  X,
} from 'lucide-react'

const currentActivities = [
  'learning React',
  'building projects',
  'trying new ideas',
  'breaking CSS',
  'learning again',
]

function CurrentlyWindow() {
  const [activityIndex, setActivityIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex(
        (currentIndex) =>
          (currentIndex + 1) % currentActivities.length
      )
    }, 2200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="
        absolute
        -bottom-6
        -right-8
        z-40
        w-40
        rotate-[1deg]
        border
        border-wine/30
        bg-paper
        shadow-[5px_7px_16px_rgba(104,69,80,0.16)]
        sm:-right-10
        lg:-bottom-5
        lg:-right-14
      "
    >
      {/* WINDOW HEADER */}
      <div className="flex h-6 items-center justify-between border-b border-wine/25 bg-pink/45 px-2">
        <div className="flex items-center gap-1.5">
          <Code2
            size={11}
            strokeWidth={1.6}
            className="text-wine"
            aria-hidden="true"
          />

          <span className="font-typewriter text-[8px] text-wine/80">
            currently.exe
          </span>
        </div>

        <div className="flex items-center gap-1 text-wine">
          <Minus
            size={9}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <Square
            size={7}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <X
            size={9}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* WINDOW CONTENT */}
      <div className="px-3 py-2.5">
        {/* CURRENT ACTIVITY */}
        <div className="whitespace-nowrap font-typewriter text-[9px] leading-4 text-ink/85">
          <span className="mr-1 text-wine">
            &gt;
          </span>

          <span
            key={activityIndex}
            className="animate-[currently-enter_450ms_ease-out]"
          >
            {currentActivities[activityIndex]}
          </span>

          <span className="ml-[2px] animate-[cursor-blink_900ms_steps(1)_infinite] text-wine">
            _
          </span>
        </div>

        {/* DIVIDER */}
        <div className="my-1.5 border-t border-wine/10" />

        {/* STATUS */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine/35" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine/70" />
          </span>

          <span className="whitespace-nowrap font-typewriter text-[8px] text-ink/65">
            learning in progress
          </span>

          <span className="ml-auto font-hand text-xs text-wine/50">
            ♡
          </span>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyWindow