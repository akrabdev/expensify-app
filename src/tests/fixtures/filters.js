import moment from 'moment';
export default  [
    {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 

    },
    {
        text: 'rent',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
];