import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';  
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

const NotFoundPage = () => (
    <div>
     Error 404: Go <Link to="/">Home</Link>
    </div>
);  

const Header = () => (
    <div>
     <header>
     <h1>Expensify</h1>
     <NavLink to="/">Dashboard </NavLink>
     <NavLink to="/create">Create Expense</NavLink>
     <NavLink to="/edit">Edit Expense </NavLink>
     <NavLink to="/help">Help </NavLink>   
     </header>
    
    </div>
);



const routes = (
    <BrowserRouter>
     <div>
      <Header />
      <Switch>
       <Route path="/" component={ExpenseDashboardPage} exact={true} />
       <Route path="/create" component={AddExpensePage} />
       <Route path="/edit" component={ExpenseEditPage} />
       <Route path="/help" component={ExpenseHelpPage} />
       <Route component={NotFoundPage} />
      </Switch>
     </div>
    </BrowserRouter> 
);


ReactDOM.render( routes, document.getElementById('app'));

 

