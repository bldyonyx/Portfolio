function Bow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 90"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M70 40C55 17 29 7 16 19C5 30 15 48 33 50C48 52 61 46 70 40Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M70 40C85 17 111 7 124 19C135 30 125 48 107 50C92 52 79 46 70 40Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M61 34C64 29 76 29 79 34V47C75 51 65 51 61 47V34Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M65 48L48 80"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M75 48L92 80"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M48 80L57 75"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M92 80L83 75"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Bow