import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props) => (
    <div>
    <p>{props.expenseDesc} {props.expenseAmount} {props.expenseCreatedAt}</p>
    <button onClick={ () => { 
        
       
        props.dispatch(removeExpense( {id: props.expenseId} ))
    }
    }
    >
        Remove Item</button>

    </div>
);

    // const mapStateToProps = (state) => {


    //     return {
    //         description: state.expenses.description,
    //         amount: state.expenses.amount ,
    //         createdAt: state.expenses.createdAt 
            
    //     };
    // };

    
 
export default connect() (ExpenseListItem); //only to access props.dispatch();


