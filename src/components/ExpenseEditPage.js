import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';


export class ExpenseEditPage extends React.Component {

    onClick = () => { 
        this.props.startRemoveExpense({ id: this.props.Expense.id } );
        this.props.history.push('/');

    };
 
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.Expense.id, expense);
        this.props.history.push('/');
    };

    render() {
        return (
                <div>
                 <div className="page-header">
                  <div className="content-container">
                   <h1 className="page-header__title">Edit Expense</h1>                         
                  </div>
                 </div>
                 <div className="content-container">
                  <ExpenseForm
                   expense={this.props.Expense}
                   onSubmit={ this.onSubmit }
                  />
                  <button className="button button--secondary" onClick={ this.onClick }>
                  Remove Expense
                  </button>
                 </div>
                 
                </div>

          );
    };

};

const mapStateToProps = (state, props) => { 
    return {Expense: state.expenses.find( (expense) => props.match.params.id === expense.id )};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id,expense) => { dispatch(startEditExpense(id,expense)) },
        startRemoveExpense: (data) => {dispatch(startRemoveExpense(data))}
    };
};
    



export default connect(mapStateToProps,mapDispatchToProps)(ExpenseEditPage);