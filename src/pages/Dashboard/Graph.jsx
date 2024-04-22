import React from "react";
import DailySales from "./Graphs/DailySales";
import Statistics from "./Graphs/Statistics";
import ProductSales from "./Graphs/ProductSales";
const YourComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6 ">
      <DailySales />

      <Statistics />

      <ProductSales />
    </div>
  );
};

export default YourComponent;
