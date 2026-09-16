import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const LEVEL_COLORS = [
  '#e8d8dc',
  '#e3c4ca',
  '#d7aeb8',
  '#9b7882',
  '#684550',
]

function GithubCalendar({ username }) {
  const [contributions, setContributions] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tooltip, setTooltip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  const calendarRef = useRef(null)

  useEffect(() => {
    async function loadContributions() {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        )

        if (!response.ok) {
          throw new Error(
            'Could not load GitHub contributions'
          )
        }

        const data = await response.json()

        setContributions(data.contributions || [])
        setTotal(data.total?.lastYear || 0)
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadContributions()
  }, [username])

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 767px)'
    )

    const updateLayout = () => {
      setIsMobile(mediaQuery.matches)
    }

    updateLayout()

    mediaQuery.addEventListener('change', updateLayout)

    return () => {
      mediaQuery.removeEventListener(
        'change',
        updateLayout
      )
    }
  }, [])

  const weeks = useMemo(() => {
    if (!contributions.length) return []

    const groupedWeeks = []
    let currentWeek = []

    contributions.forEach((day, index) => {
      const date = new Date(`${day.date}T00:00:00`)
      const dayOfWeek = date.getDay()

      if (index === 0 && dayOfWeek !== 0) {
        currentWeek = Array(dayOfWeek).fill(null)
      }

      currentWeek.push(day)

      if (currentWeek.length === 7) {
        groupedWeeks.push(currentWeek)
        currentWeek = []
      }
    })

    if (currentWeek.length) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }

      groupedWeeks.push(currentWeek)
    }

    return groupedWeeks
  }, [contributions])

  const visibleWeeks = useMemo(() => {
    if (!isMobile) return weeks

    return weeks.slice(-24)
  }, [weeks, isMobile])

  const monthLabels = useMemo(() => {
    const labels = new Map()
    let previousMonth = null

    visibleWeeks.forEach((week, index) => {
      const firstDay = week.find(Boolean)

      if (!firstDay) return

      const date = new Date(`${firstDay.date}T00:00:00`)
      const month = date.getMonth()

      if (month !== previousMonth) {
        labels.set(
          index,
          date.toLocaleDateString('en-US', {
            month: 'short',
          })
        )

        previousMonth = month
      }
    })

    return labels
  }, [visibleWeeks])

  const handleEnter = (event, day) => {
    if (!calendarRef.current) return

    const square =
      event.currentTarget.getBoundingClientRect()

    const calendar =
      calendarRef.current.getBoundingClientRect()

    setTooltip({
      day,
      x:
        square.left -
        calendar.left +
        square.width / 2,
      y: square.top - calendar.top,
    })
  }

  if (loading) {
    return (
      <div className="flex min-h-48 items-center justify-center">
        <div className="flex items-center gap-2 font-typewriter text-xs text-wine/65">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine/25" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-wine/70" />
          </span>

          loading activity ♡
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-48 items-center justify-center font-typewriter text-xs text-wine/65">
        unable to load GitHub activity
      </div>
    )
  }

  return (
    <div
      ref={calendarRef}
      className="relative w-full"
    >
      {/* MOBILE LABEL */}
      <p className="mb-3 font-typewriter text-[9px] uppercase tracking-[0.16em] text-wine/45 md:hidden">
        recent activity
      </p>

      {/* MONTH LABELS */}
      <div
        className="mb-3 grid"
        style={{
          gridTemplateColumns: `repeat(${visibleWeeks.length}, minmax(0, 1fr))`,
          gap: isMobile ? '2px' : 'clamp(1px, 0.25vw, 3px)',
        }}
      >
        {visibleWeeks.map((_, index) => (
          <div
            key={index}
            className="min-w-0 whitespace-nowrap font-typewriter text-[8px] text-wine/65 sm:text-[9px]"
          >
            {monthLabels.get(index) || ''}
          </div>
        ))}
      </div>

      {/* CONTRIBUTION GRID */}
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: `repeat(${visibleWeeks.length}, minmax(0, 1fr))`,
          gap: isMobile ? '2px' : 'clamp(1px, 0.25vw, 3px)',
        }}
      >
        {visibleWeeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid min-w-0 grid-rows-7"
            style={{
              gap: isMobile
                ? '2px'
                : 'clamp(1px, 0.25vw, 3px)',
            }}
          >
            {week.map((day, dayIndex) => {
              if (!day) {
                return (
                  <div
                    key={dayIndex}
                    className="aspect-square w-full"
                  />
                )
              }

              return (
                <button
                  key={day.date}
                  type="button"
                  aria-label={`${day.count} contributions on ${day.date}`}
                  onMouseEnter={(event) =>
                    handleEnter(event, day)
                  }
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={(event) =>
                    handleEnter(event, day)
                  }
                  onBlur={() => setTooltip(null)}
                  className="
                    aspect-square
                    w-full
                    min-w-0
                    rounded-xs
                    transition
                    duration-150
                    hover:z-10
                    hover:scale-[1.4]
                    hover:ring-1
                    hover:ring-wine/60
                    focus:z-10
                    focus:outline-none
                    focus:ring-1
                    focus:ring-wine/70
                  "
                  style={{
                    backgroundColor:
                      LEVEL_COLORS[day.level] ||
                      LEVEL_COLORS[0],
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>

      {/* BOTTOM INFO */}
      <div className="mt-6 flex flex-col items-start gap-3 border-t border-wine/10 pt-4 font-typewriter text-[10px] text-wine/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <span>
          <strong className="font-normal text-wine">
            {total}
          </strong>{' '}
          contributions in the last year
        </span>

        <div className="flex items-center gap-2">
          <span className="text-wine/55">
            Less
          </span>

          <div className="flex items-center gap-1">
            {LEVEL_COLORS.map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-xs border border-wine/10"
                style={{
                  backgroundColor: color,
                }}
              />
            ))}
          </div>

          <span className="text-wine/55">
            More
          </span>
        </div>
      </div>

      {/* TOOLTIP */}
      {tooltip && (
        <div
          className="
            pointer-events-none
            absolute
            z-30
            w-max
            max-w-[calc(100%-1rem)]
            -translate-x-1/2
            -translate-y-full
            border
            border-wine/25
            bg-paper
            px-3
            py-2.5
            text-center
            shadow-[4px_5px_0_rgba(104,69,80,0.14)]
          "
          style={{
            left: tooltip.x,
            top: tooltip.y - 9,
          }}
        >
          <p className="font-typewriter text-[10px] text-wine/60">
            {new Date(
              `${tooltip.day.date}T00:00:00`
            ).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>

          <p className="mt-1 font-typewriter text-[11px] text-wine">
            {tooltip.day.count}{' '}
            {tooltip.day.count === 1
              ? 'contribution'
              : 'contributions'}{' '}
            ♡
          </p>
        </div>
      )}
    </div>
  )
}

export default GithubCalendar