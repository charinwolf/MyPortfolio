import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Hero />
      </div>
    </>
  )
}

export default App
