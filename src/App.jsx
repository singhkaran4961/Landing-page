
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Herodown from './components/Herodown'
import { Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'
import Productpage from './pages/Productpage'
import Footer from './components/Footer'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {




  return (
   <><div className="h-auto  bg-blue-400 scroll-smooth ">


    





       <Navbar/>

      <Routes>
        <Route path='/' element={<Page1/>} ></Route>
        <Route path='/productpage' element={<Productpage/>}></Route>
         <Route path='/about' element={<About/>}></Route>
          <Route path='/contactus' element={<Contact/>}></Route>

      </Routes>
       <Footer/> 

        
      </div>
       





    </>
  )
}

export default App