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
      label: "Overall score",
      data: labels.map(() => faker.datatype.number({ min: 2000, max: 26000 })),
      backgroundColor: "rgb(0, 177, 136, 0.2)",
      borderColor: "rgb(0 177 136)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export default function LineChart() {
  const [hovered, setHovered] = useState(false);
  const options = {
    onHover: function () {
      setHovered(true);
    },
    mouseOut: function () {
      setHovered(false);
    },
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
      <div onMouseLeave={() => setHovered(false)}>
        <Line options={options} data={data} height={120} />
      </div>
    </>
  );
}
