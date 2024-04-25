import React, { useState } from "react";
import SideNav from "../Dashboard/SideNav";
import Header from "../Header/Header";
import InvoiceTable from "./InvoiceTable";
import InvoiceHeader from "./InvoiceHeader";

const Invoice = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample invoice data
  const invoices = [
    {
      id: 1,
      licensorId: "Licensor 1",
      type: "music",
      date: "2024-04-20",
      status: "paid",
    },
    {
      id: 2,
      licensorId: "Licensor 2",
      type: "music",
      date: "2024-04-21",
      status: "unpaid",
    },
    {
      id: 3,
      licensorId: "Licensor 3",
      type: "channel",
      date: "2024-04-22",
      status: "paid",
    },
    {
      id: 4,
      licensorId: "Licensor 4",
      type: "music",
      date: "2024-04-23",
      status: "unpaid",
    },
    {
      id: 5,
      licensorId: "Licensor 5",
      type: "channel",
      date: "2024-04-24",
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
        <div className="p-4">
          <h1 className="bg-background text-xl font-extrabold p-2">Invoice</h1>
          <InvoiceHeader onCreateNewInvoice={() => {}} />
          <InvoiceTable invoices={invoices} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
