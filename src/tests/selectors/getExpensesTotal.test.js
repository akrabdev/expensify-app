import getExpensesTotal from '../../selectors/getExpensesTotal';
import moment from 'moment';
const array =[{
    id: '1',
    description: 'coffee',
    amount: 1,
    createdAt: moment(0).valueOf(),
    note: ''
}, {
    id: '2',
    description: 'rent',
    amount: 2,
    createdAt: moment(0).add('4', 'days').valueOf(),
    note: ''
}, {
    id: '3',
    description: 'car maintanence',
    amount: 3,
    createdAt: moment(0).subtract('4', 'days').valueOf(),
    note: 'next checkup on 19/2/2020'
}];

test('should output sum of expeses amount given perfect input', () => {
    const result = getExpensesTotal(array);
    expect(result).toBe(6);

});


test('should output zero for empty array', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should output correct sum for one element array', () => {
    const result = getExpensesTotal([{
        id: '1',
        description: 'coffee',
        amount: 1,
        createdAt: moment(0).valueOf(),
        note: ''
    }]);
    expect(result).toBe(1);
});
