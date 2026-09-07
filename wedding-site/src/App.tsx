import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { GiftsPage } from './pages/GiftsPage'
import { HomePage } from './pages/HomePage'
import { RsvpPage } from './pages/RsvpPage'
import { ThankYouPage } from './pages/ThankYouPage'
import { VenuePage } from './pages/VenuePage'
import { currentPage } from './routing'
import type { Page } from './types'
import './App.css'

function App() {
  const [page, setPage] = useState<Page>(currentPage)

  useEffect(() => {
    const handleHash = () => {
      setPage(currentPage())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <div className="site-shell">
      <Header page={page} />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'venue' && <VenuePage />}
        {page === 'rsvp' && <RsvpPage />}
        {page === 'gifts' && <GiftsPage />}
        {page === 'thank-you' && <ThankYouPage />}
      </main>
      <Footer />
    </div>
  )
}

export default App
