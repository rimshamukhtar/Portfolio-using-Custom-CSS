import About from "../components/About"
import ContactMe from '@/components/ContactMe'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default page
