import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CSVupload = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleChannelFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the channel file here
    console.log("Selected file for channel:", file);
  };

  const handleMusicFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the music file here
    console.log("Selected file for music:", file);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* SideNav */}
      <div
        className={`w-1/6 transition-transform duration-300 ease-in ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full hidden"
        }`}
      >
        <SideNav />
      </div>
      {/* Main Content */}
      <div className="md:w-full  relative">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />
        {/* Content */}
        <h1 className="bg-gray-300 text-xl font-extrabold p-2 border-none">
          Upload CSV
        </h1>
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
          <div className="flex flex-col  md:flex-row gap-6">
            {/* Channel CSV Upload */}
            <div className="bg-blue-gray-100 shadow-md rounded-lg p-8 flex flex-col items-center">
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faFileCsv}
                  className="text-blue-500 text-4xl"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Upload Channel CSV File
              </h2>
              <input
                type="file"
                accept=".csv"
                className="mb-4 py-2 px-4 border border-gray-300 rounded-md"
                onChange={handleChannelFileChange}
              />
              <p className="text-gray-600 text-sm">
                Please select a CSV file for YouTube channel.
              </p>
            </div>

            {/* Music CSV Upload */}
            <div className="bg-blue-gray-100 shadow-md rounded-lg p-8 flex flex-col items-center">
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={faFileCsv}
                  className="text-green-500 text-4xl"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">Upload Music CSV File</h2>
              <input
                type="file"
                accept=".csv"
                className="mb-4 py-2 px-4 border border-gray-300 rounded-md"
                onChange={handleMusicFileChange}
              />
              <p className="text-gray-600 text-sm">
                Please select a CSV file for YouTube music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSVupload;
