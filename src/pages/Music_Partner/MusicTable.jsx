import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDownload } from "@fortawesome/free-solid-svg-icons";

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
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  title="Lock"
                >
                  <FontAwesomeIcon icon={faLock} />
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
