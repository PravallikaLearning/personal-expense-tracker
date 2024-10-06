import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { ExpenseContext } from '../contexts/ExpenseContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ExpenseCharts = () => {
  const { expenses } = React.useContext(ExpenseContext);

  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const expensesByMonth = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + expense.amount;
    return acc;
  }, {});

  const categoryData = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        data: Object.values(expensesByCategory),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const monthlyData = {
    labels: Object.keys(expensesByMonth),
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Object.values(expensesByMonth),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ textAlign: 'left', margin: '10px 0' }}>
      <h2>Expense Charts</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <h3>Expenses by Category</h3>
          <div style={{ height: '200px' }}>
            <Pie data={categoryData} options={chartOptions} />
          </div>
        </div>
        <div style={{ flex: 1, margin: '0 10px' }}>
          <h3>Monthly Expenses</h3>
          <div style={{ height: '200px' }}>
            <Bar data={monthlyData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCharts;