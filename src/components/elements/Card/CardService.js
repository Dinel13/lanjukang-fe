import { Link } from "react-router-dom";

export default function CardService({ data }) {
  return (
    <div className="p-3 w-full xs:w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5 ">
      {/* // <div className="p-3 max-w-max"> */}
      <div className="bg-white border border-gray-300 relative shadow-lg transform duration-500 rounded-lg hover:shadow-xl hover:scale-105">
        <img
          className="rounded-lg h-56 w-full"
          src={
            process.env.REACT_APP_SERVER_URL_IMAGE + "/service/" + data.image
          }
          alt={data.name}
        />
        <div className="p-4 h-full overflow-hidden rounded-lg bg-white">
          <h3 className="text-gray-800 font-bold text-xl capitalize">
            {data.name}
          </h3>
          <div className="flex items-center justify-start text-gray-600 text-sm py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">
              {data.location},
              <span className="text-gray-700 font-semibold text-sm ml-1 capitalize">
                {data.type}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center my-1">
            <p className="text-gray-800 text-sm ">
              Rp
              <span className="font-semibold"> {data.price}</span>
            </p>
            <div className="flex text-yellow-600">
              {data.rating}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-end items-center space-x-2 my-1">
            <Link
              to={`layanan/detail/${data.id}`}
              className="py-1.5 text-sm px-4 btn-las"
            >
              Detail
            </Link>
            <Link
              to={`service/detail/${data.id}`}
              className="py-1.5 text-sm px-4 btn-sec"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
