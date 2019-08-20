import moment from 'moment';
export default  [{
    id: '1',
    description: 'coffee',
    amount: 1500,
    createdAt: moment(0),
    note: ''
}, {
    id: '2',
    description: 'rent',
    amount: 75000,
    createdAt: moment(0).add('4', 'days').valueOf(),
    note: ''
}, {
    id: '3',
    description: 'car maintanence',
    amount: 90000,
    createdAt: moment(0).subtract('4', 'days').valueOf(),
    note: 'next checkup on 19/2/2020'
}];