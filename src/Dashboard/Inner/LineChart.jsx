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
  Legend
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
      label: "Overall score",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(0 177 136",
      backgroundColor: "rgb(0 177 136)",
    },
  ],
};

export default function LineChart({ width = 300, height = 300 }) {
  const [hovered, setHovered] = useState(false);
  const options = {
    onHover: function () {
      setHovered(true);
    },
    mouseOut: function () {
      setHovered(false);
    },
    responsive: true,
    elements: {
      line: {
        tension: 0.4, // disables bezier curves
      },
    },
    scales: {
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        },
        ticks: {
          display: hovered,
        },
      },
      y: {
        grid: {
          display: DISPLAY,
          drawBorder: false,
        },
        ticks: {
          display: hovered,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Welcome Amine",
      },
    },
  };
  return (
    <>
      <div onMouseLeave={() => setHovered(false)}>
        <Line options={options} data={data} />
      </div>
    </>
  );
}
