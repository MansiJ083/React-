import React from 'react';

import ExpenseData from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const DeleteHandler = () => {
    console.log("Deleted!!!");
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate data={props.date} />
      <div className="expense-item__desription">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
  </div>
  <button onClick={DeleteHandler}>Delete</button>
  </Card>
);
}

export default ExpenseItem;
