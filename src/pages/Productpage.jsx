import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import Products from "../components/Products";
import { mainproducts } from "../data";

const Productpage = () => {
  return (
    <div className="h-auto bg-blue-400  z-[-1] pt-35 ">
      <div className="w-full h-20  item-center justify-center flex ">
        <h1 className="font-mono text-6xl text-black">Products</h1>
      </div>
      <div className="w-full h-20 flex justify-end items-center pr-42 gap-38 ">
        <div className=" flex relative">
          <input
            type="text"
            placeholder=""
            className="  bg-gray-100 w-100 h-11 rounded-full text-start px-10 border-none text-2xl capitalize focus:outline-none focus:opacity-90 "
          />
          <div className=" absolute right-3 top-2 text-2xl font-extrabold cursor-pointer">
            <MdOutlineSearch />
          </div>
        </div>

        <div className=" flex  text-xl font-mono justify-center items-center  bg-blue-100 px-4 py-1 rounded-xl">
          <label >Sort :</label>

          <select className="cursor-pointer" id="sort" name="sort">
            <option value="High to low">High to low</option>
            <option value="Low to high">Low to high</option>
          </select>
        </div>
      </div>

      <div className=" w-full h-auto px-3">
        <div className="w-full h-full flex rounded-lg gap-4 ">
          <div className=" h-1/3 w-1/5 bg-sky-100 rounded-lg  flex flex-col justify-start items-center py-5 gap-4">
            <h1 className="text-3xl font-mono">Categories</h1>
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
          <div className=" h-auto  w-1/1 gap-10 pb-10  flex justify-evenly items-center flex-wrap   rounded-lg">
            {mainproducts.map((e,idx) => {
              return <Products key={idx} mainimage={e.image} mainproductname={e.productName} mainprice={e.price} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
