import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',() =>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        id: '123abc',
        type: 'REMOVE_EXPENSE'
        
    });
});


test('should setup edit expense action object', () => {
    const action = editExpense('123abc',{description: 'description test', amount: '123456', createdAt: '1/1/2019'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: {
            description: 'description test',
            amount: '123456',
            createdAt: '1/1/2019'
        }
    });
});

test('should setup add expense action with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
});

test('should setup add expense action with passed values', () => {
    const expObj = {description: 'rent', amount: 12000, createdAt: 50, note: '12 street' };
    const action = addExpense(expObj);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {

        ...expObj,
        id: expect.any(String)
        }
    });

});