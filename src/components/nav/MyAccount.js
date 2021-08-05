import { Link } from "react-router-dom";

export default function MyAccount({ profile, setProfile }) {
  return (
    <div className="ml-6 relative">
      <div
        className="flex items-center relative"
        onClick={() => setProfile(!profile)}
      >
        {profile && (
          <ul className="p-2 w-40 border-r bg-gray-50 absolute rounded right-0 shadow-lg top-0 mt-16 ">
            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <Link to="/akunku" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={7} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span className="ml-2">Akun ku</span>
              </Link>
            </li>
            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
              <Link to="/bantuan" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-help"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <line x1={12} y1={17} x2={12} y2="17.01" />
                  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                </svg>
                <span className="ml-2">Pusat Bantuan</span>
              </Link>
            </li>
          </ul>
        )}
        <div className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-3xl bg-white focus:outline-none focus:border-white transition duration-150 ease-in-out">
        <div className="mx-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
          <img
            className="rounded-full my-1 mx-2  h-8 w-8 object-cover"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
            alt="logo"
          />
        </div>
       
      </div>
    </div>
  );
}
