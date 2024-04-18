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
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideNav />
      </div>
      {/* Main Content */}
      <div className="md:w-full relative">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />
        {/* Content */}
        <div className="container mx-auto mt-10">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6">
              {/* Channel CSV Upload */}
              <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={faFileCsv}
                    className="text-blue-500 text-4xl mr-2"
                  />
                  <h2 className="text-2xl font-bold">
                    Upload Channel CSV File
                  </h2>
                </div>
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
              <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon
                    icon={faFileCsv}
                    className="text-green-500 text-4xl mr-2"
                  />
                  <h2 className="text-2xl font-bold">Upload Music CSV File</h2>
                </div>
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
        ;
      </div>
    </div>
  );
};

export default CSVupload;
