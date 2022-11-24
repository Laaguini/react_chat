import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
    } 
  ])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="catalog" element={<Catalog/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
