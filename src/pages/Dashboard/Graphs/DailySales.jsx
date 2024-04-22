import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const DailySales = () => {
  // Data for the pie chart
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="card">
      <div className="p-5 bg-card">
        <div className="flex justify-between items-center">
          <h4 className="card-title mb-4">Daily Sales</h4>
        </div>
        <div
          id="morris-donut-example"
          className="flex justify-center items-center"
          style={{ height: "260px" }}
        >
          <Pie data={data} />
        </div>
        <div className="flex text-center mt-4">
          <div className="w-1/2">
            <h4 className="text-xl">5,459</h4>
            <p className="text-muted">Total Sales</p>
          </div>
          <div className="w-1/2">
            <h4 className="text-xl">18</h4>
            <p className="text-muted">Open Compaign</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySales;
