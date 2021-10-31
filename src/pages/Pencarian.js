import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "../components/elements/Card/CardService";

export default function Pencarian() {
  const location = useLocation();
  const [data, setData] = useState(null);

  //to check if this from seach result or not
  // so its need to useEffet or not
  let stateData;
  let search;
  if (location.state) {
    stateData = location.state.data;
    search = location.state.search;
  }
  useEffect(() => setData(stateData), [stateData]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 sm:pt-14 lg:pt-16 pb-8  mx-auto">
        <h1 className="text-center md:text-5xl lg:text-6xl text-4xl font-medium tracking-wider title-font mb-4 text-gray-800">
          Hasil pencarian
        </h1>
        <h3 className="sm:text-xl mb-1 text-lg text-gray-700">
          Kata kunci{" "}
          <span className="text-gray-900 bg-red-200 p-1 rounded">{search}</span>
        </h3>
        <Link to="/layanan" className="block mb-10 text-blue-600">
          Lihat semua layanan
        </Link>
        <div className="flex flex-wrap -m-4">
          {data ?
            data.map(item => <Card key={item.id} data={item} />) : <div className="px-4 text-lg text-gray-600 my-20">Data masih kosong, perbaiki keyword kamu...</div>}
        </div>
      </div>
    </section>
  );
}
