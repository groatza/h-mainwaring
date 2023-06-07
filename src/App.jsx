import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Homepage from './components/Homepage'
import GnomeApp from '../public/projects/gnomefront/src/App'
//import Chess from '../projects/chess/chess'
import ChessApp from '../public/projects/newChess/ChessApp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/gnome' element={<GnomeApp />}/>
      <Route path='/chess' element={<ChessApp />}/>
    </Routes>
  )
}

export default App
