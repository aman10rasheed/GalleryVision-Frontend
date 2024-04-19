import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faSort } from "@fortawesome/free-solid-svg-icons";

const CurrencyHeader = ({ onCreateNewCurrency }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can implement the search functionality here
  };

  const handleSort = (key) => {
    setSortBy(key);
    // You can implement the sorting functionality here
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={onCreateNewCurrency}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Create New Currency
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
      <div>
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={() => handleSort("currencyType")}
        >
          <FontAwesomeIcon icon={faSort} className="mr-1" />
          Sort by Currency Type
        </button>
        <button
          className="text-gray-600 hover:text-gray-900 ml-4"
          onClick={() => handleSort("rateInINR")}
        >
          <FontAwesomeIcon icon={faSort} className="mr-1" />
          Sort by Rate (INR)
        </button>
      </div>
    </div>
  );
};

export default CurrencyHeader;
