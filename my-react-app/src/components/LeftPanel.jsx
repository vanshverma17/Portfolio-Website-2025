const LeftPanel = () => {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-[40%] p-8 z-40">
      <div className="h-full flex flex-col items-center justify-start gap-6 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-inner">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-300 flex items-center justify-center text-4xl font-extrabold text-white">V</div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-900">Vansh Verma</h1>
          <p className="text-emerald-700 mt-1">Frontend Developer • UI / UX Enthusiast</p>
        </div>

        <div className="w-full mt-4">
          <h3 className="text-sm uppercase text-emerald-800 tracking-wider">Contact</h3>
          <p className="text-emerald-700 text-sm mt-2">vansh@example.com</p>
        </div>

        <div className="mt-auto w-full text-center text-sm text-emerald-700">© 2025 Vansh</div>
      </div>
    </aside>
  )
}

export default LeftPanel
