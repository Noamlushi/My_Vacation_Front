import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "jan",
    "feb",
    "mar",
    "apr",
    "mai",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 6, 12, 14, 15, 16, 7],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 33, 0.2)",
        "rgba(54, 162, 22, 0.2)",
        "rgba(255, 206, 1, 0.2)",
        "rgba(75, 4, 192, 0.2)",
        "rgba(153, 5, 255, 0.2)",
        "rgba(255, 6, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

function Graph() {
  return (
    <div className="absolute w-full h-full  max-h-[800px]  flex  justify-center my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <Pie
        data={data}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
            responsive: true,
            maintainAspectRatio: false,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default Graph;
