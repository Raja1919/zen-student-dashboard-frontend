import React from "react";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Codekata",
      color: "black",
      font: {
        size: "30",
        weight: "bold",
      },
    },
  },
};

const monthlyOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Webkata",
      color: "black",
      font: {
        size: "30",
        weight: "bold",
      },
    },
  },
};

const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * 10));
  }
  return data;
};

const Dashboard = () => {
  const dailyCounts = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    counts: generateRandomData(10),
  };

  const monthlyCounts = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    counts: generateRandomData(10),
  };

  const data = {
    labels: dailyCounts.labels,
    datasets: [
      {
        label: "Count",
        data: dailyCounts.counts,
        borderColor: "red",
        backgroundColor: "blue",
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        barThickness: 50,
      },
    ],
  };

  const monthlyData = {
    labels: monthlyCounts.labels,
    datasets: [
      {
        label: "Count",
        data: monthlyCounts.counts,
        borderColor: "red",
        backgroundColor: "green",
        barPercentage: 0.4,
        categoryPercentage: 0.2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="chart">
        <div className="daily-chart">
          <Bar options={options} data={data} />
        </div>

        <div className="monthly-chart">
          <Bar options={monthlyOptions} data={monthlyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
