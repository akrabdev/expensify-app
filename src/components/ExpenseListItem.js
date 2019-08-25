import React from 'react';
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; 

const ExpenseListItem = (props) => ( // props can be destructed to be {description, amount, createdAt, id}
    <div>
     <Link to={`/edit/${props.id}`}>
      <h3> 
       {props.description}
      </h3> 
     </Link>
     <p>
        {numeral(props.amount /100).format('$0,0.00')}
        - 
        {moment(props.createdAt).format('MMMM Do, YYYY')}
     </p>
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


