import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import CurrencyList from "./CurrencyList";
import CurrencyHeader from "./CurrencyHandler";

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
        <h1 className="bg-background text-xl font-extrabold p-2">Settings</h1>
        <div className="bg-background flex flex-col p-4">
          <CurrencyHeader />
          <CurrencyList />
        </div>
      </div>
    </div>
  );
};

export default Settings;
