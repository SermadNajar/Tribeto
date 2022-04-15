import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DISPLAY = false;
const BORDER = false;
const CHART_AREA = false;
const TICKS = false;

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Invitation Conversion Rate",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 8 })),
      borderColor: "rgb(0 177 136)",
    },
  ],
};

export default function LineChart({ width = 300, height = 300 }) {
  const options = {
    responsive: true,
    elements: {},
    scales: {
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      datalabels: {
        // hide datalabels for all datasets
        display: false,
      },
      legend: {
        position: "bottom",
        display: false,
      },
      title: {
        display: false,
        text: "Welcome",
      },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        titleAlign: "center",
        backgroundColor: "rgb(0 177 136)",
      },
    },
  };
  return (
    <>
      <div>
        <Line options={options} data={data} height={120} />
      </div>
    </>
  );
}
