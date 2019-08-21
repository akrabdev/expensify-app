import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import {Link} from 'react-router-dom';



export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No items found</p>
        ) : (
            props.expenses.map((expense) =>{ 
        return  <ExpenseListItem key={expense.id} {...expense}/> ;
    })
        )
    }
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

