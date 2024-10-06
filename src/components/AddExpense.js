import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const AddExpense = () => {
  const { setExpenses } = useContext(ExpenseContext);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category && date) {
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { amount: parseFloat(amount), category, date },
      ]);
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  const formStyle = {
    maxWidth: '200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    width: '100%', // Full width for inputs
  };

  const submitButtonStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width: '100%', // Match the width of other inputs
  };

  const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other'];

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Add Expense</h3>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Description:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={inputStyle}
        />
      </div>
      <div style={formGroupStyle}>
        <label style={labelStyle}>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={inputStyle} // Use the same input style for consistency
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <button type="submit" style={submitButtonStyle}>
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;