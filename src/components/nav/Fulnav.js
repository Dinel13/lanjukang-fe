import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/J.png";
import MyAccount from "./MyAccount";
import Nav from "./Nav";
import SideNav from "./SideNav";
import Auth from "./Auth";

export default function Fulnav() {
  const token = useSelector((state) => state.auth.token);
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="bg-transparent h-full w-full text-white font-semibold">
        {/* BIG SCREEN NAV */}
        <nav className="fixed left-0 top-0 w-full xl:block hidden mb-6">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              {/* for branc nav*/}
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <Link to="/" className="flex items-center w-24">
                  <img src={logo} alt="logo" className="h-8 mr-1" />
                  <p className="text-lg tracking-wide font-bold">Jokkaki</p>
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
                {!token ? (
                  <MyAccount profile={profile} setProfile={setProfile} />
                ) : (
                  <Auth />
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* SMALL SCREEN NAV */}
        <nav className="bg-white block xl:hidden mb-20">
          <div className="py-4 px-4 md:px-6 w-full flex xl:hidden justify-between items-center fixed top-0 z-40">
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
            <div className="flex items-center">
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
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <SideNav setShow={setShow} show={show} token={token} />
        </nav>
      </div>
    </>
  );
}
