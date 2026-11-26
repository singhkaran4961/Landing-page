import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import Products from "../components/Products";
import { productinfo } from "../data";
import Footer from "../components/Footer";




const Productpage = () => {
  return (
    <div className="h-full bg-blue-400  z-[-1] pt-35 ">
      <div className="w-full h-20  item-center justify-center flex ">
        <h1 className="font-mono text-6xl text-black">Products</h1>
      </div>
     
      <div className=" w-full h-auto px-3">
        <div className="w-full h-full flex rounded-lg gap-4 relative pt-18 max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center ">
          <div className=" h-1/3 w-1/5 bg-sky-100 rounded-lg  mt-4 flex flex-col justify-start items-center py-5 gap-4 max-[900px]:w-80">
            <h1 className="text-3xl font-mono max-[1184px]:text-xl max-[900px]:text-2xl">Categories</h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-9 text-2xl font-mono justify-center items-center">
                <label >Men</label>
                <input
                  type="checkbox"
                  name="categories"
                  className="w-10 h-5  cursor-pointer"
                />
              </div>
              <div className=" flex gap-2 text-2xl font-mono justify-center items-center">
                <label >Women</label>
                <input
                  type="checkbox"
                  name="categories"
                  className="w-10 h-5 cursor-pointer "
                />
              </div>
              <div className=" flex gap-5 text-2xl font-mono justify-center items-center">
                <label >Kids</label>
                <input
                  type="checkbox"
                  name="categories"
                  className="w-10 h-5  cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className=" h-auto px-0  w-1/1 gap-10 pb-10  flex justify-evenly items-center flex-wrap   rounded-lg">


           <div className="w-full h-20 flex justify-between items-center px-10  max-[703px]:justify-center max-[703px]:flex-col max-[703px]:gap-5 max-[703px]:h-auto ">
        <div className=" flex relative">
          <input
            type="text"
            placeholder=""
            className="  bg-gray-100 w-80 h-10 rounded-xl  text-start px-10 border-none text-lg capitalize focus:outline-none focus:opacity-90 "
          />
          <div className=" absolute right-3 top-2 text-2xl font-extrabold cursor-pointer">
            <MdOutlineSearch />
          </div>
        </div>

        <div className=" flex  whitespace-nowrap text-xl font-mono justify-center items-center  bg-blue-100 px-4 py-1 rounded-xl " >
          <label >Sort :</label>

          <select className="cursor-pointer" id="sort" name="sort">
            <option value="High to low">High to low</option>
            <option value="Low to high">Low to high</option>
          </select>
        </div>
      </div>


            {productinfo.map((e,idx) => {
              return <Products key={idx}  element={e} img={e.images[0]} name={e.title} price={e.price} />;
            })}
          </div>




          













        </div>
      </div>


      


      
    </div>
  );
};

export default Productpage;
