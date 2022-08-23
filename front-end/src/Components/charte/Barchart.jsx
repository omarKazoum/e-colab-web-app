// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {

  const labels = [
  
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "gray",
        borderColor: "rgb(0, 0, 0)",
        data: [],
      },
      {
        label: "My First dataset",
        backgroundColor: "blue",
        borderColor: "rgb(0, 221, 412)",
        data: [],
      },
    ],
  };
  for(let i=1;i<30;i++){
    labels.push(i);
    data.datasets[0].data.push(i%30/30*100)
    data.datasets[1].data.push(i%30/30*100)

  }

  return (
    <div className="flex justify-center ">
      <div className="w-2/3 mt-20 h-4/6" >
        <Bar options={{ maintainAspectRatio: false }} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
