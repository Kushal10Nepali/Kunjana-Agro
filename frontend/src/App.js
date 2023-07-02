import React from 'react'
import "./App.css"
import { HomePage } from './Routes/Routes'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
  return (
 
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<HomePage/>} />
 </Routes>
 </BrowserRouter>
  )
}

export default App