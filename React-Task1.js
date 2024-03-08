import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const locationOfExpenditure = props.locationOfExpenditure;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        <div className="expense-item__location">Location: {locationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
