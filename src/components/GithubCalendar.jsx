import { useEffect, useMemo, useRef, useState } from 'react'

const LEVEL_COLORS = [
  '#f8f1f2',
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
          throw new Error('Could not load GitHub contributions')
        }

        const data = await response.json()

        setContributions(data.contributions || [])
        setTotal(data.total?.lastYear || 0)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadContributions()
  }, [username])

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

  const monthLabels = useMemo(() => {
    const labels = []
    let previousMonth = null

    weeks.forEach((week, index) => {
      const firstDay = week.find(Boolean)

      if (!firstDay) return

      const date = new Date(`${firstDay.date}T00:00:00`)
      const month = date.getMonth()

      if (month !== previousMonth) {
        labels.push({
          index,
          label: date.toLocaleDateString('en-US', {
            month: 'short',
          }),
        })

        previousMonth = month
      }
    })

    return labels
  }, [weeks])

  const handleEnter = (event, day) => {
    if (!calendarRef.current) return

    const square = event.currentTarget.getBoundingClientRect()
    const calendar = calendarRef.current.getBoundingClientRect()

    setTooltip({
      day,
      x: square.left - calendar.left + square.width / 2,
      y: square.top - calendar.top,
    })
  }

  if (loading) {
    return (
      <div className="flex min-h-44 items-center justify-center font-typewriter text-xs text-wine/50">
        loading activity ♡
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-44 items-center justify-center font-typewriter text-xs text-wine/50">
        unable to load GitHub activity
      </div>
    )
  }

  return (
    <div ref={calendarRef} className="relative w-full">

      {/* MONTH LABELS */}
      <div
        className="mb-3 grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
        }}
      >
        {weeks.map((_, index) => {
          const month = monthLabels.find((item) => item.index === index)

          return (
            <div
              key={index}
              className="min-w-0 font-typewriter text-[9px] text-wine/65"
            >
              {month?.label || ''}
            </div>
          )
        })}
      </div>

      {/* CONTRIBUTION GRID */}
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
        }}
      >
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid grid-rows-7 gap-[2px]"
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
                  onMouseEnter={(event) => handleEnter(event, day)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={(event) => handleEnter(event, day)}
                  onBlur={() => setTooltip(null)}
                  className="aspect-square w-full rounded-[2px] transition duration-150 hover:scale-125 hover:ring-1 hover:ring-wine/40 focus:outline-none focus:ring-1 focus:ring-wine/50"
                  style={{
                    backgroundColor:
                      LEVEL_COLORS[day.level] || LEVEL_COLORS[0],
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>

      {/* BOTTOM INFO */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 font-typewriter text-[10px] text-wine">
        <span>
          {total} contributions in the last year
        </span>

        <div className="flex items-center gap-2">
          <span>Less</span>

          <div className="flex items-center gap-1">
            {LEVEL_COLORS.map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-[2px]"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <span>More</span>
        </div>
      </div>

      {/* TOOLTIP */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-30 w-max -translate-x-1/2 -translate-y-full border border-wine/20 bg-paper px-3 py-2 text-center shadow-[4px_5px_0_rgba(104,69,80,0.12)]"
          style={{
            left: tooltip.x,
            top: tooltip.y - 8,
          }}
        >
          <p className="font-typewriter text-[9px] text-wine/55">
            {new Date(`${tooltip.day.date}T00:00:00`).toLocaleDateString(
              'en-US',
              {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }
            )}
          </p>

          <p className="mt-1 font-typewriter text-[10px] text-wine">
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