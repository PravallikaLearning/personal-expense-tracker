import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExpenseContext } from '../contexts/ExpenseContext';
import ExpenseForm from './ExpenseForm';

// Mock the DatePicker component
jest.mock('react-datepicker', () => {
  return function DummyDatePicker({ onChange, customInput }) {
    // Clone the customInput and add necessary props for testing
    return customInput
      ? customInput
      : <input data-testid="date-picker" onChange={(e) => onChange(new Date(e.target.value))} />;
  };
});

// Mock the Autocomplete component
jest.mock('@mui/material/Autocomplete', () => {
  return function DummyAutocomplete(props) {
    return <input data-testid="category-input" onChange={(e) => props.onChange(e, e.target.value)} />;
  };
});

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({})
}));

const mockAddExpense = jest.fn();
const mockUpdateExpense = jest.fn();
const mockExpenses = [];

// Create a mock ExpenseContext provider
const MockExpenseProvider = ({ children }) => (
  <ExpenseContext.Provider value={{ addExpense: mockAddExpense, updateExpense: mockUpdateExpense, expenses: mockExpenses }}>
    {children}
  </ExpenseContext.Provider>
);

// Helper function to render the component with all necessary providers
const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <Router>
      <MockExpenseProvider>{ui}</MockExpenseProvider>
    </Router>
  );
};

describe('ExpenseForm', () => {
  test('renders ExpenseForm and submits new expense', async () => {
    renderWithProviders(<ExpenseForm />);

    // Check if form elements are rendered
    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();

    // Fill out the form
    fireEvent.change(screen.getByTestId('date-picker'), { target: { value: '2023-05-01' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Expense' } });
    fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Food' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /add/i }));

    // Check if addExpense was called with the correct arguments
    await waitFor(() => {
      expect(mockAddExpense).toHaveBeenCalledTimes(1);
      expect(mockAddExpense).toHaveBeenCalledWith(expect.objectContaining({
        date: expect.any(String),
        description: 'Test Expense',
        amount: 100,
        category: 'Food'
      }));
    });

     // Check if navigate was called to redirect after submission
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});