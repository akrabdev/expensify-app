import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';



const ExpenseList = (props) => (
    <div>
     <h1>Expense List</h1>
    {props.expenses.map((expense) =>{ //expense is an object {...expense}=== {desc: 'rent' etc }
        return <ExpenseListItem key={expense.id} {...expense}/> ;
    })}
    
    </div>
);

// key={expense.id} {...other}
//          expenseDesc={expense.description}
//          expenseAmount={expense.amount}
//          expenseCreatedAt={expense.createdAt}
//          expenseId= {expense.id}

const mapStateToProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters) 
});

export default connect(mapStateToProps)(ExpenseList); //here we get something back: not the hoc but the function  

