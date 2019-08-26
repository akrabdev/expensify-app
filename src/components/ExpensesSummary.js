import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/getExpensesTotal';


export const ExpenseSummary = (props) => {
    const myNumeral = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
   return( 
       <div> 
       {props.expenses.length === 0 ? <p>No Expenses found matching </p> 
        : <p>Viewing {props.expenses.length} Expenses totaling {myNumeral}</p>} 
       </div>
   );

}

const mapStateToProps = (state) =>({
    expenses: getVisibleExpenses(state.expenses,state.filters)
     
})

export default connect(mapStateToProps)(ExpenseSummary);