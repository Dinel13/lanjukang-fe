import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-yellow-300 text-gray-600 body-font mt-20">
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
          <Link
            to="/terms"
            className="text-sm text-gray-600 sm:ml-4 pl-4 sm:border-l-2 sm:border-gray-400 sm:py-1"
          >
            Terms
          </Link>
          <Link
            to="/prifacy"
            className="text-sm text-gray-600 ml-4 pl-4 border-l-2 border-gray-400 sm:py-1"
          >
            Privacy
          </Link>
        </div>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://github.com/Dinel13"
            target="blank"
            referrerPolicy="no-referrer"
            className="text-gray-500"
          >
            <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/SOlah03"
            target="blank"
            referrerPolicy="no-referrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/salahuddin_hafid/"
            target="blank"
            referrerPolicy="no-referrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
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
