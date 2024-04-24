import React from "react";

const MusicHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
          Create New Music Partner
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <span className="mr-1">Last 6 Months</span>
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="monthYearDropdown"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicHeader;
