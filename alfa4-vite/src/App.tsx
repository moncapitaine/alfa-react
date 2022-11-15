import { useState } from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout'
import { TestUseRef } from './components/testUseRef'
import { TestUseRef2 } from './components/testUseRef2'
import { AboutPage } from './pages/aboutPage'
import { HomePage } from './pages/homePage'
import { Test1Page } from './pages/test1Page'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/test1">Test1</Link></li>
          <li><a href="/about">Wrong about</a></li>
        </ul>
      </nav>
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/test1" element={<Test1Page />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
