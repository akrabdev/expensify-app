import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import {Link} from 'react-router-dom';



export const ExpenseList = (props) => (
    <div className="content-container">

     <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expesne</div>
      <div className="show-for-desktop">Amount</div>
      
     </div>
      <div className="list-body">
      
    {
        props.expenses.length === 0 ? (
            <div className="list-item list-item--message"> 
             <span>No items found</span>
            </div>
            
        ) : (
            props.expenses.map((expense) =>{ 
        return  <ExpenseListItem key={expense.id} {...expense}/> ;
    })
        )
    }
    </div>
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

