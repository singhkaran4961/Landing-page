import React from "react";
import Aboutuspro from "../components/Aboutuspro";
import { aboutproduct } from "../data";

const About = () => {
  return (
    <div className="h-auto w-full bg-blue-400 pt-40 pb-20">
      <div className="w-full h-20  item-center justify-center flex ">
        <h1 className="font-mono  text-6xl whitespace-nowrap text-black">
          About Us
        </h1>
      </div>
      <div className=" flex  justify-center items-center pt-10">
        <div className="grid-cols-[500px_400px_400px]  grid-rows-[500px] grid  rounded-xl overflow-hidden  shadow-xl shadow-cyan-300  max-[1392px]:grid-cols-[500px_400px] max-[924px]:grid-rows-[repeat(2,500px)] max-[924px]:grid-cols-[500px] max-[527px]:grid-cols-[320px]">
          <div className=" col-[1/2] row-[1/2]  cursor-pointer ">
            <img
              src="src/assets/floral.jpg"
              alt=""
              className="h-full w-full hover:scale-120"
            />
          </div>
          <div className="col-[2/4]  row-[1/2]   bg-gray-200 flex flex-col  justify-center   gap-5 items-center text-center  max-[1392px]:col-[2/3] max-[924px]:col-[1/2]  max-[924px]:row-[2/3]">
            <h1 className="font-mono text-5xl font-extrabold whitespace-nowrap text-black  max-[527px]:text-3xl">
              Our Stories
            </h1>
            <div className=" w-120 max-[1392px]:w-80 max-[527px]:w-50">
              <p className="text-2xl max-[1392px]:text-lg max-[527px]:text-sm">
                Shopse began with a simple idea: finding clothes you love
                shouldnt be complicated. We started in 1987/in Dehradun to
                create clothing versatile for everyday essentials, modern
                streetwear, or timeless occasionwear for people who want to feel
                comfortable and confident in what they wear. Today, were still
                guided by that same idea. We choose our styles carefully, pay
                attention to the details, and make getting dressed feel a little
                more like you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex  justify-center items-center pt-10">
        <div className="grid-cols-[400px_400px_500px] grid-rows-[500px] grid  rounded-xl overflow-hidden shadow-xl shadow-cyan-300 max-[1392px]:grid-cols-[400px_500px] max-[924px]:grid-cols-[500px] max-[527px]:grid-cols-[320px] max-[527px]:grid-rows-[250px_400px]">
          <div className=" col-[3/4] row-[1/2]  cursor-pointer max-[1392px]:col-[2/3] max-[924px]:col-[1/2] max-[924px]:row-[2/3]">
            <img
              src="src/assets/denim.jpg"
              alt=""
              className="h-full w-full hover:scale-120"
            />
          </div>
          <div className="col-[1/3]  row-[1/2]  flex flex-col  justify-center   gap-10 items-center text-center   bg-gray-200 max-[1392px]:col-[1/2] ">
            <h1 className="font-mono text-5xl font-extrabold whitespace-nowrap text-black max-[527px]:text-xl">
              Our Mission
            </h1>
            <div className=" w-120 max-[1392px]:w-80 max-[527px]:w-50">
              <p className="text-2xl max-[1392px]:text-lg max-[527px]:text-sm">
                Our mission at Shopse is to make clothing that helps people feel
                comfortable, confident, and true to themselves. We believe great
                style should feel effortless and be accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-20  item-center justify-center flex  mt-30">
        <h1 className="font-mono text-5xl whitespace-nowrap text-black max-[594px]:text-4xl max-[426px]:text-2xl">
          Made with you in mind
        </h1>
      </div>

      <div className="w-full h-80 flex justify-evenly  gap-10 flex-wrap  items-center mt-5 max-[960px]:h-auto">
        {aboutproduct.map((e, idx) => {
          return <Aboutuspro title={e.title} para={e.para} />;
        })}
      </div>
    </div>
  );
};

export default About;
