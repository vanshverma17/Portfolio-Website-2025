const LeftPanel = () => {
  const PanelInner = (
    <div className="h-full flex flex-col items-center justify-start gap-4 p-4 md:p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-inner">
      <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-300 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-white">V</div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-emerald-900">Vansh Verma</h1>
        <p className="text-emerald-700 mt-1 text-sm md:text-base">Frontend Developer • UI / UX Enthusiast</p>
      </div>

      <div className="w-full mt-3 md:mt-4">
        <h3 className="text-xs md:text-sm uppercase text-emerald-800 tracking-wider">Contact</h3>
        <p className="text-emerald-700 text-xs md:text-sm mt-2">vansh@example.com</p>
      </div>

      <div className="mt-auto w-full text-center text-xs md:text-sm text-emerald-700">© 2025 Vansh</div>
    </div>
  )

  return (
    <>
      {/* Mobile/top card: visible on small screens, stacks above content */}
      <div className="md:hidden w-full px-4 pt-20">{/* pt-20 to clear fixed header */}
        <div className="w-full">
          {PanelInner}
        </div>
      </div>

      {/* Desktop fixed column: visible on md+ screens */}
      <aside className="hidden md:block md:fixed md:top-16 md:left-0 md:h-[calc(100vh-4rem)] md:w-[40%] md:p-8 z-40">
        {PanelInner}
      </aside>
    </>
  )
}

export default LeftPanel
