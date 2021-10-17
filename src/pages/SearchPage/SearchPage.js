import React from "react";
import CardTrip from "../../components/Card/CardTrip";

export default function SearchPage() {
  return (
    <div className="flex items-start flex-col md:flex-row ">
      {/* <div className="min-h-screen bg-gray-100 flex flex-col items-start sm:justify-center"> */}
      {/* <div className="fixed space-y-6 text-gray-500 bg-white rounded-lg border w-full md:w-3/12 md:h-full p-6 overflow-y-scroll sm:no-scrollbar shadow-lg"> */}
      <div className="bg-white rounded-lg border-r md:w-3/12 w-full md:min-h-screen p-6">
        <p>Filter your trip results by:</p>
        <div>
          <p>harga</p>
        </div>
        <div>
          <p>Fasilitas</p>
        </div>
        <div>
          <p>Review</p>
        </div>
      </div>

      <div className="md:w-9/12 w-full md:min-h-screen m-6">
        <div className="flex justify-between">
          <p>Hasil pencarian</p>
          <div className="flex items-center text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            <span>Sort By:</span>
            <select className="bg-transparent text-gray-700 font-semibold focus:outline-none">
              <option>Relevance</option>
              <option>Popular</option>
              <option>Terbaru</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap  w-full ">
          <CardTrip />
          <CardTrip />
          <CardTrip />
          <CardTrip />
          <CardTrip />
        </div>
      </div>
    </div>
  );
}
