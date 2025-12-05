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

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="text-lg font-semibold text-emerald-900">Vansh Verma</div>
      <nav>
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
    </header>
  )
}

export default Navbar
