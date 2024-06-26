// src/components/ComparisonBarChart.tsx

import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ComparisonBarChartProps {
  years: string[];
  malfunctionData: number[];
  accidentData: number[];
}

const ComparisonbarChart: React.FC<ComparisonBarChartProps> = ({
  years,
  malfunctionData,
  accidentData,
}) => {
  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Malfunctions',
        data: malfunctionData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Accidents',
        data: accidentData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top' as const, // Set position to 'top' explicitly
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ComparisonbarChart;
