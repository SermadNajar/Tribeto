import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Desktop', 'Tablet', 'Mobile'],
  
  datasets: [
    {
      label: '# of Votes',
      data: [86, 88, 81],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function PolarChart() {
  return <PolarArea data={data} />;
}
