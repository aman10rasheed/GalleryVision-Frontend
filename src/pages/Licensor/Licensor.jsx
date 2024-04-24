import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import LicensorHeader from "./LicensorHeader";
import LicensorTable from "./LicensorTable";

const Licensor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sampleData = [
    {
      licensorId: "LIC001",
      type: "Type A",
      date: "April 1, 2024",
      status: "paid",
    },
    {
      licensorId: "LIC002",
      type: "Type B",
      date: "March 28, 2024",
      status: "pending",
    },
    {
      licensorId: "LIC003",
      type: "Type A",
      date: "February 15, 2024",
      status: "paid",
    },
    {
      licensorId: "LIC004",
      type: "Type C",
      date: "January 25, 2024",
      status: "pending",
    },
    {
      licensorId: "LIC005",
      type: "Type B",
      date: "December 10, 2023",
      status: "paid",
    },
  ];

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
      <div className="md:w-full relative">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />
        {/* Content */}
        <h1 className="bg-background text-xl font-extrabold p-2">Licensor</h1>
        <div className="p-4">
          <LicensorHeader
            onCreateNewLicensor={() => console.log("Creating a new licensor")}
          />
          <LicensorTable licenses={sampleData} />
        </div>
      </div>
    </div>
  );
};

export default Licensor;
