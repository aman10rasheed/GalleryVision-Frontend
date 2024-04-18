import React, { useState } from "react";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex items-center gap-2.5 cursor-pointer focus:outline-none hover:bg-gray-700 hover:text-black p-2 rounded-xl"
      >
        <img
          src="./src/assets/images/users/avatar-6.jpg"
          alt="user-image"
          className="rounded-full h-8 w-8"
        />
        <div className="hidden md:flex items-center font-medium text-base gap-2 ">
          Jamie D.
          <svg
            className={`ml-1 h-4 w-4 ${
              isOpen ? "transform rotate-180" : ""
            } hover:text-gray-700`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L10 10.086l-3.293-3.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 top-full left-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
          >
            Inbox
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
          >
            Lock Account
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-gray-900"
          >
            Log Out
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;
