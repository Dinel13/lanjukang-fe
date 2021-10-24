import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function MyDetailService() {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setPending(true);
    try {
      async function getData() {
        const result = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/service/detail/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": `application/json`,
            },
            body: null
          }
        );
        const data = await result.json();
        if (!result.ok) {
          throw new Error(data.error.message || "Tidak bisa mendapatkan data");
        }
        setData(data.service);
      }
      getData()
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, [id]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      {pending && <div className="loading-container">
        <div className="loading"></div>
      </div>}
      {!pending && data && (
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={
                process.env.REACT_APP_SERVER_URL_IMAGE + "/service/" + data.image
              }
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-600 tracking-widest">
                {data.type} by <Link to={data.owner_id} className="font-bold">{data.owner}</Link>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
                {data.name}
              </h1>
              <p>
                from <span className="font-semibold">{data.start}</span> to{" "}
                <span className="font-semibold">{data.destiny}</span>
              </p>
              <p className="leading-relaxed my-2">{data.description}</p>

              <div className="flex  items-center my-2">
                <span className="mr-1">Jarak tempuh</span>
                <span className="font-bold mr-1">
                  {data.distance}{" "}
                </span> dalam{" "}
                <span className="font-bold ml-1"> {data.duration}</span>
              </div>
              <p className="my-2">
                Jadwal Berangkat pukul{" "}
                <span className="font-bold">{data.time.substr(11, 5)}</span>{" "}
                tanggal{" "}
                <span className="font-bold">{data.date.substr(0, 10)}</span>
              </p>
              <div className="flex mb-2">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>

                  <span className="text-gray-600 ml-3">0 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="">{data.location}</p>
                </span>
              </div>
              <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Kapasitas</span>
                  {data.capacity}
                </div>
                <div className="flex">
                  <span className="mr-3">Harga</span>
                  {data.capacity}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rp
                  <span className="font-semibold"> {data.price}</span>
                </span>
                <button className="flex ml-auto py-2 px-6 btn-pri">
                  Booking
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
