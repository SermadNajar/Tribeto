import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Apr 13",
  "Apr 19",
  "Apr 25",
  "May 01",
  "May 07",
  "June",
  "July",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Avg. time to reply",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 14 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      datalabels: {
        font: {
          size: 14,
        },
      },
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
