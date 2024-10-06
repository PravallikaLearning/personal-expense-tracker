import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <div style={{ marginTop: '10px' }}>
      <h3>Expense List</h3>
      <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'violet' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'violet' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'violet' }}>Amount</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'violet' }}>Category</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', color: 'violet' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(expense.date).toLocaleDateString()}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expense.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${expense.amount.toFixed(2)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{expense.category}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Link to={`/edit-expense/${expense.id}`}>Edit</Link>
                <button onClick={() => deleteExpense(expense.id)} style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;