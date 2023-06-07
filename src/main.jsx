import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
//import Chess from '../projects/chess/chess.jsx'
//import index.jsx
//import * as chessApp from 'projects/chess/app.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
