import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { ExpenseContext } from '../contexts/ExpenseContext';
import "react-datepicker/dist/react-datepicker.css";

function ExpenseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addExpense, updateExpense, expenses } = useContext(ExpenseContext);

  const [expense, setExpense] = useState({
    date: new Date(),
    description: '',
    amount: '',
    category: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      const expenseToEdit = expenses.find(e => e.id === parseInt(id));
      if (expenseToEdit) {
        setExpense({
          ...expenseToEdit,
          date: new Date(expenseToEdit.date)
        });
      }
    }
  }, [id, expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!expense.date) tempErrors.date = "Date is required";
    if (!expense.description) tempErrors.description = "Description is required";
    if (!expense.amount) tempErrors.amount = "Amount is required";
    else if (isNaN(expense.amount)) tempErrors.amount = "Amount must be a number";
    if (!expense.category) tempErrors.category = "Category is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formattedExpense = {
        ...expense,
        date: expense.date.toISOString().split('T')[0],
        amount: parseFloat(expense.amount)
      };
      if (id) {
        updateExpense(parseInt(id), formattedExpense);
      } else {
        addExpense(formattedExpense);
      }
      navigate('/');
    }
  };

  const categories = ['Food', 'Transportation', 'Entertainment', 'Utilities', 'Other'];

  const formStyle = {
    maxWidth: '400px',
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

  const errorMessageStyle = {
    color: 'red',
    fontSize: '0.875rem', // Smaller font size for error messages
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

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>{id ? 'Edit Expense' : 'Add Expense'}</h3>
      <div style={formGroupStyle}>
        <label htmlFor="date-picker" style={labelStyle}>Date:</label>
        <DatePicker
          id="date-picker"
          name="date"
          selected={expense.date}
          onChange={(date) => setExpense({ ...expense, date })}
          dateFormat="yyyy-MM-dd"
          customInput={<input data-testid="date-picker" style={inputStyle} />}
        />
        {errors.date && <p style={errorMessageStyle}>{errors.date}</p>}
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="expense-description" style={labelStyle}>Description:</label>
        <input
          id="expense-description"
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.description && <p style={errorMessageStyle}>{errors.description}</p>}
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="expense-amount" style={labelStyle}>Amount:</label>
        <input
          id="expense-amount"
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.amount && <p style={errorMessageStyle}>{errors.amount}</p>}
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="expense-category" style={labelStyle}>Category:</label>
        <select
          id="expense-category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        {errors.category && <p style={errorMessageStyle}>{errors.category}</p>}
      </div>
      <button type="submit" style={submitButtonStyle}>
        {id ? 'Update Expense' : 'Add'}
      </button>
    </form>
  );
}

export default ExpenseForm;