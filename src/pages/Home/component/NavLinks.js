import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className=" hidden lg:flex">
      <Link
        to="/perjalanan"
        className="flex px-5 items-center py-6 text-sm leading-5  hover:text-gray-200   focus:outline-none transition duration-150 ease-in-out"
      >
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-grid"
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
            <rect x={4} y={4} width={6} height={6} rx={1} />
            <rect x={14} y={4} width={6} height={6} rx={1} />
            <rect x={4} y={14} width={6} height={6} rx={1} />
            <rect x={14} y={14} width={6} height={6} rx={1} />
          </svg>
        </span>
        Perjalanan
      </Link>
      <Link
        to="/penunjuk"
        className="flex px-5 items-center py-6 text-sm leading-5  hover:text-gray-200   focus:outline-none transition duration-150 ease-in-out"
      >
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-puzzle"
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
            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
          </svg>
        </span>
        Semua Layanan
      </Link>
    </div>
  );
}
