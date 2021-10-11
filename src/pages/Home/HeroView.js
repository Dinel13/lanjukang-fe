import React from "react";
import Search from "./component/Search";

import "./hero.css";

export default function HeroView() {
  return (
    <div
      className="-mt-20 xl:-mt-16 heroku flex justify-center flex-col text-white"
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
     <Search />
      </div>
    </div>
  );
}
