import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  GitBranch,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ContactForm from './contact/ContactForm'
import ContactHandwrittenNote from './contact/ContactHandwrittenNote'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const [formOpen, setFormOpen] = useState(false)

  const letterRef = useRef(null)
  const tapeRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: letterRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      timeline.fromTo(
        letterRef.current,
        {
          opacity: 0,
          y: 28,
          rotate: -0.5,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      )

      timeline.fromTo(
        tapeRef.current,
        {
          opacity: 0,
          y: -12,
          rotate: -7,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          rotate: -2,
          scale: 1,
          duration: 0.55,
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      )
    }, letterRef)

    return () => context.revert()
  }, [])

  return (
    <section
      id="contact"
      className="hero-dots relative bg-dark px-6 py-24 text-paper lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl min-[1800px]:max-w-7xl">
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
        <div className="relative mx-auto max-w-3xl min-[1800px]:max-w-4xl">
          {/* PAPER BEHIND */}
          <div className="absolute inset-3 rotate-[1.5deg] border border-paper/10 bg-wine/25" />

          {/* MAIN PAPER */}
          <div
            ref={letterRef}
            className="relative min-h-125 border border-wine/20 bg-cream px-8 py-12 text-ink shadow-[10px_12px_0_rgba(0,0,0,0.16)] md:px-14 md:py-14"
          >
            {/* TAPE */}
            <div
              ref={tapeRef}
              className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 bg-blush/65"
            />

            {/* LETTER TOP */}
            <div className="flex items-center justify-between border-b border-wine/15 pb-4 font-typewriter text-[10px] uppercase tracking-[0.2em] text-wine/50">
              <span>to: you</span>
              <span>from: maya</span>
            </div>

            {/* LETTER CONTENT */}
            <div className="mx-auto mt-12 max-w-xl text-center">
              {/* GREETING */}
              <div className="flex justify-center">
                <p className="-translate-x-1 -rotate-2 font-hand text-3xl text-wine md:text-4xl">
                  hi there !
                </p>
              </div>

              {/* MESSAGE */}
              <p className="mx-auto mt-7 max-w-md font-typewriter text-sm leading-7 text-ink/70">
                I&apos;m always happy to chat about coding, creative
                ideas, projects, or anything in between. My inbox is
                always open.
              </p>

              {/* CONTACT BUTTON */}
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="group mt-9 inline-flex items-center gap-2 border border-wine bg-wine px-7 py-3 font-typewriter text-xs text-paper shadow-[4px_5px_0_rgba(104,69,80,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-dark"
              >
                <span>send me a message</span>

                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* GITHUB */}
              <div className="mt-7 flex justify-center">
                <a
                  href="https://github.com/bldyonyx"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-wine/40 pb-1 font-typewriter text-xs text-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-wine hover:text-dark"
                >
                  <GitBranch
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-rotate-6"
                  />

                  <span>github</span>

                  <ExternalLink
                    size={11}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* DECORATIONS */}
            <span className="absolute bottom-8 left-8 -rotate-12 font-hand text-3xl text-blush">
              ♡
            </span>

            <span className="absolute right-8 top-20 rotate-12 font-hand text-3xl text-wine/45">
              ʚଓ
            </span>

            {/* HANDWRITTEN ENDING */}
            <ContactHandwrittenNote />

            {/* CONTACT FORM */}
            <ContactForm
              isOpen={formOpen}
              onClose={() => setFormOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
