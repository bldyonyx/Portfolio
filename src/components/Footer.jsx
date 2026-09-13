function Footer() {
  return (
    <footer className="hero-dots bg-dark px-6 pb-10 text-paper lg:px-8">
      <div className="mx-auto max-w-6xl border-t border-paper/15 pt-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          {/* LEFT */}
          <div>
            <p className="font-typewriter text-lg tracking-wide text-paper">
              maya ഒ
            </p>

            <p className="mt-3 max-w-sm font-typewriter text-xs leading-6 text-paper/80">
              designed &amp; built while learning,
              <br />
              one project at a time.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:text-right">
            <p className="font-hand text-2xl text-paper">
              see you around ♡
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex items-center justify-between border-t border-paper/10 pt-5 font-typewriter text-[10px] uppercase tracking-[0.2em]">
          <span className="text-paper/35">
            © 2026 Maya
          </span>

          <span className="text-paper">
            ഒ
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer