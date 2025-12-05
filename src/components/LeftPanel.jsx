import pfp from '../assets/pfp2.jpg'

import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const LeftPanel = () => {
  const PanelInner = (
    <div className="h-full flex flex-col items-center justify-start gap-4 p-4 md:p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-inner">
      <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <img src={pfp} alt="Vansh Verma" className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-emerald-900">Vansh Verma</h1>
        <p className="text-emerald-700 mt-1 text-sm md:text-base">Frontend Developer • UI / UX Enthusiast</p>
      </div>

      {/* Social icons pinned to bottom */}
      <div className="mt-auto mb-3 flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <a href="mailto:vansh.verma174@gmail.com" aria-label="Email" className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
            <MdOutlineEmail className='w-8 h-8'/>
          </a>

          <a href="https://www.instagram.com/vanshverma282/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
            <FaInstagram className='w-8 h-8'/>
          </a>

          <a href="https://x.com/vansh_verma1704" target="_blank" rel="noopener noreferrer" aria-label="X" className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
            <FaXTwitter className='w-8 h-8'/>  
          </a>

          <a href="https://www.linkedin.com/in/vanshverma174/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
            <FaLinkedin className='w-8 h-8'/>
          </a>

          <a href="https://www.github.com/vanshverma17" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition">
            <FaGithub className='w-8 h-8'/>
          </a>
        </div>
      </div>

      <div className="mt-3 w-full text-center text-xs md:text-sm text-emerald-700">© 2025 Vansh</div>
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
