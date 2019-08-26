import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense, removeExpense} from '../actions/expenses';


export class ExpenseEditPage extends React.Component {

    onClick = () => { 
        this.props.removeExpense({ id: this.props.Expense.id } );
        this.props.history.push('/');

    };
 
    onSubmit = (expense) => {
        this.props.editExpense(this.props.Expense.id, expense);
        this.props.history.push('/');
    };

    render() {
        return (
                <div>
                 <h3>Edit Expense</h3>
                 <ExpenseForm
                  expense={this.props.Expense}
                  onSubmit={ this.onSubmit }
                 />
                 <button onClick={ this.onClick }
                 >
                 Remove Item
                 </button>
                </div>

              );
    };

};

const mapStateToProps = (state, props) => { 
    return {Expense: state.expenses.find( (expense) => props.match.params.id === expense.id )};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id,expense) => { dispatch(editExpense(id,expense)) },
        removeExpense: (data) => {dispatch(removeExpense(data))}
    };
};
    



export default connect(mapStateToProps,mapDispatchToProps)(ExpenseEditPage);