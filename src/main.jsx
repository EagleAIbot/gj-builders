import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LenisProvider } from './components/LenisProvider.jsx'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { useAppStore } from './store/useAppStore.js'

function Boot() {
  const setReady = useAppStore((s) => s.setReady)

  useEffect(() => {
    const t = setTimeout(setReady, 900)
    return () => clearTimeout(t)
  }, [setReady])

  return (
    <>
      <LoadingScreen />
      <App />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <Boot />
    </LenisProvider>
  </StrictMode>,
)
