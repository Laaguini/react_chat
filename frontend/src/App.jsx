import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Auth from './pages/Auth'
import Reg from "./pages/Reg"
import './App.css'
import { createBrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Catalog from "./pages/Catalog.jsx"
import Layout from './components/layout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/> 
    },
    {
      path: '/catalog',
      element: <Catalog/> 
    },
    {
      path: '/auth',
      element: <Auth/> 
    },
    {
      path: '/reg',
      element: <Reg/> 
    } 
  ])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="reg" element={<Reg />} />
          <Route path="auth" element={<Auth/>} />
          <Route path="catalog" element={<Catalog/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
