import { useState } from 'react'

const Navbar = () => {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (!el) return
    // scroll into view; the right pane is the nearest scrollable ancestor
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-6 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold text-emerald-900">Vansh Verma</div>
      </div>

      {/* Desktop links */}
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          {links.map(l => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-sm text-emerald-800 hover:text-emerald-600"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(v => !v)}
          className="p-2 rounded-md bg-white/20 backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-emerald-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="absolute top-16 right-4 left-4 bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-lg z-50 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => { setOpen(false); scrollTo(l.id) }}
                  className="w-full text-left text-emerald-800 font-medium py-2"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
