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
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = {
  plugins: {
    title: {
      display: false,
      text: "Invitations to review conversion",
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },

  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: [ChartDataLabels],
};

const labels = [
  "Invitations delivered",
  "Invitations opened",
  "Invitation-link clicked",
  "Reviews",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Sent",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgb(0 177 136)",
      stack: "Stack 0",
      datalabels: {
        color: "#fff",
        font: {
          size: 16,
        },
      },
    },
    {
      label: "Missing",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgb(0, 177, 136, 0.2)",
      stack: "Stack 0",
      datalabels: {
        font: {
          size: 16,
        },
      },
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} height={120} />;
}
