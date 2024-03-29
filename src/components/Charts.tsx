import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);
const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export function BarChart({
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = monthes,
}: BarChartProps) {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false
      }
      
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return (
  <Bar options={options} width={horizontal? "200%": ""} data={data} />
  );
}

interface DoughnutChartProps {
  data: number[];
  bgColor: string[];
  labels: string[];
  cutOut?: number | string;
  legends?: boolean;
  offset?: number[];
}
export const DoughnutChart = ({
  data , 
  bgColor, 
  labels, 
  cutOut, 
  legends=true, 
  offset}: DoughnutChartProps) =>{
  const doughnutData: ChartData<"doughnut", number[],string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        offset,
      },
    ],
  };
  const doughnutOptions:ChartOptions<"doughnut">={
    responsive: true,
    plugins: {
      legend:{
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout: cutOut
  }
  return (
    <Doughnut data={doughnutData} options={doughnutOptions} />
  )
}

interface PieChartProps {
  data: number[];
  bgColor: string[];
  labels: string[];
  offset?: number[];
}
export const PieChart = ({
  data , 
  bgColor, 
  labels, 
  offset}: PieChartProps) =>{
  const pieChartData: ChartData<"pie", number[],string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth:1,
        offset,
      },
    ],
  };
  const pieChartOptions:ChartOptions<"pie">={
    responsive: true,
    plugins: {
      legend:{
        display: false,
      },
    },
  }
  return (
    <Pie data={pieChartData} options={pieChartOptions} />
  )
}

interface LineChartProps {
  data: number[];
  label: string;
  bgColor: string;
  borderColor: string;
  labels?: string[];
}

export function LineChart({
  data, label, bgColor, borderColor, labels = monthes
}: LineChartProps) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false
      }
      
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data,
        backgroundColor: bgColor,
        borderColor,
      }
    ],
  };
  return (
  <Line options={options}  data={lineChartData} />
  );
}