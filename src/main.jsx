import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './components/layout/Navbar.jsx'
import QuranPage from './pages/quran.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"/quran",
    element:<QuranPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
