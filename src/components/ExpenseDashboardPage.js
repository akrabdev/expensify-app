import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './expenseListFilters';
import ExpenseSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseSummary />
    <ExpenseListFilter/>
     <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;