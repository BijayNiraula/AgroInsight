import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const GaugeChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: "70%",
        },
        track: {
          background: "#e7e7e7",
          strokeWidth: "100%",
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            offsetY: 0,
            fontSize: "22px",
            color: "#111",
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    },
    fill: {
      colors: ["#20E647"],
    },
    labels: ["Moisture"],
  });

  const [chartSeries, setChartSeries] = useState([80]); // Initial gauge value
  const [error, setError] = useState(null);

  // Function to fetch soil data
  const fetchSoilMoisture = async () => {
    try {
      const response = await fetch("http://192.168.217.220/soil");
      const data = await response.json();
      console.log("Received data:", data); // Debug log

      // Check if data.soil_moisture exists and is a number
      if (data && typeof data.soil_moisture === "number") {
        setChartSeries([data.soil_moisture]);
      } else {
        console.error("Invalid data format:", data);
        setError("Invalid data format received");
      }
    } catch (error) {
      console.error("Error fetching soil data:", error);
      setError("Failed to fetch soil data");
    }
  };

  // UseEffect to call fetch function and set up polling
  useEffect(() => {
    // Initial fetch
    fetchSoilMoisture();

    // Set up polling every 5 seconds
    const interval = setInterval(fetchSoilMoisture, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="radialBar"
        height={180}
      />
    </div>
  );
};

export default GaugeChart;
