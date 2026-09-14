import { useEffect, useState } from 'react'

function ClickEffect() {
  const [bursts, setBursts] = useState([])

  useEffect(() => {
    const handleClick = (event) => {
      const id = `${Date.now()}-${Math.random()}`

      setBursts((current) => [
        ...current,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ])

      setTimeout(() => {
        setBursts((current) =>
          current.filter((burst) => burst.id !== id)
        )
      }, 700)
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{
            left: burst.x,
            top: burst.y,
          }}
        >
          {/* SHOCKWAVE */}
          <span className="click-shockwave absolute left-0 top-0 h-4 w-4 rounded-full border border-wine/70" />

          {/* CENTER HEART */}
          <span className="click-center-heart absolute left-0 top-0 font-typewriter text-base text-wine">
            ♡
          </span>

          {/* BURST LINES */}
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={`ray-${index}`}
              className="click-burst-ray absolute left-0 top-0 h-2.25 w-px bg-wine"
              style={{
                '--burst-angle': `${index * 45}deg`,
              }}
            />
          ))}

          {/* PARTICLES */}
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={`dot-${index}`}
              className="click-burst-dot absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-blush"
              style={{
                '--dot-angle': `${index * 90 + 22.5}deg`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ClickEffect