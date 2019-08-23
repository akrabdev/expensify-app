import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseEditPage } from '../../components/ExpenseEditPage';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <ExpenseEditPage 
         Expense={expenses[1]} 
         removeExpense={removeExpense} 
         editExpense={editExpense} 
         history={history} 
        />
    );


});

test('should render ExpenseEditPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);

});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})
})