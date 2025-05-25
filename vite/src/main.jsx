import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PokeRouter from './PokeRouter'
import LandingPage from './LandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><PokeRouter /></BrowserRouter>
  </StrictMode>
)
