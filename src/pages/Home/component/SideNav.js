import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/J.png";
import Auth from "./AuthButton";

export default function SideNav({ show, setShow, token }) {
  return (
    <div
      className={
        show
          ? "w-full xl:hidden h-full  fixed z-40  transform  translate-x-0 bottom-0 left-0 "
          : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full "
      }
    >
      <div
        className="bg-gray-800 opacity-50 w-full h-full"
        onClick={() => setShow(!show)}
      />
      <div className="w-64 z-40 fixed overflow-y-auto top-0 text-gray-800 bg-gray-50 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
        <div className="px-6 h-full">
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <div className="mt-6 flex w-full items-center justify-between">
                <div className="flex items-center justify-between w-full">
                  <Link
                    to="/"
                    onClick={() => setShow(!show)}
                    className="flex items-center w-24"
                  >
                    <img src={logo} alt="logo" className="h-6 mr-1" />
                    <p className="text-lg tracking-wide font-medium">Lanjukang</p>
                  </Link>
                  <div
                    id="cross"
                    className="text-gray-800"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>

              <ul className="f-m-m">
                <li className="text-gray-800 pt-10 hover:text-indigo-700">
                  <Link
                    to="/perjalana"
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-grid"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={4} y={4} width={6} height={6} rx={1} />
                          <rect x={14} y={4} width={6} height={6} rx={1} />
                          <rect x={4} y={14} width={6} height={6} rx={1} />
                          <rect x={14} y={14} width={6} height={6} rx={1} />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Perjalanan</p>
                    </div>
                  </Link>
                </li>

                <li className="text-gray-800 pt-8 hover:text-indigo-700">
                  <Link
                    to="/penunjuk"
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                        </div>
                        <p className=" xl:text-base text-base ml-3">guided</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="text-gray-800 pt-8 hover:text-indigo-700">
                  <Link
                    to="/akunku"
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                        </div>
                        <p className="xl:text-base text-base ml-3">akun ku</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="text-gray-800 hover:text-indigo-700 pt-8">
                  <Link
                    to="/bantuan"
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 md:w-8 md:h-8 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-help"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={17} x2={12} y2="17.01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                          </svg>
                        </div>
                        <p className="xl:text-base text-base ml-3">bantuan</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full pt-4">
              <hr className="-mx-4 border-gray-300 border mb-4 " />
              {!token ? (
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      alt="profile-pic"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                      className="w-8 h-8 rounded-md"
                    />
                    <p className=" text-gray-800 text-base leading-4 ml-2">
                      Ainun
                    </p>
                  </div>
                  <ul className="flex">
                    <li className="cursor-pointer text-gray-800 pt-2 pb-3">
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-messages"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                        </svg>
                      </div>
                    </li>
                    <li className="cursor-pointer text-gray-800 pt-2 pb-3 pl-3">
                      <div className="w-6 h-6 md:w-8 md:h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                <div onClick={() => setShow(!show)}>
                  <Auth />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
