import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import TotalRevenue from "./TotalRevenue";
import TotalChaneel from "./TotalChannel";
import TotalCommission from "./TotalCommission";
import GeneratedInvoices from "./GenaratedInvoice";
import YourComponent from "./Graph";

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
        <h1 className="bg-gray-300 text-xl font-extrabold p-2">Dashboard</h1>
        <div className="bg-gray-300">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 p-5">
            <TotalRevenue />
            <TotalChaneel />
            <TotalCommission />
            <GeneratedInvoices />
          </div>
          <div className="m-2 p-2">
            <YourComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
