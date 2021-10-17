import React from "react";

import Card from "../../components/elements/Card/CardTrip";

export default function PopularDestView() {
  return (
    <div className="container px-8 py-10 sm:pt-14 lg:pt-16  mx-auto">
      <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold  text-gray-900">
        Tujuan Terpopular
      </h2>
      <div className="flex flex-wrap -mx-4 my-8">
        {/* {status.pending && <Loading />}
          {status.error && (
            <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
              Belum tersedia tulisan Terbaru
            </h3>
          )}
          {blogData &&
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
