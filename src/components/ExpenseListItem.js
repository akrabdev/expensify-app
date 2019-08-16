import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = (props) => ( // props can be destructed to be {description, amount, createdAt, id}
    <div>
    <p>{props.description} {props.amount} {props.createdAt}</p>
    <button onClick={ () => { 
        
       
        props.dispatch(removeExpense( {id: props.id} ))
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


