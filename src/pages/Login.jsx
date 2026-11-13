import { IoMdContact } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



const Login = () => {







  return (
    <div
      className="h-screen w-full bg-[url(\src\assets\bgfashion.avif)]   bg-no-repeat bg-cover
      max-[834px]:h-auto
    "
    >
<div className=" h-screen bg-cyan-500/20 flex
  items-center justify-center max-[834px]:flex-col max-[834px]:pt-20 max-[834px]:h-auto max-[834px]:pb-10 ">


      <form

        className=" bg-white shadow-lg shadow-cyan-300 py-5  px-2 rounded-bl-xl rounded-tl-xl h-100 w-100 border-cyan-100 border-2   text-center flex flex-col justify-center items-center gap-4  max-[834px]:rounded-t-lg  max-[834px]:rounded-b-none max-[834px]:w-120
        max-[509px]:w-90
  "
      >
        <h1 className="text-2xl font-bold text-cyan-500">Login </h1>

        <input
        spellCheck="false"
       
          type="text"
          required
          placeholder="Enter Username"
          className="w-80 h-12 bg-gray-100   text-black text-center text-xl rounded-lg focus:outline-none  max-[509px]:w-60"
        />
        <input

          type="password"
          spellCheck="false"
          required
          placeholder="Password"
          className="w-80 h-12 bg-gray-100  text-black text-center text-xl rounded-lg  focus:outline-none max-[509px]:w-60"
        />

        <div className="w-full h-8  flex justify-between px-6 items-center">
        <div className=" flex gap-1 text-gray-400"><input type="checkbox" className="cursor-pointer"/>  <h1>Remember me</h1></div>
        <h1 className="cursor-pointer text-gray-400">Forgot Password</h1>




        </div>







        <button
        
        
        className="bg-cyan-500 w-1/4 h-1/9 text-white rounded-full cursor-pointer text-lg hover:scale-110">Submit</button>
        
     <hr className="text-black w-[90%]"></hr>
     <h1>Or connect with</h1>
     <div className=" flex gap-10 text-2xl"><FcGoogle className="cursor-pointer"/><FaFacebook className="cursor-pointer"/><FaTwitter className="cursor-pointer"/></div>
      



 </form>




<div className="w-100 h-100 bg-cyan-400  flex items-center justify-center flex-col gap-5 shadow-lg shadow-cyan-300 rounded-br-xl rounded-tr-xl  max-[834px]:rounded-b-lg  max-[834px]:rounded-t-none max-[834px]:w-120 max-[509px]:w-90">

  <h1 className="text-4xl text-white"><IoMdContact/></h1>
  <h1 className="text-4xl text-white whitespace-nowrap font-semibold">Hello,User</h1>
  <p className="text-lg text-white text-center w-80 ">Enter your personal details and start journey with us</p>
  <button className=" border-2 border-white w-40 cursor-pointer py-2 text-center justify-center items-center gap-3 rounded-full flex text-xl text-white hover:scale-110">Register <FaLongArrowAltRight/></button>







</div>









    </div>
    
    </div>
  );
};

export default Login;
