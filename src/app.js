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

store.dispatch( addExpense({description: "water bill", amount: 1000, createdAt: 20}));
store.dispatch(addExpense({description: "gas bill", amount: 3000, createdAt: 70}));
store.dispatch(addExpense({description: "rent"}));

store.dispatch(setupTextFilter('bill'));
const state = store.getState();



const jsx = (
    <Provider store={store}>
     <AppRouter />
    </Provider>
);




ReactDOM.render(jsx , document.getElementById('app'));

 

