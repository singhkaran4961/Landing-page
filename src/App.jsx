import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Herodown from './components/Herodown'
import { Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'
import Productpage from './pages/Productpage'

const App = () => {
  return (
   <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/productpage' element={<Productpage/>}></Route>

    






      </Routes>
      
      





    </>
  )
}

export default App