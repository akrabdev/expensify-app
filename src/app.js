import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setupTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch( addExpense({description: "water bill"}));
store.dispatch(addExpense({description: "gas bill"}));
store.dispatch(addExpense({description: "rent"}));

store.dispatch(setupTextFilter('bill'));
const state = store.getState();


console.log(getVisibleExpenses(state.expenses,state.filters));


const jsx = (
    <Provider>
     <AppRouter />
    </Provider>
);




ReactDOM.render(, document.getElementById('app'));

 

