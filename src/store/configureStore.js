import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore( 
        combineReducers({
             //key is root state name and value is the reducer that suppose to manage that
             expenses: expensesReducer,
             filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
        

};

//when we import the function we call it and we get the store back to use it.   