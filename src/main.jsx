import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// defensive fixes: force title, update favicon, unregister service workers
document.title = 'Vansh Verma - Portfolio'

// ensure correct favicon (replace any previously cached favicon)
;(function ensureFavicon() {
  try {
    const href = '/vite.svg' // change to your favicon path if different
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    if (link.href && link.href.indexOf(href) === -1) {
      link.href = href
    } else {
      link.href = href
    }
  } catch (e) {
    // ignore
  }
})()

// unregister any service workers that might be serving old HTML
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(r => r.unregister().catch(() => {}))
  }).catch(() => {})
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
