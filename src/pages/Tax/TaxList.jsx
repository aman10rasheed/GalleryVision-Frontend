import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaxList = () => {
  // Sample tax data
  const taxes = [
    {
      id: 1,
      taxType: "VAT",
      taxRate: 10,
    },
    {
      id: 2,
      taxType: "GST",
      taxRate: 15,
    },
    {
      id: 3,
      taxType: "Sales Tax",
      taxRate: 8,
    },
    {
      id: 4,
      taxType: "Service Tax",
      taxRate: 12,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-card border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Tax Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Tax Rate (%)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {taxes.map((tax) => (
            <tr key={tax.id}>
              <td className="px-6 py-4 whitespace-nowrap">{tax.taxType}</td>
              <td className="px-6 py-4 whitespace-nowrap">{tax.taxRate}%</td>
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

export default TaxList;
