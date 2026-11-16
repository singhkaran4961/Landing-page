import React from "react";

import { FaLocationPin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[50%] w-full bg-blue-300  flex justify-evenly items-center gap-38 flex-wrap max-[1371px]:h-auto p-10">
      <div className=" flex w-100 flex-col justify-center items-center gap-5 h-70 p-2">
        <h1 className="text-black font-mono font-bold  font-stretch-expanded text-5xl    flex  max-[695px]:text-5xl  max-[478px]:text-3xl">
          Shops <p className="text-white">e</p>
        </h1>

        <p className="text-gray-600 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          alias voluptate tenetur in molestias optio delectus, maiores aut?
          Dolorem, minus consectetur.
        </p>
        <div className="w-40 h-10 rounded-xl bg-red-500 text-sm text-center flex justify-center items-center text-white whitespace-nowrap">
          Thanks for visiting.
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="text-black text-xl font-extrabold whitespace-nowrap">
          
          Important Links
        </h1>

        <a href="" className="text-gray-600 text-lg ">
          Home
        </a>
        <a href="" className="text-gray-600 text-lg ">
          About
        </a>
        <a href="" className="text-gray-600 text-lg ">
          Products
        </a>

        <a href="" className="text-gray-600 text-lg  whitespace-nowrap">
          Contact Us
        </a>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="text-black text-xl font-extrabold">Links</h1>

        <a href="" className="text-gray-600 text-lg ">
          Home
        </a>
        <a href="" className="text-gray-600 text-lg ">
          About
        </a>
        <a href="" className="text-gray-600 text-lg ">
          Products
        </a>

        <a href="" className="text-gray-600 text-lg  whitespace-nowrap">
          Contact Us
        </a>
      </div>
      <div className="flex   justify-center items-center flex-col gap-5">
        <div className="  text-xl text-black whitespace-nowrap flex items-center justify-center gap-2 max-[362px]:text-sm">
          
          <FaLocationPin />
          Location - Dehradun,India
        </div>

        <div className=" text-black flex text-4xl gap-4">
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
