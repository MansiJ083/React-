import React from 'react';
import ExpenseItem from './ExpenseItem';

function App() {
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), locationOfExpenditure: 'Insurance Company' },
    { id: 2, title: 'Groceries', amount: 75.49, date: new Date(2021, 2, 15), locationOfExpenditure: 'Grocery Store' },
    // Add more expenses as needed
  ];

  return (
    <div>
      <h1>My Expenses</h1>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
