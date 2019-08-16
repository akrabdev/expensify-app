import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './expenseListFilters'


const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilter/>
     <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;