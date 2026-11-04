import React from "react";
import Products from "./Products";
import { products } from "../data";

const Herodown = () => {
  return (
    <div className="h-screen bg-blue-400 pt-10 max-[500px]:h-auto max-[1020px]:h-auto pb-10  ">
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
    </div>
  );
};

export default Herodown;
