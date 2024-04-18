import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ chartData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (chartInstance.current) {
        // Destroy the previous chart instance
        chartInstance.current.destroy();
      }
      // Render the new chart
      chartInstance.current = new Chart(chartContainer.current, {
        type: "pie",
        data: chartData,
      });
    }
  }, [chartData]);

  return <canvas ref={chartContainer} />;
};

export default PieChart;
