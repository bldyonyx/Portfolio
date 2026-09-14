import { useEffect, useRef, useState } from 'react'

const handwrittenText = 'same girl,\nbigger dreams'

function HandwrittenNote() {
  const [typedText, setTypedText] = useState('')
  const [hasStartedTyping, setHasStartedTyping] = useState(false)
  const [isTypingFinished, setIsTypingFinished] = useState(false)

  const handwrittenRef = useRef(null)

  // START WRITING WHEN THE NOTE ENTERS THE SCREEN
  useEffect(() => {
    const element = handwrittenRef.current

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

  // WRITE THE TEXT CHARACTER BY CHARACTER
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
    }, 85)

    return () => clearTimeout(timeout)
  }, [hasStartedTyping, typedText])

  return (
    <div
      ref={handwrittenRef}
      className="
        ml-[55%]
        mt-14
        hidden
        min-h-16
        min-w-45
        translate-x-20
        -translate-y-20
        -rotate-6
        lg:block
      "
    >
      <p className="whitespace-pre-line font-hand text-3xl leading-[0.95] text-wine/80">
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
      </p>
    </div>
  )
}

export default HandwrittenNote