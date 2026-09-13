import { useState } from 'react'

function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section
      id="contact"
      className="hero-dots relative bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-typewriter text-xs uppercase tracking-[0.3em] text-pink/80">
            05 — say hello
          </p>

          <h2 className="font-display text-5xl text-paper md:text-6xl">
            Let&apos;s get in touch
          </h2>

          <p className="mx-auto mt-4 max-w-lg font-typewriter text-sm leading-6 text-paper/60">
            If you&apos;d like to talk about a project, coding,
            <br className="hidden sm:block" />
            or just say hi, feel free to reach out ♡
          </p>
        </div>

        {/* LETTER AREA */}
        <div className="relative mx-auto max-w-3xl">

          {/* PAPER BEHIND */}
          <div className="absolute inset-3 rotate-[1.5deg] border border-paper/10 bg-wine/25" />

          {/* MAIN PAPER */}
          <div className="relative border border-wine/20 bg-cream px-8 py-12 text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)] md:px-14 md:py-14">

            {/* TAPE */}
            <div className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-blush/65" />

            {/* LETTER TOP */}
            <div className="mb-10 flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine/50">
              <span>to: you ♡</span>
              <span>from: maya</span>
            </div>

            {/* LETTER CONTENT */}
            <div className="mx-auto max-w-xl text-center">

              {/* GREETING */}
              <p className="font-hand text-3xl text-wine md:text-4xl">
                hi there
              </p>

              {/* MESSAGE */}
              <p className="mx-auto mt-6 max-w-md font-typewriter text-sm leading-7 text-ink/70">
                I&apos;m always happy to chat about coding, creative ideas,
                projects, or anything in between. My inbox is always open.
              </p>

              {/* CONTACT BUTTON */}
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-9 border border-wine bg-wine px-7 py-3 font-typewriter text-xs text-paper shadow-[4px_5px_0_rgba(104,69,80,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-dark"
              >
                send me a message →
              </button>

              {/* GITHUB */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://github.com/bldyonyx"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-wine/40 pb-1 font-typewriter text-xs text-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-wine hover:text-dark"
                >
                  github ↗
                </a>
              </div>

              {/* HANDWRITTEN ENDING */}
              <p className="mt-12 -rotate-2 font-hand text-3xl text-wine">
                hope to hear from you ‹𝟹
              </p>
            </div>

            {/* DECORATIONS */}
            <span className="absolute bottom-8 left-8 -rotate-12 font-hand text-3xl text-blush">
              ♡
            </span>

            <span className="absolute right-8 top-20 rotate-12 font-hand text-3xl text-wine/45">
              ʚଓ
            </span>

            {/* SMALL CONTACT POPUP */}
            {formOpen && (
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
                      onClick={() => setFormOpen(false)}
                      aria-label="Close contact form"
                      className="font-typewriter text-sm text-wine transition-colors duration-300 hover:text-dark"
                    >
                      ×
                    </button>
                  </div>

                  {/* FORM */}
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
                        className="w-full border border-wine/20 bg-cream px-4 py-3 font-typewriter text-sm text-ink outline-none transition-colors duration-300 focus:border-wine"
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
                    </div>

                    {/* SEND */}
                    <button
                      type="submit"
                      className="w-full border border-wine bg-wine px-6 py-3 font-typewriter text-xs text-paper shadow-[4px_5px_0_rgba(104,69,80,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-dark"
                    >
                      send message ♡
                    </button>

                    <p className="text-center font-hand text-2xl text-wine">
                      talk soon ♡
                    </p>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact