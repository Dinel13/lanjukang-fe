import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../../assets/logo1.png";
import MyAccount from "./MyAccountButton";
import Nav from "./NavLinks";
import SideNav from "./SideNav";
import Auth from "./AuthButton";

export default function Navbar() {
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const name = useSelector((state) => state.auth.name);
  
  console.log(name);
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [offset, setOffset] = useState(0);
  const pathname = location.pathname;

  useEffect(() => {
    //to get value of scrool
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      <div className="bg-transparent h-full w-full text-white font-semibold mb-16">
        {/* BIG SCREEN NAV */}
        <nav
          className={`fixed left-0 top-0 w-full lg:block hidden z-20 ${
            offset < 10.58 && pathname === "/"
              ? "bg-transparent"
              : " text-gray-800 shadow-md bg-gradient-to-r from-gray-100  to-yellow-200"
              // : "bg-gray-50 text-gray-800 shadow-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
          }`}
        >
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              {/* for branc nav*/}
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="logo" className="h-10 mr-1" />
                  <p className="text-lg tracking-widest font-bold">Lanjukang</p>
                </Link>
              </div>
              <div className="flex items-center">
                <Nav />
                {/* <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    <div className="flex items-center justify-center w-full">
                      <div className=" absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="#A0AEC0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </div>
                      <input
                        className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-600  pl-10 py-2"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex items-center">
                <Link
                  to="/become-partner"
                  className="flex px-5 items-center py-6 text-sm leading-5 hover:text-gray-200  focus:outline-none transition duration-150 ease-in-out"
                >
                  Tawarkan jasa kamu
                </Link>
                {token ? (
                  <MyAccount profile={profile} setProfile={setProfile} />
                ) : (
                  <Auth />
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* SMALL SCREEN NAV */}
        <nav className="bg-white block lg:hidden">
          <div
            className={`pixed py-4 px-4 md:px-6 w-full flex xl:hidden justify-between items-center fixed top-0 z-40 ${
              offset < 10.58 && pathname === "/"
                ? "bg-transparent"
                : "bg-gray-50 text-gray-800 shadow-md"
            }`}
          >
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800 mr-3"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
              <Link to="/" className="flex items-center w-24">
                <img src={logo} alt="logo" className="h-6 mr-1" />
                <p className="text-lg tracking-wide font-medium">Jokkaki</p>
              </Link>
            </div>
            {/* <div className="flex items-center">
              <div className="flex justify-center w-full">
                <div className="relative w-full">
                  <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-search"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#A0AEC0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                  </div>
                  <input
                    className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div> */}
          </div>
          {/*Mobile responsive sidebar*/}
          <SideNav setShow={setShow} show={show} token={token} />
        </nav>
      </div>
    </>
  );
}
