import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Herodown from "./components/Herodown";
import { Route, Routes, useLocation } from "react-router-dom";
import Page1 from "./pages/Page1";
import Productpage from "./pages/Productpage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Singleproduct from "./pages/Singleproduct";
import Prac from "./pages/Prac";
import Errorpage from "./pages/Errorpage";
import { useEffect } from "react";

const App = () => {


  const location=useLocation()
  


useEffect(() => {
    window.scrollTo(0, 0);
}, [location.pathname]);


  return (
    <>
      <div className="h-auto  bg-blue-400 scroll-smooth ">
        {/* <Login/> */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/productpage" element={<Productpage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<Contact />}></Route>
          <Route path="/contactus/prac" element={<Prac />}></Route>
          <Route path="/productpage/:pid" element={<Singleproduct />}></Route>
          <Route path="*" element={<Errorpage/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
