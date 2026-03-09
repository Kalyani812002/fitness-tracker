import { Line } from "react-chartjs-2";
import "chart.js/auto";

function StatsChart() {
  const data = {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "Steps",
        data: [4000,6000,5000,7000,8000,9000,10000],
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.4,
        fill: false
      }
    ]
  };

  return <Line data={data} />;
}

export default StatsChart;