import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" h-auto w-full  ">
        <div className="h-screen w-full bg-[url(\src\assets\bgfashion.avif)]  bg-no-repeat bg-cover pt-10   bg-amber-100   max-[897px]:h-auto  ">
          <div className=" h-screen w-full  bg-blue-400/35 text-center flex flex-col justify-center items-center gap-10">
           <h1 className="text-black font-mono font-bold  font-stretch-expanded text-7xl   flex  max-[695px]:text-5xl  max-[478px]:text-3xl">
              Welcome to Shops<p className="text-white">e</p>
            </h1>

            <h1 className="text-black font-mono  font-stretch-expanded text-4xl  max-[478px]:text-2xl  ">
              Shop Something Fashionable.
            </h1>
            <button className=" bg-red-500 group h-10 w-40 rounded-full p-1 cursor-pointer text-white hover:scale-125   ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
