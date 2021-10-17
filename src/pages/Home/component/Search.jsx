import { useState } from "react";
import { listAllDestiny } from "../../../actions/destiny";

const Search = () => {
   const [values, setValues] = useState({
      search: undefined,
      results: [],
      searched: false,
      message: "",
   });

   // const { search, results, searched, message } = values;
   const { search } = values;

   const searchSubmit = (e) => {
      e.preventDefault();
      listAllDestiny({ search }).then((data) => {
         setValues({
            ...values,
            results: data,
            searched: true,
            message: `${data.length} blogs found`,
         });
      });
   };

   const handleChange = (e) => {
      // console.log(e.target.value);
      setValues({
         ...values,
         search: e.target.value,
         searched: false,
         results: [],
      });
   }
   return (
      <div className="inline-flex py-1 px-3 items-center bg-white rounded-3xl text-gray-800">
         <form className="flex w-full" onSubmit={searchSubmit}>
            <div className="flex w-3/4">
               <input
                  type="search"
                  className="py-2 px-4 plac outline-none"
                  placeholder="Mau kemana?"
                  onChange={handleChange}
               />

               <button className="btn-ter ml-2 p-3 rounded-full" type="submit">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                  >
                     <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                     />
                  </svg>
               </button>
            </div>
         </form>
      </div>
   )
}

// const Search = () => {
//    return (
//       <div className="inline-flex py-1 px-3 items-center bg-gray-100 rounded-3xl text-gray-800">
//          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
//             <label className="text-sm">Lokasi</label>
//             <input
//                className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
//                type="text"
//                placeholder="Search"
//             />
//          </div>
//          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
//             <label className="text-sm">Tanggal</label>
//             <input
//                className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
//                type="text"
//                placeholder="Search"
//             />
//          </div>
//          <div className="flex flex-col px-4 border-r-2 w-20 sm:w-24 border-gray-200">
//             <label className="text-sm">People</label>
//             <input
//                className="bg-transparent focus:outline-none rounded text-sm text-gray-800 py-1"
//                type="text"
//                placeholder="Search"
//             />
//          </div>
//          <button className="btn-ter ml-2 p-3 rounded-full">
//             <svg
//                xmlns="http://www.w3.org/2000/svg"
//                className="h-5 w-5"
//                viewBox="0 0 20 20"
//                fill="currentColor"
//             >
//                <path
//                   fillRule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                   clipRule="evenodd"
//                />
//             </svg>
//          </button>
//       </div>
//    )
// }
export default Search