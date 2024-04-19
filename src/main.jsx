import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './components/layout/Navbar.jsx'
import QuranPage from './pages/quran.jsx'
import HomePage from './pages/home.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import SurahDetailPage from './pages/surahDetail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/quran' element={<QuranPage/>}/>
        <Route path='/surah/:id/:surahName' element={<SurahDetailPage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
