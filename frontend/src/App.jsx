import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, Link, Router } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Catalog from "./pages/Catalog.jsx"

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
      <div>
        <a href="/">Главная</a>
        <a href="/catalog">Каталог</a>
      </div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
