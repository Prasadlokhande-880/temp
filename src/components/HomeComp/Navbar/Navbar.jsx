import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./activelink.css";

import img from "../../../assets/menus.png";
import img2 from "../../../assets/wrong.png";
import img3 from "../../../assets/html.png";

const Navbar = ({ menuOpen, onToggleMenu }) => {
  const [active, setActive] = useState(""); // Initialize active state

  useEffect(() => {
    // Set the active state based on the window location
    setActive(window.location.pathname);
    console.log(active);
  }, []);

  const [display, setDisplay] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const getWindowSize = () => {
    return window.innerWidth;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 877) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [windowSize]);

  return (
    <div className={`${menuOpen ? "delay-500" : "relative"} z-10 h-24`}>
      <div
        className={`${
          menuOpen ? "delay-500" : "fixed top-0 left-0 right-0"
        } bg-[#0F0529]`}
      >
        <header className="py-2 z-10 m-[0px] p-[0px] ">
          <nav
            id="navbar"
            className="flex justify-between items-center w-[92%] mx-auto"
          >
            <div className="font-sans text-2xl text-[#F5F4F3] leading-5 p-3 cursor-pointer">
              <img src={img3} alt="icon" className="p-0 m-0 w-16" />
            </div>

            <ul
              className={`font-sans text-lg text-[#CAC7CF] leading-5 flex md:flex-row flex-col md:items-center gap-8 md:gap-5 pl-10 md:p-1 md:m-1  ${
                display ? "block" : "hidden"
              }`}
            >
              <li className=" hover:text-white m-1 p-1 overflow-y-hidden">
                <NavLink to="/" className=" hover:text-white">
                  Home
                </NavLink>
              </li>
              <li className=" hover:text-white m-1 p-1 overflow-y-hidden">
                <NavLink to="/About" className=" hover:text-white">
                  About
                </NavLink>
              </li>
              <li className=" hover:text-white m-1 p-1 overflow-y-hidden">
                <NavLink to="/SuccessStories" className=" hover:text-white">
                  Success Stories
                </NavLink>
              </li>
              <li className=" hover:text-white m-1 p-1 overflow-y-hidden">
                <NavLink to="/Courses" className=" hover:text-white">
                  Courses
                </NavLink>
              </li>
            </ul>

            <div
              className={`duration-500 absolute bg-[#0F0529] md:min-h-fit w-full left-0 ${
                menuOpen ? "top-[0%]" : "top-[-100%]"
              } h-full w-full flex items-center px-5`}
            >
              {/* <div className="m-auto w-4/5 flex gap-11 p-5 items-center ">
                <div>
                  <ul className="flex flex-col leading-10 text-[#B8AABB] p-5 m-5 text-3xl font-bold font-sans gap-y-14 ">
                    <li className="border-b-2 border-pink-600 inline-block p-4 hover:bg-white duration-500">
                      <section className="pr-3">About</section>
                    </li>
                    <li className="border-b-2  border-pink-600  inline-block p-4  hover:bg-white duration-500">
                      <section className="pr-3">Courses</section>
                    </li>
                    <li className="border-b-2  border-pink-600 inline-block p-4 hover:bg-white duration-500">
                      <section className="pr-3">Blog</section>
                    </li>
                  </ul>
                </div>
                <div className="p-5  bg-[#5F5870] w-96 h-72 relative left-1/4"></div>
              </div> */}
              <div className="flex items-center gap-6">
                <ion-icon
                  onClick={onToggleMenu}
                  name={menuOpen ? "close" : "menu"}
                  className="text-3xl cursor-pointer md:hidden"
                >
                  <img
                    className="cursor-pointer w-14 absolute top-11 right-5"
                    src={img2}
                    alt="Menu"
                  />
                </ion-icon>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <ion-icon
                onClick={onToggleMenu}
                name={menuOpen ? "close" : "menu"}
                className="text-3xl cursor-pointer md:hidden "
              >
                <img
                  className="w-10 cursor-pointer sm:w-14"
                  src={img}
                  alt="Menu"
                />
              </ion-icon>
              <button
                className="border-gradient bg-[#0F0529] text-white px-6 py-2 m-3 border-2 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_3px_10px] hover:shadow-[#c8a1f4] transition duration-500 ease-in-out"
                id="border-gradient"
              >
                <Link id="text" className="p-[3px]" to="/signUp">
                  Sign in
                </Link>
              </button>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
