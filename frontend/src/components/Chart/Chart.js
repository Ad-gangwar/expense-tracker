import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes = [], expenses = [] } = useGlobalContext();

  const data = {
    labels: incomes.length > 0 ? incomes.map((inc) => dateFormat(inc.date)) : [], 
    datasets: [
      {
        label: 'Income',
        data: incomes.length > 0 ? incomes.map((income) => income.amount) : [],
        backgroundColor: 'green',
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: expenses.length > 0 ? expenses.map((expense) => expense.amount) : [],
        backgroundColor: 'red',
        tension: 0.2,
      },
    ],
  };

  // Optional: Add a message or placeholder if no data is available
  if (incomes.length === 0 && expenses.length === 0) {
    return (
      <div className=" border-2 border-white shadow-lg p-4 rounded-2xl h-full flex items-center justify-center">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className=" border-2 bg-white border-white shadow-lg p-4 rounded-2xl h-full">
      <Line data={data}/>
    </div>
  );
}

export default Chart;
