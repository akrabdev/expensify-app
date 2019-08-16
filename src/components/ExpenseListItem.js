import React from 'react';
import {connect} from 'react-redux';

const ExpenseListItem = (props) => (
    <div>
    <p>{props.expenseDesc} {props.expenseAmount} {props.expenseCreatedAt}</p>
    </div>
);

    // const mapStateToProps = (state) => {


    //     return {
    //         description: state.expenses.description,
    //         amount: state.expenses.amount ,
    //         createdAt: state.expenses.createdAt 
            
    //     };
    // };

    
 
export default ExpenseListItem;


