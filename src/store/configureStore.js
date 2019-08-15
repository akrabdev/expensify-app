import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore( 
        combineReducers({
             //key is root state name and value is the reducer that suppose to manage that
             expenses: expensesReducer,
             filters: filtersReducer
        })
    );
    return store;
        

};

//when we import the function we call it and we get the store back to use it.