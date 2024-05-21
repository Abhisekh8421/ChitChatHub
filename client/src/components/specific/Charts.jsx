import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { get7days } from "../../lib/features";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = get7days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: [18, 20, 35, 16, 43, 56, 9],
        label: "Messages",
        fill: true,
        backgroundColor: "rgba(101, 99, 167, 0.2)",
        borderColor: "rgba(101, 99, 132, 1)",
      },
      {
        data: [14, 56, 40, 67, 65, 45, 9],
        label: "New Users",
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        data: [20, 29, 65, 70, 74, 50, 78],
        label: "Active Users",
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const DoughnutChart = ({ value = [], labelsex = [] }) => {
  const data = {
    labels: ["Group messages", "users", "messages"],
    datasets: [
      {
        label: "Count",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(101, 99, 167, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(101, 99, 167, 1.2)",
          "rgba(75, 192, 192, 1.2)",
          "rgba(255, 99, 132, 1.2)",
        ],
        borderColor: [
          "rgba(101, 99, 167, 1.5)",
          "rgba(75, 192, 192, 1.5)",
          "rgba(255, 99, 132, 1.5)",
        ],
        hoverOffset: 4,
        offset: 40,
      },
    ],
  };
  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { LineChart, DoughnutChart };
