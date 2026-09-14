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
      title="Back to top"
      className={`
        group
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
        transition-[opacity,transform,background-color,box-shadow]
        duration-300
        ease-out
        hover:bg-pink
        hover:shadow-[3px_4px_0_rgba(0,0,0,0.14)]
        focus-visible:outline
        focus-visible:outline-offset-4
        focus-visible:outline-pink
        ${
          showBackToTop
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }
      `}
    >
      <ArrowUp
        size={16}
        strokeWidth={1.7}
        aria-hidden="true"
        className="
          transition-transform
          duration-300
          ease-out
          group-hover:-translate-y-1
        "
      />
    </button>
  )
}

export default BackToTopButton