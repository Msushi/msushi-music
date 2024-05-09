import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import ImageUpload from './pages/ImageUpload.jsx'
import ReviewPage from './pages/ReviewPage.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/testUpload" element={<ImageUpload />} />
        <Route path="/review/:id" element={<ReviewPage  />}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
