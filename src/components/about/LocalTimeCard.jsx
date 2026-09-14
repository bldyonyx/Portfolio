import { useEffect, useMemo, useState } from 'react'

function LocalTimeCard() {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const time = useMemo(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Zurich',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'short',
    })

    const parts = formatter.formatToParts(currentTime)

    const getPart = (type) =>
      parts.find((part) => part.type === type)?.value ?? ''

    return {
      hours: getPart('hour'),
      minutes: getPart('minute'),
      seconds: getPart('second'),
      timezone: getPart('timeZoneName'),
    }
  }, [currentTime])

  return (
    <div
      className="
        -rotate-[1.5deg]
        border
        border-wine/15
        bg-pink/35
        px-5
        py-4
      "
    >
      {/* HEADER */}
      <div className="mb-3 flex items-center justify-between">
        <p className="font-typewriter text-[9px] uppercase tracking-[0.25em] text-wine/60">
          local time
        </p>

        {/* LIVE */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine/25" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine/60" />
          </span>

          <span className="font-typewriter text-[8px] uppercase tracking-[0.15em] text-wine/45">
            live
          </span>
        </div>
      </div>

      {/* CLOCK */}
      <div className="flex items-baseline whitespace-nowrap font-typewriter text-2xl tracking-[0.03em] text-wine">
        <span>{time.hours}</span>

        <span className="mx-[1px] animate-[pulse_1.8s_ease-in-out_infinite] text-wine/55">
          :
        </span>

        <span>{time.minutes}</span>

        <span className="mx-[1px] animate-[pulse_1.8s_ease-in-out_infinite] text-wine/55">
          :
        </span>

        <span className="text-lg text-wine/55">
          {time.seconds}
        </span>
      </div>

      {/* LOCATION */}
      <div className="mt-3 flex items-center justify-between gap-4 border-t border-wine/10 pt-2.5">
        <span className="font-typewriter text-[9px] text-ink/55">
          Switzerland
        </span>

        <span className="font-typewriter text-[8px] uppercase tracking-[0.12em] text-wine/45">
          {time.timezone}
        </span>
      </div>
    </div>
  )
}

export default LocalTimeCard