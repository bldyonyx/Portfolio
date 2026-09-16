function DevelopingLabel() {
  return (
    <div
      className="
        absolute
        -left-7
        -top-3
        z-20
        -rotate-2
        bg-wine/70
        px-3.5
        py-1.5
        sm:-left-8
        lg:-left-7
        lg:-top-4
        xl:-left-8
      "
    >
      <span className="inline-flex items-center font-typewriter text-[10px] text-paper">
        <span>♡&nbsp;</span>

        {'developing'.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="inline-block animate-[developing-wave_1.8s_ease-in-out_infinite]"
            style={{
              animationDelay: `${index * 70}ms`,
            }}
          >
            {letter}
          </span>
        ))}

        <span className="ml-px inline-flex">
          <span className="animate-[pulse_1.4s_ease-in-out_infinite]">
            .
          </span>

          <span className="animate-[pulse_1.4s_ease-in-out_0.2s_infinite]">
            .
          </span>

          <span className="animate-[pulse_1.4s_ease-in-out_0.4s_infinite]">
            .
          </span>
        </span>
      </span>
    </div>
  )
}

export default DevelopingLabel