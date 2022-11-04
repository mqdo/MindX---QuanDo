import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Roboto",
        }
      }
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = "";
          if (context.parsed.y) {
            label = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
        labelTextColor: (context) => {
          return context.dataset.borderColor;
        },
        title: (context) => {
          return "";
        },
      },
      displayColors: false,
      backgroundColor: "#E5E5E5",
      bodyFont: {
        size: 14,
        family: "Roboto",
        weight: 500
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function TransactionChart({ list, type }) {
  const borderColor = type === "income" ? "#25A969" : "#F95B51";
  const backgroundColor =
    type === "income" ? "rgba(37, 169, 105, 0.3)" : "rgba(249, 91, 81, 0.3)";

  const totalAmount = Array(12).fill(0);

  for (let i = 0; i < 12; i++) {
    list.forEach((elem) => {
      if (parseInt(elem.date.slice(5, 7)) === i + 1) {
        totalAmount[i] += parseFloat(elem.amount);
      }
    });
  }

  const data = {
    labels,
    datasets: [
      {
        label: "$",
        data: totalAmount,
        borderColor: borderColor,
        borderWidth: 1,
        backgroundColor: backgroundColor,
        lineTension: 0.5,
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
