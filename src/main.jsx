import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './pages/hero/hero'
import About from './pages/about/about'
import Projects from './pages/projects/projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Hero />
      <About />
      <Projects />
  </StrictMode>
)
