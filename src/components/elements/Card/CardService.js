import {Link} from "react-router-dom";

export default function CardService({data}) {
  return (
    // <div className="p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="p-3 max-w-xs">
      <div className="bg-white relative shadow-lg hover:shadow-xl duration-500 rounded-lg">
        <img
          className="rounded-lg h-56 w-60"
          src={process.env.REACT_APP_SERVER_URL_IMAGE + "/service/" + data.image}
                    alt={data.name}
        />
        <div className="p-6  rounded-lg bg-white">
          <h3 className="text-gray-700 font-bold text-2xl hover:text-gray-900 hover:cursor-pointer">
            {data.name}
          </h3>
          <div className="flex justify-between items-center my-1">

          <p className="text-gray-500">{data.type}</p>
          <div className="flex items-center justify-end text-gray-500 text-lg mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {data.location}
          </div>
          </div>
          <p className="text-gray-800 ">
            from
            <span className="font-semibold"> Rp {data.price}</span>
          </p>
          <div className="flex justify-between items-center my-1">
            <div className="flex text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {data.rating}
            </div>
            <Link to={`service/detail/${data.id}`} className="py-2 px-4 btn-sec rounded-full">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
