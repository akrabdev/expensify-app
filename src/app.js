import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter , { history } from './Routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import {firebase } from './firebase/firebase';
import {startSetExpense} from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore();


const jsx = (
    <Provider store={store}>
     <AppRouter />
    </Provider>
);
let hasRendered = false;

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered = true;
    }
};


ReactDOM.render(<p>...loading</p> , document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
           renderApp();
            });
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        };

    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }

});

