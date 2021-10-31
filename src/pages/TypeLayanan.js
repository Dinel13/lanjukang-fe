import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Card from "../components/elements/Card/CardService";
import { showNotif } from "../store/notifSlice";

export default function TypeLayanan() {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setPending(true);
    try {
      async function getData() {
        const result = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/service/type/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": `application/json`,
            },
            body: null,
          }
        );
        const data = await result.json();
        if (!result.ok) {
          throw new Error(data.error.message || "Tidak bisa mendapatkan data");
        }
        setData(data.services);
      }
      getData();
    } catch (error) {
      console.log(error);
      dispatch(
        showNotif({
          status: "Error",
          message: error.message,
          action: null,
        })
      );
    } finally {
      setPending(false);
    }
  }, [id, dispatch]);

  return (
    <section className="text-gray-600 body-font">
      {pending && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
      <div className="container px-5 pt-10 sm:pt-14 lg:pt-16 pb-8  mx-auto">
        <h1 className="text-center md:text-5xl lg:text-6xl text-4xl font-medium tracking-wider title-font mb-4 text-gray-800">
          Tipe Layanan
        </h1>
        <h3 className="sm:text-xl mb-1 text-lg text-gray-700">
          type layanan{" "}
          <span className="text-gray-900 bg-red-200 p-1 rounded">{id}</span>
        </h3>
        <Link to="/layanan" className="block mb-10 text-blue-600">
          Lihat semua layanan
        </Link>
        <div className="flex flex-wrap -m-4">
          {!pending && data ? (
            data.map((item) => <Card key={item.id} data={item} />)
          ) : (
            <div className="px-4 text-lg text-gray-600 my-20">
              Data masih kosong, sabar yash...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
