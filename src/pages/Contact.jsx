import React from "react";

const Contact = () => {
  return (
    <div className="h-auto bg-blue-400 pt-32 pb-5">
      <div className="w-full h-20  item-center justify-center flex ">
        <h1 className="font-mono  text-6xl whitespace-nowrap text-black max-[627px]:text-4xl">
          Contact Us
        </h1>
      </div>
       

      <div className="flex justify-center flex-col pt-10 items-center">
        <div className=" w-full flex justify-center pb-3 items-center flex-col gap-2">
              <h1 className="text-4xl font-extrabold  text-gray-700 max-[1320px]:text-3xl">
                Get in touch with
              </h1>
              <h1 className="text-3xl font-extrabold font-mono  text-gray-700">
                Our team
              </h1>
            </div>
        <div className="grid-cols-[550px_600px] grid-rows-[500px]  shadow-cyan-400 shadow-lg grid rounded-xl overflow-hidden max-[1320px]:grid-cols-[560px_500px] max-[1320px]:grid-rows-[500px] max-[1085px]:grid-rows-[500px_500px] max-[1085px]:grid-cols-[750px] max-[770px]:grid-cols-[600px] max-[770px]:grid-rows-[500px_550px] max-[627px]:grid-cols-[400px] max-[627px]:grid-rows-[400px_500px] max-[426px]:grid-cols-[300px] max-[426px]:grid-rows-[300px_500px] ">
          <div className="opacity-80 overflow-hidden">
            <img
              src="\src\assets\contactus.jpg"
              className="h-full w-full hover:scale-120 transition-all ease-in-out hover:opacity-90"
              alt=""
            />
          </div>
          <div className="bg-blue-300 col-[2/3] pt-5 px-3 max-[1085px]:col-[1/2]">
           

            <form
              className="flex justify-center items-center gap-5 pt-2  flex-col"
              action=""
            >
              <div className=" flex justify-center items-center flex-col">
                <h1 className="text-2xl text-gray-600 font-bold font-mono">
                  Name
                </h1>
                <input
                  type="text"
                  className="bg-gray-200 h-9 w-100  rounded-full text-center max-[627px]:w-60 "
                />
              </div>
              <div className=" flex justify-center items-center flex-col">
                <h1 className="text-2xl text-gray-600 font-bold font-mono">
                  Email Address
                </h1>
                <input
                  type="text"
                  className="bg-gray-200 h-9 w-100  rounded-full text-center max-[627px]:w-60"
                />
              </div>
              <div className=" flex justify-center items-center flex-col">
                <h1 className="text-2xl text-gray-600 font-bold font-mono">
                  Phone
                </h1>
                <input
                  type="text"
                  className="bg-gray-200 h-9 w-100  rounded-full text-center max-[627px]:w-60"
                />
              </div>
              <div className=" flex justify-center items-center flex-col">
                <h1 className="text-2xl text-gray-600 font-bold font-mono">
                  Your message
                </h1>
                <textarea
                  className="bg-gray-200 h-20 w-100   text-start px-5 py-2 max-[627px]:w-60  "
                 name=""
                  id=""
                ></textarea>
              </div>
              <button className="bg-red-500 text-white rounded-full h-12 cursor-pointer w-50">Submit</button>
            </form>
          </div>
        </div>
      </div>



<div className=" flex justify-center items-center pt-10 px-25">
    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27996.257841552928!2d77.1061207894083!3d28.70363619003076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sin!4v1794577545057!5m2!1sen!2sin" width="100%" height="450" className="max-[627px]:w-100" ></iframe>
</div>



    </div>
  );
};

export default Contact;
