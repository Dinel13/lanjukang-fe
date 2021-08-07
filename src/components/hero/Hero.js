import React from "react";

import "./hero.css";

export default function Hero() {
  return (
    <div
      className="-mt-20 xl:-mt-12 heroku flex justify-center flex-col text-white"
      style={{ minHeight: "37rem" }}
    >
      <div className="mx-8">
        <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold">Life is full of opportunity</h1>
        <br/>
        <div className="text-xl font-medium w-full md:w-4/6 lg:w-1/2 xl:w-2/6">
          Regardless of where your trip is taking you, be sure to embrace the
          journey.
        </div>
        <br/>
        <div className="inline-flex p-2 items-center bg-gray-100 rounded-xl">
          <input type="text" />{" "}
          <button className="btn-ter py-1 px-3 leading-none rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
}
