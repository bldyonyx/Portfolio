function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <a href="#" className="text-lg font-medium">
        maya ♡
      </a>

      <div className="flex gap-6 text-sm">
        <a href="#about">about</a>
        <a href="#projects">work</a>
        <a href="#github">github</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  )
}

export default Navbar