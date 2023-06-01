import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const createExpense = async () => {
    const newExpense = {
      amount: 10.99,
      description: 'Coffee',
      category: 'Food',
    };

    try {
      const response = await axios.post('/api/expenses', newExpense);
      setExpenses([...expenses, response.data]);
    } catch (error) {
      console.error('Error creating expense:', error);
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <button onClick={createExpense}>Create Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>Amount: {expense.amount}</span>
            <span>Description: {expense.description}</span>
            <span>Category: {expense.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
