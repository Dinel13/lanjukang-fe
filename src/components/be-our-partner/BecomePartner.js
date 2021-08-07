import React from "react";

import partner1 from "../../assets/partner-1.png";
import partner2 from "../../assets/partner-2.png";
import partner3 from "../../assets/partner-3.png";
export default function BecomePartner() {
  return (
    <div className="container px-8 py-10 sm:pt-14 lg:pt-16  mx-auto">
      <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold  text-gray-900">
        Be Our Partner
      </h2>
      <div className="my-8">
        <div className="flex items-center">
          <img src={partner1} className="rounded-xl " alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-xl font-semibold">
              Allows new opportunities for overseas sales
            </p>
            <p>
              Travelers comes from around the world. Becoming our partner will
              expand your business without too much marketing costs
            </p>
          </div>
        </div>
        <div className="flex items-center ml-14 md:ml-20 lg:ml-24 -mt-8">
          <img src={partner2} className="rounded-xl " alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-xl font-semibold">
              Established marketplace that provides a level of trust between you
              and the buyer
            </p>
            <p>
              Provide greater transparency - availability, prices and stock
              levels are accessible in an open environment
            </p>
          </div>
        </div>
        <div className="flex items-center -mt-8">
          <img src={partner3} className="rounded-xl " alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-xl font-semibold">
              Reviews of your products and service may give new customers the
              confidence to buy
            </p>
            <p>
              Also opular with customers and offer a convenient way to compare
              prices and products from a single source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
