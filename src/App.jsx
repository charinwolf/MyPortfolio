import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div> 
    </>
  )
}

export default App
