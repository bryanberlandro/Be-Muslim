import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './components/layout/Navbar.jsx'
import QuranPage from './pages/quran.jsx'
import HomePage from './pages/home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/quran' element={<QuranPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
