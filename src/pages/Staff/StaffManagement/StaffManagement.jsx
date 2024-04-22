import React, { useState } from "react";
import SideNav from "../../Dashboard/SideNav";
import Header from "../../Header/Header";

const StaffManagement = () => {
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
        <h1 className="bg-background text-xl font-extrabold p-2">
          StaffManagement
        </h1>
        <div className="">Staff Management</div>
      </div>
    </div>
  );
};

export default StaffManagement;
