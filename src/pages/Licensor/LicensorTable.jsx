import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faDownload,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

const LicensorTable = ({ licenses }) => {
  const sampleLicenses = [
    {
      licensorId: "LIC001",
      name: "John Doe",
      email: "john@example.com",
      type: "Music",
      date: "April 1, 2024",
    },
    {
      licensorId: "LIC002",
      name: "Jane Doe",
      email: "jane@example.com",
      type: "Channel",
      date: "March 28, 2024",
    },
    {
      licensorId: "LIC003",
      name: "Alice Smith",
      email: "alice@example.com",
      type: "Music/Channel",
      date: "February 15, 2024",
    },
    {
      licensorId: "LIC004",
      name: "Bob Johnson",
      email: "bob@example.com",
      type: "Channel",
      date: "January 25, 2024",
    },
    {
      licensorId: "LIC005",
      name: "Emma Wilson",
      email: "emma@example.com",
      type: "Music",
      date: "December 10, 2023",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Licensor ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sampleLicenses.map((license, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                {license.licensorId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{license.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{license.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{license.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{license.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  title="Invoice"
                >
                  <FontAwesomeIcon icon={faFileInvoice} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicensorTable;
