import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

const ChannelTable = () => {
  // Sample channel data
  const channels = [
    {
      id: 1,
      logo: "https://via.placeholder.com/50",
      name: "Channel 1",
      email: "channel1@example.com",
      commission: 10,
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/50",
      name: "Channel 2",
      email: "channel2@example.com",
      commission: 15,
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/50",
      name: "Channel 3",
      email: "channel3@example.com",
      commission: 20,
    },
    {
      id: 4,
      logo: "https://via.placeholder.com/50",
      name: "Channel 4",
      email: "channel4@example.com",
      commission: 8,
    },
    {
      id: 5,
      logo: "https://via.placeholder.com/50",
      name: "Channel 5",
      email: "channel5@example.com",
      commission: 12,
    },
    {
      id: 6,
      logo: "https://via.placeholder.com/50",
      name: "Channel 6",
      email: "channel6@example.com",
      commission: 18,
    },
    {
      id: 7,
      logo: "https://via.placeholder.com/50",
      name: "Channel 7",
      email: "channel7@example.com",
      commission: 25,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Logo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Channel Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Commission %
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {channels.map((channel) => (
            <tr key={channel.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  className="h-8 w-8 rounded-full"
                  src={channel.logo}
                  alt={channel.name}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{channel.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{channel.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {channel.commission}%
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

export default ChannelTable;
