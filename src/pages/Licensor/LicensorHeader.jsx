import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSort,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { format, addMonths } from "date-fns";
import { useNavigate } from "react-router-dom";

const LicensorHeader = ({ onCreateNewLicensor }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can implement the search functionality here
  };

  const handleSort = (key) => {
    setSortBy(key);
    // You can implement the sorting functionality here
  };

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const monthOptions = Array.from({ length: 3 }, (_, i) =>
    addMonths(new Date(), -i)
  );

  const handleCreateNewLicensor = () => {
    navigate("/createLicensor"); // Use navigate instead of history.push
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleCreateNewLicensor}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Create New Licensor
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 relative">
        <div className="flex items-center">
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-left"
            id="monthYearDropdown"
            onClick={toggleDropdown}
          >
            <span className="mr-1">{format(selectedMonth, "MMMM yyyy")}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {isDropdownOpen && (
            <div
              className="origin-bottom-left absolute left-0 bottom-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="monthYearDropdown"
            >
              <div className="py-1" role="none">
                {monthOptions.map((option, index) => (
                  <button
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                    onClick={() => handleMonthChange(option)}
                  >
                    {format(option, "MMMM yyyy")}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => handleSort("date")}
          >
            <FontAwesomeIcon icon={faSort} className="mr-1" />
            Sort by Date
          </button>
          <button
            className="text-gray-600 hover:text-gray-900 ml-4"
            onClick={() => handleSort("type")}
          >
            <FontAwesomeIcon icon={faSort} className="mr-1" />
            Sort by Type
          </button>
        </div>
      </div>
    </div>
  );
};

export default LicensorHeader;
