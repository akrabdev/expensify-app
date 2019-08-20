import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter state', () =>{
   const state = filtersReducer(undefined,{type: "@@INT"});
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   });
});

test('should setup sortBy to amount', () => {
    const currentState = {
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sortBy: 'date'
    };
    const state = filtersReducer(currentState, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to amount', () => {
    const currentState = {
        text: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        sortBy: 'amount'
    };
    const state = filtersReducer(currentState, {type: "SORT_BY_DATE"});
    expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
    const state = filtersReducer(undefined, {type: "SETUP_TEXT_FILTER", text: 'rent'});
    expect(state.text).toBe('rent');
});

test('should setup startDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should setup endDate', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(0).add('30','years')});
    expect(state.endDate).toEqual(moment(0).add('30','years'));
});