import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CreateRemainder from './Pages/CreateRemainder/CreateRemainder'
import EditRemainder from './Pages/EditRemainder/EditRemainder'

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/createremainder' element={<CreateRemainder />} />
        <Route path='/editremainder' element={<EditRemainder />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App