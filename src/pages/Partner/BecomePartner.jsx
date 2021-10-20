import React, {useState } from 'react'
import { useSelector } from 'react-redux'


import CardTujuan from './CardLayanan.js'
import CreateLayanan from './CreateLayanan.js';
import {selectRole, selectToken} from "../../store/authSlice"
import './BecomePartner.css'
import BecomeAdmin from './BecomeAdmin.js';

export default function BecomePartner() {
   const [clickedLayanan, setClickedLayanan] = useState(false);
   const token = useSelector(selectToken);
   const role = useSelector(selectRole)

   console.log(role);


   const CardClickHandler = (item) => {
      setClickedLayanan(item)
   }

   const layanan = [
      {id:1, name :"Kapal"},
      {id:2, name :"Paket Wisata"},
      {id:3, name :"Akomodasi"},
      {id:4, name :"Tour Guide"},
   ]


   return (
      <div className="container px-8 mt-20 mx-auto">
         {parseInt(role) !== 1 && <BecomeAdmin token={token} />}
         <div
            className="imageBecomePartner flex justify-center flex-col text-white"
         >
            <div className="mt-8 mx-8 xl:mx-32">
               <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold">
                  Tambahkan Layanan kamu
               </h1>
               <br />
               <div className="text-xl font-medium w-full md:w-5/6 lg:w-4/6 xl:w-1/2">
                  Karen semua orang memiliki kesempatan yang sama untuk berkambang di sini.
               </div>
               <br />
            </div>
         </div>
         <h1 className="mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
            Jenis Layanan yang kamu tawarkan
         </h1>

         {/* jika nama card diklik maka akan muncul form untuk menambahkan layanan
         dan ada border */}
         <div className="flex flex-wrap -mx-4 my-4">
            {layanan.map(
               item => <CardTujuan
                  handleClick={(param) => CardClickHandler(param)}
                  currentClick={clickedLayanan}
                  item={item}
                  key={item.id} />)}
         </div>
         {clickedLayanan && <CreateLayanan token={token} type={clickedLayanan} />}
      </div>
   )
}

