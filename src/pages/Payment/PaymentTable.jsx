import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDownload } from "@fortawesome/free-solid-svg-icons";

const PaymentTable = ({ payments }) => {
  const samplePayments = [
    {
      date: "April 1, 2024",
      type: "Type A",
      amount: "$1000",
      licensorID: "LIC001",
    },
    {
      date: "March 28, 2024",
      type: "Type B",
      amount: "$500",
      licensorID: "LIC002",
    },
    {
      date: "February 15, 2024",
      type: "Type A",
      amount: "$700",
      licensorID: "LIC003",
    },
    {
      date: "January 25, 2024",
      type: "Type C",
      amount: "$1200",
      licensorID: "LIC004",
    },
    {
      date: "December 10, 2023",
      type: "Type B",
      amount: "$800",
      licensorID: "LIC005",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Licensor ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Invoice Generated Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {samplePayments.map((payment, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  checked={selectedRows.includes(index)}
                  onChange={() => toggleRowSelection(index)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {payment.licensorID}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {payment.type === "Type A" || payment.type === "Type B"
                  ? "Music"
                  : "Channel"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  title="View"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
