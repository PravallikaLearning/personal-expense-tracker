import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Calculate expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
      <div style={{ flex: 1, marginRight: '10px', textAlign: 'left' }}>
        <h2>Expense Summary</h2>
        <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      </div>
      <div style={{ flex: 1, marginLeft: '10px', textAlign: 'left' }}>
        <h3>Expenses by Category:</h3>
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <p key={category}>{category}: ${amount.toFixed(2)}</p>
        ))}
      </div>
    </div>
  );
};

export default ExpenseSummary; 