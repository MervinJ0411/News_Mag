import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewsPage from './Pages/NewsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewsPage" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
