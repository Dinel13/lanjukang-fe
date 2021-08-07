import React from "react";

import partner1 from "../../assets/partner-1.jpg";
import partner2 from "../../assets/partner-2.jpg";
import partner3 from "../../assets/partner-3.jpg";
export default function BecomePartner() {
  return (
    <div className="container px-8 py-10 sm:pt-14 lg:pt-16  mx-auto">
      <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold  text-gray-900">
        Be Our Partner
      </h2>
      <div className="my-8">
        <div className="flex items-center">
          <img src={partner1} className="rounded-xl w-1/5 md:w-1/4 " alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-md md:text-lg lg:text-lg font-semibold">
              Allows new opportunities for overseas sales
            </p>
            <p className="text-sm lg:text-base xl:text-lg">
              Travelers comes from around the world. Becoming our partner will
              expand your business without too much marketing costs
            </p>
          </div>
        </div>
        <div className="flex items-center ml-10 sm:ml-16 md:ml-20 lg:ml-24 mt-4 md:-mt-8">
          <img src={partner2} className="rounded-xl w-1/5 md:w-1/4" alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-md md:text-lg lg:text-lg font-semibold">
              Established marketplace that provides a level of trust between you
              and the buyer
            </p>
            <p className="text-sm lg:text-base xl:text-lg">
              Provide greater transparency - availability, prices and stock
              levels are accessible in an open environment
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 md:-mt-8">
          <img src={partner3} className="rounded-xl w-1/5 md:w-1/4" alt="partner" />
          <div className="pl-4 max-w-lg">
            <p className="text-md md:text-lg lg:text-lg font-semibold">
              Reviews of your products and service may give new customers the
              confidence to buy
            </p>
            <p className="text-sm lg:text-base xl:text-lg">
              Also opular with customers and offer a convenient way to compare
              prices and products from a single source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
