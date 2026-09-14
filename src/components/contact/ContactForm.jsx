import { useForm, ValidationError } from '@formspree/react'

function ContactForm({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm('moeqgwbq')

  if (!isOpen) return null

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-cream/75 px-5 backdrop-blur-[2px]">
      <div className="w-full max-w-md border border-wine/25 bg-paper text-ink shadow-[10px_12px_0_rgba(104,69,80,0.18)]">
        {/* WINDOW BAR */}
        <div className="flex items-center justify-between border-b border-wine/20 bg-pink/40 px-4 py-3">
          <div className="flex items-center gap-2 font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine">
            <span>♡</span>
            <span>new.message</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact form"
            className="font-typewriter text-sm text-wine transition-colors duration-300 hover:text-dark"
          >
            ×
          </button>
        </div>

        {state.succeeded ? (
          <div className="px-6 py-12 text-center md:px-7">
            <p className="font-hand text-4xl text-wine">
              message sent ♡
            </p>

            <p className="mx-auto mt-4 max-w-xs font-typewriter text-xs leading-6 text-ink/60">
              thank you for reaching out.
              <br />
              I&apos;ll get back to you soon.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 border-b border-wine/40 pb-1 font-typewriter text-xs text-wine transition-colors duration-300 hover:border-wine hover:text-dark"
            >
              close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 md:p-7"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine/60"
              >
                name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full border border-wine/20 bg-cream px-4 py-3 font-typewriter text-sm text-ink outline-none transition-colors duration-300 focus:border-wine"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine/60"
              >
                email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full border border-wine/20 bg-cream px-4 py-3 font-typewriter text-sm text-ink outline-none transition-colors duration-300 focus:border-wine"
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
                className="mb-2 block font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine/60"
              >
                message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full resize-none border border-wine/20 bg-cream px-4 py-3 font-typewriter text-sm text-ink outline-none transition-colors duration-300 focus:border-wine"
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
                w-full
                border
                border-wine
                bg-wine
                px-6
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
              {state.submitting
                ? 'sending...'
                : 'send message ♡'}
            </button>

            <p className="text-center font-hand text-2xl text-wine">
              talk soon ♡
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm