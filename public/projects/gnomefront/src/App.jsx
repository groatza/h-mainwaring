import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Featured from './components/Featured'
import Footer from './components/Footer'

function GnomeApp() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Landing/>
      <Featured />
      <Footer />
    </div>
  )
}

export default GnomeApp
