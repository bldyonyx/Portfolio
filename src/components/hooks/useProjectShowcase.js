import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function useProjectShowcase(slides) {
  const imageRef = useRef(null)
  const changingTextRef = useRef(null)

  const intervalRef = useRef(null)
  const animatingRef = useRef(false)
  const activeIndexRef = useRef(0)
  const directionRef = useRef(1)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeSlide = slides[activeIndex] ?? null

  // Slide entering
  useLayoutEffect(() => {
    const image = imageRef.current
    const changingText = changingTextRef.current

    if (!image || !changingText || !activeSlide) return

    const direction = directionRef.current

    gsap.killTweensOf([image, changingText])

    const timeline = gsap.timeline({
      onComplete: () => {
        animatingRef.current = false
      },
    })

    timeline.fromTo(
      image,
      {
        opacity: 0,
        x: direction > 0 ? 24 : -24,
        scale: 0.995,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.58,
        ease: 'power3.out',
      }
    )

    timeline.fromTo(
      changingText,
      {
        opacity: 0,
        x: direction > 0 ? 18 : -18,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.52,
        ease: 'power3.out',
      },
      '<0.06'
    )

    return () => {
      timeline.kill()
    }
  }, [activeIndex, activeSlide])

  // Change slide
  const changeSlide = useCallback(
    (nextIndex, direction = 1) => {
      if (animatingRef.current) return
      if (nextIndex === activeIndexRef.current) return

      const image = imageRef.current
      const changingText = changingTextRef.current

      if (!image || !changingText) return

      animatingRef.current = true
      directionRef.current = direction

      gsap.killTweensOf([image, changingText])

      const timeline = gsap.timeline({
        onComplete: () => {
          activeIndexRef.current = nextIndex
          setActiveIndex(nextIndex)
        },
      })

      timeline.to(
        image,
        {
          opacity: 0,
          x: direction > 0 ? -22 : 22,
          scale: 0.995,
          duration: 0.32,
          ease: 'power2.inOut',
        },
        0
      )

      timeline.to(
        changingText,
        {
          opacity: 0,
          x: direction > 0 ? -16 : 16,
          duration: 0.28,
          ease: 'power2.inOut',
        },
        0.03
      )
    },
    []
  )

  // Next slide
  const goToNextSlide = useCallback(() => {
    if (!slides.length || animatingRef.current) return

    const current = activeIndexRef.current
    const nextIndex = (current + 1) % slides.length

    changeSlide(nextIndex, 1)
  }, [slides.length, changeSlide])

  // Specific slide
  const goToSlide = useCallback(
    (index) => {
      const current = activeIndexRef.current

      if (index === current) return

      const direction = index > current ? 1 : -1

      changeSlide(index, direction)
    },
    [changeSlide]
  )

  // Autoplay
  useEffect(() => {
    clearInterval(intervalRef.current)

    if (!isPaused && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        if (!animatingRef.current) {
          goToNextSlide()
        }
      }, 3000)
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isPaused, slides.length, goToNextSlide])

  // GSAP cleanup
  useEffect(() => {
    return () => {
      gsap.killTweensOf([
        imageRef.current,
        changingTextRef.current,
      ])
    }
  }, [])

  const togglePause = () => {
    setIsPaused((current) => !current)
  }

  return {
    activeIndex,
    activeSlide,
    isPaused,
    imageRef,
    changingTextRef,
    goToSlide,
    togglePause,
  }
}

export default useProjectShowcase