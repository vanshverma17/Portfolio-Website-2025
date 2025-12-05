import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import LeftPanel from './components/LeftPanel'
import RightContent from './components/RightContent'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-25">
      <Navbar />
      <LeftPanel />
      <RightContent />
    </div>
  )
}

export default App
