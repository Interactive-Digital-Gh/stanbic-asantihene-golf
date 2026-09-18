// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Table from './pages/Table'
import NotFound from './pages/NotFound'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/table' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
