import React, { useEffect, useState } from 'react'
import UnderConstruction from '../src/sections/UnderConstruction'
import Navbar from './components/layout/NavbarDemo.jsx'
import Hero from '../src/sections/Hero'
import Skills from '../src/sections/Skills'
import About from '../src/sections/About'
import Project from '../src/sections/Project'
import Testimonial from '../src/sections/Testimonial'
import Contact from '../src/sections/Contact'
import Footer from './components/layout/Footer'
import Loader from './components/loader/LoaderOneDemo.jsx'
import { AuroraBackground } from './components/ui/AuroraBackground.jsx'

const App = () => {
  const SHOW_503 = true; // change to true when under construction

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <Loader />

  if (SHOW_503) return <UnderConstruction />


  return (
    <div>
      <AuroraBackground>
        <Navbar/>
        <Hero/>
      </AuroraBackground>
      <Skills />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App