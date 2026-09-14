import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
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

  // SLIDE ENTERING
  useLayoutEffect(() => {
    const image = imageRef.current
    const changingText = changingTextRef.current

    if (!image || !changingText || !activeSlide) return

    const direction = directionRef.current

    gsap.killTweensOf([
      image,
      changingText,
    ])

    const timeline = gsap.timeline({
      onComplete: () => {
        animatingRef.current = false
      },
    })

    // IMAGE ENTER
    timeline.fromTo(
      image,
      {
        opacity: 0,
        x: direction > 0 ? 10 : -10,
        y: 6,
        scale: 1.012,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
      }
    )

    // TEXT ENTER
    timeline.fromTo(
      changingText,
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.52,
        ease: 'power2.out',
      },
      '<0.08'
    )

    return () => {
      timeline.kill()
    }
  }, [activeIndex, activeSlide])

  // CHANGE SLIDE
  const changeSlide = useCallback(
    (nextIndex, direction = 1) => {
      if (animatingRef.current) return
      if (nextIndex === activeIndexRef.current) return

      const image = imageRef.current
      const changingText = changingTextRef.current

      if (!image || !changingText) return

      animatingRef.current = true
      directionRef.current = direction

      gsap.killTweensOf([
        image,
        changingText,
      ])

      const timeline = gsap.timeline({
        onComplete: () => {
          activeIndexRef.current = nextIndex
          setActiveIndex(nextIndex)
        },
      })

      // IMAGE LEAVING
      timeline.to(
        image,
        {
          opacity: 0,
          x: direction > 0 ? -8 : 8,
          y: -4,
          scale: 0.992,
          duration: 0.38,
          ease: 'power2.inOut',
        },
        0
      )

      // TEXT LEAVING
      timeline.to(
        changingText,
        {
          opacity: 0,
          y: -6,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        0.04
      )
    },
    []
  )

  // NEXT SLIDE
  const goToNextSlide = useCallback(() => {
    if (
      !slides.length ||
      animatingRef.current
    ) {
      return
    }

    const current =
      activeIndexRef.current

    const nextIndex =
      (current + 1) % slides.length

    changeSlide(
      nextIndex,
      1
    )
  }, [
    slides.length,
    changeSlide,
  ])

  // SPECIFIC SLIDE
  const goToSlide = useCallback(
    (index) => {
      const current =
        activeIndexRef.current

      if (index === current) return

      const direction =
        index > current ? 1 : -1

      changeSlide(
        index,
        direction
      )
    },
    [changeSlide]
  )

  // AUTOPLAY
  useEffect(() => {
    clearInterval(
      intervalRef.current
    )

    if (
      !isPaused &&
      slides.length > 1
    ) {
      intervalRef.current =
        setInterval(() => {
          if (!animatingRef.current) {
            goToNextSlide()
          }
        }, 3000)
    }

    return () => {
      clearInterval(
        intervalRef.current
      )
    }
  }, [
    isPaused,
    slides.length,
    goToNextSlide,
  ])

  // GSAP CLEANUP
  useEffect(() => {
    return () => {
      gsap.killTweensOf([
        imageRef.current,
        changingTextRef.current,
      ])
    }
  }, [])

  const togglePause = () => {
    setIsPaused(
      (current) => !current
    )
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