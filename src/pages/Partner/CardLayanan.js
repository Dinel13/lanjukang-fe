export default function CardTujuan({ item, currentClick, handleClick }) {
  // change style if clicked

  return (
    <div className="p-3 w-full 2xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <div
        onClick={() => handleClick(item.id)}
        className={`${
          currentClick === item.id
            ? "border-2 border-gray-600 "
            : "border border-gray-300 "
        }bg-white relative rounded-md shadow-lg hover:shadow-xl duration-500`}
      >
        <div className="flex justify-between items-center mx-3 py-6">
          <h2>{item.name}</h2>
          <div className="flex text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
