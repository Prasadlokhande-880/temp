import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/html.png";
import img2 from "./shutterstock_535124956-1024x756.jpg";

const Login = () => {
  // State for user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      class="flex items-center justify-center w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${img2})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col mx-auto ">
        <div className="bg-[#ffffff] m-3 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mx-auto mt-10">
          <div className="p-1 space-y-6 md:space-y-5 sm:p-4">
            <h1 className="text-xl font-normal leading-tight tracking-tight text-[#333333] text-center md:text-[30px]">
              Log In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium font-sans text-[#666666]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium font-sans text-[#666666]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div className="p-0 m-0 flex flex-wrap">
                <button
                  type="submit"
                  className="font-medium text-sm p-2 px-5 m-3  border-solid border-2 bg-[#CAC7CF] text-[#626069] rounded-full"
                >
                  Log In
                </button>
                <p className="text-[16px] font-light text-[#111111] p-2 m-3">
                  Don't have an account?{" "}
                  <Link
                    to="/signUp"
                    className="font-medium  hover:underline text-[#333333] underline underline-offset-2"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
                </p>
              </div>
            </form>

            <div id="horizontal-line">
              <span id="separator">OR</span>
            </div>

            <div className="flex justify-center p-1">
              <button className="font-sans text-[#666666] font-normal flex items-center border bg-white  shadow-md px-6 py-2  rounded-full">
                <svg
                  className="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  <title>Google-color</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden m-auto w-[20%]">
        <span className="h-[150px] text-center">
          <img src={img} className="p-2 m-auto h-[150px]"></img>
          <p className="p-1 md:p-2 m-1 md:m-2 font-sans md:text-1xl sm:text-2xl text-xl font-black leading-10  text-[#F5F4F3]">
            Coding Decoded
          </p>
        </span>
      </div>
    </div>
  );
};

export default Login;
