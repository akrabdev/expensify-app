import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should setup intial state', () => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});


test('should setup adding expense', () => {
    const newExpense = { id: '1', description: 'coffee', amount: 1000, createdAt: 20, note: ''};
    const state = expensesReducer(undefined,{type: "ADD_EXPENSE", expense: newExpense });
    expect(state).toEqual([{id: '1', description: 'coffee', amount: 1000, createdAt: 20, note: ''}]);

});

test('should edit expense by passing id', () => {
    const state = expensesReducer(expenses,{type: 'EDIT_EXPENSE', id: '1', update: {description: 'new rent'}});
    expect(state[0].description).toBe('new rent');
});


test('should remove expense by passing valid id', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '1'});
    expect(state).toEqual([expenses[1],expenses[2]]);
});

test('should unchange stage by passing invalid id', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '9ab'});
    expect(state).toEqual([...expenses]);
});

test('should not edit any expense by passing invalid id', () => {
    const state = expensesReducer(expenses,{type: 'EDIT_EXPENSE', id: '-1', update: {description: 'new rent'}});
    expect(state).toEqual(expenses);
});