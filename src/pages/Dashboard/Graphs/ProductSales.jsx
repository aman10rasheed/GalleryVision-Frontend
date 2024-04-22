import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const ProductSales = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          1200, 1500, 1800, 2100, 1700, 2000, 2300, 2500, 2200, 2400, 2600,
          2800,
        ],
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <div className="card">
      <div className="p-5 bg-card">
        <div className="flex justify-between items-center">
          <h4 className="card-title mb-4">Total Revenue</h4>
        </div>
        {/* Bar chart */}
        <div
          className="flex justify-center items-center"
          style={{ height: "260px" }}
        >
          <Bar data={data} options={options} />
        </div>
        <div className="flex text-center mt-4">
          <div className="w-1/2">
            <h4 className="text-xl">$7841.12</h4>
            <p className="text-muted">Total Revenue</p>
          </div>
          <div className="w-1/2">
            <h4 className="text-xl">17</h4>
            <p className="text-muted">Open Compaign</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSales;
