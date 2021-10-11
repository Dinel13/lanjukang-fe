import { Link } from "react-router-dom";

export default function CardTujuan({ name }) {
   return (
      <div className="p-3 w-full 2xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
         <div class="bg-white relative border border-gray-300 rounded-md shadow-lg hover:shadow-xl duration-500">
            <Link to={name} className="flex justify-between items-center mx-3 py-6">
               <h2>{name}</h2>
               <div className="flex text-yellow-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
               </div>
            </Link>
         </div>
      </div>
   );
}
