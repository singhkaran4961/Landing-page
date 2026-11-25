import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { mainproducts } from "../data";
import { use } from "react";
import Errorpage from "./Errorpage";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import Products from "../components/Products";

const Singleproduct = () => {
  let { pid } = useParams();
  const datapr = mainproducts.find((e) => e.id == pid);

  return (
    <>
      {datapr == undefined ? (
        <Errorpage />
      ) : (
        <div className="h-auto pb-10 flex flex-col justify-center items-center w-full bg-blue-400  pt-30">
          <div className="h-[80vh] flex w-full justify-center  items-center max-[1293px]:gap-4   max-[1124px]:flex-col max-[1124px]:h-auto  ">
            <div className=" w-[50%] h-full flex  justify-center gap-4 flex-col items-center max-[1124px]:w-full   ">
              <div className="flex  gap-4 max-[466px]:flex-col">
                <div className="h-105 w-90 overflow-hidden  max-[369px]:h-80  max-[369px]:w-65">
                  <img
                    src={`/${datapr.image}`}
                    className="h-full w-full transition-all duration-150 ease-in hover:cursor-zoom-in hover:scale-130 "
                    alt={datapr.productName}
                  />
                </div>
                <div className=" h-105 w-15  justify-end flex flex-col gap-2  max-[466px]:flex-row max-[466px]:h-10 max-[466px]:w-full max-[466px]:justify-center max-[466px]:gap-8">
                  <button className="bg-gray-300 p-4 rounded-xl  flex justify-center items-center cursor-pointer">
                    <FaArrowLeft />
                  </button>
                  <button className="bg-gray-300 p-4 rounded-xl  flex justify-center items-center  cursor-pointer">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="flex w-full justify-center items-center gap-5 max-[604px]:w-110  max-[466px]:w-90 max-[369px]:w-70">
                <div className=" bg-amber-200 cursor-pointer h-33 w-32 max-[604px]:h-20 max-[369px]:h-15"></div>
                <div className=" bg-amber-200 cursor-pointer h-33 w-32 max-[604px]:h-20 max-[369px]:h-15"></div>
                <div className=" bg-amber-200 cursor-pointer h-33 w-32 max-[604px]:h-20 max-[369px]:h-15"></div>
                <div className=" bg-amber-200 cursor-pointer h-33 w-32 max-[604px]:h-20 max-[369px]:h-15"></div>
              </div>
            </div>
            <div className="w-[35%] h-full  pt-15 px-8   max-[1124px]:w-110 max-[466px]:px-0 max-[466px]:w-80  max-[369px]:w-70">
              <div className=" flex justify-start  gap-[0.3px] flex-col items-start">
                <h1 className="text-lg text-gray-700  font-mono">Brandname</h1>

                <h1 className="text-4xl font-mono">{datapr.productName}</h1>
              </div>
              <div className=" flex  justify-between  items-center">
                <h1 className="text-2xl">{datapr.price}</h1>
                <h1 className="flex justify-center items-center text-2xl">
                  <IoMdStar />
                  4.5
                </h1>
              </div>
              <div className=" flex justify-center  pt-4 items-center">
                <hr className="w-full" />
              </div>
              <div className=" flex justify-center gap-1 items-start flex-col">
                <h1 className="text-xl font-mono font-bold">Description:</h1>
                <p className=" text-gray-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro accusantium vel cumque tempore in debitis corrupti
                  vitae.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Porro accusantium vel.
                </p>
              </div>

              <div className=" flex pt-2 text-xl font-bold font-mono">
                Color: <h1 className="text-xl text-gray-700"> Royal brown</h1>
              </div>

              <div className=" flex justify-start gap-4 pt-2 ">
                <input
                  type="color"
                  disabled="true"
                  className="h-12 w-22 cursor-pointer "
                  value="white"
                />
                <input
                  type="color"
                  disabled="true"
                  className="h-12 w-22 cursor-pointer "
                  value="red"
                />
                <input
                  type="color"
                  disabled="true"
                  className="h-12 w-22 cursor-pointer "
                  value="brown"
                />
                <input
                  type="color"
                  disabled="true"
                  className="h-12 w-22 cursor-pointer "
                  value="black"
                />
              </div>

              <div className="pt-2 text-xl font-bold  font-mono ">
                <div className=" flex">
                  Size: <h1 className="text-gray-700">2</h1>
                </div>
                <div className=" flex text-lg justify-start gap-3">
                  <button className="h-9 bg-white w-15 cursor-pointer rounded-xl flex justify-center items-center">
                    {" "}
                    3
                  </button>
                  <button className="h-9 bg-white w-15 cursor-pointer rounded-xl flex justify-center items-center">
                    {" "}
                    12
                  </button>
                  <button className="h-9 bg-white w-15 cursor-pointer rounded-xl flex justify-center items-center">
                    {" "}
                    20
                  </button>
                  <button className="h-9 bg-white w-15 cursor-pointer rounded-xl flex justify-center items-center">
                    {" "}
                    30
                  </button>
                  <button className="h-9 bg-white w-15 cursor-pointer rounded-xl flex justify-center items-center">
                    
                    40
                  </button>
                </div>
              </div>

              <div className=" flex  pt-4 justify-between items-center ">
                <button className=" h-12 bg-red-500 text-xl white font-mono w-48 rounded-xl whitespace-nowrap text-white  cursor-pointer active:scale-110 max-[1293px]:w-40 max-[1124px]:text-lg max-[1124px]:w-35 max-[369px]:w-30 max-[369px]:text-sm">
                  Add to cart
                </button>
                <button className=" h-12 bg-white text-xl text-red-500 font-mono whitespace-nowrap  w-48 rounded-xl cursor-pointer active:scale-110 max-[1293px]:w-40 max-[1124px]:text-lg max-[1124px]:w-35 max-[369px]:w-30 max-[369px]:text-sm " >
                  Checkout Now
                </button>
              </div>

              <div className="">
                <h1 className="text-gray-700 underline  cursor-pointer  pt-4">
                  Delivery T&C
                </h1>
              </div>
            </div>
          </div>


<div className=" pt-25 w-full ">


           <div className=" text-4xl text-center w-full text-black h-20 font-mono  max-[396px]:mb-3 ">
        Most selled Products
      </div>

      <div className="h-auto w-full  flex justify-evenly flex-wrap item-center gap-5  ">
        {mainproducts.slice(5,9).map((e, idx) => {
          return (
            <Products
               element={e}
              key={idx}
              img={e.image}
              name={e.productName}
              price={e.price}
            />
          );
        })}
      </div>
</div>





        </div>
      )}
    </>
  );
};

export default Singleproduct;
