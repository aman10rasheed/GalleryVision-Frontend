import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import TotalRevenue from "./TotalRevenue";
import TotalChaneel from "./TotalChannel";
import TotalCommission from "./TotalCommission";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <TotalRevenue />
          <TotalChaneel />
          <TotalCommission />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
