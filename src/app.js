import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';  
import './styles/styles.scss';
import 'normalize.css/normalize.css';
const ExpenseDashboardPage = () => (
    <div>
     This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
     This is from my add expense component
    </div>
);

const ExpenseEditPage = () => (
    <div>
     This is from my expense edit component
    </div>
);

const ExpenseHelpPage = () => (
    <div>
     This is from my expense help page
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
     <Route path="/" component={ExpenseDashboardPage} exact={true} />
     <Route path="/create" component={AddExpensePage}/>
     <Route path="/edit" component={ExpenseEditPage}/>
     <Route path="/help" component={ExpenseHelpPage}/>
    </div>
    </BrowserRouter> 
);


ReactDOM.render( routes, document.getElementById('app'));

 

