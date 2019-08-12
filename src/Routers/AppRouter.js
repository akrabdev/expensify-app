import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';  
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (

    <BrowserRouter>
    <div>
     <Header />
     <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={ExpenseEditPage} />
      <Route path="/help" component={ExpenseHelpPage} />
      <Route component={NotFoundPage} />
     </Switch>
    </div>
   </BrowserRouter> 

);

export default AppRouter;