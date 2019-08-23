import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/expenseListFilters';
import filters from '../fixtures/filters';
import moment from 'moment';
let wrapper, setupTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount ;

beforeEach(() => {
    
    setupTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters={filters[0]}
            setupTextFilter={setupTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />
    );
});

test('should render ExpenseListFilter correctly ', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter correctly with alt data', () => {
    wrapper.setProps({
        filters: filters[1]
    });

    expect(wrapper).toMatchSnapshot();
});

test('should handle onTextChange', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
        
    });
    expect(setupTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortByDate', () => {
    wrapper.setProps({
        filters: filters[1]
    });
    const value = 'date';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sortByAmount', () => {
    
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date chagnes', () => {
    const startDate = moment().add('2', 'years');
    const endDate = moment().add('4', 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

