import React from "react";

export default function CardTujuan() {
  return (
    <div className="p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div class="bg-white relative shadow-lg hover:shadow-xl duration-500 rounded-lg">
        <img
          class="rounded-lg "
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          alt=""
        />
        <div class="p-6  rounded-lg bg-white">
          <h3 class="text-gray-700 font-bold text-2xl hover:text-gray-900 hover:cursor-pointer">
            Takabonerate
          </h3>
          <div class="flex items-center text-gray-500 text-lg mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            Takalar, Sulsel
          </div>
          <p class="text-gray-800 ">
            from
            <span className="font-semibold"> $7877</span>
          </p>
          <div className="flex justify-between items-center my-1">
            <div className="flex text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.3 Start
            </div>
            <button class="py-2 px-4 btn-sec rounded-2xl">Book Now</button>
          </div>
        </div>
        {/* <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">$150</span>
        </div> */}
      </div>
    </div>
  );
}
