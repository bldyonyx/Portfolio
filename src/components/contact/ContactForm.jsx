import { useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Minus, Square, X } from 'lucide-react'
import gsap from 'gsap'

function ContactForm({ isOpen, onClose }) {
  const [state, handleSubmit, reset] = useForm('moeqgwbq')

  const overlayRef = useRef(null)
  const windowRef = useRef(null)

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose()
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      }
    )

    gsap.fromTo(
      windowRef.current,
      {
        opacity: 0,
        y: 12,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      }
    )

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onMouseDown={handleBackdropClick}
      className="
        fixed
        inset-0
        z-100
        flex
        items-center
        justify-center
        bg-dark/40
        px-5
        backdrop-blur-[2px]
      "
    >
      <div
        ref={windowRef}
        className="
          w-full
          max-w-107.5
          border
          border-wine/35
          bg-paper
          text-ink
          shadow-[9px_10px_0_rgba(104,69,80,0.2)]
        "
      >
        {/* WINDOW BAR */}
        <div className="flex items-center justify-between border-b border-wine/30 bg-pink/65 px-4 py-3">
          <div className="flex items-center gap-2 text-wine">
            <span className="font-typewriter text-[10px]">
              &lt;/&gt;
            </span>

            <span className="font-typewriter text-[10px] uppercase tracking-[0.16em]">
              new.message
            </span>
          </div>

          <div className="flex items-center gap-3 text-wine/70">
            <Minus size={12} strokeWidth={1.5} />

            <Square size={10} strokeWidth={1.5} />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close contact form"
              className="transition-colors duration-200 hover:text-dark"
            >
              <X size={12} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="flex items-center gap-2 border-b border-wine/15 bg-cream px-4 py-2.5">
          <span
            className={`
              h-1.5
              w-1.5
              rounded-full
              bg-wine/65
              ${state.submitting ? 'animate-pulse' : ''}
            `}
          />

          <span className="font-typewriter text-[9px] tracking-[0.12em] text-wine/65">
            {state.succeeded
              ? 'delivery complete'
              : state.submitting
                ? 'sending message...'
                : 'ready to write ♡'}
          </span>
        </div>

        {state.succeeded ? (
          /* SUCCESS */
          <div className="px-7 py-14 text-center">
            <p className="font-hand text-4xl text-wine">
              message sent
            </p>

            <p className="mx-auto mt-6 max-w-xs font-typewriter text-xs leading-6 text-ink/65">
              thank you for reaching out,
              <br />
              I&apos;ll get back to you soon !
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="
                mt-9
                border
                border-wine
                bg-wine
                px-6
                py-2.5
                font-typewriter
                text-xs
                text-paper
                shadow-[3px_4px_0_rgba(104,69,80,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-dark
              "
            >
              close window
            </button>
          </div>
        ) : (
          /* FORM */
          <form
            onSubmit={handleSubmit}
            className="space-y-5 px-6 py-7"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.18em] text-wine/80"
              >
                name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="your name"
                className="
                  w-full
                  border
                  border-wine/30
                  bg-cream/60
                  px-4
                  py-3
                  font-typewriter
                  text-sm
                  text-ink
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-wine/40
                  focus:border-wine
                  focus:bg-cream
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.18em] text-wine/80"
              >
                email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="
                  w-full
                  border
                  border-wine/30
                  bg-cream/60
                  px-4
                  py-3
                  font-typewriter
                  text-sm
                  text-ink
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-wine/40
                  focus:border-wine
                  focus:bg-cream
                "
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 font-typewriter text-[10px] text-wine"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.18em] text-wine/80"
              >
                message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="write something..."
                className="
                  w-full
                  resize-none
                  border
                  border-wine/30
                  bg-cream/60
                  px-4
                  py-3
                  font-typewriter
                  text-sm
                  text-ink
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-wine/40
                  focus:border-wine
                  focus:bg-cream
                "
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 font-typewriter text-[10px] text-wine"
              />
            </div>

            {/* GENERAL ERROR */}
            <ValidationError
              errors={state.errors}
              className="font-typewriter text-[10px] text-wine"
            />

            {/* SEND */}
            <button
              type="submit"
              disabled={state.submitting}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                border
                border-wine
                bg-wine
                px-5
                py-3
                font-typewriter
                text-xs
                text-paper
                shadow-[4px_5px_0_rgba(104,69,80,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-dark
                disabled:cursor-wait
                disabled:opacity-60
                disabled:hover:translate-y-0
              "
            >
              <span>
                {state.submitting
                  ? 'sending...'
                  : 'send message'}
              </span>

              <span
                className={
                  state.submitting
                    ? ''
                    : 'transition-transform duration-300 group-hover:translate-x-1'
                }
              >
                {state.submitting ? '•••' : '→'}
              </span>
            </button>

            {/* BOTTOM NOTE */}
            <div className="flex items-center justify-between border-t border-wine/15 pt-4">
              <span className="font-typewriter text-[9px] text-wine/55">
                inbox open
              </span>

              <span className="-rotate-2 font-hand text-2xl text-wine">
                talk soon ♡
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm