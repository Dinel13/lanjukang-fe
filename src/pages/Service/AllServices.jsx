import React, { useEffect, useState } from "react";

import Card from "../../components/elements/Card/CardService";
import Loading from "../../components/layout/loading";

export default function AllServices() {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const [popularService, setPopularService] = useState([]);

  useEffect(() => {
    const fetchPopularService = async () => {
      try {
        const result = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/service/list`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await result.json();
        if (!result.ok) {
          throw new Error(data.message || "gagal mendapat layanan");
        }
        setPopularService(data.services);
      } catch (error) {
        setError(true);
      } finally {
        setPending(false);
      }
    };
    fetchPopularService();
  }, []);
// });

  return (
    <div className="container px-8 py-10 sm:pt-14 lg:pt-16  mx-auto">
      <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold  text-gray-900">
        Semua Layanan 
      </h2>
      <div className="flex flex-wrap -mx-4 my-8">
        {pending && <Loading />}
        {error && (
          <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
            Belum tersedia tulisan Terbaru
          </h3>
        )}
        {popularService &&
          popularService.map((item) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
}
