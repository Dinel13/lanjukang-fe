import React from "react";

import Card from "../../components/elements/Card/CardLayanan";

export default function Layanan() {
   return (
      <div className="container px-8 py-10 sm:pt-14 lg:pt-16 mx-auto">
         <h2 className="sm:text-3xl lg:text-4xl text-2xl font-bold  text-gray-900">
            Layanan Kami
         </h2>
         <div className="flex flex-wrap -mx-4 my-8">
            {["Kapal", "Paket Wisata", "Hotel", "Tour", "Kereta"].map(item => <Card name={item} key={item} />)}
         </div>
      </div>
   );
}
