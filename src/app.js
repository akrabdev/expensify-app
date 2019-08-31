import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import {setupTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();


const jsx = (
    <Provider store={store}>
     <AppRouter />
    </Provider>
);


ReactDOM.render(<p>...loading</p> , document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
ReactDOM.render(jsx , document.getElementById('app'));

});

 

