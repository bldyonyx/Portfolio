import { ArrowUp } from 'lucide-react'

function BackToTopButton({
  showBackToTop,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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
        border-paper/20
        bg-paper
        text-wine
        shadow-[4px_5px_0_rgba(0,0,0,0.16)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-pink
        ${
          showBackToTop
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }
      `}
    >
      <ArrowUp
        size={16}
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </button>
  )
}

export default BackToTopButton