import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";

const Settings = () => {
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
        <div className="">Settings</div>
      </div>
    </div>
  );
};

export default Settings;
