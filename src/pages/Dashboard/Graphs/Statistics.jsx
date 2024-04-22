import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
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
        data: [120, 150, 180, 210, 170, 200, 230, 250, 220, 240, 260, 280],
        fill: false,
        borderColor: "#FF6384",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card">
      <div className="p-5 bg-card">
        <div className="flex justify-between items-center">
          <h4 className="card-title mb-4">Statistics</h4>
        </div>
        <div
          style={{ height: "260px" }}
          className="flex justify-center items-center"
        >
          <Line data={data} options={options} />
        </div>
        <div className="flex text-center mt-4">
          <div className="w-1/2">
            <h4 className="text-xl">$1875.54</h4>
            <p className="text-muted">Revenue</p>
          </div>
          <div className="w-1/2">
            <h4 className="text-xl">541</h4>
            <p className="text-muted">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
