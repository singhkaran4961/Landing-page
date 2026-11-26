
import { IoIosContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { data, Link  } from "react-router-dom";


const Navbar = () => {




  



  return (
    <>
      <div className="flex h-22 bg-blue-500 justify-between  z-99 px-15 items-center  w-full fixed max-[796px]:justify-center   ">
        <div className=" flex gap-18 text-center text-black text-2xl  justify-center items-center max-[796px]:w-full max-[796px]:justify-between ">

          <div className="hover:scale-125 text-3xl text-black hidden max-[1274px]:block"><GiHamburgerMenu/></div>
          <div className="text-3xl text-blue-950 whitespace-nowrap flex">
            Shops <h1 className="text-white">e</h1>
          </div>



          <Link  to={"/"} className="  hover:scale-120 max-[1274px]:hidden">Home</Link >
          <Link  to={"/about"} className="  whitespace-nowrap hover:scale-120 max-[1274px]:hidden">About Us</Link >
          <Link  to={"/productpage"} className=" hover:scale-120 max-[1274px]:hidden">Products</Link >
          <Link  to={"/contactus"} className= "hover:scale-120 whitespace-nowrap max-[1274px]:hidden">Contact Us</Link >

     
        </div>

        <div className="  text-2xl text-black flex gap-20 max-[796px]:hidden ">
          <a href="" className=" flex  justify-center items-center hover:scale-120  ">
              <FaSearch />
        
           
          </a>
          <a href="" className="   w-10  h-10 flex  justify-center items-center hover:scale-120 relative">
            <div className="absolute text-sm flex text-center  font-bold p-2 justify-center items-center right-0 top-0 bg-red-500 h-4  w-4 rounded-full">0</div>


        
            <FaCartShopping />
          </a>
          <a href="" className=" flex  justify-center items-center  hover:scale-120">
              <IoIosContact />
           
          
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
