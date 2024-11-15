import React, { useState } from "react";
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
    labels: ["Good"],
  });

  const [chartSeries, setChartSeries] = useState([70]); // Value for the gauge (70% in this example)

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
