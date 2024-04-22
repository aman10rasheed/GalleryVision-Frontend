import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// Import specific icons for each currency
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons/faEuroSign";
import { faPoundSign } from "@fortawesome/free-solid-svg-icons/faPoundSign";
import { faYenSign } from "@fortawesome/free-solid-svg-icons/faYenSign";

const CurrencyList = () => {
  // Sample currency data
  const currencies = [
    {
      id: 1,
      currencyType: "USD",
      rateInINR: 75.5,
      icon: faDollarSign, // FontAwesome icon for USD
    },
    {
      id: 2,
      currencyType: "EUR",
      rateInINR: 89.2,
      icon: faEuroSign, // FontAwesome icon for EUR
    },
    {
      id: 3,
      currencyType: "GBP",
      rateInINR: 103.8,
      icon: faPoundSign, // FontAwesome icon for GBP
    },
    {
      id: 4,
      currencyType: "JPY",
      rateInINR: 0.69,
      icon: faYenSign, // FontAwesome icon for JPY
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-card border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Currency Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Rate (INR)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currencies.map((currency) => (
            <tr key={currency.id}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                {/* Render the currency icon */}
                <FontAwesomeIcon
                  icon={currency.icon}
                  className="mr-2 text-blue-500"
                />
                {currency.currencyType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {currency.rateInINR.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-2">
                <button
                  className="text-blue-600 hover:text-blue-900"
                  title="Edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  title="Delete"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyList;
