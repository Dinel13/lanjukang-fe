import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-gray-600 body-font mt-20">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
          <img src={logo} alt="logo" className="h-8 mr-1" />
          </div>

          <span className="ml-3 text-lg tracking-widest ">Lanjukang</span>
        </Link>
        <div className="flex sm:mt-0 mt-4">
          <Link to="/" className="text-sm text-gray-600 sm:ml-4 pl-4 sm:border-l-2 sm:border-gray-400 sm:py-1">
            Terms
          </Link>
          <Link  to="/"  className="text-sm text-gray-600 ml-4 pl-4 border-l-2 border-gray-400 sm:py-1">
            Privacy
          </Link>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="/" className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="/" className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="/"  className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}