import moment from 'moment';

const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const momentCreatedAt = moment(expense.createdAt);
        const lowerCaseText = text.toLowerCase();
        const lowerCaseDescription = expense.description.toLowerCase();
     
        const textMatch= typeof text !== 'string' || lowerCaseDescription.includes(lowerCaseText);
        const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt,'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt, 'day'):true;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date')
        return ( a.createdAt > b.createdAt ? -1:1 );

        return (a.amount > b.amount ? -1:1);
    });
};

export default getVisibleExpenses;