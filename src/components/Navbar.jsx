import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="flex h-22 bg-blue-500 justify-between px-15 items-center  w-full fixed max-[796px]:justify-center  ">
        <div className=" flex gap-18 text-center text-black text-2xl  justify-center items-center max-[796px]:w-full max-[796px]:justify-between ">

          <div className="hover:scale-125 text-3xl text-black hidden max-[1274px]:block"><GiHamburgerMenu/></div>
          <div className="text-3xl text-blue-950 whitespace-nowrap flex">
            Shops <h1 className="text-white">e</h1>
          </div>

          <a href="" className=" hover:scale-120 max-[1274px]:hidden">
            Home
          </a>
          <a href="" className=" hover:scale-120  max-[1274px]:hidden">
            About
          </a>
          <a href="" className=" hover:scale-120 max-[1274px]:hidden">
            Product
          </a>
          <a href="" className= "hover:scale-120 whitespace-nowrap max-[1274px]:hidden">
            Contact Us
          </a>
        </div>

        <div className="  text-2xl text-black flex gap-20 max-[796px]:hidden ">
          <a href="" className="hover:scale-120 ">
              <FaSearch />
        
           
          </a>
          <a href="" className=" hover:scale-120">
        
            <FaCartShopping />
          </a>
          <a href="" className=" hover:scale-120">
           <IoIosContact />
          
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
