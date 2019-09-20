import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/getExpensesTotal';


export const ExpenseSummary = (props) => {
    const formattedExpensesTotal = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
   return( 
       <div className="page-header">
        <div className="content-container">
        {
           props.expenses.length === 0 ? <h1 className="page-header__title">No Expenses found matching </h1> 
        : (props.expenses.length === 1 ?
             <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> Expense totaling <span>{formattedExpensesTotal}</span></h1>
            :<h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> Expenses totaling <span>{formattedExpensesTotal}</span></h1>)
        
        }
        <div className="page-header__actions">
         <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
       </div>
   );

}

const mapStateToProps = (state) =>({
    expenses: getVisibleExpenses(state.expenses,state.filters)
     
})

export default connect(mapStateToProps)(ExpenseSummary);