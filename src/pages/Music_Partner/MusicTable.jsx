import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
const MusicTable = () => {
  const sampleLicenses = [
    {
      licensorId: "LIC001",
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
    },
    {
      licensorId: "LIC002",
      name: "Jane Doe",
      email: "jane@example.com",
      status: "Inactive",
    },
    {
      licensorId: "LIC003",
      name: "Alice Smith",
      email: "alice@example.com",
      status: "Active",
    },
    {
      licensorId: "LIC004",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Active",
    },
    {
      licensorId: "LIC005",
      name: "Emma Wilson",
      email: "emma@example.com",
      status: "Inactive",
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
              Status
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
              <td className="px-6 py-4 whitespace-nowrap">{license.status}</td>
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
                <button
                  className="text-green-600 hover:text-green-900"
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

export default MusicTable;
