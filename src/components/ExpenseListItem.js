import React from 'react';
import {Link } from 'react-router-dom';

const ExpenseListItem = (props) => ( // props can be destructed to be {description, amount, createdAt, id}
    <div>
    <h3> <Link to={`/edit/${props.id}`}>{props.description}</Link> </h3> <p> {props.amount} - {props.createdAt}</p>
   

    </div>
);

    // const mapStateToProps = (state) => {


    //     return {
    //         description: state.expenses.description,
    //         amount: state.expenses.amount ,
    //         createdAt: state.expenses.createdAt 
            
    //     };
    // };

    
 
export default ExpenseListItem; //only to access props.dispatch();


