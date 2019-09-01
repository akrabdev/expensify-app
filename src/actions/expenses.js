import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../tests/fixtures/expenses';

export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
    });

export const startAddExpense = (expenseData = {}) => {
    
    return (dispatch) => { 
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });


      
    };

}; 
export const removeExpense = ({id}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });
    
export const editExpense = (id, update) => ({
        type: 'EDIT_EXPENSE',
        id,
        update
    });

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpense = () => {
    return (dispatch) => {
        
        return database.ref('expenses').once('value').then((snapshot) => {
            const expensesArr = [];
            snapshot.forEach((childSnapshot) => {
                expensesArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
        dispatch(setExpenses(expensesArr));

        });
    };
}

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

export const startEditExpense = (id, updates) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id,updates));
        });
    };
};