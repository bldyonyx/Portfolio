import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-11
        w-11
        items-center
        justify-center
        border
        border-paper/25
        bg-paper
        font-typewriter
        text-lg
        text-wine
        shadow-[4px_5px_0_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-pink
        hover:shadow-[6px_7px_0_rgba(0,0,0,0.2)]
        ${
          visible
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }
      `}
    >
      ↑
    </button>
  )
}

export default ScrollToTop