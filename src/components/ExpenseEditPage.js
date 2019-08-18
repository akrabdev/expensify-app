import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense} from '../actions/expenses';
import {removeExpense} from '../actions/expenses';


const ExpenseEditPage = (props) => {

    return( <div>
        <h3>Edit Expense</h3>
     <ExpenseForm
      expense={props.Expense}
      onSubmit={(expense)=>{
          console.log(props);
          props.dispatch(editExpense(props.match.params.id,expense));
          props.history.push('/');
          console.log(props.Expense)
      }}
     /> 
     <button onClick={ () => { 
        props.dispatch(removeExpense( {id: props.Expense.id} ))
    }
    }
    >
    Remove Item
    </button>
    </div>);
};

const mapStateToProps = (state, props) => { 
    return {Expense: state.expenses.find( (expense) => props.match.params.id === expense.id )};

};
    



export default connect(mapStateToProps)(ExpenseEditPage);