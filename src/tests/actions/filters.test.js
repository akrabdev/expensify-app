import {setupTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should setup textfilter action object passed values', () => {
    const action = setupTextFilter('rent');
    expect(action).toEqual({
        type: 'SETUP_TEXT_FILTER',
        text: 'rent'
    });
});

test('should setup textfilter action object default values', () => {
    const action = setupTextFilter();
    expect(action).toEqual({
        type: "SETUP_TEXT_FILTER",
        text: ''                    
    });
});

test('should setup startDate filter action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should setup endDate filter action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should setup sortByDate filter action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup sortByAmount filter action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});




