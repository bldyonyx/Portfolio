import { useEffect, useRef, useState } from 'react'

const handwrittenText = 'September 2026'

function GithubTimelineNote() {
  const [typedText, setTypedText] = useState('')
  const [hasStartedTyping, setHasStartedTyping] = useState(false)
  const [isTypingFinished, setIsTypingFinished] = useState(false)

  const noteRef = useRef(null)

  useEffect(() => {
    const element = noteRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedTyping(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!hasStartedTyping) return

    if (typedText.length >= handwrittenText.length) {
      setIsTypingFinished(true)
      return
    }

    const timeout = setTimeout(() => {
      setTypedText(
        handwrittenText.slice(0, typedText.length + 1)
      )
    }, 95)

    return () => clearTimeout(timeout)
  }, [hasStartedTyping, typedText])

  return (
    <div ref={noteRef} className="mt-2 min-h-[34px]">
      <span className="font-hand text-[2.15rem] leading-none text-wine">
        {typedText}

        {hasStartedTyping && (
          <span
            aria-hidden="true"
            className={`
              ml-1
              inline-block
              h-[0.8em]
              w-px
              translate-y-[0.08em]
              bg-wine/60
              ${
                isTypingFinished
                  ? 'invisible'
                  : 'animate-[handwritten-cursor_750ms_steps(1)_infinite]'
              }
            `}
          />
        )}
      </span>
    </div>
  )
}

export default GithubTimelineNote