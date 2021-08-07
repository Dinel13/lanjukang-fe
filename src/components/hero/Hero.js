import React from "react";

import "./hero.css";

export default function Hero() {
  return (
    <div
      className="-mt-20 xl:-mt-12 heroku flex justify-center flex-col text-white"
      style={{ minHeight: "37rem" }}
    >
      <div className="mt-8 mx-8 xl:mx-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Life is full of opportunity
        </h1>
        <br />
        <div className="text-xl font-medium w-full md:w-5/6 lg:w-4/6 xl:w-1/2">
          Regardless of where your trip is taking you, be sure to embrace the
          journey.
        </div>
        <br />
        <div className="inline-flex py-1 px-3 items-center bg-gray-100 rounded-3xl text-gray-800">
          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
            <label className="text-sm">Lokasi</label>
            <input
              className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
            <label className="text-sm">Tanggal</label>
            <input
              className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
            <label className="text-sm">People</label>
            <input
              className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
              type="text"
              placeholder="Search"
            />
          </div>      
          <button className="btn-ter ml-2 py-1.5 px-3 rounded-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
