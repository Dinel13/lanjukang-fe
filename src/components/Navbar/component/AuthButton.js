import React from "react";
import { Link } from "react-router-dom";

export default function AuthButton() {
  return (
    <div className="flex items-center">
      <Link
        to="/masuk"
        className="inline-flex items-center text-sm mr-2 p-1.5 font-bold btn-transparent border-r border-gray-300"
      >
       
        Masuk
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
      <Link
        to="/daftar"
        className="inline-flex items-center rounded-xl leading-tight text-sm p-2 btn-prim"
      >
         Daftar
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </Link>
    </div>
  );
}
