import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ExpenseProvider } from './contexts/ExpenseContext';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseCharts from './components/ExpenseCharts';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <Link to="/" style={{ textDecoration: 'bold', color: 'Blue', fontSize: '20px' }}>Home</Link>
          </div>
          <h1 style={{ fontSize: '2.5em', margin: '10px 0', color: 'red' }}>Personal Expense Tracker</h1>
          <Link to="/add-expense">
            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '16px', marginBottom: '10px' }}>
              Add Expense
            </button>
          </Link>
          <Routes>
            <Route path="/" element={
              <div>
                <ExpenseSummary />
                <ExpenseCharts />
                <ExpenseList />
              </div>
            } />
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/edit-expense/:id" element={<ExpenseForm />} />
          </Routes>
        </div>
      </Router>
    </ExpenseProvider>
  );
}

export default App;