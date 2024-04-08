import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
import { Navbar } from './components/layout/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
  </React.StrictMode>,
)
