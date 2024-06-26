// Components/Vehicles.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type BarChartProps = {
  noOfTotalVehicles: number;
  noOfInServiceVehicles: number;
  noOfOutOfServiceVehicles: number;
};

const BarChart: React.FC<BarChartProps> = ({
  noOfTotalVehicles,
  noOfInServiceVehicles,
  noOfOutOfServiceVehicles,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.data.datasets[0].data = [
          noOfTotalVehicles,
          noOfInServiceVehicles,
          noOfOutOfServiceVehicles,
        ];
        chartInstance.current.update();
      } else {
        chartInstance.current = new Chart(chartRef.current, {
          type: 'bar',
          data: {
            labels: ['Total Vehicles', 'In Service Vehicles', 'Out of Service Vehicles'],
            datasets: [{
              data: [noOfTotalVehicles, noOfInServiceVehicles, noOfOutOfServiceVehicles],
              backgroundColor: [
                'rgba(75, 0, 130, 0.6)',    // Indigo
                'rgba(255, 193, 7, 0.6)',   // Amber
                'rgba(233, 30, 99, 0.6)',   // Pink
              ],
              borderColor: [
                'rgba(75, 0, 130, 1)',    // Indigo
                'rgba(255, 193, 7, 1)',   // Amber
                'rgba(233, 30, 99, 1)',   // Pink
              ],
              borderWidth: 1,
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false, // Hides the legend
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null; // Ensure the chart instance is nullified
        console.log('Chart destroyed');}
    };
  }, [noOfTotalVehicles, noOfInServiceVehicles, noOfOutOfServiceVehicles]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
