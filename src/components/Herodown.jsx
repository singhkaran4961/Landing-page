import React from "react";
import Products from "./Products";
import { products, sale } from "../data";
import { FaCarSide } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
const Herodown = () => {
  return (
    <div className="h-auto bg-blue-400 pt-10 max-[500px]:h-auto max-[1020px]:h-auto pb-10  ">
      <div className=" text-4xl text-center w-full text-black h-20 font-mono  max-[396px]:mb-3 ">
        Best seller Products
      </div>

      <div className="h-auto w-full  flex justify-evenly flex-wrap item-center gap-5  ">
        {products.map((e, idx) => {
          return (
            <Products
              key={idx}
              img={e.image}
              name={e.productName}
              price={e.price}
            />
          );
        })}
      </div>




       <div className="  overflow-hidden  bg-black flex justify-evenly w-full h-50  mt-22  max-[968px]:flex-col py-5  max-[968px]:h-auto gap-12 ">
        <div className="allmethods flex flex-col justify-center items-center text-center">
          <div className=" text-5xl text-red-500">
            <MdPayment />
          </div>
          <div
            className=" text-white flex
        flex-col "
          >
            <h1 className="text-2xl">Secure Payment</h1>
            <h1 className="text-sm">100% secure payment</h1>
          </div>
        </div>
        <div className="  allmethods flex flex-col justify-center items-center text-center">
          <div className=" text-5xl text-red-500">
            <GiReturnArrow />
          </div>
          <div
            className=" text-white flex
        flex-col "
          >
            <h1 className="text-2xl">30 Days Return</h1>
            <h1 className="text-sm">if goods have problem</h1>
          </div>
        </div>
        <div className="  allmethods flex flex-col justify-center items-center text-center">
          <div className=" text-5xl text-red-500">
            <MdSupportAgent />
          </div>
          <div
            className=" text-white flex
        flex-col "
          >
            <h1 className="text-2xl">24/7 Support</h1>
            <h1 className="text-sm">customer support available</h1>
          </div>
        </div>
        <div className="  allmethods flex flex-col justify-center items-center text-center">
          <div className=" text-5xl text-red-500">
            <FaCarSide />
          </div>
          <div
            className=" text-white flex
             flex-col "
          >
            
            <h1 className="text-2xl">Free sheeping</h1>
            <h1 className="text-sm">100% free delivery</h1>
          </div>
        </div>

           
      </div>
          <div className=" text-4xl text-center  mt-8 w-full text-black h-20 font-mono  max-[396px]:mb-3 ">
        Sale is Live
      </div>

      <div className="h-auto w-full  flex justify-evenly flex-wrap item-center gap-5  ">
        {sale.map((e, idx) => {
          return (
            <Products
              key={idx}
              img={e.image}
              name={e.productName}
              price={e.price}
            />
          );
        })}
      </div>








    </div>



  );
};

export default Herodown;
