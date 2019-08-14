import {createStore, combineReducers, } from 'redux';
import uuid from 'uuid';


const addExpense = (
{
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
 } = {}
    ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt 
    }
});

const removeExpense = ({id}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, update) => ({
    type: "EDIT_EXPENSE",
    id,
    update
});

////

const setupTextFilter = (text) => ({
    type: 'SETUP_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});


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
        case 'ADD_EXPENSE': 
        return [
            ...state, // < obj     ... > will start with elements of state array. old:// return state.concat(action.expense) 
            action.expense
        ];
        
        case 'REMOVE_EXPENSE': 
            return [
                ...state.filter((element)=> element.id != action.id)
            ];

        case 'EDIT_EXPENSE':
             return state.map((expense)=> {
                if(expense.id === action.id) {
                    return { 
                        ...expense,
                        ...action.update
                    };
                }
                else 
                return expense;
            });
        
            
        

        default: return state;

    };
};


const filtersReducer = (state = filterReducerDefaultState, action) => {

    switch(action.type) {

        case "SETUP_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT" :
            return{
                ...state,
                sortBy: "amount"
            };
        
        case "SORT_BY_DATE" :
            return{
                ...state,
                sortBy: "date"
            };

        case "SET_START_DATE" :
            return {
                ...state,
                startDate: action.date
                
            };

        case "SET_END_DATE" :
            return {
                ...state,
                endDate: action.date
            };

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

    const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const lowerCaseText = text.toLowerCase();
            const lowerCaseDescription = expense.description.toLowerCase();
            const textMatch= typeof text !== 'string' || lowerCaseDescription.includes(lowerCaseText);

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b) =>{
            if(sortBy === 'date')
            return ( a.createdAt > b.createdAt ? -1:1 );

            return (a.amount > b.amount ? -1:1);
        });
    };
    

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
   console.log(visibleExpenses);

});





const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 130}));
store.dispatch(addExpense({ description: 'coffee rent', amount: 20, createdAt: 300}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id,{amount: 5000}));
//  store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//    store.dispatch(setStartDate(125));
//    store.dispatch(setEndDate(200));
  //  store.dispatch(setupTextFilter('rent'));



