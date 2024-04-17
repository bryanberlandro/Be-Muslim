import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home.jsx'
import { Navbar } from './components/layout/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuranPage from './pages/quran.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quran' element={<QuranPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
