import { useEffect, useRef, useState } from 'react'

function AnnotatedText({
  children,
  type = 'underline',
  className = '',
  delay = 0,
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.7,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <span
      ref={elementRef}
      className={`relative inline-block ${className}`}
    >
      {type === 'highlight' && (
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[0.08em]
            left-[-0.12em]
            z-0
            h-[0.55em]
            w-[calc(100%+0.24em)]
            origin-left
            -rotate-[1deg]
            bg-blush/35
          "
          style={{
            transform: isVisible
              ? 'scaleX(1) rotate(-1deg)'
              : 'scaleX(0) rotate(-1deg)',
            transition: `transform 1200ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          }}
        />
      )}

      <span className="relative z-10">
        {children}
      </span>

      {type === 'underline' && (
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-1
            left-0
            h-2
            w-full
            overflow-visible
            text-wine/55
          "
        >
          <path
            d="M2 6 C18 4 32 7 48 5.5 C66 4 81 7 98 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            style={{
              strokeDasharray: 120,
              strokeDashoffset: isVisible ? 0 : 120,
              transition: `stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
            }}
          />
        </svg>
      )}
    </span>
  )
}

export default AnnotatedText