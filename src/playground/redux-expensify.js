import {createStore, combineReducers} from 'redux'




const demoState = {
    expenses: [{         
        id: 'dasfhas',
        description: 'jan rent',
        notes:'this is the final payment for this address',
        amount: 54500, //pennies reduces round,computational errors
        createdAt: 0 // will be timeStamp
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


const expenseReducerDefaultState = [];
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
    
};

const expensesReducer = (state = expenseReducerDefaultState, action) => {

    switch (action.type) {

        default: return state;

    };
};


const filtersReducer = (state = filterReducerDefaultState, action) => {

    switch(action.type) {
        default: return state;
    };
};



const store = createStore( 
    combineReducers({
         //key is root state name and value is the reducer that suppose to manage that
         expenses: expensesReducer,
         filters: filtersReducer
    }
    ));



console.log(store.getState());








