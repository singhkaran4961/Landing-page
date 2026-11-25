import { IoMdContact } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [status, setstatus] = useState("login");
  const [onclickset, setonclickset] = useState("Register");
  const [title, settitle] = useState("Login");

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    forgotinfo: "",
    gender: "",
  });

  function handler(e) {
    let { name, value } = e.target;

    setformdata({ ...formdata, [name]: value });
  }

  return (
    <div
      className="h-screen w-full bg-[url(\src\assets\bgfashion.avif)]   bg-no-repeat bg-cover
      max-[834px]:h-auto
    "
    >
      <h1>{formdata.name}</h1>
      <h1>{formdata.email}</h1>
      <h1>{formdata.password}</h1>
      <h1>{formdata.forgotinfo}</h1>
      <h1>{formdata.gender}</h1>

      <div
        className=" h-screen bg-cyan-500/20 flex
  items-center justify-center max-[834px]:flex-col max-[834px]:pt-20 max-[834px]:h-auto max-[834px]:pb-10  "
      >
        <form
          className=" bg-white shadow-lg shadow-cyan-300 py-5  px-2 rounded-bl-xl rounded-tl-xl h-100 w-100 border-cyan-100 border-2   text-center flex flex-col justify-center items-center gap-4  max-[834px]:rounded-t-lg  max-[834px]:rounded-b-none max-[834px]:w-120
        max-[509px]:w-80 

  "
        >
          <h1 className="text-2xl font-bold text-cyan-500">{title}</h1>

          {status == "register" ? (
            <input
              spellCheck="false"
              onChange={handler}
              type="text"
              required
              placeholder="Name"
              name="name"
              value={formdata.name}
              className="w-80 h-12 bg-gray-100   text-black text-center text-xl rounded-lg focus:outline-none  max-[509px]:w-60"
            />
          ) : (
            ""
          )}

          {status == "forgetpass" ? (
            <input
              spellCheck="false"
              onChange={handler}
              name="forgotinfo"
              value={formdata.forgotinfo}
              type="text"
              required
              placeholder="Email or phonenumber"
              className="w-80 h-12 bg-gray-100   text-black text-center text-xl rounded-lg focus:outline-none  max-[509px]:w-60"
            />
          ) : (
            <input
              spellCheck="false"
              onChange={handler}
              type="text"
              required
              placeholder="Email"
              name="email"
              value={formdata.email}
              className="w-80 h-12 bg-gray-100   text-black text-center text-xl rounded-lg focus:outline-none  max-[509px]:w-60"
            />
          )}

          {status == "forgetpass" ? (
            ""
          ) : (
            <input
              onChange={handler}
              type="password"
              spellCheck="false"
              required
              placeholder="Password"
              name="password"
              value={formdata.password}
              className="w-80 h-12 bg-gray-100  text-black text-center text-xl rounded-lg  focus:outline-none max-[509px]:w-60"
            />
          )}

          {status == "register" ? (
            <div className="flex  px-9  item-center">
              <div className="flex  text-gray-600  gap-2 max-[510px]:flex-col">
                <label className="text-black" htmlFor="">
                  Gender :{" "}
                </label>

                <div className="flex gap-1 pr-3 cursor-pointer max-[510px]:pr-0 ">
                  <input
                    name="gender"
                    onChange={handler}
                    className="cursor-pointer"
                    value="m"
                    type="radio"
                  />
                  Male
                </div>
                <div className="flex gap-1 pr-3 cursor-pointer max-[510px]:pr-0 ">
                  {" "}
                  <input
                    name="gender"
                    onChange={handler}
                    className="cursor-pointer"
                    value="f"
                    type="radio"
                  />
                  Female
                </div>
                <div className="flex gap-1 pr-3 cursor-pointer max-[510px]:pr-0 ">
                  <input
                    name="gender"
                    onChange={handler}
                    className="cursor-pointer"
                    value="o"
                    type="radio"
                  />
                  Others
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {status == "login" ? (
            <div className="w-full h-8  flex justify-between px-6 items-center">
              <div className=" flex gap-1 text-gray-400">
                <input type="checkbox" className="cursor-pointer" />{" "}
                <h1>Remember me</h1>
              </div>
              <h1
                onClick={() => {
                  settitle("Find Account");
                  setstatus("forgetpass");
                }}
                className="cursor-pointer text-gray-400"
              >
                Forgot Password
              </h1>
            </div>
          ) : (
            ""
          )}

          <button className="bg-cyan-500 w-1/4 h-1/9 text-white rounded-full cursor-pointer text-lg hover:scale-110">
            Submit
          </button>

          {status == "login" ? (
            <>
              <hr className="text-black w-[90%]"></hr>
              <h1>Or connect with</h1>
              <div className=" flex gap-10 text-2xl">
                <FcGoogle className="cursor-pointer" />
                <FaFacebook className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
              </div>
            </>
          ) : (
            ""
          )}
        </form>

        <div className="w-100 h-100 bg-cyan-400  flex items-center justify-center flex-col gap-5 shadow-lg shadow-cyan-300 rounded-br-xl rounded-tr-xl  max-[834px]:rounded-b-lg  max-[834px]:rounded-t-none max-[834px]:w-120 max-[509px]:w-80">
          <h1 className="text-4xl text-white">
            <IoMdContact />
          </h1>
          <h1 className="text-4xl text-white whitespace-nowrap font-semibold">
            Hello,User
          </h1>
          <p className="text-lg text-white text-center w-80 ">
            Enter your personal details and start journey with us
          </p>
          <button
            onClick={() => {
              if (onclickset == "Register") {
                setstatus("register");
                settitle("Register");

                setonclickset("Login");
              } else {
                setstatus("login");
                settitle("Login");
                setonclickset("Register");
              }
            }}
            className=" border-2 border-white w-40 cursor-pointer py-2 text-center justify-center items-center gap-3 rounded-full flex text-xl text-white hover:scale-110"
          >
            {onclickset} <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
