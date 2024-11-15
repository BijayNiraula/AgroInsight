import React, { useState } from "react";
import Chart from "react-apexcharts";

const TemperatureLineChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "temperature-chart",
      toolbar: {
        show: false, // Hide toolbar options
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ], // Days of the week
      axisBorder: {
        show: true, // Show the x-axis line
        color: "#333", // Set the color of the x-axis line
        height: 1, // Thickness of the x-axis line
      },
      axisTicks: {
        show: true, // Show the small ticks on the x-axis
        color: "#333", // Color of the ticks
      },
    },
    yaxis: {
      title: {
        text: "Temperature (°C)", // Y-axis label
      },
      axisBorder: {
        show: true, // Show the y-axis line
        color: "#333", // Set the color of the y-axis line
      },
      axisTicks: {
        show: true, // Show the small ticks on the y-axis
        color: "#333", // Color of the ticks
      },
    },
    grid: {
      show: true, // Enable grid lines
      borderColor: "#000000", // Color of grid lines
      strokeDashArray: 0, // Make the grid solid (no dash)
    },
    stroke: {
      curve: "smooth", // Makes the line smooth
      width: 3, // Thickness of the line
    },
    title: {
      text: "",
      align: "left",
    },
    dataLabels: {
      enabled: false, // Hide data points
    },
    markers: {
      size: 5, // Marker size on the line
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd/MM",
      },
    },
  });

  // Temperature data for the week (example values)
  const [chartSeries, setChartSeries] = useState([
    {
      name: "Temperature",
      data: [22, 24, 21, 25, 23, 27, 26], // Example temperature values for each day
    },
  ]);

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
    </div>
  );
};

export default TemperatureLineChart;
