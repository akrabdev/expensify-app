import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
    <div>
    <h3>Add Expense</h3>
     <ExpenseForm onSubmit={(expense) => {    //function defined here.
       props.dispatch(addExpense(expense));
       props.history.push('/');
     }} />
    </div>
);

export default connect()(AddExpensePage);